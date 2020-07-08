import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const StyledErrorContainer = styled.div`
  width: 100%;
  height:110px;
  position:fixed;
  top:-100px;
  left:0;
  z-index:100;
  opacity:0;
  padding: 25px;
  box-sizing:border-box;
  -webkit-transition: opacity 1s ease-out 0;
  -moz-transition: opacity 1s ease-out 0;
  -o-transition: opacity 1s ease-out 0;
  transition: opacity 1s ease-out 0;
  -webkit-transition: top 1s linear 1s;
  -moz-transition: top 1s linear 1s;
  -o-transition: top 1s linear 1s;
  transition: top 1s linear 1s;
  @media (max-width: 768px) {
    height:90px;
    padding:15px;
  }
  &.active{
    top:0;
    opacity:1;
    transition: all 1s ease-in;
  }
`
const StyledErrorMessage = styled.div`
  width:100%;
  height:100%;
  background:rgba(228, 94, 87, .80);
  padding:10px;
  position:relative;
  box-sizing:border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  >p{
    color: #fff;
    font-size:16px;
    font-weight:600;
    margin:0;
  }
`

type ErrorProps = {
  error: boolean,
  code?: number
};

export const ErrorNotification: FunctionComponent<ErrorProps> = ({ error, code }) => (
  <StyledErrorContainer className={error ? 'active' : ''}>
    <StyledErrorMessage>
      <p>{code === 404 ? 'Stadt konnte nicht gefunden werden' : 'Ein Fehler ist aufgetreten'}</p>
    </StyledErrorMessage>
  </StyledErrorContainer>
)