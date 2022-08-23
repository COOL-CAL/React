import { useEffect, useState } from 'react';

export default function Exam5() {
    const [ counter, setCounter ] = useState(0);
    const [ keyword, setKeyword ] = useState('shit');

    const onClickPlus = () => setCounter(preVal => preVal + 1);
    const onClickMinus = () => setCounter(preVal => preVal === 0 ? 0 : preVal - 1);
    const onChangeText = (e) => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        if(keyword.length > 5) {
            console.log('Shit');
        }
    }, [keyword]);

    return (
        <div>
            <input
                type="text"
                placeholder='Search here...'
                value={ keyword }
                onChange={ onChangeText }
            />
            <h1>{ counter }</h1>
            <button onClick={ onClickPlus }> + </button>
            <button onClick={ onClickMinus }> - </button>
        </div>
    )
}