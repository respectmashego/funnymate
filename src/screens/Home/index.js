import {View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import posts from '../../../Data/posts';
import { useState } from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const Home = () => {
  const [currentIndex, SetcurrenrIndex] = useState(0);
  const handleChangeIndexValue = ({index}) => {
    SetcurrenrIndex(index);
  };
  return (
    <View>
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}

        /> */}
        <SwiperFlatList
      data={posts}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({item, index}) => (
        <Post item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
    </View>
  );
};

export default Home;
