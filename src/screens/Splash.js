import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cficon.png')} style={styles.img} />
      <Text style={styles.appTitle}>CodeFobe</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  appTitle: {
    fontSize: 40,
    fontFamily: 'DMSans-Bold',
    color: '#000',
    fontWeight: 'bold',
  },
  img: {
    width: 150,
    height: 180,
    marginBottom: 20,
  },
});
