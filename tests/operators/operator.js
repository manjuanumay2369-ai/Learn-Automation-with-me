


    


const rawUsernameText = 'Username:  exampleUser  ';


const SUsername = rawUsernameText?.split(':')[1].trim(); 
console.log(SUsername);




  import { test, expect } from '@playwright/test';

test('should slice array correctly', async () => {
  const fruits = ['apple', 'banana', 'cherry', 'date'];
  const result = fruits.slice(1, 3); // ['banana', 'cherry']

  console.log('result:', result);
  expect(result).toEqual(['banana', 'cherry']);
});





