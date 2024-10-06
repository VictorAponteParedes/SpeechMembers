import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

const DetailMemberScreen = () => {
  const route = useRoute();
  const {item} = route.params;
  console.log('Datos usuario: ', item);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.calling}>{item.calling}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>📅 Edad: {item.age}</Text>
          <Text style={styles.detail}>🏙️ Ciudad: {item.city}</Text>
          <Text style={styles.detail}>📧 Correo: {item.email}</Text>
          <Text style={styles.detail}>📞 Teléfono: {item.phone}</Text>
          <Text style={styles.detail}>
            📆 Fecha de registro:{' '}
            {new Date(item.registrationDate).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailMemberScreen;
