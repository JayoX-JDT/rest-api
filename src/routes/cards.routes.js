import {Router} from 'express';
import {pool} from '../db.js';

const router = Router();

router.get('/cards', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cards')
    res.json(rows);
})
router.get('/cards/id=:id', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cards WHERE id = ?', [req.params.id])
    if (rows.length === 0) return res.status(404.).json(["Error, card not found"]);
    res.json(rows[0]);
})

router.post('/cards', async (req, res) => {
   const {owner, salary} = req.body
   const [rows] = await pool.query('INSERT INTO cards (salary, owner) VALUES (?, ?)', [salary, owner]) 
   
   res.send({
   id: rows.insertId,
   owner,
   salary,
   })
})

router.delete('/cards/id=:id', async (req, res) => {
    const result = await pool.query('DELETE FROM cards WHERE id = ?', [req.params.id])
    res.status(204)

})

router.put('/cards', (req, res) => {
    res.send("Cards");
})

export default router