import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendUrl = process.env.BACKEND_URL;
  const url = `${backendUrl}/auth/login`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json'
        // Si tienes tokens o autenticación, reenvía los headers necesarios
      },
      body: req.method === 'GET' ? null : JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error en proxy de login:', error);
    res.status(500).json({ message: 'Error en el servidor proxy' });
  }
}
