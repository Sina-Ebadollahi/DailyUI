import { useState } from "react";

export type fetchedDataType = {
    data: any | null,
    error: string | null,
    statusCode: number | null,
}
export default function useFetch(){
    const [isPending, setIsPending] = useState<boolean>(false);
    
    const fetchFunction = async (reqUrl: string, reqMethod?: string, requestHeaders?: HeadersInit, reqBody?: BodyInit) => {
        let fetchedData: fetchedDataType = {
            data: null,
            error: null,
            statusCode: null
        }
        try{
            setIsPending(true);
            const fetchMain = await fetch(reqUrl, {method: reqMethod, headers: requestHeaders, body: reqBody});
        fetchedData.statusCode = fetchMain.status;
        if(fetchMain.ok){
            const fetchJsonResp = await fetchMain.json();
            setIsPending(false);
            if(fetchJsonResp){
                fetchedData.data = fetchJsonResp;
            }
        }
        }catch(err: any){
            setIsPending(false);
            if(err){
                fetchedData.error = err.message;
            }
        }
        return fetchedData;
    }
    return{
        fetchFunction,
        isPending
    }
}