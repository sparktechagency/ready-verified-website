import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const paths = ['/auth/login','/auth/register',"/verify/:path*",]
const dashPath = ["/dashboard/:path*"]
const loginPath = ["/auth/login","/auth/register"]

export default async function middleware(Request:NextRequest) {
    try {
       const path = Request.nextUrl.pathname
       const auth = (await cookies()).get("accessToken")?.value
       const searchParams = Request.nextUrl.searchParams
       const token = searchParams.get("token")
;
       
       if(path=="/" && token && !auth){
        (await cookies()).set("accessToken",token)

        return NextResponse.redirect(new URL("/",Request.url))
       }

       if(loginPath.includes(path) && auth){
        return NextResponse.redirect(new URL("/",Request.url))
       }
        
       if(path.startsWith("/profile") && !auth){

        
        return NextResponse.redirect(new URL("/auth/login",Request.url))
       }


       if(path== "/advance-search" && !auth){
        return NextResponse.redirect(new URL("/auth/login",Request.url))
       }
       
       return NextResponse.next()
       
        
    } catch (error) {
        return NextResponse.redirect(new URL("/auth/login",Request.url))
    }
}

export const config = {
    matcher:["/","/auth/login","/auth/register","/profile","/profile/:path*","/advance-search"]
}