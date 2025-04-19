

function Icon({ name = "", onToggle = () => {}, size = 64, icon_path = "./react.svg" }) {
    return (
        <button onClick={onToggle} className="flex flex-col items-center justify-center w-[80px]">
            <div className={`flex flex-col items-center w-full`}>
                <img
                    src={icon_path}
                    className={`drop-shadow-glow hover:scale-125 transition-transform`}
                    style={{ width: size, height: size }}
                    alt={name}
                />
                <h1 style={{WebkitTextStroke: '0.1px black', textShadow: '-0.1px -0.1px 0 black, 0.1px -0.1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}} className={`font-Jersey25 text-center text-white text-sm mt-1 px-1 py-0.5 rounded drop-shadow-glow w-full min-h-[${size}px] flex items-center justify-center`}>
                    {name}
                </h1>
            </div>
        </button>
    );
}

export default Icon;