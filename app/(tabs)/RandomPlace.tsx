import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const RandomPlace = () => {
     const places = useSelector((state: RootState) => state.tourist.places);
  const [randomPlace, setRandomPlace] = useState<typeof places[0] | null>(null);
 
  const suggestRandomPlace = () => {
 
    if (places.length === 0) return;
    const index = Math.floor(Math.random() * places.length);
    setRandomPlace(places[index]);
    
  };
  return (
    <SafeAreaView>
       <Text style={{
           textAlign:"center",fontSize:21,fontWeight:"bold",paddingTop:"5%",marginBottom:"2%"
       }}>Random Place Suggestion </Text>

      <TouchableOpacity style={{
        padding:10,margin:10,height:56,backgroundColor:"#9898ed",borderRadius:12,alignContent:"center",justifyContent:"center"

      }} onPress={suggestRandomPlace}>
        <Text style={{
textAlign:"center",fontSize:17,color:"#fff",fontWeight:"bold"

        }}>Suggest a Place</Text>
      </TouchableOpacity>

      {randomPlace && (
        <View style={{
            margin: 10,borderRadius:12,borderWidth:1,borderColor:"#323232",padding:10
        }}>
          <Image
            source={{ uri: randomPlace.image_url }}
            style={{
                height: 200, borderRadius: 8 
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
        
          style={{
            flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10,marginBottom:5
          }}>
                <Text style={{ fontWeight: "bold",padding:5,fontSize:21 }}>{randomPlace.name}</Text>
                     <View style={{
            flexDirection:"row",alignContent:"center",alignItems:"center",gap:10,justifyContent:"flex-end",marginRight:20
          }}>
                  <Ionicons
          
        name={randomPlace.visited ? "checkmark-circle" : "close-circle-outline"}
        size={25}
        color={randomPlace.visited ? "green" : "red"}
      />
<Text>{randomPlace.visited?"Visited":"Not Visited"}</Text>

          </View>
       

          </TouchableOpacity>
         <Text style={{
            padding:5,fontSize:17
          }}>{randomPlace.location}</Text>
          <Text style={{
            marginBottom:5,padding:5,fontSize:16
          }}>{randomPlace.short_desc}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default RandomPlace;