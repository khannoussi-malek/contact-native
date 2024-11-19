import React from 'react';
import Group from './acceuil/Group';
import ListProfile from './acceuil/ListProfile';
import MyProfile from './acceuil/MyProfile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Acceuil = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="ListProfile" component={ListProfile} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default Acceuil;
