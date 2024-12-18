export type OrderItem = {
    _id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    price: number;
    date: number;
    popular: boolean;
    quantity: number;
  };
  
  export type OrderList = {
    _id: string;
    userId: string;
    items: OrderItem[];
    amount: number;
    address: Address;
    status: string;
    paymentMethod: string;
    payment: boolean;
    date: number;
  };
  
  export type Address = {
    city: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    state: string;
    street: string;
    zipCode: string;
  };
  