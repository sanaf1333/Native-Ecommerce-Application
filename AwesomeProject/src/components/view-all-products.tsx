import React, {memo} from 'react';
import ProductCard from './product-card';
import {FlatList, ActivityIndicator} from 'react-native';

interface ViewAllProductsProps {
  title?: string;
  visibleItems: any[];
  handleEndReached: () => void;
  loadingMore: boolean;
}
const MemoizedProductCard = memo(ProductCard);
const ViewAllProducts: React.FC<ViewAllProductsProps> = ({
  visibleItems,
  handleEndReached,
  loadingMore,
}) => {
  return (
    <>
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
