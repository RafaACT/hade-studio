import React from 'react'
import { Services } from '@/components/services/services'

export default function Service({data}:any) {
    return(
        <>
            <Services data={data} />
        </>
    )
}

export async function getStaticProps() {
    const {services} = await import('../data/data.json')

    return{
        props:{
            data: services,
        }
    }
}