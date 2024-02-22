function labelcreate(tagname,attrname,attrvalue,content){
    var label = document.createElement(tagname);
    label.setAttribute(attrname,attrvalue);
    label.innerHTML=content;
    return label
}

function breakcreate(){
    var br = document.createElement("br");
    return br;
}

function inputcreate(tagname,attr1name,attr1value,attr2name,attr2value){
    var input=document.createElement(tagname)
    input.setAttribute(attr1name,attr1value)
    input.setAttribute(attr2name,attr2value)
    return input
}

function button(tagname,attrname,attrvalue,attrname1,attrvalue2){
    var button=document.createElement(tagname)
    button.innerHTML="submit"
    button.setAttribute(attrname,attrvalue)
    button.setAttribute(attrname1,attrvalue2)
    return button
}

var firstname=labelcreate("label","for","firstname","FirstName")
var brk1=breakcreate()
var input_first=inputcreate("input","type","text","id","firstname")
var brk2=breakcreate()

var middlename=labelcreate("label","for","middlename","MiddleName")
var brk3=breakcreate()
var input_middle=inputcreate("input","type","text","id","middlename")
var brk4=breakcreate()

var lastname=labelcreate("label","for","lastname","LastName")
var brk5=breakcreate()
var input_last=inputcreate("input","type","text","id","lastname")
var brk6=breakcreate()

var email=labelcreate("label","for","email","Email")
var brk7=breakcreate()
var input_email=inputcreate("input","type","email","id","email")
var brk8=breakcreate()

var pass=labelcreate("label","for","pass","Password")
var brk9=breakcreate()
var input_pass=inputcreate("input","type","password","id","pass")
var brk10=breakcreate()

var butt=button("button","type","button","onclick","foo()")
function foo(){

    var first=document.getElementById("firstname").value 
    var middle=document.getElementById("middlename").value 
    var last=document.getElementById("lastname").value 
    var emaill=document.getElementById("email").value 
    var passw=document.getElementById("pass").value 
    
    console.log(`My First Name is ${first}`)
    console.log(`My Middle Name is ${middle}`)
    console.log(`My last Name is ${last}`)
    console.log(`My emaill Name is ${emaill}`)
    console.log(`My passw Name is ${passw}`)


}

   


document.body.append(firstname,brk1,input_first,brk2,middlename,brk3,input_middle,brk4,lastname,brk5,input_last,brk6,email,brk7,input_email,brk8,pass,brk9,input_pass,brk10,butt)

