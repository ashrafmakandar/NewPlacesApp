import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type placeCardProps={
      id: undefined|number;
  name:undefined| string;
  image_url: undefined|string;
  short_desc: undefined|string;
  location: undefined|string;
  description?: undefined|string;
  visited: undefined|boolean;
  onNavigate:()=>void;
  onToggle:()=>void;

}

const PlaceCard = ({id,name,image_url,short_desc,location,description,visited,onNavigate,onToggle}:placeCardProps) => {

    
  return (
    <TouchableOpacity
       onPress={()=>onNavigate()
        

       }
        
        style={{ margin: 10,borderRadius:12,borderWidth:1,borderColor:"#323232",padding:10 }}>
          <Image source={{ uri: image_url }} style={{  height: 200, borderRadius: 8 }}
          resizeMode="cover"
          defaultSource={require("../../assets/images/icon.png")}
          />
          <TouchableOpacity
            onPress={()=>onToggle()}
          style={{
            flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10,marginBottom:5
          }}>
                <Text style={{ fontWeight: "bold",padding:5,fontSize:21 }}>{name}</Text>
                     <View style={{
            flexDirection:"row",alignContent:"center",alignItems:"center",gap:10,justifyContent:"flex-end",marginRight:20
          }}>
                  <Ionicons
                   onPress={()=>onToggle()}
  
        name={visited ? "checkmark-circle" : "close-circle-outline"}
        size={25}
        color={visited ? "green" : "red"}
      />
<Text>{visited?"Visited":"Not Visited"}</Text>

          </View>
       

          </TouchableOpacity>
         <Text style={{
            padding:5,fontSize:17
          }}>{location}</Text>
          <Text style={{
            marginBottom:5,padding:5,fontSize:16
          }}>{short_desc}</Text>
     
      {description?.length>=0? <Text style={{
                           marginBottom:5,padding:5,fontSize:16
                         }}>{description}</Text>:null}
    
          
        </TouchableOpacity>
  )
}

export default PlaceCard