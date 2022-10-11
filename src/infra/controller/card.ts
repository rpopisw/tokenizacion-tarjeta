import { APIGatewayProxyEvent } from 'aws-lambda';
import { myMongoDB } from '../../infra/commons/data-sources/mongodb.datasource';
import { LambdaResponse } from "types/aws-lambda-types";
import { CreateTokenCardUseCase } from '../../uses-cases/create-token-card/create-token-card';
import { CardRepositoryTo } from '../../infra/data/typeorm/repositories/card.repository';
import { validateHeader } from '../../infra/commons/validations/header.validation';
import { validateBody } from '../../infra/commons/validations/body.validation';
import { CommerceService } from '../../infra/services/commerce-service';
import { GetCardByTokkenUseCase } from '../../uses-cases/get-card-by-tokken/get-card-by-tokken';

export const createTokenCard = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
  const errors: never[] = [];
  const body = JSON.parse(event.body as string);
  errors.push(...validateHeader(event.headers));
  errors.push(...validateBody(body))
  if (errors.length > 0) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 400,
      body: JSON.stringify({
        message: 'Bad Request',
        errors: errors,
      }, null, 2),
    }
  }
  const createTokenCardUseCase = new CreateTokenCardUseCase(new CardRepositoryTo(myMongoDB), new CommerceService());
  const msg = await createTokenCardUseCase.execute(body, event.headers.pk as string);
  
  return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify({
        msg
      }),
    }
  };

  export const getCardByTokken = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
    const errors: never[] = [];
    const body = JSON.parse(event.body as string);
    errors.push(...validateHeader(event.headers));
    if (errors.length > 0) {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 400,
        body: JSON.stringify({
          message: 'Bad Request',
          errors: errors,
        }, null, 2),
      }
    }
    const getCardByTokenUseCase = new GetCardByTokkenUseCase(new CardRepositoryTo(myMongoDB), new CommerceService());
    const card = await getCardByTokenUseCase.execute(body.tokken, event.headers.pk as string);
    return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
          card
        }),
      }
    }

