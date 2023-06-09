import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsServiceService {

  constructor(private http : HttpClient) { }

  baseUrl = "https://localhost:7002/api/Tickets"

  getAllTickets():Observable<Ticket[]>{ 
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  addTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(this.baseUrl,ticket);
  }

  deleteTicket(id:number):Observable<Ticket>{
    return this.http.delete<Ticket>(this.baseUrl+'/'+id);
  }

  updateTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.put<Ticket>(this.baseUrl+'/'+ticket.id,ticket);
  }
}
