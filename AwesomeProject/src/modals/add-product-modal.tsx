export interface addProductModal{
    title: string;
    setTitle: (text: string) => void;
    price: string;
    setPrice:(text: string) => void;
    description: string;
    setDescription: (text: string) => void;
    isDropdownOpen: boolean;
    setIsDropdownOpen: (value: boolean) => void;
    value: string;
    setValue: (text: string) => void;
    selectedImage: string | null;
    setSelectedImage: (text: string) => void;
    handleImageSelect: () => void;
    onPressSubmit: () => void;
    items: {label: string, value: string}[];
    handlePriceChange: (text: string) => void;
    renderDropdownItems: () => JSX.Element[];
  }