"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedResponse = void 0;
const getFormattedResponse = ({ result, errorMessage }) => {
    return {
        isSuccess: !!result,
        result,
        errorMessage
    };
};
exports.getFormattedResponse = getFormattedResponse;
