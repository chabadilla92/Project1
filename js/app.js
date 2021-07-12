///////////////
// Hamburger //
///////////////

const $hamburger = $(".hamburger")
const $links = $(".link")
let show = false;

// handler for click event
const showMenu = (event) => {
    if (show) {
        $links.each(function(index){
            $(this).css("display", "none")
        })
        show = false
    } else {
        $links.each(function(index){
            $(this).css("display", "block")
        })
        show = true
    }
}

// When you click on hamburger, showMenu function
$hamburger.on('click', showMenu)

// ///////////
// // Modal //
// ///////////

// class MyModal extends HTMLElement {

// }

// customElements.define("my-modal", MyModal)

// //////////////
// // Carousel //
// //////////////

// class Carousel extends HTMLElement {
//     constructor() {
//         super()
//         this.images = []
//         this.current = 0
//     }

//     giveImages(images){
//         this.images = images
//         this.innerHTML = `<div>
//         <img src="${this.images[0].img}" alt="${this.images[0].alt}"/>
//         </div>`
//     }

//     forward(){
//         if (this.current >= this.images.length){
//             this.current = 0
//             this.innerHTML = `<div>
//             <img src="${this.images[this.current].img}" alt="${this.images[this.current].alt}"/>
//             </div>`;
//         } else {
//             this.current += 1
//             this.innerHTML = `<div>
//             <img src="${this.images[this.current].img}" alt="${this.images[this.current].alt}"/>
//             </div>`;
//         }
//     }

//     backward(){
//         if (this.current <= 0){
//             this.current = this.images.length - 1;
//             this.innerHTML = `<div>
//             <img src="${this.images[this.current].img}" alt="${this.images[this.current].alt}"/>
//             </div>`;
//         } else {
//             this.current -= 1
//             this.innerHTML = `<div>
//             <img src="${this.images[this.current].img}" alt="${this.images[this.current].alt}"/>
//             </div>`;
//         }

//     }
// }

// customElements.define("my-carousel", Carousel)


const projects = $("#main")

$.ajax("./json/projects.json")
.then((data) => {
    data.forEach((project) => {
        const div = $("<div class='project'>")
        div.html(`
        <h3><a href="${project.live}">${project.title}</a></h3>
        
        <a href="${project.live}"><p class="img"><img src='${project.image}'/></p></a>
        <p>${project.description}</p>
        `)
        // const par = $("<p>")
        // par.css("background", ${project.image})
            projects.append(div)
    })
})