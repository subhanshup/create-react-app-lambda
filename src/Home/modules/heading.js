
import React  from "react"
export default function Heading({tag,content,className}){
    const CustomTag = `${tag}`;
    return(
        <CustomTag className={className} dangerouslySetInnerHTML={{ __html: content }} />
    )
}