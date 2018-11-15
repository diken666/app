const https = require('https');
const http = require('http');
const cheerio = require('cheerio');
const fs = require('fs');
const rankingUrl = "https://api.bilibili.com/x/web-interface/ranking?jsonp=jsonp&rid=0&day=3&type=1&arc_type=0";
const originUrl = "https://api.bilibili.com/x/web-interface/ranking?jsonp=jsonp&rid=0&day=3&type=2&arc_type=0";
const bangumiUrl = "https://bangumi.bilibili.com/api/season/rank/list?day=3&season_type=1";
const cinemaUrl = "https://www.bilibili.com/index/rank/all-3-177.json";
const rookieUrl = "https://api.bilibili.com/x/web-interface/ranking?jsonp=jsonp&rid=0&day=3&type=3&arc_type=0";



let strPos = ["../data/ranking.json","../data/origin.json","../data/bangumi.json","../data/cinema.json","../data/rookie.json"];
let strUrl = [rankingUrl,originUrl,bangumiUrl,cinemaUrl,rookieUrl];
createServer();


function writeData(){
    let proArr = [];
    for(let i=0; i<5; i++){
        httpGet(strUrl[i],(data)=>{
            fs.writeFileSync(strPos[i],JSON.stringify(data));
            console.log(`${strPos[i]} 存储完毕！`);
        });
    }
    return proArr;
}
function createServer(){
    writeData();
    http.createServer((req,res)=>{
        res.end("ok");
    }).listen("1234");

}

function httpGet(url,callback){
    https.get(url,(res)=>{
        var html ="";
        res.on('data',chunk=>{
            html+=chunk;
        });
        res.on('end',function(){
            callback(JSON.parse(html)); //回调
        })
    }).on("error",err=>{
        console.log(err.message);
    })
}
