import React, {  useEffect, useState } from 'react'

const ProductImage = (props) => {
    const { imgs } = props       //imgs= [{ url: "" }]

    const[currentElement,setCurrentElement]=useState("")

   
   useEffect(()=>{
      imgs&&setCurrentElement(imgs[0])
   },[imgs])
  
    // console.log(imgs) //img is an array here
    return (
        <>
            <div className="product-image flexitem">
                <div className="allImages">
                
                    {imgs&&imgs.map((element) => {  //we can also use imgs?.map(())
                        return (
                        <figure key={element.id} >
                            <img src={element.url} alt={element.filename} onClick={()=>setCurrentElement(element)}  />
                        </figure>
                        )
                    })}

                </div>
                <div className="mainImage">
                 {imgs && <img src={currentElement.url} alt={currentElement.filename} />}
                 
                </div>
            </div> 
        </>
    )
}

export default ProductImage
