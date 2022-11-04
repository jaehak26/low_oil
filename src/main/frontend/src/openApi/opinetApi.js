
let opinetURL = "http://localhost:8080/api/opinet/"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

//전국 주유소 평균가

export async function getAvgAllPrice() {

    let URL = opinetURL + "avgAllPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시도별 주유소 평균가

export async function getSidoPrice(sido="",prodcd="") {

    let URL = opinetURL + "avgSidoPrice?sido=" + sido + "&prodcd=" +prodcd;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시군구별 주유소 평균가

export async function getSigunPrice(sido="",sigun="",prodcd="") {

    let URL = opinetURL + "avgSigunPrice?sido="+sido
                +"&prodcd=" +prodcd +"&sigun=" +sigun;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 평균가

export async function getAvgRecentPrice(prodcd="") {

    let URL = opinetURL + "avgRecentPrice?prodcd="+prodcd

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 상표별 평균가

export async function getPollAvgRecentPrice(prodcd="",pollcd="") {

    let URL = opinetURL + "pollAvgRecentPrice?prodcd="+prodcd+"&pollcd="+pollcd

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 1주의 주간 평균 유가(전국/시도별)

export async function getAvgLastWeek(sido="",prodcd="") {

    let URL = opinetURL + "avgLastWeek?&sido="+ sido + "&prodcd=" +prodcd;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//지역별 최저가 주유소(top20)

export async function getLowTop20(area="",prodcd="",cnt="") {

    let URL = opinetURL + "lowTop20?area="+area
    +"&prodcd=" +prodcd + "&cnt=" +cnt ;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//반경내 주유소

export async function getAroundAll(x,y,radius,prodcd,sort) {

    let URL = opinetURL + "aroundAll?x="+x+"&y="+y
    +"&radius=" + radius + "&prodcd=" +prodcd + "&sort=" +sort

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//주유소 상세정보(id)

export async function getDetailById(id="") {

    let URL = opinetURL + "detailById?id="+id

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//상호로 주유소 검색

export async function getSearchByName(osnm="",area="") {

    let URL = opinetURL + "searchByName?osnm="+osnm
    +"&area=" + area;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//전국 면세유 주유소 평균가

export async function getTaxfreeAvgAllPrice() {

    let URL = opinetURL + "taxfreeAvgAllPrice?"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시도별 면세유 주유소 평균가

export async function getTaxfreeAvgSidoPrice(sido="",prodcd="") {

    let URL = opinetURL + "taxfreeAvgSidoPrice?sido="+ sido + "&prodcd=" + prodcd;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시군구별 면세유 주유소 평균가

export async function getTaxfreeAvgSigunPrice(sido="",sigun="",prodcd="") {

    let URL = opinetURL + "taxfreeAvgSigunPrice?sido="+sido
    +"&sigun=" + sigun + "&prodcd=" + prodcd;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 상표별 면세유 평균가

export async function getTaxPollAvgRecentPrice(prodcd="",pollcd="") {

    let URL = opinetURL + "taxPollAvgRecentPrice?prodcd="+prodcd+"&pollcd="+pollcd

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//면세유 최저가 top20

export async function taxfreeLowTop20(prodcd="",area="",cnt="") {

    let URL = opinetURL + "getTaxfreeLowTop20?prodcd="+prodcd
    +"&area=" + area + "&cnt=" + cnt;

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//지역코드

export async function getAreaCode(area="") {

    let URL = opinetURL + "areaCode?area="+area

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }
    console.log(area)
    return await data();
}

