import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'

const TodoDetailsScreen = (props:any) => {
  return (
    <View style={styles.app}  >
      <Text>TodoDetailsScreen</Text>
      <Button title='View Details' onPress={()=>props.navigation.navigate("Todos")} />
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