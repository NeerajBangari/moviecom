import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos?api_key=9f58ee117e6f68d9180ad525f7f967f2`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits?api_key=9f58ee117e6f68d9180ad525f7f967f2`
    );

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id}/>
            <Recommendation mediaType={mediaType} id={id}/>
        </div>
    );
};

export default Details;