import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from "./elements/Navbar-elements";
import { DiReact,DiAngularSimple, } from "react-icons/di";
import { FaBars, FaTimes,FaVuejs} from "react-icons/fa";
import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
            case 'connectfour':{
                window.location.href ='/connectfour';
                return '';
            }
            case '/':{
                window.location.href ='/';
                return '';
            }
            
            default: return '';
        }
    }
    return (
        <>
            <Box sx={{ 
                    width: "100%",
                    backgroundColor: 'primary' 
                }}>
                <BottomNavigation
                showLabels
                >
                <BottomNavigationAction onClick={() => changeClick('/')} label="Memory" icon={<DiReact size={"2em"}/>} />
                <BottomNavigationAction onClick={() => changeClick('connectfour')} label="Connectfour" icon={<DiReact size={"2em"}/>} />
                <BottomNavigationAction onClick={() => changeClick('movies')} label="Movies" icon={<DiAngularSimple size={"2em"}/>} />
                <BottomNavigationAction onClick={() => changeClick('pokedex')} label="Pokedex" icon={<FaVuejs size={"1.5em"}/>} />
                </BottomNavigation>
            </Box>
        </>
    );
}