import React, { useContext } from 'react'
import noteContext from '../Context/Notecontext'
import NoteItem from './NoteItem';
import Addnote from './Addnote';
function Notes() {
    const context = useContext(noteContext)
    const { notes } = context;
    return (
        <>
            <Addnote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes
