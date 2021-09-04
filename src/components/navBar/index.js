import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from "./elements/Navbar-elements";
import { DiReact } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const NavBar= ()=>{

    const [click,setClick]=useState(false);
    const changeClick= (route='') =>{
        setClick(!click);
        console.log(route);
        switch(route){
            case 'movies':{
                window.location.href ='https://peliculas-app-test.vercel.app/home';
                return '';
            }
            case 'pokedex':{
                window.location.href ='https://eager-kalam-ae52aa.netlify.app';
                return '';
            }
            
            default: return '';
        }
    }
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo>
                    <DiReact size={"3em"}/>
                </IconLogo>
                <IconLogoMobile onClick={changeClick}>
                    { 
                        click ? <FaTimes/>:<FaBars/>
                    }
                </IconLogoMobile>
                <Menu click={click}>
                    {/* <MenuItem  onClick={changeClick}>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem> */}
                    <MenuItem  onClick={changeClick}>
                        <MenuItemLink>MEMORY</MenuItemLink>
                    </MenuItem>
                    <MenuItem  onClick={() => changeClick('movies')}>
                        <MenuItemLink>MOVIES</MenuItemLink>
                    </MenuItem>
                    <MenuItem  onClick={() => changeClick('pokedex')}>
                        <MenuItemLink>MOVIES</MenuItemLink>
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
    );
}