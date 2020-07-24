const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    const printData = function (string, data) {
        console.log(data);
    };
    callbackFunction(printData);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then((value) => {
        console.log(value);
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const result = await promiseFunction();
    console.log(result);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    const throwError = function (error) {
        try {
            throw error;
        } catch (e) {
            throw e;
        }
    };
    callbackFunctionError(throwError);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(error => {
        console.log(error);
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        const promise = await promiseFunctionError();
    } catch (err) {
        throw err;
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};