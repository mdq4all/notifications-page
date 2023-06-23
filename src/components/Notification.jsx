import { useEffect, useState } from "react";
import './animation.css'

const Notification = ({ data, onClick, readAll }) => {

    const { imageProfile,
            name, 
            action, 
            reactionPost, 
            reactionImage, 
            readMessage, 
            timeElapsed, 
            group, 
            privateMessage} = data;

            const [read, setRead] = useState(readMessage);
    
    useEffect(() => {
        readAll && setRead(true);
    }, [readAll]);

    const handleClick = () => {
       if (!read)  {
            setRead(true);
            onClick(); 
        } else return
      };
  return (
    <div className="flex md:justify-between">
        <div className={`flex items-start rounded-lg p-3 mb-3 transition-all duration-1000
            ${!read ? 'bg-very-light-grayish-blue' : 'bg-white'}`}
            onClick={handleClick}>
            <img src={`/images/avatar-${imageProfile}.webp`} alt="imagen de perfil" className="w-10" />
            <div className="pl-4 text-sm">
                <span className="font-bold mr-2 hover:text-blue cursor-pointer">{name}</span>
                <span className="text-dark-grayish-blue mr-1">{action}</span>
                {group && <span 
                    className="text-blue font-bold mr-2 hover:text-blue cursor-pointer">
                    {group}</span>}
                {reactionPost && <span 
                    className="mr-2 text-dark-grayish-blue font-bold hover:text-blue cursor-pointer">
                    {reactionPost}</span>}
                {/* {!read && <div className="bg-red rounded-full w-2 h-2 inline-block 
                    transition-all duration-1000"></div>} */}
                <div className={`bg-red rounded-full w-2 h-2 inline-block 
                    ${!read ? "opacity-1" : "animate-flicker"}`}></div>
                <h3 className="text-grayish-blue">{timeElapsed}</h3>
                {privateMessage && <p 
                    className="border-solid border-[1px] border-light-grayish-blue-2
                    rounded-md p-3 my-2 text-dark-grayish-blue hover:bg-light-grayish-blue-2
                    cursor-pointer">
                    {privateMessage}</p>}
            </div>
        </div>
            {reactionImage && <img src={`/images/${reactionImage}.webp`} alt="image post"
                className="mt-3 mr-3 w-10 h-10" />}
    </div>
  )
}

export default Notification
