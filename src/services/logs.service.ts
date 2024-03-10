/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

const debug = (message?: any, ...optionalParams: any[]) => {
    if (__DEV__) console.log(message, ...(optionalParams.length > 0 ? optionalParams : []));
};

const LoggingService = {
    debug
};

export default LoggingService;
