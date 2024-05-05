import app from '../app.js'
import request from 'supertest'



describe('GET /classrooms  /teachersrooms', ()=>{ //
    //Este test va dirigido a lo que es el endpoint de información de clases disponibles por grados.
    test('should respond with a 200 status code, getting the info subjects per classroom', async ()=>{
        const response = await request(app).get('/api/info/classrooms').send();
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(200);
    })

    test('should respond with a 200 status code, getting the total of teachers per classroom', async ()=>{
        const response = await request(app).get('/api/info/teachersrooms').send();
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(200);
    })


})  

describe("POST /LOGIN", ()=>{
       
    test('Should respond with 200, user and password from the dev stage', async ()=>{
        const response = await request(app).post('/api/auth/login').send(
            {
                email:"pipe@mail.com",
                password:"pipe"
            }
        );
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(200);
    })

    test('Should respond with 400, wrong password or username', async ()=>{
        const response = await request(app).post('/api/auth/login').send(
            {
                email:"pipe@mail.com",
                password:"pipe123"
            }
        );
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(400);
    })
})


describe("POST /TEACHERS", ()=>{
       
    test('Should respond with 200, creating a new teacher with all the info', async ()=>{
        const response = await request(app).post('/api/teachers/teachersRegister').send(
            {
                name:"FELIPE PRUEBAS", 
                lastname:"SANCHEZ PRUEBAS", 
                email:"mail@mail.com", 
                age:"45", 
                profession:"DOCENTE PRUEBA TEST", 
                classroomid:"18"
            }
        );
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(200);
    })

    test('Should respond with 400, Not all the data for the teacher register', async ()=>{
        const response = await request(app).post('/api/teachers/teachersRegister').send(
            {
                name:"FELIPE PRUEBAS", 
                lastname:"SANCHEZ PRUEBAS", 
                email:"mail@mail.com", 
                age:"", 
                profession:"DOCENTE PRUEBA TEST", 
                classroomid:""
            }
        );
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(400);
    })
})


describe("GET /ROOM INFO", ()=>{
       
    test('Should respond with 200, get the classes associated to Quinto', async ()=>{
        const response = await request(app).get('/api/room/class/Quinto').send();
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(200);
    })

    test('Should respond with 500, no info available for the select option (Sexto)', async ()=>{
        const response = await request(app).get('/api/room/class/Sexto').send();
        // console.log(response)
        console.log(response.statusCode)
        console.log(response._body)
        expect(response.statusCode).toBe(500);
    })

})

