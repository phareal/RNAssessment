
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../screens/Dashboard';
import { navigationRef } from './NavigationService';
import ROUTES from '../misc/routes';
import DriverScorePage from '../screens/DriverScorePage';


const Stack = createStackNavigator();


export default function Main(){

    return (
        <NavigationContainer  ref={navigationRef}>
            <Stack.Navigator >
                <Stack.Screen
                    name={ROUTES.DashBoardScreen}
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ROUTES.DriverScorePage}
                    component={DriverScorePage}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
