
import { Root } from 'native-base';
import React from 'react';
import {enableScreens} from "react-native-screens";
enableScreens();
import  Navigator from './src/navigation';

export default  function EntryPoint(){
    return (
        <Root>
            <Navigator/>
        </Root>
    )
}
