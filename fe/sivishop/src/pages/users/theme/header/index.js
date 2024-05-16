import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";     
import { Link } from "react-router-dom";
import { formater } from "../../../../utils/formater";
const Header = () => {
    return  (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header-top-left">
                        <ul>
                            
                            <li><Link to=""><AiTwotoneMail /></Link><span>helo@gmail.com</span> </li> 
                            <li> Miễn phí ship đơn từ {formater(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header-top-right">
                        <ul>
                        <li><Link to="https://www.facebook.com"><AiOutlineFacebook /></Link></li>
                        <li><Link to="https://www.instagram.com"><AiOutlineInstagram /></Link></li>
                        <li><Link to="https://www.google.com"><AiOutlineGoogle /></Link></li>
                        <li><Link to=""><AiOutlineUser /></Link><span>Đăng Nhập</span> </li> 
                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Header);