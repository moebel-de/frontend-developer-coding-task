import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from './LoadingSpinner'
import { Icon } from '../Icon/Icon'

export const TEST_IDS = {
  SEARCH_INPUT: 'search-input',
  LOADING_SPINNER: 'loading-spinner',
  GET_LOCATION: 'get-location'
}

const Container = styled.div`
  width:100%;
  height:54px;
  display:flex;
  background:#fff;
  border-radius:10px;
  overflow:hidden;
`
const Label = styled.label`
  flex-grow:1;
  font-size:0;
`
const StyledInput = styled.input`
  height:100%;
  margin-right:10px;
  border:none;
  padding:0 15px;
  outline:none;
  font-size: 20px;
  font-weight: 800;
  letter-spacing:1.8px;
  &::placeholder{
    font-size:20px;
    color: rgba(0,0,0,.9);
    font-weight:400;
  }
`

const IconContainer = styled.div`
  width: 54px;
  height:54px;
  padding: 15px;
  box-sizing:border-box;
  display:flex;
  justify-items:center;
  align-items:center;
  flex-direction: row;
`

interface InputProps {
  focusHandler: (eventType: string, event: React.FocusEvent) => void,
  inputHandler: (event: string) => void,
  setCoordinates: (lat: number, long: number) => void,
  isSearching: boolean,
  setSearching: (isSearching: boolean) => void
}

export const Input: FunctionComponent<InputProps> = ({ focusHandler, inputHandler, setCoordinates, isSearching, setSearching }) => {

  const getPosition = () => {
    setSearching(true)
    navigator.geolocation.getCurrentPosition((locationData) => {
      const { latitude, longitude } = locationData.coords
      setSearching(false)
      setCoordinates(latitude, longitude)
    }, (err) => { setSearching(false) }, { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 })
  }

  let timeout: any
  function handleInput(event: React.SyntheticEvent<HTMLInputElement>): void {
    event.preventDefault()
    const value: string = event.currentTarget.value
    if (timeout !== undefined) clearTimeout(timeout)
    timeout = setTimeout(() => {
      inputHandler(value)
    }, 500)
  }
  return (
    <Container>
      <Label htmlFor="search-input">
        Search
        <StyledInput data-test-id={TEST_IDS.SEARCH_INPUT} id="search-input" placeholder="Stadt?" onChange={handleInput} onFocus={(event) => { focusHandler('focus', event) }} onBlur={(event) => { focusHandler('blur', event) }} type="text" />
      </Label>
      <IconContainer>
        {
          isSearching ? <LoadingSpinner data-test-id={TEST_IDS.LOADING_SPINNER} size={'100%'} color={'#000'} /> : null
        }
      </IconContainer>
      {
        navigator ?
          <IconContainer data-test-id={TEST_IDS.GET_LOCATION} onClick={getPosition}>
            <Icon size={25}>location</Icon>
          </IconContainer>
          :
          null
      }
    </Container >
  )
}