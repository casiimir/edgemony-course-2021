const margherita = [
  "farina",
  "acqua",
  "lievito",
  "sale",
  "olio",
  "pomodoro",
  "mozzarella",
];

margherita.map((ing) => {
  if (ing.length >= 5) return ing;
});
// ['farina', 'acqua', 'lievito', undefined, undefined, 'pomodoro', 'mozzarella']

margherita.filter((ing) => ing.length >= 5);
// ['farina', 'acqua', 'lievito', 'pomodoro', 'mozzarella']

[2, 4, 6, 8, 10].reduce((acc, num) => acc + num); //======> 30

// [2,4,6,8,10].reduce((acc, num) => acc - num, 10) + 10
//======> -10

// function sumByPI(num) {
//   return num + PI;
// }

// const PI = 3.14;

function sum(numOne) {
  // 1 funzione
  function by(numTwo) {
    // 2 funzione
    function byby(numThree) {
      // 3 funzione
      return numOne + numTwo + numThree;
    }
    return byby;
  }
  return by;
}

// console.log("La somma totale equivale a:", sum(5)(2)(3));

function calculator(numbers) {
  function sum() {
    let sumTotal = 0;
    for (num of numbers) sumTotal += num;
    return sumTotal;
  }

  function sub() {
    let subTotal = numbers[0];
    for (num of numbers) subTotal -= num;
    return subTotal;
  }

  return {
    sum: sum(),
    sub: sub(),
  };

  // return { // in caso di callback
  //   sum,   // in caso di funzione, occhio al momento della invocazione delal func
  //   sub,   // bisogna specificare i parametri (se ci sono) o le sole parentesi tonde
  // };
}

/// Concetto Iper-Ultra!
function minimalCalc(numbers) {
  const sum = () => numbers.reduce((acc, num) => acc + num);

  return sum;
  // sub: sub(),
}
