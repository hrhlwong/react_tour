import tour1 from "./assets/tours-1.jpg";
import tour2 from "./assets/tours-2.jpg";
import tour3 from "./assets/tours-3.jpeg";
import tour4 from "./assets/tours-4.jpeg";

export const tours = [
    {id: 1,
     image: tour1,
     date: "Aug 11th ,2025",
     title: "Tibet Adventure",
     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit.",
     location: "Thailand",
     duration: 3,
     cost: 1000,
    },
    {id: 2,
     image: tour2,
     date: "Aug 15th ,2025",
     title: "Hong Kong Adventure",
     info: "Lorem ipsum dolor sit amet consectetur adipisicing ",
     location: "Thailand",
     duration: 3,
     cost: 2100,
    },
    {id: 3,
     image: tour3,
     date: "Sep 11th ,2025",
     title: "Thai Adventure",
     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit.",
     location: "Thailand",
     duration: 3,
     cost: 5100,
    },
    {id: 4,
     image: tour4,
     date: "Oct 11th ,2025",
     title: "Tai Wan Adventure",
     info: "Lorem ipsum dolor sit amet consectetur",
     location: "Thailand",
     duration: 5,
     cost: 8100,
    },
]

export const pagelinks = [
    {id: 1, href: "#index.html", text: "home"},
    {id: 2, href: "#about", text: "about"},
    {id: 3, href: "#services", text: "services"},
    {id: 4, href: "#tours", text: "tours"},
];

export const socialLinks = [

    {id: 1, href: "https://www.facebook.com", icon: "fa-brands fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fa-brands fa-twitter"},
    {id: 3, href: "https://www.threads.com", icon: "fa-brands fa-threads"},
];

// export const services = [
//     {id: 1, icon: "fa-brands fa-facebook", title: "saving money", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit."},
//     {id: 2, icon: "fa-brands fa-facebook", title: "saving money", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit."},
//     {id: 3, icon: "fa-brands fa-facebook", title: "saving money", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit."},
    


// ]

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-wallet",
    title: "saving money",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 2,
    icon: "fa-solid fa-tree",
    title: "endless hiking",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 3,
    icon: "fa-solid fa-socks",
    title: "amazing comfort",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
];