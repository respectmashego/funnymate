import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: windowHeight,
  },

  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  videoPlayButton:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:1
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
    //right container


  rightContainer: {
    alignSelf: 'flex-end',
    alignItems:'center',
    marginRight:5
    
  },
  statsLabel: {color: 'white',fontSize:15,fontWeight:'600' } ,
  rightIcons:{
    color: 'white', fontSize: 35
  },
  iconCommentsContainer:{
    padding:10,
    alignItems:'center'

  },
   //-----bottom container------
  bottomContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
 
  handle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    marginRight: 5,
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage:{
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor:'white',
    borderWidth:5,
    borderColor:'#4c4c4c'

    
  
  },


});
export default styles;
