import {
    song
}
from "./data.js";

for (let i = 0; i < 10; i++) {
    document.getElementById('slideshow').innerHTML += `<img src="${song[0].top100_VN[0].songs[i].avatar}">`;
}

// $(document).ready(function () {
    
//     $('.slideshow').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         centerMode: true,
//         centerPadding: '60px',
//         responsive: [{
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });