import React from "react";
import About from "../components/home/About";
import Service from "../components/home/Service";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";
import Welcome from "../components/home/Welcome";
import MainNavigation from "../ui/MainNavigation";
import Hero from "../components/home/Hero";

export default function Home() {

    return (
        <>

            <Welcome>
                <MainNavigation/>
                <Hero/>
                <About/>
                <Service/>
                <Portfolio/>
                <Contact/>

            </Welcome>
        </>

    );

}