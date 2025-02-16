import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     entities: [
        //         User
        //     ],
        // }),
        UserModule
    ],
    controllers: [ApiController],
    providers: []
})
export class ApiModule { }