"use strict";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type FetchPosts = {
  newStartIndex: number;
  data: Post[];
};

async function fetchPosts(
  url: string,
  index: number
): Promise<FetchPosts | string |undefined> {
  const searchParams = new URLSearchParams();
  searchParams.set("page", `${index}`);

  try {
    const response = await fetch(`${url}/${index}?${searchParams}`);
    const data = await response.json();

    return {
      newStartIndex: index * 1,
      data,
    };
  } catch (error) {
    if (error) {
      return error.message;
    }
  }
}

/**
 * @name  infiniteScroll
 */

async function infiniteScroll(): Promise<void> {
  const API_BAE_URL: string = "https://jsonplaceholder.typicode.com/posts/";

  let calls: Promise<undefined|string|FetchPosts>[] = []

  for (let i = 1; i <= 100; i++) {
    calls = [...calls, fetchPosts(API_BAE_URL, i)];
  }

  const result = await Promise.all(calls)

  console.log(result)
}

infiniteScroll();
