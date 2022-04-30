import React, { useEffect } from "react";
import darkstyles from "../darkstyles";


export default props => {

    useEffect(() => {
        if(window['localStorege'] !== null){
        window.localStorage.getItem('theme') === 'dark'
        ? switchDarkTheme()
        : window.localStorage.setItem('theme', 'ligth' )
        }
    });

    const switchDarkTheme = () =>{
        window.localStorage.getItem('theme', 'dark')
        const style = document.createElement ('style')
        document.head.appendChild(style)
        style.innerHTML = darkstyles
    }

    return(
       <>{props.children}</> 

    )

}