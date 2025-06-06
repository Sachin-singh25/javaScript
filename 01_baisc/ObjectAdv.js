// lets move deeper in the Object 

const course = {
    title : "Java Script In Hindi ",
    Prizing:999,
    course_Instructor : " Hitesh Sir ",
    Plateform:"Youtube",
    Timeperiod:"9Months"

}

const {course_Instructor:Teacher}=course  // { kisko krna hai : apne marji ka naam agar taken name badda ho toh } = jaha se data extract krna hai 
console.log(Teacher);
//>> ise kahte hai  destructure of data in the code 

// jason mai values API  mai aati hai jason kuch nhi hai bas key : value payer hai jisme  key aur value dono string format mai hi hote hai 
/* example : 
{ 
" name ": " sachin SIngh "
"age " : "12"'
"worK / profession" : " Web deveplore / senior Data Anyalist "
}


dushra format hota hai API ke call ka Array mai 
[
{},
{},
{}
]

*/