const personObject = {
  firstName: "Tusar",
  lastName: "Ali",
  address: {
    country: "Bangladesh",
    capital: "Dhaka",
  },
};

const cart = {
  abc: 1,
  def: 2,
  ghi: 3,
};

const personArray = ["Tusar", "Ali"];

const giveQuantity = (id) => {
  console.log(cart[id]);
};

giveQuantity("abc");

const [, lastname] = personArray;
console.log(lastname);

const {
  firstName: myName,
  address: { country, capital },
} = personObject;
console.log(country, capital, myName);

const { age = 'Not available' } = personObject;
console.log(age);