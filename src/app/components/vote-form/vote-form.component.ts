import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.sass']
})
export class VoteFormComponent implements OnInit {
  isSubmitted: boolean = false;
  voteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) {
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
    if (this.voteForm.valid) {
      const headers = new HttpHeaders().append("Content-Type", 'application/x-www-form-urlencoded;charset=UTF-8');
      const { email, vote } = this.voteForm.value
      this.http.post("http://localhost:3000/api/user", {email, vote}, { headers })
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        )
    } else {
      return false
    }
  }

  ngOnInit() {
  }
}
