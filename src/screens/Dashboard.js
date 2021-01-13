import React from 'react'
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'native-base';
import {
    ActionButtonContainer,
    AppBarContainer,
    BaseContainer,
    BodyContainer,
    HomeCardButtonContainer,
} from '../styles/home-component-styles';
import {Colors, SIZECONSTANTS} from '../misc/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import RNSpeedometer from 'react-native-speedometer'
import ROUTES from '../misc/routes';

export default function Dashboard(props){

    const {navigation} = props
    return (
      <BaseContainer>
          <StatusBar barStyle={"dark-content"}/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <AppBarContainer>
                        <MaterialCommunityIcons name={"text"} size={30} style={{
                            color:Colors.baseBgColor
                        }}/>
                        <ActionButtonContainer>
                            <MaterialCommunityIcons name={"bell-outline"} size={30} style={{
                                color:Colors.baseBgColor
                            }}/>
                            <AntDesign name={"user"} size={30} style={{
                                marginLeft:20,
                                color:Colors.baseBgColor
                            }}/>
                        </ActionButtonContainer>

                    </AppBarContainer>
                    <BodyContainer>
                        <Text style={{
                            color:Colors.white,
                            fontSize: 30,
                            fontWeight: 'bold',
                            lineHeight:50,
                        }}>
                            {"Hello Georges,\nDid you pass a good day  ?"}
                        </Text>

                        {/*gauge part*/}

                        <View style={{
                            marginTop:20
                        }}>
                            <Card style={{
                                height:SIZECONSTANTS.gaugeContainerHeigth
                            }}>
                                <CardItem>
                                    <Body>
                                        <RNSpeedometer value={70} size={200} minValue={0} maxValue={100} labelNoteStyle={{
                                            color:Colors.baseThemeBgColor
                                        }}/>
                                    </Body>
                                </CardItem>
                            </Card>

                            {/*actions buttons*/}
                            <View style={{
                                marginTop:20,
                            }}>
                                <TouchableOpacity onPress={() =>
                                  navigation.navigate(ROUTES.DriverScorePage)
                                } style={{
                                    height: SIZECONSTANTS.homeCardButton,

                                }}>

                                    <Card pointerEvents="none" style={{
                                        height: SIZECONSTANTS.homeCardButton
                                    }}>
                                        <CardItem >
                                            <HomeCardButtonContainer>
                                                <MaterialCommunityIcons name={"scoreboard"} size={30} style={{
                                                    color:Colors.baseSuccess
                                                }}/>
                                                <Text>My Driver Score Page</Text>
                                                <MaterialCommunityIcons name={"eye"} size={30}/>


                                            </HomeCardButtonContainer>
                                        </CardItem>
                                    </Card>

                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => alert(JSON.stringify(props))} style={{
                                    height: SIZECONSTANTS.homeCardButton,
                                    marginTop: 50,
                                }}>
                                    <Card pointerEvents="none">
                                        <CardItem >
                                            <HomeCardButtonContainer>
                                                <MaterialCommunityIcons name={"scoreboard"} size={30} style={{
                                                    color:Colors.baseSuccess
                                                }}/>
                                                <Text>My trips Page</Text>
                                                <MaterialCommunityIcons name={"eye"} size={30}/>


                                            </HomeCardButtonContainer>
                                        </CardItem>
                                    </Card>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate(ROUTES.AboutPage)
                                } style={{
                                    height: SIZECONSTANTS.homeCardButton,
                                    marginTop: 50,
                                }}>
                                    <Card pointerEvents="none">
                                        <CardItem >
                                            <HomeCardButtonContainer>
                                                <MaterialCommunityIcons name={"scoreboard"} size={30} style={{
                                                    color:Colors.baseSuccess
                                                }}/>
                                                <Text>About</Text>
                                                <MaterialCommunityIcons name={"eye"} size={30}/>
                                            </HomeCardButtonContainer>
                                        </CardItem>
                                    </Card>

                                </TouchableOpacity>
                            </View>
                        </View>

                    </BodyContainer>
                </ScrollView>

            </SafeAreaView>
      </BaseContainer>
    )
}
