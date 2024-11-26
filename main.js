/*------------ toggle button ------------*/
const navMenu = document.getElementById("nav-menu");
const navMenu2 = document.getElementById("nav-menu-2");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  navMenu2.classList.toggle("top-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    navMenu2.classList.toggle("top-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});
/*------------ crousel ------------*/ 
window.addEventListener("load", () => {
  autoSlide();

  const buttonPrev = document.querySelector('.carousel__button__prev');
  const buttonNext = document.querySelector('.carousel__button__next');

  buttonNext.addEventListener('click', () => slide('next'));
  buttonPrev.addEventListener('click', () => slide('prev'));
});

let currentIndex = 0; // Menyimpan indeks aktif saat ini

function autoSlide() {
  setInterval(() => {
    slide('next');
  }, 5000); // durasi trasisi img 5s
}

function slide(direction) {
  const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));
  const itemActive = document.querySelector(".carousel__item__active");

  // Update currentIndex based on direction
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % itemsArray.length; // Next item
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + itemsArray.length) % itemsArray.length; // Previous item
  }

  const newItemActive = itemsArray[currentIndex];
  newItemActive.classList.add("carousel__item__pos__next");

  setTimeout(() => {
    newItemActive.classList.add("carousel__item__next");
    itemActive.classList.add("carousel__item__next");
  }, 20);

  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.classList = "carousel__item";
      newItemActive.classList = "carousel__item carousel__item__active";
    },
    {
      once: true,
    }
  );
}

function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));
  const itemActive = document.querySelector(".carousel__item__active");
  return itemsArray.indexOf(itemActive);
}

/*------------ mouse effect ------------*/ 
const section = [
  {id: '#about', imageClass:'.background-image-about'},
  {id: '#company', imageClass:'.background-image-company'},
  {id: '#contact', imageClass:'.background-image-contact'},
]
function handleMouseMove(e, image){
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const moveX = (x - 0.5) * 50 ;
  const moveY = (y - 0.5) * 50 ;

  image.style.transform = `translate(${moveX}px, ${moveY}px)`
};
section.forEach(section => {
  document.querySelector(section.id).addEventListener('mousemove', (e) => {
    const image = document.querySelector(section.imageClass);
    handleMouseMove(e, image);
  });
})


/*------------ tabs ------------*/ 
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.process__tab');
  const tabContent = document.getElementById('tab-content');
  const tabImage = document.getElementById('tab-image');

  const contentData = {
    1: {
      title: 'Acquaintance with the customer',
      paragraphs: [
        'The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.',
        'This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.'
      ],
      image: 'img/jpng/process-1.jpg'
    },
    2: {
      title: 'Project Concept Development',
      paragraphs: [
        'In this stage, we develop a project concept based on the client’s preferences and ideas. We present the concept in a visual format to ensure that the client’s vision is accurately represented.',
        'This phase involves a lot of back-and-forth communication, allowing us to refine the project concept until it meets the client’s expectations.'
      ],
      image: 'img/jpng/process-2.jpg'
    },
    3: {
      title: 'Working on Interior and Exterior',
      paragraphs: [
        'Once the concept is approved, we start working on the interior and exterior designs. We make sure that all design elements are in harmony, creating a cohesive and aesthetically pleasing result.',
        'We present detailed plans and 3D visualizations to help the client understand how the final project will look and feel.'
      ],
      image: 'img/jpng/process-3.jpg'
    },
    4: {
      title: 'Finishing Touches for your future home',
      paragraphs: [
        'The final stage involves adding the finishing touches to the project. We ensure that every detail is perfect and meets the client’s standards.',
        'This is where we add the final flourishes that turn a house into a home, making sure it is ready for the client to move in.'
      ],
      image: 'img/jpng/process-4.jpg'
    },
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('process__tab-active'));

      tab.classList.add('process__tab-active');
      const tabIndex = tab.getAttribute('data-tab');

      const data = contentData[tabIndex];
      tabContent.innerHTML = `
            <h2 class="text-first">${data.title}</h2>
            <p class="text-graycolor">${data.paragraphs[0]}</p>
            <p class="text-graycolor">${data.paragraphs[1]}</p>     
      `
      tabImage.src = data.image;
    });
  });
});
/*------------ Swiper effect ------------*/ 
const swiper = new Swiper('.swiper', {

  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true
});

/*------------ Show Sroll Up ------------*/ 
const scrollUp = () =>{
  const scrollUpBtn = document.getElementById('scroll-up');

  if(this.scrollY >= 250){
    scrollUpBtn.classList.remove('-bottom-1/2');
    scrollUpBtn.classList.add('bottom-4');
  } else{
    scrollUpBtn.classList.add('-bottom-1/2');
    scrollUpBtn.classList.remove('bottom-4');
  }
}
window.addEventListener('scroll', scrollUp);

/*------------ Sroll Section Active Link ------------*/ 
const activeLink = () => {
  const section = document.querySelectorAll('section');
  const navLink = document.querySelectorAll('.nav-link');

  let current = 'home';

  section.forEach(section => {
    const sectionTop = section.offsetTop;
    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute('id');
    };
  });
  navLink.forEach(item => {
    item.classList.remove('active');
    if(item.href.includes(current)){
    item.classList.add('active');
    };
  });
};
window.addEventListener('scroll', activeLink);

/*------------ ScroolReveal  ------------*/ 
// const sr = ScroolReveal({
//   origin: 'left',
//   distance: '60px',
//   duration: 1500,
//   delay: 300,
//   reset: true
// })
// sr.reveal(`.about_item`,);

const sr = ScrollReveal({
	origin: 'left',
  reset : true,
	distance : '80px',
	duration : 2000,
	delay : 200
})
sr.reveal(`.about__item, .process__subtitle, .process__tabtitle, .process__title, .process__tabcontent, .company__content h2, .company__content h4`,{interval: 100});
sr.reveal(`.about__form h4, .about__form h2, .company__item, .contact__form`,{origin: 'right',interval: 100});
sr.reveal(`.about__form form, .process__image, .process__tab, .company__content img, .blog__item img`,{origin: 'top', scale: 0.5, delay:700});
sr.reveal(`.review__logo`,{origin: 'bottom',interval: 100});
sr.reveal(`.blog__content, .review__item`,{origin: 'top'});
sr.reveal(`.blog__item, .contact__form h2, .contact__form h4`,{origin: 'top',interval: 100});
sr.reveal(`.contact__img`,{origin: 'left',interval: 100});


