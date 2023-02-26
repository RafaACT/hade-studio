import React from "react";

export interface Main {
    job: MainData,
    studio: MainData
}

export interface MainData{
    name: string,
    images: Array<string>,
    description: string
}