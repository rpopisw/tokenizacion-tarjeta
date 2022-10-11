import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse } from "types/aws-lambda-types";
export declare const validateCommerceByPK: (event: APIGatewayProxyEvent) => Promise<LambdaResponse>;
