
let opinetURL = "http://localhost:8080/api/opinet/"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

export async function getAvgAllPrice() {

    let URL = opinetURL + "avgAllPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}