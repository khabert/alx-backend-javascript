export default function getStudentsByLocation(arr, city){
    return arr.filter(({location}) => (
        location === city
    ));
};