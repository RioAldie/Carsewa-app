import type { NextApiRequest, NextApiResponse } from 'next'


import { client } from '../../services/client';



export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === "POST"){
    const rental = req.body;

    client.createIfNotExists(rental)
    .then(() => res.status(200).json('Rental Success'))
  }
  
}