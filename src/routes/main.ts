import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400).json({ error: 'Email already exists.' });
    }
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'Olive', email: 'olive.smith@exemple.com'},
        { name: 'Adam', email: 'adam.carlsen@exemple.com'},
        { name: 'Anh', email: 'anh.pham@exemple.com'},
        { name: 'Holden', email: 'holden.rodriguez@exemple.com'}
    ])
    if (result) {
    res.status(201).json({ ok: true })
    } else {
        res.status(400).json({ error: 'Error creating users.' })
    }
})