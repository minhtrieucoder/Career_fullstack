const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 80) {
    header.style.backgroundColor = 'rgba(255, 255, 255)';
    header.style.borderBottom = '1px solid #e8e8e8';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
  }
});

fetch('https://localhost:7005/api/BlogPosts/GetAllBlogPost')
.then(res => res.json().then(data => { console.log(data);}));



// const userAction = () => {
//   const response = fetch('https://localhost:7005/api/Jobs/GetAllJob');
  // console.log(response);}
// const userAction = () => {
//   const response = fetch('https://localhost:7005/api/BlogPosts/GetAllBlogPost');
//   const myJson =  response.json(); //extract JSON from the http response
//   console.log(myJson);
//   console.log(response);
//   // do something with myJson
// }

// const userAction = () => {
//   const response = fetch('https://localhost:7005/api/Jobs/GetAllJob', {
//     method: 'GET',
//     body: myBody, // string or object
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   });
//   const myJson = response.json(); //extract JSON from the http response
//   // do something with myJson
//   console.log(myBody);
// }

// console.log("myJson");


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://localhost:7005/api/BlogPosts/GetAllBlogPost');

// xhr.onload = function() {
//   if (xhr.status != 200) {
//     alert(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     alert(xhr.response);
//   }
// };

// xhr.send()
