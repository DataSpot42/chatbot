import ChatPop from "./chatbotpop" 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css'



const Home = () => {
    return (
        <div className="mainbody">
            
            <Popup trigger={<button className="chatbutton"> Chat to us</button>} position="right center"
            >
    <div className="popupwindow"><ChatPop /></div>
  </Popup>
            
            
        </div>
    )
}
export default Home