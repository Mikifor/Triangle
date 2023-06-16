import React from 'react';
import classes from './Angles.module.css';
import AngleCell from './AngleCell';



const Angles = (props) => {

    return <div className={classes.Angles}>
        <div>
            <AngleCell angle={props.store._state.Angles[0]} store={props.store} />
            Угол A
        </div>
        <div>
            <AngleCell angle={props.store._state.Angles[1]} store={props.store} />
            Угол B
        </div>
        <div>
            <AngleCell angle={props.store._state.Angles[2]} store={props.store} />
            Угол C
        </div>
    </div>
};

export default Angles;