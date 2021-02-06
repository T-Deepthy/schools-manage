import { Component, OnInit } from '@angular/core';
import { students } from '../../app/common';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit {
  students!: Student[];
  constructor(private studentService:StudentService) {
    
  
  }
  
  ngOnInit(): void {
    this.students=this.studentService.onGet();
  }
  onDelete(id: number ) { 
    this.studentService.onDelete(id)
      } 
  
}
