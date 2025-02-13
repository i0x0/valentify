"use client"
import Link from "next/link";

export default function Request() {
	return (
		<div className="fixed bg-[#101010] h-svh w-full overflow-hidden">
			<div className="p-5 text-center">
				<h1 className="text-5xl font-[family-name:var(--galada)] p-2">Valentify</h1>
				<div className="flex justify-center mt-10">
					<div className="space-y-4">
						<p>Now click below to share with your partner (refresh when they login)</p>
						<button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => {

							navigator.canShare({
								title: "Valentify",
								text: "Come get your AI generated valentine's day playlist!",
								url: window.location.href
							})
						}}>
							Share
						</button>
					</div>

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


