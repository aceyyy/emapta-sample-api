import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Referral } from './schemas/referral.schema';
import mongoose, { Types } from 'mongoose';
import { GetAllReferralResponse } from './referral.controller';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralDto } from './dto/update-referral.dto';

@Injectable()
export class ReferralService {
  constructor(
    @InjectModel(Referral.name)
    private referralModel: mongoose.Model<Referral>,
  ) { }

  async findAll(query: { page?: number; limit?: number }): Promise<GetAllReferralResponse> {
    try {
      const { page, limit } = query;
      const resPerPage = Number(limit) || 10;
      const currentPage = Number(page) || 1;
      const skip = resPerPage * (currentPage - 1);

      const total = await this.referralModel.countDocuments();

      let referralsQuery = this.referralModel.find({}).sort({ createdAt: -1 });

      if (page && limit) {
        referralsQuery = referralsQuery.limit(resPerPage).skip(skip);
      }

      const referrals = await referralsQuery;

      return { data: referrals, total };
    } catch (error) {
      throw error;
    }
  }

  async create(referral: CreateReferralDto): Promise<Referral> {
    try {
      const response = await this.referralModel.create(referral);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: string, referral: UpdateReferralDto): Promise<Referral> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new HttpException('Referral ID not found', HttpStatus.BAD_REQUEST);
      }

      const response = await this.referralModel.findByIdAndUpdate(id, referral,
        { new: true, runValidators: true });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<Referral> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new HttpException('Referral ID not found', HttpStatus.BAD_REQUEST);
      }
      
      const response = await this.referralModel.findByIdAndDelete(id);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
