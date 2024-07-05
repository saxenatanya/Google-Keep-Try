export type notesType ={
    key:number;
    id:number;
    title:string;
    content:string;
    onDelete:(id:number| never)=>void;
    onBgColorChange?:(color:string)=>void; // for color movement
    bgColor?:string;
}

export type ToDoItemTypes = {
    key:number;
    id:number;
    text:string
    onChecked:(id:number)=>void
}
export type SingleNoteType = {
    title: string;
    content: string;

}
export type ListViewType= {
    bgColor:string;
    note?:SingleNoteType[];
}

// CONTEXT TYPES

export type KeepContextType={}
export type IKeep={}