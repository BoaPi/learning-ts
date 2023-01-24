import { intersectionLesson } from './lessons/intersection.ts';
import { interfaceLesson } from './lessons/interface.ts';
import { typesLesson } from './lessons/types.ts';
import { typeCheckingLesson } from './lessons/typeChecking.ts';
import {
  memoCalculationLesson,
  modulePatternLesson,
  simpleClosureLesson,
  singleRunFunctionLesson,
} from './lessons/closures.ts';
import { asyncAwaitLesson, asyncPromiseLesson, delayedIterationCallsLesson } from './lessons/async.ts';
import { simpleOverloadFunctionLesson } from './lessons/overloadFunction.ts';

// define function signature for lessons array
type Lesson = () => [string, string];

/**
 * @name lessons
 * @description array of functions which represents lessons
 */
const lessons: Lesson[] = [
  simpleOverloadFunctionLesson,
  intersectionLesson,
  interfaceLesson,
  typesLesson,
  typeCheckingLesson,
  simpleClosureLesson,
  modulePatternLesson,
  memoCalculationLesson,
  singleRunFunctionLesson,
  asyncPromiseLesson,
  asyncAwaitLesson,
  delayedIterationCallsLesson,
];

/**
 * @description looping of lessons array and call each lesson
 */
console.log(
  '========================================================================',
);
lessons.forEach((lesson: Lesson): void => {
  const [name, output] = lesson();
  console.log(`Lesson: ${name}`);
  console.log(output);
  console.log(
    '========================================================================',
  );
});
