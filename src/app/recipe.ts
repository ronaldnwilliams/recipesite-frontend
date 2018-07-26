import { Ingredient } from './ingredient';

export class Recipe {
    id: number;
    name: string;
    description: string;
    category: string;
    dateUploaded: Date;
    dateUploaded2 = this.dateUploaded.getDay();
    prepTime: string;
    cookTime: string;
    steps: string[];
    ingredients: Ingredient[];
    creator: {
        id: number;
        username: string;
    };
}