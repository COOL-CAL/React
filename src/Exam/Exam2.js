import { useState } from "react";

function Exam2() {
    // const data = useState(0);
    // const counter = data[0];
    // const setCounter = data[1];

    const [ counter, setCounter ] = useState(0); // 0 = counter의 초기값
    // 위의 세 줄과 동일한 기능

    function countUp() {
        // counter = counter + 1;
        // console.log(counter);
        // console.log(data);

        // setCounter(counter + 1);
        setCounter( preVal => preVal + 1); //콜백함수
    }

    return (
        <div>
            <h1>클릭 카운터 수 : { counter }</h1>
            <button onClick={ countUp }> Click Me! </button>
        </div>
    );
}

export default Exam2;