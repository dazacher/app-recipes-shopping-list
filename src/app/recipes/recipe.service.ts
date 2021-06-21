import { Recipe } from "./recipe.model";


export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://easychickenrecipes.com/wp-content/uploads/2019/03/chicken-white-wine-sauce-4-of-8-599x860.jpg'),
        new Recipe('Recipe 2 Test', 'This is a test', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/09/03/20/turmeric-chicken-kebabs.jpg?width=640&auto=webp&quality=75')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}