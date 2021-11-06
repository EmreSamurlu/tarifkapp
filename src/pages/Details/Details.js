import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({navigation, route}) => {
  const {idMeal} = route.params;
  const {data} = useFetch(Config.API_URL + '/lookup.php?i=' + idMeal);

  const renderCategories = ({item}) => <CategoryCard category={item} />;

  const handleSelectDetail = categoryName => {
    navigation.navigate('MealsScreen', {categoryName});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.categoryList}
        data={data.categories}
        renderItem={renderCategories}
      />
    </SafeAreaView>
  );
};

export default Details;
