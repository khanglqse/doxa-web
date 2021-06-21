import { PricingContainer, Item, Price, OldPrice, CoinName } from "./styles";
import { useEffect, useState } from "react";
const ws = new WebSocket("ws://localhost:8080");
const CoinPricing = (props) => {
  const [btc, setBtc] = useState('')
  const [eth, setEth] = useState('')
  useEffect(() => {
    ws.onopen = () => {
      console.log("open socket");
    };
    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      if (message.currencyPair === 'USDT_ETH') {
        setEth(message.price)
      }
      if (message.currencyPair === 'USDT_BTC') {
        setBtc(message.price)
      }
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
  }, []);
  return (
    <PricingContainer>
      <Item>
        <CoinName>BTC/USDT</CoinName>
        <Price>{parseFloat(btc).toFixed(2)}</Price>
      </Item>
      <Item>
        <CoinName>BTC/USDT</CoinName>
        <Price>{parseFloat(eth).toFixed(2)}</Price>
      </Item>
      <Item>
        <CoinName>BTC/USDT</CoinName>
        <Price>{parseFloat(eth).toFixed(2)}</Price>
      </Item>
      <Item>
        <CoinName>BTC/USDT</CoinName>
        <Price>{parseFloat(eth).toFixed(2)}</Price>
      </Item>
      <Item>
        <CoinName>BTC/USDT</CoinName>
        <Price>{parseFloat(eth).toFixed(2)}</Price>
      </Item>
    </PricingContainer>
  );
};

export default CoinPricing;
