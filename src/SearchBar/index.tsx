import { useState, useEffect } from 'react'


const DEFAULT_PLACEHOLDER = 'Search...';

// todo: this will be replaced with an array that is generated in the background and stored in context
const PLACEHOLDERS = [
  "Search videos by what was said...",
  "Search podcasts by what was said...",
  "Search conversations by people and topic...",
  // "'bernie sanders saying billionaires'",
  // "'most viewed reviews of 2022 macbook keyboard'",
  // "'movie reviews that mention time travel'",
  // "'5 second clips of elon musk saying artifical intelligence'",
];


export default () => {

  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);


  // when searchbar initaializes start cycling through the placeholders

  useEffect(() => {
    let i = 0; // needed for sequential style

    setInterval(() => {
      // random style
      // const nextPlaceholder = PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];

      // sequential style
      if(i + 1 >= PLACEHOLDERS.length) i = 0;
      else i++;
      const nextPlaceholder = PLACEHOLDERS[i]


      setPlaceholder(nextPlaceholder);

    }, 3000)


  }, []);

  return <input className="flex-grow form-control mx-5" type="search" placeholder={placeholder} aria-label="Search" />
}