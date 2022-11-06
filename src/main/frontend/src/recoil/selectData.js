import {atom} from 'recoil'

export const avgSigunSelectData = atom({
    key: "avgSigunSelectData",
    default:{
        sidoCode:"01",
        sigunCode:""
    }
})

export const avgRecentPriceSelectData = atom({
    key:"avgRecentPriceSelectData",
    default:{
        selected:0,
        data:[]
    }
})

export const lowTop20SelectData = atom({
    key:'lowTop20SelectData',
    default:{
        sidoCode:"01",
        sigunCode:"",
        prodcd:"B027",
        cnt:5
    }
})