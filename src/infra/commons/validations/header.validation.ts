import { APIGatewayProxyEventHeaders } from "aws-lambda";

export const validateHeader = (header:APIGatewayProxyEventHeaders):[] => {
    let errors:any = [];
    const pk = header.pk;
    if (!pk) {
       errors.push('pk is required');
    }
    if(pk){
        let [ first,second,third ] = pk.split('_');
        if(first !== 'pk'){
            errors.push('pk is not valid');
        }
        if(!['dev','prod','test'].includes(second)){
            errors.push('enviromment is not valid in pk');
        }
        if(third.length !== 16){
            errors.push('pk length is not valid');
        }
    }
    return errors;
}
