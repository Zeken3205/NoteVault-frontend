import React, { useContext } from 'react';
import Alertcontext from '../Context/Alertcontext';
import noteContext from '../Context/Notecontext'
const NoteItem = (props) => {
    const { note, updatenote } = props;
    const alertcontext = useContext(Alertcontext);
    const context = useContext(noteContext)
    const { deletenote } = context;
    const HandleDelete = () => {
        alertcontext.showAlert("Deleted", "danger");
        deletenote(note._id);
    }
    // const HandleEdit = () => {
    //     alertcontext.showAlert("Edited", "success");
    //     updatenote(note);
    // }
    return (
        <div className='col-md-3'>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <i
                                className="fa-solid fa-trash"
                                onClick={HandleDelete}
                            ></i>
                        </div>
                        <div>
                            <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => { updatenote(note) }}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;