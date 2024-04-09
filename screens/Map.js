import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Button,TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native'
import { Center } from 'native-base';
import { useReducer } from 'react';
import { auth } from '../firebase_setup/firebase_config';


const MuMap = () => {

    const navigation = useNavigation();

    const handlesignout = () => {
        auth.signOut();
        alert("Logged Out");
        navigation.navigate("Login");
      }
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ uri: 'https://nmdmap.netlify.app/' }}
                style={{ flex: 1, width: 375, marginRight: 2 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
                scalesPageToFit={true}
            />
            <Button style={styles.logout} title="Logout" onPress={handlesignout}></Button>

        </View>
    ); 
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logout:{
        marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    }
});
export default MuMap;