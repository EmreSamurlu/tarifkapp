import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  img: {
    flex: 1,
    position: 'relative',
    height: 150,
    borderRadius: 10,
  },
  back: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    height: 35,
    paddingRight: 10,
  },
  category: {
    fontSize: 25,
    color: '#D9981E',
    fontWeight: 'bold',
  },
});
