import {noteModel} from '../../database/model/note.model.js'


//logic 7enaaaa


export const createNote = async (data) => {

    let {title , content , userId} = data 

    let addedNote = await noteModel.create({
        title,
        content,
        userId
    })
    return {
        message : "note create",
        data: addedNote
    }

}