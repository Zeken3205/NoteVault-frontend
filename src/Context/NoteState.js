import { useState } from "react";
import noteContext from "./Notecontext";
const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial);
    //get all notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setnotes(json)
    }

    //add a note
    const addnote = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);
        //Front end addition
        const note = {
            "_id": `${json._id}`,
            "title": title,
            "description": description,
            "tag": tag,
        }
        setnotes(notes.concat(note))
    }
    //delete a note
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify(),
        });
        const json = await response.json();
        console.log(json);

        //Front end deletion
        //console.log("Deleting node with id" + id)
        const newnode = notes.filter((note) => { return note._id !== id })
        setnotes(newnode)
    }
    //edit a note
    const editnote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const json = response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        //Front end updation
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setnotes(newNotes);
    }
    return (
        <noteContext.Provider value={{ notes, addnote, deletenote, editnote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;