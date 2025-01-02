import axios from "axios"

export const Addcart=(data)=>{
    axios.post("http://localhost:3000/addToCart",data).then((res)=>{
        alert("successfully add the cart")
    }).catch((error)=>{
        alert("ffgvjhbnm,")
    });
}