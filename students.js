console.log('23-object-create-students-and-address-object');

const Students = {
  name: 'lakshman',
  age: 24,
  rank: 5,
  country: 'India',
}

const Address = {
  street: 'main road',
  city: 'nuzveedu',
  pinCode: 521111,
  state: 'AP',
  country: 'India',
}

function showObjectDetails(obj) {
  for(let key in obj) {
    console.log(key,' : ',obj[key]);
  }
}

showObjectDetails(Students);
console.log('----------');
showObjectDetails(Address);