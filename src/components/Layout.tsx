import NavBar from "./NavBar";
import Footer from './Footer';
import React from "react";

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout ({children}:LayoutProps) : React.JSX.Element{

    return (
        <>
        <NavBar></NavBar> 
        {children}
        <Footer></Footer>
        </>
    );


}





