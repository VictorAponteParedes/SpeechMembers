import {Text, View} from 'react-native';
import IconButton from '../../components/CustomBottom';

const HomeScreen = () => {
  const handlePress = () => {
    console.log('Botón presionado!');
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>Bienvenido a mi Pagina</Text>
      <IconButton
        title="Continuar"
        iconName="arrow-forward"
        onPress={handlePress}
        iconColor="#fff"
        textColor="#fff"
      />
    </View>
  );
};

export default HomeScreen;
