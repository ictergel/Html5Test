$(function () {
    pageLoad();
    draw1("can2");
    draw24("can3");
    draw2("can4");
    draw25("can5");
    draw26("can6");
    draw5("can7");
    draw15("can8");
    HelloWordCanvas("can9");
    initCanvasMouseEvent();
    initCanvasMouseEvent2();
    drawLinerGaradient();
    drawRadialGaradient();
})
function $$(id) {
    return document.getElementById(id);
}
//画四分之三圆
function pageLoad() {
    var can = $$('can1');
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.arc(200, 150, 100, 0, Math.PI / 2 * 3, false);
    cans.lineTo(200, 150);
    cans.lineTo(300, 150);
    cans.closePath();
    cans.fillStyle = 'green';
    cans.fill();
//        cans.fillStyle = "aqua";
//        cans.strokeStyle = "rgba(255,0,255,0.5)";
//
//        cans.fillRect(200,50,100,100);
//        cans.strokeRect(400,200,50,50);
}
//画菊花
function draw1(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    var dx = 150;
    var dy = 150;
    var s = 100;
    context.beginPath();
    context.fillStyle = 'rgb(100,255,100)';
    context.strokeStyle = 'rgb(0,0,100)';
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15 * 11;
    for (var i = 0; i < 30; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}
//画赛贝尔曲线
function draw24(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext("2d");

    context.moveTo(50, 50);
    context.bezierCurveTo(50, 50, 150, 50, 150, 150);
    context.stroke();
    context.quadraticCurveTo(150, 250, 250, 250);
    context.stroke();
}
//赛贝尔曲线菊花
function draw2(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEEFF";
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    var dx = 150;
    var dy = 150;
    var s = 100;
    context.beginPath();
    context.globalCompositeOperation = 'and';
    context.fillStyle = 'aqua';
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15 * 11;
    context.moveTo(dx, dy);
    for (var i = 0; i < 30; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}
//画渐变
function draw25(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext('2d');
    var g1 = context.createLinearGradient(0, 0, 0, 300);

    g1.addColorStop(0, 'rgb(255,0,0)'); //红
    g1.addColorStop(0.5, 'rgb(0,255,0)');//绿
    g1.addColorStop(1, 'rgb(0,0,255)'); //蓝

    //可以把lg对象理解成GDI中线性brush
    context.fillStyle = g1;
    //再用这个brush来画正方形
    context.fillRect(0, 0, 400, 300);
}
function draw26(id) {
    //同一个圆心画球型
    /*var canvas = document.getElementById(id);
     if (canvas == null)
     return false;
     var context = canvas.getContext('2d');
     var g1 = context.createRadialGradient(200, 150, 0, 200, 150, 100);
     g1.addColorStop(0.1, 'rgb(255,0,0)');
     g1.addColorStop(1, 'rgb(50,0,0)');
     context.fillStyle = g1;
     context.beginPath();
     context.arc(200, 150, 100, 0, Math.PI * 2, true);
     context.closePath();
     context.fill();*/

    //不同圆心看径向渐变模型
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext('2d');
    var g1 = context.createRadialGradient(100, 150, 10, 300, 150, 50);
    g1.addColorStop(0.1, 'rgb(255,0,0)');
    g1.addColorStop(0.5, 'rgb(0,255,0)');
    g1.addColorStop(1, 'rgb(0,0,255)');
    context.fillStyle = g1;
    context.fillRect(0, 0, 400, 300);
}
function draw5(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    context.save(); //保存了当前context的状态
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    context.fillStyle = "rgba(255,0,0,0.1)";
    //平移 缩放 旋转  1 2 3
    context.translate(100, 100);
    context.scale(0.5, 0.5);
    context.rotate(Math.PI / 4);
    context.fillRect(0, 0, 100, 100);
    context.restore(); //恢复到刚刚保存的状态,保存恢复只能使用一次
    context.save(); //保存了当前context的状态
    context.fillStyle = "rgba(255,0,0,0.2)";
    //平移 旋转 缩放 1 3 2
    context.translate(100, 100);
    context.rotate(Math.PI / 4);
    context.scale(0.5, 0.5);
    context.fillRect(0, 0, 100, 100);
    context.restore(); //恢复到刚刚保存的状态
    context.save(); //保存了当前context的状态
    context.fillStyle = "rgba(255,0,0,0.3)";
    //缩放 平移 旋转 2 1 3
    context.scale(0.5, 0.5);
    context.translate(100, 100);
    context.rotate(Math.PI / 4);
    context.fillRect(0, 0, 100, 100);
    context.restore(); //恢复到刚刚保存的状态
    context.save(); //保存了当前context的状态
    context.fillStyle = "rgba(255,0,0,0.4)";
    //缩放 旋转 平移  2 3  1
    context.scale(0.5, 0.5);
    context.rotate(Math.PI / 4);
    context.translate(100, 100);
    context.fillRect(0, 0, 100, 100);
    context.restore(); //恢复到刚刚保存的状态
    context.save(); //保存了当前context的状态
    context.fillStyle = "rgba(255,0,0,0.5)";
    //旋转 平移 缩放  3 1 2
    context.rotate(Math.PI / 4);
    context.translate(100, 100);
    context.scale(0.5, 0.5);
    context.fillRect(0, 0, 100, 100);
    context.restore(); //恢复到刚刚保存的状态
    context.save(); //保存了当前context的状态
    context.fillStyle = "rgba(255,0,0,1)";
    //旋转 缩放 平移   3 2 1
    context.rotate(Math.PI / 4);
    context.scale(0.5, 0.5);
    context.translate(100, 100);
    context.fillRect(0, 0, 100, 100);
    //实验表明应该移动的是坐标轴
    //实验表明缩放的是坐标轴比例
    //实验表明旋转的是坐标轴
    //综合上述，因此平移 缩放 旋转 三者的顺序不同都将画出不同的结果
}
function draw15(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    context.fillStyle = "pink";
    context.fillRect(0, 0, 400, 300);
    image = new Image();
    image.onload = function () {
        drawImg(context, image);
    }
    image.src = "../images/bg.jpg"
}
function drawImg(context, image) {
    //圆形裁剪区
    //createCircleClip(context)
    //星形裁剪区
    create5StarClip(context);
    context.drawImage(image, 0, 0);
}
function createCircleClip(context) {
    context.beginPath();
    context.arc(200, 150, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
}
function create5StarClip(context) {
    var n = 0;
    var dx = 200;
    var dy = 150;
    var s = 150;
    context.beginPath();
    context.fillStyle = "blue";
    context.strokeStyle = "blue"
    context.moveTo(200,0);
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 5 * 4;
    for (var i = 0; i < 5; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        console.log("x:" +  x * s + "; y :" +  y * s);
        context.lineTo(dx - x * s, dy - y * s);
    }
    context.closePath();
    context.clip();
}
function line() {
    var mycanvas  = document.getElementById("can10");
    var mycontext = mycanvas.getContext('2d');
    var x;
    var y;
    var x2;
    var y2;
    var r;
    var g;
    var b;
    x=Math.floor(Math.random()*190) + Math.floor(Math.random()*190);
    y=Math.floor(Math.random()*190) + Math.floor(Math.random()*190);
    x2=Math.floor(Math.random()*190) + Math.floor(Math.random()*190);
    y2=Math.floor(Math.random()*190) + Math.floor(Math.random()*190);
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    mycontext.moveTo(x, y);
    mycontext.lineTo(x2, y2);
    mycontext.strokeStyle='rgb(' + r + ',' + g +  ',' + b + ')';
    mycontext.lineWidth=Math.floor(Math.random()*6);
    mycontext.stroke();
    mycontext.save();
    mycontext.restore();
}
//setInterval(line, 1000);
function HelloWordCanvas(id){
    var canvas = document.getElementById(id);
    canvas.width = 500;
    canvas.height = 300;
    if (canvas == null)
        return false;
    var content = canvas.getContext("2d");
    content.font = "38pt Arial";
    content.fillStyle = "antiquewhite";
    content.strokeStyle = "blue";
    content.fillText("Hello Hory!",canvas.width/2 - 150,canvas.height/2 + 15);
    content.strokeText("Hello Ictergel!",canvas.width/2 - 150,canvas.height/2 + 50);
}

//时钟
var FONT_HEIGHT = 15;
var MARGIN,HAND_TRUCTION,HOUR_HAND_TRUCTION,NUMBER_SPACING,RADIUS, HAND_RADIUS;
function drawClock(){
    var canvas = document.getElementById("can11");
    var content = canvas.getContext("2d");
        MARGIN = 35;
        HAND_TRUCTION = canvas.width/25;
        HOUR_HAND_TRUCTION = canvas.width/10;
        NUMBER_SPACING =20,RADIUS = 200;
        HAND_RADIUS = RADIUS + NUMBER_SPACING;
    content.clearRect(0,0,canvas.width,canvas.height);
    drawClockCircle(canvas,content);
    drawClockCenter(canvas,content);
    drawClockHands(canvas,content);
    drawClockPoint(canvas,content);
    drawClockNumberLabels(canvas,content);

}
loop = setInterval(drawClock,1000);
function drawClockCircle(canvas,content){
    content.beginPath();
    content.arc(canvas.width/2,canvas.height/2,RADIUS,0,Math.PI*2,true);
    content.stroke();
}

function drawClockPoint(canvas,content){

    for(var i=0;i<60;i++){
        content.beginPath();
        var r=Math.floor(Math.random()*255);
        var g=Math.floor(Math.random()*255);
        var b=Math.floor(Math.random()*255);
        content.fillStyle = 'rgb(' + r + ',' + g +  ',' + b + ')';
        content.arc(Math.sin(Math.PI/30*(i+1))*RADIUS + canvas.width/2,Math.cos(Math.PI/30*(i+1))*RADIUS + canvas.height/2,3,0,Math.PI*2,true);
        content.fill();
    }
}
function drawClockNumberLabels(canvas,content){
    var numberLabels = [1,2,3,4,5,6,7,8,9,10,11,12], angel = 0, numberWidth = 0;
    numberLabels.forEach(function(numberLabel){
        angel = Math.PI/6*(numberLabel - 3);
        numberWidth = content.measureText(numberLabel).width;
        content.fillStyle = 'black';
        content.fillText(numberLabel,
            canvas.width/2 + Math.cos(angel)*HAND_RADIUS - numberWidth/2,
            canvas.height/2 + Math.sin(angel)*HAND_RADIUS + FONT_HEIGHT/3 );
    })
}
function drawClockCenter(canvas,content){
    content.beginPath();
    content.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2,true);
    content.fill();
}
function drawClockHand(log,isHour,content,canvas){
    var angel = Math.PI*2*log/60 - Math.PI/2;
    var handRadius = isHour?RADIUS - HAND_TRUCTION - HOUR_HAND_TRUCTION:RADIUS - HAND_TRUCTION;
    content.moveTo(canvas.width/2,canvas.height/2);
    content.lineTo(canvas.width/2 +  Math.cos(angel)*handRadius,canvas.height/2 + Math.sin(angel)*handRadius);
    content.stroke();
}
function drawClockHands(canvas,content){
    var date = new Date();
    var hour = date.getHours();
        hour = hour>12?hour-12:hour;
    drawClockHand(hour*5 + date.getMinutes()/60*5,true,content,canvas);
    drawClockHand(date.getMinutes(),false,content,canvas);
    drawClockHand(date.getSeconds(),false,content,canvas);
}


//mouseOver事件
function  windowsToCanvas(canvas ,x,y){
    var bbox = canvas.getBoundingClientRect();
    console.log("bbox-left:" + bbox.left + " ; x:" + x + ";<br/> bbox-top:" + bbox.top + " ;y:" + y);
     return {x:x - bbox.left-2.5,
              y:y - bbox.top-2};
}
function drawMouseEventBackground(canvas){
    var context = canvas.getContext("2d");
    //var heightNum = Math.floor(canvas.height/40) + 1;
    //var widthNum = Math.floor(canvas.width/40) + 1;
    //for(var i=0;i<heightNum;i++){
    //    content.beginPath();
    //    content.strokeStyle = "red";
    //    content.moveTo(0,i*40);
    //    content.lineTo(canvas.width,i*40);
    //    content.stroke();
    //}
    //for(var i=0;i<widthNum;i++){
    //    content.beginPath();
    //    content.strokeStyle = "red";
    //    content.moveTo(i*40,0);
    //    content.lineTo(i*40,canvas.height);
    //    content.stroke();
    //}

    context.strokeStyle = "lightgray";
    context.lineWidth = 0.5;
    for (var i = 10 + 0.5; i <context.canvas.width; i += 10) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }
    for (var i = 10 + 0.5; i <context.canvas.height; i += 10) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }
}
function drawGuideLine(canvas,x,y){
    var content = canvas.getContext("2d");
    content.beginPath();
    content.strokeStyle = "green";
    content.moveTo(0,y);
    content.lineTo(canvas.width,y);
    content.stroke();
    content.moveTo(x,0);
    content.lineTo(x,canvas.height);
    content.stroke();
    content.beginPath();
    content.fillStyle = "aqua";
    content.arc(x,y,5,0,Math.PI*2,true);
    content.fill();

}
function initCanvasMouseEvent(){
    var canvas12 = document.getElementById("can12");
    canvas12.onmousemove = function(e){
        e.preventDefault();
        canvas12.getContext("2d").clearRect(0,0,canvas12.width,canvas12.height);
        //canvas12.className = "CursorHand";
        var location = windowsToCanvas(canvas12, e.clientX, e.clientY);
        drawMouseEventBackground(canvas12);
        drawGuideLine(canvas12,location.x,location.y);
    }
}

function initCanvasMouseEvent2(){
    var canvas13 = document.getElementById("can13");
    var content = canvas13.getContext("2d");
    canvas13.onmousemove = function(e){
        e.preventDefault();
        canvas13.getContext("2d").clearRect(0,0,canvas13.width,canvas13.height);
        var location = windowsToCanvas(canvas13, e.clientX, e.clientY);
        content.beginPath();
        content.fillStyle = "aqua";
        content.arc(location.x,location.y,50,0,Math.PI*2,true);
        content.fill();
    }
}

function drawLinerGaradient(){
    var canvas14 = document.getElementById("can14");
    var content14 = canvas14.getContext("2d");
    var linerGradient = content14.createLinearGradient(0,0,canvas14.width/2,0);
    linerGradient.addColorStop(0,"blue");
    linerGradient.addColorStop(0.25,"green");
    linerGradient.addColorStop(0.5,"white");
    linerGradient.addColorStop(0.75,"purple");
    linerGradient.addColorStop(1,"yellow");
    content14.fillStyle = linerGradient;
    content14.fillRect(0,0,canvas14.width/2,canvas14.height/2);

    var linerGradient2 = content14.createLinearGradient(canvas14.width/2,0,canvas14.width/2,canvas14.height/2);
    linerGradient2.addColorStop(0,"blue");
    linerGradient2.addColorStop(0.25,"green");
    linerGradient2.addColorStop(0.5,"white");
    linerGradient2.addColorStop(0.75,"purple");
    linerGradient2.addColorStop(1,"yellow");
    content14.fillStyle = linerGradient2;
    content14.fillRect(canvas14.width/2,0,canvas14.width,canvas14.height/2);

    var linerGradient3 = content14.createLinearGradient(0,canvas14.height/2,0,canvas14.height);
    linerGradient3.addColorStop(0,"blue");
    linerGradient3.addColorStop(0.1,"green");
    linerGradient3.addColorStop(0.2,"white");
    linerGradient3.addColorStop(0.4,"purple");
    linerGradient3.addColorStop(1,"yellow");
    content14.fillStyle = linerGradient3;
    content14.fillRect(0,canvas14.height/2,canvas14.width/2,canvas14.height);

    var linerGradient4 = content14.createLinearGradient(canvas14.width/2,canvas14.height/2,canvas14.width,canvas14.height);
    linerGradient4.addColorStop(0,"blue");
    linerGradient4.addColorStop(0.25,"green");
    linerGradient4.addColorStop(0.5,"white");
    linerGradient4.addColorStop(0.75,"purple");
    linerGradient4.addColorStop(1,"yellow");
    content14.fillStyle = linerGradient4;
    content14.fillRect(canvas14.width/2,canvas14.height/2,canvas14.width,canvas14.height);
}


function drawRadialGaradient(){
    var canvas15 = document.getElementById("can15");
    var content15 = canvas15.getContext("2d");
    var linerGradient = content15.createRadialGradient(canvas15.width/2,canvas15.height,20,canvas15.width/2,0,100);
    linerGradient.addColorStop(0,"blue");
    linerGradient.addColorStop(0.25,"green");
    linerGradient.addColorStop(0.5,"white");
    linerGradient.addColorStop(0.75,"purple");
    linerGradient.addColorStop(1,"yellow");
    content15.fillStyle = linerGradient;
    content15.fillRect(0,0,canvas15.width,canvas15.height);

    var linerGradient2 = content15.createRadialGradient(0,canvas15.height/2,20,canvas15.width,canvas15.height/2,100);
    linerGradient2.addColorStop(0,"blue");
    linerGradient2.addColorStop(0.25,"green");
    linerGradient2.addColorStop(0.5,"white");
    linerGradient2.addColorStop(0.75,"purple");
    linerGradient2.addColorStop(1,"yellow");
    content15.fillStyle = linerGradient2;
    content15.fillRect(0,0,canvas15.width,canvas15.height);

}
