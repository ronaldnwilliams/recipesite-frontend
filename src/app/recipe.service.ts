import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from './recipe';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET recipes from the server */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        //tap(recipes => this.log('fetched recipes')),
        catchError(this.handleError('getRecipes', []))
      );
  }

  /** GET recipe by id. Will 404 if not found */
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url)
      .pipe(
        //tap(_ => this.log(`fetched recipe id=${id}`)),
        catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
      );
  }

  /** Log a HeroService message with a MessageService */
  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} 