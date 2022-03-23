<style>
#a0, #a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9 {
z-index: 2000;width: 9px; clip: rect(0px 9px 9px 0px); position: absolute; top: -24px; height: 25px}
#a0 {left: -24px}
#a1 {left: 96px}
#a2 {left: 216px}
#a3 {left: 338px}
#a4 {left: 460px}
#a5 {left: 640px}
#a6 {left: -24px}
#a7 {left: 200px}
#a8 {left: 300px}
#a9 {left: 600px}
</style>

<body onload=startthedots()>
<h1>Звездочки вокруг курсора</h1>
<p>Работает в IE!</p>

<script type="text/javascript">
window.onerror=null; netscape = (document.layers) ? 1:0;
goodIE = (document.all) ? 1:0; document.onmousemove=MoveHandler;
var gotthere = 0; var count = 0; var ietopcorner=''; var ieleftcorner='';
toplocation = new Array( 0,30,57,80,101,125,80,80,101,125,80,0 );
temptoplocation = new Array( 50,100,100,150,150,200,200,100,150,150,200,200,0 );
leftlocation = new Array( 0,292,318,181,181,217,263,318,181,181,217,263,-96 );
templeftlocation = new Array( 0,0,260,390,420,550,680,390,420,550,680,0 );
difftop = new Array( 0,0,0,0,0,0,0,0,0,0,0,0 );
diffleft = new Array( 0,0,0,0,0,0,0,0,0,0,0,0 );
questtop = -13; questleft2 = -96;
if (netscape) {
document.body=new Object(); document.body.scrollTop=''; document.body.scrollLeft='';
window.captureEvents(Event.MOUSEMOVE); window.onMouseMove = MoveHandler;
var layerstart = "document."; var layerleft = ".left"; var layertop = ".top"; var layerstyle = "";
var windowWidth = window.innerWidth; var windowHeight = window.innerHeight;  }
else if (goodIE) {
ietopcorner=document.body.scrollTop; ieleftcorner=document.body.scrollLeft;
layerstart = "document.all."; layerleft = ".left"; layertop = ".top"; layerstyle = ".style";
windowWidth=600; windowHeight=400; }
var Ypos2 = 72; var Xpos2 = 72;
function MoveHandler(e) {
if (netscape || goodIE) {
Xpos2 = (netscape)?e.pageX:event.x; Ypos2 = (netscape)?e.pageY:event.y; Xorigin = Xpos2; Yorigin = Ypos2;
if (Ypos2 > windowHeight/2) {
if (Xpos2 > windowWidth/2) { direction = 1;}
else { direction = -1;} }
else {
if (Xpos2 > windowWidth/2) { direction = -1;}
else { direction = 1;} }}}
function startthedots() {
if (goodIE) {
windowWidth=document.body.clientWidth; windowHeight=document.body.clientHeight; }
Xorigin = 204; Yorigin = 147;
spin();run(); }
var OrbitSize = 200; count=1; delay=100; direction = -1;
Count = new Array ( 0, .63, 1.26, 1.89, 2.52, 3.15, 3.78, 4.41, 5.04, 5.67 );
Xpoint = new Array ( 0, .63, 1.26, 1.89, 2.52, 3.15, 3.78, 4.41, 5.04, 5.67 );
Ypoint = new Array ( 0, .63, 1.26, 1.89, 2.52, 3.15, 3.78, 4.41, 5.04, 5.67 );
var speed = -0.06; var offset = 1;
function spin() {
for ( j = 0 ; j <= 9 ; j++ ) {
Count[j] = Count[j] + (speed*direction);
Xpoint[j] = Xorigin + ((OrbitSize*Math.sin(Count[j])*offset));
Ypoint[j] = Yorigin + (OrbitSize*Math.cos(Count[j])); }
setTimeout('spin()',3); }
function run() {
count++;
for ( j = 0 ; j <= 9 ; j++ ) {
difftop[j]  = Ypoint[j] -  temptoplocation[j]; diffleft[j] = Xpoint[j] - templeftlocation[j]; diff = 30;
temptoplocation[j] = temptoplocation[j] + difftop[j]/diff;
templeftlocation[j] = templeftlocation[j] + diffleft[j]/diff;
eval(layerstart+"a"+j+layerstyle+layerleft+" = document.body.scrollLeft+templeftlocation["+j+"]");
eval(layerstart+"a"+j+layerstyle+layertop+" = document.body.scrollTop+temptoplocation["+j+"]"); }
setTimeout('run()', 25) }
badIE = 0;
browserName = navigator.appName.substring(0,8); browserVer = parseFloat(navigator.appVersion);
macintosh = navigator.userAgent.indexOf("Mac");
if (browserName == "Microsof") {
if (macintosh != -1) { badIE = 1; }
if (browserVer < 4) { badIE = 1; }}
</script>

<div id="a0" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a1" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a2" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a3" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a4" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a5" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a6" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a7" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a8" align="center"><img src="images/star.gif" height="9" width="9"></div>
<div id="a9" align="center"><img src="images/star.gif" height="9" width="9"></div>
