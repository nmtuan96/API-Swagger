import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(public httpClient: HttpClient) { }


  addPet = (pets): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "https://petstore.swagger.io/v2/pet";
          this.httpClient.post(url,pets)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  updatePet = (id,pets): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "http://localhost:8080/customers/update/"+id;
          this.httpClient.put(url,pets)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  detailPet = (id): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "http://localhost:8080/customers/detail/"+id;
          this.httpClient.get(url)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  deleteCustomer = (id): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "http://localhost:8080/customers/delete/"+id;
          this.httpClient.delete(url,id)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  
  getDataPetAvailable = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
        let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
        this.httpClient.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
  }

  getDataPetPending = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
        let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=pending";
        this.httpClient.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
 }

 getDataPetSold = (): Promise<Object> => {
  return new Promise((resolve, reject) => {
      let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";
      this.httpClient.get(url)
          .subscribe(res => {
              resolve(res);
          }, err => {
              reject(err);
          })
  })
}
}