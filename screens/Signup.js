import React, { useState, setErrorMsg } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { PreventRemoveContext, useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_setup/firebase_config'
const img = { uri: "https://4kwallpapers.com/images/wallpapers/electric-neon-colorful-dark-background-lighting-2880x1800-2654.jpg" };

function Signup() {

  const [username, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [pass_c, setPass_c] = useState('')

  const handleSignup =()=>{
    if(pass.length>=6 && pass===pass_c)
    {
    createUserWithEmailAndPassword(auth,username,pass)
    .then(userCredentials =>{
      console.log(username);
      alert("Registration Successful");
      navigation.navigate("Login");    
    })
    .catch(error=>{
      switch (error.code) {
      case "auth/email-already-in-use":
        alert("Email alrady in use");
        break;
      case "auth/invalid-email":
        alert("Invalid email");
        break;
      }
    });
  }
  else if(pass.length<6){
    alert("Password should be atleast 6 charecters");
  }
  else{
    alert("Password dosen't match");
  }
  }

  const navigation = useNavigation();
  return (
    // Headdiing
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        <View style={styles.Middle}>
          <Text style={styles.SignUpText}>SignUp</Text>
        </View>


        {/* Navigate to login */}
        <View style={styles.Middle}>
          <Text style={styles.details}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.details}>Login</Text></TouchableOpacity>
        </View>


        {/* Input tags */}

        {/* Username */}
        <View style={styles.buttonStyle}>
          <View style={styles.input}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'white',
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Username or Email"
              _light={{
                color: 'white',
                placeholderTextColor: 'blueGray.400'
              }}
              _dark={{
                color: 'white',
                placeholderTextColor: "blueGray"
              }}
              value={username}
              onChangeText={text => setUser(text)}
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.buttonStyle}>
          <View style={styles.input}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'white',
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                color: 'white',
                placeholderTextColor: 'blueGray.400'
              }}
              _dark={{
                color: 'white',
                placeholderTextColor: "blueGray"
              }}

              value={pass}
              onChangeText={text => setPass(text)}
            />
          </View>
        </View>

        {/* Password confirmation */}
        <View style={styles.buttonStyle}>
          <View style={styles.input}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'white',
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Confirm Password"
              _light={{
                color: 'white',
                placeholderTextColor: 'blueGray.400'
              }}
              _dark={{
                color: 'white',
                placeholderTextColor: "blueGray"
              }}

              value={pass_c}
              onChangeText={text => setPass_c(text)}
            />
          </View>
        </View>

        {/* Register button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign}
          onPress={handleSignup}>
            Register Now
          </Button>
        </View>



        <View style={styles.linestyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'white' }}>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}



export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  SignUpText: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  Middle: {
    alignItems: 'center',
  },
  details: {
    marginTop: 20,
    fontSize: 20,
    color: 'white'
  },
  input: {
    color: 'white',
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: '#026efd',
  },
  linestyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center'
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
})