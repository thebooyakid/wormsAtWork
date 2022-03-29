import { useEffect, useState } from 'react';
import { getPaintings } from '../api/apiPainting';
import { CancelToken } from 'apisauce';

export default function usePaintings(){
const [paintings, setPaintings] = useState([])

    useEffect(
        ()=>{
            const source = CancelToken.source();
            const ppaintings = async ()=>{
                const response = await getPaintings(source.token);
                setPaintings(response);
            };

            ppaintings();

            return ()=>{
                source.cancel();
            };
        },
        []
    );
    return paintings
};

