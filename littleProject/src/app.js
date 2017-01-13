import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';

const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

pizzeriaService.start(1000);
