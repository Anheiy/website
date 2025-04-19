
function Project({image, name, description})
{
    return (
        
        <div className="flex">
            <img id="image"src={image} className="size-48"/>
            <div className="flex flex-col  ml-4">
                <div id="title" className="text-3xl font-Jersey25">{name}</div>
                <div className="text-sm font-Jersey25 text-gray-600">{description}</div>
            </div>
            <button></button>
        </div>

    );
}

export default Project