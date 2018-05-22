import { IReduxAction } from '../actions'

export interface IGridState {
    grid: string
}

const initialState: IGridState = {
    grid: ' '
        .repeat(10)
        .repeat(20)
}


export function tetrisApp(state: IGridState = initialState, action: IReduxAction): IGridState {
    switch(action.type) {
        case 'ADD_FIGURE':  
            const a = '   ####   ';
            const newGrid = a + state.grid.slice(10);
            return { grid: newGrid };
        default:
            return state;
    }
}

export default tetrisApp;