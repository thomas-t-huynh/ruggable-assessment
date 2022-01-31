export function Fetch(url, body, method) {
  return fetch(`http://localhost:8000${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function loginUser(body) {
  return Fetch("/login", body, "POST");
}
