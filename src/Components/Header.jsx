import logo from "../assets/images/logo.jpg"
import { HiHome, HiStar ,HiTv , HiMagnifyingGlass ,HiPlayCircle} from "react-icons/hi2"
import { HiPlus , HiDotsVertical} from "react-icons/hi"
import HeaderItem from "./HeaderItem"
import { useState } from "react"
const Header = () => {
    const [toggle,setToggle]=useState(false)
    const menu=[
        {
            name:"HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },
        {
            name:"SERIES",
            icon:HiTv
        }
    ]
  return (
    <div className="flex items-center justify-between relative">
        <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover " />
        <div className="hidden md:flex gap-5">
        {menu.map((item)=>(
            <HeaderItem  name={item.name} Icon={item.icon} key={item.name} />
        ))}
        </div>
        
        <div className="flex md:hidden gap-8">
        {menu.map((item,i)=>i<3&&(
            <HeaderItem  name={''} Icon={item.icon} key={item.name} />
        ))}
        </div>
    <div className="md:hidden cursor-pointer " onClick={()=>setToggle(!toggle)}>
        
            <HeaderItem  name={""} Icon={HiDotsVertical}   />
         { toggle && <div className="absolute right-2 mt-3 border-[1px] p-3 px-5 py-4 border-gray-700 bg-slate-900">
        {menu.map((item,i)=>i>2&&(
            <HeaderItem  name={item.name} Icon={item.icon} key={item.name} />
        ))}
        </div>}
       
    </div>


        </div >
        <img src="https://www.w3schools.com/w3images/avatar6.png" className="w-[25px] md:w-[40px]  rounded-full mr-4" />
        
        
    </div>
  )
}

export default Header