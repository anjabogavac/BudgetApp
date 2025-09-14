import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private baseUrl = 'https://budget-289cb-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  getTransactions(userId: string): Observable<{ [key: string]: Transaction }> {
    return this.http.get<{ [key: string]: Transaction }>(`${this.baseUrl}transactions/${userId}.json`);
  }

  addTransaction(userId: string, transaction: Transaction): Observable<any> {
    return this.http.post(`${this.baseUrl}transactions/${userId}.json`, transaction);
  }

  deleteTransaction(userId: string, transactionId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}transactions/${userId}/${transactionId}.json`);
  }
}
