import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='summarizer_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Hammock42/AI_SUMMARIZER", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='fuchsia_cyan_gradient '>SummizeAi</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with SummizeAI, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;