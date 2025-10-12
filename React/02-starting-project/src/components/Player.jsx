import { useRef, useState } from 'react';

export default function Player() {
  const inputName = useRef();
  const [playerName, setPlayerName] = useState('unknown entity');

  function handleNameChange() {
    if (inputName.current.value !== '') setPlayerName(inputName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
