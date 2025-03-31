import { Request, Response } from 'express';

export const getRootController = async function (request: Request, response: Response): Promise<void> {
  try {
    response.status(200).json({message: "Hello World"});
  } catch (error) {
    response.status(500).json({error: error});
  }
}

