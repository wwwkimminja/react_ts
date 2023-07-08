import React, { useState } from 'react'
import { Container, Header ,Title , Loader} from './Coins'
import { useLocation, useParams } from 'react-router-dom';


export default function Coin() {
  const [loading,setLoading]=useState(true);
  // const {coinId}= useParams();
  const {state} =useLocation();
  console.log(state.name)
 

  return (
    <Container>
      <Header>
        <Title>{state?.name||"Loading..."}</Title>
      </Header>
      {loading?<Loader>Loading...</Loader>:null}

    </Container>
  )
}
