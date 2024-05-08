"use client";
import React, { useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { MyIcon } from "./MyIcons";
import Image from "next/image";

function Nav() {
  const [showCategories, setShowCategories] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [subCatSubData, setsubCatSubData] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const searchInputRef = useRef();
  const searchResultRef = useRef();

  const showCategoriesHovered = () => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data["ud-main"].items);
      });

    setShowCategories(true);
  };

  const fetchSubData = () => {
    fetch("http://localhost:5000/sub")
      .then((response) => response.json())
      .then((data) => setsubCatSubData(data.results));
  };

  const showCategorySub = () => {
    console.log("");
  };

  const inputIsFocused = () => {
    searchResultRef.current.style.display = "flex";
    if (searchInputRef.current.value.length <= 1) {
      setsearchResults([]);
      return;
    }
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: searchInputRef.current.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setsearchResults(data?.data?.searchAutocomplete);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // You can uncomment the line below if needed
    // searchResultRef.current.style.height = "40px";
  };

  return (
    <>
      <nav className="h-20 flex justify-between items-center px-10 z-10 gap-8 shadow-lg">
        <div className="flex items-center gap-4 h-full ">
          <Link href={"#"}>
            <Logo className="w-24" />
          </Link>

          <div
            className="z-10 h-full items-center flex  "
            onMouseEnter={showCategoriesHovered}
            onMouseLeave={() => setShowCategories(false)}
          >
            <h2>Categories</h2>
            {showCategories && (
              <div className="flex absolute top-20 z-50 shadow-xl border-[1px] border-[rgba(0,0,0,0.2)] bg-white">
                <div
                  className="p-4 border-r-[1px] "
                  onMouseEnter={showCategorySub}
                >
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between "
                      onMouseEnter={() => setSubCatData(item.sublist.items)}
                    >
                      <div className="p-2  ">{item.sd_tag.title}</div>
                      <MyIcon iconName={"next"} className="w-3 h-3" />
                    </div>
                  ))}
                </div>
                <div className=" border-r-[1px] p-4">
                  {subCatData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between  p-2"
                      onMouseEnter={fetchSubData}
                    >
                      <div>{item.sd_tag.title}</div>
                      <MyIcon iconName={"next"} className="w-3 h-3" />
                    </div>
                  ))}
                </div>
                <div className=" p-4 ">
                  {subCatSubData.map((item, index) => (
                    <div key={index} className="p-2">
                      {item.display_name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1  h-full py-4 items-center relative">
          <div className="border-[1px] border-black flex-1  rounded-3xl flex overflow-hidden px-4 py-2 h-full gap-4 ">
            <button>
              <MyIcon iconName={"search"} className="w-4" />
            </button>
            <input
              placeholder="Search for anything"
              type="text"
              className="flex-1 text-[#2d2f31] outline-none border-none placeholder:text-sm placeholder:text-[#736a6a] "
              ref={searchInputRef}
              onFocus={inputIsFocused}
              onChange={inputIsFocused}
              onBlur={() => (searchResultRef.current.style.display = "none")}
            />
          </div>
          <div
            ref={searchResultRef}
            className={`flex-col border-[1px] border-[rgba(0,0,0,0.2)] bg-white absolute z-10 py-2 top-20 left-0 right-0 ${
              searchResults.length <= 2 ||
              searchInputRef.current.value.trim().length <= 1
                ? "hidden"
                : "flex"
            }`}
          >
            {searchResults.map((item, index) => (
              <>
                {!item?.item?.images && (
                  <Link
                    href={"#"}
                    className="flex gap-3 items-center  px-8 py-3 hover:bg-[#f7f9fa]"
                  >
                    <MyIcon iconName={"search"} className={"w-4 h-4"} />
                    <p className="font-bold">{item.item?.phrase}</p>
                  </Link>
                )}
                {item.item.images && (
                  <Link
                    href={"#"}
                    className="flex gap-3  items-center   px-8 py-3 hover:bg-[#f7f9fa] "
                  >
                    <Image
                      src={item?.item?.images["px50x50"]}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div>
                      <p className="font-bold">{item.item?.title}</p>
                      <div className="flex items-center">
                        <p className="mr-2 text-sm font-semibold text-[#6a6f73]">
                          {item.item.__typename}
                        </p>
                        <p className="text-[14px]">
                          {item.item?.instructors &&
                          item.item.instructors.length > 0
                            ? item.item.instructors[0].name
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
        <ul className="flex gap-5 items-center h-full">
          <li>
            <Link href="#">Udemy Business</Link>
          </li>
          <li>
            <Link href="#">Teach on Udemy</Link>
          </li>
          <li>
            <Link href="#">
              <CartIcon className="w-5" />
            </Link>
          </li>
          <li className="flex h-full items-center ">
            <Link href="#5" className="border-[1px] border-black py-2 px-5">
              Login
            </Link>
          </li>
          <li className="flex h-full items-center ">
            <Link
              href="#"
              className="bg-[#3e4143] border-[1px] border-black py-2 px-4 text-white font-semibold"
            >
              Sign up
            </Link>
          </li>
          <li className="flex h-full items-center ">
            <Link href="#" className="border-[1px] border-black p-3">
              <MyIcon className="w-4" iconName={"globe"} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
