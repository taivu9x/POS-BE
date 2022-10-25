import { IVoucher } from "@lib/type";
export enum ESize {
  "SMALL" = "SMALL",
  "MEDIUM" = "MEDIUM",
  "LARGE" = "LARGE",
}

export enum EVoucherType {
  "DISCOUNT" = "DISCOUNT",
  "DISCOUNT_PERCENT" = "DISCOUNT_PERCENT",
  "DEAL" = "DEAL",
}

export const listVoucher: IVoucher[] = [
  {
    id: "1",
    name: "Microsoft",
    type: EVoucherType.DEAL,
    size: ESize.SMALL,
    deal: {
      from: 3,
      to: 2,
    },
  },
  {
    id: "2",
    name: "Amazon",
    type: EVoucherType.DISCOUNT,
    size: ESize.LARGE,
    discount: 19.99,
  },
  {
    id: "3",
    name: "Facebook",
    type: EVoucherType.DEAL,
    size: ESize.MEDIUM,
    deal: {
      from: 5,
      to: 4,
    },
  },
];
