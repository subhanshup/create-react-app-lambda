
import React from "react"
import Heading from '../modules/heading'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageBox({title="",href={},image="",srcSet="",className="", placeholder,height="auto"}){
    return(
        <div className={"imagebox-container " + className}>
            {image &&
                <LazyLoadImage
                 src={image} 
                 srcSet={srcSet}
                 effect="blur"
                 alt={title}
                 height={height}
                 placeholder={placeholder}
                />
            }
            <div className="imagebox-desc">
                <Heading className="imagebox-title" tag="h3" content={title}/>
                {href.link && <a className="imagebox-a" href={href.link}>{href.title}</a>}
            </div>
        </div>
    )
}