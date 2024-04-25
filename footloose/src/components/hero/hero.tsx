import "./styles.scss";
import { FC } from 'react';

interface HeroProps {
    children: React.ReactNode;
}

const Hero: FC<HeroProps> = ({children}) => {
    
    return(
        <>
        <div className="hero">
            <h1 className="hero__title">Where your feet find freedom.</h1>
            <p className="hero__description">
                Footloose is your one-stop online shop for all things footwear. We
                offer a curated selection of shoes for men, women, and children,
                catering to every style and occasion. From trendy sneakers and comfy
                casual shoes to timeless boots and breezy sandals, our catalog
                features the latest trends from renowned brands alongside unique finds
                you won't see everywhere else.
            </p>
        </div>
        {children}
        </>
    );
};

export default Hero;