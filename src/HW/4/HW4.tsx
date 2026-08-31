import React, { useState, ChangeEvent } from 'react';
import s from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
    'Не бойся, если что-то не получается. (Аль Капоне)'
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  const handleSave = () => {
    const trimmed = currentText.trim();
    if (!trimmed) return;
    // Функциональный апдейт защищает от гонок состояния при быстрых кликах/вводе
    setTexts(prev => [trimmed, ...prev]);
    setCurrentText('');
  };

  return (
    <div id={'hw04'}>
      {currentText ? (
        <h1 id={'hw04-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
      )}

      <Input
        value={currentText}
        onChange={handleChange}
        onEnter={handleSave}
        id={'hw04-input'}
      />

      <Button callBack={handleSave} name={'Сохранить'} />

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw04-tasks'}>
        {texts.map((el, index) => {
          return (
            <li
              key={index}
              id={`hw04-task-${index}`}
              className={index % 2 === 0 ? s.chetNechet : ''}
            >
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};