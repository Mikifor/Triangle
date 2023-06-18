let store = {
    _state: {
        Angles: [
            [
                { path: ["Angles", "0", "0"], value: "49", title: "Угол A, градусы", type: "Number", key: "100", block: true },
                { path: ["Angles", "0", "1"], value: "39", title: "Угол A, минуты", type: "Number", key: "110", block: true },
                { path: ["Angles", "0", "2"], value: "0", title: "Угол A, секунды", type: "Number", key: "120", block: true }],
            [
                { path: ["Angles", "1", "0"], value: "100", title: "Угол B, градусы", type: "Number", key: "101", block: true },
                { path: ["Angles", "1", "1"], value: "51", title: "Угол B, минуты", type: "Number", key: "111", block: true },
                { path: ["Angles", "1", "2"], value: "0", title: "Угол B, секунды", type: "Number", key: "121", block: true }],
            [
                { path: ["Angles", "2", "0"], value: "71", title: "Угол C, градусы", type: "Number", key: "102", block: true },
                { path: ["Angles", "2", "1"], value: "49", title: "Угол C, минуты", type: "Number", key: "112", block: true },
                { path: ["Angles", "2", "2"], value: "48", title: "Угол C, секунды", type: "Number", key: "122", block: true }],
        ],

        Sides: [
            [
                { path: ["Sides", "0", "0"], value: "50", title: "Сторона a, градусы", type: "Number", key: "200", block: true },
                { path: ["Sides", "0", "1"], value: "52", title: "Сторона a, минуты", type: "Number", key: "210", block: true },
                { path: ["Sides", "0", "2"], value: "48", title: "Сторона a, секунды", type: "Number", key: "220", block: true }],
            [
                { path: ["Sides", "1", "0"], value: "88", title: "Сторона b, градусы", type: "Number", key: "201", block: true },
                { path: ["Sides", "1", "1"], value: "55", title: "Сторона b, минуты", type: "Number", key: "211", block: true },
                { path: ["Sides", "1", "2"], value: "12", title: "Сторона b, секунды", type: "Number", key: "221", block: true }],
            [
                { path: ["Sides", "2", "0"], value: "75", title: "Сторона c, градусы", type: "Number", key: "202", block: true },
                { path: ["Sides", "2", "1"], value: "18", title: "Сторона c, минуты", type: "Number", key: "212", block: true },
                { path: ["Sides", "2", "2"], value: "0", title: "Сторона c, секунды", type: "Number", key: "222", block: true }],
        ]
    },


    getState() { return this._state },

    container() { },

    observer(props) {
        this.container = props;
    },

    mainButton() {
        if (this.checkboxCounter() === 3) { this.counts() } else { alert("Выберите три элемента треугольника для расчётов") }
    },

    checkboxCounter(props) {
        let i = 0;
        let checkboxCounter = 0;
        while (i < 3) {
            if (this._state.Angles[i][0].block === false) { checkboxCounter++ }
            if (this._state.Sides[i][0].block === false) { checkboxCounter++ }
            i++
        }
        return checkboxCounter;
    },

    changeNumber(newValue, path) {
        this._state[path[0]][path[1]][path[2]].value = newValue;
        this.container();
    },

    counts() {
        if (this._state.Angles[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Angles[2][0].block === false) { this.threeAngles() }
        if (this._state.Sides[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Sides[2][0].block === false) { this.threeSides() }
        if (this._state.Sides[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Angles[2][0].block === false) { this.sidePlusTwoAngles(0) }
        if (this._state.Angles[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Angles[2][0].block === false) { this.sidePlusTwoAngles(1) }
        if (this._state.Angles[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Sides[2][0].block === false) { this.sidePlusTwoAngles(2) }
        else {alert("Not OK")}
    },

    radians(itemPathOne, itemPathTwo, itemPathThree) {
        return (Number(this._state[itemPathOne[0]][itemPathOne[1]][itemPathOne[2]].value) +
            Number((this._state[itemPathTwo[0]][itemPathTwo[1]][itemPathTwo[2]].value / 60)) +
            Number((this._state[itemPathThree[0]][itemPathThree[1]][itemPathThree[2]].value / 3600))) / 180 * Math.PI;
    },

    degrees(rads) {
        const degrees = rads * 180 / Math.PI;
        const degree = Math.trunc(degrees);
        const minute = Math.trunc((degrees - degree) * 60);
        const second = (((degrees - degree) * 60) - minute) * 60;
        return ([degree + " градусов, " + minute + " минут, " + second + " секунд. "]);
    },

    threeSides() {
        let sideOneRad = this.radians(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path);
        let sideTwoRad = this.radians(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path);
        let sideThreeRad = this.radians(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path);

        let cosAngleOne = (Math.cos(sideOneRad) - (Math.cos(sideTwoRad) * Math.cos(sideThreeRad))) / (Math.sin(sideTwoRad) * Math.sin(sideThreeRad));
        let cosAngleTwo = (Math.cos(sideTwoRad) - (Math.cos(sideThreeRad) * Math.cos(sideOneRad))) / (Math.sin(sideThreeRad) * Math.sin(sideOneRad));
        let cosAngleThree = (Math.cos(sideThreeRad) - (Math.cos(sideOneRad) * Math.cos(sideTwoRad))) / (Math.sin(sideOneRad) * Math.sin(sideTwoRad));
        alert(this.degrees(Math.acos(cosAngleOne)) + this.degrees(Math.acos(cosAngleTwo)) + this.degrees(Math.acos(cosAngleThree)));
    },

    threeAngles() {
        let angleOneRad = this.radians(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path);
        let angleTwoRad = this.radians(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path);
        let angleThreeRad = this.radians(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path);

        let cosSideOne = (Math.cos(angleOneRad) + (Math.cos(angleTwoRad) * Math.cos(angleThreeRad))) / (Math.sin(angleTwoRad) * Math.sin(angleThreeRad));
        let cosSideTwo = (Math.cos(angleTwoRad) + (Math.cos(angleThreeRad) * Math.cos(angleOneRad))) / (Math.sin(angleThreeRad) * Math.sin(angleOneRad));
        let cosSideThree = (Math.cos(angleThreeRad) + (Math.cos(angleOneRad) * Math.cos(angleTwoRad))) / (Math.sin(angleOneRad) * Math.sin(angleTwoRad));
        alert(this.degrees(Math.acos(cosSideOne)) + this.degrees(Math.acos(cosSideTwo)) + this.degrees(Math.acos(cosSideThree)));
    },

    sidePlusTwoAngles(props) {

        let sideOneRad = 0
        let angleTwoRad = 0
        let angleThreeRad = 0

        switch (props) {
            case 0:
                sideOneRad = this.radians(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path)
                angleTwoRad = this.radians(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path)
                angleThreeRad = this.radians(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path)
                break

            case 1:
                sideOneRad = this.radians(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path)
                angleTwoRad = this.radians(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path)
                angleThreeRad = this.radians(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path)
                break

            case 2:
                sideOneRad = this.radians(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path)
                angleTwoRad = this.radians(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path)
                angleThreeRad = this.radians(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path)
                break

            default: break
        }



        let cosAngleOne = (Math.cos(angleTwoRad) * Math.cos(angleThreeRad) * (-1)) + (Math.sin(angleTwoRad) * Math.sin(angleThreeRad) * Math.cos(sideOneRad))

        let sinTeorema = Math.sin(sideOneRad) / Math.sqrt(1 - cosAngleOne * cosAngleOne);

        let cosSideTwo = Math.sqrt(1 - ((Math.sin(angleTwoRad) * sinTeorema) * (Math.sin(angleTwoRad) * sinTeorema)));
        let cosSideThree = Math.sqrt(1 - ((Math.sin(angleThreeRad) * sinTeorema) * (Math.sin(angleThreeRad) * sinTeorema)));
        alert(this.degrees(Math.acos(cosAngleOne)) + this.degrees(Math.acos(cosSideTwo)) + this.degrees(Math.acos(cosSideThree)));
    },

    switchBlock(props) {
        debugger
        this._state[props[0]][props[1]][props[2]].block === false ? this._state[props[0]][props[1]][props[2]].block = true : this._state[props[0]][props[1]][props[2]].block = false;
        this.container();
    }
}


export default store;