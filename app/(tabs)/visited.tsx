import { useRoute } from "@react-navigation/native";
import React from 'react';
import { Text, View } from 'react-native';

const visited = () => {
    const route = useRoute();
  const { id, name, desc, image } = route.params as {
    id: number;
    name: string;
    desc: string;
    image: string;
  };
  console.log(name);

  return (
    <View>
      <Text>visited</Text>
    </View>
  )
}

export default visited