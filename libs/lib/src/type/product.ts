import { ESize } from "@lib/enum";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  size: ESize;
}
