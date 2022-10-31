import {getAvgAllPrice} from "../openApi/opinetApi"
import { Paper } from '@mui/material'
import {useState, useEffect} from 'react'
function TestApi(){

    //[]로 초기화해야 index접근이 가능함
    //null로 초기화하면 불가능
const [result, setResult] = useState([]);
const [price, setPrice] = useState(null);
const [diff, setDiff] = useState(null)


useEffect( () => {
    const get = async () => {
        const res= await getAvgAllPrice();
            console.log(res.RESULT.OIL);
            setResult(res.RESULT.OIL); 
            console.log(result)
    }
    get();
          
},[])

    return (
        <>
            <Paper>
                <div>
                    휘발유 : {result[0]?.PRICE} , {result[0].DIFF}
                </div>
                <h2>안전연산자는 신이야...!</h2>
            </Paper>
        </>
    )
}


export default TestApi