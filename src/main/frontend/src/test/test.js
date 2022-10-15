import React,{useEffect, useState} from 'react'
import axios from 'axios'

import { Paper } from '@mui/material'

function TestModule(){

    const [hello, setHello] = useState('')

    const serverURL = "http://loaclhost:8080"

    useEffect( () =>{
        axios.get(serverURL+"/test/hello")
        .then(res => setHello(res.data))
        .catch(err => console.log(err))
    },[])

    return (
        <>
            <Paper>
                백엔드에서 가져온 데이터입니다 : {hello}
            </Paper>
        </>
    )
}

export default TestModule