"use client";

import React, {useEffect, useState} from "react";
import Product from "@/components/Product";

export async function saveProduct(productName){
    const res=await fetch("http://localhost:8080/employee/save",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //id: "14",
            name: productName,
        }),
    });
}

function Items() {
    return (
        <div className="border-gray-500 border rounded-lg mt-5 w-1/3">
            <Product imageUrl="/benz.webp" productName="benz"/>
            <Product imageUrl="/audi.jpg" productName="audi"/>
            <Product imageUrl="/bmw.webp" productName="bmw"/>
            <Product imageUrl="/jaguar.jpg" productName="jaguar"/>
        </div>
    )
}

export default Items

