import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import namesData from '../../data';
import CardMembesList from '../../components/CardMemberList';
import theme from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/routes';
import {nameType} from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {nameMemberChage} from '../../types';

const MemberScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');

  const handleAddPress = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setNewName('');
  };

  const handleLoad = () => {
    if (newName) {
      console.log('Cargando miembro:', newName);
      setModalVisible(false);
      setNewName('');
    }
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
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <CardMembesList name={item.name} />
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar nuevo miembro</Text>
            <Text style={styles.label}>Nombre del miembro</Text>
            <TextInput
              placeholder="Nombre"
              value={newName}
              onChangeText={setNewName}
              style={styles.input}
            />
            <TouchableOpacity style={styles.loadButton} onPress={handleLoad}>
              <Text style={styles.buttonText}>Cargar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MemberScreen;
