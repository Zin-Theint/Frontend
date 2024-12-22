import { faker } from '@faker-js/faker';

function generateMockOrders(num = 20) {
  const orders = [];
  for (let i = 0; i < num; i++) {
    const randomDate = faker.date.between('2012-01-01', '2024-12-22');
    const formatDate = randomDate.toISOString().split('T')[0];

    // Expiration date is randomDate + 1 to 30 days
    const expirationDate = new Date(
      randomDate.getTime() + faker.datatype.number({ min: 1, max: 30 }) * 86400000
    );
    const formatExpirationDate = expirationDate.toISOString().split('T')[0];

    orders.push({
      account: faker.finance.account(),
      operation: 'Buy',
      symbol: 'NATIONAL BANK OF CDA',
      description: 'NATIONAL BANK OF CDA',
      qty: faker.datatype.number({ min: 1, max: 1000 }),
      filledQty: faker.datatype.number({ min: 0, max: 500 }),
      price: faker.finance.amount(1, 2000, 2),
      status: 'Waiting',
      period: 'Transmission',
      date: formatDate,
      expiration: formatExpirationDate,
      noRef: faker.datatype.number({ min: 10000000, max: 99999999 }),
      extRef: '2-' + faker.random.alphaNumeric(7) + '-0',
    });
  }
  return orders;
}

const mockOrders = generateMockOrders(20);

export default mockOrders;
