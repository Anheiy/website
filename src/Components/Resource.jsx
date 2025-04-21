import { useRef, useEffect } from "react";
function Resource({name = "default", bgcolor = "bg-blue-500"})
{
        const hoverSound = useRef();
        const currentPitch = useRef(0);

        function ResourceAudio()
        {
            hoverSound.current = new Howl({ src: ['./close.wav'] });
            if(currentPitch.current < 5)
            {
            currentPitch.current += 0.5;
            }
            else currentPitch.current = 1;
            hoverSound.current.rate(currentPitch.current);
            hoverSound.current.play();
        }
return (
<div onMouseEnter={ResourceAudio}className={`flex justify-center place-items-center min-w-12 min-h-5 ${bgcolor}  text-2l font-Jersey10 text-gray-800 shadow-md shadow-slate-700 p-2 rounded-md hover:scale-110`}>
    {name}
</div>
);
}

export default Resource