import { useEffect, useState} from 'react'
import { getPainting } from '../api/apiPainting'
import { CancelToken } from 'apisauce'

export default function usePainting(paintingId) {
    const [painting, setPainting] = useState([])

    useEffect(
        ()=>{
            let source;
            (async()=>{
                source = CancelToken.source();
                const response = await getPainting(paintingId, source.token);
                setPainting(response);
            })();
            return ()=>{source.cancel()}
        },[paintingId]
    );

  return painting;
};
