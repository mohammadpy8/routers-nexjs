
import Link from "next/link";

const users = [

    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    
];

const Users = () => {
    return (
        <div>
            <h1>users list</h1>

            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>user{user.id}</Link>
                        </li>
                    ))
               } 
            </ul>
        </div>
    );
};

export default Users;