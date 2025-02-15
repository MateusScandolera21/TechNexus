import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para o back-end com axios
        axios.get('http://localhost:5000/api/users')
        .then(response => setUsers(response.Data)) // Atualiza o estado com os dados
        .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);

    return (
        <div>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

const addUser = (user) => {
    axios.post('http://localhost:5001/api/users', user)
    .then(response => console.log('Usuário adicionado:', response.data))
    .catch(error => console.error('Erro ao adicionar usuário:', error));
};