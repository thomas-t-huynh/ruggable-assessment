import React, { useState } from 'react';

import { Input } from '../../Components/Molecules';
import { Button, Spacer } from '../../Components/Atoms';
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
        <Spacer height={10} />
        <Input
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleOnChange}
        />
        <Button>Log In</Button>
      </Card>
    </Container>
  );
}
