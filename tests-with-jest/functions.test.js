const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.getSumOfNums(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.getSumOfNums(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be Falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// test('User should be Jenny Bykova object', () => {
//   expect(functions.createUser()).toBe({firstName: 'Jenny', lastName: 'Bykova'})
// });

test('User should be Jenny Bykova object', () => {
  expect(functions.createUser()).toEqual({firstName: 'Jenny', lastName: 'Bykova'})
});

test('Should be under 1600', () => {
  let num1 = 700;
  let num2 = 800
  expect(num1 + num2).toBeLessThan(1600);
});

test('Should be under or equal 1600', () => {
  let num1 = 800;
  let num2 = 800
  expect(num1 + num2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', () => {
  usernames = ['Jenny', 'Silvestr', 'admin'];
  expect(usernames).toContain('admin')
});

test('User fetched should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser(1)
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
});

test('User fetched should be Ervin Howell', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser(2);
  expect(data.name).toEqual('Ervin Howell');
});
