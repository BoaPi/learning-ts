const asyncPromiseLesson = (): [string, string] => {
  // example promises
  const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Promise 1 - Resolve'), 100);
  });
  const promise2 = new Promise<string>((_, reject) => {
    setTimeout(() => reject('Promise 2 - Reject'), 200);
  });
  const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Promise 3 - Resolve'), 300);
  });
  const promise4 = new Promise<string>((_, reject) => {
    setTimeout(() => reject('Promise 4 - Reject'), 400);
  });

  // simple resolve promise
  promise1.then((result) => console.log(result));

  // simple reject promise
  promise2
    .then((result) => console.log(result))
    .catch((err) => {
      throw new Error(err);
    });

  // all good
  Promise.all([promise1, promise3])
    .then((promises) => console.log([promises]))
    .finally(() => console.log('Good - all done!'));

  // some rejects
  Promise.all([promise1, promise2, promise3, promise4])
    .then((promises) => console.log([promises]))
    .catch((promises) => console.log([promises]))
    .finally(() => console.log('Some Reject - all done!'));

  // settled
  Promise.allSettled([promise1, promise2, promise3, promise4])
    .then((promises) => console.log([promises]))
    .catch((promises) => console.log([promises]))
    .finally(() => console.log('Settled - all done!'));

  // racing resolved
  Promise.race([promise1, promise2, promise3])
    .then((promises) => console.log([promises]))
    .catch((promises) => console.log([promises]))
    .finally(() => console.log('Race Resolved - all done!'));

  // racing rejected
  Promise.race([promise2, promise3, promise4])
    .then((promises) => console.log([promises]))
    .catch((promises) => console.log([promises]))
    .finally(() => console.log('Race Rejected - all done!'));

  // any resolved, look over rejects
  Promise.any([promise2, promise3, promise4])
    .then((promises) => console.log([promises]))
    .catch((promises) => console.log([promises]))
    .finally(() => console.log('Any resolved - all done!'));

  return ['Async', 'Results will be logged async'];
};

export { asyncPromiseLesson };
