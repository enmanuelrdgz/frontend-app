import {test} from "@jest/globals"
import calculatePercentage from "../src/utils/calculatePercentage.ts"

    test("devolver cero si recibo solo un parametro con valor mayor a cero" , ()=>{
        const porcetaje = calculatePercentage(10 , 0)
        expect(porcetaje).toBe(0)
        
    })
    test("devolver cero si en ambos parametros recibo un numero igual a cero",()=>{
        const porcetaje = calculatePercentage(0 , 0)
        expect(porcetaje).toBe(0)
       
    })
    test("devolver el cien porciento si recibo dos numeros del mismo valor" , ()=>{
        const porcentaje = calculatePercentage(10,10)
        expect(porcentaje).toBe(100)
    })
 
    
