import {Order,order} from '../models/orders';
import {user, User} from '../models/users';

const order_ = new Order();
const user_ = new User();
const u:user={
    id:1,
    first_name:'2',
    last_name:'50',
    password:'marwan'
};

const o:order={
    id:1,
    status:"open",
    user_id:1
};

describe('Tests for Orders model', ()=>{
    //index function
    it('test index to be define',()=>{
        expect(order_.index(1)).toBeDefined();
    })
    it('test index to equal',async()=>{
        await user_.create(u);
        expect(order_.index(1)).not.toThrowError;
    })
    //create function
    it('test create be define',()=>{
        expect(order_.create(o)).toBeDefined();
    })
    it('test to create to equal',async()=>{
        await user_.create(u);
        expect(order_.create(o)).not.toThrowError;
    })
    //show function
    it('test show be define',()=>{
        expect(order_.show(1,1)).toBeDefined();
    })
    it('test to show to equal',async()=>{
        expect(order_.show(1,1)).not.toThrowError;
    })
    //update function
    it('test update be define',()=>{
        expect(order_.update(o)).toBeDefined();
    })
    it('test to update to equal',async()=>{
        expect(order_.update(o)).not.toThrowError;
    })
    //delete function
    it('test delete be define',()=>{
        expect(order_.delete(1,1)).toBeDefined();
    })
    it('test delete to equal',async()=>{
        expect(order_.delete(1,1)).not.toThrowError;
    })
    //add product
    it('test add product be define',()=>{
        expect(order_.addProduct(1,1,4)).toBeDefined();
    })
    it('test addProduct to equal',async()=>{
        expect(order_.addProduct(1,1,4)).not.toThrowError;
    })
})