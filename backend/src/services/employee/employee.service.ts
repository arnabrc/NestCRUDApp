import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeModel } from '../../models/employee.model';

@Injectable()
export class EmployeeService {
    
    constructor(@InjectModel('employees') private readonly employeeModel: Model<EmployeeModel>) { }

    // Create 
    async add(employee) {
        const createEmployee = new this.employeeModel(employee);
        await createEmployee.save();
    }

    // Read All
    async getAll() {
        return await this.employeeModel.find();
    }

    // Read All
    async getOne(id) {
        return await this.employeeModel.find({ _id: id });
    }

    // Update
    async update(id, employee) {
        await this.employeeModel.updateOne({ _id: id }, employee);
    }

    // Delete
    async delete(id) {
        await this.employeeModel.deleteOne({ _id: id });
    }
}
