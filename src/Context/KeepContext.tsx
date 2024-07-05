import React from "react";
import {IKeep, KeepContextType} from "../type/KeepTypes";


//CONTEXT NOT USED RIGHT NOW
export const TodoContext = React.createContext<KeepContextType | null>(null);
//@ts-ignore
export const KeepProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [todos, setTodos] = React.useState<IKeep[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'this is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'this is a description',
            status: true,
        },
    ]);
};