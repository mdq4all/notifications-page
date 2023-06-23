import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Notification from './components/Notification';
import notificationList from './API/notifications.json'


function App() {

  const [counterNotifications, setCounterNotifications] = useState(0);
  const [readAll, setReadAll] = useState(false);

  //Contabiliza los mensajes no leidos y los pasa como prop para renderizar en el header
  useEffect(() => {
    const readNotifications = notificationList.notifications.filter(
      (element) => !element.readMessage
    );
    setCounterNotifications(readNotifications.length);
  }, []);
  // Setea el contador de mensajes a 0 cuando se usa "Mark all as read" en el header
  useEffect(() => {
    readAll && setCounterNotifications(0);
  }, [readAll]);
  //Resta una notficacion del contador de leidos
  const handleClick = () => {
    counterNotifications > 0 && setCounterNotifications(counterNotifications - 1);
  };
  
  return (
    <div className='font-jakarta md:flex md:w-full bg-very-light-grayish-blue
                    md:h-screen md:items-center md:justify-center '>
      <div className='bg-white p-4 md:w-2/6 md:h-fit md:rounded-lg md:shadow-lg'>
        <Header counterNotifications={counterNotifications}
                setReadAll={setReadAll} />
        {notificationList.notifications.map((element) => (       
          <Notification 
              readAll={readAll}
              key={element.id}
              data={element}
              onClick={handleClick}
              />
            )
          )};
      </div>
    </div>
  )
}

export default App
