import React, { useState } from 'react'
// import { BsCCircleFill } from 'react-icons/bs';
import Illustrate from '../assets/illustrate.png';
// import BusinessMan from '../assets/manager-business-attire.jpg';
// import Invest from '../assets/investor.svg';
import { services } from '../data/services';
import { faq } from '../data/faq';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import InViewAnimateLeft from '../components/transitions/InViewAnimateLeft';
import InViewAnimateRight from '../components/transitions/InViewAnimateRight';
import InViewAnimateGrow from '../components/transitions/InViewAnimateGrow';

const Home = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className='max-w-[1680px]'>
        {/* Landing */}
        <section className='py-10 md:pt-[4%] md:pb-[6%] px-6 md:px-[8%]' >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14' >
            <InViewAnimateLeft>
              <div>
                <h1 className='mb-4 text-center md:text-left' >Affordable Loans to meet your financial needs</h1>
                <p className='leading-7 text-center md:text-justify' >
                  Flexible Terms and competitive rates for Personal and Business needs
                </p>
                <div className='text-center md:text-left' >
                  <Link to="/loan-application" >
                    <button
                      className='px-10 py-3 mt-4 text-lg font-bold text-center text-white rounded-md bg-palette-one'
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </InViewAnimateLeft>
            <div>
              <InViewAnimateRight>
                <img 
                  src={Illustrate} 
                  alt="company" 
                  className='w-full h-[90%] hidden md:block'
                />
              </InViewAnimateRight>
            </div>
          </div>
        </section>
        <section className=' px-6 md:px-[8%] pb-14 md:pb-[8%]' >
          <div >
            <h2 className="mb-8 text-center">
              Our <span className=' text-palette-one' >Services</span>
            </h2>
            <div className='grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-8' >
              {/* Card 1 */}
              {
                services.map((product, id) => (
                  <div 
                    key={id} 
                    className='drop-shadow hover:drop-shadow-lg'
                  >
                    <InViewAnimateGrow>
                      <div 
                        className={`${id===0?"bg-palette-two" : id===1?"bg-white" :
                        id%2===0?"bg-palette-two":"bg-white"}
                        rounded p-2.5 transition-all duration-300 `}
                      >
                        <div className='flex justify-center' >
                          <div 
                            className={`p-3 mb-3 text-4xl font-bold ${id===0?"text-palette-two bg-white" : 
                            id===1?"text-white bg-palette-two" : id%2===0?"text-palette-two bg-white":
                            "text-white bg-palette-two"} 
                            rounded-full bg-palette-two w-fit`} 
                          >
                            {product.icon}
                          </div>
                        </div>
                        <p 
                          className={`mb-3 text-xl font-bold text-center cabin-header uppercase
                          ${id===1?"text-black" : id===0?"text-white" :
                          id%2!==0?"text-black":"text-white"}`} 
                        >
                          {product.title}
                        </p>
                        <p 
                          className={`leading-8 text-center
                          ${id===1?"text-black" : id===0?"text-white" :
                          id%2!==0?"text-black":"text-white"}`} 
                          dangerouslySetInnerHTML={{__html: product.content}}
                        />
                      </div>
                    </InViewAnimateGrow>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* <section className='px-6 md:px-[8%] pb-14 md:pb-[8%]' >
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8' >
            <InViewAnimateLeft>
              <img src={BusinessMan} alt="application process" className='w-full h-full' />
            </InViewAnimateLeft>
            <div>
              <InViewAnimateRight>
                <div>
                  <h2 className="mb-3 text-center">
                    Our Application <span className=' text-palette-four' >Eligibility</span>
                  </h2>
                  <p className='mb-2 leading-8 text-justify' >
                    All Loans will be reviewed after application is submitted. Every 
                    customer is different and review is par case by case basis, however 
                    we do consider the following in our review:
                  </p>
                  <ul className='list-none' >
                    <li className='flex items-center gap-2 mb-2' >
                      <BsCCircleFill className='text-lg text-palette-four' />
                      Cash flow
                    </li>
                    <li className='flex items-center gap-2 mb-2' >
                      <BsCCircleFill className='text-lg text-palette-four' />
                      Credit score
                    </li>
                    <li className='flex items-center gap-2 mb-2' >
                      <BsCCircleFill className='text-lg text-palette-four' />
                      Loan use
                    </li>
                    <li className='flex items-center gap-2 mb-2' >
                      <BsCCircleFill className='text-lg text-palette-four' />
                      Guarantor/Collateral
                    </li>
                  </ul>
                </div>
              </InViewAnimateRight>
            </div>
          </div>
        </section> */}
        {/* <section className='px-6 md:px-[8%] pb-14 md:pb-[8%]' >
          <div className='flex flex-col justify-center gap-5 mx-auto md:flex-row' >
            <img 
              src={Invest} 
              alt='invest illustrate' 
              className='w-full h-[101px] md:w-[300px] md:h-[251px]' 
            />
            <div className='md:w-[300px] text-center md:text-left' >
              <p className='.cabin-header font-[1000] text-2xl text-palette-four mb-2' >
                Invest in our Packages
              </p>
              <p>
                Maximize your financial potential today by investing in our high-yield loan program.
              </p>
              <button
                className='px-8 py-2 mt-2 font-bold text-white rounded bg-palette-four'
                onClick={()=>navigate("/invest-application")}
              >
                Invest
              </button>
            </div>
          </div>
        </section> */}
        <section className='px-6 md:px-[8%] pb-14 md:pb-[8%]' >
          <div className='md:px-[4%]' >
            <h2 className="mb-3 text-center">
              FAQ
            </h2>
            <ul className='list-none' >
              {
                faq.slice(0,3).map((item, id) => (
                  <li 
                    key={id}
                    className='w-full bg-white shadow hover:bg-palette-one 
                    hover:bg-opacity-10 duration-300 rounded-md my-2.5 px-4'
                  >
                    <div 
                      className='flex items-center justify-between py-4 mb-2 cursor-pointer' 
                      onClick={()=>faqOpen===id?setFaqOpen(null):setFaqOpen(id)}
                    >
                      <p className='text-base text-semibold' >{item.question}</p>
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
            <div className="mt-2 text-center">
              <Link to="/faq" >
                <button
                  className='px-4 py-2 font-bold text-white rounded bg-palette-one'
                >
                  More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className='' >
          <div className='px-6 md:px-[8%] bg-palette-two py-[100px] flex justify-center loan-section' >
            <div className='max-w-[1000px] ml-auto grid-cols-1 gap-y-2 grid md:grid-cols-2 gap-x-14 md:px-20' >
              <div>
                <h2 className='text-4xl font-bold text-white'>Invest in our Packages</h2>
                <p className='text-xl font-semibold text-white' >
                  Maximize your financial potential today by investing in our high-yield loan program.
                </p>
              </div>
              <div>
                <Link to="/invest-application" >
                  <button
                    className='px-10 py-2 mt-2 font-bold text-white transition-all duration-700 rounded bg-palette-four hover:scale-125 hover:border-0 hover:shadow'
                    onClick={()=>navigate("/invest-application")}
                  >
                    Invest
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home