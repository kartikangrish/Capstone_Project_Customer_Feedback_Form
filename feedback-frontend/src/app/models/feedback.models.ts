export interface Customer {
  customerId?: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Product {
  productId?: number;
  name: string;
  description?: string;
  category: string;
}

export interface Feedback {
  id?: number;
  customer: Customer;
  product: Product;
  rating: number;
  comment: string;
  submittedAt?: Date;
}