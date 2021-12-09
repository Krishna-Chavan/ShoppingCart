import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FilterDisplay from './FilterDisplay'

export default function Filter() {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const fetchUsers = async()=> {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                                   .catch(err=>console.log('err',err))
                setUsers(response.data)
    }

    useEffect(()=>{
        fetchUsers();
    },[])
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} />
            <div>
                {
                    users.filter((val)=>{
                        if(searchTerm === ""){
                            return val;
                        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    }).map((user)=>
                    <FilterDisplay 
                        name={user.name}
                    />)
                }
            </div>
        </div>
    )
}
