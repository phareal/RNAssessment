import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export  const Colors = {
    baseThemeBgColor: "#4363ec",
    white: '#fff',
    baseBgColor: '#f4f6fc',
    baseGreyish: '#a4a4a4',
    baseTint: '#2b49c3',
    baseSuccess: '#64DD17'
}

export const SIZECONSTANTS = {
    baseHeight:windowHeight,
    baseWidth: windowWidth,
    gaugeContainerHeigth: windowHeight * 0.2,
    homeCardButton: windowHeight * 0.1
}

