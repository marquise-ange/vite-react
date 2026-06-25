import './Popup.css'
const Popup = ({isOpen, onClose, children}) => {
 
    if(!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </div>
    )


}

export default Popup