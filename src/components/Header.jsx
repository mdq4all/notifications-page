
const Header = ({ counterNotifications, setReadAll }) => {
    
    const handleClick = () => setReadAll(true);

  return (
    <header className="flex justify-between items-center py-2 mb-4">
        <div className="flex items-center">
            <span className="text-xl font-bold mr-2">Notifications</span>
            <span className="px-3 py-[1px] bg-blue text-very-light-grayish-blue
                            font-bold text-lg rounded-lg">{counterNotifications}</span>
        </div>
        <p className="text-dark-grayish-blue text-base cursor-pointer hover:text-blue" 
            onClick={handleClick}>
            Mark all as read</p>
    </header>
  )
}

  
export default Header
