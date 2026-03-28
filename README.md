# projeto-formulario-back

Backend da Aplicação formulário web com PWA, construído com **Express**, **Supabase** e **Nodemailer**. Pronto para deploy no **Render**.

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
npm run dev
```

## Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout (autenticado)
- POST /api/form (autenticado)
- GET  /api/form (autenticado)
- GET  /health

## Supabase - Tabela necessária

```sql
create table formularios (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  nome text,
  email text,
  mensagem text,
  created_at timestamptz default now()
);
```

## Deploy no Render

- Build command: npm install
- Start command: npm start
- Adicione as variáveis de ambiente no painel do Render
