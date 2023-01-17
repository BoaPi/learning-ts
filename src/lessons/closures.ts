// Closures
{
  // simple closure with arrow functions
  const closureCounter: Function = (): Function => {
    let counter: number = 0;

    const countUp = () => counter++;

    return countUp;
  }

  const memoCount1 = closureCounter();

  memoCount1();
  memoCount1();
  memoCount1();
  memoCount1();

  console.log('MemoCounter was called 4 times. Result is: ', memoCount1());
  console.log("========================================================================");

  // module pattern
  {
    const module = (
      function () {
        let counter: number = 0;
        const countUp = () => counter++;
        const countDown = () => counter--;
        const getCounter = () => counter;

        // assemble public API
        return {
          counter: getCounter,
          increase: countUp,
          decrease: countDown,
        }
      }
    )();

    console.log(module);
    console.log('ModuleMemoCounter increase called 0 times. Result is: ', module.counter());
    module.increase();
    module.increase();
    console.log('ModuleMemoCounter increase called 2 times. Result is: ', module.counter());
    module.decrease();
    console.log('ModuleMemoCounter decrease called 1 times. Result is: ', module.counter());
    console.log("========================================================================");
  }

  // calculate ones & re-run with new parameter
  {
    const module = (
      function () {
        let previousParameter: [number, number] = [NaN, NaN];
        let result: number = NaN;

        const calculate = (x: number, y: number) => {

          if (previousParameter[0] === x && previousParameter[1] === y) {
            console.log('remembered');
          } else {
            console.log('new calculation');
            previousParameter[0] = x;
            previousParameter[1] = y;
            result = x ** y;
          }
        }

        const getResult = () => result;

        return {
          calculate,
          getResult,
        }
      }
    )();

    console.log(module);
    console.log(module.getResult());
    module.calculate(3, 3);
    console.log(module.getResult());
    module.calculate(3, 4);
    console.log(module.getResult());
    module.calculate(3, 4);
    console.log(module.getResult());
    console.log("========================================================================");
  }

  // run ones
  {
    const module = (
      function () {
        let runState: boolean = false;
        let result: number = NaN;

        
        const calculateOneShot = (x: number, y: number) => {
          if (runState === true) {
            console.warn("function already used, no further usage possible!");
            return;
          };

          runState = true;
          result = x ** y;
        }

        const getResult = () => result;

        return {
          calculateOneShot,
          getResult,
        }
      }
    )();

    console.log(module);
    console.log(module.getResult());
    module.calculateOneShot(3, 3);
    console.log(module.getResult());
    module.calculateOneShot(3, 4);
    console.log(module.getResult());
    module.calculateOneShot(3, 4);
    console.log(module.getResult());
  }
}



console.log("========================================================================");
export { }