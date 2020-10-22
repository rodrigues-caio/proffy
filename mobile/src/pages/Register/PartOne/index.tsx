import React from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIncon from "../../../assets/images/icons/back.png";
import styles from "./styles";

const PartOne: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton>
          <Image source={backIncon} resizeMode="contain" />
        </BorderlessButton>

        <View style={styles.points}>
          <View>
            <Text>.</Text>
          </View>
          <View>
            <Text>.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PartOne;
