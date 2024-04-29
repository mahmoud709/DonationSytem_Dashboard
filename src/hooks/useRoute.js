import axios from "axios";
import { useEffect, useState } from "react";


export const apiData = function useRoute(apiLink, route) {
    const [dateList, setdateList] = useState([]);
    async function getInfo() {
        const { data } = await axios.get(`${apiLink}/${route}`);
        setdateList(data);
    }
    useEffect(() => {
        getInfo();
    }, []);
    return dateList;
}

export const apiSingleItem = function useSingleItem(apiLink, route, id) {
    const [singleItem, setsingleItem] = useState({});
    async function getSingleItem() {
        const { data } = await axios.get(`${apiLink}/${route}/${id}`);
        setsingleItem(data);
    }
    useEffect(() => {
        getSingleItem();
    }, [])
    return singleItem;
}