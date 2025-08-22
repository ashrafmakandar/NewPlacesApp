
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleVisited } from "../../store/placesSlice";


export default function Home() {
    const places = useSelector((state: RootState) => state.tourist.places);
  const dispatch = useDispatch<AppDispatch>();
 
  const router= useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
    
      }}
    >

       <Text style={{
              textAlign:"center",fontSize:21,fontWeight:"bold",paddingTop:"5%",marginBottom:"2%"
            }}>Places to see </Text>

        <FlatList
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
       onPress={()=>{
  router.push({
      pathname: "/Details",
      params: {
        id: item.id,
        name: item.name,
        desc: item.description,
        location:item.location,
        image: item.image_url,
        visited:item.visited.toString()
      },
    });
       }}
        
        style={{ margin: 10,borderRadius:12,borderWidth:1,borderColor:"#323232",padding:10 }}>
          <Image source={{ uri: item.image_url }} style={{  height: 200, borderRadius: 8 }}
          resizeMode="cover"
          />
          <TouchableOpacity
           onPress={() => dispatch(toggleVisited(item.id))}
          style={{
            flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10,marginBottom:5
          }}>
                <Text style={{ fontWeight: "bold",padding:5,fontSize:21 }}>{item.name}</Text>
                     <View style={{
            flexDirection:"row",alignContent:"center",alignItems:"center",gap:10,justifyContent:"flex-end",marginRight:20
          }}>
                  <Ionicons
           onPress={() => dispatch(toggleVisited(item.id))}
        name={item.visited ? "checkmark-circle" : "close-circle-outline"}
        size={25}
        color={item.visited ? "green" : "red"}
      />
<Text>{item.visited?"Visited":"Not Visited"}</Text>

          </View>
       

          </TouchableOpacity>
         <Text style={{
            padding:5,fontSize:17
          }}>{item.location}</Text>
          <Text style={{
            marginBottom:5,padding:5,fontSize:16
          }}>{item.short_desc}</Text>
     
    
          
        </TouchableOpacity>
      )}
    />


      
   
    </SafeAreaView>
  );
}
