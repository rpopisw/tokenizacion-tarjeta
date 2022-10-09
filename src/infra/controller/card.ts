import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse } from "types/aws-lambda-types";

export const createTokenCard = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify({
          msg:"Hola"
      }),
    }
  };