import React from 'react';
import classes from './Sides.module.css';

const CellItem = (props) => {
    const refName = React.useRef(null);

    const onChangeFunction = (event) => {
        props.store.changeNumber(event.currentTarget.value, props.path)
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

const SideCell = (props) => {
    return props.side.map(cellItem => <CellItem title={cellItem.title} value={cellItem.value} path={cellItem.path} store={props.store} block={cellItem.block} />)
}

const CheckBox = (props) => {
    const refSideA = React.createRef();
    const inputToSwitchOne = props.side[0].path
    const inputToSwitchTwo = props.side[1].path
    const inputToSwitchThree = props.side[2].path
    const checkboxSwitch = () => {
        props.store.switchBlock(inputToSwitchOne)
        props.store.switchBlock(inputToSwitchTwo)
        props.store.switchBlock(inputToSwitchThree)
    }
    return <input type='checkbox' ref={refSideA} onChange={checkboxSwitch} checked={!props.side[0].block}/>
}

const wholeComp = (props) => {
    return <div>
        <SideCell store={props.store} side={props.side} />
        <CheckBox store={props.store} side={props.side} />
    </div>
}

export default wholeComp;    