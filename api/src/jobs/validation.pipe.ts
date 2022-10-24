// import { PipeTransform, Injectable } from '@nestjs/common';
// import { CreateJobDto } from './dto/create-job.dto';

// @Injectable()
// export class SearchItemPipe
//   implements PipeTransform<CreateJobDto, CreateJobformDTO>
// {
//   transform(searchItemDTO: CreateJobDto): CreateJobransformDTO {
//     return Object.entries(searchItemDTO).reduce((acc, cur) => {
//       const key = cur[0];
//       const value = ['minPrice', 'maxPrice', 'page', 'limit'].includes(key)
//         ? parseInt(cur[1])
//         : cur[1];
//       return { ...acc, [key]: value };
//     }, {});
//   }
// }
