
function Resource({name = "default", bgcolor = "bg-blue-500"})
{
    
return (
<div className={`flex justify-center place-items-center min-w-12 min-h-5 ${bgcolor}  text-2l font-Jersey10 text-gray-800 shadow-md shadow-slate-700 p-2 rounded-md hover:scale-110`}>
    {name}
</div>
);
}

export default Resource