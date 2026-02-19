import  { Request, Response } from "express";
import * as Service from "../services/players-service";


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await Service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

type PlayerParams = {
    id: string
};

export const getPlayerById = async (req: Request<PlayerParams>, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)){
        return res.status(400).json({ message: "Invalid Id" })
    }  
    const HttpResponse =  await Service.getPlayerByIdService(id);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await Service.createPlayerService(req.body);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)){
        return res.status(400).json({ message: "Invalid Id" });
    }

    const httpResponse = await Service.deletePlayerService(id);

    if (!httpResponse){
        return res.status(500).json({ message: "Unexpected error" });
    }

    if (httpResponse.statusCode === 204){
        return res.status(204).send();
    }

    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {

    const id = Number(req.params.id);

    if (isNaN(id)){
        return res.status(400).json({ message: "Invalid Id" });
    }

    const HttpResponse = await Service.updatePlayerService(id, req.body);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
