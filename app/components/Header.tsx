import React from 'react'
import { Text, View } from 'react-native'
type HeaderProps = {
  text: string
}


const Header = ({text}:HeaderProps) => {
  
  return (
    <View style={{
        marginTop:10
    }}>
  <Text style={{
                textAlign:"center",fontSize:21,fontWeight:"bold",paddingTop:"5%",marginBottom:"2%"
              }}>{text}</Text>
    </View>
    
  )
}

export default Header