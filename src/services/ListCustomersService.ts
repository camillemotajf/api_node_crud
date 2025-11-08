import prismaClient from "../prisma/index.js";

class ListCustomerService{
    async execute() {
        const customers = await prismaClient.customer.findMany()
        return customers
    }
}

export { ListCustomerService } 