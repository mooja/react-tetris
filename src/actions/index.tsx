type ActionType = 
    'TICK' 
    | 'TOCK'

export interface IReduxAction {
    type: ActionType
    text?: string
}

export function GameTick(): IReduxAction {
    return { type: 'TICK' }
}