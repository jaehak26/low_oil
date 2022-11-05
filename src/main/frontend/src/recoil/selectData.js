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