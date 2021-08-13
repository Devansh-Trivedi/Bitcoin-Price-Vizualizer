import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
function Ether() {
  const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coincap.io/v2/assets/'
      )
      .then(res => {
        setCoins(res.data.data[1]);
        console.log(res.data.data[1].name);
      })
      .catch(error => console.log(error));
  }, []);



  return (
    
    <div className='coin-app'>
          <div className='coin-search'>
            <h1 className='coin-text'>{coins.name}</h1>
          </div>
          
          {/* <h1>{coins.name}</h1> */}
          <Coin
            key={coins.id}
            name={coins.name}
            price={coins.priceUsd}
            
            symbol={coins.symbol}
            marketcap={coins.volumeUsd24Hr}
            volume={coins.marketCapUsd}
            // image={coins.image}
            priceChange={coins.changePercent24Hr}
          />
 
    </div>
  );
}

export default Ether;
