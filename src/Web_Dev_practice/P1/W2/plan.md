P1W2: Asynchronous JavaScript Mastery (10h/day)
Day 1 – Callbacks & Callback Hell

Theory (2h): Event loop basics, async vs sync, callback pattern.

Coding (6h):

Write setTimeout, setInterval examples.

Build a “step-by-step” async task chain using nested callbacks (simulate API calls).

Rewrite the same code to show callback hell.

Project (2h): Mini async flow – simulate ordering food online (placeOrder → cook → deliver with callbacks).

Day 2 – Promises

Theory (2h): Promise states, chaining, error handling.

Coding (6h):

Implement delay(ms) as a Promise.

Convert Day 1 callback-hell example into Promises.

Practice Promise.all, Promise.race, Promise.allSettled.

Project (2h): Create a “weather dashboard” that fetches 2–3 cities’ weather in parallel using Promise.all.

Day 3 – Async/Await

Theory (2h): Syntactic sugar over promises, try/catch, sequential vs parallel execution.

Coding (6h):

Refactor Day 2 Promises into async/await.

Write sequential API calls (user → posts → comments).

Write parallel API calls with await Promise.all.

Project (2h): “GitHub profile fetcher” → Input username, fetch profile + repos + starred repos.

Day 4 – Error Handling & Retry Logic

Theory (2h): Handling API failures, retries, fallbacks.

Coding (6h):

Build retryFetch(url, retries).

Add timeout logic with Promise.race.

Test failing APIs with incorrect URLs.

Project (2h): News app → fetch headlines; retry if failure; show fallback “no news available”.

Day 5 – Advanced Promise Patterns

Theory (2h): Microtasks, macrotasks, batching async work.

Coding (6h):

Compare setTimeout vs Promise.resolve.

Build a rate limiter (process 1 request every X ms).

Implement sequential fetchWithDelay(urls, ms).

Project (2h): “Batch downloader” → fetch multiple images in groups of 3 with delays.

Day 6 – Event Loop & Concurrency

Theory (2h): Deep dive into event loop, queue, stack, task ordering.

Coding (6h):

Write code to test ordering of setTimeout, Promise.resolve, console.log.

Implement async queue processing.

Project (2h): Build a “task scheduler” that runs jobs with priorities.

Day 7 – Review + Capstone

Review (3h): Revisit all async concepts (callbacks, promises, async/await, event loop).

Capstone Project (5h):

Build a “Movie Finder App” (fetch movies + details + cast from OMDB API).

Must use async/await, retries, Promise.all, and proper error handling.

Wrap-up (2h): Document learnings, push project to GitHub.
