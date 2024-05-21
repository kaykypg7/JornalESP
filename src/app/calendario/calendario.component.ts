
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type CalendarDay = { day: number, class: string };

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent {
  currentDate: number = new Date().getDate();
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  currentMonthName: string;
  daysInMonth: number[];
  daysInPreviousMonth: number[];
  daysInNextMonth: number[];
  month: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  day: any;
  year: any;

  constructor() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
    this.daysInPreviousMonth = this.getDaysInPreviousMonth(this.currentYear, this.currentMonth);
    this.daysInNextMonth = this.getDaysInNextMonth(this.currentYear, this.currentMonth);
    this.updateDaysInMonth();
  }

  getMonthName(month: number): string {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return months[month];
  }

  getDaysInMonth(year: number, month: number): number[] {
    const daysInMonth = [];
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      daysInMonth.push(i);
    }
    return daysInMonth;
  }

  getDaysInPreviousMonth(year: number, month: number): number[] {

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInPreviousMonth = [];
    const lastDayOfPreviousMonth = new Date(year, month, 0).getDate();

    //Para calcular o número de dias e preencher os espaços em branco
    const daysToFill = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    //Para adicionar os dias necessários para preencher os espaços em branco
    for (let i = lastDayOfPreviousMonth - daysToFill + 1; i <= lastDayOfPreviousMonth; i++) {
      daysInPreviousMonth.push(i);
    }

    return daysInPreviousMonth;
  }

  getDaysInNextMonth(year: number, month: number): number[] {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    const daysInNextMonth = [];
    //Para calcular o número de dias para preencher os espaços em branco.
    // Se o último dia do mês for sábado (6), não preencher espaços em branco, senão preencher 7 - lastDayOfMonth espaços em branco.
    const daysToFill = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;

    for (let i = 1; i <= daysToFill; i++) {
      //Adiciona os dias do próximo mês
      daysInNextMonth.push(i);
    }

    return daysInNextMonth;
  }

  //Para atualizar o mês
  // updateDaysInMonth(){
  //   // Limpa os dias do array
  //   this.daysInMonth = [];

  //   // Direciona o Date para o primeiro dia do mês
  //   const firstDayOfMonth = new Date(this.currentYear,this.currentMonth + 1, 0);
  //   // Pega o dia da semana da primeira data do mês
  //   const startingDayOfWeek = firstDayOfMonth.getDay();
  //   // Pega o último dia do Mês atual
  //   const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
  //   const lastDay = lastDayOfMonth.getDate();

  //   // Adicionando os dias em um Array
  //   for (let i = 1; i <= lastDay; i++) {
  //     this.daysInMonth.push(i);
  //   }

  //   // Para preencher os dias do mês anterior
  //   const prevLastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
  //   const prevLastDay = prevLastDayOfMonth.getDate();

  //   for (let i = startingDayOfWeek - 1; i >= 0; i--) {
  //     this.daysInMonth.unshift(prevLastDay - i);
  //   }

  //   // Para preencher os dias do próximo mês a fim de completar aa última semana
  //   const remainingDays = 7 - (this.daysInMonth.length % 7);

  //   for (let i = 1; i <= remainingDays; i++) {
  //     this.daysInMonth.push(i);
  //   }

  // }

  updateDaysInMonth() {
    // Limpa os dias do array
    this.daysInMonth = [];
  
    // Direciona o Date para o primeiro dia do mês
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    // Pega o dia da semana da primeira data do mês
    const startingDayOfWeek = firstDayOfMonth.getDay();
    // Pega o último dia do Mês atual
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const lastDay = lastDayOfMonth.getDate();
  
    // Para preencher os dias do mês anterior
    const prevLastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
    const prevLastDay = prevLastDayOfMonth.getDate();
  
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      this.daysInMonth.unshift(prevLastDay - i);
    }
  
    // Adicionando os dias do mês atual
    for (let i = 1; i <= lastDay; i++) {
      this.daysInMonth.push(i);
    }
  
    // Para preencher os dias do próximo mês a fim de completar a última semana
    const remainingDays = (7 - (this.daysInMonth.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      this.daysInMonth.push(i);
    }
  }
  
  getDayClass(index: number): string {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const lastDay = lastDayOfMonth.getDate();
  
    const day = this.daysInMonth[index];
  
    // Retorna o dia atual
    if (day === this.currentDate && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear()) {
      return 'today';
      // Preenche os dias do mês anterior
    } else if (index < startingDayOfWeek) { 
      return 'day prev';
      // Preenche os dias do mês atual
    } else if (index >= startingDayOfWeek && index < startingDayOfWeek + lastDay) { 
      return 'day';
      // Preenche os dias do próximo mês
    } else { 
      return 'day next';
    }
  }

  // Para seguir ao próximo mês
  nextMonth() {
    this.currentMonth++;

    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentMonth++;
    }

    this.updateDaysInMonth();
  }

  // Para voltar ao mês anterior
  previousMonth() {
    this.currentMonth--;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentMonth--
    }

    this.updateDaysInMonth();
  }

  today_click() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.currentMonthName = this.month[this.currentMonth];
    this.updateDaysInMonth();
  }

}
