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

const coins=[{
  id: "btc-bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  rank: 1,
  is_new: false,
  is_active: true,
  type: "coin",
},
{
  id: "eth-ethereum",
  name: "Ethereum",
  symbol: "ETH",
  rank: 2,
  is_new: false,
  is_active: true,
  type: "coin",
},
{
  id: "hex-hex",
  name: "HEX",
  symbol: "HEX",
  rank: 3,
  is_new: false,
  is_active: true,
  type: "token",
},]


export default function Coins() {
  return (
   <Container>
    <Header/>
    <Title>Coin</Title>
    <CoinsList>
     {coins.map((coin)=><Coin key={coin.id}><Link to={`/${coin.id}`}>{coin.name} &rarr;</Link></Coin>) }
    </CoinsList>
    </Container>
  )
}
