import React from 'react';
import './Coin.css';
import {Table} from 'react-bootstrap';
import {TiArrowSortedDown,TiArrowSortedUp} from "react-icons/ti";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  // image,
  priceChange
}) => {
  return (
    <div className="coin-container">
       
       <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              {/* <th>Name</th> */}
              <th>Symbol</th>
              <th>Price</th>
              <th>volUsd24Hr</th>
              <th>Chg%24Hr</th>
              {/* <th>MktCap</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{name}</td> */}
              <td>{symbol}</td> 
              <td>${parseFloat(price).toFixed(2)}</td>
              <td>{parseFloat(volume).toFixed(2)}</td>
              <td>{priceChange < 0 ? (
                  <p className='coin-percent red'><TiArrowSortedDown style={{fill:"red"}}/>{parseFloat(priceChange).toFixed(2)}%</p>
                ) : (
                  <p className='coin-percent green'><TiArrowSortedUp style={{fill:"green"}} />{parseFloat(priceChange).toFixed(2)}%</p>
                )}
              </td>
              {/* <td>{parseFloat(marketcap).toFixed(2)}</td> */}
            </tr>
          </tbody>
      </Table>
    </div>
    
  );
};

export default Coin;
