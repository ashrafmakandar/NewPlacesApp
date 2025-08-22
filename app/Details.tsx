import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { toggleVisited } from "../store/placesSlice";

const Details = () => {
    
 
  const { id, name, desc, image ,location,visited} = useLocalSearchParams<{
    id: string;
    name: string;
    desc: string;
    image: string;
    location:string;
    visited:string
    
  }>();

   const dispatch = useDispatch<AppDispatch>();
 const places = useSelector((state: RootState) => state.tourist.places);
 const place = places.find((p) => p.id.toString() === id);
console.log(places[0])
  return (
    <SafeAreaView style={{
        flex:1,
    }}>
        <View style={{
            flexDirection:"row",alignItems:"center",marginTop:"2%",marginBottom:"2%"
        }}>
            <Ionicons
            onPress={()=>{
                router.back();

            }}
            size={25}
            color={"#000"}
            name="arrow-back"
            style={{
                paddingLeft:10,
            }}

            />
            <Text style={{
                textAlign:"center",
               width:"90%",fontSize:18
            }}>{place?.name}</Text>

        </View>
       <View style={{
        paddingHorizontal:"2%",marginTop:10
       }}>

<Image source={{ uri: image }} style={{  height: 200, borderRadius: 8 ,marginBottom:"5%"}}
             resizeMode="cover"
             />
                    <TouchableOpacity
           onPress={() => dispatch(toggleVisited(place?.id))}
          style={{
            flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10,marginBottom:5
          }}>
                <Text style={{ fontWeight: "bold",padding:5,fontSize:21 }}>{name}</Text>
                     <View style={{
            flexDirection:"row",alignContent:"center",alignItems:"center",gap:10,justifyContent:"flex-end",marginRight:20
          }}>
                  <Ionicons
           onPress={() => dispatch(toggleVisited(place?.id))}
        name={place?.visited ? "checkmark-circle" : "close-circle-outline"}
        size={25}
        color={place?.visited ? "green" : "red"}
      />
<Text>{place?.visited?"Visited":"Not Visited"}</Text>

          </View>
       

          </TouchableOpacity>
         <Text style={{
            padding:5,fontSize:17
          }}>{location}</Text>
                <Text style={{
                      marginBottom:5,padding:5,fontSize:16
                    }}>{desc}</Text>
      
       </View>
    </SafeAreaView>
  )
}

export default Details