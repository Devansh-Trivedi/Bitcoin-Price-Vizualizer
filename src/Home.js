import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import './App.css';
import TopPage from './Animations/TopPage';
import BottomPage from './Animations/BottomPage';
import ether from './images/ether.png';
import tron from './images/tron.png';
import litecoin from './images/litecoin.png';
import {Link} from 'react-router-dom'

function Home(){
    
    return(
        <div>
           <Container>
                <Row>
                    <Col sm={6}>
                        <h1 style={{textAlign:"center"}} className="mainpage-heading">BLOCKCHAIN<span> COINS</span></h1>
                    </Col>
                    <Col sm={6}>
                        <TopPage />
                    </Col>
                </Row>                
            </Container>
            <div className="arrowDown">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </div> 
            
            <Container className="homeCards">
                <Row>
                    <Col sm={4}>
                    <Link to='/Ether'>
                        <h3>Ether</h3>
                        <img src={ether} />
                    </Link>
                    </Col>                    
                    <Col sm={4}>
                        <Link to='/Tron'>
                            <h3>Tron</h3>
                            <img src={tron} />
                        </Link>
                    </Col>
                    <Col sm={4}>
                        <Link to='Litecoin'>
                            <h3>Litecoin</h3>
                            <img src={litecoin} />
                            
                        </Link>
                    </Col>
                </Row>
                <BottomPage/>

            </Container>
            
        </div>
    )
}
export default Home;