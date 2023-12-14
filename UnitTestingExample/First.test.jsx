import { it } from "vitest";
import App from "../src/App.jsx";
import { shallow, mount } from "enzyme";
import { expect } from "vitest";

const wrapper=shallow(<App/>);


it("renders correctly", () => {
     
     expect(wrapper.exists()).toEqual(true);
     expect(wrapper).toBeDefined()

})

it('h2,div  exist',()=>{
    
    //finding h2 tag
     
    expect(wrapper.find('h2').exists()).toEqual(true);


})

it('classname exist ',()=>{

    //finding classname  exist 
     expect(wrapper.find('.container').exists()).toEqual(true)
     expect(wrapper.find('.text-capitalize').exists()).toEqual(true)

})

it("checking first  text inside div",()=>{
     //expect(wrapper.find(".text-capitalize").text()).toEqual('theme selectorSelect...primarydangersuccesssecondarywarning')

    const wrapper_div=wrapper.find(".text-capitalize")
    expect(wrapper_div.children().first().text()).toEqual('theme selector')

    })


it("checking  eixstence of  div inside div ",()=>{

     let wrapper_div=wrapper.find(".text-capitalize")
    
      wrapper_div=wrapper.find("div").exists()


      expect (wrapper_div).toEqual(true)


})


it("checking  tags of  div inside div ",()=>{
    let wrapper_div=wrapper.find(".text-capitalize");
    wrapper_div=wrapper_div.find("div");
    expect(wrapper_div.find('select').exists()).toEqual(true);
    expect(wrapper_div.find('option').exists()).toEqual(true);
})


it(" Checking content of  div inside div ",()=>{
  let wrapper_div=wrapper.find(".text-capitalize");
   let wrapper_div2=wrapper_div.find("select");
   expect(wrapper_div2.children().first().text()).toEqual('Select...')

 })import { it } from "vitest";
import App from "../src/App.jsx";
import { shallow, mount } from "enzyme";
import { expect } from "vitest";

const wrapper=shallow(<App/>);


it("renders correctly", () => {
     
     expect(wrapper.exists()).toEqual(true);
     expect(wrapper).toBeDefined()

})

it('h2,div  exist',()=>{
    
    //finding h2 tag
     
    expect(wrapper.find('h2').exists()).toEqual(true);


})

it('classname exist ',()=>{

    //finding classname  exist 
     expect(wrapper.find('.container').exists()).toEqual(true)
     expect(wrapper.find('.text-capitalize').exists()).toEqual(true)

})

it("checking first  text inside div",()=>{
     //expect(wrapper.find(".text-capitalize").text()).toEqual('theme selectorSelect...primarydangersuccesssecondarywarning')

    const wrapper_div=wrapper.find(".text-capitalize")
    expect(wrapper_div.children().first().text()).toEqual('theme selector')

    })


it("checking  eixstence of  div inside div ",()=>{

     let wrapper_div=wrapper.find(".text-capitalize")
    
      wrapper_div=wrapper.find("div").exists()


      expect (wrapper_div).toEqual(true)


})


it("checking  tags of  div inside div ",()=>{
    let wrapper_div=wrapper.find(".text-capitalize");
    wrapper_div=wrapper_div.find("div");
    expect(wrapper_div.find('select').exists()).toEqual(true);
    expect(wrapper_div.find('option').exists()).toEqual(true);
})


it(" Checking content of  div inside div ",()=>{
  let wrapper_div=wrapper.find(".text-capitalize");
   let wrapper_div2=wrapper_div.find("select");
   expect(wrapper_div2.children().first().text()).toEqual('Select...')

 })
