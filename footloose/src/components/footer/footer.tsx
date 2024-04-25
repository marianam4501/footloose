import Disclaimer from "../disclaimer/disclaimer";
import SocialMedia from "../socialMedia/socialMedia";
import "./styles.scss";
import { FC } from 'react';

interface FooterProps {
    children: React.ReactNode;
}

const Footer: FC<FooterProps> = ({children}) => {
    
    return(
        <div className="footer">
            <div className="footer__socialMedia">
                <SocialMedia />
                <p className="footer__copyright">2024</p>
            </div>
            <Disclaimer />
            {children}
        </div>
    );
};

export default Footer;