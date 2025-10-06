import logo from '../src/assets/IMAGE.svg'
import x from '../src/assets/Frame(1).svg'
import fff from '../src/assets/1IMAGE.svg'
import ffff from '../src/assets/IMA1111111GE.svg'
import wave from '../src/assets/IM121AGE.svg'
import  artist from '../src/assets/Frame.svg'
import logoholder from '../src/assets/Fram21121222e.svg'
import Bigboms from '../src/assets/Bigboms.svg'
import TEAM from '../src/assets/TEAM.svg'
import lox from '../src/assets/LOX.png'
import './App.css'

function App() {


    const items = [
        { id: 1, src: "../src/assets/lox.png", text: "Я талант" },
        { id: 2, src: "../src/assets/lox.png", text: "Я талант" },
        { id: 3, src: "../src/assets/lox.png", text: "Я талант" },
        { id: 4, src: "../src/assets/lox.png", text: "Я обебос" },
        { id: 5, src: "../src/assets/lox.png", text: "Я талант" }
    ];
    const itemss = [
        { id: 1, src: "../src/assets/lox.png", text: "Я талант" },
        { id: 2, src: "../src/assets/lox.png", text: "Я талант" },
        { id: 3, src: "../src/assets/lox.png", text: "Я талант" },
    ];




    return (
        <>
            <div className="w-full bg-black h-full flex flex-col justify-center items-center">
                <section className="w-8/10 h-1/12 flex justify-center items-center content-center  m-10 gap-1">
                    <div className="w-full flex justify-center items-center gap-12">
                        <img src={logo} alt=""/>
                        <a href="" className="text-amber-50">Wave NFTs</a>
                        <a href=""  className="text-amber-50">Stories</a>
                        <a href=""  className="text-amber-50">Contact</a>
                    </div>
                    <div className="w-full flex justify-center items-center gap-2">
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                    </div>
                </section>



                <section className="w-full flex justify-center items-center gap-100">
                    <div className="w-1/4 flex flex-col  justify-center items-start gap-12">
                        <h2 className="text-amber-50 text-6xl">
                            <b>
                                META RECORD LABEl

                            </b>
                        </h2>

                        <p className="text-amber-50 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>

                        <button className="bg-lime-500 w-1/2 h-10 text-2xl">Learn more</button>
                    </div>
                    <div>
                        <img src={fff} alt=""/>
                    </div>
                </section>

                <section className="w-full flex justify-center items-center gap-80">

                    <div className="">

                        <h1 className="text-amber-50 text-6xl">WAVE NFT</h1>
                        <h1 className="text-gray-600 text-6xl">COLLECTION of 777</h1>

                        <img src={wave} alt=""/>

                    </div>

                    <div className="w-2/5 flex flex-col  justify-center items-start gap-20">

                        <h1 className="text-lime-600 text-3xl">META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</h1>

                        <div className="flex flex-col  justify-center items-start gap-5">
                            <p className="text-amber-50 text-2xl">Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
                            <p className="text-amber-50 text-2xl">Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
                            <p className="text-amber-50 text-2xl">Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>

                        </div>

                        <button className=" bg-black border-b-lime-600 border h-15 w-100 text-lime-600">Get one on OpenSea</button>
                    </div>

                </section>


                <section className="w-full flex justify-center items-center gap-80 pt-9 pb-9">
                    <img src={artist} alt="" className="w-full"/>
                </section>


                <section className="w-full flex items-start gap-10 pt-9 pb-9">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-start">
                            <img
                                src={item.src}
                                alt={item.text}
                                className="w-64 h-64 object-cover rounded-lg shadow-md "
                            />
                            <p className="text-center  text-3xl font-medium text-amber-50 text-2xl">{item.text}</p>
                        </div>
                    ))}
                </section>      <section className="w-full flex items-start gap-10 pb-50">
                {itemss.map((item) => (
                    <div key={item.id} className="flex flex-col items-start">
                        <img
                            src={item.src}
                            alt={item.text}
                            className="w-64 h-64 object-cover rounded-lg shadow-md "
                        />
                        <p className="text-center  text-3xl font-medium text-amber-50 text-2xl">{item.text}</p>
                    </div>
                ))}
            </section>


                <section className="flex flex-col  justify-center items-center gap-20">

                    <h2 className="text-amber-50 text-6xl">MRL.THE STORY.</h2>


                    <div className="w-full flex  flex-col justify-center items-start gap-80">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-48 bg-neutral-900 p-6">
                                <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-6">
                                    <div className="font-audiowide text-lg text-lime-600">
                                        Our founders
                                    </div>
                                    <div className="font-audiowide text-lg text-gray-500">
                                        Partners
                                    </div>
                                    <div className="font-audiowide text-lg text-gray-500">
                                        The future
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="max-w-4xl mx-auto p-6 bg-neutral-800 text-white">
                                    <h1 className="font-audiowide text-3xl md:text-4xl text-lime-600 mb-6 leading-tight">
                                        META record label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.
                                    </h1>

                                    <div className="space-y-6 text-gray-300">
                                        <p className="leading-relaxed">
                                            Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                        </p>

                                        <p className="leading-relaxed">
                                            Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                                        </p>

                                        <p className="leading-relaxed">
                                            Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </section>

                <section className="w-full flex justify-center items-center gap-80 pt-9 pb-9">
                    <img src={ffff} alt="" className="w-full"/>
                </section>



                <section className="w-8/10 flex flex-col  justify-center items-start pt-9 pb-10">
                    <img src={logoholder} alt="" className="w-full"/>
                </section>


                <section className="w-full flex justify-center items-center gap-80">

                    <div className="">

                        <h2 className="text-amber-50 text-6xl">Frequently</h2>

                        <h2 className="text-gray-600 text-6xl">asked</h2>
                        <h2 className="text-amber-50 text-6xl">questions</h2>
                        <img src={wave} alt=""/>

                    </div>

                    <div className="w-2/5 flex flex-col  justify-center items-start gap-20">

                        <img src={Bigboms} alt=""/>
                    </div>

                </section>

                <section className="w-full flex justify-center items-center gap-80 pt-9 pb-9">
                    <img src={TEAM} alt="" className="w-full"/>
                </section>


                <section className="w-full flex justify-center items-center gap-80 pt-9 pb-9">

                    <div className="flex justify-center items-center gap-80">
                        <div className="flex flex-col  justify-center items-center w-70 text-center gap-2">
                            <img src={lox} alt="" className="w-64 h-64 object-cover rounded-lg shadow-md "/>
                                <p>Fast Lox</p>
                                <p className="text-lime-600">Founder</p>
                                    <div className="flex items-center ">
                                        <img src={x} alt=""/>
                                        <img src={x} alt=""/>
                                    </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>


                        <div className="flex flex-col  justify-center items-center w-70 text-center gap-2">
                            <img src={lox} alt="" className="w-64 h-64 object-cover rounded-lg shadow-md "/>
                            <p>Fast Lox</p>
                            <p className="text-lime-600">Founder</p>
                            <div className="flex items-center ">
                                <img src={x} alt=""/>
                                <img src={x} alt=""/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>


                        <div className="flex flex-col  justify-center items-center w-70 text-center gap-2">
                            <img src={lox} alt="" className="w-64 h-64 object-cover rounded-lg shadow-md "/>
                            <p>Fast Lox</p>
                            <p className="text-lime-600">Founder</p>
                            <div className="flex items-center ">
                                <img src={x} alt=""/>
                                <img src={x} alt=""/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>

                    </div>

                </section>



                <section className="w-full flex justify-center items-center gap-100">
                    <div className="w-1/4 flex flex-col  justify-center items-start gap-12">
                        <h2 className="text-amber-50 text-6xl">
                            <b>
                                Join our

                            </b>
                        </h2>

                        <h2 className="text-lime-600 text-6xl">
                            <b>
                                Discord
                            </b>
                        </h2>



                        <p className="text-amber-50 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.                        </p>

                        <button className="bg-lime-500 w-1/2 h-10 text-2xl">Join Discord</button>
                    </div>
                    <div>
                        <img src={fff} alt=""/>
                    </div>
                </section>


                <footer className="w-full flex justify-center items-center gap-70 bg-purple-900 h-50">


                    <div>
                        <img src={logo} alt=""/>
                        <p>©2022 All rights reserved</p>
                    </div>
                    <div>
                        <p>Wave NFTs</p>
                        <p>Stories</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <p>Licencing</p>
                        <p>Style Guide</p>
                        <p>Changelog</p>
                    </div>
                    <div>
                        <p>Powered by  Webflow</p>
                        <p>Developed by  Anastasiia G.</p>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                        <img src={x} alt=""/>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default App
