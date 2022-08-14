import { useState } from "react";

const menuItems = [
  {
    main: "Snapchat",
    secondary: [
      "Snapchat",
      "Stories",
      "Maps",
      "Originals",
      "Store",
      "Accounts",
      "Support",
      "Create Filters",
      "Spotlight",
      "Download",
    ]
  },
  {
    main: "Business",
    secondary: [
      "For Business",
      "Ads Manager",
      "Snap Publishe",
      "Business Support",
      "Public Profiles for Business",
    ]
  },
  {
    main: "Snap AR",
    secondary: [
      "Snap AR",
      "Lens Studio",
      "Lens Web Builder",
      "Camera Kit",
      "Snap Camera",
    ]
  },
  {
    main: "Pixy",
    secondary: [
      "Shop Pixy",
      "Pixy Support",
    ]
  },
  {
    main: "Spectacles",
    secondary: [
      "Spectacles",
      "Creators",
      "Spectacles Support",
    ]
  },
  {
    main: "Developers",
    secondary: [
      "For Developers",
      "Snap Kit",
      "Snap Minis",
      "Snap Games",
      "PlayCanvas",
      "Marketing API",
    ]
  },
  {
    main: "Snap Inc.",
    secondary: [
      "Snap Inc",
      "Investors",
      "Careers",
      "News",
      "Safety & Impact",
      "CitizenSnap",
      "Bitmoji",
      "Zenly",
    ]
  },
  {
    main: "Creators",
    secondary: [
      "Creator Hub",
      "Post to Spotlight",
    ]
  },
]

export default function Menu({ handleClick }) {
  const [active, setActive] = useState("0");

  const handleActive = (index) => {
    if (active === index) {
      return setActive("0");
    }
    setActive(index);
  };

  return (
    <div className="grid grid-cols-3 w-screen h-screen z-50 absolute top-0 left-0 bg-white">
      <aside>
        <button className="p-2 border-2 rounded-full mt-4 ml-8" onClick={handleClick}>
          <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
          </svg>
        </button>
        
        <nav>
          <ol className="flex flex-col ml-16">

            {menuItems.map((item, index) => {
              return (
                <div key={index}>
                  <li className="font-bold text-2xl leading-loose" onClick={() => handleActive(index)}>{item.main}</li>
                  {active===index && <ol className="flex flex-col">
                    {item.secondary.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-lg leading-loose hover:underline ml-4">{subItem}</li>
                    ))}
                  </ol>}
                </div>
              )
            })}

          </ol>
        </nav>
      </aside>
      <section className="col-span-2 flex justify-center items-center p-8">
        <div className="bg-black w-full h-full rounded-xl relative">
          <div className="bg-white flex justify-between rounded-xl p-4 absolute right-8 bottom-8 mx-auto">
            <div className="mr-12">
              <h1 className="text-lg font-medium">Open your Snapchat.</h1>
              <p className="text-slate-500 text-xs">Express yourself with millions of Lenses.</p>
            </div>
            <a className="font-bold bg-[#FAFB37] rounded-full px-8 py-2 text-lg transition duration-300 ease-in-out hover:scale-110">Download</a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.