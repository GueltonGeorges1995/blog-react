import { useState, useEffect} from 'react';
import axios from 'axios';

// Every custom hook has to begin with use
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

   
    useEffect(() => {
        const abortCont = new AbortController();
        axios.get(url,{signal: abortCont.signal})
        .then(res =>{
            setData(res.data);
            setIsPending(false);
        })
        .catch(error =>{
            console.log(error);
        })

        return () => {
            abortCont.abort();
        }
    }, [url]);

    return {data, isPending};

};

export default useFetch;