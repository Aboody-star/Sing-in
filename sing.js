let title1 = document.getElementById("h1");
let title2 = document.getElementById("h2");

let put1 = document.getElementById("p1");
let put2 = document.getElementById("p2");
let put3 = document.getElementById("put1");
let put4 = document.getElementById("put2");
let put5 = document.getElementById("put3");

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
//let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");

let anime = document.createElement("style");
document.head.appendChild(anime);
anime.textContent=`
@keyframes ain{
        0%{
                opacity: 0;
        }
        100%{
                opacity: 1;
        }
}
@keyframes a{
        0%{
                opacity: 1;
        }
        100%{
                opacity: 0;
        }
}
@keyframes s{
        0%{
                transform: translateZ(80px);
                background: white;
        }
        100%{
                transform: translateZ(300px);
                background:transparent;
        }
}

`

title1.style.color="black";

btn4.addEventListener("click",function (){
        switch (this.getAttribute("data-m","x")) {
                case 'x':
                        this.style.transition="1.5s";
    this.style.display="none";
    this.style.animation="a .5s 1 both";
    s2.style.width="100%";
    s2.style.height="90%";
    
    put3.style.display="block";
    put4.style.display="block";
    put5.style.display="block";
    btn0.style.display="block";
    btn4.style.display="block";
    title2.style.display="block";
    
    put3.style.animation="ain 1s 1.1s 1 both";
    put4.style.animation="ain 1s 1.3s 1 both";
    put5.style.animation="ain 1s 1.5s 1 both";
    btn0.style.animation="ain 1s .7s 1 both";
    btn4.style.animation="ain 1s 1.7s 1 both";
    title2.style.animation="ain 1s .9s 1 both";
    
    title1.style.display="none";
    put1.style.display="none";
    put2.style.display="none";
    btn1.style.display="none";
    btn2.style.display="none";
    
    this.setAttribute("data-m","o");
                        break;
                case 'o':
                        if (put3.value!== ""&&  put4.value!== ""&&  put5.value!== ""
                        ) {
                                console.log("new account ");
                                console.log("his name is '"+put3         .value+"'");
                                console.log("and password '"+put4          .value+"'");
                                console.log("he have  "+put5.value+"years old ");
                                alert("welcome '" +        put3.value+"' now you need sing in ☝️");
                                put3.value = "";
                                put4.value = "";
                                put5.value = "";
                                
                                btn0.style.animation="s .7s 3s 3 ";
                        }
                        break;
                
        }
    
});

btn0.addEventListener("click",function () {
        s2.style.width="70%";
        s2.style.height="100px";
        
        put3.style.display="none";
        put4.style.display="none";
        put5.style.display="none";
        btn0.style.display="none";
        btn4.style.display="none";
        title2.style.display="none";
        
        title1.style.display="block";
        put1.style.display="block";
        put2.style.display="block";
        btn1.style.display="inline";
        btn4.style.display="block";
        btn2.style.display="block";
        
        title1.style.animation="ain 1s .7s 1 both";
        put1.style.animation="ain 1s .9s 1 both";
        put2.style.animation="ain 1s 1.1s 1 both";
        btn1.style.animation="ain 1s 1.3s 1 both";
        btn4.style.animation="ain 1s 1.7s 1 both";
        btn2.style.animation="ain 1s 1.5s 1 both";
        
        btn4.setAttribute("data-m","x");
        
});

btn1.addEventListener("click",function () {
        if (this.getAttribute("data-s","p")=== "p"){
                this.innerHTML="hide";
                this.setAttribute("data-s","s");
                put2.setAttribute("type","text");
        }
        else {
                this.innerHTML="show";
                this.setAttribute("data-s","p");
                put2.setAttribute("type","password");
        }
});

btn2.addEventListener("click",function () {
        if (put1.value!== ""&&  put2.value!== "") {
                console.log("last account");
                console.log("his name is "+put1.value);
                console.log("his name is "+put2.value);
                alert("welcome back Mr."+put1.value);
                put1.value="";
                put2.value="";
        }
});

        title1.style.animation="ain 1s .7s 1 both";
        put1.style.animation="ain 1s .8s 1 both";
        put2.style.animation="ain 1s .9s 1 both";
        btn1.style.animation="ain 1s 1s 1 both";
        btn4.style.animation="ain 1s 1.2s 1 both";
        btn2.style.animation="ain 1s 1.1s 1 both";
        