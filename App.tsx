import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/navigations/Stacks";
import Tabs from "./src/navigations/Tabs";
import TodoStacks from "./src/navigations/todo/Stacks";

export default function App() {
  return (
    <NavigationContainer>
       {false?<>
        <Stacks />
       </>:<>
       <Tabs />
       </>
       }
    </NavigationContainer>
  );
}

