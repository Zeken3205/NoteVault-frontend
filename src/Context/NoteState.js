import noteContext from "./Notecontext";
const NoteState = (props) => {
    const state = {
        "name": "Sahil",
        "age": "20"
    }

    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;