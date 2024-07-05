import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {notesType} from "../../type/KeepTypes";



export const Note = (props:notesType)=> {
    const [noteBgColor] = useState(props.bgColor);

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note" style={{backgroundColor:`${noteBgColor}`}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
