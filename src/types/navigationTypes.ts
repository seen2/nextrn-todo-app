import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TodosStackNavigatorParamList = {
  Todos: undefined;
  TodoDetails: undefined;
};

export type TodoScreenNavigationProps = NativeStackNavigationProp<
  TodosStackNavigatorParamList,
  "TodoDetails",
  "Todos"
>;


