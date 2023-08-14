import React, { useContext } from 'react'
import noteContext from '../Context/Notecontext'
import NoteItem from './NoteItem';
function Notes() {
    const context = useContext(noteContext)
    const { notes, setnotes } = context;
    return (
        <div className="row my-3">
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />;
            })}
        </div>
    )
}

export default Notes