// chat list Item INDEX.JS
import {Text, View, Image, StyleSheet} from 'react-native';


const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg" }}
                  style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>lukas</Text>
                    <Text style={styles.subTitle}> 8:30</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}> Hello there</Text>
            </View>
            
        </View>
    )
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