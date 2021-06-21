import styled from "styled-components";

export const PricingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  padding: 1.25rem;
  flex-basis: calc(20% - 10px);
  border: 0;
  box-shadow: 0 2px 4px hsl(0deg 0% 74% / 45%);
  margin-right: 10px;
  @media only screen and (max-width: 890px) {
    flex-basis: calc(50% - 10px);
  }
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: rgb(30, 35, 41);
`;

export const OldPrice = styled.span`
  color: rgb(71, 77, 87);
  font-size: 12px;
`;

export const CoinName = styled.div`
  margin-bottom: 1rem;
`;
