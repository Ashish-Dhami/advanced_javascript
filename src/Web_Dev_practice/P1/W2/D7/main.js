//? ------------Mini-project (Capstone)------------

async function fetchWithTimeoutAndRetries(url, ms = 3000, retries = 2) {
  try {
    const res = await Promise.race([
      fetch(url),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms)),
    ]);
    if (!res.ok) throw new Error(`HTTP error : ${res.status}`);
    return res.json();
  } catch {
    if (retries > 0) {
      return fetchWithTimeoutAndRetries(url, 3000, retries - 1);
    } else {
      return { error: true };
    }
  }
}

async function asyncDataDashboard(usersLimit = 10) {
  const start = performance.now();
  console.log('Fetching data...');
  const BATCH_SIZE = 3;
  const userIds = Array.from({ length: usersLimit }, (_, i) => i + 1);
  const iteration = Math.ceil(usersLimit / BATCH_SIZE);
  const result = [];
  for (let i = 0; i < iteration; i++) {
    const batch = userIds.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE);
    const users = await Promise.all(
      batch.map(async (userId) => {
        const usersRes = await fetchWithTimeoutAndRetries(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (usersRes.error) {
          return { id: userId, ...usersRes };
        }
        const postsRes = await fetchWithTimeoutAndRetries(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=2`
        );
        if (postsRes.error) {
          return { id: usersRes.id, name: usersRes.name, posts: postsRes };
        }
        const posts = [];
        for (const post of postsRes) {
          const commentsRes = await fetchWithTimeoutAndRetries(
            `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
          );
          const comments = commentsRes.error
            ? commentsRes
            : commentsRes.map(({ id, email, body }) => ({ id, email, body }));
          posts.push({
            id: post.id,
            title: post.title,
            comments,
          });
        }
        return { id: usersRes.id, name: usersRes.name, posts };
      })
    );
    console.log(`Batch ${i + 1} completed`);
    result.push(...users);
  }
  const end = performance.now();
  console.log(`Execution finished in ${(end - start).toFixed(2)} ms`);
  return result;
}

const data = await asyncDataDashboard(5);
console.dir(data, { depth: null });
