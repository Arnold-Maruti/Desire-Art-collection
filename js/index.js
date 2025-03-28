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

                
                
                button.addEventListener("click",()=>{
                    selectedDetail=element;
                    removeArt(selectedDetail);
                })

                
                 
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

    let artists=document.getElementById("artist").value;
    let artworks=document.getElementById("painting").value;
    let names=document.getElementById("paintingname").value;
    let prices=document.getElementById("price").value;
    console.log(artist);
    

    let newPainting={
        artist:artists,
        artwork:artworks,
        name:names,
        price:prices
    }
    addArt(newPainting)
    
    
})
function addArt(newPainting){

   return fetch('http://localhost:3000/details',{
           method:'POST',
            headers:{
            'Content-Type':'application/json'
        },
               body:JSON.stringify(newPainting)
    })
    .then(resp=>resp.json)
    .then(data=>console.log(data))
}


;


function removeArt(selectedDetail){
    return fetch(`http://localhost:3000/details/${selectedDetail.id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        alert(`${selectedDetail.name} has been purchased`)
    })
}


