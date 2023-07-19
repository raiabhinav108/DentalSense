"use client";
import styles from "./cookie.module.css"
import { useEffect } from "react";
const Cookie =()=>{
    useEffect(() => {
    const cookieBox = document.querySelector(".cookiewrapper"),
     buttons = document.querySelectorAll(".cookiebutton");
    const executeCodes = () =>{
        cookieBox.classList.add("show");
        buttons.forEach((button)=>{
            button.addEventListener("click",()=>{
                cookieBox.classList.remove("show");
            });
        });
    };
    window.addEventListener("load",executeCodes);
},[]);
    return(
        <div className={styles.cookiewrapper}>
            <div className={styles.cookiewrapper2}>
            <header className={styles.cookieheader}>
            <img className={styles.cookieimg}></img>
            <div className={styles.cookiehead}>Cookie Consent</div>
            </header>
            <div className={styles.data}><p>This website use cookies to help you have a superior and more relevant browsing experience on the website.</p><a>Read more.</a></div>
            <div className={styles.cookiebuttonsgrp}>
                <button className={styles.cookiebutton}>Accept</button>
                <button className={styles.cookiebutton}>Decline</button>
            </div>
            </div>
        </div>
    )
}
export default Cookie;