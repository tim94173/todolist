let data = [];
const btnAdd = document.querySelector('.btnAdd');
const newThing = document.querySelector('.new');
const normalList = document.querySelector('.normalList');
const importantList = document.querySelector('.importantList');
const smile = document.querySelector('.smile');

btnAdd.addEventListener("click",function(e){
    addNewTodo();
    display();
});



function addNewTodo(){
    let content = {Important:false,Name:""};
    if(newThing.value == ""){
        alert("請輸入代辦事項");
        return;
    }else{
        content.Name = newThing.value;
        data.push(content);
        newThing.value = "";
    }
};

function display(){
    console.log(data);
    let str1 = "";
    let str2 = "";
    if(data.length == 0){
        importantList.innerHTML = str1;
        normalList.innerHTML = str2;
    }else{
        data.forEach(function(item,index){
            if(item.Important == true){
                let a = `<li><h3>${item.Name}</h3><a href="#" class="star">${index}</a><a href="#" class="deleteThing">${index}</a></li>`;
                str1 += a;
            }else{
                let b = `<li><h3>${item.Name}</h3><a href="#" class="star">${index}</a><a href="#" class="deleteThing">${index}</a></li>`;
                str2 += b;
            }
            importantList.innerHTML = str1;
            normalList.innerHTML = str2;
        });
    }
    if(data.length < 2){
        smile.setAttribute("src", "images/1f60e.png");
    }else if(data.length < 4){
        smile.setAttribute("src", "images/1f642.png");
    }else if(data.length < 6){
        smile.setAttribute("src", "images/1f610.png");
    }else if(data.length < 8){
        smile.setAttribute("src", "images/1f635.png");
    }
    console.log(data);
    return;
};



normalList.addEventListener("click",function(e){
    if(e.target.getAttribute("class") == "star"){ 
        data[e.target.textContent].Important = true;
    }else if(e.target.getAttribute("class") == "deleteThing"){
        let a = e.target.textContent;
        data.splice(a,1);
    }
    display();
});

importantList.addEventListener("click",function(e){
    if(e.target.getAttribute("class") == "star"){ 
        data[e.target.textContent].Important = false;
    }else if(e.target.getAttribute("class") == "deleteThing"){
        let a = e.target.textContent;
        data.splice(a,1);
    }
    display();
});
    
   
