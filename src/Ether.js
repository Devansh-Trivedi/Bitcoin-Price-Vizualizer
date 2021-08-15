import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import { Line } from "react-chartjs-2";
// import bigChartData from "./charts.js";
import date from 'date-and-time';

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Ether() {
  const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState('');
  // Daily evaluation
  const [aday, setaday] = useState([]);
  const [bday, setbday] = useState([]);
  const [cday, setcday] = useState([]);
  const [dday, setdday] = useState([]);
  const [eday, seteday] = useState([]);
  const [fday, setfday] = useState([]);
  const [gday, setgday] = useState([]);
  const [hday, sethday] = useState([]);
  const [iday, setiday] = useState([]);
  const [jday, setjday] = useState([]);

  // Hourly evaluation
  const [ahr, setahr] = useState([]);
  const [bhr, setbhr] = useState([]);
  const [chr, setchr] = useState([]);
  const [dhr, setdhr] = useState([]);
  const [ehr, setehr] = useState([]);
  const [fhr, setfhr] = useState([]);
  const [ghr, setghr] = useState([]);
  const [hhr, sethhr] = useState([]);
  const [ihr, setihr] = useState([]);
  const [jhr, setjhr] = useState([]);

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

  useEffect(() => {
    axios
      .get(
        'https://api.coincap.io/v2/assets/ethereum/history?interval=d1'
      )
      .then(res => {
        setaday(res.data.data[719]);
        setbday(res.data.data[720]);
        setcday(res.data.data[721]);
        setdday(res.data.data[722]);
        seteday(res.data.data[723]);
        setfday(res.data.data[724]);
        setgday(res.data.data[725]);
        sethday(res.data.data[726]);
        setiday(res.data.data[727]);
        setjday(res.data.data[728]);
      })
      .catch(error => console.log(error));

      
  },[]); 
  useEffect(() => {
    axios
      .get(
        'https://api.coincap.io/v2/assets/ethereum/history?interval=h1'
      )
      .then(res => {
        setahr(res.data.data[674]);
        setbhr(res.data.data[675]);
        setchr(res.data.data[676]);
        setdhr(res.data.data[677]);
        setehr(res.data.data[678]);
        setfhr(res.data.data[679]);
        setghr(res.data.data[680]);
        sethhr(res.data.data[681]);
        setihr(res.data.data[682]);
        setjhr(res.data.data[683]);
      })
      .catch(error => console.log(error));

      
  },[]); 
 
  function formatDate(string){
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
  }
  function formatTime(string){
      var date = new Date(string);
      var hour = date.getHours();
      var minutes = date.getMinutes();

      return `${hour}:${minutes}`;
}

  
  const dailydata = {
    // labels: (mapdata.map((d) =><li>{d}</li>)),
    labels: [formatDate(aday.date),formatDate(bday.date),formatDate(cday.date),formatDate(dday.date),formatDate(eday.date),formatDate(fday.date),formatDate(gday.date),formatDate(hday.date),formatDate(iday.date),formatDate(jday.date)],
    datasets: [
      {
        label: "Daily Price Fluctuation of Tron",
        data: [parseFloat(aday.priceUsd).toFixed(8),parseFloat(bday.priceUsd).toFixed(8),parseFloat(cday.priceUsd).toFixed(8),parseFloat(dday.priceUsd).toFixed(8),parseFloat(eday.priceUsd).toFixed(8),parseFloat(fday.priceUsd).toFixed(8),parseFloat(gday.priceUsd).toFixed(8),parseFloat(hday.priceUsd).toFixed(8),parseFloat(iday.priceUsd).toFixed(8),parseFloat(jday.priceUsd).toFixed(8)],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      
    ]
    
        
    
  };
  const now = new Date();
  const hourlydata = {
    // labels: (mapdata.map((d) =><li>{d}</li>)),
    labels: [formatTime(ahr.date),formatTime(bhr.date),formatTime(chr.date),formatTime(dhr.date),formatTime(ehr.date),formatTime(fhr.date),formatTime(ghr.date),formatTime(hhr.date),formatTime(ihr.date),formatTime(jhr.date)] ,
    datasets: [
      {
        label: "Hourly Price Fluctuation of Tron",
        data: [parseFloat(ahr.priceUsd).toFixed(8),parseFloat(bhr.priceUsd).toFixed(8),parseFloat(chr.priceUsd).toFixed(8),parseFloat(dhr.priceUsd).toFixed(8),parseFloat(ehr.priceUsd).toFixed(8),parseFloat(fhr.priceUsd).toFixed(8),parseFloat(ghr.priceUsd).toFixed(8),parseFloat(hhr.priceUsd).toFixed(8),parseFloat(ihr.priceUsd).toFixed(8),parseFloat(jhr.priceUsd).toFixed(8)],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Daily Price Fluctuation of Tron",
        data: [parseFloat(aday.priceUsd).toFixed(8),parseFloat(bday.priceUsd).toFixed(8),parseFloat(cday.priceUsd).toFixed(8),parseFloat(dday.priceUsd).toFixed(8),parseFloat(eday.priceUsd).toFixed(8),parseFloat(fday.priceUsd).toFixed(8),parseFloat(gday.priceUsd).toFixed(8),parseFloat(hday.priceUsd).toFixed(8),parseFloat(iday.priceUsd).toFixed(8),parseFloat(jday.priceUsd).toFixed(8)],
        fill: false,
        borderColor: "#742774"
      },
      
    ]
    
        
    
  };
  
 




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
          <br/>
          <br/>
          <br/>
          <br/>
          <Container>
            <Row>
              <h2>Plotation on Daily basis:</h2>
              <Col lg={12}>
              
                  
                  <Line
                    data={dailydata}
                    // options={bigChartData.options}
                  />
                
       
              </Col>
            </Row>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container>
            <Row>
            <h2>Plotation on Hourly & Daily basis:</h2>
            <Col lg={12}>
              
                  
              <Line
                data={hourlydata}
                // options={bigChartData.options}
              />
            
   
          </Col>
            </Row>
          </Container>
 
    </div>
  );
}

export default Ether;
