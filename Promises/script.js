// const p1 = new Promise((resolve, reject) => {
//     $.get('http://thecatapi.com/api/images/get?format=xml')
//         .done((res) => {
//             const response = $(res).find('url').text();
//             resolve(response);
//             console.log(response)
//         })
//         .fail((reject) => {
//             reject("p1 failed")
//         })
// })

// const p2 = new Promise((resolve, reject) => {
//     $.get('http://thecatapi.com/api/images/get?format=xml')
//         .done((res) => {
//             const response = $(res).find('url').text();
//             resolve(response);
//         })
//         .fail((reject) => {
//             reject("p2 failed")
//         })
// })

// const p3 = new Promise((resolve, reject) => {
//     $.get('http://thecatapi.com/api/images/get?format=xml')
//         .done((res) => {
//             const response = $(res).find('url').text();
//             resolve(response);
//         })
//         .fail((reject) => {
//             reject("p3 failed")
//         })
// })



// Promise.all([p1, p2, p3])
//     .then((responses) => {
//         responses.forEach((img) => {
//             const $div = $('.photos');
//             const $img = $(`<img src='${img}' width='300px'>`);
//             $div.append($img);
//         })
//         // .catch((error) => {
//         //     alert(error);
//         // })
//     })



const ajax = new XMLHttpRequest;
ajax.open("GET", "http://thecatapi.com/api/images/get?format=xml");
const body = document.querySelector("body");

ajax.onload = function () {
    const xmlDoc = ajax.responseXML;
    const imgUrl = xmlDoc.querySelector("url").textContent;
    const image = document.createElement("img");
    image.setAttribute("src", imgUrl);
    body.appendChild(image);
}

ajax.send();