import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderRadius:5,
        margin:10,
        width:Dimensions.get("window").width/2.3,
        
    },
    product_image: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 2.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent:"center",
        resizeMode:"contain",
        marginLeft:8
    },
    inner_container: {
        padding: 5,
        alignItems:"flex-start",
       
    },
    title: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 15
    },
    price: {
        color: 'black',
        fontSize: 15
    },
    stock: {
        color: 'red',
        fontWeight: 'bold',
    }
})