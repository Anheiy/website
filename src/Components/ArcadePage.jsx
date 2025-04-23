

import { useState, useRef, useEffect } from "react";
import Window from "./Window";
import GamePage from "./GamePage";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges} from "@dnd-kit/modifiers";
import Icon from "./Icon";


function ArcadePage({}) {
  const games = [
    {
      id: 0,
      title: "Goblin Cave",
      loaderUrl: "./GoblinCave.loader.js",
      dataUrl: "./GoblinCave.data",
      frameworkUrl: "./GoblinCave.framework.js",
      codeUrl: "./GoblinCave.wasm",
    },
  ];
  const [windows, setWindows] = useState([
    { id: 1, title: "Goblin Cave", x: 30, y: 250, width: 1100, height: 700, visible: false, z: 1, icon_path:"./projects/goblin_cave.png", content: <GamePage id={1} game={games[0]} />,  openSound: new Howl({ src: ['./open.wav'] })}
  ]);
    const openSound = useRef();
    const closeSound = useRef();

    useEffect(() => {
      openSound.current = new Howl({ src: ['./open.wav'] });
      closeSound.current = new Howl({ src: ['./close.wav'] });
    }, []);
const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
});
const maxZ = useRef(10);
useEffect(() => {
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

const toggleWindowVisibility = (title) => {
  setWindows(prev =>
      prev.map(win => 
        { if(win.title === title)
          {
            if(!win.visible == true)
            {
              openSound.current = win.openSound;
              openSound.current.play();
            }
            else
              closeSound.current.play();
            return { ...win, visible: !win.visible,  };
          }
          else 
          {
            return win;
          }
        }
      )
  );
};
const handleDragStart = ({ active }) => {
    setWindows(prev => {
      maxZ.current += 1
      
      console.log(maxZ);
      return prev.map(w =>
        w.id === active.id
          ? { ...w, z: maxZ.current}
          : w
      );
    });
  };
  
  // Now you don’t need to touch z in handleDragEnd.
  const handleDragEnd = ({ delta, active }) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === active.id
          ? { ...w, x: w.x + delta.x, y: w.y + delta.y }
          : w
      )
    );
  };

  return (
    <div>
          <div className="pl-4 font-Jersey25">       
            <div className="text-4xl text-center">         
                <span className="bg-red-500">W</span>         
                <span className="bg-orange-500">E</span>         
                <span className="bg-yellow-500">L</span>         
                <span className="bg-green-500">C</span>         
                <span className="bg-blue-500">O</span>         
                <span className="bg-indigo-500">M</span>         
                <span className="bg-violet-500">E</span>         
                <span> </span>         
                <span className="bg-red-500">T</span>         
                <span className="bg-orange-500">O</span>         
                <span> </span>         
                <span className="bg-yellow-500">T</span>         
                <span className="bg-green-500">H</span>         
                <span className="bg-blue-500">E</span>         
                <span> </span>         
                <span className="bg-indigo-500">A</span>         
                <span className="bg-violet-500">R</span>         
                <span className="bg-red-500">C</span>         
                <span className="bg-orange-500">A</span>         
                <span className="bg-yellow-500">D</span>         
                <span className="bg-green-500">E</span>       
            </div>
            <div className="text-center text-xl">This will hold little games you can play! some will be exclusive to this website!</div>
      </div> 
      <div className="flex">
      <DndContext onDragEnd={handleDragEnd} onDragStart ={handleDragStart}   modifiers={[restrictToWindowEdges]}>
            {windows.map((win) => (
                <Window
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    x={win.x}
                    y={win.y}
                    width={windowSize.width >= win.width ? win.width : windowSize.width * 0.95}
                    height={(windowSize.width >= win.width) ? win.height : windowSize.width/windowSize.height * win.height * 0.8}
                    visible={win.visible}
                    content={win.content}
                    bgColor={"bg-white"}
                    icon_path={win.icon_path}
                    pos = {windowSize.width >= win.width ? "absolute" : "fixed"}
                    z={win.z}
                    onToggle={() => toggleWindowVisibility(win.title)}
                />
            ))}
            <div className="flex mt-4 ml-5 space-x-5">
            {windows.map((win) => 
            (
                <Icon key={win.id} icon_path = {win.icon_path} name={win.title} size={128} onToggle={() => toggleWindowVisibility(win.title)} />
            ))}
            </div>
        </DndContext>
      </div>
    </div>
  );
}

export default ArcadePage;