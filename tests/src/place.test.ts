import {test_place, test_pin} from "./func"

describe('India Places', () => {
    describe('Testing State', () =>{
        it('should return true because we are sending a valid state', () => {
            expect(test_place("West Bengal")).toBe(true)
        })

        it('should return false because we are sending a invalid state', () => {
            expect(test_place("East Bengal")).toBe(false)
        })
    })

    describe('Testing District', () =>{
        it('should return true because we are sending a valid district', () => {
            expect(test_place("West Bengal", "North 24 parganas")).toBe(true)
        })

        it('should return false because we are sending a invalid district', () => {
            expect(test_place("West Bengal", "North 69 parganas")).toBe(false)
        })
    })

    describe('Testing Place', () =>{
        it('should return true because we are sending a valid place', () => {
            expect(test_place("West Bengal", "North 24 parganas", "Barasat")).toBe(true)
        })

        it('should return false because we are sending a invalid place', () => {
            expect(test_place("West Bengal", "North 24 parganas", "Raniganj")).toBe(false)
        })
    })

    describe('Testing Pin', () =>{
        it('should return true because we are sending a valid pincode', () => {
            expect(test_pin(743263)).toBe(true)
        })

        it('should return false because we are sending a invalid pincode', () => {
            expect(test_pin(696969)).toBe(false)
        })
    })
})