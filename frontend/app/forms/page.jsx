"use client";

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardContent, CardTitle} from "@/components/ui/card"
import {useState} from "react";
import React from "react";
import {useToast} from "@/components/ui/use-toast";

const FormSchema = z.object({
    cardNumber: z.string(),
    expiryDate: z.string(),
    cvv: z.string(),
    cardHolderName: z.string(),
})

function Forms() {
    const {toast} = useToast()

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            cardHolderName: "",
        },
    })

    async function onSubmit(data) {
        console.log(data)
        const res = await fetch("http://localhost:8080/payment/save", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cardNumber: data.cardNumber,
                expiryDate: data.expiryDate,
                cvv: data.cvv,
                cardHolderName: data.cardHolderName
            }),
        });
        if (!res.ok) {
            // If the response status is not okay (e.g., 404 or 500),
            console.log(`Not valid URL! \nStatus: ${res.status}, ${res.statusText}`)
            toast({
                variant: "destructive",
                description: "Submission Failed",
            })
        } else {
            console.log("statusCode: S1000,\nstatusDetail: Success")
            toast({
                variant: "success",
                description: "Submitted Successfully",
            })
        }
    }

    return (
        <div className="border border-gray-400 rounded-lg p-3 mt-8 mx-auto w-1/2 ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

                    <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>cardNumber</FormLabel>
                                <FormControl>
                                    <Input placeholder="cardNumber" {...field} />
                                </FormControl>
                                {/*<FormMessage/>*/}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>expiryDate</FormLabel>
                                <FormControl>
                                    <Input placeholder="expiryDate" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cvv"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>cvv</FormLabel>
                                <FormControl>
                                    <Input placeholder="cvv" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cardHolderName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>cardHolderName</FormLabel>
                                <FormControl>
                                    <Input placeholder="cardHolderName" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


                    <Button className="ml-2" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default Forms
