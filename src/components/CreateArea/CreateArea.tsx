import React, {ChangeEvent, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import {Checkbox, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import ListView from "../ListNotes/ListView";

type CreateAreaType={
    onAdd:(note:{})=>void;
    onCurrentColorChange:(color:string)=>void;
}

function CreateArea(props: CreateAreaType) {
    const [isExpanded , setExpanded] = useState(false);
    const [showColorPalette, setShowColorPalette] = React.useState(false);
    const [currentColor, setCurrentColor] = useState('#fff');
    const [listView, setListView] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event: React.MouseEvent<SVGSVGElement>) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    function expand(){
        setExpanded(true);
    }

    const handleListView = ()=>{
        expand();
        setListView(true);
    }

    const changeColor = ()=>{
        setShowColorPalette(true);
        //show different view of create area
    }

    const handleColorChange = (e:SelectChangeEvent)=>{
        setCurrentColor(e.target.value as string);
        props.onCurrentColorChange(e.target.value as string);
        setShowColorPalette(false);
    }


    return (
        <div>
            <form className="create-note" style={{backgroundColor:`${currentColor}`}} onSubmit={(e)=>{e.preventDefault()}}>
                {isExpanded ? <input
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    value={note.title}
                    style={{backgroundColor:`${currentColor}`}}
                /> : null}
                {!listView ? <textarea
                    onClick={expand}
                    name="content" //@ts-ignore
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content}
                    style={{backgroundColor: `${currentColor}`}}
                /> : <ListView bgColor={currentColor}/>}
                {!isExpanded && <Checkbox
                    checked={true}
                    onClick={handleListView}
                    inputProps={{'aria-label': 'controlled'}}
                />}
                <PaletteIcon onClick={changeColor}/>

                <Zoom in={isExpanded}>
                     <AddIcon onClick={(event)=>submitNote(event)}/>
                </Zoom>
                {showColorPalette && <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentColor}
                    label="Age"
                    onChange={handleColorChange}
                >
                    <MenuItem value={'peachpuff'}>Peach</MenuItem>
                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                </Select>
                }
            </form>
        </div>
    );
}

export default CreateArea;
