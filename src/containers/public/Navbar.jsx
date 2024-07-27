import React from 'react';
import icons from '../../utils/icons';
const  {
    MdOutlineDiscount,
    PiBuildingApartmentBold ,
    PiHandbagDuotone,
    MdOutlineHeadphones,
    FaLaptop,
    IoSettingsOutline 
} = icons
export default function Navbar(){
    return (
        <header>
            <navigator className = "">
                <ul>
                    <li>
                        <MdOutlineDiscount/> 
                        Khuyến Mãi
                    </li>
                    <li>
                        <PiBuildingApartmentBold/>
                        Hệ thống showroom 
                        </li>
                    <li>
                        <PiHandbagDuotone/>
                        Tư vấn doanh nghiệp
                    </li>
                    <li>
                        <MdOutlineHeadphones/>
                        Liên hệ
                        </li>
                    <li>
                        <FaLaptop/>
                        Tin công nghệ
                    </li>
                    <li>
                        <IoSettingsOutline/>
                        Xây dựng cấu hình
                    </li>
                </ul>
            </navigator>
            <navigator></navigator>
        </header>
    )
}