
import { Model, HydratedDocument } from "mongoose";

export class BaseRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: Partial<T>): Promise<HydratedDocument<T>> {
    return await this.model.create(item);
  }

  async findById(id: string): Promise<HydratedDocument<T> | null> {
    return await this.model.findById(id);
  }

  async findOne(filter: Partial<T>): Promise<HydratedDocument<T> | null> {
    return await this.model.findOne(filter);
  }

  async findAll(): Promise<HydratedDocument<T>[]> {
    return await this.model.find();
  }

  async update(id: string, updateData: Partial<T>): Promise<HydratedDocument<T> | null> {
    return await this.model.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string): Promise<HydratedDocument<T> | null> {
    return await this.model.findByIdAndDelete(id);
  }
}
