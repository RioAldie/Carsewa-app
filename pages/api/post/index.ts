// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../services/client';
import { allCarsQuery } from '../../../services/queries'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  
  if(req.method === "GET"){
    const query = allCarsQuery();
    
    const data = await client.fetch(query);
    res.status(200).json(data);
  }
  
}
