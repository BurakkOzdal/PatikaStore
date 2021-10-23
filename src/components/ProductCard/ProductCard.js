import React from "react";
import { Image, Text, View } from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({ product }) => {
    let stock=""
    if (!product.inStock) {
        stock= product.inStock.toString() =="false" ? "STOKTA YOK":""
    }
    return (
        <View style={styles.container}>
            <Image style={styles.product_image} source={{ uri: product.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.stock}>{stock}</Text>
            </View>
        </View>
    )
}
export default ProductCard;