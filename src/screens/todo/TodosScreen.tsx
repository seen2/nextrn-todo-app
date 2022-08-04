import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { TodoScreenNavigationProps } from "../../types/navigationTypes";


const TodosScreen = () => {

  const navigation=useNavigation<TodoScreenNavigationProps>();

  return (
    <View style={styles.app}>
      <Text>TodosScreen</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate("TodoDetails")}
      />
    </View>
  );
};

export default TodosScreen;
const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
