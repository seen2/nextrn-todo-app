import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateTodoScreen from '../screens/todo/CreateTodoScreen';

import UserDetailsScreen from '../screens/auth/UserDetailsScreen';
import TodoStacks from './todo/Stacks';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
     <>
     <Tab.Navigator>
        <Tab.Screen name="X" component={TodoStacks} />
        <Tab.Screen name="CreateTodo" component={CreateTodoScreen} />
        <Tab.Screen name="UserDetails" component={UserDetailsScreen} />
      </Tab.Navigator>
     </>
   
  )
}