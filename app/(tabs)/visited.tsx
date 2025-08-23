


import { toggleVisited } from '@/store/placesSlice';
import { useRouter } from 'expo-router';
import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Header from "../components/Header";
import PlaceCard from "../components/PlaceCard";

const visited = () => {
    const visitedPlaces = useSelector(
  (state: RootState) => state.tourist.visitedPlaces
);
  const dispatch = useDispatch<AppDispatch>();
 
  const router= useRouter();

  return (
    <SafeAreaView>
    <Header
text="Visited Places"
/>

        <FlatList
      data={visitedPlaces}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (

<PlaceCard
id={item.id}
location={item.location}
name={item.location}
image_url={item.image_url}
short_desc={item.short_desc}
visited={item.visited}
onNavigate={()=>{
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
onToggle={()=>{
    dispatch(toggleVisited(item.id))

}}
/>
      )}
    />
    </SafeAreaView>
  )
}

export default visited