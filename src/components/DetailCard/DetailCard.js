import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({details}) => {
  const {strInstructions, strMeal, strMealThumb, strYoutube, strArea} = details;
  const redirectYoutube = () => Linking.openURL(strYoutube);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: strMealThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.area}>{strArea}</Text>
      </View>
      <View style={styles.hr} />
      <Text style={styles.description}>{strInstructions}</Text>
      <TouchableOpacity
        style={styles.button_container}
        onPress={redirectYoutube}>
        <Text style={styles.button_title}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
