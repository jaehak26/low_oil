
import {useState, useEffect} from 'react'
import { Table, TableCell, TableBody, TableRow, TableHead, MenuItem } from '@mui/material';
import { Container } from '@mui/material'
import { styled } from '@mui/system';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import {lowTop20SelectData} from '../../../../recoil/selectData'
import {getLowTop20} from '../../../../openApi/opinetApi'
import { useRecoilState } from "recoil";
import {lowTop20MapData} from '../../../../recoil/mapData'

import Map from './lowtopMap'
import proj4 from 'proj4/dist/proj4';

//CSS
const MyTableCell = styled(TableCell)({
  border: "none",
  textAlign:"center"

})

export const lowtop20ToTable = async(areacd, prodcd, cnt)=>{
    const res = await getLowTop20(areacd, prodcd, cnt)
    let arr = res?.RESULT.OIL
    arr.sort((a,b)=>{
        //자리 바꾸기 x
        if(a["PRICE"]<b["PRICE"]){return -1}
        //자리바꾸기 o
        else if(a["PRICE"]>b["PRICE"]){return 1}
        else if(a["OS_NM"]<b["OS_NM"]){return -1}
        else if(a["OS_NM"]>b["OS_NM"]){return 1}
    })
    //console.log(arr)
    return await arr
}



function SidoLowtop20(){


    const [selected, setSelected] = useRecoilState(lowTop20SelectData)
    const [lowtopData, setLowtopData] = useState([])

    const [dialogOpen, setdialogOpen] = useState(false)
    const [dialogIdx, setDialogIdx] = useState(0)

    const [lowtopMapData, setLowtopMapData] = useRecoilState(lowTop20MapData)

    useEffect(()=>{
        
        if(selected.sigunCode===""){
            const getData = async ()=> {
                const res = await lowtop20ToTable(selected.sidoCode,selected.prodcd,selected.cnt)
                setLowtopData(res)
            }
            getData()
            
        }else if(selected.sigunCode!==""){
            const getData = async ()=> {
                const res = await lowtop20ToTable(selected.sigunCode,selected.prodcd,selected.cnt)
                setLowtopData(res)
            }
            getData()
        }
        //console.log(lowtopData)
    },[selected])

    const fromTM128ToLatLng = (mapx = 0, mapy = 0) => {
        let KATEC =
          '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43';
      
          KATEC = '+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43'
        let WGS84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

        let [lng, lat] = proj4(KATEC, WGS84, [mapx, mapy]);
        return [lat, lng];
      };

    //cell 클릭 함수
    const onClickCell = (idx)=>{
        setdialogOpen(true)
        setDialogIdx(idx)
        //console.log(dialogIdx)

        let [lat,lng] = fromTM128ToLatLng(lowtopData[idx]?.GIS_X_COOR,lowtopData[idx]?.GIS_Y_COOR)

        setLowtopMapData({...lowtopMapData,
            x:lat,
            y:lng,
            osNm:lowtopData[idx]?.OS_NM})
        console.log(lowtopMapData)
    }


    return(<>
        <Table>
            <TableBody>
            {lowtopData?.map((arrData,idx)=>{ 
                return(
                <TableRow>
                    <MyTableCell value={idx}>
                        <div onClick={()=>{onClickCell(idx)}}>
                            {arrData.OS_NM}
                        </div>
                    </MyTableCell>
                    <MyTableCell>{arrData.PRICE}</MyTableCell>
                </TableRow>)
                    })}
            </TableBody>
        </Table>
    <Dialog open={dialogOpen}
    onBackdropClick={()=>{setdialogOpen(false)}}
    onClose={(reason="backdropClick")=>{setdialogOpen(false)}}
    fullWidth={true}>
        
        <DialogActions>
            <Map></Map>
        </DialogActions>
    </Dialog>
</>)
}
export default SidoLowtop20