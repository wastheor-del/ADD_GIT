import React from "react";
import { RecoilRoot, useRecoilValue } from 'recoil';
import { filterListState } from "./selector/filterList";
import { ItemCreator } from "./component/TodCreator";
import { TodoItem } from "./component/TodItem";
import { TodoFilters } from "./component/TodFilters";
import './index.css';

function TodoMain(){
    const tdList = useRecoilValue(filterListState);

    return(
        <div className="app_container">
            <h1>Minhas Tarefas</h1>
            <ItemCreator />
            <TodoFilters />
            <div className="todo_list">
                {tdList.length === 0 ? (
                    <p className="empty_msg">Nenhuma tarefa encontrada</p>
                ) : 
                (
                    tdList.map((todo) => <TodoItem key={todo.id} item={todo} />)
                )}
            </div>
        </div>
    );

}

export default function App(){
    return(
        <RecoilRoot>
            <TodoMain/>
        </RecoilRoot>
    );
}

