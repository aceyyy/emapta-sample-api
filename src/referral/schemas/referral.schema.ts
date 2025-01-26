import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})

export class Referral extends Document {
  @Prop()
  givenName: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  homeName: string;

  @Prop()
  street: string;

  @Prop()
  suburb: string;

  @Prop()
  state: string;

  @Prop()
  postcode: string;

  @Prop()
  country: string;

  @Prop()
  avatar: string;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);
