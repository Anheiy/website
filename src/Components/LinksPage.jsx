import { FaYoutube } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function LinksPage()
{
    return(
    <div className="overflow-y-auto overflow-x-hidden h-full pl-4 whitespace-pre-wrap font-Jersey10 mt-3">
        <div>Hello! Here are some links/videos I liked or found interesting!</div>
        <div className="text-blue-500">
            <div className="flex space-x-2 place-items-center"><FaLink className="fill-gray-500 size-8"/><a href="https://neal.fun/" target="_blank" className=" hover:text-blue-300">neal.fun</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/@Brackeys" target="_blank" className="hover:text-blue-300">Brackeys</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=kTn6F3iHuOU&list=LL&index=46" target="_blank" className=" hover:text-blue-300">The Spongebob Game that the World Forgot</a></div>
            <ol className="list-disc list-inside text-gray-500"><li>This game was my childhood</li></ol>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=_1uEy-n4IsU&list=LL&index=82" target="_blank" className=" hover:text-blue-300">Astrud Gilberto With Stan Getz - Girl From Ipanema (1964)</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=jKV-cym4QfQ&list=LL&index=90" target="_blank" className=" hover:text-blue-300">i could write my magnum opus or i could simply go to bed</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=Q_N_1434Eg0&list=LL&index=191" target="_blank" className=" hover:text-blue-300">Donald Glover: Son of Kanye</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=mqNHIK07P3g&t=1476s" target="_blank" className=" hover:text-blue-300">The Disturbing Development of a Haunted Game...</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=-8EasZ_wSBc&t=1334s" target="_blank" className=" hover:text-blue-300">The Digital Horror Rage Game About Loss...</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=nZ1Oa_uHsLo" target="_blank" className=" hover:text-blue-300">Pinocchio is a Story About Art and God</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=TiH2SjjowKw&t=2700s" target="_blank" className=" hover:text-blue-300">Who's Lila? - Story Explained</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=s2699HTY-g8" target="_blank" className=" hover:text-blue-300">Hey, Squidward...</a></div>
            <div className="flex space-x-2 place-items-center"><FaYoutube className="fill-red-600 size-8"/><a href="https://www.youtube.com/watch?v=mPXLP9mYRi4&t=646s" target="_blank" className=" hover:text-blue-300">if i'm you and you're me then...who's that
</a></div>
        </div>
    </div>
);
}
export default LinksPage