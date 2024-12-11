import { User } from '../interfaces/reques.response';

interface Prps {
    user:User
}
export default function UserRow({user}:Prps) {
    return (
        <tr key={user.id}>
            <td>
                <img src={user.avatar} />
            </td>
            <td>
                <span>{user.first_name} {user.last_name}</span>
            </td>
            <td>
                <span>{user.email}</span>
            </td>
        </tr>
    )
}
