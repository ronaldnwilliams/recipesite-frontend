import { Ingredient } from './ingredient';

export class Recipe {
    id: number;
    name: string;
    description: string;
    category: string;
    dateUploaded: Date;
    prepTime: string;
    cookTime: string;
    steps: string[];
    ingredients: Ingredient[];
    creator: {
        id: number;
        username: string;
    };
}