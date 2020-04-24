import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishDetailComponent';
import AboutUs from './AboutComponent'
import Contact from './ContactComponent'

const MenuNavigator = createStackNavigator();
const AboutUsNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();

const HeaderOptions = {
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
};

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />            
        </MenuNavigator.Navigator>
    );
}

const HomeNavigator = createStackNavigator();


function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}

function AboutUsNavigatorScreen() {
    return(
        <AboutUsNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <AboutUsNavigator.Screen
                name="AboutUs"
                component={AboutUs}
            />
        </AboutUsNavigator.Navigator>
    );
}

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
            />
        </ContactNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return(
        <MainNavigator.Navigator 
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#D1C4E9'
            }}
        >
            <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} />
            <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} />
            <MainNavigator.Screen name="About Us" component={AboutUsNavigatorScreen} />
            <MainNavigator.Screen name="Contact Us" component={ContactNavigatorScreen} />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

  render() {
 
    return(
        <NavigationContainer>
            <MainNavigatorDrawer/>
        </NavigationContainer>
    );
  }
}
  
export default Main;