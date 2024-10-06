// src/components/IconButton.js

import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type IconButtonType = {
  title: string;
  iconName?: string;
  onPress: () => void;
  style?: object;
  iconColor: string;
  textColor: string;
};

const IconButton = (props: IconButtonType) => {
  const {title, iconName, onPress, style, iconColor, textColor} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, {color: textColor || '#000'}]}>{title}</Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={iconColor || '#000'}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
