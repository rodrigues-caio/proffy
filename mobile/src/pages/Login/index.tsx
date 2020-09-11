import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import bgLogin from "../../assets/images/background-register.png";
import logoImg from "../../assets/images/logo.png";

import styles from "./styles";
import api from "../../services/api";

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  const [selected, setSelected] = useState(false);
  const [eye, setEye] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = useCallback(async () => {
    const response = await api.post("/users/login", {
      email,
      password,
    });

    console.log(response);
  }, []);

  function handleNavigateToRegister() {
    navigate("PartOneRegister");
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <ImageBackground
            resizeMode="contain"
            source={bgLogin}
            style={styles.background}
          >
            <View>
              <Image source={logoImg} style={styles.logo} />
              <Text style={styles.title}>
                Sua plataforma de {"\n"}estudos online.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.containerLogin}>
          <View style={styles.headerTitle}>
            <Text style={styles.titleLogin}>Fazer login</Text>
            <TouchableOpacity onPress={handleNavigateToRegister}>
              <Text style={styles.titleCreateAccount}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputs}>
            <View style={{ width: "100%", position: "relative" }}>
              <TextInput
                style={styles.inputEmail}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
                placeholderTextColor="#9C98A6"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
              />
              {email !== "" && <Text style={styles.textInput}>Email</Text>}

              {isFocused2 && <View style={styles.focusInput}></View>}
            </View>

            <View style={styles.inputContainer}>
              <View style={{ width: "100%", position: "relative" }}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Senha"
                  value={password}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor="#9C98A6"
                  secureTextEntry={eye ? true : false}
                />

                {password !== "" && <Text style={styles.textInput}>Senha</Text>}

                {isFocused && <View style={styles.focusInput}></View>}
              </View>

              <TouchableOpacity
                onPress={() => setEye(!eye)}
                style={styles.eyeIcon}
              >
                {eye ? (
                  <Feather name="eye" size={20} color="#8257E5" />
                ) : (
                  <Feather name="eye-off" size={20} color="#8257E5" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fogotRememberContainer}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setSelected(!selected)}>
                <View
                  style={[
                    styles.checkbox,
                    selected
                      ? { backgroundColor: "#04D361" }
                      : { backgroundColor: "#FFF" },
                  ]}
                >
                  {selected && <Feather name="check" size={16} color="#FFF" />}
                </View>
              </TouchableOpacity>

              <Text style={styles.text}>Lembrar-me</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.text}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.buttonLogin,
              email === "" || password === ""
                ? { backgroundColor: "#DCDCE5" }
                : { backgroundColor: "#04D361" },
            ]}
            onPress={() => handleLogin()}
          >
            <Text
              style={[
                styles.buttonText,
                email === "" || password === ""
                  ? { color: "#9C98A6" }
                  : { color: "#FFF" },
              ]}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
