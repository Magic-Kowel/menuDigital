import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import {IsLogged} from "../api/token";
export default function Home(){
    const navigate = useNavigate()
    // useEffect(()=>{
    //     if(!IsLogged()){
    //         navigate('/');
    //     }
    // },[])
    return(
        <Navigation >
            <>
            </>
        </Navigation>
    );
}