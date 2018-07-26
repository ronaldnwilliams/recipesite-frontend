import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  /** GET recipes from the server */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL);
  }
} 