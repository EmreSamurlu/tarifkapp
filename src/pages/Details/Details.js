import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import DetailCard from '../../components/DetailCard';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({route}) => {
  const {id} = route.params;
  const {data} = useFetch(Config.API_URL + '/lookup.php?i=' + id);

  const renderDetails = ({item}) => <DetailCard details={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.categoryList}
        data={data.meals}
        renderItem={renderDetails}
      />
    </SafeAreaView>
  );
};

export default Details;
