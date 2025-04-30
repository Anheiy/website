import { useState, useEffect, useRef} from "react";
import { DndContext } from "@dnd-kit/core";
import Footer from "./Components/Footer";
import Icon from "./Components/Icon";
import Window from "./Components/Window";
import ProjectPage from "./Components/ProjectsPage";
import AboutPage from "./Components/AboutPage";
import WelcomePage from "./Components/WelcomePage";
import {restrictToWindowEdges } from "@dnd-kit/modifiers";
import LinksPage from "./Components/LinksPage";
import ArcadePage from "./Components/ArcadePage";
import {Howl, Howler} from 'howler';

function App() {
    const [windows, setWindows] = useState([
        { id: 1, title: "Welcome.txt", x: 30, y: 50, width: 700, height: 400, visible: false, z: 4,icon_path:"./icons/txt_file.png", bgColor: "bg-white", openSound: new Howl({ src: ['./open.wav'] })},
        { id: 2, title: "About.txt", x: 30, y: 250, width: 600, height: 400, visible: false, z: 1, icon_path:"./icons/txt_file.png", bgColor: "bg-white", openSound: new Howl({ src: ['./open.wav'] })},
        { id: 3, title: "Links", x: 30, y: 300, width: 700, height: 400, visible: false, z: 3,icon_path:"./icons/links.png", bgColor: "bg-white", openSound: new Howl({ src: ['./open.wav'] })},
        { id: 4, title: "Projects", x: 30, y: 100,width: 800, height: 600, visible: false, z: 2,icon_path:"./icons/folder.png", bgColor: "bg-white", openSound: new Howl({ src: ['./open.wav'] })},
        { id: 5, title: "The Arcade", x: 30, y: 50, width: 1600, height: 800, visible: false, z: 4,icon_path:"./icons/folder.png", bgColor: "bg-slate-600", openSound: new Howl({ src: ['./jingle.wav'] })},
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
    console.log(windowSize.height)
    
    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart ={handleDragStart}   modifiers={[restrictToWindowEdges]}>
            {windows.map((win) => (
                <Window
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    x={win.x}
                    y={win.y}
                    width={windowSize.width >= win.width ? win.width: (windowSize.width*0.95)}
                    height={windowSize.height >= win.height ? win.height : (windowSize.height*0.95)}
                    visible={win.visible}
                    bgColor={win.bgColor}
                    icon_path={win.icon_path}
                    pos = {windowSize.width >= win.width
                      ? "absolute" : "static"}
                    content={
  win.title === "The Arcade"
    ? <ArcadePage visible={win.visible} />
    : win.title === "About.txt"
      ? <AboutPage />
      : win.title === "Projects"
        ? <ProjectPage />
        : win.title === "Links"
          ? <LinksPage />
          : win.title === "Welcome.txt"
            ? <WelcomePage />
            : null
}
                    z={win.z}
                    onToggle={() => toggleWindowVisibility(win.title)}
                />
            ))}
            <div className="grid grid-flow-row grid-rows-8 h-[calc(100vh-150px)] justify-start gap-x-4 gap-y-24">
            {windows.map((win) => 
            (
                <Icon key={win.id} name={win.title} icon_path={win.icon_path}onToggle={() => toggleWindowVisibility(win.title)} />
            ))}
            </div>
            <Footer/>
        </DndContext>
    );
}

export default App;
