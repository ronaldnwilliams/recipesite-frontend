import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  allRecipes: Recipe[];
  filteredRecipes: Recipe[];
  categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  selectedCategory: string;
  constructor(private recipeService: RecipeService) { 
    this.selectedCategory = this.categories[0];
  }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        this.allRecipes = recipes;
        this.filteredRecipes = this.allRecipes;
      });
  }

  categoryChange(category: string): void {    
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredRecipes = this.allRecipes;
    } else {
      this.filteredRecipes = [];
      for (let recipe of this.allRecipes) {
        if (recipe.category.toLowerCase() === category.toLowerCase()) {
          this.filteredRecipes.push(recipe);
        }
      }
    }
        
  }

}
