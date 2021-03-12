import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss']
})
export class RegisterPaymentComponent implements OnInit {

  @ViewChild('efectivo', { static: false}) efectivo?: ElementRef;

  @ViewChild('tarjeta', { static: false}) tarjeta?: ElementRef;

  @ViewChild('transferencia', { static: false}) transferencia?: ElementRef;

  selectedPayment = 0;

  myControl = new FormControl();

  student = new FormControl();

  options: string[] = ['Colegiatura', 'Mantenimiento de Laboratorios', 'Examen Extraordinario'];

  nameOptions: string[] = ['Karina Martínez Ruiz', 'Jorge Esteban Ramirez', 'Angélica Ramos Ríos', 'Omar Valencia Montiel'];

  filteredOptions: any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  selectedOption(option: number) {
    this.efectivo?.nativeElement.classList.remove('active');
    this.tarjeta?.nativeElement.classList.remove('active');
    this.transferencia?.nativeElement.classList.remove('active');
    switch (option) {
      case 0: {
        this.efectivo?.nativeElement.classList.toggle('active');
        this.selectedPayment = 0;
        break;
      }
      case 1: {
        this.tarjeta?.nativeElement.classList.toggle('active');
        this.selectedPayment = 1;
        break;
      }
      case 2: {
        this.transferencia?.nativeElement.classList.toggle('active');
        this.selectedPayment = 2;
        break;
      }
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
