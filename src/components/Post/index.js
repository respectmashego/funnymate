import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

const Post = props => {
  const [post, setPost] = useState(props.post);

  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const [like, setLike] = useState(false);
  const onLikePress = () => {
    const likesToAdd = like ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={post.videoUrl}
          style={styles.video}
          resizeMode="cover" //for video ti take full width
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={onLikePress}
            style={styles.iconCommentsContainer}>
            <AntDesign
              name={like ? 'heart' : 'heart'}
              style={{color: like ? 'red' : 'white', fontSize: 35}}
            />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCommentsContainer}>
            <Ionic name="ios-chatbubble" style={styles.rightIcons} />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCommentsContainer}>
            <Ionic name="paper-plane" style={styles.rightIcons} />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCommentsContainer}>
            <Feather name="more-vertical" style={styles.rightIcons} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.profile}>
              <Image
                style={styles.profileImage}
                source={post.user.profilePicture}
              />

              <Text style={styles.handle}>@{post.user.username}</Text>
            </View>

            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.songRow}>
              <Ionic
                name="ios-musical-note"
                style={{color: 'white', fontSize: 16}}
              />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
          </View>
          <Image style={styles.songImage} source={post.songImage} />
        </View>
      </View>
    </View>
  );
};

export default Post;
