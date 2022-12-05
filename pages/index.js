/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Image from "next/image";
import benny from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Benny Portofolio</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<main className="bg-blue-50 px-5 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white ">
				<section className=" min-h-screen ">
					<nav className="py-10 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons font-semibold ">benny. k . l</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-300 to-blue-600 px-4 py-2 rounded-full ml-8 text-white font-bold  "
									href="#">
									Resume
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10 ">
						<h2 className="font-burtons font-semibold text-3xl py-2 text-blue-500 md:text-5xl ">Benny Kurniawan Lase</h2>
						<h3 className="font-medium text-gray-800 text-base py-2 md:text-xl dark:text-white">Web Developer And Web Designer</h3>
						<p className="leading-7 text-sm md:text-lg text-gray-800 py-5 max-w-2xl mx-auto dark:text-white">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam odit dolorem doloribus laudantium cupiditate cum enim quam maiores, minus dolorum! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Quaerat excepturi in quasi necessitatibus dolore quisquam aliquid, corporis quo voluptates veritatis.
						</p>
					</div>

					<div className="flex justify-center text-3xl gap-10 cursor-pointer  py-3  text-blue-500">
						<AiFillTwitterSquare className="hover:text-cyan-300" />
						<AiFillInstagram className="hover:text-cyan-300" />
						<AiFillFacebook className="hover:text-cyan-300" />
						<AiFillLinkedin className="hover:text-cyan-300" />
					</div>

					<div className="relative mx-auto bg-gradient-to-b from-blue-600 mt-20 overflow-hidden rounded-full w-60 h-60 border-solid border-4 border-cyan-300 md:w-72 md:h-72 ">
						<Image
							src={benny}
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</section>

				<section>
					<div className="my-10 ">
						<h3 className="text-3xl  text-center">Service I Offer</h3>
						<p className="leading-7 py-2 text-md text-gray-800 dark:text-blue-50">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi qui illum? <span className="text-blue-500"> agenci</span> Eligendi ipsam iure vel ratione voluptates
							commodi quibusdam.
						</p>
						<p className="leading-7 py-2 text-md text-gray-800 dark:text-blue-50">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet earum, quaerat suscipit repellat <span className="text-blue-500"> agenci</span>in voluptate ad. Amet similique
							adipisci cupiditate?
						</p>
					</div>

					<div className="lg:flex gap-5">
						<div className="dark:bg-blue-50 text-center  rounded-3xl my-10 shadow-gray-300 shadow-lg p-5 dark:shadow-cyan-300">
							<Image
								src={design}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb2 text-lg font-medium text-gray-800">Beautiful Design</h3>
							<p className="leading-7 text-md text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt?</p>
							<h4 className="text-blue-600 py-4 ">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">AdobeXD</p>
							<p className="text-gray-800 py-1">Corel Draw</p>
						</div>

						<div className="text-center rounded-3xl dark:bg-blue-50 my-10 shadow-gray-300 shadow-lg p-5  dark:shadow-cyan-300">
							<Image
								src={code}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb2 text-lg font-medium text-gray-800">Code</h3>
							<p className="leading-7 text-md text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt?</p>
							<h4 className="text-blue-600 py-4 ">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">AdobeXD</p>
							<p className="text-gray-800 py-1">Corel Draw</p>
						</div>

						<div className="text-center rounded-3xl dark:bg-blue-50 my-10 shadow-gray-300 shadow-lg p-5 dark:shadow-cyan-300">
							<Image
								src={consulting}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb2 text-lg font-medium text-gray-800">Consultation</h3>
							<p className="leading-7 text-md text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt?</p>
							<h4 className="text-blue-600 py-4 ">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">AdobeXD</p>
							<p className="text-gray-800 py-1">Corel Draw</p>
						</div>
					</div>
				</section>

				<section>
					<div>
						<h3 className="text-3xl py-2 ">Portofolio</h3>
						<p className="leading-7 py-2 text-md text-gray-800">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi qui illum? <span className="text-blue-500"> agenci</span> Eligendi ipsam iure vel ratione voluptates
							commodi quibusdam.
						</p>
						<p className="leading-7 py-2 text-md text-gray-800">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet earum, quaerat suscipit repellat <span className="text-blue-500"> agenci</span>in voluptate ad. Amet similique
							adipisci cupiditate?
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
						<div className="basis-1/2 flex-1">
							<Image
								src={web1}
								className="rounded-lg object-cover cursor-pointer"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web2}
								className="rounded-lg object-cover cursor-pointer "
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web3}
								className="rounded-lg object-cover cursor-pointer"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/2 flex-1">
							<Image
								src={web4}
								className="rounded-lg object-cover cursor-pointer"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/2 flex-1">
							<Image
								src={web5}
								className="rounded-lg object-cover cursor-pointer"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web6}
								className="rounded-lg object-cover cursor-pointer"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gradient-to-r from-cyan-300 to-blue-600 text-lg text-blue-50 text-center font-semibold p-5 ">
				<h3>&copy; Benny Kurniawan Lase. 2022</h3>
			</footer>
		</div>
	);
}
