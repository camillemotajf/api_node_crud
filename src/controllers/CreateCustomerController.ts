import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService.js";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        // declara as variaveis que recebem do body
        const { name, email } = request.body as { name: string, email: string}
        console.log(name)
        console.log(email)

        // conecta com o service para salvar no banco
        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({ name, email })
        reply.send(customer)
    }
}

export default CreateCustomerController;
