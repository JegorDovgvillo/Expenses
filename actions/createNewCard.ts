import { redirect } from 'next/navigation';

export const submitForm = async (prevState: any, formData: any) => {
  try {
    const data = {
      title: formData.get('title'),
      text: formData.get('text'),
    };

    const request = await fetch('http://localhost:3001/createNewCard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await request.json();

    return {
      message: 'Создано',
    };
  } catch {
    return {
      errors: {
        mainError: 'Произошла ошибка сервера',
      },
    };
  }
};
