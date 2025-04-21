import { FaPerson } from "react-icons/fa6";
import Resource from "./Resource";
function About()
{
    
    return(
<div className="flex flex-col h-full  font-Jersey25">
    {/* Top sections */}
    <div className="bg-white p-2 pb-0 border-2 border-black rounded-b-lg shadow-lg shadow-blue-300">
        <div className="flex font-bold text-wrap">
            <FaPerson className="size-8 fill-blue-500"/>
            <div className="text-4xl text-blue-500 ">Owen</div>
        </div>

        <div className="text-2xl mt-2 mb-2"><b>ON</b>-based game dev, software developer</div>
    </div>
    <div className="overflow-y-auto overflow-hidden pl-4">
    <div className="text-xl mt-2">Hello! I'm Owen, a software/game developer. I...</div>

    <div className="mt-2">
        <ul className="list-disc list-inside text-lg">
            <li>create <a className="text-blue-500 hover:text-blue-300" href="https://anheiy.itch.io/">video games</a></li>
            <li>develop fun applications</li>
        </ul>
        <div className="text-lg">interested in me or my work? email at <a className="text-blue-500 hover:text-blue-300" href="mailto:anheiyproduction@gmail.com">anheiyproduction@gmail.com</a></div>
    </div>

    
    <div className="text-xl text-zinc-700 mt-4 ml-4">Interests...</div>
    <div className="space-y-2 ml-4">        
        <div className="flex space-x-2"><Resource name="Coding!" bgcolor="bg-lime-500"/></div>
        <div className="flex space-x-2">Coding is a very theraputic hobby for me, it activates my neurons! I've been coding for around 5 years now and I really do love it.</div>
        <div className="flex space-x-2"><Resource name="Cooking!" bgcolor="bg-orange-500"/></div>
        <div className="flex space-x-2">Cooking is what I do when my brain is too exhausted to code. It can be a very easy thing to do that also feels productive!</div>
        <div className="flex space-x-4"><Resource name="Args and Web Series!" bgcolor="bg-red-500"/><Resource name="Favorite: EverymanHybrid" bgcolor="bg-red-500"/></div>
        <div className="flex space-x-2">Indie media is so important, whether it be games, films, or any other mediums. 
                                        Especially now when companies are forced to make status quo films due to risk of money loss, they cant get creative. 
                                        Indie media however does not need to worry about money loss as they dont have many people working for them! 
                                        So they make weird avant-garde stuff that sometimes doesnt land and other times does.
                                        Either way I respect the effort needed to create anything by yourself or in a small team and they all inspire me!
                                        If you are interested in some I liked (specifically web-series/unfiction/args):
                                        </div>
                                        <div className="flex space-x-2">
                                            <ol className="list-disc">
                                                <li>EverymanHybrid: this series ran on for 10 years from when the boys were in college all the way to their 30s, that is next level dedication to something bringing them no monetary gain</li>
                                                <li>Lasagna Cat: its a garfield arg... really well done</li>
                                                <li>Alantutorial: a classic! Alan Resnick has made some really cool stuff check him out!</li>
                                                <li>Petscop: very inspirational for a game developer who also likes webserieses!</li>
                                            </ol>
                                        </div>
        <div className="flex space-x-2"><Resource name="Making Cool Art!" bgcolor="bg-emerald-500"/></div>
        <div className="flex space-x-2">I love art.
                                        Art is the ultimate form of expression so I have dabbled in quite a few mediums and enjoy them.
                                        I will mostly be making games as its where my specialty lies but down the line I do hope to make stuff in other genres.
        </div>
        <div className="flex space-x-2"><Resource name="Gaining New Skills!" bgcolor="bg-stone-500"/></div>
        <div className="flex space-x-2">I've always actively seeked out new skills.
                                        To me its super fun to learn new things from scratch and struggle until things start clicking.
                                        I am much more of a journey over the endgoal person. I've learned how to cook, code, 3D model, 3D animate, and making games by myself!
        </div>
        <div className="flex space-x-2"><Resource name="Autochess Games!" bgcolor="bg-purple-500"/><Resource name="Favourite: TFT" bgcolor="bg-purple-500"/></div>
        <div className="flex space-x-2">Autochess strikes just the right balance of skill and rng. The ability to relinquish control to your units and how you've placed them is satisfying to me. TFT does this well!</div>

    </div>
    <div className="text-xl text-zinc-700 mt-4">Education</div>
    <div>York University - Honours BA - ITEC</div>
    </div>
        </div>);
}
export default About