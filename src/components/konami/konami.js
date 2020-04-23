import alk from '../../assets/alk.mp3';
import React, {useState} from "react";
import Konami from 'react-konami-code';

const play = () => {
    // passer le autoplay a true
}

const konamiCode = () => {
    const [autoplay, setAutoPlay] = useState(false);
    return (
        <Konami>
            <audio src={alk} controls volume="true" autoPlay={autoplay} />
        </Konami>
    );
};

export default konamiCode;
