
import React from "react"
import Heading from '../modules/heading'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ImageBox({title="",href={},image="",srcSet="",className=""}){
    return(
        <div className={"imagebox-container " + className}>
            {image &&
                <LazyLoadImage
                 src={image} 
                 srcSet={srcSet} 
                 alt={title}
                />
            }
            <div className="imagebox-desc">
                <Heading className="imagebox-title" tag="h3" content={title}/>
                {href.link && <a className="imagebox-a" href={href.link}>{href.title}</a>}
            </div>
        </div>
    )
}