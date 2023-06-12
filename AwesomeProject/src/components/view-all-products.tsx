import React, { memo} from 'react';
import ProductCard from './product-card';
import {
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

interface ViewAllProductsProps {
  title?: string;
  visibleItems: any[];
  handleEndReached: () => void;
  loadingMore: boolean;
}
const MemoizedProductCard = memo(ProductCard);
const ViewAllProducts: React.FC<ViewAllProductsProps> = ({
  title, visibleItems, handleEndReached, loadingMore
}) => {
  
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={visibleItems}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item, index}) => (
          <MemoizedProductCard productId={item.id} key={index} />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={(loadingMore && <ActivityIndicator />) || null}
      />
    </>
  );
};

export default ViewAllProducts;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});
