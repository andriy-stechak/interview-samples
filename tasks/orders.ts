type UserName = string;

type TotalPrice = number;

type User = {
  id: number,
  name: UserName,
};

type Product = {
  id: number,
  name: string,
  price: number,
};

type Order = {
  id: number,
  productId: number;
  userId: number;
};

const users: User[] = [
  { id: 12234, name: 'John' },
  { id: 12235, name: 'Mike' },
  { id: 12236, name: 'Nick' },
];

const products: Product[] = [
  { id: 1, name: 'IPhone 12', price: 750 },
  { id: 2, name: 'IPhone 13', price: 950 },
  { id: 3, name: 'MacBook Pro', price: 2750 },
  { id: 4, name: 'MacBook Air', price: 1550 },
];

const orders: Order[] = [
  { id: 1, productId: 2, userId: 12234 },
  { id: 2, productId: 4, userId: 12235 },
  { id: 3, productId: 3, userId: 12235 },
  { id: 4, productId: 1, userId: 12236 }
];

const total = (orders: Order[], products: Product[], users: User[]): Map<UserName,TotalPrice> => {
  return new Map();
};

total(orders, products, users); // Map([['John', 950], ['Mike', 4300], ['Nick', 750]])