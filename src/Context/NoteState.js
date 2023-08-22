import { useState } from "react";
import noteContext from "./Notecontext";
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64d25cb5e5cec1497b767978",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767979",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767971",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767970",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767972",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
    ]
    const [notes, setnotes] = useState(notesInitial);
    //add a note
    const addnote = (title, description, tag) => {
        const note = {
            "_id": "64d25cb5e5cec149867b767972",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-08-08T15:18:13.474Z",
            "__v": 0
        }
        setnotes(notes.concat(note))
    }
    //delete a note
    const deletenote = (id) => {
        console.log("Deleting node with id" + id)
        const newnode = notes.filter((note) => { return note._id !== id })
        setnotes(newnode)
    }
    //edit a note
    const editnote = (id, title, description, tag) => {
        for (let index = 0; index < notes.length; index++) {
            const element = array[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }

    }
    return (
        <noteContext.Provider value={{ notes, addnote, deletenote, editnote }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;