import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/'

export const Container = styled.div`
padding: 0px 20px;
max-width: 480px;
margin: 0 auto;
`;

export const Header=styled.header`
height:15vh;
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
  display: flex;
  align-items: center;
  padding: 20px;
}
&:hover{
  a {
    color:${(props)=>props.theme.accentColor}
  }
}
`;

export const Title=styled.h1`
color:${(props)=>props.theme.accentColor};
font-size: 40px;
`;

export const Loader=styled.span`
text-align:center;
display:block;
`;

const Img=styled.img`
width: 35px;
height: 35px;
margin-right: 10px;
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
    <Header>
    <Title>Coins</Title>
    </Header>
    {isLoading?<Loader>Loading...</Loader>:
    <CoinsList>
     {coins.map((coin)=>
     <Coin key={coin.id}>
      <Link 
      state={{name:coin.name}} 
      to={{pathname:`/${coin.id}`}}
      >
        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
        {coin.name} &rarr;
      </Link>
    </Coin>) }
    </CoinsList>}
    </Container>
  )
}
