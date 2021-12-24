import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import BounceLoader from "react-spinners/BounceLoader";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import "./RequestForm.css";

const override = `
  display: flex;
  align-items: center;
`;

function RequestForm() {
    const baseURL = "https://sukurl.herokuapp.com/url/";
    const [ url, setUrl ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");
    const [ shortUrl, setShortUrl ] = useState("");
    useEffect(() => {
        setLoading(false);
    },[shortUrl, error])
    const formSubmit = (event)=> {
        setShortUrl("");
        setError("");
        event.preventDefault();
        if(url){
            setLoading(true);
            const formData = {longUrl: url} //This is a data to store entry in form type;
            axios({
                method: "post",
                url: baseURL,
                data: qs.stringify(formData), //form the data into json format
                headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
            })
            .then((response)=>{
                console.log(response);
                setShortUrl(response.data.shortUrl);
            })
            .catch((error)=>{
                const errorBody = error.response.data; //To Access the json data of the error;
                setError(errorBody.message);
                if(errorBody.shortUrl){
                    setShortUrl(error.response.data.shortUrl); //If URL is present which is the case when the URL is already present in the DB;
                } else {
                    setShortUrl("");
                }
            })
        }
    }
    return (
        <div className="formContainer">
            <div className="formContainer__header">
                <AutoFixHighIcon className="icon"/>
                <h3 className="header">Enter a long URL to make it SukoshiURL</h3>
            </div>
            <form className="formContainer__form">
                <div className="formContainer__url">
                    <input autoComplete="off" type="text" placeholder="URL ..." onChange={(e) => {setUrl(e.target.value)}}/>
                </div>
                <button type="submit" onClick={(e) => formSubmit(e)}>Make SukoshiURL!</button>
            </form>
            {
                loading ? 
                <div className="loading">
                    <BounceLoader color="#38A3A5" loading={loading} css={override} size={100} /> 
                </div>
                : 
                <div className="output"> 
                        <div className="shortUrlBox">
                            <p>SukoshiURL</p>
                            <input type="text" value={shortUrl} />
                        </div>
                        <div className="errorBox">
                            <p>ERROR</p>
                            <input type="text" value={error} disabled />
                        </div> 
                </div>
            }
        </div>
    );
}

export default RequestForm;