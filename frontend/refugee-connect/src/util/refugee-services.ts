



export const crearegistration = async(values : any) =>{

    try{

        console.log("Json Object", JSON.stringify(values));

        const response = await fetch('http://localhost:4000/refugee/register',{
            method:'POST',
            body: JSON.stringify(values)
        });

        const resData = await response.json();

        return "success";

    }catch(error){

        console.log(error);
        return "error";
    }

}