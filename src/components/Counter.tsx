import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useCounterStore } from '../contexts/StoreProvider';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  display: inline-block;
  border: none;
  border-radius: .3em;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 -0.25em 0 rgba(0, 0, 0, 0.25), 0 0.25em 0.25em rgba(0, 0, 0, 0.05);
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5;
  padding: .5em 1.5em .75em;
  position: relative;
  vertical-align: middle;
  user-select: none;
  font-size: 0.75em;
  background-color: ${props => props.color};
  margin: 5px;
`;

const Label = styled.span`
  font-size: 3em;
  margin: 10px;
  min-width: 100px;
  user-select: none;
`;

export const Counter: FC = observer(() => {
  const counterStore = useCounterStore();

  const handleIncrement = () => counterStore.incrementCounter();
  const handleDecrement = () => counterStore.decrementCounter();

  return <Container>
    <Button onClick={handleIncrement} color="#1199EE">+</Button>
    <Label>{counterStore.counter}</Label>
    <Button onClick={handleDecrement} color="#EE4444">-</Button>
  </Container>;
});
