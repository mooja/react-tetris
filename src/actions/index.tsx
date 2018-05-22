type ActionType = 'TICK' | 'ADD_FIGURE' | 'MOVE_FIGURE';
type FigureType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';


export interface IReduxAction {
    type: ActionType
    text?: string,
    figure?: FigureType,
}

export function addFigure(figure: FigureType = 'I') {
    const type: ActionType = 'ADD_FIGURE';
    return { type, figure }
}

export function GameTick(): IReduxAction {
    return { type: 'TICK' }
}