import {Product,product} from '../models/products';

const product_ = new Product();
const p:product={
    id:1,
    name:'50',
    price:6,
    category:'5'
};
describe('Tests for Product model', ()=>{
    //index function
    it('test index be define',()=>{
        expect(product_.index()).toBeDefined();
    })
    it('test index to equal',async()=>{
        expect(product_.index()).not.toThrowError;
    })
    //create function
    it('test create be define',()=>{
        expect(product_.create(p)).toBeDefined();
    })
    it('test create to equal',async()=>{
        expect(product_.create(p)).not.toThrowError;
    })
    //show function
    it('test show be define',()=>{
        expect(product_.show(1)).toBeDefined();
    })
    it('test show to equal',async()=>{
        expect(product_.show(1)).not.toThrowError;
    })
    //update function
    it('test update be define',()=>{
        expect(product_.update(p)).toBeDefined();
    })
    it('test update to equal',async()=>{
        expect(product_.update(p)).not.toThrowError;
    })
    //delete function
    it('test delete be define',()=>{
        expect(product_.delete(1)).toBeDefined();
    })
    it('test delete to equal',async()=>{
        expect(product_.delete(1)).not.toThrowError;
    })
    //
    
})