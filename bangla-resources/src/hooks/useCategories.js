import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./jsondata/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);

    return [categories, setCategories];
}

export default useCategories;