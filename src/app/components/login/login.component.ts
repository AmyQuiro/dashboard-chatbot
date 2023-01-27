import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f: FormGroup;
  constructor(private fb: FormBuilder,private router : Router) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,, Validators.minLength(6)]],

    });
  }

  onSubmit(modal: any): void {
    if (this.f.valid) {
      alert('login successful')
    } else {

      let temp = this.f.controls['name'];
      console.log('the controls', this.f.controls);
      console.log('name form', temp);
      Object.keys(this.f.controls).forEach(key => {
        this.f.get(key).markAsTouched();
      });
    }

  }
  onReset(): void {
    this.f.reset();
  }
  ngOnInit(): void {
  }


  login(){
    this.router.navigateByUrl('/dashboard-index', { replaceUrl:true });
  }
}
