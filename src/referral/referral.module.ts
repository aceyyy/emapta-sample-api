import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferralSchema } from './schemas/referral.schema';
import { ReferralController } from './referral.controller';
import { ReferralService } from './referral.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Referral', schema: ReferralSchema }]),
  ],
  controllers: [ReferralController],
  providers: [ReferralService],
})
export class ReferralModule { }
