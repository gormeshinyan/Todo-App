import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListItem= ({item,deleteItem}) =>{
return(
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.lisItemView}>
            <Text style={styles.lisItemText}>
               {item.text}
            </Text>
            <Icon name='remove' size={20} color='firebrick' onPress={()=>deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
);
};
const styles=StyleSheet.create({
listItem:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderBottomWidth:1,
    borderColor:'#eee'
},
lisItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
lisItemText:{
 fontSize:20,
 color:'blueviolet'
},
})
export default ListItem;