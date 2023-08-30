import {Router} from 'express';
import {pool} from '../db.js';

const router = Router()
router.get('/', async (req, res) => {
    const [result] = await pool.query('SELECT 1+1 AS online')
    res.json(result[0]);
    console.log(result);
})
export default router