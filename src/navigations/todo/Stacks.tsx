import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodosScreen from "../../screens/todo/TodosScreen";
import TodoDetailsScreen from "../../screens/todo/TodoDetailsScreen";

const Stack = createNativeStackNavigator();

export default function TodoStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={TodosScreen} />
      <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
    </Stack.Navigator>
    
  );
}
