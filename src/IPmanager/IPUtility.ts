import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../Hooks/useFetch";
export default function IPUtility(){
    const dispatch = useDispatch();
    const { fetchFunction } = useFetch();
    useEffect(() => {
        (function(){
            const ipDataFetch = fetchFunction('https://api.ipify.org?format=json','GET');
            ipDataFetch.then((data) => {
                dispatch({type: 'CHANGE_IP', payload: data.data});
            })
        })()
    },[]);

}