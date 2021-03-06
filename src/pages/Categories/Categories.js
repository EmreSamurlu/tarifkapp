import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';
import styles from './Categories.style';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL + '/categories.php');

  const handleSelectCategory = categoryName => {
    navigation.navigate('MealsScreen', {categoryName});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleSelectCategory(item.strCategory)}
    />
  );
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

export default Categories;
