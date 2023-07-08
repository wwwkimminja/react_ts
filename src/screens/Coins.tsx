import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/'

const Container = styled.div``;
const Header=styled.header`
height:10vh;
display:flex;
justify-content: center;
align-items:center;
`;

const CoinsList=styled.ul``;

const Coin =styled.li`
background-color: #fff;
color:${(props)=>props.theme.bgColor};
border-radius:15px;
margin: 10px;
a{
  transition:color .2s ease-in;
  display: block;
  padding: 20px;
}
&:hover{
  a {
    color:${(props)=>props.theme.accentColor}
  }
}
`;

const Title=styled.h1`
color:${(props)=>props.theme.accentColor};
font-size: 48px;
`;

const Loader=styled.span`
text-align:center;
display:block;
`;

interface ICoins{
  id:string,
  name: string,
  symbol:string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}


export default function Coins() {
  const [coins,setCoins]=useState<ICoins[]>([]);
  const [isLoading,setLoading]=useState(true);

  useEffect(()=>{
    (async()=>{
     const response=await fetch("https://api.coinpaprika.com/v1/coins");
     const json=await response.json();
     setCoins(json.slice(0,100));
     setLoading(false);

    })();
  },[])

  console.log(coins)

  return (
   <Container>
    <Header/>
    <Title>Coin</Title>
    {isLoading?<Loader>Loading...</Loader>:
    <CoinsList>
     {coins.map((coin)=><Coin key={coin.id}><Link to={`/${coin.id}`}>{coin.name} &rarr;</Link></Coin>) }
    </CoinsList>}
    </Container>
  )
}
