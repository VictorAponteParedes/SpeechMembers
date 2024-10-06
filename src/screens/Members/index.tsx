import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import namesData from '../../data';
import CardMembesList from '../../components/CardMemberList';
import theme from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/routes';
import {nameType} from '../../types';
import styles from './styles';

const MemberScreen = () => {
  const navigation = useNavigation();

  const handlePress = (item: nameType) => {
    navigation.navigate(Routes.DETAIL_MEMBER, {item});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Discursantes</Text>
      <TouchableOpacity>
        <FlatList
          data={namesData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <CardMembesList name={item.name} />
            </TouchableOpacity>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MemberScreen;
