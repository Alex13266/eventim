import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./dropdown-profile.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { useContext } from "react";

const DropDownProfile = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Fragment>
            <div className="flex flex-col DropDownProfile">
                <ul className="DropDown-Menu">
                    <li>Профил</li>
                    <li>
                        {currentUser ? (
                            <span onClick={signOutUser}>Излез</span>
                        ) : (
                            <Link className="DropDown-SignIn" to="/auth">
                                Вписване
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default DropDownProfile;
