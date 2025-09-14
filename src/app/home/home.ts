import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseService, Transaction } from '../firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  userId: string = 'test_user';
  transactions: Transaction[] = [];
  description: string = '';
  amount: number = 0;
  category: string = 'Prihodi';
  categories: string[] = ['Prihodi', 'Rashodi', 'Investicije'];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.firebaseService.getTransactions(this.userId).subscribe(res => {
      this.transactions = res
        ? Object.keys(res).map(key => ({ ...res[key], id: key }))
        : [];
    });
  }

  addTransaction(): void {
    if (!this.description || !this.amount || !this.category) return;

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      description: this.description,
      amount: this.amount,
      category: this.category,
      date: new Date().toISOString(),
    };

    this.firebaseService.addTransaction(this.userId, newTransaction).subscribe(() => {
      this.description = '';
      this.amount = 0;
      this.category = 'Prihodi';
      this.loadTransactions();
    });
  }

  deleteTransaction(transactionId: string): void {
    this.firebaseService.deleteTransaction(this.userId, transactionId).subscribe(() => {
      this.loadTransactions();
    });
  }

  getTotal(category: string): number {
    return this.transactions
      .filter(t => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  }
}
