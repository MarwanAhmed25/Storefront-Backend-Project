import {User,user} from '../../models/users';

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
        expect(user_.index).toBeDefined();
    })
    it('test index to equal',async()=>{
        const res = await user_.index();
        expect(res).not.toThrowError;
    })
    //create function
    it('test create to be define',()=>{
        expect(user_.create).toBeDefined();
    })
    it('test create to equal',async()=>{
        const res = await user_.create(u);
        expect(res).toEqual('created');
    })
    //show function
    it('test show to be define',()=>{
        expect(user_.show).toBeDefined();
    })
    it('test show to equal',async()=>{
        const res = await user_.show(2);
        expect(res).not.toThrowError;
    })
    //update function
    it('test update to define',()=>{
        expect(user_.update).toBeDefined();
    })
    it('test update to equal',async()=>{
        const res=await user_.update(u);
        expect(res).toEqual('updated');
    })
    //auth function
    it('test auth to define',()=>{
        expect(user_.auth).toBeDefined();
    })
    it('test auth to equal',async()=>{
        const res = await user_.auth('21','marwan');
        expect(res).toEqual('succeed');
    })

    //delete function
    it('test delete to be define',()=>{
        expect(user_.delete).toBeDefined();
    })

    it('test delete to equal',async()=>{
        const res = await user_.delete(2);
        expect(res).toEqual('deleted');
    })
    
    
})