import { useEffect, useState } from "react"

const useWhyBanglaResources = () => {
    const [resources, setResources] = useState([]);
    useEffect( () => {
        fetch('./jsondata/why-bangla-resources.json')
        .then(res => res.json())
        .then(data => setResources(data));
    }, []);

    return [resources, setResources];
}

export default useWhyBanglaResources;