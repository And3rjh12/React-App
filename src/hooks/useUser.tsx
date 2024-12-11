
import { useEffect, useState } from "react";
import{ User } from '../interfaces/reques.response'
import {loadUserAction} from '../actions/load-user'

export default function useUser() {
    const [users ,setUsers ] = useState<User[]>([]);
    useEffect(()=>{
        loadUserAction().then((users)=>setUsers(users))
},[])
    return {users}
}