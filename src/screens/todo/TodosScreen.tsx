import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const TodosScreen = (props:any) => {
  return (
    <View style={styles.app}>
      <Text>TodosScreen</Text>
      <Button
        title="View Details"
        onPress={() => props.navigation.navigate("TodoDetails")}
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
