import { Router } from "express";

import { createNote } from "./note.service.js";


const router = Router()



router.post('/', async (req, res) => {

    let data = await createNote(req.body)

    res.json(data)

})





export default router