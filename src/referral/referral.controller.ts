import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { Referral } from './schemas/referral.schema';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralDto } from './dto/update-referral.dto';

export interface GetAllReferralResponse {
  data: Referral[];
  total: number;
}

@Controller('referrals')
export class ReferralController {
  constructor(private referralService: ReferralService) { }

  @Get()
  async findAll(@Query() query): Promise<GetAllReferralResponse> {
    return this.referralService.findAll(query);
  }

  @Post()
  async create(@Body() referral: CreateReferralDto): Promise<Referral> {
    return this.referralService.create(referral);
  }

  @Put(':id')
  async updateById(@Param('id') id: string, @Body() referral: UpdateReferralDto): Promise<Referral> {
    return this.referralService.updateById(id, referral);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<Referral> {
    return this.referralService.deleteById(id);
  }
}
