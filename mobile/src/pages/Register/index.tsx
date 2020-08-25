import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity,
  CheckBox,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import bgRegister from '../../assets/images/background-register.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

function Register() {
  const [selected, setSelected] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding': 'height'}
      style={styles.avoidingKeyboard}
      keyboardVerticalOffset={1}
      enabled
    >
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          resizeMode="contain"
          source={bgRegister}
          style={styles.background}
        >
          <View>
            <Image source={logoImg} style={styles.logo} />
            <Text style={styles.title}>
              Sua plataforma de {'\n'}estudos online.
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.containerLogin}>
        <View style={styles.headerTitle}>
          <Text style={styles.titleLogin}>Fazer login</Text>
          <TouchableOpacity>
            <Text style={styles.titleCreateAccount}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputs}>
          <TextInput 
            style={styles.inputEmail}
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#9C98A6"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
          />

          <TextInput 
            style={styles.inputPassword}
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#9C98A6"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.fogotRememberContainer}>
          <View style={styles.checkboxContainer}>
              <CheckBox 
                style={styles.checkbox}
                value={selected}
                onValueChange={setSelected}
              />
              <Text style={styles.text}>Lembrar-me</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.text}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[styles.buttonLogin, 
          (email === '' || password === '') 
          ? { backgroundColor: '#DCDCE5' } 
          : { backgroundColor: '#04D361' } 
          ]}
        >
          <Text 
            style={[styles.buttonText, 
            (email === '' || password === '') 
            ? { color: '#9C98A6' }
            : { color: '#FFF' }
            ]}
          >Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;