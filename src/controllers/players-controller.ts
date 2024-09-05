import { Request,response,Response } from "express";
import * as service from "../services/players-service";
import { statisticsModel } from "../models/statistics-mode";


export const getPlayer = async(req: Request, res: Response) => {
    const HttpResponse = service.getPlayerService();
    res.status((await HttpResponse).statusCode).json((await HttpResponse).body);
};

export const getPlayerByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body)
    
};

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }

    console.log(bodyValue);
};

export const deletePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}


export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    const response = await service.updatePlayerService(id, bodyValue)
    res.status(response.statusCode).json(response.body)
}

