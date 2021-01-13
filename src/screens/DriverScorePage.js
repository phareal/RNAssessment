import React from 'react'
import {ScrollView, StatusBar, Text,View} from 'react-native';




import {DRIVER_SCORE} from '../mocks/data';
import {
    BaseContainer,
    BaseDriverCardScoringContainer,
    BodyContainer,
    HomeCardButtonContainer,
} from '../styles/home-component-styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, SIZECONSTANTS} from '../misc/utils';
import {Body, Card, CardItem} from 'native-base';
import RNSpeedometer from 'react-native-speedometer';

export default function DriverScorePage(props){
    const width_proportion = '10%';
    const height_proportion = '100%';
    return (
        <BaseContainer>
            <StatusBar barStyle={"dark-content"}/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <BodyContainer>
                        <Card style={{
                            height:SIZECONSTANTS.homeCardButton,
                        }}>
                            <CardItem style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}>
                                <Body>
                                    <BaseDriverCardScoringContainer>
                                        <View style={{
                                             width:width_proportion,
                                             height:height_proportion,
                                             backgroundColor:Colors.baseSuccess
                                            }}>
                                        </View>

                                        <View style={{
                                            marginLeft:5,
                                        }}>
                                           <Text style={{
                                               fontWeight: 'bold'
                                           }}>My Driver Score : {DRIVER_SCORE.myScore}</Text>
                                        </View>
                                        <Text style={{
                                            marginLeft:10,
                                            fontWeight: 'bold'
                                        }}>Tips : Lorem ipsum</Text>
                                    </BaseDriverCardScoringContainer>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{
                            height:SIZECONSTANTS.homeCardButton,
                        }}>
                            <CardItem style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}>
                                <Body>
                                    <BaseDriverCardScoringContainer>
                                        <View style={{
                                             width:width_proportion,
                                             height:height_proportion,
                                             backgroundColor:Colors.baseSuccess
                                            }}>
                                        </View>

                                        <View style={{
                                            marginLeft:5,
                                        }}>
                                           <Text style={{
                                               fontWeight: 'bold'
                                           }}>Acceleration Score : {DRIVER_SCORE.myAccelerationScore}</Text>
                                        </View>
                                        <Text style={{
                                            marginLeft:10,
                                            fontWeight: 'bold'
                                        }}>Tips : Lorem ipsum</Text>
                                    </BaseDriverCardScoringContainer>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{
                            height:SIZECONSTANTS.homeCardButton,
                        }}>
                            <CardItem style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}>
                                <Body>
                                    <BaseDriverCardScoringContainer>
                                        <View style={{
                                             width:width_proportion,
                                             height:height_proportion,
                                             backgroundColor:Colors.baseSuccess
                                            }}>
                                        </View>

                                        <View style={{
                                            marginLeft:5,
                                        }}>
                                           <Text style={{
                                               fontWeight: 'bold'
                                           }}>Braking Score : {DRIVER_SCORE.myBrakingScore}</Text>
                                        </View>
                                        <Text style={{
                                            marginLeft:10,
                                            fontWeight: 'bold'
                                        }}>Tips : Lorem ipsum</Text>
                                    </BaseDriverCardScoringContainer>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{
                            height:SIZECONSTANTS.homeCardButton,
                        }}>
                            <CardItem style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}>
                                <Body>
                                    <BaseDriverCardScoringContainer>
                                        <View style={{
                                             width:width_proportion,
                                             height:height_proportion,
                                             backgroundColor:Colors.baseSuccess
                                            }}>
                                        </View>

                                        <View style={{
                                            marginLeft:5,
                                        }}>
                                           <Text style={{
                                               fontWeight: 'bold'
                                           }}>Cornering Score : {DRIVER_SCORE.myCorneringScore}</Text>
                                        </View>
                                        <Text style={{
                                            marginLeft:10,
                                            fontWeight: 'bold'
                                        }}>Tips : Lorem ipsum</Text>
                                    </BaseDriverCardScoringContainer>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{
                            height:SIZECONSTANTS.homeCardButton,
                        }}>
                            <CardItem style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}>
                                <Body>
                                    <BaseDriverCardScoringContainer>
                                        <View style={{
                                             width:width_proportion,
                                             height:height_proportion,
                                             backgroundColor:Colors.baseSuccess
                                            }}>
                                        </View>

                                        <View style={{
                                            marginLeft:5,
                                        }}>
                                           <Text style={{
                                               fontWeight: 'bold'
                                           }}>Eco driving Score : {DRIVER_SCORE.myEcoDrivingScore}</Text>
                                        </View>
                                        <Text style={{
                                            marginLeft:10,
                                            fontWeight: 'bold'
                                        }}>Tips : Lorem ipsum</Text>
                                    </BaseDriverCardScoringContainer>
                                </Body>
                            </CardItem>
                        </Card>
                    </BodyContainer>
                </ScrollView>
            </SafeAreaView>
        </BaseContainer>
    )
}
