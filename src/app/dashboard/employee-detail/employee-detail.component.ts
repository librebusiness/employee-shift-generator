import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  updateDoc,
  deleteDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { Employee } from '../../employee';
import { Shift } from '../../shift';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee | null = null;
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
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.id) {
      docData<Employee>(doc(this.firestore, `employees/${this.id}`) as DocumentReference<Employee>).subscribe(employee => {
        this.employee = employee;
        const {
          firstname,
          lastname,
          email,
          phone,
          mobile,
          photo,
          mainShift
        } = employee;
        this.firstname.setValue(firstname);
        this.lastname.setValue(lastname);
        this.email.setValue(email);
        this.phone.setValue(phone ? phone : '');
        this.mobile.setValue(mobile ? mobile : '');
        this.photo.setValue(photo ? photo : '');
        this.mainShift.setValue(mainShift ? mainShift : '');
      });
      collectionData<Shift>(
        query<Shift>(
          collection(this.firestore, 'shifts') as CollectionReference<Shift>
        ), { idField: 'id' }
      ).subscribe(shifts => {
        this.shifts = shifts;
      });
    }
  }

  get id() {
    return this.route.snapshot.paramMap.get('id');
  }

  deleteEmployee() {
    if (this.id) {
      deleteDoc(
        doc(this.firestore, 'employees', this.id),
      ).then(() => {
        this.router.navigate(['/dashboard', 'employee', 'list']);
      });
    }
  }

  sendSchedule() {
  }

  updateEmployee() {
    const firstname = this.firstname.value;
    const lastname = this.lastname.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const mobile = this.mobile.value;
    const photo = this.photo.value;
    const mainShift = this.mainShift.value;
    if (this.id) {
      updateDoc(
        doc(this.firestore, 'employees', this.id),
        { firstname, lastname, email, phone, mobile, photo, mainShift }
      ).then(() => {
        this.router.navigate(['/dashboard', 'employee', 'list']);
      });
    }
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
