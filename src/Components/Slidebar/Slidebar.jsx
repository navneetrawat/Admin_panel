import logo from '../../assets/logo.png';
import './Slidebar.css';
import { MdDashboard } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { PiCashRegisterThin } from "react-icons/pi";
import { TbTypography } from "react-icons/tb";
import { IoMdColorFill } from "react-icons/io";
import { BsShadows } from "react-icons/bs";
import { SiContributorcovenant } from "react-icons/si";
import { TbBrandPagekit } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";

export default function Slidebar() {
    return (
        <>
            <nav className="slide-bar">
                <section className="logo-section">
                    <img src={logo} alt="adminpanel.logo" />
                    <h3 className='admin-title'>Mantis</h3>
                </section>
                <section className="slide-tabs">
                    <h5 className='heading'>Navigation</h5>
                    <ul className='ul-slide'>
                        <li><a href='#'><MdDashboard />Dashboard</a></li>
                    </ul>
                    <h5 className='heading'>Authentication</h5>
                    <ul className='ul-slide'>
                        <li><a href='#'><AiOutlineLogin />Login</a></li>
                        <li><a href='#'><PiCashRegisterThin />Register</a></li>
                    </ul>
                    <h5 className='heading'>Utilities</h5>
                    <ul className='ul-slide'>
                        <li><a href='#'><TbTypography />Typography</a></li>
                        <li><a href='#'><IoMdColorFill />Color</a></li>
                        <li><a href='#'><BsShadows />Shadow</a></li>
                        <li><a href='#'><SiContributorcovenant />Ant Icons</a></li>
                    </ul>
                    <h5 className='heading'>Support</h5>
                    <ul className='ul-slide'>
                        <li><a href='#'><TbBrandPagekit />Sample Page</a></li>
                        <li><a href='#'><IoIosDocument />Documentation</a></li>
                    </ul>
                </section>
            </nav>
        </>
    );
}