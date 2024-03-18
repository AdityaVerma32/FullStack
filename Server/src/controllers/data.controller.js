import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { Data } from '../models/data.model.js';
import { ApiErrors } from '../utils/ApiErrors.js';

const getData = asyncHandler(
    async (req, res) => {
        try {
            const data = await Data.find();

            console.log("\nSuccessfully retrieved data...");
            res.setHeader('Content-Type', 'application/json');
            return res
                .status(200)
                .json(new ApiResponse(200, data,  "Data Sent Successfully!!"));
        } catch (error) {
            console.error('Error while fetching data:', error);
            const apiError = new ApiErrors(500, 'Internal Server Error');
            return res.status(apiError.statusCode).json(apiError);
        }
    }
);

const postData = asyncHandler(
    async (req, res) => {
        try {
            // Add your data import logic here
            return res
                .status(201)
                .json(new ApiResponse(201, { message: 'Data imported successfully' }));
        } catch (error) {
            console.error('Error while importing data:', error);
            const apiError = new ApiErrors(500, 'Internal Server Error');
            return res.status(apiError.statusCode).json(apiError);
        }
    }
);

export { getData, postData };
