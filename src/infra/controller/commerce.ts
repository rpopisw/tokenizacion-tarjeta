import { APIGatewayProxyEvent } from 'aws-lambda';
import { CommerceRepositoryTO } from '../data/typeorm/repositories/commerce.repository';
import { LambdaResponse } from "types/aws-lambda-types";
import { GetCommerceByPKUseCase } from '../../uses-cases/get-commerce-by-pk/get-commerce-by-pk';
import { mysqlDataSource } from '../data/typeorm/typeorm.mysql.config';

export const validateCommerceByPK = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
      const getCommerceByPkUsecase = new GetCommerceByPKUseCase(new CommerceRepositoryTO(mysqlDataSource));    
      const body = JSON.parse(event.body as string);
      const commerce = await getCommerceByPkUsecase.execute(body.pk as string);
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
          message: 'Commerce by PK',
          data: commerce,
        }, null, 2),
      }
  };