const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  // Buscar usuários
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return await response.json();
  },

  // Criar usuário
  createUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  // Atualizar usuário
  updateUser: async (id, userData) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  // Deletar usuário
  deleteUser: async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  },
};
