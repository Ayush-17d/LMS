
// // import React, { FC, useState, useEffect } from "react";
// // import Link from "next/link";
// // import NavItems from "../utils/NavItems";
// // import { ThemeSwitcher } from "../utils/ThemeSwitcher";
// // import CustomModel from "../utils/CustomModel";
// // import Login from "./Auth/Login";
// // import SignUp from "./Auth/SignUp";
// // import Verification from "./Auth/Verification";
// // import TeachModal from "../utils/TechModel";
// // import { useSelector } from "react-redux";
// // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // import { useSession } from "next-auth/react";
// // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // import toast from "react-hot-toast";
// // import avatar from "../../public/assests/download5.png";
// // import Image from "next/image";

// // interface Props {
// //   open: boolean;
// //   setOpen: (open: boolean) => void;
// //   activeItem: number;
// //   route: string;
// //   setRoute: (route: string) => void;
// // }

// // const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
// //   const [active, setActive] = useState<boolean>(false);
// //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// //   const { user } = useSelector((state: any) => state.auth);
// //   const { data } = useSession();
// //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();

// //   const storeUser = useSelector((state: any) => state.user.user);

// //   useEffect(() => {
// //     if (!user && data) {
// //       socialAuth({
// //         email: data?.user?.email,
// //         name: data?.user?.name,
// //         avatar: data?.user?.image,
// //       });
// //     }
// //     if (isSuccess) {
// //       toast.success("Login Successfully");
// //     }
// //   }, [data, user, socialAuth, isSuccess]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setActive(window.scrollY > 85);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 800 && openSidebar) {
// //         setOpenSidebar(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, [openSidebar]);

// //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if ((e.target as HTMLElement).id === "screen") {
// //       setOpenSidebar(!openSidebar);
// //     }
// //   };

// //   const handleUserIconClick = () => {
// //     setOpenSidebar(false);
// //     setOpen(true);
// //   };

// //   return (
// //     <div className="w-full shadow-2xl bg-[#DDE6ED] dark:bg-[#27374D] z-50 sticky top-0 py-0">
// //       <div
// //         className={`${
// //           active
// //             ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[70px] z-[80] border-b border-gray-400 dark:border-[#ffffff1c] shadow-xl transition duration-500"
// //             : "w-full border-b border-gray-400 dark:border-[#ffffff1c] h-[70px] z-[80]"
// //         }`}
// //       >
// //         <div className="w-[95%] 800px:w-[92%] m-auto py-1 h-full">
// //           <div className="w-full h-[70px] flex items-center justify-between p-3">
// //             <div className="flex items-center">
// //               <Link
// //                 href="/"
// //                 className="text-[25px] hidden 800px:block font-mono font-[500] text-black dark:text-white"
// //               >
// //                 LearnifyHub
// //               </Link>
// //               {user ? (
// //                 user.role === "admin" ? (
// //                   <button
// //                     onClick={() => setTeachModalOpen(true)}
// //                     className="ml-4 hidden 800px:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
// //                   >
// //                     Instructor
// //                   </button>
// //                 ) : (
// //                   <button
// //                     onClick={() => setTeachModalOpen(true)}
// //                     className="ml-4 hidden 800px:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
// //                   >
// //                     Teach With Us
// //                   </button>
// //                 )
// //               ) : null}
// //             </div>
// //             <div className="flex items-center justify-center gap-0 mr-10">
// //               <NavItems
// //                 activeItem={activeItem}
// //                 isMobile={false}
// //                 user={user}
// //                 setOpen={setOpen}
// //                 openSidebar={openSidebar}
// //                 setOpenSidebar={setOpenSidebar}
// //               />
// //               <ThemeSwitcher />
// //               <div className="800px:hidden ml-4">
// //                 <HiOutlineMenuAlt3
// //                   size={25}
// //                   className="cursor-pointer dark:text-white text-black"
// //                   onClick={() => setOpenSidebar(!openSidebar)}
// //                 />
// //               </div>
// //               {user ? (
// //                 <Link href="/profile">
// //                   <Image
// //                     src={storeUser?.avatar?.url || avatar}
// //                     alt="Profile Picture"
// //                     height={4000}
// //                     width={3000}
// //                     className="w-[30px] h-[30px] rounded-full ml-5 hidden 800px:block cursor-pointer object-cover"
// //                     style={{
// //                       border: activeItem === 5 ? "2px solid #37a39a" : "none",
// //                     }}
// //                   />
// //                 </Link>
// //               ) : (
// //                 <div className="ml-4" onClick={handleUserIconClick}>
// //                   <button className="relative hidden 800px:block items-center px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group">
// //                     <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
// //                       <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
// //                     </span>
// //                     <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-ml-4 group-hover:-mb-4">
// //                       <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
// //                     </span>
// //                     <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-700 rounded-md group-hover:translate-x-0"></span>
// //                     <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
// //                       LOGIN
// //                     </span>
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //         {openSidebar && (
// //           <div
// //             className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#0000024]"
// //             onClick={handleClose}
// //             id="screen"
// //           >
// //             <div className="w-[60%] fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-slate-900 dark:bg-opacity-90 overflow-y-auto transition-all duration-300 ease-in-out">
// //               <NavItems
// //                 activeItem={activeItem}
// //                 isMobile={true}
// //                 user={user}
// //                 setOpen={setOpen}
// //                 openSidebar={openSidebar}
// //                 setOpenSidebar={setOpenSidebar}
// //               />
// //               <br />
// //               <p className="text-[16px] px-2 py-5 text-black dark:text-white">
// //                 CopyRight
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {route === "Login" && open && (
// //         <CustomModel
// //           open={open}
// //           setOpen={setOpen}
// //           setRoute={setRoute}
// //           activeItem={activeItem}
// //           component={Login}
// //         />
// //       )}
// //       {route === "Sign-Up" && open && (
// //         <CustomModel
// //           open={open}
// //           setOpen={setOpen}
// //           setRoute={setRoute}
// //           activeItem={activeItem}
// //           component={SignUp}
// //         />
// //       )}
// //       {route === "Verification" && open && (
// //         <CustomModel
// //           open={open}
// //           setOpen={setOpen}
// //           setRoute={setRoute}
// //           activeItem={activeItem}
// //           component={Verification}
// //         />
// //       )}
// //       <TeachModal
// //         open={teachModalOpen}
// //         setOpen={setTeachModalOpen}
// //         setRoute={setRoute}
// //       />
// //     </div>
// //   );
// // };

// // export default Header;
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import CustomModel from "../utils/CustomModel";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/Verification";
import TeachModal from "../utils/TechModel";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import avatar from "../../public/assests/download5.png";
import Image from "next/image";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess }] = useSocialAuthMutation();

  const storeUser = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (!user && data) {
      socialAuth({
        email: data?.user?.email,
        name: data?.user?.name,
        avatar: data?.user?.image,
      });
    }
    if (isSuccess) {
      toast.success("Login Successfully");
    }
  }, [data, user, socialAuth, isSuccess]);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && openSidebar) {
        setOpenSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openSidebar]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "screen") {
      setOpenSidebar(!openSidebar);
    }
  };

  const handleUserIconClick = () => {
    setOpenSidebar(false);
    setOpen(true);
  };

  return (
    <header className="w-full shadow-2xl bg-[#DDE6ED] dark:bg-[#27374D] z-50 sticky top-0">
      <div
        className={`${
          active
            ? "dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-16 z-[80] border-b border-gray-200 dark:border-gray-700 shadow-lg transition duration-300"
            : "w-full border-b border-gray-200 dark:border-gray-700 h-16 z-[80]"
        }`}
      >
        <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
          <div className="w-full h-16 flex items-center justify-between">
            {/* Logo and Teach button section */}
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-2xl font-mono font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LearnifyHub
              </Link>
              {user && (
                <button
                  onClick={() => setTeachModalOpen(true)}
                  className="hidden 800px:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {user.role === "admin" ? "Instructor" : "Teach With Us"}
                </button>
              )}
            </div>

            {/* Navigation and user actions */}
            <div className="flex items-center space-x-4">
              <NavItems
                activeItem={activeItem}
                isMobile={false}
                user={user}
                setOpen={setOpen}
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
              
              <ThemeSwitcher />
              
              {/* Mobile menu toggle */}
              <button 
                className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenSidebar(!openSidebar)}
              >
                <HiOutlineMenuAlt3
                  size={24}
                  className="text-gray-700 dark:text-gray-200"
                />
              </button>
              
              {/* User profile or login button */}
              {user ? (
                <Link 
                  href="/profile"
                  className="hidden 800px:block ml-2"
                >
                  <div className="relative group">
                    <Image
                      src={storeUser?.avatar?.url || avatar}
                      alt="Profile"
                      height={400}
                      width={400}
                      className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
                        activeItem === 5 
                          ? "ring-2 ring-blue-500 ring-offset-2" 
                          : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
                      }`}
                    />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                  </div>
                </Link>
              ) : (
                <button 
                  onClick={handleUserIconClick}
                  className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
                  <button 
                    onClick={() => setOpenSidebar(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="py-2">
                <NavItems
                  activeItem={activeItem}
                  isMobile={true}
                  user={user}
                  setOpen={setOpen}
                  openSidebar={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                />
              </div>
              
              {!user && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={handleUserIconClick}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    Login
                  </button>
                </div>
              )}
              
              <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} LearnifyHub. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth modals */}
      {route === "Login" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Login}
        />
      )}
      {route === "Sign-Up" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={SignUp}
        />
      )}
      {route === "Verification" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Verification}
        />
      )}
      <TeachModal
        open={teachModalOpen}
        setOpen={setTeachModalOpen}
        setRoute={setRoute}
      />
    </header>
  );
};

export default Header;
// import React, { FC, useState, useEffect } from "react";
// import Link from "next/link";
// import NavItems from "../utils/NavItems";
// import { ThemeSwitcher } from "../utils/ThemeSwitcher";
// import CustomModel from "../utils/CustomModel";
// import Login from "./Auth/Login";
// import SignUp from "./Auth/SignUp";
// import Verification from "./Auth/Verification";
// import TeachModal from "../utils/TechModel";
// import { useSelector } from "react-redux";
// import { useSession } from "next-auth/react";
// import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// import toast from "react-hot-toast";
// import avatar from "../../public/assests/download5.png";
// import Image from "next/image";
// import { 
//   HiOutlineMenuAlt3, 
//   HiOutlineAcademicCap, 
//   HiOutlineX,
//   HiOutlineSparkles,
//   HiChevronDown 
// } from "react-icons/hi";

// interface Props {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   activeItem: number;
//   route: string;
//   setRoute: (route: string) => void;
// }

// const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
//   const [active, setActive] = useState<boolean>(false);
//   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
//   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
//   const { user } = useSelector((state: any) => state.auth);
//   const { data } = useSession();
//   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
//   const [profileDropdown, setProfileDropdown] = useState<boolean>(false);

//   const storeUser = useSelector((state: any) => state.user.user);

//   useEffect(() => {
//     if (!user && data) {
//       socialAuth({
//         email: data?.user?.email,
//         name: data?.user?.name,
//         avatar: data?.user?.image,
//       });
//     }
//     if (isSuccess) {
//       toast.success("Login Successfully");
//     }
//   }, [data, user, socialAuth, isSuccess]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setActive(window.scrollY > 85);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 800 && openSidebar) {
//         setOpenSidebar(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [openSidebar]);

//   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLElement).id === "screen") {
//       setOpenSidebar(!openSidebar);
//     }
//   };

//   const handleUserIconClick = () => {
//     setOpenSidebar(false);
//     setOpen(true);
//   };

//   // Close profile dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       if (profileDropdown && !target.closest('#profile-menu')) {
//         setProfileDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [profileDropdown]);

//   return (
//     <header className="w-full z-50 sticky top-0 transition-all duration-300">
//       <div
//         className={`${
//           active
//             ? "bg-white dark:bg-gray-900 shadow-lg backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 border-b border-gray-200 dark:border-gray-800"
//             : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
//         } transition-all duration-300`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo and Brand */}
//             <div className="flex items-center space-x-1">
//               <Link href="/" className="flex items-center space-x-2 group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
//                   <HiOutlineAcademicCap className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent hidden sm:block">
//                   LearnifyHub
//                 </span>
//               </Link>
//             </div>

//             {/* Navigation - Desktop */}
//             <div className="hidden md:flex items-center space-x-6">
//               <NavItems
//                 activeItem={activeItem}
//                 isMobile={false}
//                 user={user}
//                 setOpen={setOpen}
//                 openSidebar={openSidebar}
//                 setOpenSidebar={setOpenSidebar}
//               />
//             </div>

//             {/* Actions Section */}
//             <div className="flex items-center space-x-3">
//               {/* Theme Switcher */}
//               <div className="hidden sm:block">
//                 <ThemeSwitcher />
//               </div>

//               {/* Teach Button */}
//               {user && (
//                 <button
//                   onClick={() => setTeachModalOpen(true)}
//                   className="hidden md:flex items-center px-4 py-2 space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-1px]"
//                 >
//                   <HiOutlineSparkles className="w-4 h-4" />
//                   <span>{user.role === "admin" ? "Instructor" : "Teach"}</span>
//                 </button>
//               )}

//               {/* User Profile or Login */}
//               {user ? (
//                 <div className="relative" id="profile-menu">
//                   <button 
//                     onClick={() => setProfileDropdown(!profileDropdown)}
//                     className="flex items-center space-x-1 focus:outline-none"
//                   >
//                     <div className="relative">
//                       <Image
//                         src={storeUser?.avatar?.url || avatar}
//                         alt="Profile"
//                         height={400}
//                         width={400}
//                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ring-2 ${
//                           activeItem === 5 
//                             ? "ring-blue-500" 
//                             : "ring-transparent"
//                         } ${profileDropdown ? "ring-blue-500" : ""}`}
//                       />
//                       <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
//                     </div>
//                     <HiChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${profileDropdown ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {/* Profile Dropdown */}
//                   {profileDropdown && (
//                     <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50 animate-fade-in">
//                       <Link href="/profile">
//                         <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                           Your Profile
//                         </div>
//                       </Link>
//                       <Link href="/dashboard">
//                         <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                           Dashboard
//                         </div>
//                       </Link>
//                       <Link href="/settings">
//                         <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                           Settings
//                         </div>
//                       </Link>
//                       <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
//                       <button className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
//                         Sign out
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button 
//                   onClick={handleUserIconClick}
//                   className="hidden md:flex items-center space-x-2 px-5 py-2 text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium rounded-full transition-colors shadow-sm"
//                 >
//                   <span>Login</span>
//                 </button>
//               )}

//               {/* Mobile Theme Toggle */}
//               <div className="block sm:hidden">
//                 <ThemeSwitcher />
//               </div>

//               {/* Mobile Menu Button */}
//               <button 
//                 className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => setOpenSidebar(!openSidebar)}
//               >
//                 <HiOutlineMenuAlt3 className="w-5 h-5 text-gray-700 dark:text-gray-200" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {openSidebar && (
//         <div
//           className="fixed inset-0 z-[99999] bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity"
//           onClick={handleClose}
//           id="screen"
//         >
//           <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-900 shadow-xl flex flex-col h-full transform transition-transform ease-in-out duration-300">
//             {/* Sidebar Header */}
//             <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center">
//                   <HiOutlineAcademicCap className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="font-bold text-lg">LearnifyHub</span>
//               </div>
//               <button 
//                 onClick={() => setOpenSidebar(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 <HiOutlineX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               </button>
//             </div>

//             {/* Sidebar Content */}
//             <div className="flex-1 overflow-y-auto py-4">
//               {/* Profile Section (Mobile) */}
//               {user && (
//                 <div className="px-4 mb-6">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <Image
//                       src={storeUser?.avatar?.url || avatar}
//                       alt="Profile"
//                       height={400}
//                       width={400}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-800 dark:text-white">
//                         {user.name || "User"}
//                       </div>
//                       <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
//                         {user.email || "user@example.com"}
//                       </div>
//                     </div>
//                   </div>
//                   <Link href="/profile">
//                     <div className="block w-full text-center py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors">
//                       View Profile
//                     </div>
//                   </Link>
//                 </div>
//               )}

//               {/* Nav Items */}
//               <div className="px-2">
//                 <NavItems
//                   activeItem={activeItem}
//                   isMobile={true}
//                   user={user}
//                   setOpen={setOpen}
//                   openSidebar={openSidebar}
//                   setOpenSidebar={setOpenSidebar}
//                 />
//               </div>

//               {/* Teach Button (Mobile) */}
//               {user && (
//                 <div className="px-4 my-4">
//                   <button
//                     onClick={() => {
//                       setTeachModalOpen(true);
//                       setOpenSidebar(false);
//                     }}
//                     className="w-full flex items-center justify-center px-4 py-3 space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
//                   >
//                     <HiOutlineSparkles className="w-5 h-5" />
//                     <span>{user.role === "admin" ? "Instructor Dashboard" : "Become an Instructor"}</span>
//                   </button>
//                 </div>
//               )}

//               {/* Login Button (Mobile, Non-Users) */}
//               {!user && (
//                 <div className="px-4 mt-4">
//                   <button 
//                     onClick={() => {
//                       handleUserIconClick();
//                       setOpenSidebar(false);
//                     }}
//                     className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition-colors"
//                   >
//                     Login / Sign Up
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar Footer */}
//             <div className="p-4 border-t border-gray-200 dark:border-gray-800">
//               <div className="flex items-center justify-between">
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   © {new Date().getFullYear()} LearnifyHub
//                 </p>
//                 <div className="flex items-center space-x-3">
//                   {/* Social Media Icons Could Go Here */}
//                   <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Auth Modals */}
//       {route === "Login" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={Login}
//         />
//       )}
//       {route === "Sign-Up" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={SignUp}
//         />
//       )}
//       {route === "Verification" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={Verification}
//         />
//       )}
//       <TeachModal
//         open={teachModalOpen}
//         setOpen={setTeachModalOpen}
//         setRoute={setRoute}
//       />
//     </header>
//   );
// };

// // Add this CSS class to your global styles
// // .animate-fade-in {
// //   animation: fadeIn 0.2s ease-out forwards;
// // }
// // @keyframes fadeIn {
// //   from { opacity: 0; transform: translateY(-10px); }
// //   to { opacity: 1; transform: translateY(0); }
// // }

// export default Header;