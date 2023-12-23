import {StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Userdetail = ({users}) => {
  const [index, setindex] = useState(0);
  const [user, setuser] = useState(users[index]);

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <View style={styles.user_img_ontainer}>
          <Image style={styles.user_img} source={{uri: user.avatar}} />
        </View>
        <View style={styles.sub_container}>
          <View style={styles.fields}>
            <Text style={styles.heading}>ID</Text>
            <Text style={styles.text}>{user.id}</Text>
          </View>
          <View style={styles.fields}>
            <Text style={styles.heading}>UID</Text>
            <Text style={styles.text}>{user.uid}</Text>
          </View>
        </View>
        <View style={styles.sub_container}>
          <View style={styles.fields}>
            <Text style={styles.heading}>First Name</Text>
            <Text style={styles.text}>{user.first_name}</Text>
          </View>
          <View style={styles.fields}>
            <Text style={styles.heading}>Last Name</Text>
            <Text style={styles.text}>{user.last_name}</Text>
          </View>
          <View style={styles.fields}>
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
          <View style={styles.fields}>
            <Text style={styles.heading}>Username</Text>
            <Text style={styles.text}>{user.username}</Text>
          </View>
          <View style={styles.fields}>
            <Text style={styles.heading}>Subscription</Text>
            <Text style={styles.text}>{user.subscription.plan}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom_section}>
        <Button
          title="Previous"
          onPress={() => {
            if (index != 0) {
              setuser(users[index - 1]);
              setindex(index => index - 1);
            } else {
              ToastAndroid.show('No previous user exists', ToastAndroid.SHORT);
            }
          }}
          buttonStyle={styles.prev_button}
          style={{color: '#000'}}
          disabled={index === 0 ? true : false}
        />
        <Button
          title="Next"
          onPress={() => {
            if (index != users.length - 1) {
              setuser(users[index + 1]);
              setindex(index => index + 1);
              console.log(index);
            } else {
              ToastAndroid.show('End of users list', ToastAndroid.SHORT);
            }
          }}
          buttonStyle={styles.next_button}
          style={{color: '#fff'}}
          disabled={index === users.length - 1 ? true : false}
        />
      </View>
    </View>
  );
};

export default Userdetail;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  top_section: {
    padding: 20,
    height: '90%',
    backgroundColor: '#fff',
  },
  bottom_section: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '10%',
    // backgroundColor: '#000',
  },
  user_img_ontainer: {
    display: 'flex',
    alignItems: 'center',
  },
  sub_container: {
    marginVertical: 15,
  },
  fields: {
    marginVertical: 5,
  },
  user_img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  heading: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },

  prev_button: {
    backgroundColor: '#fff',
    borderColor: '#000',
    color: '#000',
  },
  next_button: {
    backgroundColor: '#4834D4',
  },
});
