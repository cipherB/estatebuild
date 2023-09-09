import React, { useState } from 'react';
import { faq } from '../data/faq';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div className="flex justify-center">
      <div className='px-6 md:px-[8%] py-[8%] max-w-[1600px]' >
        <section className='pb-[8%]' >
          <h2 className="mb-3 text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <ul className='grid grid-cols-1 list-none md:grid-cols-2 gap-x-8' >
            {
              faq.map((item, id) => (
                <li 
                  key={id}
                  className='w-full bg-white shadow hover:bg-palette-one 
                  hover:bg-opacity-10 duration-300 rounded-md my-2.5 px-4 h-fit'
                >
                  <div 
                    className='flex items-center justify-between py-4 mb-2 cursor-pointer' 
                    onClick={()=>faqOpen===id?setFaqOpen(null):setFaqOpen(id)}
                  >
                    <p className='text-base  text-semibold' >{item.question}</p>
                    {
                      faqOpen===id ? <FaChevronUp className='text-lg font-semibold'/>:
                      <FaChevronDown className='text-lg font-semibold' />
                    }
                  </div>
                  <div 
                    className={`${faqOpen!==id&&"invisible absolute -z-10 -translate-y-14"} 
                    text-sm text-gray-500 duration-200 transition-transform pb-4`}
                    dangerouslySetInnerHTML={{__html:item.answer}} 
                  />
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Faq