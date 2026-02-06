import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"

import card1 from "../assets/images/card1.svg"
import card2 from "../assets/images/card2.svg"
import card3 from "../assets/images/card3.svg"

import tables from "../assets/images/tables.png"
import chairs from "../assets/images/chairs.png"
import armchairs from "../assets/images/armchairs.png"
import sofas from "../assets/images/sofas.png"

import modernarmchair from "../assets/images/modernarmchair.svg"
import eggchair from "../assets/images/eggchair.svg"
import chaiselounge from "../assets/images/chaiselounge.svg"

import bedroom from "../assets/images/bedroom.png"
import livingroom from "../assets/images/livingroom.png"
import hallway from "../assets/images/hallway.png"
import kitchen from "../assets/images/kitchen.png"

import arrowright from "../assets/images/arrowright.svg"

import video1 from "../assets/images/video1.png"
import videobtn from "../assets/images/videobtn.svg"

import modernchair1 from "../assets/images/modernchair1.svg"
import foldingtable from "../assets/images/foldingtable.svg"
import classicarmchair from "../assets/images/classicarmchair.svg"
import papasanchair from "../assets/images/papasanchair.svg"
import modernchair2 from "../assets/images/modernchair2.svg"
import coffeetable1 from "../assets/images/coffeetable1.svg"
import coffeetable2 from "../assets/images/coffeetable2.svg"
import modernchair3 from "../assets/images/modernchair3.svg"

import star from "../assets/images/star.svg"
import customerreview from "../assets/images/customerreview.png"
import customer from "../assets/images/customer.svg"

import logo1 from "../assets/images/logo1.svg"
import logo2 from "../assets/images/logo2.svg"
import logo3 from "../assets/images/logo3.svg"
import logo4 from "../assets/images/logo4.svg"
import logo5 from "../assets/images/logo5.svg"

const categories = [
    { id: 1, title: "Tables", products: 24, imageurl: tables },
    { id: 2, title: "Chairs", products: 28, imageurl: chairs },
    { id: 3, title: "Armchairs", products: 16, imageurl: armchairs },
    { id: 4, title: "Sofas", products: 42, imageurl: sofas },
    { id: 5, title: "Sofas", products: 42, imageurl: sofas },
    { id: 6, title: "Tables", products: 24, imageurl: tables },
    { id: 7, title: "Chairs", products: 28, imageurl: chairs },
    { id: 8, title: "Armchairs", products: 16, imageurl: armchairs },
];

const tabs = ["All", "Chairs", "Tables", "Armchairs", "Sofas", "Decor"];

const newProducts = [
    { id: 101, category: "Tables", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 102, category: "Tables", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 103, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 104, category: "Decor", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 105, category: "ArmChairs", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 106, category: "Armchairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 107, category: "Decor", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 108, category: "Decor", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 109, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 110, category: "Chairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 111, category: "Chairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 112, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 113, category: "Chairs", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 114, category: "ArmChairs", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 115, category: "Armchairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 116, category: "Decor", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 117, category: "Chairs", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 118, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 119, category: "Chairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 120, category: "Tables", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: "SALE", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 121, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 122, category: "Chairs", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 123, category: "ArmChairs", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 124, category: "Armchairs", imageurl: [modernarmchair, eggchair, chaiselounge], name: "Modern Armchair", price: 250, delprice: 2000, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 125, category: "Tables", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 126, category: "Tables", imageurl: [chaiselounge, eggchair, modernarmchair], name: "Chaise Lounge", price: 450, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 127, category: "Sofas", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 150, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 128, category: "Tables", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 129, category: "Decor", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 130, category: "Decor", imageurl: [eggchair, modernarmchair, chaiselounge], name: "Egg Chair", price: 280, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
];

const bestSellers = [
    { id: 201, imageurl: [modernchair1, foldingtable, classicarmchair], name: "Modern Chair", price: 250, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 202, imageurl: foldingtable, name: "Folding Table", price: 250, delprice: null, tag: "SALE", colors: [] },
    { id: 203, imageurl: classicarmchair, name: "Classic Armchair", price: 250, delprice: null, tag: null, colors: [] },
    { id: 204, imageurl: [papasanchair, coffeetable1, modernchair2], name: "Papasan Chair", price: 250, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 205, imageurl: [modernchair2, foldingtable, classicarmchair], name: "Modern Chair", price: 250, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 206, imageurl: coffeetable1, name: "Coffee Table", price: 250, delprice: null, tag: null, colors: [] },
    { id: 207, imageurl: modernchair3, name: "Modern Chair", price: 250, delprice: null, tag: null, colors: [] },
    { id: 208, imageurl: [coffeetable2, papasanchair, coffeetable1], name: "Coffee Table", price: 200, delprice: 250, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
];

const Home = () => {

    const [isFavorited, setIsFavorited] = useState([]);
    const [activeTab, setActiveTab] = useState("All");
    const [visibleCount, setVisibleCount] = useState(10);
    const [newColors, setNewColors] = useState({});
    const [bestColors, setBestColors] = useState({});

    const filteredProducts = activeTab === "All" ? newProducts : newProducts.filter(product => product.category === activeTab);

    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const toggleFavorite = (id) => {
        setIsFavorited((prev) => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
    };

    useEffect(() => {
        setVisibleCount(10);
    }, [activeTab]);

    useEffect(() => {
        const defaults = {};
        newProducts.forEach(nproducts => {
            if (nproducts.colors.length) defaults[nproducts.id] = 0;
        });
        setNewColors(defaults);
    }, []);

    useEffect(() => {
        const defaults = {};
        bestSellers.forEach(bsellers => {
            if (bsellers.colors.length) defaults[bsellers.id] = 0;
        });
        setBestColors(defaults);
    }, []);

    return (<>

        <Header isFavorited={isFavorited} newProducts={newProducts} newColors={newColors} toggleFavorite={toggleFavorite} />

        <div className="max-w-full px-4 md:px-5 2xl:px-0 bg-[url('/images/hero.png')] bg-cover bg-center">
            <div className="max-w-324 w-full mx-auto py-5 xl:py-10 2xl:py-37 flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="inline-block bg-[#FFFFFF]/10 mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 px-3.5 lg:px-4 py-2 lg:py-2.5 font-dm-sans font-bold text-white text-xs md:text-sm xl:text-base leading-none tracking-wider">Furniture</span>
                    <h1 className="mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 font-dm-sans font-bold text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-[70px] leading-9 md:leading-10.5 xl:leading-14 2xl:leading-20">Where Traditional Meets Modern</h1>
                    <p className="w-full sm:max-w-[85%] md:max-w-[95%] lg:max-w-[85%] md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-20 font-dm-sans font-normal text-white text-xs md:text-sm xl:text-base leading-normal xl:leading-8.5">Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt.</p>
                    <div className="hidden md:flex gap-1.5 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                        <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=" font-bold text-white bg-[#947458] md:hover:bg-[#947458]/90" >Shop now</Button>
                        <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-medium text-white border-white md:hover:bg-white/10" bordered >Learn more</Button>
                    </div>
                </div>
                <div className=" w-full md:w-1/2 flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-6">
                        <div className="max-w-30 md:max-w-32.5 lg:max-w-37.5 xl:max-w-40 2xl:max-w-53 relative overflow-hidden group cursor-pointer">
                            <img src={card1} alt="Card1" className="w-full h-auto object-cover transition-transform duration-400 md:group-hover:scale-110" />
                            <span className="absolute top-2 sm:top-2.5 md:top-3 xl:top-3.5 2xl:top-4 left-2 sm:left-2.5 md:left-3 xl:left-3.5 2xl:left-4 font-ubuntu font-normal text-[#947458] text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">$199</span>
                        </div>
                        <div className="max-w-30 md:max-w-32.5 lg:max-w-37.5 xl:max-w-40 2xl:max-w-53 w-full bg-[#947458] p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 flex flex-col justify-center gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 text-center">
                            <h2 className="font-dm-sans font-bold text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-none">25% OFF</h2>
                            <span className="font-dm-sans font-medium text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none line-clamp-4 text-wrap">custom-made furniture</span>
                        </div>
                        <div className="max-w-30 md:max-w-32.5 lg:max-w-37.5 xl:max-w-40 2xl:max-w-53 relative overflow-hidden group cursor-pointer">
                            <img src={card2} alt="Card2" className="w-full h-auto object-cover transition-transform duration-400 md:group-hover:scale-110" />
                            <span className="absolute top-2 sm:top-2.5 md:top-3 xl:top-3.5 2xl:top-4 left-2 sm:left-2.5 md:left-3 xl:left-3.5 2xl:left-4 font-ubuntu font-normal text-[#947458] text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">$99</span>
                        </div>
                        <div className="max-w-30 md:max-w-32.5 lg:max-w-37.5 xl:max-w-40 2xl:max-w-53 w-full relative overflow-hidden group cursor-pointer">
                            <img src={card3} alt="Card3" className="w-full h-auto object-cover transition-transform duration-400 md:group-hover:scale-110" />
                            <span className="absolute top-2 sm:top-2.5 md:top-3 xl:top-3.5 2xl:top-4 left-2 sm:left-2.5 md:left-3 xl:left-3.5 2xl:left-4 font-ubuntu font-normal text-[#947458] text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">$199</span>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden gap-1.5 md:gap-2 lg:gap-2.5 2xl:gap-3">
                    <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=" font-bold text-white bg-[#947458] md:hover:bg-[#947458]/90" >Shop now</Button>
                    <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-medium text-white border-white md:hover:bg-white/10" bordered >Learn more</Button>
                </div>
            </div>
        </div>

        <div className="max-w-full bg-white px-4 md:px-5 2xl:px-0">
            <div className="max-w-324 w-full mx-auto py-5 xl:py-10 2xl:py-30">
                <div className="mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 flex flex-wrap sm:flex-row justify-between items-start sm:items-start gap-2">
                    <h2 className="font-dm-sans font-bold text-black text-2xl md:text-3xl xl:text-4xl 2xl:text-[50px] leading-8 md:leading-9.75 xl:leading-11.75 2xl:leading-16.25">Shop by Categories</h2>
                    <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-medium text-black border-black md:hover:bg-black/10" bordered>View all</Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 2xl:grid-cols-4 gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-3 2xl:gap-x-6 gap-y-2.5 md:gap-y-3 lg:gap-y-3.5 xl:gap-y-4 2xl:gap-y-8">
                    {categories.map((item) => (
                        <div key={item.id} className=" flex flex-col items-start group cursor-pointer transition-all duration-300 md:hover:-translate-y-1.5">
                            <img loading="lazy" src={item.imageurl} alt={item.title} className="w-full h-auto" />
                            <h3 className="mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 xl:mt-3 2xl:mt-3.5 mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 2xl:mb-2.5 font-dm-sans font-medium text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">{item.title}</h3>
                            <span className="font-dm-sans font-medium text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">{item.products} products</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="max-w-full bg-[#F8F9FA] px-4 md:px-5 2xl:px-0">
            <div className="max-w-324 w-full mx-auto py-5 xl:py-10 2xl:py-30">
                <div className="flex flex-col items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-10 mb-5 lg:mb-6 xl:mb-7.5 2xl:mb-15">
                    <h2 className="font-dm-sans font-bold text-black text-2xl md:text-3xl xl:text-4xl 2xl:text-[50px] leading-8 md:leading-9.75 xl:leading-11.75 2xl:leading-16.25">New Products</h2>
                    <ul className="w-full flex sm:justify-center gap-4 lg:gap-6 xl:gap-9 2xl:gap-15 overflow-x-auto overflow-y-hidden">
                        {tabs.map((tab) => (
                            <li key={tab} onClick={() => setActiveTab(tab)} className={`font-dm-sans font-medium text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none p-1.5 2xl:p-2 md:cursor-pointer select-none ${activeTab === tab ? "border-b sm:border-b-2 border-[#947458]" : ""
                                }`}>{tab}</li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-3 gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-3 2xl:gap-x-6 gap-y-2.5 md:gap-y-3 lg:gap-y-3.5 xl:gap-y-4 2xl:gap-y-8">
                    {displayedProducts.map((newproduct) => {
                        const selectedColorIndex = newColors[newproduct.id] || 0;
                        const currentImage = newproduct.imageurl[selectedColorIndex];
                        return (
                            <div key={newproduct.id} className="">
                                <div className="relative group cursor-pointer overflow-hidden">
                                    <img loading="lazy" src={currentImage} alt={newproduct.name} className="w-full h-auto transition-transform duration-400 md:group-hover:scale-110" />
                                    {newproduct.tag && (
                                        <span className={`absolute top-2 md:top-2.5 xl:top-4 2xl:top-6 left-2 md:left-2.5 xl:left-4 2xl:left-6 px-1.5 sm:px-2 md:px-3 xl:px-3.5 2xl:px-5 py-0.5 sm:py-1 xl:py-1.5 2xl:py-2.25 font-dm-sans font-medium text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none ${newproduct.tag === 'SALE' ? 'bg-[#FB5454]' : newproduct.tag === 'NEW' ? 'bg-[#242425]' : 'bg-[#DEE2E6]'}`}>
                                            {newproduct.tag}
                                        </span>
                                    )}
                                    <button onClick={() => toggleFavorite(newproduct.id)} className="w-4 md:w-4.5 lg:w-5 xl:w-5.5 2xl:w-6 h-4 md:h-4.5 lg:h-5 xl:h-5.5 2xl:h-6 absolute right-4 md:right-5 lg:right-6 xl:right-6.5 2xl:right-8 bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-6.5 2xl:bottom-8 md:cursor-pointer transition-all duration-200 hover:scale-110 bg-none">
                                        <Heart className={`w-4 md:w-4.5 lg:w-5 xl:w-5.5 2xl:w-6 h-4 md:h-4.5 lg:h-5 xl:h-5.5 2xl:h-6 transition-colors ${isFavorited.includes(newproduct.id) ? 'fill-red-500 text-red-500' : 'text-[#808080]'}`} />
                                    </button>
                                </div>
                                <div className="w-full pr-0.5 mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 xl:mt-3 2xl:mt-3.5 mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 2xl:mb-2.5 flex flex-col sm:flex-row justify-between items-center gap-2.5">
                                    <h3 className="font-ubuntu font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">{newproduct.name}</h3>
                                    {newproduct.colors.length > 0 && (
                                        <div className="flex items-center gap-1.5 md:gap-2 xl:gap-2.5">
                                            {newproduct.colors.map((c, i) => {
                                                return (
                                                    <button key={i} onClick={() => setNewColors({ ...newColors, [newproduct.id]: i })}
                                                        className={`w-3 md:w-3.5 xl:w-4 h-3 md:h-3.5 xl:h-4 rounded-full md:cursor-pointer transition 
                                                        ${newColors[newproduct.id] === i ? "ring-1 ring-offset-1 ring-black" : "opacity-80 md:hover:opacity-100"}`}
                                                        style={{ backgroundColor: c }} />
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                                <span className="w-full inline-flex justify-center sm:justify-start gap-1 lg:gap-1.5 2xl:gap-2 font-ubuntu font-normal text-black text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">$
                                    {newproduct.price}
                                    {newproduct.delprice && (
                                        <del className="font-ubuntu font-normal text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none line-through">
                                            ${newproduct.delprice}
                                        </del>
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {visibleCount < filteredProducts.length && (
                    <div className="w-full flex justify-center mt-10 lg:mt-16">

                        <Button type="button" onClick={() => setVisibleCount(prev => prev + 10)} className="font-medium text-black border-black md:hover:bg-black/10" bordered>View More Products</Button>
                    </div>
                )}

            </div>
        </div>

        <div className="max-w-full bg-white px-4 md:px-5 2xl:px-0">
            <div className="max-w-324 w-full mx-auto py-5 xl:py-10 2xl:py-30 flex justify-center">
                <div className="max-h-100 sm:max-h-125 md:max-h-110 lg:max-h-135 2xl:max-h-full max-w-100 sm:max-w-125 md:max-w-175 lg:max-w-225 xl:max-w-250 2xl:max-w-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-3 2xl:gap-x-6 gap-y-1.5 md:gap-y-2 lg:gap-y-2.5 xl:gap-y-3 2xl:gap-y-6">
                    <div className="relative col-span-2 row-span-1 group overflow-hidden cursor-pointer">
                        <img loading="lazy" src={bedroom} className="w-full h-full object-cover object-center transition-transform duration-400 md:group-hover:scale-110" alt="Bedroom" />
                        <button className="absolute bottom-0 left-0 bg-black/50 md:hover:bg-black/60 px-2 xl:px-3 2xl:px-3.5 py-1 xl:py-2 2xl:py-2.75 inline-flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 font-dm-sans font-bold text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer transition-all">Bedroom
                            <img loading="lazy" src={arrowright} alt="Arrow Right" className="w-3.5 md:w-4 xl:w-5 2xl:w-6 h-3.5 md:h-4 xl:h-5 2xl:h-6 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                        </button>
                    </div>
                    <div className="relative col-span-1 row-span-2 col-start-2 md:col-start-3 row-start-2 md:row-start-1 group overflow-hidden cursor-pointer">
                        <img loading="lazy" src={kitchen} className="w-full h-full object-cover object-center transition-transform duration-400 md:group-hover:scale-110" alt="Kitchen" />
                        <button className="absolute bottom-0 left-0 bg-black/50 md:hover:bg-black/60 px-2 xl:px-3 2xl:px-3.5 py-1 xl:py-2 2xl:py-2.75 inline-flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 font-dm-sans font-bold text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer transition-all">Kitchen
                            <img loading="lazy" src={arrowright} alt="Arrow Right" className="w-3.5 md:w-4 xl:w-5 2xl:w-6 h-3.5 md:h-4 xl:h-5 2xl:h-6 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                        </button>
                    </div>
                    <div className="relative col-span-1 row-span-1 group overflow-hidden cursor-pointer">
                        <img loading="lazy" src={livingroom} className="w-full h-full object-cover object-center transition-transform duration-400 md:group-hover:scale-110" alt="Living room" />
                        <button className="absolute bottom-0 left-0 bg-black/50 md:hover:bg-black/60 px-2 xl:px-3 2xl:px-3.5 py-1 xl:py-2 2xl:py-2.75 inline-flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 font-dm-sans font-bold text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer transition-all">Livingroom
                            <img loading="lazy" src={arrowright} alt="Arrow Right" className="w-3.5 md:w-4 xl:w-5 2xl:w-6 h-3.5 md:h-4 xl:h-5 2xl:h-6 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                        </button>
                    </div>
                    <div className="relative col-span-1 row-span-1 group overflow-hidden cursor-pointer">
                        <img loading="lazy" src={hallway} className="w-full h-full object-cover object-center transition-transform duration-400 md:group-hover:scale-110" alt="Hallway" />
                        <button className="absolute bottom-0 left-0 bg-black/50 md:hover:bg-black/60 px-2 xl:px-3 2xl:px-3.5 py-1 xl:py-2 2xl:py-2.75 inline-flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 font-dm-sans font-bold text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer transition-all">Hallway
                            <img loading="lazy" src={arrowright} alt="Arrow Right" className="w-3.5 md:w-4 xl:w-5 2xl:w-6 h-3.5 md:h-4 xl:h-5 2xl:h-6 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-full bg-[#F6F4F2] mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative">
                <img loading="lazy" src={video1} alt="Furniture Video" className="max-h-85 lg:max-h-100 xl:max-h-112.5 2xl:max-h-190 w-full h-full object-cover object-center" />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:cursor-pointer">
                    <img loading="lazy" src={videobtn} alt="Video Button" className="w-8 sm:w-9 md:w-10 lg:w-12 xl:w-15 2xl:w-20 h-8 sm:h-9 md:h-10 lg:h-12 xl:h-15 2xl:h-20 transition-transform duration-300 md:hover:scale-110" />
                </button>
            </div>
            <div className="w-full sm:w-1/2 xl:max-w-123.25 mx-auto px-4 md:px-5 py-4 md:py-5 md:pr-10 md:pl-10 xl:pr-0 xl:pl-0 xl:ml-[7%] flex flex-col justify-center gap-5 lg:gap-6 xl:gap-10 2xl:gap-17">
                <h2 className="font-dm-sans font-bold text-black text-xl md:text-2xl xl:text-3xl 2xl:text-[40px] leading-6.5 md:leading-8 xl:leading-9.75 2xl:leading-13">Affordable furniture for every home</h2>
                <p className="font-dm-sans font-normal text-black text-xs md:text-sm xl:text-base leading-normal">Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.<br />Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo </p>
            </div>
        </div>

        <div className="max-w-full bg-white px-4 md:px-5 2xl:px-0">
            <div className="max-w-324 w-full mx-auto py-5 xl:py-10 2xl:py-30">
                <div className="mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 flex flex-wrap sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h2 className="font-dm-sans font-bold text-black text-2xl md:text-3xl xl:text-4xl 2xl:text-[50px] leading-8 md:leading-9.75 xl:leading-11.75 2xl:leading-16.25">Bestsellers</h2>
                    <Button type="button" className="font-medium text-black border-black md:hover:bg-black/10" bordered >View all</Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 2xl:grid-cols-4 gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-3 2xl:gap-x-6 gap-y-2.5 md:gap-y-3 lg:gap-y-3.5 xl:gap-y-4 2xl:gap-y-8">
                    {bestSellers.map((bestseller) => {
                        const selectedIndex = bestColors[bestseller.id] || 0;
                        const currentImage = Array.isArray(bestseller.imageurl)
                            ? bestseller.imageurl[selectedIndex]
                            : bestseller.imageurl;
                        return (
                            <div key={bestseller.id} className="">
                                <div className="relative mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 group cursor-pointer overflow-hidden">

                                    <img loading="lazy" src={currentImage} alt={bestseller.name} className="w-full h-auto transition-transform duration-400 md:group-hover:scale-110" />
                                    {bestseller.tag && (
                                        <span className={`absolute top-2 md:top-2.5 xl:top-4 2xl:top-6 left-2 md:left-2.5 xl:left-4 2xl:left-6 px-1.5 sm:px-2 md:px-3 xl:px-3.5 2xl:px-5 py-0.5 sm:py-1 xl:py-1.5 2xl:py-2.25 font-dm-sans font-medium text-white text-xs md:text-sm xl:text-base 2xl:text-xl leading-none ${bestseller.tag === 'SALE' ? 'bg-[#FB5454]' : bestseller.tag === 'NEW' ? 'bg-[#242425]' : 'bg-[#DEE2E6]'}`}>
                                            {bestseller.tag}
                                        </span>
                                    )}
                                </div>

                                <div className="w-full flex flex-col items-center gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 text-center">
                                    <h3 className="font-dm-sans font-bold text-black text-base md:text-lg xl:text-xl 2xl:text-2xl leading-none">{bestseller.name}</h3>

                                    <span className="inline-flex sm:justify-start gap-1 lg:gap-1.5 2xl:gap-2 font-ubuntu font-normal text-black text-xs md:text-sm xl:text-base 2xl:text-xl leading-none">$
                                        {bestseller.price}
                                        {bestseller.delprice && (
                                            <del className="font-ubuntu font-normal text-black/60 text-xs md:text-sm xl:text-base 2xl:text-xl leading-none line-through">
                                                ${bestseller.delprice}
                                            </del>
                                        )}
                                    </span>

                                    {bestseller.colors.length > 0 && (
                                        <div className="flex justify-center items-center gap-1.5 md:gap-2 xl:gap-2.5">
                                            {bestseller.colors.map((c, i) => {
                                                const isActive = bestColors[bestseller.id] === i;
                                                return (
                                                    <button key={i} onClick={() => setBestColors({ ...bestColors, [bestseller.id]: i })}
                                                        className={`w-3 md:w-3.5 xl:w-4 h-3 md:h-3.5 xl:h-4 rounded-full md:cursor-pointer transition ${isActive ? "ring-1 ring-offset-1 ring-black" : "opacity-80 md:hover:opacity-100"}`} style={{ backgroundColor: c }} />
                                                );
                                            })}
                                        </div>
                                    )}

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        <div className="max-w-full bg-[#F6F4F2] mx-auto flex flex-col-reverse md:flex-row">
            <div className="w-full sm:w-1/2 xl:max-w-123.25 mx-auto px-4 md:px-5 py-4 md:py-5 md:pr-10 md:pl-10 xl:pr-0 xl:pl-0 xl:mr-[8%] flex flex-col justify-center">
                <h2 className="mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 font-dm-sans font-bold text-black text-xl md:text-2xl xl:text-3xl 2xl:text-[40px] leading-6.5 md:leading-8 xl:leading-9.75 2xl:leading-13">Customer Reviews</h2>
                <div className="mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 flex gap-1 lg:gap-1.5">
                    <img loading="lazy" src={star} alt="Star" className="w-3 lg:w-4 2xl:w-auto h-3 lg:h-4 2xl:h-auto" />
                    <img loading="lazy" src={star} alt="Star" className="w-3 lg:w-4 2xl:w-auto h-3 lg:h-4 2xl:h-auto" />
                    <img loading="lazy" src={star} alt="Star" className="w-3 lg:w-4 2xl:w-auto h-3 lg:h-4 2xl:h-auto" />
                    <img loading="lazy" src={star} alt="Star" className="w-3 lg:w-4 2xl:w-auto h-3 lg:h-4 2xl:h-auto" />
                    <img loading="lazy" src={star} alt="Star" className="w-3 lg:w-4 2xl:w-auto h-3 lg:h-4 2xl:h-auto" />
                </div>
                <p className="mb-3 lg:mb-4 xl:mb-5 2xl:mb-10 font-dm-sans font-medium text-black text-xs md:text-sm xl:text-base leading-normal line-clamp-6">Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.<br />Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque<br />scelerisque adipiscing.<br /> Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>
                <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 2xl:gap-5">
                    <img loading="lazy" src={customer} alt="Customer" className="w-11 lg:w-12 xl:w-14 2xl:w-16 h-11 lg:h-12 xl:h-14 2xl:h-16" />
                    <div className="flex flex-col gap-1.5 lg:gap-2 2xl:gap-4">
                        <span className="font-dm-sans font-bold text-black text-sm xl:text-base leading-none" >Devon Simpson</span>
                        <span className="font-dm-sans font-normal text-black/60 text-xs xl:text-sm leading-none">Customer</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative">
                <img loading="lazy" src={customerreview} alt="Furniture Video" className="max-h-85 lg:max-h-100 xl:max-h-112.5 2xl:max-h-190 w-full h-full object-cover object-center" />
            </div>
        </div>

        <div className="max-w-full bg-white px-4 md:px-5 2xl:px-0">
            <div className="max-w-324 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-15 2xl:px-20 py-5 xl:py-10 2xl:py-15 flex flex-wrap justify-center sm:justify-between items-center gap-x-12 gap-y-6">
                <img loading="lazy" src={logo1} alt="Logo1" className="w-10 md:w-12 lg:w-15 xl:w-18 2xl:w-20 h-10 md:h-12 lg:h-15 xl:h-18 2xl:h-20 opacity-60" />
                <img loading="lazy" src={logo2} alt="Logo2" className="w-10 md:w-12 lg:w-15 xl:w-18 2xl:w-20 h-10 md:h-12 lg:h-15 xl:h-18 2xl:h-20 opacity-60" />
                <img loading="lazy" src={logo3} alt="Logo3" className="w-10 md:w-12 lg:w-15 xl:w-18 2xl:w-20 h-10 md:h-12 lg:h-15 xl:h-18 2xl:h-20 opacity-60" />
                <img loading="lazy" src={logo4} alt="Logo4" className="w-12 lg:w-18 xl:w-22 2xl:w-25 h-10 lg:h-12 xl:h-14 2xl:h-16 opacity-60" />
                <img loading="lazy" src={logo5} alt="Logo5" className="w-10 md:w-12 lg:w-15 xl:w-18 2xl:w-20 h-10 md:h-12 lg:h-15 xl:h-18 2xl:h-20 opacity-60" />
            </div>
        </div>

        <Footer />

    </>);
};

export default Home;