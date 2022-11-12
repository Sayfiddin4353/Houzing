import React from 'react'
import { Button, Input } from '../Generic';
import { Container } from './style';

const Filter = () => {
  return (
    <Container>
        <Input placeholder={"Enter an address, neighborhood, city, or ZIP code"}/>
        <Button type={"light"} marginLeft={20}>Advanced</Button>
        <Button type={"primary"}marginLeft={20} width={180}>Search</Button>
    </Container>
  )
}

export default Filter;