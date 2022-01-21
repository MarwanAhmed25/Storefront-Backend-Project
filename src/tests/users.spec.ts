import {User,user} from '../models/users';

const user_ = new User();
const u:user={
    id:2,
    first_name:'21',
    last_name:'50',
    password:'marwan'
};
describe('Tests for User model', ()=>{
    //index function
    it('test index to be define',()=>{
        expect(user_.index()).toBeDefined();
    })
    it('test index to equal',async()=>{
        expect(user_.index()).not.toThrowError;
    })
    //create function
    it('test create to be define',()=>{
        expect(user_.create(u)).toBeDefined();
    })
    it('test create to equal',async()=>{
        expect(user_.create(u)).not.toThrowError;
    })
    //show function
    it('test show to be define',()=>{
        expect(user_.show(2)).toBeDefined();
    })
    it('test show to equal',async()=>{
        const res = await user_.show(1);
        expect(user_.show(2)).not.toThrowError;
    })
    //update function
    it('test update to define',()=>{
        expect(user_.update(u)).toBeDefined();
    })
    it('test update to equal',async()=>{
        expect(user_.update(u)).not.toThrowError;
    })
    //auth function
    it('test auth to define',()=>{
        expect(user_.auth('','')).toBeDefined();
    })
    it('test auth to equal',async()=>{
        expect(user_.auth('21','marwan')).not.toThrowError;
    })
    //delete function
    it('test delete to be define',()=>{
        expect(user_.delete(1)).toBeDefined();
    })
    it('test delete to equal',async()=>{
        expect(user_.delete(2)).not.toThrowError;
    })
    // //
    
})