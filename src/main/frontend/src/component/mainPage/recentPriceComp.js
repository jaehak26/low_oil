import React, { useState,useEffect } from 'react'

import RecentPriceSelect from './selectBar/avgRecentPrice/recentPriceSelect'



function AvgRecentPriceComponent(){
    
    return (
        <>
        {/*display:flex는 정렬적용할 때 필요한듯 , 
        justifyContent:flex-end는 우측 정렬*/ }
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <RecentPriceSelect></RecentPriceSelect>
            </div>
            
        </>
    )

}

export default AvgRecentPriceComponent