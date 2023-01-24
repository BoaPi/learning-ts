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

// function signature
export type Lesson = Promise<string>;

// define function signature for lessons array
type LessonSummary = () => [string, Lesson];

/**
 * @name lessons
 * @description array of functions which represents lessons
 */
const lessons: LessonSummary[] = [
  intersectionLesson,
  // interfaceLesson,
  // typesLesson,
  // typeCheckingLesson,
  // simpleClosureLesson,
  // modulePatternLesson,
  // memoCalculationLesson,
  // singleRunFunctionLesson,
  // asyncPromiseLesson,
  // asyncAwaitLesson,
  // delayedIterationCallsLesson,
  // simpleOverloadFunctionLesson,
];

/**
 * @description looping of lessons array and call each lesson
 */
console.log(
  '========================================================================',
);
lessons.forEach(async (lesson: LessonSummary): Promise<void> => {
  const [name, output] = lesson();
  console.log(`Lesson: ${name}`);
  console.log(await output);
  console.log(
    '========================================================================',
  );
});
