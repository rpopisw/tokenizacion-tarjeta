import { GetCardByTokkenUseCase } from "./get-card-by-tokken";

describe('USE-CASE | GetCardByTokken', () => {
    let getCardByTokkenUseCase: GetCardByTokkenUseCase;
    let cardRepository = {
        saveCard: jest.fn(),
        getCardByToken: jest.fn()
    }
    let commerceService = {
        getCommerceByPk: jest.fn()
    }
    beforeAll(() => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date(2020, 3, 1));
    });

    afterAll(() => {
        jest.useRealTimers();
    });
    beforeEach(() => {
        cardRepository = {
            saveCard: jest.fn(),
            getCardByToken: jest.fn()
        }
        commerceService = {
            getCommerceByPk: jest.fn()
        }
        getCardByTokkenUseCase = new GetCardByTokkenUseCase(cardRepository, commerceService);
        jest.restoreAllMocks();
    })
    
    it('should return error when card not found', async () => {
        jest.spyOn(cardRepository, 'getCardByToken').mockResolvedValue(null);
        jest.spyOn(commerceService, 'getCommerceByPk').mockResolvedValue({ pk: "" });
        const result = await getCardByTokkenUseCase.execute("", "");
        expect(result).toEqual({ msg: "Card not found" });
    })
    
    it('should return card when card found', async () => {
        const card = {
            card_number: "1234567890123456",
            expiration_year: "2021",
            expiration_month: "12",
            cvv: "123",
            tokken: "1234567890123456",
            pk: "1234567890123456",
        }
        jest.spyOn(cardRepository, 'getCardByToken').mockResolvedValueOnce(card);
        jest.spyOn(commerceService, 'getCommerceByPk').mockResolvedValueOnce({ pk: "" });
        const result = await getCardByTokkenUseCase.execute(card.tokken, card.pk);
        expect(result).toBeDefined();
        expect(result).toEqual({
            card_number: "1234567890123456",
            expiration_year: "2021",
            expiration_month: "12",
        });
    })
})