import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Today from "./Today";
import Profile from "./Profile";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
           headerShown: false,
              tabBarStyle: {
                  height: 50,
                backgroundColor: '#F2B6A0'
              }
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Entypo name="home" size={32} style={{ color: focused ? '#E06469' : '#748c94' }} />
                        
                    </View>
                )
            }}/>
            <Tab.Screen name='Today' component={Today} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Ionicons name="today" size={30} style={{ color: focused ? '#E06469' : '#748c94' }} />
                        
                    </View>
                )
            }}/>
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Ionicons name="person" size={30} style={{ color: focused ? '#E06469' : '#748c94' }} />
                        
                    </View>
                )
            }}/>

        </Tab.Navigator>
    )

}

export default Tabs ;