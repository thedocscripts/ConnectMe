

import { NextResponse } from "next/server";
    

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    let url = request.url
    let response = NextResponse.next();
    // const fu = Welcomescreenutil();
    console.log(response.cookies.getAll())
    if(url.includes("welcomescreenhandler")){
        
       // return NextResponse.redirect("http://localhost:3000/");
    }
    console.log(url.includes("/welcomescreenhandler"))

}

