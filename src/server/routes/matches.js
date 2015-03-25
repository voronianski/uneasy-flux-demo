import express from 'express';

const matches = express.Router();

matches.use('/',
    (req, res, next) => {
        console.log('get special data for matches to flux');
        next();
    }
);

export default matches;
