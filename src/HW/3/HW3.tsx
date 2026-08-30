import React, { useState, ChangeEvent } from 'react';

export const HW3: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  const handleSave = () => {
    const trimmed = currentText.trim();
    if (!trimmed) return; // не сохраняем пустые строки
    setTexts(prev => [...prev, trimmed]); // добавляем, не мутируем
    setCurrentText(''); // очищаем ввод
  };

  return (
    <div id={'hw03'}>
      {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1>
      )}

      <input
        id={'hw03-input'}
        type="text"
        value={currentText}
        onChange={handleChange}
      />

      <button
        id={'hw03-button'}
        onClick={handleSave}
        disabled={!currentText.trim()}
      >
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => (
          <li key={index} id={`hw03-task-${index}`}>
            {el}
          </li>
        ))}
      </ol>
    </div>
  );
};