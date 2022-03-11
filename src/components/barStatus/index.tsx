import React, { useState } from 'react';
import { Bar} from './styles';

type PropsBarStatus = {
    height: number,
    type: any,
}
export function BarStatus({height, type}:PropsBarStatus){
    const typeFormated = type.replace('-', '');
    let text = '';
    if(type === 'special-attack'){
        text = 'Special Attack'
    }
    else if(type === 'special-defense'){
        text = 'Special Defense'
    }
    else{
        text = typeFormated;
    }
    const base_sate = Math.ceil(height / 20);
    return(
        <>
        <Bar height={base_sate} type={typeFormated}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p>{text}</p>
        </Bar>
        </>
    )
}