'use strict'
let student={
    Daivd:80,
    vinoth:77,
    Daivya:88,
    lshitha:95,
    Thomas:68,
}
let sum=student.Daivd+student.vinoth+student.Daivya+student.lshitha+student.Thomas+student;
let avg=sum/5
if (avg<60) {
    console.log("F");
} else {
    if (avg<70) {
        console.log("D");
    } else {
        if (avg<80) {
            console.log("C");
        } else {
            if (avg<90) {
                console.log("B");
            } else {
                console.log("A");  
            }  
        }
    }   
}