import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import namesData from '../../data';
import CardMembesList from '../../components/CardMemberList';
import theme from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/routes';
import {nameType} from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const MemberScreen = () => {
  const navigation = useNavigation();
  const handleAddPress = () => {
    console.log('Agrega miembro');
    // navigation.navigate(Routes.ADD_MEMBER);
  };

  const handlePress = (item: nameType) => {
    navigation.navigate(Routes.DETAIL_MEMBER, {item});
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 30,
        }}>
        <Text style={styles.title}>Lista de Discursantes</Text>
        <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={20} color={theme.white} />
          <Text style={styles.addText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={namesData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <CardMembesList name={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MemberScreen;
