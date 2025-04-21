// import {
//   QuoteRequest,
//   QuoteResponse,
//   QuoteService,
// } from '../services/quote.service'; // Adjust the import path as needed
// // import { QuoteDTO } from '../models/quote.model';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-quote-creation',
//   templateUrl: './quote-creation.component.html',
//   styleUrls: ['./quote-creation.component.css'],
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
// })
// export class QuoteCreationComponent implements OnInit {
//   currentStep = 0;
//   customerId!: number;

//   step = 1;
//   today = new Date();
//   // showQuoteSummaryCard = false;
//   showQuoteSummaryCard: boolean = false;
//   personal!: FormGroup;
//   professional!: FormGroup;
//   coverage!: FormGroup;

//   quoteDetails: QuoteResponse | null = null;
//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private quoteService: QuoteService
//   ) {}

//   // ngOnInit(): void {
//   //   this.initForms();
//   // }

//   ngOnInit(): void {
//     this.route.queryParams.subscribe((params) => {
//       if (params['step']) {
//         this.step = +params['step'];
//       }

//       if (params['customerId']) {
//         this.customerId = +params['customerId'];
//         console.log('Selected Customer ID:', this.customerId); // optional
//       }
//     });

//     this.initForms();
//   }

//   initForms(): void {
//     this.personal = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       dob: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       pan: ['', Validators.required],
//       aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
//       address: ['', Validators.required],
//       city: ['', Validators.required],
//       pin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
//     });

//     this.professional = this.fb.group({
//       professionType: ['', Validators.required],
//       specialization: ['', Validators.required],
//       experience: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
//       qualification: ['', Validators.required],
//       qualificationYear: [
//         '',
//         [Validators.required, Validators.pattern(/^\d{4}$/)],
//       ],
//       registrationNumber: ['', Validators.required],
//       registrationYear: [
//         '',
//         [Validators.required, Validators.pattern(/^\d{4}$/)],
//       ],
//       practiceType: ['', Validators.required],
//       state: ['', Validators.required],
//     });

//     this.coverage = this.fb.group({
//       aoy: ['', Validators.required],
//       aoa: ['', Validators.required],
//       bodilyInjury: [true, Validators.requiredTrue], // Required checkbox
//       negligence: [false],
//       legalDefense: [false],
//       confidentialityBreach: [false],
//       employeeDishonesty: [false],
//       lossOfDocuments: [false],
//       sumInsured: ['', Validators.required],
//       // premium: ['8500'] // default mock value, can be replaced with calculated one
//     });
//   }

//   // this.quoteService.calculatePremium(pid, quoteId).subscribe(premium => {
//   //   this.finalPremium = premium;
//   // });

//   nextStep(): void {
//     if (this.step === 1 && this.personal.valid) {
//       this.step++;
//     } else if (this.step === 2 && this.professional.valid) {
//       this.step++;
//     } else if (this.step === 3 && this.coverage.valid) {
//       this.step++;
//     } else if (this.step < 5) {
//       this.step++;
//     } else {
//       this.markCurrentStepInvalidControls();
//     }
//   }

//   prevStep(): void {
//     if (this.step > 1) {
//       this.step--;
//     }
//   }

//   markCurrentStepInvalidControls(): void {
//     const group = this.getCurrentFormGroup();
//     Object.keys(group.controls).forEach((key) => {
//       group.get(key)?.markAsTouched();
//     });
//   }

//   getCurrentFormGroup(): FormGroup {
//     switch (this.step) {
//       case 1:
//         return this.personal;
//       case 2:
//         return this.professional;
//       case 3:
//         return this.coverage;
//       default:
//         return this.personal;
//     }
//   }

//   onSubmitQuote(): void {
//     if (this.professional.valid && this.coverage.valid && this.personal.valid) {
//       // this.step=5;
//       const sumInsured = this.coverage.value.sumInsured;
//       const request: QuoteRequest = {
//         customerId: this.customerId, // ✅ Important!
//         personalDetails: {
//           firstName: this.personal.value.firstName,
//           lastName: this.personal.value.lastName,
//           email: this.personal.value.email,
//           phone: this.personal.value.phone,
//           address: this.personal.value.address,
//         },
//         professionalDetails: {
//           specialization: this.professional.value.specialization,
//           qualification: this.professional.value.qualification,
//           yearsOfExperience: +this.professional.value.experience,
//           typeOfPractice: this.professional.value.practiceType,
//           location: this.professional.value.location,
//         },
//         coverageDetails: {
//           bodilyInjury: this.coverage.value.bodilyInjury,
//           negligence: this.coverage.value.negligence,
//           legalDefenseCost: this.coverage.value.legalDefense,
//           confidentialityBreach: this.coverage.value.confidentialityBreach,
//           employeeDishonesty: this.coverage.value.employeeDishonesty,
//           lossOfDocuments: this.coverage.value.lossOfDocuments,
//           sumInsured: +this.coverage.value.sumInsured,
//         },
//       };

//       this.step = 5;
//       this.quoteService.createQuote(request).subscribe({
//         next: (response: QuoteResponse) => {
//           this.quoteDetails = response;
//           this.showQuoteSummaryCard = true;
//           console.log('Quote Created:', response);
//         },
//         error: (err) => {
//           console.error('Error creating quote', err);
//         },
//       });

//       // this.showQuoteSummaryCard = true;
//     } else {
//       this.markCurrentStepInvalidControls();
//     }
//   }

//   handleCustomerSelection(isExisting: boolean): void {
//     if (isExisting) {
//       this.router.navigate(['/customer']);
//     } else {
//       this.router.navigate(['/createCustomer']);
//     }
//   }
// }









import {
  QuoteRequest,
  QuoteResponse,
  QuoteService,
} from '../services/quote.service'; // Adjust path as needed
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.component.html',
  styleUrls: ['./quote-creation.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class QuoteCreationComponent implements OnInit {
  currentStep = 0;
  customerId!: number;

  step = 1;
  today = new Date();
  showQuoteSummaryCard: boolean = false;

  personal!: FormGroup;
  professional!: FormGroup;
  coverage!: FormGroup;

  quoteDetails: QuoteResponse | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['step']) this.step = +params['step'];
      if (params['customerId']) {
        this.customerId = +params['customerId'];
        console.log('Selected Customer ID:', this.customerId);
      }
    });

    this.initForms();
  }

  initForms(): void {
    this.personal = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pan: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });

    this.professional = this.fb.group({
      professionType: ['', Validators.required],
      specialization: ['', Validators.required],
      experience: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      qualification: ['', Validators.required],
      qualificationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      registrationNumber: ['', Validators.required],
      registrationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      practiceType: ['', Validators.required],
      state: ['', Validators.required],
      location: ['', Validators.required],
    });

    this.coverage = this.fb.group({
      aoy: ['', Validators.required],
      aoa: ['', Validators.required],
      bodilyInjury: [true, Validators.requiredTrue],
      negligence: [false],
      legalDefense: [false],
      confidentialityBreach: [false],
      employeeDishonesty: [false],
      lossOfDocuments: [false],
      sumInsured: ['', Validators.required],
    });
  }

  nextStep(): void {
    if (this.step === 1 && this.personal.valid) {
      this.step++;
    } else if (this.step === 2 && this.professional.valid) {
      this.step++;
    } else if (this.step === 3 && this.coverage.valid) {
      this.step++;
    } else if (this.step < 5) {
      this.step++;
    } else {
      this.markCurrentStepInvalidControls();
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  markCurrentStepInvalidControls(): void {
    const group = this.getCurrentFormGroup();
    Object.keys(group.controls).forEach((key) => {
      group.get(key)?.markAsTouched();
    });
  }

  getCurrentFormGroup(): FormGroup {
    switch (this.step) {
      case 1:
        return this.personal;
      case 2:
        return this.professional;
      case 3:
        return this.coverage;
      default:
        return this.personal;
    }
  }

  onSubmitQuote(): void {
    if (this.professional.valid && this.coverage.valid && this.personal.valid) {
      const sumInsured = this.coverage.value.sumInsured;

      const request: QuoteRequest = {
        customerId: this.customerId,
        personalDetails: {
          firstName: this.personal.value.firstName,
          lastName: this.personal.value.lastName,
          email: this.personal.value.email,
          phone: this.personal.value.phone,
          address: this.personal.value.address,
        },
        professionalDetails: {
          specialization: this.professional.value.specialization,
          qualification: this.professional.value.qualification,
          yearsOfExperience: +this.professional.value.experience,
          typeOfPractice: this.professional.value.practiceType,
          location: this.professional.value.location,
        },
        coverageDetails: {
          bodilyInjury: this.coverage.value.bodilyInjury,
          negligence: this.coverage.value.negligence,
          legalDefenseCost: this.coverage.value.legalDefense,
          confidentialityBreach: this.coverage.value.confidentialityBreach,
          employeeDishonesty: this.coverage.value.employeeDishonesty,
          lossOfDocuments: this.coverage.value.lossOfDocuments,
          sumInsured: +this.coverage.value.sumInsured,
        },
      };

      this.quoteService.createEmptyQuote(request).subscribe({
        next: (response: QuoteResponse) => {
          this.quoteDetails = response;
          const quoteId = response.quoteId;
          const pid = response.premiumId;
          const cid = response.coverageId;

          // STEP 1: Save sum insured
          this.quoteService.saveSumInsured(+sumInsured, quoteId).subscribe();

          // STEP 2: Save risk factors and get risk multiplier
          this.quoteService.getRiskFactors(quoteId).subscribe(() => {
            this.quoteService.getRiskMultiplier(pid).subscribe();
          });

          // STEP 3: Save coverage and get multiplier
          this.quoteService.getCoverageFactors(quoteId).subscribe(() => {
            this.quoteService.getCoverageMultiplier(cid).subscribe();
          });

          // STEP 4: Calculate Premium
          this.quoteService.calculatePremium(quoteId, pid).subscribe((premium: any) => {
            console.log('Calculated Premium:', premium);
          });

          // STEP 5: Show Final Summary
          this.step = 5;
          this.showQuoteSummaryCard = true;
          console.log('Quote Created:', response);
        },
        error: (err: any) => {
          console.error('Error creating quote', err);
        },
      });
    } else {
      this.markCurrentStepInvalidControls();
    }
  }

  handleCustomerSelection(isExisting: boolean): void {
    if (isExisting) {
      this.router.navigate(['/customer']);
    } else {
      this.router.navigate(['/createCustomer']);
    }
  }
}
