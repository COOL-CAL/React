import { useState, useEffect } from "react";
import style from './CoinTracker.css';

export default function CoinTracker() {
    const topCoins = [ 'BTC', 'ETH', 'BNB', 'KLAY' ];
    const [ loading, setLoading ] = useState(true);
    const [ coins, setCoins ] = useState([]);
    const [ currentUnit, setCurrentUnit ] = useState(topCoins[0]);
    const [ value, setValue ] = useState('');

    const onSelect = (e) => {
        setCurrentUnit(e.target.value);
        setValue('');
    }

    const onChange = (e) => {
        if (!e.target.value.replace(/^[1-9]\d*(\d+)?$/i, '')) {
        setValue(e.target.value);
        }
    }

    const hideDecimal = (number, len) => {
        return Math.floor(number * 10 ** len) / 10 ** len;
    }

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(res => res.json())
        .then(json => {
            setCoins(json); //링크에 담긴 배열을 새로운 배열로 넘겨줌
            setLoading(false);
        });
    }, []);

    const inputVal = () => {
        if(value) {
            let price = 0;
            for(let i=0; i<coins.length; i++) {
                const coin = coins[i];

                if(coin.symbol === currentUnit) {
                    price = coin.quotes.USD.price;
                    break;
                }
            }
            return hideDecimal(value / price, 6);
        }
        return '';
    }

    return (
        <div>
            <h1>My Coins! ({coins.length})</h1>
            { loading ? (<strong>Loading...</strong>)
                      : (<div>
                            <div className="{style.currentPrice}">
                                <h2>Current Price</h2>
                                <p></p>
                                {
                                    topCoins.map((item, idx) =>
                                    (
                                        <p key={idx}>
                                            <strong>1 {item} = </strong>
                                            <span>
                                                {
                                                    hideDecimal(
                                                        coins.filter(coin => coin.symbol === item)[0].quotes.USD.price, 3
                                                    )
                                                }
                                            </span>
                                        </p>
                                    ))
                                }
                            </div>
                            <div className="convertPrice">
                                <h3>Convert Price</h3>
                                <select onChange={ onSelect }>
                                    {
                                        topCoins.map((item, idx) =>
                                        (
                                            <option key={ idx } defaultValue={idx === 0}>
                                                { item }
                                            </option>
                                        ))
                                    }
                                </select>
                                <div>
                                    <input
                                        type="text"
                                        value={ value }
                                        placeholder="Enter here..."    
                                        onChange={ onChange }
                                    />
                                    <span>USD</span>
                                </div>
                                <div>
                                    <input 
                                        type="text"
                                        disabled
                                        value={
                                            value ? hideDecimal( value / coins.filter(coin => coin.symbol === currentUnit)[0].quotes.USD.price, 6 )
                                                  : ''
                                        }    
                                    />
                                    <span className="unit"> { currentUnit } </span>
                                    <button onClick={() => setValue('')}> Clear </button>
                                </div>
                            </div>
                        </div>
                        )
            }
        </div>
    )
}
