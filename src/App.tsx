import { useState } from 'react';

import './App.css';
import Container from './components/container';
import Footer from './components/footer';
import Header from './components/header';
import hero from './assets/images/illustration-hero.svg';
import BroswerModal from './components/browser-modal';
import chrome from './assets/images/logo-chrome.svg';
import firefox from './assets/images/logo-firefox.svg';
import opera from './assets/images/logo-opera.svg';
import { faq } from './faq';
import FAQ from './components/faq';
import FeatureTabOne from './components/feature-tab-one';
import FeatureTabTwo from './components/feature-tab-two';
import FeatureTabThree from './components/feature-tab-three';
import MobileMenu from './components/mobile-menu';
import error from "./assets/images/icon-error.svg";


const TABS = [
  {
    id: "bookmark",
    name: "Simple Bookmarking"
  },
  {
    id: "search",
    name: "Speedy Searching"
  },
  {
    id: "share",
    name: "Easy Sharing"
  },
]

function renderFeatureTab(tab: string) {
  switch (tab) {
    case "bookmark":
      return <FeatureTabOne />;
    case "search":
      return <FeatureTabTwo />;
    case "share":
      return <FeatureTabThree />;
    default:
      return <FeatureTabOne />;
  }
}

function App() {
  const [tab, setTab] = useState("bookmark");
  const [email, setEmail] = useState('')
  const [ismenu, setIsmenu] = useState(false)

  const handleMenu = () => {
    setIsmenu(() => !ismenu)
  }

  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event: { target: { value: string, validity: {valid: boolean} }}) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const inputEmail = event.target;

    if (inputEmail.validity.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <div className="overflow-hidden tracking-wider">
        <Header onclick={handleMenu} />
        {
          ismenu && <MobileMenu onclick={handleMenu} />
        }
        <Container>
          <div className="flex flex-col-reverse items-center py-10 lg:py-12 lg:flex-row relative gap-8 lg:gap-4">
            <div className="lg:w-1/2 text-center lg:text-left text-dark-blue">
              <h1 className="text-3xl md:text-5xl font-bold">A Simple Bookmark  Manager</h1>
              <p className="font-light opacity-50 py-4"> A clean and simple interface to organize your favourite websites. Open a new
                browser tab and see your sites load instantly. Try it for free.</p>
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <button className=" text-sm md:text-base text-white border-2 border-soft-blue bg-soft-blue hover:bg-white hover:text-soft-blue px-2 md:px-6 py-3 rounded my-4 "> Get it on Chrome</button>
                <button className="text-sm md:text-base shadowbutton border-2 border-[#F7F7F7] bg-[#F7F7F7] hover:border-dark-blue hover:text-dark-blue px-2 md:px-6 py-3 rounded my-4 ">  Get it on Firefox</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative lg:-right-10 ">
              <div className="w-full relative z-20 ">
                <img src={hero} alt="" className="w-full" />
              </div>
              <div className=" w-full lg:w-[690px] rounded-l-full bg-soft-blue h-[190px] md:h-[400px] lg:h-[300px]  absolute bottom-0 lg:-bottom-4 -right-16 lg:-right-60 "></div>
            </div>
          </div>
        </Container>
        <section className="text-center py-12 lg:py-20">
          <div className="w-11/12 mx-auto text-center text-dark-blue">
            <h2 className="text-2xl font-bold md:text-3xl">Features</h2>
            <p className="font-light md:w-[530px] mx-auto opacity-50 py-3 "> Our aim is to make it quick and easy for you to access your favourite websites.
              Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="flex md:w-[660px] mt-4 mx-auto flex-col md:flex-row items-center md:gap-12 border-t md:border-t-0 border-b">
              {
                TABS.map(item => (
                  <div key={item.id} className="w-full border-b md:border-none">
                    <button className={`p-4 ${tab === item.id ? "border-b-2 border-soft-red" : ""} hover:text-soft-red`} onClick={() => setTab(item.id)} >{item.name} </button>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="py-4">
            {renderFeatureTab(tab)}
          </div>
        </section>
        <Container>
          <section className="text-center mx-auto lg:py-16">
            <div className="w-11/12 md:w-[540px] mx-auto text-dark-blue">
              <h2 className="text-2xl font-bold md:text-3xl">Download the extension</h2>
              <p className="font-light opacity-50 py-3"> We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 py-6">
              <div className="">
                <BroswerModal imgsrc={chrome} title="Add to Chrome" version="Minimum version 62" />
              </div>
              <div className="md:mt-8">
                <BroswerModal imgsrc={firefox} title="Add to Firefox" version="Minimum version 55" />
              </div>
              <div className="md:mt-16">
                <BroswerModal imgsrc={opera} title="Add to Opera" version="Minimum version 46" />
              </div>
            </div>
          </section>

          <section className="text-center py-16">
            <div className="w-11/12 md:w-[540px] mx-auto text-dark-blue">
              <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
              <p className="font-light opacity-50 py-3"> Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
              <div className=" py-16 ">
                {
                  faq.map(item => (
                    <FAQ id={item.id} question={item.question} answer={item.answer} />
                  ))
                }
              </div>
              <button className=" text-white border-2 border-soft-blue bg-soft-blue hover:bg-white hover:text-soft-blue px-8 py-3 rounded my-4 ">More Info</button>
            </div>
          </section>
        </Container>
        <section className="text-center bg-soft-blue py-12">
          <div className=" w-11/12 md:w-[442px] m-auto " >
            <p className="text-white font-normal uppercase">35,000+ already joined</p>
            <h3 className="text-white font-medium text-2xl md:text-4xl py-6">Stay up-to-date with what we're doing</h3>
            <div className="flex flex-col md:flex-row gap-7 md:gap-4 items-end">
              <div className="relative w-full flex-1">
                <div className={`border-2 bg-white rounded relative p-[2px] flex justify-between items-center ${!isValid ? 'border-soft-red' : 'border-white'}`}>
                  <input onChange={handleEmailChange} value={email} type="email" className="w-full text-sm outline-none rounded bg-white py-3 px-2 " placeholder='Enter your email address' />
                  {
                    !isValid && <img src={error} alt="" className="" />
                  }
                </div>

                {
                   !isValid && <div className="absolute text-xs text-left bg-soft-red px-2 py-1 w-full rounded-b text-white">Whoops, make sure it's an email</div>
                }
              </div>

              <button className="w-full md:w-36 text-white border-2 border-soft-red bg-soft-red hover:bg-white hover:text-soft-red px-6 py-3 rounded ">Contact Us</button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
