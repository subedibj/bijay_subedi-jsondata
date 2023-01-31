import fetch from "node-fetch";

export async function getUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("cannot fetch data from json placeholder !");
}

getUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
