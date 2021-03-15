

function Section(section) {
    return(`
        <h2>${section.title}</h2>
        <div class='row'>
        
            <div class='col-6'>
                <img src=${section.image} alt="${section.title}">
            </div>
            
            <div class='col-6'>
                <p>${section.text}</p>
            </div>
   
        </div>
    `);
}

export default Section;