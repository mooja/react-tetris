type ActionType = 'TICK' | 'ADD_FIGURE' | 'MOVE_FIGURE';
export type FigureType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';
type MoveDirection = 'DOWN' | 'LEFT' | 'RIGHT';


export interface IReduxAction {
    type: ActionType
    text?: string,
    figure?: FigureType,
    direction?: MoveDirection
}

export function addFigure(figure: FigureType = 'I'): IReduxAction {
    const type: ActionType = 'ADD_FIGURE';
    return { type, figure }
}

export function gameTick(): IReduxAction {
    return { type: 'TICK' }
}

export function moveFigure(direction: MoveDirection = "DOWN"): IReduxAction {
    const type: ActionType = 'MOVE_FIGURE';
    return { type, direction }
}