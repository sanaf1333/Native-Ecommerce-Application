export interface editProductModal{
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
    onPressSubmit: () => void;
    items: {label: string, value: string}[];
    handlePriceChange: (text: string) => void;
    renderDropdownItems: () => JSX.Element[];
    image: string;
    setImage: (text: string) => void;
  }