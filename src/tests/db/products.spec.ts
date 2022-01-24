import {Product,product} from '../../models/products';

const product_ = new Product();
const p:product={
    id:2,
    name:'test',
    price:6,
    category:'5'
};
describe('Tests for Product model', ()=>{

    //index function
    it('test index be define',()=>{
        expect(product_.index).toBeDefined();
    })
    it('test index to equal',async()=>{
        const res = await product_.index();
        expect(res.length).toEqual(1);
    })

    //create function
    it('test create be define',()=>{
        expect(product_.create).toBeDefined();
    })
    it('test create to equal',async()=>{
        const res = await product_.create(p);
        expect(res).toEqual('created');
    })

    //show function
    it('test show be define',()=>{
        expect(product_.show).toBeDefined();
    })
    it('test show to equal',async()=>{
        const res = await product_.show(1);
        
        expect(res).toEqual({ id: 1, name: 'marwan', price: 20, category: 'marwan' });
    })

    //update function
    it('test update be define',()=>{
        expect(product_.update).toBeDefined();
    })
    it('test update to equal',async()=>{
        const p_:product={
            id:2,
            name:'100',
            price:6,
            category:'5'
        };
        const res = await product_.update(p_);
        expect(res).toEqual('updated');
    })
    //delete function
    it('test delete be define',()=>{
        expect(product_.delete).toBeDefined();
    })
    it('test delete to equal',async()=>{
        const res = await product_.delete(2);
        expect(res).toEqual('deleted');
    })
    
    
})