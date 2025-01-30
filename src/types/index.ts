import { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export type ListItem = {
  Label: string;
  location: string;
  icon?: ReactNode;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  sellerEmail: string;
  stock: number;
};
