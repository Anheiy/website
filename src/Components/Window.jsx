import { useDraggable } from "@dnd-kit/core";

function Window({ id, title, x, y, visible, content, onToggle, width, height, z =1}) {
    const { attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({ id });
    
    if (!visible) return null;

    const style = {
        position: "absolute",
        left: x,
        top: y,
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
        zIndex: z
    };

    return (
        <div id={id} ref={setNodeRef} style={style} className="w-window h-window rounded-md bg-zinc-200 touch-none shadow-slate-800 shadow-2xl border-blue-700 border-4 overflow-hidden">
            <div className="flex items-center bg-blue-700 w-window h-8 shadow-sm shadow-slate-500">
                {/* Drag handle only here */}
                <div className={`flex-1 flex items-center ${isDragging ? "cursor-grabbing" : "cursor-grab"} select-none`}{...listeners}{...attributes}>
                    <img src="./itchio.png" className="size-4 ml-2" />
                    <div className="text-white font-Jersey10 ml-2 text-xl">{title}</div>
                </div>
                <button onClick={onToggle}className="mr-2 size-5 text-blue-100 font-Jersey10 flex items-center justify-center hover:text-red-500">
                   [X]
                </button>
            </div>
            <div style={{ height: `calc(${height}px - 2rem)`, width: width}} >{content}</div>
        </div>
    );
}

export default Window;