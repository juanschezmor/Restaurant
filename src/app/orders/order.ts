export class Order {
  orderId: number;
  userId: number;
  state: string;

  constructor(orderId: number = 0, userId: number = 0, state: string = '') {
    this.orderId = orderId;
    this.userId = userId;
    this.state = state;
  }
}
