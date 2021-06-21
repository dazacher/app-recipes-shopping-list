import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Grilled Chicken Breast', 
                    'This simple grilled chicken breast recipe is seriously the best you will try! Coated in spices, it’s so perfectly juicy and charred. Get all my top tips and learn how to grill the most amazing chicken!', 
                    'https://easychickenrecipes.com/wp-content/uploads/2020/06/grilled-chicken-recipe-best-5-of-6-768x1152.jpg',
                    [
                        new Ingredient('Chicken Breast', 5),
                        new Ingredient('Barbeque Sauce', 1)
                    ]),
        new Recipe('Cranberry Pork Tenderloing', 
                    'This is a really easy dinner recipe to make. SUPER EASY!  Whether you cook a lot or are a beginner kind of cook, this Cranberry Pork Tenderloin is a dinner that you will be successful at making and serving. There are just a few ingredients, and it’s simple prep.', 
                    'https://www.recipegirl.com/wp-content/uploads/2008/09/Cranberry-Pork-Tenderloin-1.jpg',
                    [
                        new Ingredient('Pork Tenderloin', 6),
                        new Ingredient('Cherry Tomatoes', 10)
                    ])
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}