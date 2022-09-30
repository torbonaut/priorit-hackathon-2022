import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Picture, PictureItApiResponse } from "./picture-it.model";

@Injectable()
export class PictureItService {
    private readonly API_URL = 'https://k9i9drz6.directus.app/items/picture_it';

    constructor(private readonly http: HttpClient) {}


    loadPictures(): Observable<PictureItApiResponse> {
        return this.http.get<PictureItApiResponse>(this.API_URL);
    }
}
