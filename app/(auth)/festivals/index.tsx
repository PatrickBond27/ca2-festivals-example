import { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, FlatList, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import FestivalItem from '../../../components/FestivalItem';

export default function Page() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('https://festivals-api.vercel.app/api/festivals')
         .then(response => {
          console.log(response.data);
          setFestivals(response.data);
         })
         .catch(e => {
            console.error(e);
         });

  }, []);

  const onDelete = (id?: string) => {
    let newFestivals = festivals.filter((festival: any) => festival._id !== id);
    setFestivals(newFestivals);
  }

  let festivalsList = festivals.map((festival: any) => {
    return <FestivalItem key={festival._id} festival={festival} />
  });
  
  return (
    <>
    {/* <Text>This is the view all festivals page</Text> */}

    {festivalsList}

    {/* <FlatList
        data={festivals}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}


    <Link href={{
        pathname: '/festivals/[id]',
        params: { id: '235641726gfjwhgvfuwf' }
    }}>This is festival 1</Link>

    <Link href={{
        pathname: '/festivals/[id]',
        params: { id: 'secondblahblah8753842' }
    }}>Second festival</Link>

    <Link href={{
        pathname: '/festivals/[id]',
        params: { id: '33333333333' }
    }}>Cool festival</Link>
    </>
  );
}