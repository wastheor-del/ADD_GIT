import React from "react";
import { useRecoilState } from 'recoil';
import { filterState } from "../atoms/filterAtom";

export function TodoFilters() {
    const [filter, setFilter] = useRecoilState(filterState);

    return(
        <div className="filter_container">
            {['Todas', 'Pendentes', 'Concluídas'].map((filterType) =>(
                <button
                    key={filterType}
                    className={filter === filterType ? 'active' : ''}
                    onClick={() => setFilter(filterType)}
                >
                    {filterType}
                </button>
            ))}

        </div>
    );
}

