import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private logger = new Logger(AllExceptionsFilter.name);
    catch(exception: unknown, host: ArgumentsHost) {
        this.logger.error(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        if (['graphql', 'rmq'].includes(host.getType() as string)) {
            throw new HttpException(this.returnedResponse(status, request, exception), status);
        }
        response.status(status).json(this.returnedResponse(status, request, exception));
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    private returnedResponse(status: number, request: Request, exception: any) {
        return {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request?.url,
            method: request?.method,
            params: request?.params,
            query: request?.query,
            exception: {
                name: exception['name'],
                message: exception['message'],
            },
        };
    }
}
