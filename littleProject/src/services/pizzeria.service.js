export class PizzeriaService {

    constructor (recipesService) {
        this.pool = [];
        this.recipesService = recipesService;
    }

    start (time) {
        // every time seconds add a new recipe name to the pool
    this.pool = []
        return this.recipesService.getRecipesNames()
        .then(recipesNames => {
            const intervalId = setInterval(() => {
                const index = Math.floor(Math.random() * recipesNames.length);
                const recipeName = recipesNames[index];
                this.pool.push(recipeName);
                console.log('POOL : ', this.pool);
                //$('#recipes').html(recipes.map(recipe => `<li data-recipe="${ recipe }">${ recipe.toUpperCase() }</li>`).join(''));
                $('#recipes').append(`<li data-recipe="${ recipeName }">${ recipeName.toUpperCase() }</li>`)
                if (this.pool.length >= 10) {
                    console.log('GAME OVER');
                    clearInterval(intervalId);
                }
            }, time);

        })
    }

    // { id: 1, toppings: ['', ''] }
    sendPizza (pizzaName) {
        const idx = this.pool.indexOf(pizzaName);
        if (idx !== -1) this.pool.splice(idx, 1);
    }

}