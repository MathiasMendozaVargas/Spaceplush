import React, {useState, useEffect} from 'react';
import './ResultsSection.css';

// Import Image Card Component
import ImageCard from './ImageCard';

// importing API call function
import { getImages } from '../api/images';


function ResultsSection(props) {

    const [images, setImages] = useState([]);

    /**Url for Search api */
    const searchUrl = "https://images-api.nasa.gov/search";

    function getSearchQuery(){
        const href = window.location.href;
        const query = href.split('?search=')[1];
        return query
    }

    const query_from_search = getSearchQuery()
 
    if(query_from_search == null){
        var query = `?q=${props.q}`
    }else{
        var query = `?q=${query_from_search}`
    }

    

    const media_type = '&media_type=image'

    /** Url for Trending api */
    const url = searchUrl + query + media_type

    useEffect(() => {
        let mounted = true;

        getImages(url)
            .then(data => {
            if(mounted){
                const new_images = [];
                for(var i = 0; i < data.collection.items.length; i++){
                    
                    const image = data.collection.items[i];
                    const href = image['links'][0]['href']
                    
                    new_images.push(href)
                }

                setImages(new_images)
            }
            })
            return () => mounted = false;
    })

    return (
        <div className="resultsSection">
            <div className="resultsSectionContent">
                {images.map(src => {
                    return <ImageCard src={src}/>
                } )}
            </div>
        </div>
    )
}

export default ResultsSection;