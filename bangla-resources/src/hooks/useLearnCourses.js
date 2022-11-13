import { useEffect, useState } from "react";

const useLearnCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./jsondata/learn-courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return [courses, setCourses];
}

export default useLearnCourses;