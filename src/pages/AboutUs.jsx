import Header from "../components/Header"

import aboutushero from "../assets/images/aboutushero.png"

import aboutusbanner from "../assets/images/aboutusbanner.png"

import armchairsaboutus from "../assets/images/armchairsaboutus.svg"
import cabinetsaboutus from "../assets/images/cabinetsaboutus.svg"
import sofasaboutus from "../assets/images/sofasaboutus.svg"
import chairsaboutus from "../assets/images/chairsaboutus.svg"

import aboutuscard1 from "../assets/images/aboutuscard1.png"
import aboutuscard2 from "../assets/images/aboutuscard2.png"

import team1 from "../assets/images/team1.svg"
import team2 from "../assets/images/team2.svg"
import team3 from "../assets/images/team3.svg"

import aboutusvideo from "../assets/images/aboutusvideo.png"
import videobtn from "../assets/images/videobtn.svg"

import collection1 from "../assets/images/collection1.png"
import collection2 from "../assets/images/collection2.png"
import arrowrightblack from "../assets/images/arrowrightblack.svg"

import follow1 from "../assets/images/follow1.png"
import follow2 from "../assets/images/follow2.png"
import follow3 from "../assets/images/follow3.png"
import follow4 from "../assets/images/follow4.png"
import follow5 from "../assets/images/follow5.png"
import Footer from "../components/Footer"

const AboutUs = () => {
  return (<>

    <Header />

    <div className="max-w-full">
      <img src={aboutushero} alt="About Us Hero" className="w-full h-[350px] lg:h-auto object-cover object-center" />
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-15 lg:py-30">
        <h1 className="max-w-[1037px] mx-auto mb-10 lg:mb-20 font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-tight text-center">Lectus morbi eget justo tellus facilisi orci venenatis aliquet. Egestas rutrum volutpat pretium curabitur scelerisque.</h1>
        <div className="max-w-[932px] mx-auto flex flex-col md:flex-row items-start gap-7 lg:gap-20">
          <p className=" md:w-1/2 font-dm-sans font-normal text-black text-sm lg:text-base leading-normal">Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna<br /><br />Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna</p>
          <p className="md:w-1/2 inline-flex flex-col gap-5 lg:gap-10 font-dm-sans font-normal text-black text-sm lg:text-base leading-normal">Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla.<br /><br />Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum. Mi tristique est nunc sapien orci tortor ac. <span className="font-dm-sans font-bold text-black text-base leading-none uppercase cursor-pointer">Read more</span> </p>
        </div>
      </div>
    </div>

    <div className="max-w-full">
      <img src={aboutusbanner} alt="About Us Banner" className="w-full h-[350px] lg:h-auto object-cover object-center" />
    </div>

    <div className="max-w-full bg-[#F6F4F2] px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-12 lg:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div className="flex flex-col gap-4 lg:gap-5">
          <h2 className="font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-none">Live comfortably inside your home</h2>
          <p className=" font-dm-sans font-normal text-black text-sm lg:text-base leading-none">Est nulla tincidunt commodo massa. Nunc interdum cras id augue</p>
        </div>
        <button className="bg-[#947458] px-7 lg:px-10 py-[17px] font-dm-sans font-medium text-white text-lg lg:text-xl leading-none hover:bg-[#947458]/90 cursor-pointer text-nowrap" >Shop Now</button>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-15 lg:py-20 sm:px-5 lg:px-11 flex flex-wrap justify-center sm:justify-between gap-x-11 gap-y-8 sm:gap-0">
        <div className="flex flex-col items-center">
          <img src={armchairsaboutus} alt="Armchairs About Us" className="w-10 lg:w-auto h-10 lg:h-auto mb-3 lg:mb-5" />
          <span className="mb-1 font-dm-sans font-bold text-black text-3xl lg:text-5xl leading-tight">860+</span>
          <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">Armchairs</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={cabinetsaboutus} alt="Cabinets About Us" className="w-10 lg:w-auto h-10 lg:h-auto mb-3 lg:mb-5" />
          <span className="mb-1 font-dm-sans font-bold text-black text-3xl lg:text-5xl leading-tight">1800</span>
          <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">Cabinets</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={sofasaboutus} alt="Sofas About Us" className="w-10 lg:w-auto h-10 lg:h-auto mb-3 lg:mb-5" />
          <span className="mb-1 font-dm-sans font-bold text-black text-3xl lg:text-5xl leading-tight">2k+</span>
          <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">Sofas</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={chairsaboutus} alt="Chairs About Us" className="w-10 lg:w-auto h-10 lg:h-auto mb-3 lg:mb-5" />
          <span className="mb-1 font-dm-sans font-bold text-black text-3xl lg:text-5xl leading-tight">2500</span>
          <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">Chairs</span>
        </div>

      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto pb-15 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        <div className="flex flex-col gap-4 lg:gap-6">
          <img src={aboutuscard1} alt="Card1 About Us" className="max-h-[450px] sm:max-h-full" />
          <div className="bg-[#F6F4F2] py-5 lg:py-21 px-5 lg:px-10 flex flex-col items-start gap-7 lg:gap-15 grow">
            <h2 className="max-w-[453px] font-dm-sans font-bold text-black text-2xl lg:text-[40px] leading-none capitalize">Furniture that will last a lifetime</h2>
            <p className="font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-snug">Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>
            <button className="bg-[#947458] px-4 lg:px-10 py-4 lg:py-[17px] font-dm-sans font-medium text-white text-lg lg:text-xl leading-none hover:bg-[#947458]/90 cursor-pointer text-nowrap" >Learn more</button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-col gap-5 lg:gap-6">
          <div className="bg-[#F6F4F2] py-5 lg:py-21 px-5 lg:px-10 flex flex-col items-start gap-7 lg:gap-15">
            <h2 className="max-w-[453px] font-dm-sans font-bold text-black text-2xl lg:text-[40px] leading-none capitalize">Live comfortably inside your home</h2>
            <p className="font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-normal line-clamp-6">Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque scelerisque adipiscing.<br />Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac.<br />Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>
            <button className="bg-[#947458] px-4 lg:px-10 py-4 lg:py-[17px] font-dm-sans font-medium text-white text-lg lg:text-xl leading-none hover:bg-[#947458]/90 cursor-pointer text-nowrap" >Shop now</button>
          </div>
          <img src={aboutuscard2} alt="Card2 About Us" className="max-h-[450px] sm:max-h-full" />
        </div>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto pt-10 lg:pt-17.5 pb-10 lg:pb-15">
        <h2 className="mb-6 lg:mb-12.5 font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-tight text-center">Our Team</h2>
        <div className="justify-center grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="flex flex-col">
            <img src={team1} alt="Team1" className="mb-3 lg:mb-5" />
            <span className="mb-2 lg:mb-3 font-ubuntu font-bold text-black text-xl lg:text-2xl leading-none text-center">Ian Dyer</span>
            <span className="font-ubuntu font-normal text-black/50 text-lg lg:text-xl leading-none text-center">Consultant</span>
          </div>
          <div className="flex flex-col">
            <img src={team2} alt="Team2" className="mb-3 lg:mb-5" />
            <span className="mb-2 lg:mb-3 font-ubuntu font-bold text-black text-xl lg:text-2xl leading-none text-center">Brianna Fitzgerald</span>
            <span className="font-ubuntu font-normal text-black/50 text-lg lg:text-xl leading-none text-center">Manager</span>
          </div>
          <div className="flex flex-col">
            <img src={team3} alt="Team3" className="mb-3 lg:mb-5" />
            <span className="mb-2 lg:mb-3 font-ubuntu font-bold text-black text-xl lg:text-2xl leading-none text-center">Heath Barry</span>
            <span className="font-ubuntu font-normal text-black/50 text-lg lg:text-xl leading-none text-center">Consultant</span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full relative mx-auto pt-10 lg:pt-30 pb-10 lg:pb-30">
        <img src={aboutusvideo} alt="Video About Us" className="w-full h-[250px] lg:h-auto object-cover object-center" />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <img src={videobtn} alt="Video Button" className="w-10 md:w-15 lg:w-20 h-10 md:h-15 lg:h-20" />
        </button>
      </div>
    </div>

    <div className="max-w-full bg-[#F6F4F2] px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-10 lg:py-30 justify-center grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
        <div className="flex flex-col">
          <img src={collection1} alt="Collection1" className="mb-4 lg:mb-6" />
          <h3 className="mb-2 lg:mb-5 font-dm-sans font-bold text-black text-xl lg:text-2xl leading-none">New Collection quisque libero</h3>
          <p className="mb-2 lg:mb-6 font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-tight">Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum</p>
          <button className="inline-flex gap-1 lg:gap-2 font-dm-sans font-bold text-black text-lg lg:text-xl leading-none cursor-pointer">Shop Now<img src={arrowrightblack} alt="Arrow Right Black" /></button>
        </div>
        <div className="flex flex-col">
          <img src={collection2} alt="Collection2" className="mb-4 lg:mb-6" />
          <h3 className="mb-2 lg:mb-5 font-dm-sans font-bold text-black text-xl lg:text-2xl leading-none">New Collection nisi imperdiet</h3>
          <p className="mb-2 lg:mb-6 font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-tight">Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in</p>
          <button className="inline-flex gap-1 lg:gap-2 font-dm-sans font-bold text-black text-lg lg:text-xl leading-none cursor-pointer">Shop Now<img src={arrowrightblack} alt="Arrow Right Black" /></button>
        </div>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-10 lg:py-30">
        <h2 className="mb-5 lg:mb-10 font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-none">Follow Us on Instagram</h2>
        <div className="justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 lg:gap-6">
          <img src={follow1} alt="Follow1" />
          <img src={follow2} alt="Follow2" />
          <img src={follow3} alt="Follow3" />
          <img src={follow4} alt="Follow4" />
          <img src={follow5} alt="Follow5" />
        </div>
      </div>
    </div>

    <Footer />

  </>);
};

export default AboutUs;