import { IReduxAction } from '../actions'

interface IGridState {
    grid: string[]
}


const initialState: IGridState = {
    grid: [
        '       ',
        '       ',
        '       ',
        '       '
    ]
}


export function tetrisApp(state: IGridState = initialState, action: IReduxAction): IGridState {
    return state;
}

export default tetrisApp;