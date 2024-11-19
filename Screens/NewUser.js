import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useRef, useState } from 'react';
import firebase from '../Config';

const NewUser = ({ navigation }) => {
  const auth = firebase.auth();
  const [email, setEmail] = useState('A');
  const [password, setPassword] = useState('0');
  const [confirmPassword, setConfirmPassword] = useState('0');
  const refinput2 = useRef();

  const rgisterHandler = () => {
    if (password != confirmPassword)
      alert('Confermation of password is note valid');
    if (password == confirmPassword)
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('auth');
        })
        .catch((error) => alert(error.message));
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ffff80" />
      <ImageBackground
        source={require('../assets/stars.jpg')}
        style={styles.container}
      >
        <View
          style={{
            height: 300,
            width: '85%',
            backgroundColor: '#0005',
            borderRadius: 20,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <Text style={styles.title}>Authentification</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            onsubmitEditing={() => refinput2.current.focus()}
            blurOnSubmit={false}
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            ref={refinput2}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            keyboardType="default"
          ></TextInput>
          <TextInput
            ref={refinput2}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.input}
            placeholder="confirme password"
            secureTextEntry={true}
            keyboardType="default"
          ></TextInput>
          <View style={styles.buttonHandler}>
            <Button
              onPress={() => {
                BackHandler.exitApp();
              }}
              title="Sign In"
              style={{ backgroundColor: '#fff', borderRadius: 5 }}
            >
              Exit
            </Button>
            <Button
              onPress={rgisterHandler}
              title="Sign In"
              style={{ backgroundColor: '#fff', borderRadius: 5 }}
            >
              Rrgister
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('auth');
              }}
              title="Sign In"
              style={{ backgroundColor: '#fff', borderRadius: 5 }}
            >
              Back
            </Button>
          </View>
          <TouchableOpacity
            style={{
              paddingRight: 10,
              width: '100%',
              alignItems: 'flex-end',
              marginTop: 10,
              marginBottom: 10,
            }}
          ></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  input: {
    fontFamily: 'serif',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 7,
    height: 50,
    width: '90%',
    borderRadius: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  buttonHandler: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default NewUser;
