import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {

    const [isExpand,setIsExpend] = React.useState(false);

    const [note,setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event)
    {
        const {name,value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
 
    function submit(event)
    {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }
    function expand()
    {
        setIsExpend(true);
    }
    return (
    <div>
      <form className="create-note">
        {isExpand && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea name="content" onChange={handleChange} onClick={expand} value={note.content}placeholder="Take a note..." rows={isExpand ? 3 : 1} />
       <Zoom in={isExpand}><Fab onClick={submit}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
