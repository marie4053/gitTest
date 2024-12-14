// GET one : id가 1인 json 한 개 가져오기
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// GET many : 모든 데이터 가져오기
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// // Create
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));