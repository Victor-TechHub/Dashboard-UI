import { FaSearch } from "react-icons/fa"
import "./styles.scss"
import { TiMessages, TiBell } from "react-icons/ti";
import user from "../../assets/user.jpg"

const TopNavBar = ({ handleClick }) => {
    return (
        <div className="TopNavBar">
            <div className="title">
                <span onClick={handleClick}>Dashboard</span>
            </div>

            <div className="input_field">
                <FaSearch color="rgb(75, 11, 193)" />
                <input type="text" placeholder="Search here..." />
            </div>

            <div className="preference">
                <select name="country" id="country">
                    <option value="English"> Eng (US)</option>
                    <option value="English"> Eng (UK)</option>
                </select>

                <div className="notification">
                    <i><TiBell size={20} /></i>
                </div>

                <div className="user_profile">
                    <img src={user} alt="User" />
                    <div className="title">
                        <p>Victor Dev</p>
                        <p style={{ fontSize: "10px", color: "gray" }}>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar