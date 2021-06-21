import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 8px;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  border-bottom: 1px solid gainsboro;
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  @media only screen and (max-width: 411px) {
    width: 150px;
  }
  @media only screen and (max-width: 320px) {
    width: 118px;
  }
  a {
    color: inherit;
  }
`;

export const ContactWrapper = styled("div")`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }
  display: none;
  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
  a {
    color: inherit;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
`;
export const Notification = styled.div`
  position: absolute;
  border: 1px solid;
  border-radius: 50%;
  width: 24px;
  display: flex;
  height: 24px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  background: red;
  color: white;
  top: -15px;
  right: -14px;
 
  &:hover {
    cursor: pointer;
  }
`;

export const NotiGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gainsboro;
  width: 180px;
  position: absolute;
  top: 20px;
  color: black;
  right: 20px;
  background: white;
  overflow: hidden;
  border-radius: 4px;
  max-height: 236px;
  > * {
    border-bottom: 1px solid gainsboro;
    width: 170px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
  }

  .up {
    color: green;
  }
  .down {
    color: red;
  }
`;
