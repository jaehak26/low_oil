import React,{useState, useEffect} from 'react'

import RecentPriceLine from './recentPriceLine' //그래프
import recentPriceData from './recentPriceData' //데이터를 그래프형으로 변경

import {getAvgRecentPrice} from '../../../../openApi/opinetApi'

import {useRecoilState} from 'recoil'
import {avgRecentPriceSelectData} from '../../../../recoil/selectData'

//import RecentPriceGraph from './recentPriceGraph'
let oilCd = ["B027", "B034","D047", "K015"]

function RecentPrice(){
    //api불러와서 데이터 정렬, 배열에 넣기
    const [apiArr, setApiArr] = useState([])
    const [coil,setCoil] = useRecoilState(avgRecentPriceSelectData)
    const [graphData, setGraphData] = useState([])


    useEffect( ()=>{
        if(coil.selected === "all"){
            const getData = async ()=>{
                let arr = []
                const res1 = await getAvgRecentPrice(oilCd[0])
                arr.push(res1?.RESULT.OIL)
                
                const res2 = await getAvgRecentPrice(oilCd[1])
                arr.push(res2?.RESULT.OIL)
    
                const res3 = await getAvgRecentPrice(oilCd[2])
                arr.push(res3?.RESULT.OIL)
    
                const res4 = await getAvgRecentPrice(oilCd[3])
                arr.push(res4?.RESULT.OIL)
    
                setApiArr(arr)
            }
            getData()

            setGraphData(()=>recentPriceData(apiArr,coil.selected))
        }else{
            const getData = async ()=>{
                const res1 = await getAvgRecentPrice(oilCd[coil?.selected])
    

                setApiArr(res1?.RESULT.OIL)
            }
            getData()
            console.log(apiArr)        
        }
    
    },[coil.selected])

    //그래프 빠르게 렌더링
    useEffect(()=>{
        let gData = recentPriceData(apiArr,coil?.selected)
        setGraphData(gData)
    },[apiArr])



    return (
        <>
        <div style={{height:"60vh"}}>           
            <RecentPriceLine data={graphData}></RecentPriceLine>
        </div>
        
        </>
    )
}

export default RecentPrice