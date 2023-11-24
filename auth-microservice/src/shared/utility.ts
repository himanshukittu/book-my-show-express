export const getFormattedResponse = ({ result, errorMessage, stacktrace }: { result?: any; errorMessage?: string; stacktrace?: any }): any => {
    return {
        isSuccess: !!result,
        result,
        errorMessage,
        stacktrace
    }
}