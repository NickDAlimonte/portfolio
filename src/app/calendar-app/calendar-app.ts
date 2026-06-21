import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-app',
  imports: [],
  templateUrl: './calendar-app.html',
  styleUrl: './calendar-app.scss',
})
export class CalendarApp {
  currentDate: Date = new Date();
  selectedDate: Date = new Date();
  selectedYear = 0;
  selectedMonth = ""

  monthList = Array.from({length: 12}, (_,i) => i);

  yearsList = Array.from({ length: 100}, (_,i) => this.currentDate.getFullYear() - 50 + i);

  ngOnInit(){
    this.selectedYear = this.currentDate.getFullYear();
    this.selectedMonth = this.currentDate.toLocaleString('default', {month: 'long'})

  }

  selectYear(number: number) {
    this.selectedDate.setFullYear(number)
    this.selectedYear = this.selectedDate.getFullYear();
  }

  selectMonth(number: number){
    this.selectedDate.setMonth(number)
    this.selectedMonth = this.selectedDate.toLocaleString('default', {month: 'long'});
    console.log(this.getWeekDateArray())
  }

  getMonthName(month: number): string{
    return new Date(this.selectedYear, month, 1).toLocaleString('default', {month: 'long'})
  }

  getMonthinDays(monthOffset: number = 1, monthStartDate: number = 0, dateOffset: number = 0){
    return new Date(this.selectedYear, this.selectedDate.getMonth()+monthOffset, monthStartDate).getDate()-dateOffset
  }

  getWeekDateArray(){
    const weekDate: number[][] = []
    const daysOfMonth = this.getMonthinDays();
    const weekday = new Date(this.selectedYear, this.selectedDate.getMonth()).getDay();
    let week: number[] = []

    if(weekday !== 0){
      for(let daysAhead = weekday - 1; daysAhead >= 0; daysAhead--){
        week.push(this.getMonthinDays(0,-daysAhead))
      }
    }

    for (let day = 1; day <= daysOfMonth; day++){
      week.push(day);

      if (week.length === 7){
        weekDate.push(week);
        week = [];
      }
    }

    if(week.length > 0){
      let nextMonthDate: number = 1
      while (week.length < 7){
        
        week.push(this.getMonthinDays(2, nextMonthDate))
        nextMonthDate ++;
      }
      weekDate.push(week);
    }

    

    return weekDate;
  }
}
