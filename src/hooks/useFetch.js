import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: respData} = await axios.get(url);
      setData(respData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data};
};

export default useFetch;
