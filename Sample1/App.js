
/*
import styled from 'styled-components/native'

const Box = styled.View: {
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
};
  
const BoxText = styled.Text:{
  color: darkslategray;
  font-weight: bold;
};

const App = () => {
  return {
    <Box>
      <BoxText>I'm a box</BoxText>
    </Box>
};
};
*/

import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles/styles";

export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>#1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#3</Text>
      </View>
    </View>
  );
}
