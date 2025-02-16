import { Repository } from 'typeorm';
import { User } from '@controllers/api/user/user.entity';

export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }
}
