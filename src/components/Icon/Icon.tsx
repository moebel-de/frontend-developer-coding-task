import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import sprite from './sprite.svg'

const SVG = styled.svg`
  width:${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  fill: ${props => props.theme.color};
`

type IconProps = {
  size?: number,
  color?: string
};

export const Icon: FunctionComponent<IconProps> = ({ size = 18, color = 'black', children }) => (
  <SVG theme={{ size, color }}>
    <use href={sprite + `#wi-${children}`} />
  </SVG >
)
