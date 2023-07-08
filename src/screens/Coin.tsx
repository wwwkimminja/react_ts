import React, { useState,useEffect } from 'react'
import { Container, Header ,Title , Loader} from './Coins'
import { useLocation, useParams } from 'react-router-dom';


export default function Coin() {
  const [loading,setLoading]=useState(true);
  const [info,setInfo]=useState({});
  const [priceInfo,setPriceInfo]=useState({});
   const {coinId}= useParams();
  const {state} =useLocation();

  useEffect(()=>{
    (async()=>{
     const infoData=await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
     const priceData=await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
     setInfo(infoData);
     setPriceInfo(priceData);

    })();
  },[])

 

  return (
    <Container>
      <Header>
        <Title>{state?.name||"Loading..."}</Title>
      </Header>
      {loading?<Loader>Loading...</Loader>:null}

    </Container>
  )
}
