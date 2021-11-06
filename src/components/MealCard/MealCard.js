import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  const {strMeal, strMealThumb} = meal;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: strMealThumb}} />
        <View style={styles.back}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.category}>
            {strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
