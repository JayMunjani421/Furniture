import { useState, useEffect, useRef } from "react";
import phonecall from "../assets/images/phonecall.svg";
import chevrondown from "../assets/images/chevrondown.svg";
import search from "../assets/images/search.svg";
import cabinet1 from "../assets/images/cabinet1.svg";
import { NavLink } from "react-router-dom";
import user from "../assets/images/user.svg";
import heart from "../assets/images/heart.svg";
import shoppingbag from "../assets/images/shoppingbag.svg";
import { Menu, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Header = ({ isFavorited = [], newProducts = [], newColors = {}, toggleFavorite = () => { } }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [mobileActiveTab, setMobileActiveTab] = useState(null);

  const headerRef = useRef(null);

  const likedProducts = newProducts.filter(product => isFavorited.includes(product.id));

  const toggleMobileTab = (tab) => {
    setMobileActiveTab(mobileActiveTab === tab ? null : tab);
  };

  const handleSearch = () => {
    if (!query.trim()) {
      toast.error("Please enter a product name to search.");
      return;
    }
    toast.success(`Searching for "${query}" in ${category}`);
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClose = () => {
      setIsMenuOpen(false);
      setMobileActiveTab(null);
    };
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        handleClose();
      }
    };
    window.addEventListener("scroll", handleClose);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" }
  ];

  const getNavLinkClass = ({ isActive }) =>
    `font-dm-sans text-black text-sm xl:text-base 2xl:text-xl leading-none ${isActive
      ? "font-bold"
      : "font-normal"
    }`;

  return (

    <div ref={headerRef} className="lg:sticky lg:top-0 lg:z-50" >

      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="max-w-full bg-[#947458] px-4 md:px-5 2xl:px-0">
        <div className="max-w-324 w-full mx-auto py-0.5 2xl:py-2.5 text-center">
          <p className="font-dm-sans font-normal text-white text-xs xl:text-sm leading-3.5 xl:leading-4.5 uppercase">This weekend <span className="font-bold">Sale 20% off</span> on all products</p>
        </div>
      </div>

      <div className="hidden lg:block max-w-full bg-[#F6F4F2] px-5 2xl:px-0">
        <div className="max-w-324 w-full mx-auto py-1.5 2xl:py-5 flex justify-between items-center ">
          <span className="font-dm-sans font-medium text-black text-xs xl:text-sm leading-3.5 xl:leading-4.5">60 Fremont Ave. Hamden, CT 06514</span>
          <div className="max-w-115.5 w-full h-9.5 2xl:h-10.5 pr-3 2xl:pr-4 flex items-center gap-2 bg-white border box-border border-[#DEE2E6] outline-none">
            <div className="relative flex items-center ">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="pl-3 pr-8 py-1 2xl:py-2 font-dm-sans font-medium text-black text-xs xl:text-sm leading-3.5 xl:leading-4.5 bg-transparent appearance-none cursor-pointer outline-none border-r border-[#DEE2E6]">
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
              </select>
              <img src={chevrondown} alt="Chevron Down" className="w-3 2xl:w-4 h-3 2xl:h-4 absolute right-2 pointer-events-none" />
            </div>
            <div className="w-full flex items-center gap-2">
              <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Search product..." className="w-full font-dm-sans font-medium text-black placeholder:text-[#ADB5BD] text-xs xl:text-sm leading-3.5 xl:leading-4.5 outline-none" />
              <button onClick={handleSearch} className="shrink-0 cursor-pointer hover:opacity-70">
                <img src={search} alt="Search" className="w-5 2xl:w-6 h-5 2xl:h-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={phonecall} alt="Phone Call" className="w-5 2xl:w-6 h-5 2xl:h-6" />
            <span className="font-dm-sans font-medium text-black text-xs xl:text-sm leading-3.5 xl:leading-4.5">(928) 630-9272</span>
          </div>
        </div>
      </div>

      <div className="max-w-full bg-white px-4 md:px-5 2xl:px-0 border-b border-black sticky top-0 z-50">
        <div className="max-w-324 w-full mx-auto py-2 lg:py-3 2xl:py-10 flex justify-between items-center">
          <div className="flex items-center gap-1 x:gap-1.5 2xl:gap-2 cursor-pointer">
            <img src={cabinet1} alt="Logo" className="w-4.5 xl:w-5 2xl:w-6 h-4.5 xl:h-5 2xl:h-6" />
            <span className="font-dm-sans font-bold text-black text-lg xl:text-xl 2xl:text-2xl leading-none">Furniture Store</span>
          </div>
          <ul className="hidden lg:flex items-center lg:gap-8 xl:gap-11">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={getNavLinkClass} >{item.name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center lg:gap-4 xl:gap-5">
            <div className="hidden lg:block relative group cursor-pointer">
              <img src={user} alt="User" className="w-5 2xl:w-6 h-5 2xl:h-6" />
              <div className="absolute top-full right-0 mt-3 w-48 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                <div className="px-4 py-2 border-b border-gray-100 mb-1">
                  <p className="font-dm-sans font-normal text-[#ADB5BD] text-xs xl:text-sm uppercase tracking-wider">Account</p>
                  <p className="font-dm-sans font-bold text-black text-xs xl:text-sm truncate">John Doe</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-xs xl:text-sm font-dm-sans text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-xs xl:text-sm font-dm-sans text-red-500 hover:bg-red-50 rounded-lg transition-colors font-bold cursor-pointer">
                  Logout
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative group cursor-pointer">
              <img src={heart} alt="Heart" className="w-5 2xl:w-6 h-5 2xl:h-6" />
              <span className="w-3 h-3 absolute -top-0.5 -right-1 bg-black font-inter font-normal text-[8px] text-white rounded-full border border-white text-center inline-flex justify-center items-center p-0.5">{isFavorited.length}</span>
              <div className="absolute top-full right-0 mt-3 w-72 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                <h4 className="font-dm-sans font-bold text-black text-xs xl:text-sm mb-3 border-b pb-2">Liked Items ({isFavorited.length})</h4>
                <div className="flex flex-col gap-3 max-h-50 overflow-y-auto custom-scrollbar">
                  {likedProducts.length > 0 ? (
                    likedProducts.map((item) => {
                      const selectedIndex = newColors[item.id] || 0;
                      const displayImage = item.imageurl[selectedIndex];
                      return (
                        <div key={item.id} className="flex items-center gap-3 group/item transition-colors hover:bg-gray-50 p-1 rounded-lg">
                          <img src={displayImage} alt={item.name} className="w-12 h-12 object-cover rounded-md shadow-sm" />
                          <div className="flex flex-col overflow-hidden">
                            <span className="font-dm-sans font-normal text-black text-sm truncate">{item.name}</span>
                            <span className="font-dm-sans font-light text-[#ADB5BD] text-xs">${item.price}</span>
                          </div>
                          <button onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }} className="ml-auto opacity-0 group-hover/item:opacity-100 p-1 hover:text-red-500 transition-all" >
                            <X size={14} />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <span className="py-6 font-dm-sans font-normal text-[#ADB5BD] text-xs 2xl:text-sm text-center">
                      Your wishlist is empty
                    </span>
                  )}
                </div>
                {likedProducts.length > 0 && (
                  <button className="w-full mt-4 bg-black font-dm-sans font-bold text-white text-xs xl:text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">View Full Wishlist</button>
                )}
              </div>
            </div>
            <div className="hidden lg:block relative group cursor-pointer">
              <img src={shoppingbag} alt="ShoppingBag" className="w-5 2xl:w-6 h-5 2xl:h-6" />
              <span className="w-3 h-3 absolute -top-0.5 -right-1 bg-black font-inter font-normal text-[8px] text-white rounded-full border border-white text-center inline-flex justify-center items-center p-0.5">
                0
              </span>
              <div className="absolute top-full right-0 mt-3 w-72 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                <h4 className="font-dm-sans font-bold text-black text-xs xl:text-sm mb-3 border-b pb-2">My Cart (0)</h4>
                <div className="flex flex-col items-center justify-center py-2 gap-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                    <img src={shoppingbag} alt="Empty" className="w-6 h-6 opacity-20" />
                  </div>
                  <p className="font-dm-sans font-normal text-[#ADB5BD] text-xs xl:text-sm">No items in cart</p>
                </div>
              </div>
            </div>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 2xl:w-6 h-5 2xl:h-6" /> : <Menu className="w-5 2xl:w-6 h-5 2xl:h-6" />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all ease-in-out duration-500 ${isMenuOpen ? "max-h-screen opacity-100 border-t border-[#DEE2E6] overflow-visible" : "max-h-0 opacity-0 invisible border-none overflow-hidden"}`}>
          <div className="max-w-full h-8 pr-2 m-3 flex items-center gap-2 bg-white border box-border border-[#DEE2E6] outline-none">
            <div className="relative flex items-center ">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="pl-2 pr-4 py-1 font-dm-sans font-medium text-black text-xs leading-3.5 bg-transparent appearance-none outline-none border-r border-[#DEE2E6]">
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
              </select>
              <img src={chevrondown} alt="Chevron Down" className="w-3 h-3 absolute right-1 pointer-events-none" />
            </div>
            <div className="w-full flex items-center gap-1.5">
              <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Search product..." className="w-full font-dm-sans font-medium text-black placeholder:text-[#ADB5BD] text-xs leading-3.5 outline-none" />
              <button onClick={handleSearch} className="w-3.5 h-3.5 shrink-0">
                <img src={search} alt="Search" className="w-full h-full" />
              </button>
            </div>
          </div>
          <ul className="px-3 py-2 border-t border-[#DEE2E6] flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.path} className="text-left">
                <NavLink to={item.path} className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="p-3 border-t border-[#DEE2E6] flex items-end gap-5">
            <div className="relative">
              <button onClick={() => toggleMobileTab('user')}>
                <img src={user} alt="User" className="w-4.5 h-4.5" />
              </button>
              <div className={`absolute top-full -left-2 mt-2 w-50 bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 z-60 p-2 ${mobileActiveTab === 'user' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="px-4 py-2 border-b border-gray-100 mb-1">
                  <p className="font-dm-sans font-normal text-[#ADB5BD] text-xs uppercase tracking-wider">Account</p>
                  <p className="font-dm-sans font-bold text-black text-xs truncate">John Doe</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-xs font-dm-sans text-black hover:bg-gray-50 rounded-lg transition-colors">Profile Settings</button>
                <button className="w-full text-left px-4 py-2 text-xs font-dm-sans text-red-500 font-bold">Logout</button>
              </div>
            </div>
            <div className="relative">
              <button onClick={() => toggleMobileTab('heart')}>
                <img src={heart} alt="Heart" className="w-4.5 h-4.5" />
                <span className="w-3 h-3 absolute -top-0.5 -right-1 bg-black font-inter font-normal text-[8px] text-white rounded-full border border-white text-center inline-flex justify-center items-center p-0.5">{isFavorited.length}</span>
              </button>
              <div className={`absolute top-full -left-2 mt-2 w-50 bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 z-60 p-4 ${mobileActiveTab === 'heart' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <h4 className="font-dm-sans font-bold text-black text-sm mb-3 border-b pb-2">Liked Items ({isFavorited.length})</h4>
                <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto custom-scrollbar">
                  {likedProducts.length > 0 ? (
                    likedProducts.map((item) => {
                      const selectedIndex = newColors[item.id] || 0;
                      const displayImage = Array.isArray(item.imageurl) ? item.imageurl[selectedIndex] : item.imageurl;
                      return (
                        <div key={item.id} className="flex items-center gap-3 p-1">
                          <img src={displayImage} alt={item.name} className="w-10 h-10 object-cover rounded-md shadow-sm" />
                          <div className="flex flex-col overflow-hidden">
                            <span className="font-dm-sans font-normal text-black text-xs truncate">{item.name}</span>
                            <span className="font-dm-sans font-light text-[#ADB5BD] text-[10px]">${item.price}</span>
                          </div>
                          <button onClick={() => toggleFavorite(item.id)} className="ml-auto p-1 text-gray-400">
                            <X size={14} />
                          </button>
                        </div>
                      );
                    })
                  ) : <span className="py-4 font-dm-sans font-normal text-[#ADB5BD] text-xs text-center">Your wishlist is empty</span>}
                  {likedProducts.length > 0 && (
                    <button className="w-full mt-4 bg-black font-dm-sans font-bold text-white text-xs xl:text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors">View Full Wishlist</button>
                  )}
                </div>
              </div>
            </div>
            <div className="relative">
              <button onClick={() => toggleMobileTab('cart')}>
                <img src={shoppingbag} alt="ShoppingBag" className="w-4.5 h-4.5" />
                <span className="w-3 h-3 absolute -top-0.5 -right-1 bg-black font-inter font-normal text-[8px] text-white rounded-full border border-white text-center inline-flex justify-center items-center p-0.5">0</span>
              </button>
              <div className={`absolute top-full -left-2 mt-2 w-50 bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 z-60 p-4 ${mobileActiveTab === 'cart' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <h4 className="font-dm-sans font-bold text-black text-xs mb-3 border-b pb-2">My Cart (0)</h4>
                <div className="flex flex-col items-center justify-center py-2 gap-2">
                  <p className="font-dm-sans font-normal text-[#ADB5BD] text-xs">No items in cart</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-3 border-t border-[#DEE2E6]">
            <span className="font-dm-sans font-medium text-black text-xs leading-3.5">60 Fremont Ave. Hamden, CT 06514</span>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={phonecall} alt="Phone Call" className="w-4.5 h-4.5" />
              <span className="font-dm-sans font-medium text-black text-xs leading-3.5">(928) 630-9272</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;