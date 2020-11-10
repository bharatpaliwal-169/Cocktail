// import get from './getElement.js';
// const setCocktail = (section) => {
//     section.addEventListener("click", (e) => {
//         var id = e.target.id;
//         // var id = e.this.getAttribute("data-id");
//         const element = get('.img-fluid');
//         var id = element.getAttribute("data-id");
//         console.log(id);
//         localStorage.setItem("drink", id);
//     });
// };
// export default setCocktail;
const setCocktail = (section) => {
    section.addEventListener("click", (e) => {
        // const id = e.target.parentElement.dataset.id;
        const id = e.target.getAttribute('data-id');
        localStorage.setItem("drink", id);
    });
};

export default setCocktail;
