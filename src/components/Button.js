import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  const {title, onPress, buttonStyle, style, disabled} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, buttonStyle]}>
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '40%',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'DNSans-Regular',
  },
});

export default Button;
