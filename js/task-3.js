// Вариант 1

const findBestEmployee = function(employees) {
  const tasks = Object.entries(employees);

  let biggestAmountOfTasks = tasks[0];

  for (const task of tasks) {
    if (biggestAmountOfTasks[1] < task[1]) {
      biggestAmountOfTasks = task;
    }
  }
  return biggestAmountOfTasks[0];
};

// Вариант 2
// const findBestEmployee = function(employees) {
//   const tasks = Object.keys(employees);
//   let maxValue = employees[tasks[0]];
//   let maxKey = tasks[0];
//

//   for (const task of tasks) {
//     if (maxValue < employees[task]) {
//       maxValue = employees[task];
//       maxKey = task;
//     }
//   }
//   return maxKey;
// };

// * Вызовы функции для проверки работоспособности твоей реализации.
// */

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
