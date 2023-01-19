import { intersectionLesson } from 'lessons/intersection';
import { interfaceLesson } from 'lessons/interface';
import { typesLesson } from 'lessons/types';
import { typeCheckingLesson } from 'lessons/typeChecking';
import {
  simpleClosureLesson,
  modulePatternLesson,
  memoCalculationLesson,
  singleRunFunctionLesson,
} from 'lessons/closures';
import {
  asyncAwaitLesson,
  asyncPromiseLesson,
  delayedIterationCallsLesson,
} from 'lessons/async';

// define function signature for lessons array
type Lesson = () => [string, string];

/**
 * @name lessons
 * @description array of functions which represents lessons
 */
const lessons: Lesson[] = [
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
