// Create list of products with logo and short description
export default function getProducts(products) {

    return products.map(p => {
        return `
            <div class= "row">
                <div class="col-6">
                    <img class="pic" src="${p.longlogo}" width="60%">
                </div>


                <div class="col-6">
                <br>

                <p>${p.shortdesc}</p>

                <button id="${p.id}-button" name="${p.id}" class="product-button" style="background-color:${p.primarycolor};">
                    Learn More <i class="fas fa-angle-double-right"></i>
                </button>
                </div>

            </div>

            </div>
        `;
    }).join('');
}



/* <span id="${p.id}-shortdesc" class="product-shortdesc">${p.shortdesc}</span>
Learn More <i class="fas fa-angle-double-right"></i>
</button> */

// <img id="${p.id}-section-img" class="section-img" src="${p.longlogo}" alt="${p.name}" width="80%>
/* <div id="${p.id}-container" class="product-container"></div> */


// <div class="row">
// <div class="col-6">
//   <div class="project-title">
//     <a href="?project=${d.id}"><p>${d.title}</p></a>
//     <img class="pic" src="${d.teaser}" width="80%">
//     <br>

//   </div>
//   </div>

// </br>
//       <div class="col-6">

//   <div class="project-description">
//   <br>
//   <p>${d.description}</p>
//   </div>

// </div>

//   </div>
// `).join('');

