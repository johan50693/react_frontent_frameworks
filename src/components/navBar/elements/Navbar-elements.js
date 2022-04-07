import styled from "styled-components";

export const NavbarContainer= styled.div`
    width: 100%;
    height: 80px;
    /*position: sticky;*/
    top:0;
    z-index:99;
    background-color: #3E88C9
`;

export const NavbarWrapper= styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items:center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const IconLogo= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.3rem;
    /*color: #2CC185; */
`;


export const Menu= styled.ul`
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px){
        width:100%;
        height: 98vh;
        position: absolute;
        top:80px;
        left:  ${({click}) => click ? "0":"-100%"};
        flex-direction:column;
        transition: 0.5s all ease-in;
        background-color:#49426c;
    }
`;

export const MenuItem= styled.li`
    height: 100%;
    /*padding: 0.5rem 1.5rem;*/
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    /*font-weight: 400;*/

    &:hover{
        background-color: #1B53BA;
        border-bottom: 0.3rem solid #FFFF;
        transition: 0.4s ease-in; 
    }

    @media screen and (max-width: 900px){
        width:100%;
        height: 80px;
        padding: 0
    }
`;

export const MenuItemLink= styled.a`
    text-decoration: none;
    /*color: #2CC185;*/
`;

export const IconLogoMobile= styled.div`
    display: none;

    @media screen and (max-width: 900px){
        display: flex;
        color: #abc08b;
        font-size:2rem;
        padding-right: 2rem;
    }
`;
