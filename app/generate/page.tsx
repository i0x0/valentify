"use client"
import Link from "next/link";

export default function Request() {
	return (
		<div className="fixed bg-[#101010] h-svh w-full overflow-hidden">
			<div className="p-5 text-center">
				<h1 className="text-5xl font-[family-name:var(--galada)] p-2">Valentify</h1>
				<p>Now click below to fuck</p>
				<div className="flex justify-center mt-10">
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
						Generate Playlist
					</button>

				</div>
			</div>
			<div className="fixed bottom-10 left-0 right-0 mx-auto w-fit items-center">
				<Link href="https://i0x0.wtf" className="font-[family-name:var(--jb)]">
					made w/ 🖤 from i0x0
				</Link>
			</div>
		</div>
	);
};


