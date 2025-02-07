// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Subjects.css";
// import quoteIcon from "../../assets/quote.png";

// const Subjects = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     beforeChange: function (currentSlide, nextSlide) {
//       const slider = document.querySelector(".slick-slider");
//       if (nextSlide > currentSlide) {
//         slider.classList.add("sliding-up");
//       } else {
//         slider.classList.remove("sliding-up");
//       }
//     },
//     afterChange: function (currentSlide) {
//       const slider = document.querySelector(".slick-slider");
//       const slides = slider.querySelectorAll(".slick-slide");

//       slides.forEach((slide, index) => {
//         if (index < currentSlide) {
//           slide.classList.add("stacked");
//           slide.style.transform = `translateY(${
//             (index - currentSlide + 1) * 10
//           }vh)`;
//         } else {
//           slide.classList.remove("stacked");
//           slide.style.transform = "";
//         }
//       });
//     },
//   };

//   const TimelineItem = ({ term, content }) => (
//     <div className="tl-item">
//       <span className="tl-date">{term}</span>
//       <div className="tl-dot">
//         <img src={quoteIcon} alt="icon" />
//       </div>
//       <div className="tl-box">
//         <p>{content}</p>
//       </div>
//     </div>
//   );

//   const SubjectCard = ({
//     number,
//     title,
//     fact,
//     quote,
//     author,
//     timelineItems,
//   }) => (
//     <div className={`subject-card subject-card-${number}`}>
//       <div className="subject-content">
//         <div className="left-content">
//           <h2>{title}</h2>
//           <div className="info-text">
//             <p>{fact}</p>
//           </div>
//           <div className="quote-text">
//             <p className="quote-line">{quote[0]}</p>
//             <p className="quote-line">{quote[1]}</p>
//             <span className="author">~ {author}</span>
//           </div>
//           <button className="enroll-button">Enroll now!</button>
//         </div>

//         <div className="tl-container">
//           <div className="tl-line"></div>
//           <div className="tl-items">
//             {timelineItems.map((item, index) => (
//               <TimelineItem
//                 key={index}
//                 term={item.term}
//                 content={item.content}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   const subjectsData = [
//     {
//       number: 1,
//       title: "Prelim English",
//       fact: "Did you know that Shakespeare invented over 1500 words?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "English Standard Common Module: Reading to Write",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "English Standard Module A: Contemporary Possibilities",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "English Standard Module B: A Close Study of Literature",
//         },
//       ],
//     },
//     {
//       number: 2,
//       title: "Biology",
//       fact: "Did you know that every 5 minutes, all your blood is filtered by the kidneys?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Module 1: Cells as the basis of life",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Module 2: Organisation of living things",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "Module 3: Biological diversity",
//         },
//       ],
//     },
//     {
//       number: 3,
//       title: "HSC Mathematics",
//       fact: "Did you know that the concept of zero was invented in India?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Calculus including Applications",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Statistical Analysis",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "Financial Mathematics",
//         },
//       ],
//     },
//     {
//       number: 4,
//       title: "Business Studies",
//       fact: "Did you know that Shakespeare invented over 1500 words?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Operations Management",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Marketing Management",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "Financial Management",
//         },
//       ],
//     },
//     {
//       number: 5,
//       title: "Chemistry",
//       fact: "Did you know that Shakespeare invented over 1500 words?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Properties and Structure of Matter",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Chemical Reactions",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "Equilibrium and Acid Reactions",
//         },
//       ],
//     },
//     {
//       number: 6,
//       title: "Physics",
//       fact: "Did you know that Shakespeare invented over 1500 words?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Advanced Mechanics",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Electromagnetism",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "The Nature of Light",
//         },
//       ],
//     },
//     {
//       number: 7,
//       title: "Studies of Religion II",
//       fact: "Did you know that Shakespeare invented over 1500 words?",
//       quote: [
//         "'All that is gold does not glitter,",
//         "Not all those who wander are lost'",
//       ],
//       author: "J.R.R Tolkein",
//       timelineItems: [
//         {
//           term: "Term 1, 2025",
//           content: "Religion and Belief Systems",
//         },
//         {
//           term: "Term 2, 2025",
//           content: "Religious Tradition Depth Studies",
//         },
//         {
//           term: "Term 3, 2025",
//           content: "Religion and Peace",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="subjects-container">
//       <Slider ref={sliderRef} {...settings}>
//         {subjectsData.map((subject) => (
//           <div key={subject.number}>
//             <SubjectCard {...subject} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Subjects;

import React from "react";
import "./test.css";
import quoteIcon from "../../assets/calendar.png";
import { Calendar } from "lucide-react";

const TimelineItem = ({ term, content }) => (
  <div className="tl-item">
    <span className="tl-date">{term}</span>
    <div className="tl-dot">
      <img src={quoteIcon} alt="icon" />
    </div>
    <div className="tl-box">
      <p>{content}</p>
    </div>
  </div>
);

const SubjectCard = ({ number, title, fact, quote, author, timelineItems }) => (
  <div className="card-body">
    <div className="subject-content">
      <div className="left-content">
        <h2>{title}</h2>
        <div className="info-text">
          <p>{fact}</p>
        </div>
        <div className="quote-text">
          <p className="quote-line">{quote[0]}</p>
          <p className="quote-line">{quote[1]}</p>
          <span className="author">~ {author}</span>
        </div>
        <button className="enroll-button">Enroll now!</button>
      </div>

      <div className="tl-container">
        <div className="tl-line"></div>
        <div className="tl-items">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} term={item.term} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Subjects = () => {
  const subjectsData = [
    {
      number: 1,
      title: "Prelim English",
      fact: "Did you know that Shakespeare invented over 1500 words?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "English Standard Common Module: Reading to Write",
        },
        {
          term: "Term 2, 2025",
          content: "English Standard Module A: Contemporary Possibilities",
        },
        {
          term: "Term 3, 2025",
          content: "English Standard Module B: A Close Study of Literature",
        },
      ],
    },
    {
      number: 2,
      title: "Biology",
      fact: "Did you know that every 5 minutes, all your blood is filtered by the kidneys?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Module 1: Cells as the basis of life",
        },
        {
          term: "Term 2, 2025",
          content: "Module 2: Organisation of living things",
        },
        {
          term: "Term 3, 2025",
          content: "Module 3: Biological diversity",
        },
      ],
    },
    {
      number: 3,
      title: "HSC Mathematics",
      fact: "Did you know that the concept of zero was invented in India?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Calculus including Applications",
        },
        {
          term: "Term 2, 2025",
          content: "Statistical Analysis",
        },
        {
          term: "Term 3, 2025",
          content: "Financial Mathematics",
        },
      ],
    },
    {
      number: 4,
      title: "Business Studies",
      fact: "Did you know that Shakespeare invented over 1500 words?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Operations Management",
        },
        {
          term: "Term 2, 2025",
          content: "Marketing Management",
        },
        {
          term: "Term 3, 2025",
          content: "Financial Management",
        },
      ],
    },
    {
      number: 5,
      title: "Chemistry",
      fact: "Did you know that Shakespeare invented over 1500 words?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Properties and Structure of Matter",
        },
        {
          term: "Term 2, 2025",
          content: "Chemical Reactions",
        },
        {
          term: "Term 3, 2025",
          content: "Equilibrium and Acid Reactions",
        },
      ],
    },
    {
      number: 6,
      title: "Physics",
      fact: "Did you know that Shakespeare invented over 1500 words?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Advanced Mechanics",
        },
        {
          term: "Term 2, 2025",
          content: "Electromagnetism",
        },
        {
          term: "Term 3, 2025",
          content: "The Nature of Light",
        },
      ],
    },
    {
      number: 7,
      title: "Studies of Religion II",
      fact: "Did you know that Shakespeare invented over 1500 words?",
      quote: [
        "'All that is gold does not glitter,",
        "Not all those who wander are lost'",
      ],
      author: "J.R.R Tolkein",
      timelineItems: [
        {
          term: "Term 1, 2025",
          content: "Religion and Belief Systems",
        },
        {
          term: "Term 2, 2025",
          content: "Religious Tradition Depth Studies",
        },
        {
          term: "Term 3, 2025",
          content: "Religion and Peace",
        },
      ],
    },
  ];
  // const subjectsData = [
  //   {
  //     number: 1,
  //     title: "Prelim English",
  //     fact: "Did you know that Shakespeare invented over 1500 words?",
  //     quote: [
  //       "'All that is gold does not glitter,",
  //       "Not all those who wander are lost'"
  //     ],
  //     author: "J.R.R Tolkein",
  //     timelineItems: [
  //       {
  //         term: "Term 1, 2025",
  //         content: "English Standard Common Module: Reading to Write"
  //       },
  //       {
  //         term: "Term 2, 2025",
  //         content: "English Standard Module A: Contemporary Possibilities"
  //       },
  //       {
  //         term: "Term 3, 2025",
  //         content: "English Standard Module B: A Close Study of Literature"
  //       }
  //     ]
  //   },
  //   // ... rest of your subjects data
  // ];

  return (
    <div className="container">
      <ul id="cards">
        {subjectsData.map((subject) => (
          <li
            key={subject.number}
            className="card"
            id={`card${subject.number}`}
            style={{ "--index": subject.number }}
          >
            <SubjectCard {...subject} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
