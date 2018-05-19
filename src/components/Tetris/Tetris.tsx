import * as React from 'react';
import './Tetris.css';


interface ITetrisProps {
    state?: any,
    children?: any
}

export const Tetris: React.SFC<ITetrisProps> = (props) => {
    return (
        <div className="Tetris">
            Hello World!
        </div>
    )
}

export default Tetris;