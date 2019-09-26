export interface IProducts {
    ProductId: number;
    ProductName: string;
    ProductPrice: number;
    AvailablePieces: number;
    ProductImg: string;
}

export interface IOrders {
  OrderId: number;
  OrderDate: Date;
  UserId: number;
  Products: Array<IProducts>;
  PaymentType: string;
}


