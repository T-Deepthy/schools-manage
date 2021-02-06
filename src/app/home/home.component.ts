import { Component, OnInit } from '@angular/core';
import { students } from '../common'
import { Label } from 'ng2-charts';
import { StudentService } from 'src/app/services/student.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentService: StudentService) { 
    this.studentService.getGendercount()
  }
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['Class 8', 'Class 9' , 'Class 10'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2, 2, 2], label: 'Male' },
    { data: [2, 2, 2], label: 'Female' }
  ];

 s=localStorage.getItem('countMale')

  barChartMFOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartMFLabels: Label[] = ['Class 8-10'];
  barChartMFType: ChartType = 'bar';
  barChartMFLegend = true;
  barChartMFPlugins = [];

  barChartMFData: ChartDataSets[] = [
    { data: [3], label: 'Male' },
    { data: [3], label: 'Female' }
  ];
  ngOnInit(): void {
  }

}
