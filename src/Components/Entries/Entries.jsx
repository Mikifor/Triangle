import React from 'react';
import classes from './Entries.module.css';
import Angles from './Angles/Angles'
import Sides from './Sides/Sides'


const Entries = (props) => {

    let onClickFunction = () => {
        props.store.mainButton();
    }

    return <div>
        <div><img alt="Сферический треугольник" src="https://studme.org/htm/img/33/5881/81.png" title="Сферический треугольник" width="200" /></div>
        <div className={classes.Inputs}>
            <Sides store={props.store} />
            <Angles store={props.store} />
        </div>
        <input title="Просто кнопка" type="button" defaultValue="Кнопка" onClick={onClickFunction} />
    </div>
};

export default Entries;