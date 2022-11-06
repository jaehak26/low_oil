import SidoSelect from './selectBar/lowTop20/sidoSelect'
import SigunSelect from './selectBar/lowTop20/sigunSelect'
import ProdcdSelect from './selectBar/lowTop20/prodcdSelect'
import CntSelect from './selectBar/lowTop20/cntSelect'

import SidoLowTop from './table/lowTop20/sidoLowTop'
function Lowtop20Component(){
    
    return (
        <>
        {/*display:flex는 정렬적용할 때 필요한듯 , 
        justifyContent:flex-end는 우측 정렬*/ }
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <SidoSelect></SidoSelect>
                <SigunSelect></SigunSelect>
                <ProdcdSelect></ProdcdSelect>
                <CntSelect></CntSelect>
            </div>
            <SidoLowTop></SidoLowTop>
        </>
    )

}

export default Lowtop20Component