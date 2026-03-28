import * as authService from '../services/auth.service.js';

export async function registerController(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }
    const user = await authService.register(email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso.', user });
  } catch (err) {
    next(err);
  }
}

export async function loginController(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }
    const data = await authService.login(email, password);
    res.json({ message: 'Login realizado com sucesso.', ...data });
  } catch (err) {
    next(err);
  }
}

export async function logoutController(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    await authService.logout(token);
    res.json({ message: 'Logout realizado com sucesso.' });
  } catch (err) {
    next(err);
  }
}
