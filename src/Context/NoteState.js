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
            "password": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767978",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "password": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767978",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "password": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767978",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "password": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
        {
            "_id": "64d25cb5e5cec1497b767978",
            "user": "64d21d15c7fceaf460fb6f51",
            "title": "7am",
            "description": "wake up early",
            "tag": "personal",
            "password": "2023-08-08T15:18:13.474Z",
            "__v": 0
        },
    ]
    const [notes, setnotes] = useState(notesInitial);

    return (
        <noteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;