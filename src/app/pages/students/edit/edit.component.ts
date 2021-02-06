import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  header!: string;
  student: Student = {
    id: 0,
    age: 0,
    name: "",
    guardian: "",
    gender: "",
    class: 0
  }
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    console.log("bbbbbbb",this.router.url)
    this.route.params.subscribe(params => {
      console.log("params",params)
      this.id = params.id
    })
    this.header = this.studentService.checkUserExist(this.id)! ? 'Edit student' : 'Add Student';
    this.student = (this.studentService.onGetStudent((this.id),this.router.url)) || {};
  }

  onSubmit(form: NgForm) {
    let student: Student = {
      id: Number(form.value.id),
      name: form.value.name,
      age: form.value.age,
      gender: form.value.gender,
      guardian: form.value.guardian,
      class: form.value.class
    }

    if (this.studentService.checkUserExist(form.value.id)!) {
      this.studentService.onUpdate(student)
    }
    else {
      this.studentService.onAdd(student)
    }
    this.router.navigateByUrl('')
  }
}   
