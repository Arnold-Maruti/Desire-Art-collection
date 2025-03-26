document.addEventListener('DOMContentLoaded', displayDetail)
const catalogue=document.querySelector("#catalogue")
;
let selectedDetail

function displayDetail(){
    return fetch("http://localhost:3000/details")
           .then(resp=>resp.json())
           .then(data=>{
                data.forEach(element => {
                
                const division=document.createElement("div");
                division.id=element.id;

                const image=document.createElement("img");
                image.src=element.artwork;
                image.alt=element.name;

                const artist=document.createElement("p");
                artist.innerText=`artist:${element.artist}`;

                const name=document.createElement("p");
                name.innerText=`name of the artwork:${element.name}`;

                const price=document.createElement("p");
                price.innerText=`price:${element.price}`;

                const button=document.createElement("button");
                button.innerText=`Buy`;

            
                 
                division.appendChild(image)
                division.appendChild(artist)
                division.appendChild(name)
                division.appendChild(price)
                division.appendChild(button)

                catalogue.appendChild(division);
            });
           }

           )
}
 
document.querySelector("#newArt").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    
})


