import React from 'react';

// Import Download Button for Cards
import DownloadButton from './DownloadButton';

function ImageCard(props) {

    const options = [
        'up',
        'down',
        'left',
        'right',
    ]

    function randomFadeEffect(){
        const dataAosAttr = 'fade-'
        const dataAos = dataAosAttr + options[Math.floor(Math.random() * options.length)];
        console.log(dataAos);
        return dataAos;
    }


    const dataAos = randomFadeEffect();

    return (
        <div className="imgCard" data-aos={dataAos} style={{backgroundImage: `url(${props.src})`}}>
            <DownloadButton src={props.src} />
        </div>
    )
}

export default ImageCard;