import { useEffect, useState } from "react";
import Header from "../components/Header";

import brand1 from "../assets/images/brand1.svg"
import brand2 from "../assets/images/brand2.svg"
import brand3 from "../assets/images/brand3.svg"
import brand4 from "../assets/images/brand4.svg"
import brand5 from "../assets/images/brand5.svg"
import brand6 from "../assets/images/brand6.svg"

import filterchair from "../assets/images/filterchair.png"
import filtercoffeetable from "../assets/images/filtercoffeetable.png"
import filternightstand from "../assets/images/filternightstand.png"
import filterpapasan from "../assets/images/filterpapasan.png"

import chevrondowngray from "../assets/images/chevrondowngray.svg"
import chevronrightgray from "../assets/images/chevronrightgray.svg"

import filter1 from "../assets/images/filter1.svg"
import filter2 from "../assets/images/filter2.svg"
import filter3 from "../assets/images/filter3.svg"
import filter4 from "../assets/images/filter4.svg"
import filter5 from "../assets/images/filter5.svg"
import filter6 from "../assets/images/filter6.svg"
import filter7 from "../assets/images/filter7.svg"
import filter8 from "../assets/images/filter8.svg"
import filter9 from "../assets/images/filter9.svg"
import filter10 from "../assets/images/filter10.svg"
import filter11 from "../assets/images/filter11.svg"
import filter12 from "../assets/images/filter12.svg"


import armchairsshop from "../assets/images/armchairsshop.svg"
import cabinetsshop from "../assets/images/cabinetsshop.svg"
import sofasshop from "../assets/images/sofasshop.svg"
import chairsshop from "../assets/images/chairsshop.svg"
import decorsshop from "../assets/images/decorsshop.svg"

import cardicon from "../assets/images/cardicon.svg"
import returnicon from "../assets/images/returnicon.svg"
import supporticon from "../assets/images/supporticon.svg"


import modernarmchairfeatured from "../assets/images/modernarmchairfeatured.svg"
import foldingtablefeatured from "../assets/images/foldingtablefeatured.svg"
import classicchairfeatured from "../assets/images/classicchairfeatured.svg"
import hearticon from "../assets/images/hearticon.svg"
import Footer from "../components/Footer";


const Shop = () => {

  const MIN = 99;
  const MAX = 9999;
  const GAP = 1000;
  const range = MAX - MIN;

  const [minPrice, setMinPrice] = useState(MIN);
  const [maxPrice, setMaxPrice] = useState(MAX);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;


  const minPercent = ((minPrice - MIN) / range) * 100;
  const maxPercent = ((maxPrice - MIN) / range) * 100;

  const activeBarStyle = {
    left: `${minPercent}%`,
    right: `${100 - maxPercent}%`,
  };

  const categories = [
    { id: "cat1", name: "Chairs", count: 10 },
    { id: "cat2", name: "Beds", count: 10 },
    { id: "cat3", name: "Cabinets", count: 10 },
    { id: "cat4", name: "Sofas", count: 10 },
    { id: "cat5", name: "Decor", count: 10 },
    { id: "cat6", name: "Sale", count: 10 }
  ];

  const colors = [
    { id: "col1", hex: "#F5F4F4", name: "White", count: 10 },
    { id: "col2", hex: "#000000", name: "Black", count: 10 },
    { id: "col3", hex: "#D9D9D9", name: "Grey", count: 10 },
    { id: "col4", hex: "#6F410B", name: "Brown", count: 10 },
    { id: "col5", hex: "#0A34A0", name: "Blue", count: 10 },
    { id: "col6", hex: "#033E14", name: "Green", count: 10 },
  ];

  const materials = [
    { id: "mat1", name: "Leather", count: 10 },
    { id: "mat2", name: "Marble", count: 10 },
    { id: "mat3", name: "Metal", count: 10 },
    { id: "mat4", name: "Wood", count: 10 },
    { id: "mat5", name: "Leatherette", count: 10 }
  ];

  const brands = [
    { id: "brand1", imageurl: brand1 },
    { id: "brand2", imageurl: brand2 },
    { id: "brand3", imageurl: brand3 },
    { id: "brand4", imageurl: brand4 },
    { id: "brand5", imageurl: brand5 },
    { id: "brand6", imageurl: brand6 },
  ]

  const bestsellers = [
    { id: "bs1", name: "Classic chair", price: "$99", imageurl: filterchair },
    { id: "bs2", name: "Night Stand", price: "$110", imageurl: filternightstand },
    { id: "bs3", name: "Coffee Table", price: "$1800", imageurl: filtercoffeetable },
    { id: "bs4", name: "Papasan chair", price: "$1000", imageurl: filterpapasan }
  ]

  const [productColors, setProductColors] = useState({});

  const products = [
    { id: 301, imageurl: filter1, name: "Coffee Table", price: 150, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 302, imageurl: filter2, name: "Papasan Chair", price: 250, tag: "SALE", colors: [] },
    { id: 303, imageurl: filter3, name: "Classic Chair", price: 99, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 304, imageurl: filter4, name: "Modern Armchair", price: 250, tag: "NEW", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 305, imageurl: filter5, name: "Classic Armchair", price: 180, tag: null, colors: [] },
    { id: 306, imageurl: filter6, name: "Bar Stool", price: 250, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 307, imageurl: filter7, name: "Nightstand", price: 80, tag: null, colors: [] },
    { id: 308, imageurl: filter8, name: "White Table", price: 250, tag: null, colors: [] },
    { id: 309, imageurl: filter9, name: "Egg chair", price: 280, tag: null, colors: [] },
    { id: 310, imageurl: filter10, name: "Chaise Lounge", price: 450, tag: "NEW", colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 311, imageurl: filter11, name: "Modern Bed", price: 680, tag: null, colors: [] },
    { id: 312, imageurl: filter12, name: "Folding Table", price: 160, tag: "SALE", colors: [] }
  ];

  useEffect(() => {
    const defaults = {};
    products.forEach(p => {
      if (p.colors.length) defaults[p.id] = 0;
    });
    setProductColors(defaults);
  }, []);


  const [feaaturedColors, setFeaturedColors] = useState({});

  const featuredProducts = [
    { id: 401, imageurl: modernarmchairfeatured, name: "Modern Armchair", price: 300, delprice: 250, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 402, imageurl: foldingtablefeatured, name: "Folding Table", price: 160, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] },
    { id: 403, imageurl: classicchairfeatured, name: "Classic Chair", price: 99, delprice: null, tag: null, colors: ["#BDBDBD", "#A89891", "#8F909B"] }
  ];


  useEffect(() => {
    const defaults = {};
    featuredProducts.forEach(fproducts => {
      if (fproducts.colors.length) defaults[fproducts.id] = 0;
    });
    setFeaturedColors(defaults);
  }, []);


  return (<>

    <Header />

    <div className="max-w-full bg-[#F9f9F9] px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-10 lg:py-15 flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0">

        <div className="flex items-start gap-4 lg:gap-5">
          <div className="bg-white p-2 lg:p-3">
            <img src={armchairsshop} alt="Armchairs Shop" className="w-8 lg:w-auto h-8 lg:h-auto" />
          </div>
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <span className="font-dm-sans font-bold text-black text-lg lg:text-xl leading-tight">Armchairs</span>
            <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">124 products</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-5">
          <div className="bg-white p-2 lg:p-3">
            <img src={cabinetsshop} alt="Cabinets Shop" className="w-8 lg:w-auto h-8 lg:h-auto" />
          </div>
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <span className="font-dm-sans font-bold text-black text-lg lg:text-xl leading-tight">Cabinets</span>
            <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">20 products</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-5">
          <div className="bg-white p-2 lg:p-3">
            <img src={sofasshop} alt="Sofas Shop" className="w-8 lg:w-auto h-8 lg:h-auto" />
          </div>
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <span className="font-dm-sans font-bold text-black text-lg lg:text-xl leading-tight">Sofas</span>
            <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">42 products</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-5">
          <div className="bg-white p-2 lg:p-3">
            <img src={chairsshop} alt="Chairs Shop" className="w-8 lg:w-auto h-8 lg:h-auto" />
          </div>
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <span className="font-dm-sans font-bold text-black text-lg lg:text-xl leading-tight">Chairs</span>
            <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">120 products</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-5">
          <div className="bg-white p-2 lg:p-3">
            <img src={decorsshop} alt="Decor Shop" className="w-8 lg:w-auto h-8 lg:h-auto" />
          </div>
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <span className="font-dm-sans font-bold text-black text-lg lg:text-xl leading-tight">Decor</span>
            <span className="font-dm-sans font-bold text-black/60 text-sm lg:text-base leading-tight">299 products</span>
          </div>
        </div>
      </div>
    </div>


    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-15 flex gap-6">
        <aside className="w-full md:max-w-[306px] flex-shrink-0 flex flex-col gap-10">

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Filter by Price</h2>
            <div className="mb-5 relative h-1 flex items-center">

              <div className="absolute left-[10px] right-[10px] h-1 bg-gray-200 rounded-full"></div>
              <div
                className="absolute h-1 bg-[#947458] rounded-full"
                style={activeBarStyle}
              ></div>


              <input
                type="range"
                min="99"
                max="9999"
                value={minPrice}
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - GAP))}
                className="absolute w-full appearance-none bg-transparent pointer-events-none h-1
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:border-4
                [&::-webkit-slider-thumb]:border-[#947458]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer"
              />

              <input
                type="range"
                min="99"
                max="9999"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + GAP))}
                className="absolute w-full appearance-none bg-transparent pointer-events-none h-1
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:border-4
                [&::-webkit-slider-thumb]:border-[#947458]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer"
              />


            </div>

            <p className="font-dm-sans font-bold text-black/60 text-xl leading-tight">Price: <span className="text-black/80">${minPrice} - ${maxPrice}</span></p>

          </div>

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Filter by Categories</h2>
            {categories.map((category) => (
              <div key={category.id} className="mb-2 flex justify-between items-center">
                <label className="flex items-center gap-2 font-dm-sans font-medium text-black text-xl leading-tight">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border border-[#404040]/50" />{category.name}
                </label>
                <span className="px-2 py-[3px] border border-black/60 rounded-xl font-afacad font-normal text-black/50 text-base leading-none">{category.count}</span>
              </div>
            ))}
          </div>

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Filter by Color</h2>
            {colors.map((color) => (
              <div key={color.id} className="mb-2 flex justify-between items-center">
                <label className="flex items-center gap-2 font-dm-sans font-medium text-black text-xl leading-tight">
                  <span className="w-4 h-4 rounded-[20px]" style={{ backgroundColor: color.hex }}></span>
                  {color.name}
                </label>
                <span className="px-2 py-[3px] border border-black/60 rounded-xl font-afacad font-normal text-black/50 text-base leading-none">{color.count}</span>
              </div>
            ))}
          </div>

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Filter by Material</h2>
            {materials.map((material) => (
              <div key={material.id} className="mb-2 flex justify-between items-center">
                <label className="flex items-center gap-2 font-dm-sans font-medium text-black text-xl leading-tight">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border border-[#404040]/50" />{material.name}
                </label>
                <span className="px-2 py-[3px] border border-black/60 rounded-xl font-afacad font-normal text-black/50 text-base leading-none">{material.count}</span>
              </div>
            ))}
          </div>

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Filter by Brand</h2>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
              {brands.map((brand) => (
                <div key={brand.id} className="h-10 px-2 py-1 border border-black/50 flex justify-center items-center" >
                  <img src={brand.imageurl} alt={brand.id} />
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="mb-5 font-dm-sans font-bold text-black text-2xl leading-none">Best Sellers</h2>
            <div className="flex flex-col gap-3">
              {bestsellers.map((bestseller) => (
                <div key={bestseller.id} className="flex items-center gap-3">
                  <img src={bestseller.imageurl} alt={bestseller.name} />
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-dm-sans font-medium text-black text-base leading-none">{bestseller.name}</h3>
                    <span className="font-dm-sans font-bold text-black text-base leading-none">{bestseller.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-start mb-6">
            <p className="font-ubuntu font-medium text-black/60 text-2xl leading-none">Showing 1-12 of 14 results</p>
            <div className="relative flex items-center">
              <select className="pl-3 pr-10 py-2 border border-[#947458] font-ubuntu font-medium text-black/60 text-xl leading-none bg-transparent appearance-none cursor-pointer outline-none" defaultValue="latest">
                <option value="latest">Sort by latest</option>
                <option value="new">Sort by new</option>
                <option value="trending">Sort by trending</option>
              </select>
              <img src={chevrondowngray} alt="Chevron Down" className="w-6 absolute right-2 pointer-events-none" />
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative  mb-4 flex items-center justify-center overflow-hidden">
                  <img src={product.imageurl} alt={product.name} />
                  {product.tag && (
                    <span className={`absolute top-6 left-6 px-5 py-[9px] font-dm-sans font-medium text-white text-xl leading-none ${product.tag === 'SALE' ? 'bg-[#FB5454]' : product.tag === 'NEW' ? 'bg-[#242425]' : 'bg-gray-500'}`}>
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-5">
                  <h4 className="font-dm-sans font-bold text-black text-2xl leading-none text-center">{product.name}</h4>
                  <span className="font-ubuntu font-medium text-black/60 text-xl leading-none">${product.price}</span>
                  {product.colors.length > 0 && (
                    <div className="flex justify-center gap-2">
                      {product.colors.map((c, i) => {
                        const isActive = productColors[product.id] === i;

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              setProductColors({ ...productColors, [product.id]: i })
                            }
                            className={`w-4 h-4 rounded-full cursor-pointer transition
            ${isActive
                                ? "ring-1 ring-offset-1 ring-black"
                                : "opacity-80 hover:opacity-100"
                              }`}
                            style={{ backgroundColor: c }}
                          />
                        );
                      })}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </main>

      </div>
    </div>


    <div className="max-w-full bg-[#F9F9F9] px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-10 lg:py-20 flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0">
        <div className="flex items-start gap-4 lg:gap-6">
          <img src={cardicon} alt="Card Icon" className="w-10 lg:w-auto h-10 lg:h-auto " />
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="font-dm-sans font-bold text-black text-xl lg:text-2xl leading-none">Secure Payments</span>
            <span className="max-w-[224px] font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-tight">Feugiat mi gravida vestibulum orci ac volutpat non</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-6">
          <img src={returnicon} alt="Return Icon" className="w-10 lg:w-auto h-10 lg:h-auto " />
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="font-dm-sans font-bold text-black text-xl lg:text-2xl leading-none">Return Within 14 Days</span>
            <span className="max-w-[224px] font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-tight">Feugiat mi gravida vestibulum orci ac volutpat non</span>
          </div>
        </div>
        <div className="flex items-start gap-4 lg:gap-6">
          <img src={supporticon} alt="Support Icon" className="w-10 lg:w-auto h-10 lg:h-auto " />
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="font-dm-sans font-bold text-black text-xl lg:text-2xl leading-none">24/7 Support</span>
            <span className="max-w-[224px] font-dm-sans font-normal text-black/60 text-sm lg:text-base leading-tight">Feugiat mi gravida vestibulum orci ac volutpat non</span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-full bg-white px-5 2xl:px-0">
      <div className="max-w-[1296px] w-full mx-auto py-15 lg:py-30">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-5 mb-10">
          <h2 className="font-dm-sans font-bold text-black text-3xl md:text-4xl lg:text-[50px] leading-snug">Featured Products</h2>
          <button className="w-full sm:w-auto px-5 sm:px-8 md:px-11 py-3 sm:py-4 md:py-[18px] border border-black font-dm-sans font-medium text-black text-lg lg:text-xl leading-none hover:bg-black/10 cursor-pointer">View all</button>
        </div>

        <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {featuredProducts.map((featuredproduct) => (
            <div key={featuredproduct.id} className="max-w-[416px]">
              <div className="relative mb-3 md:mb-4 lg:mb-5">
                <img src={featuredproduct.imageurl} alt={featuredproduct.name} />
                {featuredproduct.tag && (
                  <span className={`absolute top-6 left-6 px-5 py-[9px] font-dm-sans font-medium text-white text-xl leading-none ${featuredproduct.tag === 'SALE' ? 'bg-[#FB5454]' : featuredproduct.tag === 'NEW' ? 'bg-[#242425]' : 'bg-gray-500'}`}>
                    {featuredproduct.tag}
                  </span>
                )}
                <div className="absolute right-4 lg:right-6 bottom-4 lg:bottom-6 p-1.5 lg:p-2 bg-white rounded-full">
                  <img src={hearticon} alt="Heart Icon" className="w-5 lg:w-auto h-5 lg:h-auto cursor-pointer" />
                </div>
              </div>
              <div className="w-full pr-0.5 mb-2 md:mb-4 lg:mb-6 flex justify-between">
                <h3 className="font-ubuntu font-bold text-black text-xl lg:text-2xl leading-none">{featuredproduct.name}</h3>
                <div className="flex items-center gap-2 lg:gap-2.5">
                  {featuredproduct.colors.length > 0 && (
                    <div className="flex justify-center gap-2">
                      {featuredproduct.colors.map((c, i) => {
                        const isActive = feaaturedColors[featuredproduct.id] === i;

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              setFeaturedColors({ ...feaaturedColors, [featuredproduct.id]: i })
                            }
                            className={`w-4 h-4 rounded-full cursor-pointer transition
            ${isActive
                                ? "ring-1 ring-offset-1 ring-black"
                                : "opacity-80 hover:opacity-100"
                              }`}
                            style={{ backgroundColor: c }}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <span className="inline-flex gap-2 font-ubuntu font-normal text-black text-xl leading-none">$
                {featuredproduct.price}
                {featuredproduct.delprice && (
                  <del className="font-ubuntu font-normal text-black/60 text-lg lg:text-xl leading-none line-through">
                    ${featuredproduct.delprice}
                  </del>
                )}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>

    <Footer />



  </>);
};

export default Shop;

