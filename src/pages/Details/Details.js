import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    Config.API_URL + '/lookup.php?i=' + id,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
