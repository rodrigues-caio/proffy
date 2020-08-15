import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import bgRegister from '../../assets/images/background-register.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

function Register() {
  return (
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
    </View>
  );
};

export default Register;