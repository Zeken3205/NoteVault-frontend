import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/Notecontext'
import NoteItem from './NoteItem';
import Addnote from './Addnote';
function Notes() {
    const context = useContext(noteContext)
    const { notes, getNotes, editnote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const updatenote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }



    const ref = useRef(null);
    const refClose = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        editnote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Addnote />
            <div className="row my-3">


                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription " value={note.edescription} name="edescription" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" value={note.etag} className="form-control" id="etag" name="etag" onChange={onChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updatenote={updatenote} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes
