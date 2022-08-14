import logo from '../logo.svg';

// small space-between (menu icon, logo, Download button)
// menu open to white background, black text. full width and height, dissolve in animation

// medium (menu icon and logo on left) (5 menu items with right most a dropdown, download button all on right)

export default function Navbar({ handleClick }) {
    return (
        <header className="flex items-center justify-between mx-7 my-4 bg-[#FAFB37]">

            <button className="basis-1/3 md:basis-auto md:mr-4 md:border-2 md:rounded-full md:border-black md:p-2" onClick={handleClick}>
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
              </svg>
            </button>

            <img src={logo} className="basis-1/3 md:basis-auto w-8 h-8" alt="logo" />

            <nav className="hidden md:flex md:ml-auto mr-8 space-x-10">
              <a className="font-semibold hover:underline" href="#">Advertisers</a>
              <a className="font-semibold hover:underline" href="#">Creators</a>
              <a className="font-semibold hover:underline" href="#">Developers</a>
              <a className="font-semibold hover:underline" href="#">Snap AR</a>
              <a className="font-semibold hover:underline" href="#">Features</a>
            </nav>

            <button className="basis-1/3 md:basis-auto text-right font-medium md:bg-white md:rounded-full md:px-8 md:py-2 md:text-lg transition duration-300 ease-in-out hover:scale-110">Download</button>
            
        </header>
    );
}

// Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
// Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.