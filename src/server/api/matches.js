import express from 'express';

const matches = express.Router();

matches.use('/all',
    (req, res) => {
        res.json([]);
    }
);

export default matches;
