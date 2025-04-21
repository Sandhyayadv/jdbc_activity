import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { QuoteRequest, QuoteResponse } from '../models/quote.model'; // Adjust path if needed

export interface QuoteRequest {
  customerId: number;
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  professionalDetails: {
    specialization: string;
    qualification: string;
    yearsOfExperience: number;
    typeOfPractice: string;
    location: string;
  };
  coverageDetails: {
    bodilyInjury: boolean;
    negligence: boolean;
    legalDefenseCost: boolean;
    confidentialityBreach: boolean;
    employeeDishonesty: boolean;
    lossOfDocuments: boolean;
    sumInsured: number;
  };
}

export interface QuoteResponse {
  coverageId: any;
  premiumId: any;
  quoteId: any;
  id: number;
  customerName: string;
  premium: number;
  selectedCoverages: {
    [key: string]: boolean;
  };
  basePremium: number;
  riskFactorMultipliers: {
    [key: string]: number;
  };
  coverageMultipliers: {
    [key: string]: number;
  };
  finalPremium: number;
  createdAt: Date;
}


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  
  // private baseUrl = 'http://localhost:8080/quote';

  constructor(private http: HttpClient) {}

  // Create empty quote
// createEmptyQuote(customerId: number) {
//   return this.http.post<{ quoteId: number }>(
//     `http://localhost:8080/quote/createQuote/${customerId}`,
//     {}
//   );
// }

createEmptyQuote(request: QuoteRequest): Observable<QuoteResponse> {
  const url = `http://localhost:8080/quote/createQuote`;
  return this.http.post<QuoteResponse>(url, request);
}


// createQuote(request: QuoteRequest): Observable<QuoteResponse> {
//   const url = 'http://localhost:8080/quote/createQuote';
//   return this.http.post<QuoteResponse>(url, request);
// }






// Call risk factor API
getRiskFactors(quoteId: number) {
  return this.http.get(`http://localhost:8080/risk/riskFactor?quote_id=${quoteId}`);
}

// Call risk multiplier API
getRiskMultiplier(id: number) {
  return this.http.get<number>(`http://localhost:8080/risk/riskMultiplier?id=${id}`);
}

// Call coverage factor API
getCoverageFactors(quoteId: number) {
  return this.http.get(`http://localhost:8080/coverages/coverageFactor?quote_id=${quoteId}`);
}

// Call coverage multiplier API
getCoverageMultiplier(id: number) {
  return this.http.get<number>(`http://localhost:8080/coverages/multiplier?id=${id}`);
}

// Save sum insured
saveSumInsured(quoteId: number, sumInsuredValue: number) {
  return this.http.post(
    `http://localhost:8080/premium/saveSumInsured?sumInsuredValue=${sumInsuredValue}&quote_id=${quoteId}`,
    {}
  );
}

// Get final premium
// getPremium(quoteId: number, pid: number) {
//   return this.http.get<number>(`http://localhost:8080/premium/basepremium?quote_id=${quoteId}&pid=${pid}`);
// }

calculatePremium(quoteId: any, pid: any): Observable<number> {
  const url = `http://localhost:8080/premium/calculatePremium?quote_id=${quoteId}&pid=${pid}`;
  return this.http.get<number>(url);
}


}
