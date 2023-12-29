import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const SignUp = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"#736AFF"}}>
        <View className="flex-row justify-center">
      <TouchableOpacity style={{justifyContent:"flex-start",marginRight:50}} onPress={()=>navigation.navigate("Welcome")} >
        <Text style={{fontSize:40}} className=" pb-3  rounded-xl bg-yellow-500 text-black">⬅</Text>
      </TouchableOpacity>
    

      
        <Image style={{height:220,width:220,borderRadius:20,marginTop:55,marginRight:90}} className="" source={require("../laptop3.jpg")} />
       
      </View>
      <View className="items-center space-y-5 " style={{backgroundColor:"white",flex:1,marginTop:8,borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <Text className="text-black text-2xl font-bold pt-4 ">Sign Up</Text>
        <TextInput className="px-2  text-gray-700 bg-gray-100 rounded-2xl " style={{width:280}} placeholder='Enter your name' />
       
        <TextInput className="px-2  text-gray-700 bg-gray-100 rounded-2xl " style={{width:280}} placeholder='Enter your email' />
        <TextInput 
        secureTextEntry={true} className="px-2 text-gray-700 bg-gray-100 rounded-2xl " style={{width:280}}  placeholder='Enter your password' />
       
         <TouchableOpacity  className="bg-yellow-500 h-14 rounded-xl justify-center items-center">
            <Text style={{textAlign:"center"}} className="text-xl w-72 text-center font-bold text-black ">Sign up</Text>
           
        </TouchableOpacity>
        <Text style={{color:"#736AFF"}} className="font-bold text-xl">
            OR
        </Text>
        <View>

       <TouchableOpacity onPress={()=>navigation.navigate("Login")}  className="flex-row">
     <Text >Already have an Account?</Text>
        <Text style={{color:"blue",marginLeft:3}}>Login</Text>
        </TouchableOpacity>
        </View>
        

      </View>
      
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})