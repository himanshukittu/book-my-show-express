export const getFormattedResponse = ({ result, errorMessage }: { result?: any; errorMessage?: string }): any => {
    return {
        isSuccess: !!result,
        result,
        errorMessage
    }
}