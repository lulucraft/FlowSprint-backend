import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from '@controllers/api/api.module';

@Module({
    imports: [
        ConfigModule.forRoot(),// Load .env file
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            // entities: [__dirname + '/**/*.entity{.ts}'],
            // entities: [ User ],
            autoLoadEntities: true,
            synchronize: process.env.NODE_ENV === 'development',
        }),
        // RouterModule.register(routes),
        ApiModule
    ]
})
export class AppModule { }
