import { PriorityQueue } from "@datastructures-js/priority-queue";
// https://github.com/datastructures-js/priority-queue is used to import the priority queue objects.
// javascript does not provide any official priority queue implementation. So a priviate github repo should be used till then.
const carsQueue = new PriorityQueue((a, b) => {
  if (a[1] < b[1]) {
    //for min heap priority queue, a<b should return -1
    //for max heap priority queue ,a<b should return 1
    return 1;
  }
});

let cars = [
  [0, 5],
  [1, 2],
  [2, 1],
  [4, 4],
];

cars.forEach((car) => {
  carsQueue.enqueue(car);
});

console.log(carsQueue);

console.log(carsQueue.dequeue());
