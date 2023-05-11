import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Battata', 17)
    ];
   
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
       this.ingredients[index] = newIngredient;
       this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1)
        this.ingredientChanged.next(this.ingredients.slice());

     }
}