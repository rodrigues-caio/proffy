import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F0F0F7'
  },

  title: {
    color: '#D4C2FF',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },

  content: {
    width: '100%',
    minHeight: 340,
    padding: 40,
    backgroundColor: '#8257e5'
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 140,
    height: 47,
  },
});

export default styles;