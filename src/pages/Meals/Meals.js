import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import styles from './Meals.style';

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;
  const {data} = useFetch(Config.API_URL + '/filter.php?c=' + categoryName);

  const handleSelectDetail = id => {
    navigation.navigate('DetailsScreen', {id});
  };

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleSelectDetail(item.idMeal)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.categoryList}
        data={data.meals}
        renderItem={renderMeals}
      />
    </SafeAreaView>
  );
};

export default Meals;
