import { Router } from 'express';
import { User } from './models/User';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: '/api' });
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  console.log('users->', users);
  console.log('type users->', typeof users);
  res.json({ users })
});

router.get('/users/:id', (req, res) => {
  return User.findOne(req.params.id);
});

export default router;
