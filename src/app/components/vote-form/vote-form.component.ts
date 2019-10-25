import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.sass']
})
export class VoteFormComponent implements OnInit {
  isSubmitted: boolean = false;
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.voteForm = this.fb.group({
      email: ['', [Validators.required]],
      vote: ['',  [Validators.required]]
    })
  }

  onSubmit() {
    this.isSubmitted = true
    return this.voteForm.valid ? console.log(JSON.stringify(this.voteForm.value)) : false
  }

  ngOnInit() {
  }
}
