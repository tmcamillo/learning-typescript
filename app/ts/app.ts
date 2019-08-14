import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();
$(".form").submit(controller.addInfos.bind(controller));
$("#import").click(controller.importData.bind(controller));
