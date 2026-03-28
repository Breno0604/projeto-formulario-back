# projeto-formulario-back

Backend da Aplicação formulário web com PWA, construído com **Express**, **Supabase** e **Nodemailer**. Deploy no **Render**.

## Estrutura

```
src/
├── config/
│   ├── supabase.js
│   └── mailer.js
├── controllers/
│   ├── auth.controller.js
│   └── form.controller.js
├── middlewares/
│   ├── authenticate.js
│   └── errorHandler.js
├── routes/
│   ├── auth.routes.js
│   └── form.routes.js
├── services/
│   ├── auth.service.js
│   └── form.service.js
└── index.js
```

## Rodando localmente

```bash
npm install
cp .env.example .env
# Preencha o .env com suas credenciais
npm run dev
```

## Endpoints

| Método | Rota | Auth | Descrição |
|--------|------|------|-----------|
| GET | /health | ❌ | Status da API |
| POST | /api/auth/register | ❌ | Cadastro |
| POST | /api/auth/login | ❌ | Login |
| POST | /api/auth/logout | ✅ | Logout |
| POST | /api/form | ✅ | Enviar formulário |
| GET  | /api/form | ✅ | Listar formulários |

## Supabase

- **Projeto:** https://llgaplcmkszofndobupn.supabase.co
- **Região:** sa-east-1 (São Paulo)
- A tabela `formularios` já foi criada com RLS ativo.

## Deploy no Render

- **Build command:** `npm install`
- **Start command:** `npm start`
- Adicione as variáveis de ambiente do `.env.example` no painel do Render
