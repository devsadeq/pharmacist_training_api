import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlansModule } from "./modules/plans/plans.module";
import { RolesModule } from "./modules/roles/roles.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [UsersModule , RolesModule , PlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
