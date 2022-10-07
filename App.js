/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*comment*/
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const App = () => {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g.John"
        onChangeText={value => SetName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color="#00f"
      /> */}
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>
      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: 150,
    Width: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});

export default App;
