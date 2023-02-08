import React, {useState, useEffect} from 'react'


export default function FunctionalComponent() {
    // 함수형 컴포넌트에서의 state 관리 및 초기화를 하는 Hook
    // 클래스 컴포넌트의 this.state = { date: new Date() };와 동일
    const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date())
    }
 
    // 마운트 되자마자 동작하게 하는 Hook
    // 클래스 컴포넌트의 componentDidMount()와 동일
    useEffect(() => {
        const interval = setInterval(() => {tick()}, 1000)
        // 클래스 컴포넌트의 componentWillUnmount()와 동일
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div>
            <h1>Hello, Function</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );

}
