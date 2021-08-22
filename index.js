const yearEl = document.getElementById("year")

const dateHandler = () => {
 const date = new Date()
 const year = date.getFullYear()
 yearEl.innerHTML=
 `
 <span id="year">${year}</span> 
 `
}
dateHandler()
