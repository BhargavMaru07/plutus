// "use client";

// import Sidebar from "@/components/Sidebar";
// import useDarkMode from "@/hooks/useDarkMode";

// export default function SidebarLayout({children}: Readonly<{
//     children: React.ReactNode;
//   }>) {

//     const {isDarkMode, toggleDarkMode} = useDarkMode();

//     return (
//         <div className="grid md:grid-cols-[20vw_auto] grid-cols-1  md:gap-2 bg-white dark:bg-black md:p-1 p-0">
//             <div>
//                 {/* <Sidebar isDarkMode={isDarkMode} togglemode={toggleDarkMode}/> */}
//             </div>
//             <div>
//             {children}
//             </div>
//         </div>
//     )
// }