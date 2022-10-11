import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { Card } from "../../domain/entities/card.entity";
import { CardRepository } from "../../domain/repositories/card.repository.interface";

export class CreateTokenCardUseCase {
  constructor(
    private readonly cardRepository: CardRepository,
    private readonly commerceService: ICommerceService,
  ) {}
    async execute(card: Card,pk:string): Promise<{msg:string , tokken: string}| {msg:string}> {
      card.pk = pk;
      card.tokken = this.generateTokkenUnique();
      await this.cardRepository.saveCard(card);
      const commerce = await this.commerceService.getCommerceByPk(pk);
      if(!commerce){
        return {msg:"Commerce not found"}
      }
      return {
        msg: "Card saved",
        tokken: card.tokken
      };
    }

    generateTokkenUnique() {
      const random =  
      Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
      const tokken = random.substring(0, 16);
      return tokken;
    }

}