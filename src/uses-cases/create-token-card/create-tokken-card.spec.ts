import { Card } from "domain/entities/card.entity";
import { CreateTokenCardUseCase } from "./create-token-card";

describe('USE-CASE | CreateTokenCard', () => {
  let createTokkenCardUseCase: CreateTokenCardUseCase;
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
    createTokkenCardUseCase = new CreateTokenCardUseCase(cardRepository, commerceService);
    jest.restoreAllMocks();
  })

  it('should return error when commerce not found', async () => {
    jest.spyOn(commerceService, 'getCommerceByPk').mockResolvedValue(null);
    const result = await createTokkenCardUseCase.execute({} as Card, "");
    expect(result).toEqual({ msg: "Commerce not found" });
  })

  it('should return tokken when card saved', async () => {
    const tokken: string = "1234567890123456";
    jest.spyOn(commerceService, 'getCommerceByPk').mockResolvedValue({ pk: "" });
    jest.spyOn(cardRepository, 'saveCard').mockResolvedValueOnce({ tokken: tokken });
    const result = await createTokkenCardUseCase.execute({} as Card, "");
    expect(result).toBeDefined();
  })

})