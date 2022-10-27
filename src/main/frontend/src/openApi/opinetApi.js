
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

export async function getSidoPrice() {

    let URL = opinetURL + "avgSidoPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시군구별 주유소 평균가

export async function getSigunPrice() {

    let URL = opinetURL + "avgSigunPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 평균가

export async function getAvgRecentPrice() {

    let URL = opinetURL + "avgRecentPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 상표별 평균가

export async function getPollAvgRecentPrice() {

    let URL = opinetURL + "pollAvgRecentPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 1주의 주간 평균 유가(전국/시도별)

export async function getAvgLastWeek() {

    let URL = opinetURL + "avgLastWeek"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//지역별 최저가 주유소(top20)

export async function getLowTop20() {

    let URL = opinetURL + "lowTop20"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//반경내 주유소

export async function getAroundAll() {

    let URL = opinetURL + "aroundAll"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//주유소 상세정보(id)

export async function getDetailById() {

    let URL = opinetURL + "detailById"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//상호로 주유소 검색

export async function getSearchByName() {

    let URL = opinetURL + "searchByName"

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

    let URL = opinetURL + "taxfreeAvgAllPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시도별 면세유 주유소 평균가

export async function getTaxfreeAvgSidoPrice() {

    let URL = opinetURL + "taxfreeAvgSidoPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//시군구별 면세유 주유소 평균가

export async function getTaxfreeAvgSigunPrice() {

    let URL = opinetURL + "taxfreeAvgSigunPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//최근 7일간 전국 일일 상표별 면세유 평균가

export async function getTaxPollAvgRecentPrice() {

    let URL = opinetURL + "taxPollAvgRecentPrice"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//면세유 최저가 top20

export async function taxfreeLowTop20() {

    let URL = opinetURL + "getTaxfreeLowTop20"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

//지역코드

export async function getAreaCode() {

    let URL = opinetURL + "areaCode"

    const data = async() => {
        const respose = await fetch(URL, requestOptions)
        const result = await respose.json()
        console.log(result)
        return result
    }

    return await data();
}

