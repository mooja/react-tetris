import { FigureType, 
         IReduxAction } 
        from '../actions'

interface IFigureState {
    x: number,
    y: number
    type: FigureType,
}

export interface IGridState {
    figurePos: IFigureState,
    grid: string
}

const initialState: IGridState = {
    figurePos: {x: 0, y: 5, type: 'I'},
    grid: ' '
        .repeat(10)
        .repeat(20)
}


export function tetrisApp(state: IGridState = initialState, action: IReduxAction): IGridState {
    switch(action.type) {
        case 'ADD_FIGURE':  
            const newFigure: IFigureState = { x: 0, y: 5, type: 'I' };
            return { 
                ...state,
                figurePos: newFigure
            };
        case 'MOVE_FIGURE':
            const newFigurePos: IFigureState = { ...state.figurePos }
            switch (action.direction) {
                case 'DOWN': 
                    newFigurePos.x += 1;
                    break;
                case 'LEFT':
                    newFigurePos.y -= 1;
                    break;
                case 'RIGHT':
                    newFigurePos.y += 1;
                    break;
            }
            return {
                ...state,
                figurePos: newFigurePos
            }
        default:
            return state;
    }
}

export default tetrisApp;