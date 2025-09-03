// Utility wrapper around fetch
function fetchJSON(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! ${res.status}`);
    }
    return res.json();
  });
}

// Fetch a user
export function getUser(userId) {
  return fetchJSON(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

// Fetch posts for a user
export function getPosts(userId) {
  return fetchJSON(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
}

// Fetch comments for a post
export function getComments(postId) {
  return fetchJSON(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}

export function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
