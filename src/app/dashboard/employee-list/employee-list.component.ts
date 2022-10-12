import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Auth, authState } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  CollectionReference,
  query,
  doc,
  docData,
  addDoc,
  deleteDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { Shift } from '../../shift';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  shifts: Shift[] = [];
  firstname: FormControl = new FormControl('', Validators.required);
  lastname: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', Validators.email);
  phone: FormControl = new FormControl('');
  mobile: FormControl = new FormControl('');
  photo: FormControl = new FormControl('');
  mainShift: FormControl = new FormControl('');

  constructor(
    private auth: Auth,
    private router: Router,
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    authState(this.auth).subscribe(user => {
      if (user) {
        collectionData<Employee>(
          query<Employee>(
            collection(this.firestore, 'employees') as CollectionReference<Employee>
          ), { idField: 'id' },
        ).subscribe(employees => {
          this.employees = employees;
        });
      }
    });
  }

  sendSchedule(email: string) {
  }

  deleteEmployee(id: string) {
    deleteDoc(doc(this.firestore, 'employees', id)).then(() => {
      this.loadEmployees();
    });
  }

  saveEmployee() {
    const firstname = this.firstname.value;
    const lastname = this.lastname.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const mobile = this.mobile.value;
    const photo = this.photo.value;
    const mainShift = this.mainShift.value;
    addDoc(
      collection(this.firestore, 'employees'),
      { firstname, lastname, email, phone: phone ? phone : '', mobile: mobile ? mobile : '', photo: photo ? photo : '', mainShift: mainShift ? mainShift : '' }
    ).then(() => {
      this.router.navigate(['/dashboard', 'employee', 'list']);
    });
  }

  onChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (!reader.result) {return}
      this.photo.setValue(reader.result.toString());
    });
    reader.readAsDataURL(file);
  }

}
