import { ApiProperty } from '@nestjs/swagger';
export class Job {
  @ApiProperty()
  ID: number;

  @ApiProperty()
  state: string;

  @ApiProperty()
  priority: number;

  @ApiProperty()
  filepath: string;

  @ApiProperty()
  command: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  completed: boolean;

  @ApiProperty({ required: false, nullable: true })
  beginAt: string | null;

  @ApiProperty({ required: false, nullable: true })
  finishAt: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date | null;
}
