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

export interface IProducts {
  ProductId: number;
  Quantity: number;
}

export interface IUsers {
  Id: number;
  Name: string;
  Email: string;
  Phone: number;
  Address: string;
  RegisterDate: Date;
}
