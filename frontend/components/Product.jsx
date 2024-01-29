import React from "react";
import Image from "next/image";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {saveProduct} from "@/app/items/page";

const Product = ({imageUrl, productName}) => {
    const handleClick = () => {
        saveProduct(productName)
            .then(r => {
            console.log("success")
        })
            .catch(e => {
                console.log(`Not valid URL! \nStatus: ${e.status}, ${e.statusText}`)
            })
    }
    return(
        <div className="ml-5 mt-5 flex">
            <Image src={imageUrl} width={100} height={80} alt={productName}/>
            <Card className="ml-5 mt-8 w-4">
                <CardTitle>{productName}</CardTitle>
                {/*<CardDescription>it's a benz car</CardDescription>*/}
            </Card>
            <Button className="ml-36 mt-6" onClick={handleClick}>
                add to cart
            </Button>
        </div>
    )
}
export default Product