function home()
{
    document.body.style.backgroundImage = "url('assets/home/background-home-desktop.jpg')";
    myhidden();
    document.getElementById("home").style.display="block";
    
}
function myhidden( ) {

    var jml = document.getElementsByClassName("trouv");
    var i=jml.length;
    for(j=0;j<i;j++)
    {
        jml[j].style.display="none";
    }
}
function destination()
{
    document.body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
    myhidden();
    document.getElementById("destination").style.display="block"; 
}
function myhidden2() {

    var jml = document.getElementsByClassName("trouv2");
    var i=jml.length;
    for(j=0;j<i;j++)
    {
        jml[j].style.display="none";
    }
}
function moon()
{
    myhidden2();
    document.getElementById("moon").style.display="flex";
    
}
function mars()
{
    myhidden2();
    document.getElementById("mars").style.display="flex";
    
}
function TITAN()
{
    myhidden2();
    document.getElementById("TITAN").style.display="flex";
    
}

function EUROPA()
{
    myhidden2();
    document.getElementById("EUROPA").style.display="flex";
    
}
function crew()
{
    document.body.style.backgroundImage = "url('assets/crew/background-crew-desktop.jpg')";
    myhidden();
    document.getElementById("crew").style.display="block"; 
}
function point1()
{
    myhidden3();
    document.getElementById("p1").style.display="flex"; 
}
function point2()
{
    myhidden3();
    document.getElementById("p2").style.display="flex"; 
}
function point3()
{
    myhidden3();
    document.getElementById("p3").style.display="flex"; 
}
function point4()
{
    myhidden3();
    document.getElementById("p4").style.display="flex"; 
}
function tecnology()
{
    document.body.style.backgroundImage = "url('assets/technology/background-technology-desktop.jpg')";
    myhidden();
    document.getElementById("tecnology").style.display="block"; 
}
function myhidden3() {

    var jml = document.getElementsByClassName("trouv3");
    var i=jml.length;
    for(j=0;j<i;j++)
    {
        jml[j].style.display="none";
    }
}
function myhidden4() {

    var jml = document.getElementsByClassName("trouv4");
    var i=jml.length;
    for(j=0;j<i;j++)
    {
        jml[j].style.display="none";
    }
}
function num1()
{
    myhidden4();
    document.getElementById("n1").style.display="flex"; 
}
function num2()
{
    myhidden4();
    document.getElementById("n2").style.display="flex"; 
}
function num3()
{
    myhidden4();
    document.getElementById("n3").style.display="flex"; 
}