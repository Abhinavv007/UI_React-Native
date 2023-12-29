import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"#736AFF"}}>
        <View className="flex-row justify-center">
      <TouchableOpacity onPress={()=>navigation.navigate("Welcome")}style={{justifyContent:"flex-start",marginRight:50}} >
        <Text style={{fontSize:40}} className=" pb-3  rounded-xl bg-yellow-500 text-black">⬅</Text>
      </TouchableOpacity>
      
        <Image style={{height:220,width:220,borderRadius:20,marginTop:55,marginRight:90}}  source={require("../laptop2.jpg")} />
      </View>
      <View className="items-center space-y-5 " style={{backgroundColor:"white",flex:1,marginTop:10,borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <Text className="text-black text-2xl font-bold pt-4 ">Login</Text>
       
        <TextInput className="px-2  text-gray-700 bg-gray-100 rounded-2xl " style={{width:280}} placeholder='Enter your email' />
        <TextInput 
        secureTextEntry={true} className="px-2 text-gray-700 bg-gray-100 rounded-2xl " style={{width:280}}  placeholder='Enter your password' />
        <TouchableOpacity>
            <Text>Forgot password?</Text>
        </TouchableOpacity>
         <TouchableOpacity  className="bg-yellow-500 h-14 rounded-xl justify-center items-center">
            <Text style={{textAlign:"center"}} className="text-xl w-72 text-center font-bold text-black ">Login</Text>
           
        </TouchableOpacity>
        <Text style={{color:"#736AFF"}} className="font-bold text-xl">
            OR
        </Text>
        <View>

       <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}  className="flex-row">
     <Text >Doesn't have an Account?</Text>
        <Text style={{color:"blue",marginLeft:3}}>SignUp</Text>
        </TouchableOpacity>
        </View>
        

      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})