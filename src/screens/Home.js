import {StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from './Splash';
import Userdetail from './../components/Userdetail';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    fetch('https://random-data-api.com/api/users/random_user?size=80')
      .then(response => response.json())
      .then(json => {
        ToastAndroid.show('Data fetched successfully', ToastAndroid.SHORT);
        setUsers(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        ToastAndroid.show(
          'Error occured while fetching data. Please try again',
          ToastAndroid.SHORT,
        );
      });
  };

  // didn't use stack navigation because it was taking lot of time

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <View style={styles.container}>
          <Userdetail users={users} />
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 40,
    fontFamily: 'DMSans-Bold',
  },
  img: {
    widht: 150,
    height: 200,
  },
});
