import React, { useContext } from 'react';
import Alertcontext from '../Context/Alertcontext';

const NoteItem = (props) => {
    const { note } = props;
    const alertcontext = useContext(Alertcontext);

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
                                onClick={() => alertcontext.showAlert("Deleted", "danger")}
                            ></i>
                        </div>
                        <div>
                            <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => alertcontext.showAlert("Edited", "success")}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;