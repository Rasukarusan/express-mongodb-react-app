import '../../config';
import db from '../../database/connection';
import Order from '../../models/orders';

beforeAll(() => {
  db.on("open", () => {
    console.log("Database starts successfully");
  });
});

beforeEach(() => {
  if (db.collection("orders").countDocuments()) {
    return db.collection("orders").deleteMany({});
  }
});

afterAll(() => {
  return db.close();
});

describe("Order Creation", () => {
  it("Should add a new user to database", async () => {
    const newOrder = new Order({
      name: 'testuser',
      age: 20,
    });
    const createdOrder = await Order.create(newOrder);
    expect(createdOrder).toEqual(createdOrder);
  });
});
