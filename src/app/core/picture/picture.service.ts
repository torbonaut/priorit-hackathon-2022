import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  PictureIt } from "./picture.model";

@Injectable()
export class PictureItsService {
    private readonly API_URL = 'https://k9i9drz6.directus.app/items/picture-its';

    constructor(private readonly http: HttpClient) {}

    addPictureIt(item: Omit<PictureIt, 'user_created'>) {
        return this.http.post(this.API_URL, { ...item });
    }

}
