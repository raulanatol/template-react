import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useCounterStore } from '../contexts/StoreProvider';

export const Counter: FC = observer(() => {
  const counterStore = useCounterStore();

  const handleIncrement = () => counterStore.incrementCounter();
  const handleDecrement = () => counterStore.decrementCounter();

  return <div>
    <button onClick={handleIncrement}>+</button>
    {counterStore.counter}
    <button onClick={handleDecrement}>-</button>
  </div>;
});
