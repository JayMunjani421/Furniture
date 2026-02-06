import Header from "../components/Header"

import contactushero from "../assets/images/contactushero.png"

import contactemail from "../assets/images/contactemail.svg"
import contactphone from "../assets/images/contactphone.svg"
import contactmappin from "../assets/images/contactmappin.svg"
import Footer from "../components/Footer"


const ContactUs = () => {
  return (<>
    <Header />

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <img src={contactushero} alt="Contact Us Hero" className="w-full h-[350px] lg:h-auto object-cover object-center" />
      <div className="max-w-[1296px] relative w-full mx-auto mt-5 lg:-mt-50 p-3 lg:p-7 lg:p-15 bg-[#F6F4F2] flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 py-5 lg:py-10">
          <h1 className="mb-4 lg:mb-7 font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-none">Contact Us</h1>
          <p className="mb-7 lg:mb-20 font-dm-sans font-normal text-black text-sm lg:text-base leading-tight">Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla</p>
          <div className="mb-3 lg:mb-7 flex items-center gap-3 lg:gap-5">
            <img src={contactmappin} alt="Map Pin Contact" />
            <span className="font-dm-sans font-bold text-black/60 text-base lg:text-2xl leading-none">Physical address</span>
          </div>
          <span className="block pl-9 lg:pl-11 font-dm-sans font-bold text-black text-lg lg:text-[28px] leading-none">60 Fremont Ave. Hamden, CT 06514</span>
          <div className="mt-3 lg:mt-10 mb-3 lg:mb-7 flex items-center gap-3 lg:gap-5">
            <img src={contactphone} alt="Phone Contact" />
            <span className="font-dm-sans font-bold text-black/60 text-base lg:text-2xl leading-none">Phone number</span>
          </div>
          <span className="pl-9 lg:pl-11 font-dm-sans font-bold text-black text-lg lg:text-[28px] leading-none">+437 402-2459</span>
          <div className="mt-3 lg:mt-10 mb-3 lg:mb-7 flex items-center gap-3 lg:gap-5">
            <img src={contactemail} alt="Email Contact" />
            <span className="font-dm-sans font-bold text-black/60 text-base lg:text-2xl leading-none">Emai address</span>
          </div>
          <span className="pl-9 lg:pl-11 font-dm-sans font-bold text-black text-lg lg:text-[28px] leading-none">fStore@email.com</span>
        </div>
        <div className="lg:w-1/2 bg-white p-5 lg:p-10">
          <h2 className="mb-6 lg:mb-10 font-dm-sans font-bold text-black text-2xl lg:text-[28px] leading-none">Get in touch</h2>
          <form>
            <div className="mb-4 lg:mb-7 flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="flex-1">
                <label className="block mb-1.5 font-dm-sans font-medium text-black text-sm lg:text-base leading-tight">Name</label>
                <input type="text" placeholder="Your name..." className="w-full py-2 lg:py-3.5 px-2 lg:px-4 border border-[#DEE2E6] font-dm-sans font-normal text-black placeholder:text-[#ADB5BD] text-sm lg:text-base leading-tight focus:outline-none" />
              </div>
              <div className="flex-1">
                <label className="block mb-1.5 font-dm-sans font-medium text-black text-sm lg:text-base leading-tight">Phone</label>
                <input type="tel" placeholder="Your phone number..." className="w-full py-2 lg:py-3.5 px-2 lg:px-4 border border-[#DEE2E6] font-dm-sans font-normal text-black placeholder:text-[#ADB5BD] text-sm lg:text-base leading-tight focus:outline-none" />
              </div>
            </div>
            <div className="mb-4 lg:mb-7">
              <label className="block mb-1.5 font-dm-sans font-medium text-black text-sm lg:text-base leading-tight">Email</label>
              <input type="email" placeholder="Your email address..." className="w-full py-2 lg:py-3.5 px-2 lg:px-4 border border-[#DEE2E6] font-dm-sans font-normal text-black placeholder:text-[#ADB5BD] text-sm lg:text-base leading-tight focus:outline-none" />
            </div>
            <div className="mb-4 lg:mb-10">
              <label className="block mb-1.5 font-dm-sans font-medium text-black text-sm lg:text-base leading-tight">Message</label>
              <textarea rows="6" placeholder="Your message..." className="w-full py-2 lg:py-3.5 px-2 lg:px-4 border border-[#DEE2E6] font-dm-sans font-normal text-black placeholder:text-[#ADB5BD] text-sm lg:text-base leading-tight focus:outline-none resize-none" ></textarea>
            </div>
            <button type="submit" className="bg-[#947458] px-5 lg:px-8 py-3 font-dm-sans font-medium text-white text-base lg:text-xl leading-tight hover:bg-[#947458]/90 cursor-pointer text-nowrap" >Send message</button>
          </form>
        </div>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-15 lg:py-30">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.938963924338!2d-72.7454382102018!3d41.72183590108824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ad6c671d6613%3A0x309fe1523dbeabfb!2s137-199%20Federal%20St%2C%20West%20Hartford%2C%20CT%2006110%2C%20USA!5e0!3m2!1sen!2sin!4v1769373030390!5m2!1sen!2sin" allowFullScreen="" width="100%" height="460"></iframe>
        
      </div>
    </div>



    <Footer />

  </>);
};

export default ContactUs;

