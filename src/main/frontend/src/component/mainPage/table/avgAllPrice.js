import * as api from "../../../openApi/opinetApi";
import {useState, useEffect} from 'react'
import { Table, TableCell, TableBody, TableRow, TableHead } from '@mui/material';
import { Container } from '@mui/material'
import { styled } from '@mui/system';

//CSS
const MyTableCell = styled(TableCell)({
  border: "none",
  textAlign:"center"
})


function diffColor(diff){
  if(diff>0){
    return({border: "none",
    color: "green",
    textAlign:"center"})
  }else if(diff<0){
    return ({border: "none",
    color: "red",textAlign:"center"})
  }else{
    return ({border: "none",textAlign:"center"})
  }
}

let data = {
  prodcd: "",
  prodnm: "",
  price:"",
  diff:""
}

//Main
function AvgAllPrice()
{
    //[]로 초기화해야 index접근이 가능함
    //null로 초기화하면 불가능
    //result = api데이터
    const [result, setResult] = useState([]);
    



    //마운트 시, return은 언마운트 시
    useEffect( () => {
      const getData = async () => {
        const res= await api.getAvgAllPrice();
        console.log(res.RESULT.OIL);
        setResult(res.RESULT.OIL); 
        

        //sort는 -1이면 a기 먼저 오고 1이면 b가 먼저 온다
        result.sort((a,b)=>{
            if(a["PRODCD"] < b["PRODCD"]){return -1;}
            else if(a["PRODCD"] > b["PRODCD"]){return 1;}
        })
        
        
        //splice(index, n)는 index부터 n개 삭제함
            
        console.log(result)
    }

      getData();
      console.log(result)

      for(let i =0 ; i<result.length; i++){
        if(result[i].PRODCD == "C004"){
          result.splice(i,1)
        }
        
      }
  
      const FirstDiffCell = styled(TableCell)(diffColor(result[0].DIFF))
      const SecondDiffCell = styled(TableCell)(diffColor(result[1].DIFF))
      const ThirdDiffCell = styled(TableCell)(diffColor(result[2].DIFF))
      const FourthDiffCell = styled(TableCell)(diffColor(result[3].DIFF))
      
      return (
          <>
          <Table>
          <TableHead>
            <TableRow>
              <MyTableCell>휘발유</MyTableCell>
              <MyTableCell>고급 휘발유</MyTableCell>
              <MyTableCell>경유</MyTableCell>
              <MyTableCell>LPG</MyTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <MyTableCell>{result[0].PRICE}</MyTableCell>
            <MyTableCell>{result[1].PRICE}</MyTableCell>
            <MyTableCell>{result[2].PRICE}</MyTableCell>
            <MyTableCell>{result[3].PRICE}</MyTableCell>
            </TableRow>
            <TableRow>
            <FirstDiffCell>{result[0].DIFF}</FirstDiffCell>
            <SecondDiffCell>{result[1].DIFF}</SecondDiffCell>
            <ThirdDiffCell>{result[2].DIFF}</ThirdDiffCell>
            <FourthDiffCell>{result[3].DIFF}</FourthDiffCell>
            </TableRow>
          </TableBody>
        </Table>  
      </>    
      )
    },[])




}

export default AvgAllPrice