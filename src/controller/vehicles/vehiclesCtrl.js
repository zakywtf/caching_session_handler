import {controller} from '../../classes/classController';
import m from '../../model/vehicles/vehicleModel'

let model = new m()
let rtr = controller(model)

module.exports = rtr