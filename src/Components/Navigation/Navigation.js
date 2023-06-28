import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { signout, menu, exit } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";

function Navigation({ active, setActive }) {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };
    return (
        <NavStyled>
            <li className="menu-bars" onClick={ToggleSidebar}>
                {menu}
            </li>

            <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
                <div>
                    <div className="user-icon">
                        <img src={avatar} alt="profile image" />
                        <div className="text">
                            <h2>John Doe</h2>
                            <p>Your Money</p>
                        </div>
                        <li onClick={ToggleSidebar} className="exit">
                            {exit}
                        </li>
                    </div>
                    <ul className="menu-items">
                        {menuItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    onClick={() => setActive(item.id)}
                                    className={
                                        active === item.id ? "active" : ""
                                    }
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="bottom-nav">
                        <li>{signout} Sign Out</li>
                    </div>
                </div>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .menu-bars {
        display: none;
    }
    .exit{
        display: none;
    }
    @media only screen and (max-width: 600px) {
        background: none;
        border: none;
        backdrop-filter: none;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        h2{
            font-size:1.3rem;
        }
        p{
            font-size:.9rem;
        }
        .user-icon{
            img {
                width:50px;
                height:50px;
                margin-left: 2rem;
            }
            .exit{
             margin-left:3rem;
             display:block;
            }
        }
        .menu-bars {
            display: block;
            
            font-size: 1.4rem;
        }
        .sidebar {
            width: 83%;
            min-height: 50%;
            box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
            background-color: #fff;
            position: fixed;
            top: 0;
            left: -200%;
            z-index: 1;
            transition: 0.8s;
            border-radius: 5px;
        }
        .sidebar.active {
            left: 0;
        }
        .menu-items {
            margin: 2rem 2rem;
            font-size: 1rem;
        }
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0.4rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.2rem;
                transition: all 0.4s ease-in-out;
            }
        }
        
        }
    }

    .user-icon {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #ffffff;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: rgba(34, 34, 96, 1);
        }
        p {
            color: rgba(34, 34, 96, 0.6);
        }
    }
    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 2rem;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.6rem;
                transition: all 0.4s ease-in-out;
            }
        }
    }
    .bottom-nav li {
        padding: 2rem;
    }
    .active {
        color: rgba(34, 34, 96, 1) !important;
        i {
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation;
