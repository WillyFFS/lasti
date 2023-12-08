// Import library
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/model/user";
import dbConnect from "@/app/utils/dbConnect";

let isLogin = false;
// Connect
dbConnect();

async function POST(request){
    if(isLogin){
        isLogin = false;
    }else{
        isLogin = true;
    }
    return NextResponse.json(isLogin);
}

async function GET(request){
    return NextResponse.json(isLogin);
}