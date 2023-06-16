import React from 'react';
import classes from './Angles.module.css';

const CellItem = (props) => {
    const refName = React.useRef(null);

    const onChangeFunction = (event) => {
        props.store.changeNumber(event.currentTarget.value, props.path);
    }

    return <input onChange={onChangeFunction}
        ref={refName}
        className={classes.degreeInput}
        title={props.title}
        type="number"
        value={props.value}
        path={props.path}
        disabled={props.block}
    />
}

const AngleCell = (props) => {
    return props.angle.map(cellItem => <CellItem title={cellItem.title} value={cellItem.value} path={cellItem.path} store={props.store} block={cellItem.block}/>)
}

const CheckBox = (props) => {
    const refAngleA = React.createRef();
    const inputToSwitchOne = props.angle[0].path
    const inputToSwitchTwo = props.angle[1].path
    const inputToSwitchThree = props.angle[2].path
    const checkboxSwitch = () => {
        props.store.switchBlock(inputToSwitchOne)
        props.store.switchBlock(inputToSwitchTwo)
        props.store.switchBlock(inputToSwitchThree)
    }
    return <input type='checkbox' ref={refAngleA} onChange={checkboxSwitch} checked={!props.angle[0].block}/>
}

const wholeComp = (props) => {
    return <div>
        <AngleCell store={props.store} angle={props.angle} />
        <CheckBox store={props.store} angle={props.angle} />
    </div>
}

export default wholeComp;