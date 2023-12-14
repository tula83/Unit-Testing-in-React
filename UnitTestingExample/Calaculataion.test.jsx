import {expect,test,describe, assert}from 'vitest'

test('renders correctly',()=>{
    expect(Math.ceil(Math.sqrt(3))).toBe(2)
})

const person={
    isActive:true,
    age:32,
    getAge:function(){
        return this.age
    },
    check_status:()=>{
       
        return this.isActive
    }
}


describe('Person',()=>{

test('person is defined',()=>{
    expect(person).toBeDefined()
 } )


 test('isacitve is true',()=>{
    expect(person.isActive).toBe(true)

 })

 test('age is defined',()=>{
     expect(person.age).toBeLessThanOrEqual(32)
 })

 test("getAge is defined",()=>{
    expect(person.getAge).toBeInstanceOf(Function)
    expect(person.getAge()).toBe(32)

 })

 test("check_status is defined",()=>{
     expect(person.check_status).toBeInstanceOf(Function)
     expect(person.check_status()).toBe(undefined)
     // this keyword doesnot work inside arrow function
 })
 
}
)
