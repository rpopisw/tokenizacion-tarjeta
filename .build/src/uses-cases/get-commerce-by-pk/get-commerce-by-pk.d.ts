import { Commerce } from "../../domain/entities/commerce.entity";
import { CommerceRepository } from "../../domain/repositories/commerce.repository.inteface";
export declare class GetCommerceByPKUseCase {
    private readonly commerceRepository;
    constructor(commerceRepository: CommerceRepository);
    execute(pk: string): Promise<Commerce | null>;
}
