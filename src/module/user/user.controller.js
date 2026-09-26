import {Router} from "express" ;
import {   createUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser
 } from "./user.service.js";


const router = Router()




router.post ('/sign-up', async(req, res) => {

let data = await createUser( req.body)
res.json(data)
})

router.post('/login', async (req , res) =>{

let data = await loginUser(req.body)
res.json(data)

})

router.patch('/update-user', async (req, res) => {

    let data = await updateUser(req.params.id, req.body)

    res.json(data)

})
router.delete('/delete-user', async (req, res) => {

    let data = await deleteUser(req.query.id)

    res.json(data)

})
 
// get user
router.get('/get-user', async (req, res) => {

    let data = await getUser(req.query.id)

    res.json(data)

})





export default router