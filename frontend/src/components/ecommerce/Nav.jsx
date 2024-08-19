import { useRef } from "react";
import Logo from "../../assets/logo.png"
const AvatarMenue = () => {
  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Analytics", path: "javascript:void(0)" },
    { title: "Profile", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
  ];

  const profileRef = useRef(null);

  return (
    <div className="relative border-t lg:border-none">
      <div>
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
        >
          <img
            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
      
    </div>
  );
};

const Navbar = () => {
  const navigation = [
    { title: "Pro version", path: "javascript:void(0)" },
    { title: "Upgrade", path: "javascript:void(0)" },
    { title: "Support", path: "javascript:void(0)" },
  ];

  return (
    <header className="text-base lg:text-sm fixed w-full z-50">
      <div className="bg-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="javascript:void(0)">
            <img
              src={Logo}
              width={50}
              height={50}
              style={{borderRadius:"20%"}}
              alt="फसलFIXER"
            />
          </a>
        </div>
        <div className="nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0">
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
              </div>
            </form>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.path}
                  className="block text-gray-700 hover:text-gray-900"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <AvatarMenue />
          </ul>
        </div>
      </div>
      <nav className="border-b">
        
      </nav>
    </header>
  );
};

export default Navbar;
