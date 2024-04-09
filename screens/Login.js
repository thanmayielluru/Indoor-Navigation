import React, { useState, setErrorMsg } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase_setup/firebase_config'


// const img = { uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcX2wF22GpWWoTD8Fe3hqK0h4Amvzjws0phg&usqp=CAU" };
const img = { uri: "https://4kwallpapers.com/images/wallpapers/electric-neon-colorful-dark-background-lighting-2880x1800-2654.jpg" };

// const img={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhw-Q4KysTy4ifEW1wiVeyoTOvVyGo63ang&usqp=CAU"};

function Login() {
  const [username, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, username, pass)
      .then(userCredentials => {
        console.log(username);
        alert("Hi "+username+".Welcome!!"); 
        navigation.navigate("Map");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            alert("invalid email");
            break;
          case "auth/wrong-password":
            alert("wrong password");
            break;
          default:
            alert("Invalid user");
            break;
        }
      });
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.Middle}>
          <Text style={styles.details}>Don't you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.details}> Sign up</Text></TouchableOpacity>
        </View>

        {/* input fields */}
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


        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign}
            onPress={handleSignin}>
            LOGIN
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
      <Login />
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
  LoginText: {
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
