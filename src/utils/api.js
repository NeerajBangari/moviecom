import axios from"axios";

const BASE_URL="https://api.themoviedb.org/3"
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjU4ZWUxMTdlNmY2OGQ5MTgwYWQ1MjVmN2Y5NjdmMiIsInN1YiI6IjY0MWM4MmEzMTQyZWYxMDBkOWJiZGJmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3CL817FxkbYFbhR9Z9bMSeIcG-tygQaM__E2AWgFUU"

const headers={
    Authorization:"bearer"+TMDB_TOKEN,
};

export const fetchDataFromApi=async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL + url,{
            headers,
            params,
        })
        return data;
    }catch(err){
        //console.log(err);
        return err;
    }
};