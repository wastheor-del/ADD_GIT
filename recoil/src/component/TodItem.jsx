import React from "react";
import { useRecoilState } from 'recoil';
import { listState } from "../atoms/listAtom";

export function TodoItem({ item }){
    const [todoItem, setItem] = useRecoilState(listState);

    const toggleItenCompletion = () => {
        const newItem = todoItem.map((todo) =>
            todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        setItem(newItem);
    };

    const deleteItem = () =>{
        const newItem = todoItem.filter((todo) => todo.id !== item.id);
        setItem(newItem);
    };

    return(
        <div className={`todo_item ${item.isComplete ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItenCompletion}
            />
            <span>{item.text}</span>
            <button onClick={deleteItem} className="delete_btn">
                Excluir
            </button>
        </div>
    );
}

