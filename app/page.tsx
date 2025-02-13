"use client"
import Link from "next/link";
import useHash from "@/lib/hash";

export default function Home() {
  const hash = useHash()
  console.log(hash)

  return (
    <div className="fixed bg-[#101010] h-svh w-full overflow-hidden">
      <div className="p-5 text-center">
        <h1 className="text-5xl font-[family-name:var(--galada)] p-2">Valentify</h1>
        <p className="">Come get your AI generated valentine's day playlist!</p>
        <div className="flex justify-center mt-10">

          <Link href={"/api/connect"}>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Generate Playlist
            </button>
          </Link>
          {/*{
            err ? (
              <div className="fixed top-10 left-0 right-0 mx-auto w-fit items-center bg-red-500 text-white p-4 rounded">
                <p>Error: {err}</p>
              </div>
            ) : null
          }*/}
        </div>
      </div>
      <div className="fixed bottom-10 left-0 right-0 mx-auto w-fit items-center">
        <Link href="https://i0x0.wtf" className="font-[family-name:var(--jb)]">
          made w/ 🖤 from i0x0
        </Link>
      </div>
    </div>
  );
}
