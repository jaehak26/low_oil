import SidoSelect from './selectBar/lowTop20/sidoSelect'
import SigunSelect from './selectBar/lowTop20/sigunSelect'


function Lowtop20Component(){
    
    return (
        <>
        {/*display:flex는 정렬적용할 때 필요한듯 , 
        justifyContent:flex-end는 우측 정렬*/ }
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <SidoSelect></SidoSelect>
                <SigunSelect></SigunSelect>
            </div>

        </>
    )

}

export default Lowtop20Component