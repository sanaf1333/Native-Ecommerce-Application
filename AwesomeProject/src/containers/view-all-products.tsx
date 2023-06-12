import React, {useMemo, useCallback, useState, useEffect, memo} from 'react';
import {useDataService} from '../hooks/use-service';
import ProductCard from '../components/product-card';
import {
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ViewAllProducts from '../components/view-all-products';

interface ViewAllProductsProps<T, P> {
  service: (params?: P) => Promise<T>;
  params?: P;
  title?: string;
  itemsPerPage?: number;
}
const MemoizedProductCard = memo(ProductCard);
const ViewAllProductsContainer: React.FC<ViewAllProductsProps<any, any>> = ({
  service,
  params,
  title,
  itemsPerPage = 4,
}) => {
  const {category, order} = params;
  const paramsToSend = category ? {category, order} : {order};
  const productsData = useDataService(service, paramsToSend);
  const memoizedProductsData = useMemo(() => productsData, [productsData]);

  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [visibleItems, setVisibleItems] = useState<any[]>([]);

  const handleEndReached = useCallback(() => {
    if (
      memoizedProductsData.data &&
      totalItems > visibleItems.length &&
      !loadingMore
    ) {
      setLoadingMore(true);
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [memoizedProductsData.data, totalItems, visibleItems, loadingMore]);

  useEffect(() => {
    if (totalItems > visibleItems.length || visibleItems.length === 0) {
      setTotalItems(
        memoizedProductsData.data ? memoizedProductsData.data.length : 0,
      );
      const start = (currentPage - 1) * itemsPerPage;
      const end = currentPage * itemsPerPage;
      const visible = memoizedProductsData.data
        ? memoizedProductsData.data.slice(start, end)
        : [];
      setVisibleItems(prevVisibleItems => [...prevVisibleItems, ...visible]);
    }
  }, [memoizedProductsData.data, currentPage, itemsPerPage]);

  useEffect(() => {
    setLoadingMore(false);
  }, [visibleItems]);

  return (
    <>
    <ViewAllProducts title={title} visibleItems={visibleItems} handleEndReached={handleEndReached} loadingMore={loadingMore} />
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

export default ViewAllProductsContainer;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});
