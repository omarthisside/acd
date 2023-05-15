import Image from 'next/image'
import logo from './images/logo.png'
import desktopLogo from './images/desktop-logo.png'
import menuIcon from './images/menu-icon.png'


export default function Home() {
  return (
    < >
        <section className='h-[100vh] relative text-center flex'>
          <nav className='lg:flex lg:justify-between w-[100%] absolute top-0 z-40  '>
          <div className='hidden lg:block  lg:pl-[60px] pt-3 '>
                <Image src={desktopLogo} alt='Advanced Construction Design Logo' className='w-[50px]'/>
          </div>
            <header className='flex justify-between items-center lg:w-1/2 lg:justify-end lg:pr-4'>
              <div className='lg:hidden'>
                <Image src={logo} alt='Advanced Construction Design Logo'/>
              </div>
              <div>
              <Image src={menuIcon} alt='Menu Icon'/>
              </div>
            </header>
          </nav>
         
          <div className='bg-black opacity-40 absolute top-0 bottom-0 left-0 right-0 lg:hidden z-10'></div>
          <div className='absolute top-[55%] left-[50%] w-[100%] md:w-[80%] px-4 text-white translate-y-[-50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:translate-y-0 lg:w-1/2 lg:text-black lg:bg-[#FFF8F2] lg:flex lg:flex-col lg:justify-center lg:text-left z-20 lg:px-[50px]'>
            <h1 className='text-[36px] font-medium leading-[48px] mb-4 sm:text-[42px] lg:text-[56px] lg:leading-[68px] lg:font-medium'>The home of your dreams, built to last a lifetime</h1>
            <p className='text-[14px] sm:text-[16px] mb-8 px-[12px] lg:px-0 lg:text-[18px] lg:text-[#6F6F6F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className=' font-medium sm:flex justify-center lg:justify-start sm:space-x-4 sm:text-[18px]'>
              <a href='#' className='inline-block bg-[#AB825D] text-white px-10 py-[12px] w-[180px] mb-[10px] sm:mb-0 hover:scale-105 transition-all ease-in-out'>Get in touch</a><br/>
              <a className='inline-block bg-none border border-white lg:border-[#AB825D]  text-white lg:text-[#AB825D] px-10 py-[12px] w-[180px] mb-4 sm:mb-0 hover:scale-105 transition-all ease-in-out'>See our work</a>
            </div>
          </div>
          <div className="h-[100vh] w-[100%] absolute top-0 bottom-0 left-0 right-0 bg-cover bg-[url('./images/hero-bg.jpg')] z-0 lg:static lg:w-1/2 "></div>

        </section>
    </>
  )
}
