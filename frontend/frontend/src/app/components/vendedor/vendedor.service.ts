

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//essa classe pode ser injetada em outros modulos
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Vendedor } from './vendedor.model'
@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  baseUrl = "http://localhost:3001/vendedor"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
      
    });
  }
  


  //metodo que via fazer a submissao para o backend criando 
  //um novo produto ("para entender melhor va em assets e procure  por info.txt observable")
  create(vendedor: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(this.baseUrl, vendedor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Vendedor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Vendedor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(vendedor: Vendedor): Observable<Vendedor> {
    const url = `${this.baseUrl}/${vendedor.id}`;
    return this.http.put<Vendedor>(url, vendedor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Vendedor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Vendedor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}

