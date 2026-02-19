import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../ultis/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    return HttpResponse.ok(data);
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.notFound();
    }
    return response;
};

export const createPlayerService = async (player: Omit<PlayerModel, "id">) => {
    await PlayerRepository.insertPlayer(player);
    return HttpResponse.created();
};

export const deletePlayerService = async (id: number) => {
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);
    if (!isDeleted){
        return HttpResponse.notFound();
    }
    return HttpResponse.noContent();
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {

    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

    if (!data){
        return await HttpResponse.notFound();
    }

    return await HttpResponse.ok(data);
};
