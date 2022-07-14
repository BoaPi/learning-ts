"use strict";

import { intersectionLesson } from "./lessons/intersection";
import { interfaceLesson } from "./lessons/interface";
import { typesLesson } from "./lessons/types"

// define function signature for lessons array
type Lesson = () => String

/**
 * @name lessons
 * @description array of functions which represents lessons
 */
const lessons: Lesson[] = [
  interfaceLesson,
  intersectionLesson,
  typesLesson,
]

/**
 * @description looping of lessons array and call each lesson
 */
lessons.forEach((lesson: Function, i: Number): void => {
  console.log("=====================")
  console.log(`Lesson: ${i}`)
  console.log(lesson())
  console.log("=====================")
});