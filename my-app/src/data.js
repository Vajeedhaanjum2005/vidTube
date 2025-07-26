export const API_KEY ='AIzaSyBB1I4kdx2_ZNOAKawuTo7aAy2b6WtmZbU';

export const value_converter = (value) =>{
     if(value>=1000000)
     {
        return Math.floor(value/1000000)+"M";

     }
     else if(value>=1000)
     {
        return Math.floor(value/1000000)+"k";
     }
     else{
        return value;
     }
}