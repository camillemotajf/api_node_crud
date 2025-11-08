import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService.js";
import {ListCustomerService} from "../services/ListCustomersService.js";

class ListCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomerService()

        const customers = await listCustomerService.execute()

        reply.send(customers)
    }
}

export {ListCustomerController}