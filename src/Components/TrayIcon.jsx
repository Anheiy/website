
function TrayIcon(props)
{
return(
    <a href={props.link} className="mt-2 ml-1" target="_blank" rel="noopener noreferrer">
    <div className="flex justify-center items-center bg-black w-8 h-8  rounded-full">
        <img src={props.icon} className="w-4 h-4"/>
    </div>
    </a>
);
}
export default TrayIcon