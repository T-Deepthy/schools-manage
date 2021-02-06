import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import {students} from '../app/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management';
  constructor(private studentService: StudentService) {
    this.studentService.getGendercount()
  }
  ngOnChanges() { 
    this.studentService.getGendercount()
    
  }
}
