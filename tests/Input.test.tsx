import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Input, TEST_IDS } from '../src/components/Input/Input'

afterEach(cleanup)

it('Loading Spinner should not exist', () => {
  const { getByTestId } = render(<Input isSearching={false} />)
  expect(getByTestId(TEST_IDS.LOADING_SPINNER)).toBeNull
})

 //Test if searching icon is visible
