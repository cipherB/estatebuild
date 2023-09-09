import React from 'react';
import Team from '../assets/team-one.jpg';
import Team2 from '../assets/team-two.jpg';
import { BsCheck2 } from 'react-icons/bs';
import InViewAnimateRight from '../components/transitions/InViewAnimateRight';
import InViewAnimateLeft from '../components/transitions/InViewAnimateLeft';
import InViewAnimateTop from '../components/transitions/InViewAnimateTop';

const About = () => {
  return (
    <div className="flex justify-center">
      <div className='px-6 md:px-[8%] py-[8%] max-w-[1600px]' >
        <section className='grid grid-cols-1 gap-y-4 gap-x-20 md:grid-cols-2 pb-14 md:pb-[8%]' >
          <InViewAnimateRight>
            <img src={Team} className='w-full rounded-md md:order-last' alt='office' />
          </InViewAnimateRight>
          <div >
            <InViewAnimateLeft>
              <h2 className='flex gap-1 text-2xl font-bold' >
                <hr className='w-8 h-0.5 pr-3 mt-4 bg-slate-500' />{" "}
                {" "}Who are<span className='text-palette-four' >{" "}we</span>
              </h2>
              <p className='leading-8 text-justify' >
                Estate Capital Limited is a premium micro lending company aimed at helping 
                individuals, small and medium scale enterprise achieve their dream towards 
                financial freedom. We provide quick cash, extra income with low interests,
                and other financial services tailored to suits of clients financial needs 
                and investment.<br />
                Estate Capital was formed in June 16, 2022 as a private company limited 
                shares. we are licensed to operate in Nigeria by the Lagos State Money 
                lending..... and registered under the Special Control Unit Against Money 
                Laundry(SCUML).
              </p>
            </InViewAnimateLeft>
          </div>
        </section>
        <section className='grid grid-cols-1 gap-y-4 gap-x-20 md:grid-cols-2 pb-14 md:pb-[8%]'>
          <div>
            <InViewAnimateTop>
              <h2 className='text-2xl font-bold' >
                Mission<span className='text-palette-four' >{" "}Statement</span>
              </h2>
              <p className='mb-2 leading-8 text-justify' >
                To help in improving access to finance, provide exceptional values for our 
                clients with achieving competitive returns and create a sustainable value 
                for our stakeholders and communities
              </p>
              <h2 className='text-2xl font-bold' >
                Our Core<span className='text-palette-four' >{" "}Values</span>
              </h2>
              <ul className='list-none' >
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Integrity
                </li>
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Empathy
                </li>
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Commitment
                </li>
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Excellence
                </li>
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Respect
                </li>
                <li className='flex items-center gap-2 mb-2' >
                  <BsCheck2 className='text-lg text-palette-four' />
                  Value Creation
                </li>
              </ul>
            </InViewAnimateTop>
          </div>
          <div>
            <InViewAnimateTop>
              <h2 className='text-2xl font-bold' >
                Our<span className='text-palette-four' >{" "}Vision</span>
              </h2>
              <p className="leading-8 text-justify">
                To become number 1 market leader in providing bespoke financial services 
                for our clients and stakeholders in Nigeria
              </p>
            </InViewAnimateTop>
          </div>
        </section>
        <section className='grid grid-cols-1 gap-y-4 gap-x-20 md:grid-cols-2 pb-14 md:pb-[8%]'>
          <InViewAnimateLeft>
            <img src={Team2} className='w-full rounded-md md:order-last' alt='office' />
          </InViewAnimateLeft>
          <div>
            <InViewAnimateRight>
              <h2 className='text-2xl font-bold' >
                Customer<span className='text-palette-four' >{" "}Capacity</span>
              </h2>
              <p className="leading-8 text-justify">
                Our experience and capabilities in providing our services are buffered by 
                our Board of Directors and Management professionals having an aggregate 
                experience of more than an two decades in the provision of financial 
                services and investment advisory.<br/>
                Our team is a group of intelligent and experienced consultants with 
                vast experience in different fields fully equipped to provide excellent 
                service delivery with high value standards.
              </p>
            </InViewAnimateRight>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About