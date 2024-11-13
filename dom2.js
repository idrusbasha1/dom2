let head = document.createElement("h1")
head.textContent="Premium Bikes"
head.style.textAlign="center"
head.style.textTransform="uppercase"
head.style.backgroundColor="magenta"
head.style.textShadow= "2px 2px 5px white"

let container = document.createElement("div")
container.style.display="flex"

let card = document.createElement("div")
card.style.width="385px"
card.style.height="400px"
card.style.backgroundColor="cyan"
card.style.border="2px solid black"
card.style.borderRadius="20px"


let pic1 = document.createElement("img")
pic1.src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240627021036_GT%20650.jpg"
pic1.setAttribute("width",350)

pic1.style.padding="15px"
pic1.style.borderRadius="29px"

let text = document.createElement("p")
text.textContent="GT Bike"
text.style.textAlign="center"
text.style.fontWeight="bold"
text.style.fontSize="30px"

let card1 = document.createElement("div")
card1.style.width="385px"
card1.style.height="400px"
card1.style.backgroundColor="cyan"
card1.style.border="2px solid black"
card1.style.borderRadius="20px"

let pic2 = document.createElement("img")
pic2.src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/11/full/1689070314-2921.jpg"
pic2.setAttribute("width",350)

pic2.style.padding="15px"
pic2.style.borderRadius="29px"

let text1 = document.createElement("p")
text1.textContent="Royal Enfield Bike"
text1.style.textAlign="center"
text1.style.fontWeight="bold"
text1.style.fontSize="30px"

card.append(pic1,text)
card1.append(pic2,text1)

//replace
let images = document.createElement("img")
images.setAttribute("src", "https://5.imimg.com/data5/TK/SK/GLADMIN-56814919/honda-shine-500x500.png")
let images1 = document.createElement("img")
images1.setAttribute("src","https://images.meesho.com/images/products/166610665/utk7m_512.webp")

//clone
const clonedElement=images.cloneNode(true)

//attributes

console.log(pic2.getAttribute("width"))
console.log(pic2.hasAttribute("width"))
console.log(images1.removeAttribute("src"))

let divTag = document.createElement("div")
divTag.className = "container1"
divTag.classList.add("idrus")
divTag.classList.add("basha")
divTag.classList.add("shaik")
divTag.classList.replace("shaik","syed")
divTag.classList.add("shaik")

divTag.classList.remove("shaik")


console.log(divTag);



document.body.append(container,head,card,card1,images,images1,clonedElement)

