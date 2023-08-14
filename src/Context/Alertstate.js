import { useState } from "react";
import Alertcontext from "./Alertcontext";
const Alertstate = (props) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (Message, type) => {
        setAlert({
            msg: Message,
            type: type
        }
        )
        setTimeout(() => {
            setAlert(null);
        }, 1200);
    }
    return (
        <Alertcontext.Provider value={{ alert, showAlert }}>
            {props.children}
        </Alertcontext.Provider>
    )
}
export default Alertstate;