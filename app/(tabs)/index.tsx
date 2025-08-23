
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleVisited } from "../../store/placesSlice";
import Header from "../components/Header";
import PlaceCard from "../components/PlaceCard";


const Home=()=> {
    const places = useSelector((state: RootState) => state.tourist.places);
  const dispatch = useDispatch<AppDispatch>();
 
  const router= useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
    
      }}
    >

      
            <Header
            text={"Places to see "}
            />

        <FlatList
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (


<PlaceCard
name={item.name}
location={item.location}
id={item.id}
short_desc={item.short_desc}
visited={item.visited}
image_url={item.image_url}

onToggle={()=>{
  dispatch(toggleVisited(item.id))
}}
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

/>
      )}
    />


      
   
    </SafeAreaView>
  );
}


export default Home;