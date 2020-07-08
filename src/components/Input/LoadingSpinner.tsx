import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.size};
  height: ${props => props.theme.size};
  >div{
    position: absolute;
    border: 2px solid ${props => props.theme.color};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  >div:nth-child(2){
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 45%;
      left: 45%;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 90%;
      height: 90%;
      opacity: 0;
    }
`
interface LoadingSpinnerProps {
  color?: string
  size?: string
}
export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({ color = '#fff', size = '100%' }) => (
  <Ripple theme={{ color, size }}>
    <div></div>
    <div></div>
  </Ripple>
)