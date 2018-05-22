type ActionType = 'TICK' | 'TOCK' | 'ADD_FIGURE';

type FigureType = 'line' | 'block';


export interface IReduxAction {
    type: ActionType
    text?: string,
    figure?: FigureType,
}

export function addFigure(figure: FigureType = 'line') {
    const type: ActionType = 'ADD_FIGURE';
    return { type, figure }
}

export function GameTick(): IReduxAction {
    return { type: 'TICK' }
}