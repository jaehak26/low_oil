
let defaultData = {
    id:"",
    color:"",
    data:[]
}

let dataXY = (x,y)=>{return {x:x,y:y}}

let lineColor = ["hsl(324, 70%, 50%)",
    "hsl(327, 70%, 50%)",
    "hsl(318, 70%, 50%)",
    "hsl(293, 70%, 50%)"]

let lineId = ["휘발유", "고급 휘발유","경유","LPG"]

function stringToDate(string="20000101"){
    let day = string.slice(6,8)
    let month = string.slice(4,6)
    let year = string.slice(0,4)
    let date = year+"-"+month+"-"+day
    //console.log(date)
    return date
}

function allPriceData(data=[[]]){
    //data = [ [{DATE:"20001010", PRODCD:"B027", PRICE:"1660.70"},...], ... ]
    let lineArr  = []
    for(let idx=0; idx<4;idx++){
        let lineData = {...defaultData};
        let arrData = []    //=lineData.data
        lineData.id = lineId[idx];
        lineData.color= lineColor[idx];
        console.log(data[idx]?.length)
        for(let dataIdx=0; dataIdx<data[idx]?.length; dataIdx++){
            //7번 반복
            let date = stringToDate(data[idx][dataIdx]?.DATE)
            arrData.push(dataXY(date, data[idx][dataIdx]?.PRICE))
            //test
            //console.log(data[idx][dataIdx])
        }
        lineData.data = arrData
        lineArr.push(lineData)
    }
    console.log(lineArr)
    return lineArr
}

function priceData(data=[],selectIdx){
    //data = [{DATE:"20001010", PRODCD:"B027", PRICE:"1660.70"},...]
    console.log(data[0])
    let lineArr = []
    let lineData= {...defaultData}
    lineData.id = lineId[selectIdx]
    lineData.color = lineColor[selectIdx]

    let arrData=[]
    for(let idx=0; idx<data.length; idx++){
        let date = stringToDate(data[idx]?.DATE)
        arrData.push(dataXY(date,data[idx]?.PRICE))
    }
    lineData.data = arrData
    lineArr.push(lineData)

    return lineArr
}


function recentPriceData(data,selectIdx){
    //data = [{DATE:"20001010", PRODCD:"B027", PRICE:"1660.70"},...]
    //selectIdx = "all", 0-3
    if(selectIdx === "all"){
        return allPriceData(data)
    }else{
        return priceData(data, selectIdx)
    }
}

export default recentPriceData;