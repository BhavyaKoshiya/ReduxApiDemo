import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

export function TextBox({
  source,
  title,
  onChangeText,
  titleStyle,
  contentContainerStyle,
  inputStyle,
  iconStyle,
  ...other
}) {

  return (
    <View>

      {title && <Text style={[styles.titleText, titleStyle]}>{title}</Text>}

      <View style={[styles.inputContainer, contentContainerStyle]}>

        {source && <Image style={[styles.sideIcon, iconStyle]} source={source} />}

        <TextInput style={[styles.input, inputStyle]} onChangeText={onChangeText} {...other} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    flex: 1,
  },
  sideIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '#000'
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 35,
    borderColor: '#595959',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom: 10,
    marginLeft: 20,
    color: '#595959',
  },
});
