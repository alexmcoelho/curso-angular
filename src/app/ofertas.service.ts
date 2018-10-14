import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

@Injectable()
export class OfertasService{

    private urlApi = 'http://localhost:3000'

    constructor(private http: Http){}

    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http e retornar
        return this.http.get(`${this.urlApi}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${this.urlApi}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())

    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${this.urlApi}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json().shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${this.urlApi}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json().shift().descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${this.urlApi}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json().shift().descricao
            })
    }
}