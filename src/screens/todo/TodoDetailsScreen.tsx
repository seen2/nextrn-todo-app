import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TodoScreenNavigationProps } from '../../types/navigationTypes';

const TodoDetailsScreen = () => {

  const navigation=useNavigation<TodoScreenNavigationProps>();

  return (
    <View style={styles.app}  >
      <Text>TodoDetailsScreen</Text>
      <Button title='View Details' onPress={()=>{navigation.navigate("Todos");}} />
    </View>
  )
}

export default TodoDetailsScreen

const styles=StyleSheet.create({

  app:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }

}
)