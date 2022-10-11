import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse } from "types/aws-lambda-types";
export declare const createTokenCard: (event: APIGatewayProxyEvent) => Promise<LambdaResponse>;
export declare const getCardByTokken: (event: APIGatewayProxyEvent) => Promise<LambdaResponse>;
