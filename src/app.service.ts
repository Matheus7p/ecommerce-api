import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  public getHello(): string {
    return "Estamos fazendo uma api de ecommerce :p";
  }
}
