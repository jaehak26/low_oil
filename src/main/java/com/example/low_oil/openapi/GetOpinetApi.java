package com.example.low_oil.openapi;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.low_oil.OpenApiCode;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/api/opinet")
public class GetOpinetApi {

    private OpenApiCode cd = new OpenApiCode();
    private String code = cd.getOpinetCode();
    private String cookie = cd.getOpinetCookie();

    //전국 주유소 평균가격
    @GetMapping("/avgAllPrice")
    public String getAvgAllPrice() {
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri("http://www.opinet.co.kr/api/avgAllPrice.do?out=json&code="+code)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //시도별 주유소 평균가격
    @GetMapping("/avgSidoPrice")
    public String getSidoPrice(@RequestParam(value ="sido",required = false) String sido,
                                  @RequestParam(value ="prodcd",required = false) String prodcd) {

        String uri = "http://www.opinet.co.kr/api/avgSidoPrice.do?out=json&code="+code
                + "&sido=" + sido + "&prodcd=" +prodcd;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //시군구별 주유소 평균가격
    @GetMapping("/avgSigunPrice")
    public String getSigunPrice(@RequestParam(value ="sido") String sido,
                               @RequestParam(value ="prodcd", defaultValue = "") String prodcd,
                                @RequestParam(value ="sigun", defaultValue = "") String sigun) {

        String uri = "http://www.opinet.co.kr/api/avgSigunPrice.do?out=json&code="+code
                + "&sido=" + sido + "&prodcd=" +prodcd +"&sigun=" +sigun;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }


    //최근 7일간 전국 일일 평균가격
    @GetMapping("/avgRecentPrice")
    public String getAvgRecentPrice(@RequestParam(value ="prodcd", defaultValue = "") String prodcd) {

        String uri = "http://www.opinet.co.kr/api/avgRecentPrice.do?out=json&code="+code
                + "&prodcd=" +prodcd ;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    // 최근 7일간 전국 일일 상표별 평균가격
    @GetMapping("/pollAvgRecentPrice")
    public String getPollAvgRecentPrice(@RequestParam(value ="prodcd", defaultValue = "") String prodcd,
                                        @RequestParam(value ="pollcd", defaultValue = "") String pollcd) {

        String uri = "http://www.opinet.co.kr/api/pollAvgRecentPrice.do?out=json&code="+code
                + "&prodcd=" +prodcd + "&pollcd=" + pollcd;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
    // 최근 1주의 주간 평균유가(전국/시도별)
    @GetMapping("/avgLastWeek")
    public String getAvgLastWeek(@RequestParam(value ="sido", defaultValue = "") String sido,
                               @RequestParam(value ="prodcd", defaultValue = "") String prodcd) {

        String uri = "http://www.opinet.co.kr/api/avgLastWeek.do?out=json&code="+code
                + "&sido=" + sido + "&prodcd=" +prodcd;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping("/lowTop20")
    //지역별 최저가 주유소(TOP20)
    public String getLowTop20(@RequestParam(value ="area", defaultValue = "") String area,
                                 @RequestParam(value ="prodcd") String prodcd,
                              @RequestParam(value ="cnt", defaultValue = "") String cnt){

        String uri = "http://www.opinet.co.kr/api/lowTop10.do?out=json&code="+code
                + "&area=" + area + "&prodcd=" +prodcd + "&cnt=" +cnt ;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping("/aroundAll")
    //반경내 주유소
    public String getAroundAll(@RequestParam(value ="radius") String radius,
                              @RequestParam(value ="prodcd") String prodcd,
                              @RequestParam(value ="sort") String sort,
                               @RequestParam(value ="x") String x,
                               @RequestParam(value ="y") String y) {

        String uri = "http://www.opinet.co.kr/api/aroundAll.do?out=json&code="+code
                + "&radius=" + radius + "&prodcd=" +prodcd + "&sort=" +sort + "&x=" + x + "&y=" + y;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //주유소 상세정보(ID)
    @GetMapping("/detailById")
    public String getDetailById(@RequestParam(value ="id") String id) {

        String uri = "http://www.opinet.co.kr/api/detailById.do?out=json&code="+code
                +"&id=" + id;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping("/searchByName")
    //상호로 주유소 검색
    public String getSearchByName(@RequestParam(value ="osnm") String osnm,
                                  @RequestParam(value ="area", defaultValue = "") String area) {

        String uri = "http://www.opinet.co.kr/api/searchByName.do?out=json&code="+code
                +"&osnm=" + osnm + "&area=" + area;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //전국 면세유 주유소 평균가격
    @GetMapping("/taxfreeAvgAllPrice")
    public String getTaxfreeAvgAllPrice() {

        String uri = "http://www.opinet.co.kr/api/taxfreeAvgAllPrice.do?out=json&code="+code;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //시도별 면세유 주유소 평균가격
    @GetMapping("/taxfreeAvgSidoPrice")
    public String getTaxfreeAvgSidoPrice(@RequestParam(value ="sido", defaultValue = "") String sido,
                                         @RequestParam(value ="prodcd", defaultValue = "") String prodcd){
        String uri = "http://www.opinet.co.kr/api/taxfreeAvgSidoPrice.do?out=json&code="+code
                + "&sido=" + sido + "&prodcd=" + prodcd;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    // 시군구별 면세유 주유소 평균가격
    @GetMapping("/taxfreeAvgSigunPrice")
    public String getTaxfreeAvgSigunPrice(@RequestParam(value ="sido") String sido,
                                         @RequestParam(value ="sigun", defaultValue = "") String sigun,
                                          @RequestParam(value ="prodcd", defaultValue = "") String prodcd){
        String uri = "http://www.opinet.co.kr/api/taxfreeAvgSigunPrice.do?out=json&code="+code
                + "&sido=" + sido + "&sigun=" + sigun + "&prodcd=" + prodcd;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping("/taxPollAvgRecentPrice")
    //최근 7일간 전국 일일 상표별 면세유 평균가격
    public String getTaxPollAvgRecentPrice(@RequestParam(value ="pollcd", defaultValue = "") String pollcd,
                                          @RequestParam(value ="prodcd", defaultValue = "") String prodcd){
        String uri = "http://www.opinet.co.kr/api/taxPollAvgRecentPrice.do?out=json&code="+code
                + "&pollcd=" + pollcd + "&prodcd=" + prodcd ;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping("/taxfreeLowTop20")
    //면세유 최저가 top20
    public String getTaxfreeLowTop20(@RequestParam(value ="prodcd") String prodcd,
                                     @RequestParam(value ="area", defaultValue = "") String area,
                                     @RequestParam(value ="cnt", defaultValue = "") String cnt){
        String uri = "http://www.opinet.co.kr/api/taxfreeLowTop20.do?out=json&code="+code
                + "&prodcd=" + prodcd + "&area=" + area + "&cnt=" + cnt;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //지역코드
    @GetMapping("/areaCode")
    //지역코드
    public String getAreaCode(@RequestParam(value ="area", defaultValue = "") String area){
        String uri = "http://www.opinet.co.kr/api/areaCode.do?out=json&code="+code
                + "&area=" + area ;
        WebClient webClient = WebClient.create();

        return  webClient.get()
                .uri(uri)
                .header("Cookie",
                        cookie)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
