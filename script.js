


var popupoverlay=document.querySelector(".poppup-overlay")
var popupbox=document.querySelector(".poppup-box")
var addpoppupbutton=document.getElementById("add-poppup-button")


addpoppupbutton.addEventListener("click",function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-poppup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")

var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdiscriptioninput=document.getElementById("book-discription-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
   
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2> ${booktitleinput.value}</h2>
        <h5> ${bookauthorinput.value}</h5>
        <p>${bookdiscriptioninput.value}</p>
        <button onclick="deletebook(event)" >delete</button>`
        container.append(div)
       popupoverlay.style.display="none"
 popupbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()
}