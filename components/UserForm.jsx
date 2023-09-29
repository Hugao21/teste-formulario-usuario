// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    cpf: '',
    rg: '',
    orgao_emissor: '',
    uf: '',
    cnpj: '',
    nire: '',
    cep: '',
    numero: '',
    logradouro: '',
    bairro: '',
    municipio: '',
    estado: '',
    tipo_ramo: '',
    ramo: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://test-ap.onrender.com/usuario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar usuário');
      }

      if (response.ok) {
        const data = await response.json();
        console.log('Usuário criado com sucesso:', data);
      } else {
        console.error('Erro ao criar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cpf">cpf:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rg">Rg:</label>
        <input
          type="text"
          id="rg"
          name="rg"
          value={formData.rg}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="orago_emissor">Orgão Emissor:</label>
        <input
          type="text"
          id="orgao_emissor"
          name="orgao_emissor"
          value={formData.orgao_emissor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="uf">Unidade Federal (Estado):</label>
        <input
          type="text"
          id="uf"
          name="uf"
          value={formData.uf}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nire">Nier:</label>
        <input
          type="text"
          id="nire"
          name="nire"
          value={formData.nire}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;