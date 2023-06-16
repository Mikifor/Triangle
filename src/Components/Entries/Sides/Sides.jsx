import React from 'react';
import classes from './Sides.module.css';
import SideCell from './SideCell';

const Sides = (props) => {

    return <div className={classes.Sides}>
        <div>
            <SideCell side={props.store._state.Sides[0]} store={props.store} />
            Сторона a
        </div>
        <div>
            <SideCell side={props.store._state.Sides[1]} store={props.store} />
            Сторона b
        </div>
        <div>
            <SideCell side={props.store._state.Sides[2]} store={props.store} />
            Сторона c
        </div>
    </div>


};

export default Sides;