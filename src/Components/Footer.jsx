import TrayIcon from "./TrayIcon";
import { FaWindows } from "react-icons/fa";
function Footer()
{
    return (
        <div className="bg-blue-600 text-sky-50 absolute bottom-0 w-full text-center ">
            <div className="flex justify-left place-items-center mb-2">
            <FaWindows className="size-7 mt-2 ml-2 mr-5"/>
            <TrayIcon link="https://anheiy.itch.io/" icon="./itchio.png"/>
            NEWER
            </div>

        </div>
    );
}
export default Footer