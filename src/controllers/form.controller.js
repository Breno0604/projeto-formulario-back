import * as formService from '../services/form.service.js';

export async function submitForm(req, res, next) {
  try {
    const formData = req.body;
    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).json({ error: 'Dados do formulário não fornecidos.' });
    }
    const saved = await formService.saveForm(req.user.id, formData);
    res.status(201).json({ message: 'Formulário enviado com sucesso.', data: saved });
  } catch (err) {
    next(err);
  }
}

export async function listForms(req, res, next) {
  try {
    const forms = await formService.getUserForms(req.user.id);
    res.json({ data: forms });
  } catch (err) {
    next(err);
  }
}
