import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Login from '../pages/Login';

import PartOneRegister from '../pages/Register/PartOne';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
        <Screen name="Login" component={Login} />

        <Screen name="PartOneRegister" component={PartOneRegister} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;