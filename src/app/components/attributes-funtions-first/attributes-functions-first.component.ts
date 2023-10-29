import { Component } from '@angular/core';
import {brackets} from "../../objects/brackets";
import {Student} from "../../entities/student";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-attributes-functions-first',
  templateUrl: './attributes-functions-first.component.html',
  styleUrls: ['./attributes-functions-first.component.css']
})
class AttributesFunctionsFirstComponent {

  private title : string = 'AttributesFunctionsFirstComponent class was working';
  protected readonly brackets = brackets;

  private students : Student[] = []
  private student : Student | undefined

  public getTitle() : string {
    return this.title;
  }

  public create(formStudent : NgForm) {
    let nickname : string = formStudent.value.nickname.trim()
    let age : number = formStudent.value.age
    let year : number = formStudent.value.year
    // console.log(formStudent.value.nickname.trim().length === 0)
    // console.log(age === null)
    if ((nickname.length === 0) || (age === null) || (year === null)) {

      console.log("can't pass")

    }
    else if ((nickname.length !== 0) && (age !== null) && (year !== null)) {
      console.log("pass")
      this.student = new Student(formStudent.value.nickname,formStudent.value.age,formStudent.value.year)
      // this.students.push(this.student) //*** push() add value on the bottom
      this.students.unshift(this.student) //*** unshift() add value on the top
    }
  }

  public reads () : Student[] {
    return this.students
  }

  public delete() {
    this.students.pop()
  }


}

export {
  AttributesFunctionsFirstComponent
}
