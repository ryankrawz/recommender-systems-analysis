

function Section(section) {
    return(`
        <div class='.row'>
            <h2>${section.title}</h2>
            <img src=${section.image} alt="Description">
            <p>${section.text}</p>
        </div>
    `);
}

export default Section;