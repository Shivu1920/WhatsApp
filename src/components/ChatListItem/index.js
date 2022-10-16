// chat list Item INDEX.JS
import {Text, View, Image, StyleSheet} from 'react-native';


const ChatListItem = ({ chat }) => {
    return (
      <View style={styles.container}>
        {/* User Avatar */}
        <Image source={{ uri: chat?.user.image }} style={styles.image} />
  
        {/* content */}
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {chat?.user.name}
            </Text>
  
            <Text style={styles.subTitle}>
              {chat?.lastMessage.createdAt}
            </Text>
          </View>
  
          <Text style={styles.subTitle} numberOfLines={2}>
            {chat?.lastMessage.text}
          </Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        //alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,

    },
    image : {
        width : 60,
        height: 60, 
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth, // smallest width of border wwe can give
        borderBottomColor: 'lightgray',
        //backgroundColor: 'red',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',

    },


});

export default ChatListItem;