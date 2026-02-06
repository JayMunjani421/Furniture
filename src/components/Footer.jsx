import { useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import Button from "./Button";

import cabinet1 from "../assets/images/cabinet1.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import paymenticons from "../assets/images/paymenticons.svg";

const Footer = () => {

  const [email, setEmail] = useState("");
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= 5)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please enter your email");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
    } else {
      toast.success("Subscribed successfully!");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (<>

    <Toaster position="bottom-right" reverseOrder={false} />

    <div className="max-w-full bg-[#F6F4F2] px-4 md:px-5 2xl:px-0">
      <div className="max-w-324 w-full mx-auto  pt-5 xl:pt-10 2xl:pt-15 pb-5 space-y-7 lg:space-y-8 xl:space-y-10 2xl:space-y-20">

        <div className="flex flex-wrap lg:flex-row justify-between items-start lg:items-end gap-4">
          <div className="flex flex-col gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4">
            <h2 className="font-dm-sans font-bold text-black text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-none">Subscribe to our newsletter</h2>
            <h2 className="font-dm-sans font-bold text-black text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-none">Don’t miss latest news & promotions</h2>
          </div>
          <div className="max-w-112.5 xl:max-w-150 2xl:max-w-159 w-full flex items-end gap-1 sm:gap-2">
            <div className="flex flex-col w-full">
              <input type="email" placeholder="Enter your email" className="w-full bg-white box-border border border-[#DEE2E6]  px-2 sm:px-3 xl:px-3.5 2xl:px-4  py-1.75 sm:py-2 md:py-2.25 lg:py-2.75 xl:py-[12.5px] 2xl:py-3.5 font-dm-sans font-medium text-black placeholder:text-[#DEE2E6] text-xs md:text-sm xl:text-base 2xl:text-xl leading-none placeholder:leading-none outline-none" value={email}
                onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.repeat) {
                    handleSubscribe();
                  }
                }} required />
            </div>
            <Button type="submit" className=" font-bold text-white bg-[#947458] md:hover:bg-[#947458]/90" onClick={handleSubscribe} >Subscribe</Button>
          </div>
        </div>

        <div className=" flex flex-wrap lg:flex-row sm:justify-between items-start gap-x-10 gap-y-5">
          <div className="flex flex-col items-start gap-3.5 xl:gap-4 2xl:gap-5">
            <div className="flex items-center gap-1.5 2xl:gap-2">
              <img src={cabinet1} alt="Cabinet1" className="w-5 xl:w-6 h-5 xl:h-6" />
              <h3 className="font-inter font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">f Store</h3>
            </div>

            <ul className="flex flex-col gap-1 xl:gap-3">
              {[{ value: "60 Fremont Ave. Hamden, CT 06514" },
              { label: "Email:", value: "fStore@email.com" },
              { label: "Phone:", value: "(928) 630-9272" }].map((item, index) => (
                <li key={index} onClick={scrollToTop} className="inline-flex gap-1 font-dm-sans font-medium text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer">
                  {item.label && <span className="text-black">{item.label}</span>}
                  {item.value}
                </li>
              ))}
              <li className="flex gap-2 2xl:gap-3">
                {[{ src: facebook, alt: "Facebook" },
                { src: twitter, alt: "Twitter" },
                { src: instagram, alt: "Instagram" },
                { src: youtube, alt: "YouTube" }].map(({ src, alt }) => (
                  <img key={alt} src={src} onClick={scrollToTop} alt={alt} className="w-5 xl:w-6 h-5 xl:h-6 md:cursor-pointer md:hover:opacity-80" />
                ))}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
            <h3 className="font-inter font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">Shop</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              {['Chairs', 'Beds', 'Sofas', 'Cabinets', 'Armchairs', 'Sale'].map(item => (
                <li key={item} onClick={scrollToTop} className="font-dm-sans font-medium text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
            <h3 className="font-inter font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">Customer Services</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              {['Orders', 'Addresses', 'Returns', 'Account Details', 'F.A.Q'].map(item => (
                <li key={item} onClick={scrollToTop} className="font-dm-sans font-medium text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
            <h3 className="font-inter font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">Delivery</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              {['Order', 'Return', 'Free Delivery'].map(item => (
                <li key={item} onClick={scrollToTop} className="font-dm-sans font-medium text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
          <span className="font-dm-sans font-normal text-black/60 text-xs xl:text-sm leading-none"> © Copyright f Store 2024. Design by Figma.guru</span>
          <img src={paymenticons} alt="Payment Icons" className="max-w-57.5 lg:w-65.75 h-auto" />
        </div>

      </div>
    </div >
    
  </>);
};

export default Footer;