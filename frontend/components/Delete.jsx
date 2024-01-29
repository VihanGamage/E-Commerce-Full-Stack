"use client"
import React from "react";
import {deleteData} from "@/app/tables/page";
import {Button} from "@/components/ui/button";

const Delete = () => {
    return(
        <div>
            <Button onClick={deleteData} variant="destructive">Clear</Button>
        </div>
    )
}
export default Delete