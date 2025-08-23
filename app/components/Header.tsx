import React from 'react'
import { Text } from 'react-native'
type HeaderProps = {
  text: string
}


const Header = ({text}:HeaderProps) => {
  return (
      <Text style={{
                textAlign:"center",fontSize:21,fontWeight:"bold",paddingTop:"5%",marginBottom:"2%"
              }}>{text}</Text>
  )
}

export default Header