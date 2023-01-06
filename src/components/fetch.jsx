import { useState, useEffect } from 'react';

export const useFetchData = (BASE_URL = '', error_msg = 'An error has ocurred getting the data') => {
    const [fetch_data, setFetchData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    
    setTimeout(()=>{
        console.log("hola")
        fetch(BASE_URL).then(res=>res.json()).then(json=>setFetchData(json.data))
    }, "3000")

    
//Retornamos nuestro fetch_data como data, nuestro loading y error
    return { data: fetch_data, loading, error };
}