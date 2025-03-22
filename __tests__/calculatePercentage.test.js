import test, { describe } from "node:test"
import calculatePercentage from "../src/utils/calculatePercentage.ts"

describe("mi fn devuelve un porcentaje recibiendo 2 numeros como parametros" , ()=>{

    test("5 dividido en 10 es de cincuenta" , ()=>{
        const porcentaje = calculatePercentage(5,10)
        expect(porcentaje).toBe(50)
        // me devuelve 50 
    })
    
    test("si recibo un param con un number y el otro sin number me devolvera 0" , ()=>{
        const porcetaje = calculatePercentage(10 , 0)
        expect(porcetaje).toBe(0)
        // me devuelve 0
    })
    test("si no recibo ningun numero en los parametros me devuelve 0",()=>{
        const porcetaje = calculatePercentage(0 , 0)
        expect(porcetaje).toBe(0)
        // me devuelve 0
    })
    test("si ambos parametros de la fn son iguales me devuelve el cien porciento" , ()=>{
        const porcentaje = calculatePercentage(10,10)
        expect(porcentaje).toBe(100)
        // me devuelve 100
    })
    test("si no recibo parametros devolver NaN" , ()=>{
        const porcentaje = calculatePercentage()
        expect(porcentaje).toBe(NaN)
    })
    
})