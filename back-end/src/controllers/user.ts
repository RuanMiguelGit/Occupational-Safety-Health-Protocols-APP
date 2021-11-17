import {Request, Response} from 'express';
import { CollectionInfo } from 'mongodb';
import { connection } from '../models/connection';

export const getUsers = async (req:Request, res:Response):Promise<Response> => {
    try {
        const response = await connection()
        .then((db:CollectionInfo) => db.collection('users').find({}).toArray())
        .then((res:{}) => res)        
        return res.status(200).json(response)
    }
    catch {
        return res.status(500).json({message:'erro interno do servidor'})
    }
}