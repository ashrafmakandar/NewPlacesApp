import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { toggleVisited } from "../store/placesSlice";
import PlaceCard from "./components/PlaceCard";

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


    


                    <PlaceCard
                    id={place?.id}
                    image_url={place?.image_url}
                    name={place?.name}
                    location={place?.location}
                    description={place?.description}
                    visited={place?.visited}
                    onToggle={()=>{
                        dispatch(toggleVisited(place?.id))
                    }}
                    
                    />
      
       </View>
    </SafeAreaView>
  )
}

export default Details