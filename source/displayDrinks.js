import get from "./getElement.js";
const displayDrinks = async ({ drinks }) => {
    const section = get(".section-center");
    const title = get(".title");
    if (!drinks) {
    // hideLoading();
    title.textContent = "sorry,no drinks matched your search";
    section.innerHTML = null;
    return;
}

    const newDrinks = drinks
    .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        // const dataId = drink.id;
        // document.getElementById('dataId') = dataId;
        return `
        <a href='./drink.html'>
                <div class='card bg-dark mt-5' data-id="${id}" id='${id}'>
                    <div class="card-title">
                        <img class='img-fluid' src="${image}" alt="${name}" data-id="${id}">
                    </div>
                    </a>
                    <div class="card-text">
                        <h3><strong>${name}</strong></h3>
                    </div>
                    
                </div>
            
            
        `;
    })
    .join("");
    // hideLoading();
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
};

export default displayDrinks;