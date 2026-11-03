import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { listState } from "../atoms/listAtom"; 


export function ItemCreator(){
    const [inputValue, setInputValue] = useState('');
    const setList = useSetRecoilState(listState);

    const addItem = (e) =>{
        e.preventDefault();
        if (!inputValue.trim()) return;

        setList((oldList) =>[
            ...oldList,
            {
                id: Date.now(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    return(
        <form onSubmit={addItem} className="todo_form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite uma nova tarefa..."
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}