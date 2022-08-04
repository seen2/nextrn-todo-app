import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {  TodosStackNavigatorParamList } from '../types/navigationTypes';
import TodoDetailsScreen from '../screens/todo/TodoDetailsScreen';
import TodosScreen from '../screens/todo/TodosScreen';

const TodoStackNavigator=createNativeStackNavigator<TodosStackNavigatorParamList>();

export default function Todostack() {
  return (
    <TodoStackNavigator.Navigator>
      <TodoStackNavigator.Screen name='Todos' component={TodosScreen} />
      <TodoStackNavigator.Screen name='TodoDetails' component={TodoDetailsScreen} />

    </TodoStackNavigator.Navigator>
  )
}