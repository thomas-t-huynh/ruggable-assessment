import React, { useState } from 'react';
import Input from '../../Components/Atoms/Input/Input';

import { Container, Card, InstagramLogo } from './Login.styles';

export function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Container>
      <Card>
        <InstagramLogo />
        <Input
          label="Phone number, username, or email"
          type="email"
          value={username}
          name="username"
          onChange={handleOnChange}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleOnChange}
        />
      </Card>
    </Container>
  );
}
