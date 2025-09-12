"use client"

import Cookies from "js-cookie";

export function getLocalUser(){
    try {
        let user = Cookies.get("user")

       
        return JSON.parse(user||"{}")
    } catch (error) {
        return null
    }


}