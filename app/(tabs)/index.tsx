
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleVisited } from "../../store/placesSlice";


export default function Home() {
    const places = useSelector((state: RootState) => state.tourist.places);
  const dispatch = useDispatch<AppDispatch>();
 
  const navigation= useRouter();
  return (
    <View
      style={{
        flex: 1,
    
      }}
    >

        <FlatList
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
       onPress={()=>{
   navigation.push("/(tabs)/visited" as never, {
  id: item.id,
  name: item.name,
  desc: item.description,
  image: item.image_url,
} as never);
       }}
        
        style={{ margin: 10 }}>
          <Image source={{ uri: item.image_url }} style={{  height: 200, borderRadius: 8 }}
          resizeMode="cover"
          />
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.short_desc}</Text>
          <Ionicons
           onPress={() => dispatch(toggleVisited(item.id))}
        name={item.visited ? "checkmark-circle" : "close-circle-outline"}
        size={28}
        color={item.visited ? "green" : "red"}
      />
<Text>{item.visited.toString()?"visited":"not visited"}</Text>
          
        </TouchableOpacity>
      )}
    />


      
   
    </View>
  );
}
