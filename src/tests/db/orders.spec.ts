import {Order,order} from '../../models/orders';
import {user, User} from '../../models/users';
import { Product, product } from '../../models/products';

const product__ = new Product();
const order_ = new Order();
const user_ = new User();

const p:product={
    id:2,
    name:'2',
    price:6,
    category:'2'
}
const u:user={
    id:1,
    first_name:'22',
    last_name:'55',
    password:'marwan123'
};

const o:order={
    id:1,
    status:"open",
    user_id:1
};

describe('Tests for Orders model', ()=>{
    //index function
    it('test index to be define',()=>{
        expect(order_.index).toBeDefined();
    })
    it('test index to equal',async()=>{
        const res1 = await user_.create(u);
        const res = await order_.index(1);
        expect(res).not.toThrowError;
    })
    //create function
    it('test create be define',()=>{
        expect(order_.create).toBeDefined();
    })
    it('test to create to equal',async()=>{
        const res = await order_.create(o);
        expect(res).toEqual('created');
    })
    //show function
    it('test show be define',()=>{
        expect(order_.show).toBeDefined();
    })
    it('test to show to equal',async()=>{
        const res = await order_.show(1,1);
        expect(res).not.toThrowError;
    })
    //update function
    it('test update be define',()=>{
        expect(order_.update).toBeDefined();
    })
    it('test to update to equal',async()=>{
        const res = await order_.update(o);
        expect(res).toEqual('updated');
    })
    //delete function
    it('test delete be define',()=>{
        expect(order_.delete).toBeDefined();
    })
    it('test delete to equal',async()=>{
        const res = await order_.delete(1,1);
        expect(res).toEqual('deleted');
    })
    //add product
    it('test add product be define',()=>{
        expect(order_.addProduct).toBeDefined();
    })
    
})