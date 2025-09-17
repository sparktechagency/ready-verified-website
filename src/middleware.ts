import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const paths = ['/login','/register',"/verify/:path*",]
const dashPath = ["/dashboard/:path*"]
const loginPath = ["/login","/register"]
export default async function middleware(Request:NextRequest) {
    try {
       const path = Request.nextUrl.pathname
       const auth = (await cookies()).get("accessToken")?.value
       const searchParams = Request.nextUrl.searchParams
       const token = searchParams.get("token")

       if(path=="/" && token && !auth){
        (await cookies()).set("accessToken",token)

        return NextResponse.redirect(new URL("/",Request.url))
       }

       if(loginPath.includes(path) && auth){
        return NextResponse.redirect(new URL("/",Request.url))
       }
       
       return NextResponse.next()
       
        
    } catch (error) {
        
    }
}

export const config = {
    matcher:["/"]
}