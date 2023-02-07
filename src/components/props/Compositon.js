import React from 'react'

function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}



// 컴포넌트 합성
// 원하는 값을 넣고싶은 컴포넌트에 props를 만들어서 지정한다.

export default function compositon(props) {
  return (
    <div>
        <Welcome name={props.name}/>
    </div>
  )
}
