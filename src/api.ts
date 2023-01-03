const URL = 'https://jsonplaceholder.typicode.com/todos/1';

export default async function api() {

    // make request
    const response = await fetch(URL);
    // retrieve json
    const data = await response.json();

    return data;
}