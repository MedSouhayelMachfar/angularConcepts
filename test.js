const { Observable, filter } = require("rxjs");
/*
const observable = new Observable((subscriber) => {
  console.log("message 1 : inside OBS");
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
  }, 1000);
  setTimeout(() => {
    subscriber.error(new Error("Error has occurred : Failed"));
    subscriber.complete();
  }, 2000);
  console.log("message 2 : inside OBS");

  return () => {
    console.log("Teardown , cleanup logic")
  }
});

const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error.message);
  },
  complete: () => {
    console.log("Finished");
  },
};

console.log("message 1 : out of obs");
observable.subscribe(observer);
console.log("message 2 : out of obs");
*/

const obs$ = new Observable((subscribe) => {
  setTimeout(() => {
    subscribe.next({ category: "sport", members: 20 });
  }, 1000);
  setTimeout(() => {
    subscribe.next({ category: "news", members: 20 });
  }, 2000);
  setTimeout(() => {
    subscribe.next({ category: "sport", members: 20 });
  }, 3000);
});

const obsSport$ = obs$.pipe(filter((data) => data.category === "sport"));

const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error.message);
  },
  complete: () => {
    console.log("Finished");
  },
};
obsSport$.subscribe(observer);
