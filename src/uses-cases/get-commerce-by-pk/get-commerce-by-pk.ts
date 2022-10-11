import { Commerce } from "../../domain/entities/commerce.entity";
import { CommerceRepository } from "../../domain/repositories/commerce.repository.inteface";

export class GetCommerceByPKUseCase {
  constructor(
    private readonly commerceRepository: CommerceRepository
  ) {}
  public async execute(pk: string): Promise<Commerce|null> {
    const commerce = await this.commerceRepository.getCommerceByPk(pk);
    return commerce;
  }
}