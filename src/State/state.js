let store = {
    _state: {
        Angles: [
            [
                { path: ["Angles", "0", "0"], value: "137", title: "Угол A, градусы", type: "Number", key: "100", block: true },
                { path: ["Angles", "0", "1"], value: "40", title: "Угол A, минуты", type: "Number", key: "110", block: true },
                { path: ["Angles", "0", "2"], value: "12", title: "Угол A, секунды", type: "Number", key: "120", block: true }],
            [
                { path: ["Angles", "1", "0"], value: "114", title: "Угол B, градусы", type: "Number", key: "101", block: true },
                { path: ["Angles", "1", "1"], value: "45", title: "Угол B, минуты", type: "Number", key: "111", block: true },
                { path: ["Angles", "1", "2"], value: "36", title: "Угол B, секунды", type: "Number", key: "121", block: true }],
            [
                { path: ["Angles", "2", "0"], value: "106", title: "Угол C, градусы", type: "Number", key: "102", block: true },
                { path: ["Angles", "2", "1"], value: "15", title: "Угол C, минуты", type: "Number", key: "112", block: true },
                { path: ["Angles", "2", "2"], value: "36", title: "Угол C, секунды", type: "Number", key: "122", block: true }],
        ],

        Sides: [
            [
                { path: ["Sides", "0", "0"], value: "135", title: "Сторона a, градусы", type: "Number", key: "200", block: true },
                { path: ["Sides", "0", "1"], value: "31", title: "Сторона a, минуты", type: "Number", key: "210", block: true },
                { path: ["Sides", "0", "2"], value: "12", title: "Сторона a, секунды", type: "Number", key: "220", block: true }],
            [
                { path: ["Sides", "1", "0"], value: "109", title: "Сторона b, градусы", type: "Number", key: "201", block: true },
                { path: ["Sides", "1", "1"], value: "7", title: "Сторона b, минуты", type: "Number", key: "211", block: true },
                { path: ["Sides", "1", "2"], value: "48", title: "Сторона b, секунды", type: "Number", key: "221", block: true }],
            [
                { path: ["Sides", "2", "0"], value: "87", title: "Сторона c, градусы", type: "Number", key: "202", block: true },
                { path: ["Sides", "2", "1"], value: "13", title: "Сторона c, минуты", type: "Number", key: "212", block: true },
                { path: ["Sides", "2", "2"], value: "48", title: "Сторона c, секунды", type: "Number", key: "222", block: true }],
        ],

        Results: [
            [
                { word: "", degree: "", minute: "", second: "", letter: "" },
            ],
            [
                { word: "", degree: "", minute: "", second: "", letter: "" }
            ],
            [
                { word: "", degree: "", minute: "", second: "", letter: "" }
            ],
        ]
    },

    isHidden: true,

    getState() { return this._state },

    container() { },

    observer(props) {
        this.container = props;
    },

    mainButton() {
        if (this.checkboxCounter() === 3) { this.counts() } else { return alert("Выберите три элемента треугольника для расчётов") }

    },

    counts() {
        if (this._state.Angles[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Angles[2][0].block === false) { this.threeAngles() }
        if (this._state.Sides[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Sides[2][0].block === false) { this.threeSides() }

        if (this._state.Sides[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Angles[2][0].block === false) { this.sidePlusTwoAngles(0) }
        if (this._state.Angles[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Angles[2][0].block === false) { this.sidePlusTwoAngles(1) }
        if (this._state.Angles[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Sides[2][0].block === false) { this.sidePlusTwoAngles(2) }

        if (this._state.Angles[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Sides[2][0].block === false) { this.anglePlusTwoSides(0) }
        if (this._state.Sides[0][0].block === false && this._state.Angles[1][0].block === false && this._state.Sides[2][0].block === false) { this.anglePlusTwoSides(1) }
        if (this._state.Sides[0][0].block === false && this._state.Sides[1][0].block === false && this._state.Angles[2][0].block === false) { this.anglePlusTwoSides(2) }

        if (this._state.Angles[0][0].block === false && this._state.Sides[0][0].block === false) { return alert("Ошибка! Сферический треугольник единственным образом определяется (с точностью до преобразования симметрии): \nтремя сторонами \nтремя углами \nдвумя сторонами и заключенным между ними углом \nстороной и двумя прилежащими к ней углами.") }
        if (this._state.Angles[1][0].block === false && this._state.Sides[1][0].block === false) { return alert("Ошибка! Сферический треугольник единственным образом определяется (с точностью до преобразования симметрии): \nтремя сторонами \nтремя углами \nдвумя сторонами и заключенным между ними углом \nстороной и двумя прилежащими к ней углами.") }
        if (this._state.Angles[2][0].block === false && this._state.Sides[2][0].block === false) { return alert("Ошибка! Сферический треугольник единственным образом определяется (с точностью до преобразования симметрии): \nтремя сторонами \nтремя углами \nдвумя сторонами и заключенным между ними углом \nстороной и двумя прилежащими к ней углами.") }

        this.isHidden = false
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

    putResults(props) {

        console.log(props)
        this._state.Results[0][0].word = props[3][0]
        this._state.Results[0][0].degree = props[0][0]
        this._state.Results[0][0].minute = props[0][1]
        this._state.Results[0][0].second = props[0][2]
        this._state.Results[0][0].letter = props[4][0]

        this._state.Results[1][0].word = props[3][1]
        this._state.Results[1][0].degree = props[1][0]
        this._state.Results[1][0].minute = props[1][1]
        this._state.Results[1][0].second = props[1][2]
        this._state.Results[1][0].letter = props[4][1]

        this._state.Results[2][0].word = props[3][2]
        this._state.Results[2][0].degree = props[2][0]
        this._state.Results[2][0].minute = props[2][1]
        this._state.Results[2][0].second = props[2][2]
        this._state.Results[2][0].letter = props[4][2]

        this.container()
    },

    changeNumber(newValue, path) {
        this._state[path[0]][path[1]][path[2]].value = newValue;
        this.container();
    },

    radians(item) {
        return item / 180 * Math.PI;
    },

    degrees(rads) {
        const degrees = rads * 180 / Math.PI;
        const degree = Math.trunc(degrees);
        const minute = Math.trunc((degrees - degree) * 60);
        const second = (((degrees - degree) * 60) - minute) * 60;
        return ([degree, minute, second]);
    },

    degreeInFraction(itemPathOne, itemPathTwo, itemPathThree) {
        return (Number(this._state[itemPathOne[0]][itemPathOne[1]][itemPathOne[2]].value) +
            Number((this._state[itemPathTwo[0]][itemPathTwo[1]][itemPathTwo[2]].value / 60)) +
            Number((this._state[itemPathThree[0]][itemPathThree[1]][itemPathThree[2]].value / 3600)));

    },

    threeSides() {
        debugger
        let sideOneRad = this.radians(this.degreeInFraction(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path));
        let sideTwoRad = this.radians(this.degreeInFraction(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path));
        let sideThreeRad = this.radians(this.degreeInFraction(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path));

        let cosAngleOne = (Math.cos(sideOneRad) - (Math.cos(sideTwoRad) * Math.cos(sideThreeRad))) / (Math.sin(sideTwoRad) * Math.sin(sideThreeRad));
        let cosAngleTwo = (Math.cos(sideTwoRad) - (Math.cos(sideThreeRad) * Math.cos(sideOneRad))) / (Math.sin(sideThreeRad) * Math.sin(sideOneRad));
        let cosAngleThree = (Math.cos(sideThreeRad) - (Math.cos(sideOneRad) * Math.cos(sideTwoRad))) / (Math.sin(sideOneRad) * Math.sin(sideTwoRad));

        const word = ["Угол", "Угол", "Угол"]
        const letter = ["A", "B", "C"]

        this.putResults([this.degrees(Math.acos(cosAngleOne)), this.degrees(Math.acos(cosAngleTwo)), this.degrees(Math.acos(cosAngleThree)), word, letter])
    },

    threeAngles() {
        debugger
        let angleOneRad = this.radians(this.degreeInFraction(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path));
        let angleTwoRad = this.radians(this.degreeInFraction(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path));
        let angleThreeRad = this.radians(this.degreeInFraction(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path));

        let cosSideOne = (Math.cos(angleOneRad) + (Math.cos(angleTwoRad) * Math.cos(angleThreeRad))) / (Math.sin(angleTwoRad) * Math.sin(angleThreeRad));
        let cosSideTwo = (Math.cos(angleTwoRad) + (Math.cos(angleThreeRad) * Math.cos(angleOneRad))) / (Math.sin(angleThreeRad) * Math.sin(angleOneRad));
        let cosSideThree = (Math.cos(angleThreeRad) + (Math.cos(angleOneRad) * Math.cos(angleTwoRad))) / (Math.sin(angleOneRad) * Math.sin(angleTwoRad));

        const word = ["Сторона", "Сторона", "Сторона"]
        const letter = ["A", "B", "C"]

        this.putResults([this.degrees(Math.acos(cosSideOne)), this.degrees(Math.acos(cosSideTwo)), this.degrees(Math.acos(cosSideThree)), word, letter]);
    },

    sidePlusTwoAngles(props) {
        debugger
        let sideOneFraction = 0
        let angleTwoFraction = 0
        let angleThreeFraction = 0

        switch (props) {
            case 0:
                sideOneFraction = this.degreeInFraction(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path)
                angleTwoFraction = this.degreeInFraction(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path)
                angleThreeFraction = this.degreeInFraction(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path)
                break

            case 1:
                sideOneFraction = this.degreeInFraction(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path)
                angleTwoFraction = this.degreeInFraction(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path)
                angleThreeFraction = this.degreeInFraction(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path)
                break

            case 2:
                sideOneFraction = this.degreeInFraction(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path)
                angleTwoFraction = this.degreeInFraction(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path)
                angleThreeFraction = this.degreeInFraction(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path)
                break

            default: break
        }


        let tanHalfSum = 0
        let tanHalfDif = 0
        if (angleTwoFraction > angleThreeFraction) {
            tanHalfSum = Math.cos(this.radians((angleTwoFraction - angleThreeFraction) / 2)) / Math.cos(this.radians((angleTwoFraction + angleThreeFraction) / 2)) * Math.tan(this.radians(sideOneFraction / 2))
            tanHalfDif = Math.sin(this.radians((angleTwoFraction - angleThreeFraction) / 2)) / Math.sin(this.radians((angleTwoFraction + angleThreeFraction) / 2)) * Math.tan(this.radians(sideOneFraction / 2))
        } else {
            tanHalfSum = Math.cos(this.radians((angleThreeFraction - angleTwoFraction) / 2)) / Math.cos(this.radians((angleTwoFraction + angleThreeFraction) / 2)) * Math.tan(this.radians(sideOneFraction / 2))
            tanHalfDif = Math.sin(this.radians((angleThreeFraction - angleTwoFraction) / 2)) / Math.sin(this.radians((angleTwoFraction + angleThreeFraction) / 2)) * Math.tan(this.radians(sideOneFraction / 2))
        }
        if (tanHalfSum < 0) { tanHalfSum = (Math.PI + Math.atan(tanHalfSum)) }
        else tanHalfSum = Math.atan(tanHalfSum)


        if (tanHalfDif < 0) { tanHalfDif = (Math.PI + Math.atan(tanHalfDif)) }
        else tanHalfDif = Math.atan(tanHalfDif)

        let sideTwoRad = (tanHalfSum + tanHalfDif)
        let sideThreeRad = (tanHalfSum - tanHalfDif)

        let cosAngleOne = (Math.cos(this.radians(angleTwoFraction)) * (-1)) * Math.cos(this.radians(angleThreeFraction)) + Math.sin(this.radians(angleTwoFraction)) * Math.sin(this.radians(angleThreeFraction)) * Math.cos(this.radians(sideOneFraction))

        const letter = (props) => {
            switch (props) {
                case 0: return ["A", "B", "C"]
                case 1: return ["B", "A", "C"]
                case 2: return ["C", "A", "B"]
                default: break
            }
        }

        const word = ["Угол", "Сторона", "Сторона"]

        this.putResults([this.degrees(Math.acos(cosAngleOne)), this.degrees(sideTwoRad), this.degrees(sideThreeRad), word, letter(props)]);
    },

    anglePlusTwoSides(props) {

        let angleOneRad = 0
        let tanAngleTwo = 0
        let tanAngleThree = 0
        let cosSideOne = 0
        let sideTwoRad = 0
        let sideThreeRad = 0
        switch (props) {

            case 0:
                angleOneRad = this.radians(this.degreeInFraction(this._state.Angles[0][0].path, this._state.Angles[0][1].path, this._state.Angles[0][2].path))
                sideTwoRad = this.radians(this.degreeInFraction(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path))
                sideThreeRad = this.radians(this.degreeInFraction(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path))
                break

            case 1:
                angleOneRad = this.radians(this.degreeInFraction(this._state.Angles[1][0].path, this._state.Angles[1][1].path, this._state.Angles[1][2].path))
                sideTwoRad = this.radians(this.degreeInFraction(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path))
                sideThreeRad = this.radians(this.degreeInFraction(this._state.Sides[2][0].path, this._state.Sides[2][1].path, this._state.Sides[2][2].path))
                break

            case 2:
                angleOneRad = this.radians(this.degreeInFraction(this._state.Angles[2][0].path, this._state.Angles[2][1].path, this._state.Angles[2][2].path))
                sideTwoRad = this.radians(this.degreeInFraction(this._state.Sides[1][0].path, this._state.Sides[1][1].path, this._state.Sides[1][2].path))
                sideThreeRad = this.radians(this.degreeInFraction(this._state.Sides[0][0].path, this._state.Sides[0][1].path, this._state.Sides[0][2].path))
                break

            default: break
        }

        tanAngleThree = Math.sin(angleOneRad) / ((Math.sin(sideTwoRad) / Math.tan(sideThreeRad)) - Math.cos(angleOneRad) * Math.cos(sideTwoRad))
        if (tanAngleThree < 0) { tanAngleThree = (Math.PI + Math.atan(tanAngleThree)) }
        else tanAngleThree = Math.atan(tanAngleThree)

        cosSideOne = (Math.cos(sideTwoRad) * Math.cos(sideThreeRad)) + (Math.sin(sideTwoRad) * Math.sin(sideThreeRad) * Math.cos(angleOneRad))

        tanAngleTwo = Math.sin(angleOneRad) / ((Math.sin(sideThreeRad) / Math.tan(sideTwoRad)) - Math.cos(angleOneRad) * Math.cos(sideThreeRad))
        if (tanAngleTwo < 0) { tanAngleTwo = (Math.PI + Math.atan(tanAngleTwo)) }
        else tanAngleTwo = Math.atan(tanAngleTwo)

        const letter = (props) => {
            switch (props) {
                case 0: return ["A", "B", "C"]
                case 1: return ["B", "A", "C"]
                case 2: return ["C", "B", "A"]
                default: break
            }
        }

        const word = ["Сторона", "Угол", "Угол"]

        this.putResults([this.degrees(Math.acos(cosSideOne)), this.degrees(tanAngleTwo), this.degrees(tanAngleThree), word, letter(props)])
    },

    switchBlock(props) {
        this._state[props[0]][props[1]][props[2]].block === false ? this._state[props[0]][props[1]][props[2]].block = true : this._state[props[0]][props[1]][props[2]].block = false;
        this.container();
    }
}

export default store;