import { supabase } from '../config/supabase.js';
import { transporter } from '../config/mailer.js';

export async function saveForm(userId, formData) {
  const { data, error } = await supabase
    .from('formularios')
    .insert({ user_id: userId, ...formData })
    .select()
    .single();

  if (error) throw { status: 500, message: error.message };

  await sendConfirmationEmail(formData.email, formData);

  return data;
}

export async function getUserForms(userId) {
  const { data, error } = await supabase
    .from('formularios')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw { status: 500, message: error.message };
  return data;
}

async function sendConfirmationEmail(to, formData) {
  await transporter.sendMail({
    from: `"Formulário App" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Formulário recebido com sucesso!',
    html: `
      <h2>Recebemos seu formulário!</h2>
      <p>Obrigado, <strong>${formData.nome || 'usuário'}</strong>.</p>
      <p>Seus dados foram salvos com sucesso.</p>
    `,
  });
}
