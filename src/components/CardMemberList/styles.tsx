import {StyleSheet} from 'react-native';
import theme from '../../theme';
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: theme.white,
    borderColor: '#000',
    borderWidth: 0.5,
    marginVertical: 5,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    marginLeft: 10,
  },
});

export default styles;
