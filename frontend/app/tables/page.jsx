"use client";
import React, {useEffect, useState} from "react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";
import Delete from "@/components/Delete";
import {toast} from "@/components/ui/use-toast";

async function getData() {
    const res = await fetch("http://localhost:8080/products/all", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("failed")
    }
    return res.json();
}

export async function deleteData(){
    const res = await fetch("http://localhost:8080/products/deleteAll",{
        method:'DELETE',
    });
    if (!res.ok){
        throw new Error("failed")
    }else {
        toast({
            variant: "success",
            description: "Deleted Successfully",
        })
    }
}

function Tables() {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState();

    const handleCheckboxChange = (userId) => {
        setSelectedRow(userId);
        console.log(selectedRow)
    }

    const fetchData = async () => {
        try {
            const newData = await getData();
            setData(newData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data]);

    return (
        <div className="mx-auto w-1/2 max-w-4xl mt-8">
            <div className="flex items-center bg-gray-500 rounded-lg p-2">
                <div className="flex-grow font-bold text-center">Employees Information</div>
                <Delete/>
            </div>
            <div className="border-gray-500 border p-2 rounded-lg ">
                <Table>
                    <TableHeader className="">
                        <TableRow>
                            <TableHead className="font-bold text-center text-base max-w-6">SELECT</TableHead>
                            <TableHead className="font-bold text-center text-base">ID</TableHead>
                            <TableHead className="font-bold text-center text-base">NAME</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-red-400">
                        {data.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-normal text-center">
                                    <Checkbox
                                        checked={selectedRow===user.id}
                                        onChange={() => handleCheckboxChange(user.id)}
                                    />
                                </TableCell>
                                <TableCell className="font-normal text-center">{user.id}</TableCell>
                                <TableCell className="font-medium text-center">{user.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Tables
