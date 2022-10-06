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
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    {key: '1', name: 'Item 1'},
    {key: '2', name: 'Item 2'},
    {key: '3', name: 'Item 3'},
    {key: '4', name: 'Item 4'},
    {key: '5', name: 'Item 5'},
    {key: '6', name: 'Item 6'},
    {key: '7', name: 'Item 7'},
    {key: '8', name: 'Item 8'},
    {key: '9', name: 'Item 9'},
    {key: '10', name: 'Item 10'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 11, name: 'Item 11'}]);
    setRefreshing(false);
  };
  return (
    <FlatList
      data={Items}
      renderItem={({item}) => (
        <View style={styles.name}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
    //   }>
    //   {Items.map(i => {
    //     return (
    //       <View style={styles.item} key={i.key}>
    //         <Text style={styles.text}>{i.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  name: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
