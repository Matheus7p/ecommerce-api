import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function EcommerceApi(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

void EcommerceApi();
