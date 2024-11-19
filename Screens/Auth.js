import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useRef, useState } from 'react';
import firebase from '../Config';

const Auth = ({ navigation }) => {
  const auth = firebase.auth();

  const [email, setEmail] = useState('A');
  const [password, setPassword] = useState('0');
  const refinput2 = useRef();
  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('acceuil'))
      .catch((err) => alert(err.message));
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ffff80" />
      <ImageBackground
        source={require('../assets/stars.jpg')}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Authentification</Text>
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
          <Button
            onPress={login}
            title="Sign In"
            style={styles.loginButton}
          >
            Sign In
          </Button>
          <TouchableOpacity style={styles.createUserTouchable}>
            <Text
              onPress={() => {
                navigation.navigate('newUser');
              }}
              style={{ color: '#fff' }}
            >
              Create new user
            </Text>
          </TouchableOpacity>
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
  card: {
    height: 300,
    width: '85%',
    backgroundColor: '#ccc4',
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  loginButton: { backgroundColor: '#fff', borderRadius: 5 },
  createUserTouchable: {
    paddingRight: 10,
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Auth;
