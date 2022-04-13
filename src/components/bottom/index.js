import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../../pages/home';
import { Search } from '../../pages/search';
import { Store } from '../../pages/store';
import { Profile } from '../../pages/profile';
import { Settings } from '../../pages/settings';

const Tab = createBottomTabNavigator();

export function Bottom(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarIcon: () => {
                return <Feather name="home" size={20} />
              }
            }}
            />

            <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
              tabBarIcon: () => {
                return <Feather name="search" size={20} />
              }
            }}
            />

            <Tab.Screen 
            name="Store" 
            component={Store}
            options={{
              tabBarIcon: () => {
                return <Feather name="shopping-bag" size={20} />
              }
            }}
            />

            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
              tabBarIcon: () => {
                return <Feather name="user" size={20} />
              }
            }}
            />

            <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{
              tabBarIcon: () => {
                return <Feather name="settings" size={20} />
              }
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    )
}