import { createGlobalStyle } from 'styled-components';

import RobotoRegular from './Roboto-Regular.ttf';
import RobotoBlack from './Roboto-Black.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'roboto-regular';
        src: local('Roboto Regular'), local('RobotoRegular'),
        url(${RobotoRegular}) format('truetype');
    }

    @font-face {
        font-family: 'roboto-black';
        src: local('Roboto Black'), local('RobotoBlack'),
        url(${RobotoBlack}) format('truetype');
    }

    body {
        font-family: 'roboto-regular'; // Default font family
    }
`;
