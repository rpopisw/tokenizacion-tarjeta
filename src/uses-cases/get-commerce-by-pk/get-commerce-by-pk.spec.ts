import { GetCommerceByPKUseCase } from "./get-commerce-by-pk";

describe('USE-CASE | GetCommerceByPk', () => {
    let getCommerceByPkUseCase: GetCommerceByPKUseCase;
    let commerceRepository = {
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
        commerceRepository = {
            getCommerceByPk: jest.fn()
        }
        getCommerceByPkUseCase = new GetCommerceByPKUseCase(commerceRepository);
        jest.restoreAllMocks();
    })
    
    it('should return error when commerce not found', async () => {
        jest.spyOn(commerceRepository, 'getCommerceByPk').mockResolvedValue(null);
        const result = await getCommerceByPkUseCase.execute("");
        expect(result).toEqual(null);
    })
    
    it('should return commerce when commerce found', async () => {
        const commerce = {
            pk: "1234567890123456",
            name: "Commerce",
            email: "",
        }
        jest.spyOn(commerceRepository, 'getCommerceByPk').mockResolvedValue(commerce);
        const result = await getCommerceByPkUseCase.execute("");
        expect(result).toEqual(commerce);
    })

})