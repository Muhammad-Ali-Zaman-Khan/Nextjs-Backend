import { NextResponse } from "next/server";

export async function GET(params , {params}) {
    const {id} = await params;

    return NextResponse.json({
        message: "Dynamic Routes",
        id,
    });
    
};