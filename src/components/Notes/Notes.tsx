import Note from "./Note";
import React, {useState} from "react";
import CreateArea from "../CreateArea/CreateArea";

export  const Notes = ()=>{
    const [notes, setNotes] = useState([]);
    const [bgColor, setBgColor] = useState('');

    function addNote(newNote: any) {
        // @ts-ignore
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id: number) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <>
            <CreateArea onAdd={addNote} onCurrentColorChange={setBgColor}/>
            {notes.map((noteItem:{title:'',content:''}, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                        bgColor={bgColor}

                    />
                );
            })}
        </>
    )
}