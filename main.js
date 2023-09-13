// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
// function Number(num) {
//     if (num >= 0) {
//       return "დადებითი";
//     } else {
//       return "უარყოფით";
//     }
//   }
//   const result = Number(5);
//   console.log(result); 
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

// function sumNumbers() {
//     let summarize = 0;
//     for (let i = 1; i <= 100; i++) {
//         summarize += i;
//     }
//     return summarize;
//   }
//   const result = sumNumbers();
//   console.log(result); 
  

// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

// function oddOReven() {
//     const input = prompt("შეიყვანეთ რიცხვი:");
//     const number = parseInt(input);
//     if (isNaN(number)) {
//       return "გთხოვთ, შეიყვანოთ ვალიდური რიცხვი !!!!!!!!!!";
//     }
//     if (number % 2 === 0) {
//       return "ლუწი";
//     } else {
//       return "კენტი";
//     }
//   }
//   const result = oddOReven();
//   alert(`ეს რიცხვი არის ${result} !!!!!!`);
  
// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

// const car = {
//     year: 2020, 
//     model: "LEXUS" 
//   };
  
//   function calculateAge(carObj) {
//     const Year = new Date().getFullYear();
//     const Age = Year - carObj.year;
//     return Age;
//   }
//   const Age = calculateAge(car);
//   console.log(` ${car.model} არის ${Age} წლის!!!!!!!!!!`);
  
// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
// function largest(arr) {
//     if (arr.length === 0) {
//       return "ცარიელი მასივი";
//     }
//     const largestDigit = Math.max(...arr);
//     return largestDigit;
//   }
  
//   const numbers = [1, 4, 88, 99, 123];
//   const largestDigit = largest(numbers);
//   console.log(`უდიდესი რიცხვი არის: ${largestDigit}`);
  
// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი
// function smallest(arr) {
//     if (arr.length === 0) {
//       return "ცარიელი";
//     }
//     const smallestNumber = Math.min(...arr);
//     return smallestNumber;
//   }
  
//   const numbers = [1, 4, 88, 99, 123];
//   const smallestNumber = smallest(numbers);
//   console.log(`უმცირესი რიცხვი არის: ${smallestNumber}`);
  
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
// function reverseee() {
//     const inputWord = prompt("Enter a word:");
//     const reversedWord = inputWord.split('').reverse().join('');
//     return reversedWord;
//   }
  
//   const reversed = reverseee();
//   console.log(`Reversed word: ${reversed}`);
  