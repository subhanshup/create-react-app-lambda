
import React from "react"
import Heading from '../modules/heading'
export default function ImageBox({title="",href={},image="",srcSet="",className=""}){
    return(
        <div className={"imagebox-container " + className}>
            {image && <img src={image} srcSet={srcSet} alt={title}/>}
            <div className="imagebox-desc">
                <Heading className="imagebox-title" tag="h3" content={title}/>
                {href.link && <a className="imagebox-a" href={href.link}>{href.title}</a>}
            </div>
        </div>
    )
}