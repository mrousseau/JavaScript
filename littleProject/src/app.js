import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';

const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

// liste des recettes
recipesService.getRecipesNames()
.then(recipes => {
    /*
    $('#recipes')
        .html(recipes.map(recipe => `
        <li data-recipe="${ recipe }">
            ${ recipe.toUpperCase() }
        </li>
        `).join(''));
    */
/*    $('#recipes li').on('click', function () {
        console.log($(this).data('recipe'));
    });*/

});

$('.GO').on('click', function(){
    console.log('GO GO GO GO GO !!!!!!')
    $('#recipes li').remove()
    pizzeriaService.start(1000)
})


recipesService.getToppings()
    .then(toppings => {
        console.log(toppings);
        toppings.forEach(p => {
            $('.menu').append(`<button type="button" data-p="${p}" class="${p} btn btn-success">${p}</button>  `)
            $(`.${p}`).on('click', function() {
                console.log($(this).data('p'))
            })
        })
        
    })