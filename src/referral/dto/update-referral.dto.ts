import { IsOptional, IsString } from 'class-validator';

export class UpdateReferralDto {
  @IsOptional()
  @IsString()
  givenName: string;

  @IsOptional()
  @IsString()
  surname: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  homeName: string;

  @IsOptional()
  @IsString()
  street: string;

  @IsOptional()
  @IsString()
  suburb: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  postcode: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  avatar: string;
}
