import { useState } from 'react';
import './App.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

import { GiPaperArrow } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineGroups3 } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiTool } from "react-icons/fi";



function App() {

  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "File", icon: <GiPaperArrow size={20} color="white" /> },
    { title: "New", icon: <AiOutlineDownload size={20} color="white" /> },
    { title: "Profiles", icon: <MdOutlineGroups3 size={20} color="white" />, grap: true },
    { title: "Browser", icon: <IoMdInformationCircleOutline size={20} color="white" /> },
    { title: "Setting", icon: <FiTool size={20} color="white" />, grap: true },
    { title: "Info", icon: <IoMdInformationCircleOutline size={20} color="white" /> },
  ];

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-blue-400 relative`}>
        <MdKeyboardArrowLeft size={10} color='blue' className={`absolute cursor-pointer -right-3 w-6 
          h-6 mt-6 bg-blue-100 border border-blue-400 rounded-3xl ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />

        <div className='flex gap-x-4 items-center'>
          <BiSolidMessageSquareEdit size={35} color='blue' className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
        </div>

        <ul>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
         my-5 p-2 hover:bg-blue-100 rounded-md ${menu.grap ? "mt-9" : "mt-2"} ${index === 0 && "bg-blue-300"}`}>{menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span></li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className='p-7 text-2xl font-semibold flex-1 h-screen'>Home</h1>
      </div>
    </div>
  );
}

export default App;
