import express from 'express';
import matches from './matches';

const router = express.Router();

router.use('/matches', matches);

export default router;
