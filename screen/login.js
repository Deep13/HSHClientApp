import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [loading, setloading] = useState(false);

    const [email, setemail] = useState('');
    const [pword, setpword] = useState('');
    const [emailinvalid, setemailinvalid] = useState(false);
    const [err, seterr] = useState(false);
    const [errmsg, seterrmsg] = useState(
        '',
    );
    const inValidator = (err, msg) => {
        seterr(true), seterrmsg(msg);
    };
    const loginStart = () => {
        if (email.length === 0) return inValidator(true, 'Email required');
        else if (pword.length === 0)
            return inValidator(true, 'Password Field Cannot be left Empty');
        else {
            setloading(true);
            // auth()
            //     .signInWithEmailAndPassword(email, pword)
            //     .then(() => {
            //         console.log('User signed in!');
            //         AsyncStorage.removeItem('username');
            //         AsyncStorage.removeItem('password');
            //         setloading(false);
            //         navigation.reset({
            //             index: 0,
            //             routes: [{ name: 'SignInContainer' }],
            //         });
            //     })
            //     .catch(error => {
            //         console.log(error);

            //         if (error.code === 'auth/user-not-found')
            //             inValidator(true, 'Incorrect Credentials');
            //         else if (error.code === 'auth/wrong-password')
            //             inValidator(true, 'The password is invalid');
            //         setloading(false);
            //     });
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#c8e1ff37' }}>
            <ScrollView>
                <View style={{ marginTop: 50, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 30, lineHeight: 42, fontWeight: 'bold', color: "#01315C" }}>Welcome back,</Text>
                    <Text style={{ fontSize: 20, lineHeight: 42, fontWeight: 'bold', color: "#01315C" }}>Login to continue</Text>
                    {err && (
                        <View
                            style={{
                                width: '100%',
                                height: 50,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                backgroundColor: '#d3d3d360',
                            }}>
                            <Text style={{ color: 'red', fontSize: 14 }}>&bull; {errmsg}</Text>
                        </View>
                    )}
                </View>
                <View style={[styles.container]}>
                    <View style={{ flex: 1, marginTop: 20, padding: 5, width: '100%' }}>
                        <Text style={{ fontSize: 18, paddingBottom: 5 }}>Email</Text>
                        <TextInput
                            onChangeText={text => setemail(text)}
                            style={{
                                width: '100%',
                                height: 50,
                                paddingLeft: 10,
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                borderColor: '#d3d3d3',
                                marginTop: 10,
                                color: '#000',
                                borderRadius: 6
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, marginTop: 15, padding: 5, width: '100%' }}>
                        <Text style={{ fontSize: 16, paddingBottom: 5 }}>Password</Text>
                        <TextInput
                            textContentType="password"
                            secureTextEntry={true}
                            onChangeText={text => setpword(text)}
                            style={{
                                width: '100%',
                                height: 50,
                                paddingLeft: 10,
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                borderColor: '#d3d3d3',
                                marginTop: 10,
                                color: '#000',
                                borderRadius: 6
                            }}
                        />
                    </View>

                    <View style={{ flex: 1, marginTop: 50, width: '100%' }}>
                        {loading ? (
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: 40,
                                    marginTop: 30,
                                    backgroundColor: '#012f6c',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 6
                                }}>
                                <ActivityIndicator />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={loginStart} style={{
                                width: '100%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#01315C'
                            }} >
                                <Text style={{ fontSize: 22, color: "#fff" }}>Login</Text>
                            </TouchableOpacity>
                        )}

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10

    },
});


export default Login;