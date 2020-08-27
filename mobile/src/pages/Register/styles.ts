import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avoidingKeyboard: {
    flex: 1,
  },
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
    minHeight: 280,
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

  containerLogin: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F7',
    padding: 32,
  },

  headerTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleLogin: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#32264d',
    fontSize: 24
  },

  titleCreateAccount: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#8257E5'
  },

  inputs: {
    width: '100%',
    fontFamily: 'Poppins_400Regular',
    marginTop: 16,
    flex: 1,
  },

  inputEmail: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFF',
    paddingLeft: 16,
    borderColor: '#E6E6F0',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180'
  },

  textInput: {
    position: 'absolute', 
    top: 5, 
    left: 16, 
    fontFamily: 'Poppins_400Regular', 
    fontSize: 10, 
    color: '#C1BCCC'
  },

  focusInput: {
    position: 'absolute', 
    width: 2, 
    height: 40, 
    backgroundColor: '#8257E5', 
    left: 0, 
    top: 10
  },

  inputContainer: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },

  eyeIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 20,
    right: 20,
  },

  inputPassword: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFF',
    paddingLeft: 16,
    borderColor: '#E6E6F0',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8,
    position: 'relative',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180'
  },

  onFocusInput: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 20,
    height: 20,
  },

  fogotRememberContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'  
  },

  checkbox: {
    width: 25,
    height: 25,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    color: '#9C98A6',

  }, 

  buttonLogin: {
    width: '100%',
    height: 56,
    marginTop: 16,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 16,
  },
});

export default styles;