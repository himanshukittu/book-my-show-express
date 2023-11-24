import npmlog from 'npmlog';

export class Logger {
    public static log(logType: 'error' | 'silly' | 'verbose' | 'info' | 'http' | 'warn', prefix: string, message: string, otherArgs: any = []): any {
        npmlog[logType](prefix, message, ...otherArgs);
    }
}