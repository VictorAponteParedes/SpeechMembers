import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: theme.greenList.primary,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
