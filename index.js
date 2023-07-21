


  if (window.innerWidth > 768) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  
  }

if (window.innerWidth <765){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

}


  const reviews = [
    {
        img:'photo/Sam2.jpg',
        position: "Product Manager Anytask",
      name: "John Doe",
      message: "I am extremely satisfied with the web development service provided of One div. The website they built for my business is visually appealing, user-friendly, and performs excellently across all devices. Ruel's attention to detail and quick response to my queries made the whole process seamless. Highly recommended!",
    },
    {
        img:'photo/Richard-Ells-2.jpg',

      name: "Richard Ells",
      position: "CEO Electroneum LTD",
      message: "Working with One div for my personal website was a fantastic experience. They have a deep understanding of front-end development and brought my design ideas to life beautifully. The website is fast, well-optimized, and has received great feedback from my visitors. Thank you, Ruel, for your expertise and professionalism!",
    },
    {
        img:'photo/jisoob.jpg',
        position:"Blackpink Member",
      name: "Kim Ji-soo",
      message: "One div has lots  talented front-end developer, and I'm glad I chose their services for my e-commerce website. The site's performance and loading speed have significantly improved, resulting in increased conversions. Ruel's knowledge of JavaScript and CSS has elevated the user experience on my platform. I would definitely hire them again for future projects!",
    },
    {
        img: 'photo/Chris.jpg',
        position:'Blockchain developer Accenture',
      name: "Chris Harrison",
      message: "I can't recommend One div enough! They delivered a stunning and responsive website for my portfolio. Their attention to detail and ability to translate my vision into reality surpassed my expectations. Ruel's proficiency in HTML, CSS, and JavaScript truly shines through in their work. Thank you for creating a website that perfectly represents me!",
    },
    {
        img:'photo/Chris-Norris.jpg',
        position:'AWS Developer Binance',
      name: "Chris Norris",
      message: "One div is a true professional in the world of web development. Their expertise in front-end technologies and dedication to delivering top-notch results is impressive. The website they built for my business is not only visually captivating but also well-optimized for SEO. I'm delighted with their service and will recommend them to anyone looking for exceptional web development!",
    },
  ];

  let prev = document.querySelector(".prev")
  let next = document.querySelector(".next")
  let reviewerpicture = document.querySelector(".personpic")
  let reviewer = document.querySelector(".name")
  let position = document.querySelector(".position")
  let message = document.querySelector(".message")
  current = 0;

  let body = document.body;



  function changeReview(person){
    let review = reviews[person]
    reviewerpicture.src = review.img;
    reviewer.textContent = review.name;
    position.textContent = review.position;
    message.textContent = review.message;


  }
 next.addEventListener('click',()=>{
    current++;

    if(current> reviews.length-1){
      current = 0;
    }
    changeReview(current)

 })

 prev.addEventListener('click',()=>{
  current--;

  
  changeReview(current)

})

let hamburger = document.querySelector(".hamburger")
let hamburgermenu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click",()=>{
  hamburgermenu.classList.toggle("toggle")


})






