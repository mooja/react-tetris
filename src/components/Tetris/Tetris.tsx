import * as React from 'react';
import './Tetris.css';

import { connect } from 'react-redux';
import { IGridState } from '../../reducers'


const mapStateToProps = (state: IGridState) => {
    return {
        gridState: state
    }
}

function projectFigureToGrid(gridState: IGridState): string {
    const { x, y } = gridState.figurePos;
    const MutableGrid: string[] = gridState.grid.split('');
    for (let i=0; i < 4; i++) {
        MutableGrid[x*10 + y+i] = '#'
    }
    return MutableGrid.join('');
}


interface ITetrisProps {
    gridState: IGridState
    children?: any
}

export const Tetris: React.SFC<ITetrisProps> = (props) => {
    const projectedGrid = projectFigureToGrid(props.gridState);
    const cells: any[] = projectedGrid
        .split('')
        .map((ch, index) => 
            ch ===  ' ' 
                ? <div key={index} className="block empty-block"/>
                : <div key={index} className="block full-block"/>
        );
    
    return (
        <div className="Tetris"> 
            { cells } 
        </div>
    );
}

export default connect(mapStateToProps)(Tetris);