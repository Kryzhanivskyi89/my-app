import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form } from 'formik';

export const FormAuth = styled(Form)`
  margin: 0 auto;
  padding: 32px 28px 40px 28px;
  width: 335px;
  background-color: #2a2c36;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 500px;

    padding: 32px 40px 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Title = styled.h1`
  color: #fafafa;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 28px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Btnwrapper = styled.div`
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const BtnRegister = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 14px 110px;
  color: #fafafa;
  background-color: #8baa36;
  border-radius: 6px;
  border-color: transparent;
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #22252a;
    background-color: };
    transition: 0.6s;
    animation: easeIn;
  }

  &:not(:hover),
  &:not(:focus) {
    transition: 0.6s;
    animation: easeOut;
  }
`;

export const Link = styled.div`
  text-align: center;
  margin-top: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: };
    transition: 0.6s;
    animation: easeIn;
  }

  &:not(:hover),
  &:not(:focus) {
    transition: 0.6s;
    animation: easeOut;
  }
`;