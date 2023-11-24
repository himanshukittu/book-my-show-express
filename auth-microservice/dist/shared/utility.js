"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedResponse = void 0;
const getFormattedResponse = ({ result, errorMessage, stacktrace }) => {
    return {
        isSuccess: !!result,
        result,
        errorMessage,
        stacktrace
    };
};
exports.getFormattedResponse = getFormattedResponse;
//# sourceMappingURL=utility.js.map