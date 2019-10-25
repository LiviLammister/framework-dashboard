import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.sass']
})
export class VoteFormComponent implements OnInit {
  voteForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.voteForm = this.fb.group({
      email: [''],
      vote: ['']
    })
  }

  onSubmit() {
    console.log(JSON.stringify(this.voteForm.value))
  }

  ngOnInit() {
  }
}
