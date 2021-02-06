import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    age: 13,
    name: "abcs",
    gender: "Male",
    guardian: "ad",
    class: 8,
    id:1
  },
  {
    age: 15,
    name: "abcs",
    gender: "Female",
    guardian: "ad",
    class: 9,
    id:1
    },
    {
      age: 16,
      name: "abcs",
      gender: "Male",
      guardian: "ad",
      class: 10,
      id:1
    },
  {
      age: 16,
      name: "abcs",
      gender: "Male",
      guardian: "ad",
      class: 10,
      id:2
    },
  {
    age: 15,
    name: "abcs",
    gender: "Female",
    guardian: "ad",
    class: 9,
    id:2
    },{
    age: 15,
    name: "abcs",
    gender: "Female",
    guardian: "ad",
    class: 8,
    id:2
    },] 
  
  constructor() { 
    this.getGendercount()
  }
  sumTotal() { 
    return this.students.length
    
  }
  getGendercount() { 
    let s: boolean[]=[]
    this.students.forEach(x => s.push(x.gender == 'Male'))
    let countMale = 0
    let countFemale=0
    for(var i = 0; i < s.length; ++i){
    if(s[i] == true)
      countMale++;
    else countFemale++
      localStorage.setItem("countMale", JSON.stringify(countMale))
      localStorage.setItem("countFemale",JSON.stringify(countFemale))
    }
  }
  onGet() { 
    return this.students
  }
  onGetStudent(id: number, params: string) {
    let param =0
    let cl = params.split('/')[1]
    switch (cl) { 
      case 'eighth':
        param = 8
        break;
      case 'ninth':
        param = 9
        break;
      case 'tenth':
        param = 10
        break;
      default:
        break;
      
    }
    let result = this.students.find(x => x.id === Number(id));
    return result || { id: (this.students[this.students.length-1].id+1)!,class:param };
  }
  checkUserExist(id: number) {
    return this.students.find(x=>x.id===Number(id));
  }
  onAdd(student: Student) {
    this.students.push(student)
  }
  onDelete(id: number) { 
    let student = this.students.find(x => x.id === id)
    let index = this.students.indexOf(student!, 0)
    this.students.splice(index,1)
  }
  onUpdate(student: Student) {
    let oldStudent = this.students.find(x => x.id === student.id);
    oldStudent!.name = student.name;
    oldStudent!.age = student.age;
    oldStudent!.guardian = student.guardian;
    oldStudent!.class = student.class;
    oldStudent!.gender = student.gender;

  }
}
