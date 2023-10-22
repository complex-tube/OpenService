import { Injectable } from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import axios, {AxiosError} from "axios";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
  protected constructor(protected router: Router) { }

  protected abstract getEntities(): Observable<T[]>

  protected abstract pushEntity(entities: T[]): void

  protected getEntitiesFromJson(request: string, type: (new () => T)): Observable<T[]> {
    return fromPromise(axios.get(environment.nomenclaturePath)).pipe(
      catchError((error: AxiosError) => {
        console.log(error.message);
        this.router.navigate(['error']);
        return EMPTY
      }),
      map((data): T[] => {
        return data.data[request].map((requestEntity: any): T => {
          let entity: T = new type();
          for (const entityParams in entity) {
            entity[entityParams] = requestEntity[entityParams]
          }
          return entity;
        });
      })
    );
  }
}
