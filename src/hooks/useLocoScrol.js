
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { useEffect } from "react";


export default function useLocomotiveScroll({start}) {
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new LocomotiveScroll({
            element: scrollEl,
            smooth: true,
            multiplier: 1,
            class:"is-reveal"
            // ... other options
        })

    },[start])
}