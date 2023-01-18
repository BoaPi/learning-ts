const simpleClosureLesson = (): [string, string] => {
  const closureCounter = () => {
    let counter = 0;

    const countUp = () => counter++;

    return countUp;
  };

  const memoCount1 = closureCounter();

  // using closure to count up
  memoCount1();
  memoCount1();
  memoCount1();
  memoCount1();

  return [
    'Memo Closure',
    `MemoCounter was called 4 times. Result is: ${memoCount1()}`,
  ];
};

const modulePatternLesson = (): [string, string] => {
  const module = (function () {
    let counter = 0;
    const countUp = () => counter++;
    const countDown = () => counter--;
    const getCounter = () => counter;

    // assemble public API
    return {
      counter: getCounter,
      increase: countUp,
      decrease: countDown,
    };
  })();

  let output = `ModuleMemoCounter increase called 0 times. Result is: ${module.counter()}`;

  // mutate
  module.increase();
  module.increase();

  output = `${output}\nModuleMemoCounter increase called 2 times. Result is: ${module.counter()}`;

  // mutate
  module.decrease();

  output = `${output}\nModuleMemoCounter decrease called 1 times. Result is: ${module.counter()}`;

  return ['Module Pattern', output];
};

const memoCalculationLesson = (): [string, string] => {
  // calculate ones & re-run with new parameter
  const module = (function () {
    const previousParameter: [number, number] = [NaN, NaN];
    let result = NaN;

    const calculate = (x: number, y: number) => {
      if (previousParameter[0] !== x || previousParameter[1] !== y) {
        console.log('new');
        previousParameter[0] = x;
        previousParameter[1] = y;
        result = x ** y;
      }
    };

    const getResult = () => result;

    return {
      calculate,
      getResult,
    };
  })();

  let output = `No Calculation done so far. Result:`;
  output = `${output}\n${module.getResult()}`;
  module.calculate(3, 3);
  output = `${output}\nFirst Calculation 3 * 3:`;
  output = `${output}\n${module.getResult()}`;
  module.calculate(3, 4);
  output = `${output}\nSecond Calculation 3 * 4:`;
  output = `${output}\n${module.getResult()}`;
  module.calculate(3, 4);
  output = `${output}\nSecond Calculation 3 * 4 again:`;
  output = `${output}\n${module.getResult()}`;

  return ['Memo Calculation', output];
};

const singleRunFunctionLesson = (): [string, string] => {
  // run ones

  const module = (function () {
    let runState = false;
    let result = NaN;
    const calculateOneShot = (x: number, y: number) => {
      if (runState === true) {
        console.warn('function already used, no further usage possible!');
        return;
      }
      runState = true;
      result = x ** y;
    };
    const getResult = () => result;
    return {
      calculateOneShot,
      getResult,
    };
  })();

  console.log(module.getResult());
  module.calculateOneShot(3, 3);
  console.log(module.getResult());
  module.calculateOneShot(3, 4);
  console.log(module.getResult());
  module.calculateOneShot(3, 4);
  console.log(module.getResult());

  const output = 'Function will get called only once';

  return ['Single Run Function', output];
};
export {
  simpleClosureLesson,
  modulePatternLesson,
  memoCalculationLesson,
  singleRunFunctionLesson,
};
