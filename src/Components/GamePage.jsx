import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function GamePage({visible = true, game = {
    id: 0,
    loaderUrl: "./GoblinCave.loader.js",
    dataUrl: "./GoblinCave.data.unityweb",
    frameworkUrl: "./GoblinCave.framework.js.unityweb",
    codeUrl: "./GoblinCave.wasm.unityweb",
  }})
{
    const { unityProvider, unload, isLoaded } = useUnityContext(game);
  
    // Handle unloading on window visibility change
    useEffect(() => {
      const handleVisibilityChange = async () => {
        if (!visible && unload && isLoaded) {
          await unload(); // Ensure Unity is unloaded when the window is hidden
        }
      };
  
      handleVisibilityChange();
  
      return () => {
        if (unload && isLoaded) {
          unload(); // Ensure unloading when the component is unmounted or visibility changes
        }
      };
    }, [visible, unload, isLoaded]);
    return(
        <div>
        {visible && (
            <div name="Game" className="flex justify-center mt-5">
                <Unity key={game.id} className="aspect-video w-11/12 h-11/12 border-4 border-blue-500 rounded-xl" unityProvider={unityProvider} />
                
            </div>
          )} 
          <div className="flex justify-center font-Jersey10 text-4xl">Have Fun!</div>    
        </div>
    );
}
export default GamePage