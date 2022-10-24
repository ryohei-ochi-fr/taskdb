import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { parse } from 'date-fns';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const format = 'yyyy-MM-dd HH:mm:ss';

    let beginAt = context.switchToHttp().getRequest().body.beginAt;
    let finishAt = context.switchToHttp().getRequest().body.finishAt;

    // JST(localtime)
    console.log('beginAt_bfore:', beginAt);

    beginAt = parse(beginAt, format, new Date());
    finishAt = parse(finishAt, format, new Date());

    // UTC
    console.log('beginAt_after:', beginAt);

    context.switchToHttp().getRequest().body.beginAt = beginAt;
    context.switchToHttp().getRequest().body.finishAt = finishAt;

    console.log('body: ', context.switchToHttp().getRequest().body);

    return next.handle();
  }
}
