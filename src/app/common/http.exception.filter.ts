import {  ExceptionFilter , HttpException , ArgumentsHost   } from '@nestjs/common';

export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode:  exception.name,
            errcode : exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
          });
      }

}