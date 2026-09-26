import { userModel } from '../../database/model/user.model.js'

// logic



export const createUser = async (data) => {

    let { name, email, age, phone, password } = data

    // check existed or not
    let existedUser = await userModel.findOne({ email })

    if (existedUser) {
        return {
            message: "user already exists"
        }
    } else {

        let addedUser = await userModel.create({
            name,
            email,
            age,
            phone,
            password
        })

        return {
            message: 'user added',
            data: addedUser
        }
    }
}

export const loginUser = async(data) => {

let {email, password} = data

let user = await userModel.findOne({email , password})
if(!user){

    return {message: "Invalid email or password"}
}else
    return{ message:"login succesfully", data: user}


}

export const updateUser = async(id , data) =>{
    let { name, email, age, phone } = data

    let user = await userModel.findById(id)

    if(!user){
        return {message: "User not found"}
    }
    if (email && email !== user.email) {

        let existedEmail = await userModel.findOne({ email })

        if (existedEmail) {

            return {
                message: "Email already exists"
            }

        }
    }

    let updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
            name,
            email,
            age,
            phone
        },
        { new: true }
    )

    return {
        message: "User updated",
        data: updatedUser
    }
}


export const deleteUser = async (id) => {

    let user = await userModel.findByIdAndDelete(id)

    if (!user) {

        return {
            message: "User not found"
        }

    }

    return {
        message: "User deleted"
    }
}


export const getUser = async (id) => {

    let user = await userModel.findById(id)

    if (!user) {

        return {
            message: "User not found"
        }

    }

    return user
}