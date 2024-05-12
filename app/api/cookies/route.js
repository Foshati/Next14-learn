import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request) {
  //! cookies()
  // cookies().set("user", "ali5");

  // // cookies().getAll()
  // const GetAll = cookies().getAll();
  // console.log(GetAll);

  // const GetName = cookies().get("user");
  // console.log(GetName);

  // console.log(request.cookies.get("user"));
  // // cookies().delete("user");

  //! headers()
  // const headersList = headers();
  // const headersList = new Headers(request.Headers);

  // console.log(headersList);

  //! redirect
  // redirect("/");

  return NextResponse.json(
    { message: "ali" }
    /*   {
      status: 200,
      headers: {
        keyFA: "random Key fa",
      },
    } */
  );
}
