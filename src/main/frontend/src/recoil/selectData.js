import {atom} from 'recoil'

export const avgSigunSelectData = atom({
    key: "avgSigunSelectData",
    default:{
        sidoCode:"01",
        sigunCode:""
    }
})