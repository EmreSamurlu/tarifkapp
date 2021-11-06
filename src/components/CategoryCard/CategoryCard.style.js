import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EDE9E2',
    marginVertical: 7,
    marginLeft: 20,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 10,
  },
  category: {
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 10,
    color: '#CA6038',
    fontWeight: 'bold',
  },
});
