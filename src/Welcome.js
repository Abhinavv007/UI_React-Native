import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View  style={{flex:1,backgroundColor:"#736AFF"}}>
      <View style={{justifyContent:"space-evenly",alignItems:"center",flex:1,}}>
        <Text className="text-3xl" style={{fontSize:30,fontWeight:"bold",color:'white',}}>Let's get started!</Text>
        <Image style={{height:220,width:220,borderRadius:20}} source={require("../laptop.jpg")} />
      </View>
      <View className="">
        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}  className=" bg-yellow-500 h-14 mx-8 rounded-xl justify-center items-center">
            <Text style={{textAlign:"center"}} className="text-xl font-bold text-black ">SignUp</Text>
           
        </TouchableOpacity>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} className="mb-20 justify-center items-center">
                <Text  className="mt-3 text-white">Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})