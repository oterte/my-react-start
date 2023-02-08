import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('constructor')
        this.state = {date: new Date()};
        // 항상 바인딩을 해주어야함
        // 바인딩을 해주지 않으면 state를 못읽는다
        // why?
        // this.handleClick 메소드에게 자기 자신(클래스)를 알게 해주는것
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.timerID  = setInterval(() => this.tick(), 1000)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timerID)
    }

    tick(){
        console.log('tick')
        this.setState({date:new Date()})
    }

    handleClick(){
        // 여기서의 this는 클래스 스스로를 가리킨다.
        // 즉 이 메소드 안에서 클래스를 직접 접근하고 싶다면 항상 바인딩을 해주어야 한다.
        // 혹은 메소드를 화살표 함수로 만들어 준다면 바인딩 하지 않아도 된다.
        alert(this.state.date)
    }
  render() {
    console.log('render')
    return (
      <div>
        {/* 메소드를 사용하려면 내 스스로의 handleClick을 명시해주어야 한다. */}
        {/* <h1 onClick={handleClick}>생명주기 테스트</h1> */}
        <h1 onClick={this.handleClick}>생명주기 테스트</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
