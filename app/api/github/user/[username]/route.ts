import { NextResponse } from "next/server";


export async function GET(
  { params }: { params: Promise<{ username: string }> }
) {

  const {username} = await params;

  const response = await fetch(`https://api.github.com/users/${username}`,
  {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })

    if(!response.ok){
      return NextResponse.json(
         { error: "Developer not found" },
      { status: response.status }
      )
    }


  const data = await response.json();

  return NextResponse.json(data);
}