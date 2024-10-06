import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: '100%',
    maxWidth: 400,
    padding: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.greenList.primary || '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  calling: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  detailsContainer: {
    width: '100%',
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'left',
  },
});
export default styles;
