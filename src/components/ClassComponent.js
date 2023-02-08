import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        // 상태관리 및 기본값 세팅
        this.state = { date: new Date() };
    }
    // 컴포넌트가 그려지자마자 호출
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 컴포넌트가 사라지기 직전에 호출되게 함
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    // Class 컴포넌트에서 그려줄 jsx를 리턴해줌
    render() {
        return (
            <div>
                <h1>Hello, Class</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
