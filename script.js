const input = document.getElementById("input")
const submit = document.getElementById("submit")
document.addEventListener("click", () => {
    document.getElementById("message").innerHTML= `Welcome ` + input.value 
})

