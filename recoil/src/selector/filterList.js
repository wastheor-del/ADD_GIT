import { selector } from 'recoil';
import { listState } from '../atoms/listAtom';
import { filterState } from '../atoms/filterAtom';

export const filterListState = selector({
    key: 'filterListState',
    get: ({ get }) => {
        const filter = get(filterState);
        const list = get(listState);


        switch (filter){
            case 'Concluídas':
                return list.filter((item) => item.isComplete);
            case 'Pendentes':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

