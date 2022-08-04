import { NavigationContainer } from "@react-navigation/native";
import Todostack from "./src/navigations/Todostack";


export default function App() {
  return (
    <NavigationContainer>
       <Todostack />
    </NavigationContainer>
  );
}

