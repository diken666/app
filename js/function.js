function toHtml(data){
    let result = data.data.list;
    let str = "";
    for(let i=0;i<result.length;i++){
        str += `<li class="rank-item"><div class="num">${i+1}</div><div class="content"><div class="img">`+
            `<a href="#"><img src="${result[i].pic}@143w_88h.jpg" alt="image"></a></div><div class="info"><a class="title" href="#">${result[i].title}</a>`+
            `<div class="detail"><div class="see"><i class="see-icon"></i><span class="see-num">${result[i].video_review}</span></div>`+
            `<div class="author"><i class="a-icon"></i><a href="#" class="name">${result[i].author}</a></div></div>`+
            `<div class="pts"><span class="scores">${result[i].pts}</span><p class="word">综合得分</p></div></div></div></li>`
    }
    document.getElementById("rank-list").innerHTML  =  str;
}

function showRanking(i){
    if(i===0){ getAndShow(i) }
    else if(i===1){ getAndShow(i) }
    else if(i===2){ getAndShow(i) }
    else if(i===3){ getAndShow(i) }
    else{ getAndShow(i) }
}

function getAndShow(i){
    let strUrl = ["./data/ranking.json","./data/origin.json","./data/bangumi.json","./data/cinema.json","./data/rookie.json"];
    $.get(strUrl[i],(data)=>{
        toHtml(data);
    });
    console.log("show"+i);
}
