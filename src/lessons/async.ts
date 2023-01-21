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

const asyncPromiseLesson = (): [string, string] => {
  // simple resolve promise
  promise1.then((result) => console.table([result]));

  // promise chain
  promise1
    .then((result) => {
      console.table(['resolve step 1: ', result]);
      return result;
    })
    .then((result) => console.table(['resolve step 2: ', result]));

  // promise chain with reject
  promise2
    .then((result) => {
      console.table(['reject step 1: ', result]);
      return result;
    })
    .then((result) => console.table(['reject step 2: ', result]))
    .catch((err) => {
      return Error(err);
    });

  // simple reject promise
  promise2
    .then((result) => console.table([result]))
    .catch((err) => {
      return Error(err);
    });

  // all good
  Promise.all([promise1, promise3])
    .then((promises) => console.table(promises))
    .finally(() => console.log('Good - all done!'));

  // some rejects
  Promise.all([promise1, promise2, promise3, promise4])
    .then((promises) => console.table([promises]))
    .catch((promises) => console.table([promises]))
    .finally(() => console.log('Some Reject - all done!'));

  // settled
  Promise.allSettled([promise1, promise2, promise3, promise4])
    .then((promises) => console.table(promises))
    .catch((promises) => console.table(promises))
    .finally(() => console.log('Settled - all done!'));

  // racing resolved
  Promise.race([promise1, promise2, promise3])
    .then((promises) => console.table([promises]))
    .catch((promises) => console.table(promises))
    .finally(() => console.log('Race Resolved - all done!'));

  // racing rejected
  Promise.race([promise2, promise3, promise4])
    .then((promises) => console.table([promises]))
    .catch((promises) => console.table([promises]))
    .finally(() => console.log('Race Rejected - all done!'));

  // any resolved, look over rejects
  Promise.any([promise2, promise3, promise4])
    .then((promises) => console.table([promises]))
    .catch((promises) => console.table([promises]))
    .finally(() => console.log('Any resolved - all done!'));

  // static methods
  Promise.resolve('Promise resolved with static method').then((result) => console.log(result));
  Promise.reject(new Error('Promise rejected with static method')).catch(
    (result) => console.error(result),
  );

  return ['Async Promises', 'Results will be logged async'];
};

const asyncAwaitLesson = (): [string, string] => {
  // simple async await function to resolve a resolving promise
  const simpleAsyncAwaitResolve = async () => {
    const result = await promise1;
    console.table([`Async Await Resolve - ${result}`]);
  };
  simpleAsyncAwaitResolve();

  // simple async await function to resolve a rejecting promise
  const simpleAsyncAwaitReject = async () => {
    let result;

    try {
      result = await promise2;
      console.log(`Async Await Resolve - ${result}`);
    } catch (error) {
      console.table([`Async Await Reject - ${error}`]);
    }
  };
  simpleAsyncAwaitReject();

  // promise chaining with async await
  const simpleAsyncAwaitChain = async () => {
    const result = await promise1;
    const nextResult = await result;

    console.table([`Async Await Chain Resolve - ${nextResult}`]);
  };
  simpleAsyncAwaitChain();

  // await more than one promise at the time
  const asyncAwaitAll = async () => {
    const results = await Promise.all([promise1, promise3]);

    console.table(results);
  };
  asyncAwaitAll();

  // await more than one promise at the time, some reject
  const asyncAwaitAllReject = async () => {
    let results;
    try {
      results = await Promise.all([promise1, promise2, promise3]);
    } catch (error) {
      results = `Async Await ERROR all - ${error}`;
    }

    console.table([results]);
  };
  asyncAwaitAllReject();

  // await more than one promise at the time, some reject
  const asyncAwaitStepByStep = async () => {
    let results;
    try {
      const result1 = await promise1;
      console.table([`Step by Step resolve - ${result1}`]);
      const result2 = await promise3;
      console.table([`Step by Step resolve - ${result2}`]);
      const result3 = await promise4;
      console.table([`Step by Step resolve - ${result3}`]);
      const result4 = await promise2;
      console.table([`Step by Step resolve - ${result4}`]);
    } catch (error) {
      results = `Async Await ERROR step-by-step - ${error}`;
    }

    console.table([results]);
  };
  asyncAwaitStepByStep();

  // async...await execution order
  const asyncAwaitExecutionOrder = () => {
    // slow example promise to see different construction orders
    const slowPromise = (add: string) => {
      return new Promise((resolve) => {
        console.log(`${add} inner SLOW`);
        setTimeout(() => {
          resolve(`${add} SLOW 🐌`);
        }, 3000);
      });
    };

    // fast exmaple promise to see different construction orders
    const fastPromise = (add: string) => {
      return new Promise((resolve) => {
        console.log(`${add} inner FAST`);
        setTimeout(() => {
          resolve(`${add} FAST 💨`);
        }, 1000);
      });
    };

    // sequential start of promises
    setTimeout(async () => {
      console.log('Start Sequential', new Date().getSeconds());
      const slow = await slowPromise('Sequential Order - ');
      console.log('Sequential', slow);
      console.log('After Slow Ended', new Date().getSeconds());

      const fast = await fastPromise('Sequential Order - ');
      console.log('Sequential', fast);
      console.log('After Fast Ended', new Date().getSeconds());
    }, 1000);

    // concurrent start of promises with async...await
    setTimeout(async () => {
      console.log('Start Concurrent Async...Await', new Date().getSeconds());
      const slow = slowPromise('Concurrent Order Async...Await - ');
      const fast = fastPromise('Concurrent Order Async...Await - ');
      console.log('Concurrent', await slow);
      console.log('Concurrent', await fast);
      console.log(
        'After Slow & Fast Ended Async...Await',
        new Date().getSeconds(),
      );
    }, 6000);

    // concurrent start of promises with Promise.all()
    setTimeout(() => {
      console.log('Start Concurrent Promise', new Date().getSeconds());

      Promise.all([
        slowPromise('Concurrent Order Promise - '),
        fastPromise('Concurrent Order Promise - '),
      ]).then((messages) => {
        console.log('Concurrent', messages[0]);
        console.log('Concurrent', messages[1]);
      });

      console.log('After Slow & Fast Ended Promise', new Date().getSeconds());
    }, 10000);

    // true parallel execution
    setTimeout(async () => {
      console.log('Start Concurrent Parallel', new Date().getSeconds());

      await Promise.all([
        (async () =>
          console.log(
            await slowPromise('Concurrent Order Parallel - '),
            new Date().getSeconds(),
          ))(),
        (async () =>
          console.log(
            await fastPromise('Concurrent Order Parallel - '),
            new Date().getSeconds(),
          ))(),
      ]);

      console.log('After Slow & Fast Ended Parallel', new Date().getSeconds());
    }, 15000);
  };

  asyncAwaitExecutionOrder();

  return ['Async Await', 'Results will be logged async'];
};

const delayedIterationCallsLesson = (): [string, string] => {
  // synchronous iteration
  [1, 2, 3, 4].forEach((i) => console.log(`Synchronous Iteration - ${i}`));
  console.log('Synchronous after the iterations');

  // asynchronous iteration
  [1, 2, 3, 4].forEach((i) => {
    setTimeout(() => {
      console.log(`Synchronous Iteration - ${i}`);
    }, 0);
  });
  console.log('Synchronous before the iterations');

  return ['Delayed Iteration Calls', 'Results will be logged async'];
};

export { asyncAwaitLesson, asyncPromiseLesson, delayedIterationCallsLesson };
