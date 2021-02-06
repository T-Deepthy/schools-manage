import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  students!: Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students=this.studentService.onGet();
  }
    onDelete(id: number ) { 
      this.studentService.onDelete(id)
        }
}
