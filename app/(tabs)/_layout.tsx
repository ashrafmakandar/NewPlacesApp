import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../../store";

export default function RootLayout() {
  return  <Provider store={store}>
   
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:"blue",
      tabBarInactiveTintColor:"#839288"
    }}>
      <Tabs.Screen 
      
      

    options={{
      title:"Home",
      tabBarLabel:"Home",
      
    
          tabBarIcon: ({ focused,color,size }) => <Ionicons size={size} name={focused?"home":"home-outline"} color={color} />
    }}
      name="Home"
      
      ></Tabs.Screen>
         <Tabs.Screen
          options={{
      title:"Visited",
          tabBarLabel:"Visited",
          tabBarIcon: ({ color,size,focused }) => <Ionicons size={size} name="heart" color={color} />,
    
    }}
         
         name="Visited"></Tabs.Screen>
{/* 
               <Tabs.Screen
          options={{
      title:"RandomPlace",
          tabBarLabel:"RandomPlace",
          tabBarIcon: ({ color,size,focused }) => <Ionicons size={size} name="heart" color={color} />,
    
    }}
         
         name="RandomPlace"></Tabs.Screen> */}
    </Tabs>
    </Provider>
}
