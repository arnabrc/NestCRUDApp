import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './controllers/employee/employee.controller';
import { EmployeeService } from './services/employee/employee.service';
import { employeeSchema } from './schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'employees',
      schema: employeeSchema,
      collection: 'employees'
    }]),
    MongooseModule.forRoot("mongodb://localhost:27017/employeenesttutorial")
    // MongooseModule.forRoot("mongodb+srv://ArnabRC:A_RC@kol-90@cluster0.oguj3.mongodb.net/employeenesttutorial?retryWrites=true&w=majority")
  ],
  controllers: [
    AppController, 
    EmployeeController
  ],
  providers: [
    AppService, 
    EmployeeService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule {}
