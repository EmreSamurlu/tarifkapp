import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  body_container: {
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D9981E',
  },
  area: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    margin: 10,
  },
  button_container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  button_title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
