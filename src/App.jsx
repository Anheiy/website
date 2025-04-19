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


function App() {
    const [windows, setWindows] = useState([
        { id: 1, title: "About", x: 30, y: 250, width: 600, height: 400, visible: false, z: 1, content: <AboutPage/>},
        { id: 2, title: "Projects", x: 30, y: 100,width: 800, height: 600, visible: false, z: 2,content: <ProjectPage/>},
        { id: 3, title: "Links", x: 30, y: 300, width: 700, height: 400, visible: false, z: 3,content: <LinksPage/> },
        { id: 4, title: "Welcome.txt", x: 30, y: 50, width: 700, height: 400, visible: false, z: 4,content: <WelcomePage/> },
        { id: 5, title: "The Arcade", x: 30, y: 50, width: 1600, height: 800, visible: false, z: 4,content: null }
    ]);
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
                win.title === title ? { ...win, visible: !win.visible,  } : win
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
        <DndContext onDragEnd={handleDragEnd} onDragStart ={handleDragStart}   modifiers={[restrictToWindowEdges]}>
            {windows.map((win) => (
                <Window
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    x={win.x}
                    y={win.y}
                    width={windowSize.width >= win.width ? win.width: (windowSize.width*win.width*0.95/win.width)}
                    height={windowSize.height >= win.height ? win.height : (windowSize.height*win.height*0.95/win.height)}
                    visible={win.visible}
                    content={
  win.title === "The Arcade"
    ? <ArcadePage visible={win.visible} />
    : win.title === "About"
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
            <div className="flex flex-col mt-4 w-full">
            {windows.map((win) => 
            (
                <Icon key={win.id} name={win.title} onToggle={() => toggleWindowVisibility(win.title)} />
            ))}
            </div>
            <Footer />
        </DndContext>
    );
}

export default App;
