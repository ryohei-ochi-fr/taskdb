import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobDto: CreateJobDto) {
    // const format = 'yyyy-mm-dd hh:mm:ss';
    // const bigenAt = parse(createJobDto.beginAt, format, new Date());

    return this.prisma.jobs.create({ data: createJobDto });
  }

  findAll() {
    return this.prisma.jobs.findMany();
  }

  findQueue() {
    return this.prisma.jobs.findFirst({
      where: {
        completed: false,
        state: 'QUEUED',
      },
      orderBy: { priority: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.jobs.findUnique({ where: { id } });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.prisma.jobs.update({
      where: { id },
      data: updateJobDto,
    });
  }

  remove(id: number) {
    return this.prisma.jobs.delete({ where: { id } });
  }
}
