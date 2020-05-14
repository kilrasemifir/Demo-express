import { demoController } from "./controllers/DemoController"
import { userController } from "./controllers/Usercontroller"
import { secourController } from "./controllers/SecourController"

// @ts-ignore
export const routing = (app) => {
    // Demo
    app.get('/',demoController.demo)
    app.get('/hello',demoController.hello)
    app.get('/test', demoController.test)
    app.post('/',demoController.save)

    // User
    app.post('/users', userController.save)
    app.get('/users', userController.findAll)
    app.get('/users/:id', userController.findById)
    app.delete('/users/:id', userController.deleteById)
    app.get('/users/username/:username', userController.findByUsername)
    app.get('/users/:id/secour', userController.findSecour)

    // Secour
    app.post('/secours', secourController.save)
    app.get('/secours', secourController.findAll)
    app.get('/secours/:id', secourController.findById)
    app.delete('/secours/:id', secourController.deleteById)
}