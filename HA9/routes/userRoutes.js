import express from 'express';
import { register, changePassword, deleteAccount, changeEmail } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

//регистрации пользователя
router.post('/register', register);

//сменa пароля
router.post('/change-password', authMiddleware, changePassword);

//удалениe аккаунта
router.post('/delete-account', authMiddleware, deleteAccount);

//изменениe email
router.post('/change-email', authMiddleware, changeEmail);

export default router;