import alk from '../../assets/alk.mp3';
import React, {useState} from "react";
import Konami from 'react-konami-code';


const KonamiCode = () => {
    const [autoplay, setAutoPlay] = useState(false);
    return (
        <Konami action={() => setAutoPlay(true)}>
            <audio src={alk} controls volume="true" autoPlay={autoplay} />
        </Konami>
    );
};

export default KonamiCode;
