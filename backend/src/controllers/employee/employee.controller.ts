import { Controller, UseFilters, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { EmployeeService } from '../../services/employee/employee.service';
import { EmployeeModel } from '../../models/employee.model';

@Controller('employee')
@UseFilters(new HttpExceptionFilter())
export class EmployeeController {

    constructor(private employeeService: EmployeeService) { }

    // Create 
    @Post('add')
    async Add(@Body() employee: EmployeeModel) {
        // throw new ForbiddenException();
        return await this.employeeService.add(employee);
    }

    // Read All
    @Get('all')
    async GetAll() {
        // throw new ForbiddenException();
        return await this.employeeService.getAll();
    }

    // Read One
    @Get('get/:id')
    async GetOne(@Param('id') id) {
        // throw new ForbiddenException();
        return await this.employeeService.getOne(id);
    }

    // Update
    @Put('update/:id')
    async Update(@Param('id') id, @Body() employee: any) {
        // throw new ForbiddenException();
        await this.employeeService.update(id, employee);
    }

    // Delete 
    @Delete('delete/:id')
    async Delete(@Param('id') id) {
        // throw new ForbiddenException();
        await this.employeeService.delete(id);
    }
}
