import { Router } from 'express';
import { User } from './models/User';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: '/api' });
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json({ users });
});

router.get('/users/:id', (req, res) => {
  return User.findOne(req.params.id);
});

export default router;
