import { useState, memo } from 'react';
import Button from './Button';
import './Exam3.css';

export default function Exam3() {
    const [ val, setVal ] = useState('Button1');
    const btn1OnClick = () => setVal('버튼1');
    const MemorizedBtn = memo(Button);
    return (
        <div>
            <MemorizedBtn text={val} color="red" onClick={btn1OnClick} />
            <MemorizedBtn text="Button2" color="blue"/>
            <MemorizedBtn text="Button3" color="green"/>
        </div>
    )
}