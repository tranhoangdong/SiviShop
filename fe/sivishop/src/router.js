
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERs } from "./utils/router";
import Masterlayout from "./pages/users/theme/masterlayout";
import ProfilePage from "./pages/users/profilePage";


const renderUserRouter = () => {
    const userRouters = [
        {
             path : ROUTERs.USER.HOME,
             component : <HomePage />,
        },
        {
            path : ROUTERs.USER.PROFILE,
            component : <ProfilePage />,
        },

    ];
     return (
        <Masterlayout>
        <Routes>
            {userRouters.map((item, key) => (
                      <Route key={key} path={item.path} element={item.component} />))
                    }
                 
                
            
        </Routes>
        </Masterlayout>
     );
     
};

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;