
   

const head = document.createElement("h1")
head.innerHTML = "Hello this is Nagesh I am Learing HTML REACT contentcontent🚀"
const data = document.getElementById("root")
data.appendChild(head)


const data1 = React.createElement("h1", {className:"head"},"hello React");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(data1)

