export interface cartModal{
    cartByIDQuery: any,
    handleSetTotalPrice: (price: number) => void;
    calculateTotalPrice: () => number;
  }