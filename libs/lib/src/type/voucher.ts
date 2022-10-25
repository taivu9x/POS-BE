import { ESize, EVoucherType } from "@lib/enum";

export interface IDiscountBaseCondition {
  size: ESize;
}
export interface IDiscountCondition extends IDiscountBaseCondition {
  discount?: number;
}
export interface IDiscountPercentCondition extends IDiscountBaseCondition {
  discountPercent?: number;
}
export interface IDealCondition extends IDiscountBaseCondition {
  deal?: {
    from: number;
    to: number;
  };
}

export interface IVoucher
  extends IDiscountCondition,
    IDiscountPercentCondition,
    IDealCondition {
  id: string;
  name: string;
  type: EVoucherType;
}
