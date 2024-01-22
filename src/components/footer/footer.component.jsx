import "./footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="Footer-Container">
            <div className="Footer-Info">
                <h6>КОНТАКТИ</h6>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                    &nbsp; Варна ул. поп харитон 10
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; info@eventus.com
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp; 0895267385
                </p>
            </div>
            <div className="Footer-Info">
                <h6>ДОПЪНИТЕЛНА ИНФОРМАЦИЯ</h6>
                <p>За компанията</p>
                <p>Партньорска програма</p>
                <p>Правила и условия</p>
            </div>
            <div className="Footer-Info">
                <h6>СОЦИАЛНИ ВРЪЗКИ</h6>
                <div className="Footer-Icons-Container">
                    <span className="Footer-Icons">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                    <p>Eventus</p>
                </div>
                <div className="Footer-Icons-Container">
                    <span className="Footer-Icons">
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <p>Eventus</p>
                </div>
                <div className="Footer-Icons-Container">
                    <span className="Footer-Icons">
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <p>Eventus</p>
                </div>
            </div>
        </div>
    );
};
