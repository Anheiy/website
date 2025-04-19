
import { FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
import Project from "./Project";
import Resource from "./Resource";

function ProjectsPage()
{
    const tools = ["Unity 2D/3D", "Godot", "Maya", "Krita", "Figma", "Git", "Android Porting (Unity)"];
    const languages = ["C#", "Java", "Python", "SQL", "GDScript", "Git", "Javascript", "CSS", "HTML", "React", "TailwindCSS"];
    return(
<div className="flex flex-col h-full p-2 overflow-y-auto overflow-x-hidden">
    <div className="flex mt-2">
    <div className="flex-col justify-center w-6/12">
            <div className="flex">
                <FaTools className="size-8 fill-blue-500"/>
                <div className="text-4xl text-blue-500 ml-2 font-Jersey25">Tools</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            {tools.map(tool => <Resource key={tool} name={tool}/>)}
            </div>
        </div>
        <div className="flex-col justify-center w-6/12">
            <div className="flex">
                <FaCode className="size-9 fill-blue-500"/>
                <div className="text-4xl text-blue-500 ml-2 font-Jersey25">Languages/Frameworks</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {languages.map(language => <Resource key={language} name={language}/>)}
            </div>
        </div>
    </div>
    <div className="flex-col justify-center mt-4">
            <div className="flex">
                <MdFolderSpecial className=" size-9 fill-blue-500"/>
                <div className="text-4xl text-blue-500 ml-2 font-Jersey25">Projects</div>
            </div>


            <div className="flex mt-2">
            <Project
            name={<div>Citizen Jane <span className="text-xs">Level Up Expo 2025</span></div>}
            description={<div>During the Winter Semester of 2025, Game Devs @ YorkU collaborated on a four-month game project to showcase at Level Up Expo 2025.
                During the process I was recruited to maintain 10+ programmers as a <b>Programmer Lead</b>.
                We used <b>Git</b> version control to collaborate with each other, Godot as our engine and programmed in <b>GDScript</b>.
                This project taught me a lot about how to efficiently work with a team, how to use Git and Godot. 
                Even though I did not know how to use Git or Godot before the project I learned how to fast and ended up contributing <b>30%</b> of the code!
                I also had to <b>prepare a workshop</b> on GDScript which helped a lot of my team understand the language!</div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
                <Resource name={"Godot"}/>
                <Resource name={"GDScript"}/>
                <Resource name={"Git"}/>
                <button className="bg-blue-800 hover:bg-blue-300 text-white text-lg shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://gdyu.itch.io/citizen-jane','_blank');}}>Play Here</button>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://github.com/GDYUClub/term-project-w25','_blank');}}>Github Page</button>
            </div>



            <div className="flex mt-2">
            <Project
            name={<div>Goblin Cave</div>}
            description={<div>In April 2024 I participated in a game jam ran by GDYU, the theme was Goblin and I enjoyed the game so much I continued working on it.
                            Goblin Cave is a <b>Autochess Roguelike</b> game inspired heavily by TFT as I really enjoy that games design and wanted to build off it. 
                            Currently the game is <b>feature complete</b> and all thats left is polish and content which I expect will take up a bulk of time. 
                            I plan to release this game on <b>Steam</b> in the coming years (I currently have a page however its not up yet). The gameplay is playable below!
            </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
                <Resource name={"Unity"}/>
                <Resource name={"Steam"}/>
                <Resource name={"C#"}/>
                <Resource name={"Git"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/the-goblin-cave','_blank');}}>Play Here</button>
            </div>
            
            <div className="flex mt-2">
            <Project
            name={<div>This Website!</div>}
            description={<div>I decided it was about time to learn React & the wonders of web development!
                            I am honestly quite surprised how easy and fun it has been so far, definitely taken aback.
                            I am writing this before deployment so that might be another can of worms but I'm having so much fun!
                            The asthetic I wanted to go with was <b>webcore</b> as its very nostalgic for me, going through the internet on a beat up laptop.
                            I genuinely thought React was harder than base <b>HTML, CSS, & Javascript</b> but it turns out its quite the contrary. 
            </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"React"}/>
            <Resource name={"TailwindCSS"}/>
            <Resource name={"HTML"}/>
            <Resource name={"CSS"}/>
            <Resource name={"JavaScript"}/>
            </div>

            <div className="flex mt-2">
            <Project
            name={<div>Carolines Basement <span className="text-xs">Brackeys Game Jam 2023.2</span></div>}
            description={<div>In August 2023 me and a friend decided to make a game toghether for <b>Brackeys Game Jam 2023.2</b>.
                        My friend did the art while I programmed the project. The theme of the game jam was "Dive Deeper". 
                        Immediately we realized that the obvious choice was to make a game based on the ocean which most of the jam entrants did.
                        For us though we thought it'd be fun to make a game diving deeper into the psyche of a hoarder and understand what made them that way.
                        The competition was fierce, 900 people submitted games. Our team ended up placing <b>66th/900</b>. 
                        We ended up gettin such nice comments on how some people got emotional playing it which was nice to hear.
            </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"Unity"}/>
            <Resource name={"C#"}/>
            <Resource name={"Game Jam"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/carolines-basement','_blank');}}>Play Here</button>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://itch.io/jam/brackeys-10/rate/2236775','_blank');}}>Nice Comments :)</button>
            </div>
            

            <div className="flex mt-2">
            <Project
            name={<div>I Will Deliver</div>}
            description={<div>I really enjoy challenging myself so for my second game I told myself I will make a game in only <b>1 month and release it</b>. 
                        I decided a arcade score based game would be easy enough to reach my deadline and I ended up being right. 
                        The deadline forced me to make decisions faster and I learned how to create in a <b>fast paced enviroment</b> (also started me love for game jams...).
                        This is also where I learned of the dreaded "scope creep". I started to add <b>online leaderboards</b> to create competition. 
                        I added <b>android support</b> and published it onto the platform (currently unavailable due to android asking me to update it and me not finding the time!)
            </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"Unity"}/>
            <Resource name={"C#"}/>
            <Resource name={"Android"}/>
            <Resource name={"Online Leaderboards"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/i-will-deliver','_blank');}}>Play Here</button>
            </div>


            <div className="flex mt-2">
            <Project
            name={<div>City Builder Prototype</div>}
            description={<div>For Winter 2024 GDYU held a game jam. The theme was "Demake".
                        To be completely honest I had a plan going in and tried my best to fit it into the theme.
                        I dont think I did a good job at this... The project I went for was a <b>Event Based City Builder</b>.
                        The inspirations were Reigns, and a cool itch game "Sort the Court".
                        I was working on a multiplayer 3D game at the time and wanted to learn how to make a event system and so I did in this project! 
                        This game taught me a lot about scriptable objects and is invaluable to my current project "The Goblin Cave"
            </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"Unity"}/>
            <Resource name={"C#"}/>
            <Resource name={"Game Jam"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/city-builder-prototype','_blank');}}>Play Here</button>
            </div>

            <div className="flex mt-2">
            <Project
            name={<div>Rocketham</div>}
            description={<div> During 2023, I took a course for school that taught me game design principles and how to write a <b>Game Design Document</b>. 
                        Up until this point I had never really planned my games much so this came as a shock, but also intrigued me. 
                        During the <b>final project</b> we were asked to make a GDD and a unity game based off it. 
                        At the time rage games were becoming quite popular so I decided to take advantage of it and build one myself.
                        The game is quite more forgiving than others due to the ability to course correct slightly with the air dash, and it was my goal to make a more beginner friendly game! 
                        Whenever I showcase my games this game often gets played the most due to its pick up and play nature.
                        </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"Unity"}/>
            <Resource name={"C#"}/>
            <Resource name={"School Project"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/rocketman-demo','_blank');}}>Play Here</button>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://docs.google.com/document/d/e/2PACX-1vT593WWtIKKL-j69iUPFOY_to2Hu7i_NRO4Vp0zv3FNoBW5pv3ccEzgOu7AF2hPMul2y893x6RDNKEW/pub','_blank');}}>Checkout the GDD</button>
            </div>


            <div className="flex mt-2">
            <Project
            name={<div>OneSeed</div>}
            description={<div> During 2022, I had been looking to make a game for a while but couldn't find any motivation to start it.
                            I had been learning unity for a few years but making a full complete game seemed quite the task. 
                            During this time my friends had been hosting a secret santa and I planned to make a game for whoever I got as I love my friends.
                            Once I got my secret santa I worked on it for a few months quite non-stop, scope creep and all. 
                            Honestly I dont know how the code even stayed toghether and I dare not look back at how I made everything work... 
                            It really was made of rubberbands and glue! But it turned out pretty good I'm proud of what I accomplished with such little skills.
                            The power of drive!
                        </div>}
            image={"./placeholder.png"}
            />
            </div>
            <div className="flex m-4 space-x-2 font-Jersey10">
            <Resource name={"Unity"}/>
            <Resource name={"C#"}/>
            <Resource name={"First Project"}/>
                <button className="bg-blue-800  hover:bg-blue-300 text-white text-lg  shadow-md shadow-slate-700 p-2 rounded-md hover:scale-105" onClick={()=> {window.open('https://anheiy.itch.io/oneseed','_blank');}}>Download Here</button>
            </div>
        </div>
    </div>);
}
export default ProjectsPage