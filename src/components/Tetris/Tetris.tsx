import * as React from 'react';
import './Tetris.css';

import { connect } from 'react-redux';
import { IGridState } from '../../reducers'


interface ITetrisProps {
    state?: any,
    children?: any
    grid?: any
}

const mapStateToProps = (state: IGridState) => {
    return {
        grid: state.grid
    }
}

export const Tetris: React.SFC<ITetrisProps> = (props) => {
    const cells: any[] = props.grid
        .split('')
        .map((ch: string) => 
            ch ===  ' ' 
                ? <div className="block empty-block"/>
                : <div className="block full-block"/>
        );
    
    return (
        <div className="Tetris">
        { cells }
        </div>
    )
}

export default connect(mapStateToProps)(Tetris);