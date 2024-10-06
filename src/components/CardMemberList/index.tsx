import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';
import styles from './styles';

type CardMemberListProps = {
  name: string;
};

const CardMemberList = ({name}: CardMemberListProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Icon
        name="person"
        size={30}
        color={theme.greenList.primary}
        style={styles.icon}
      />
    </View>
  );
};

export default CardMemberList;
