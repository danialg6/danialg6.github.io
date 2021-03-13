/*eslint-disable*/;
document.getElementById("ok").onclick=okclick;
function pageLoad(){
    document.getElementById("ok").onclick=okclick;
}
function okclick(){
    alert("you clicked ok");
}
window.onLoad=pageload;
