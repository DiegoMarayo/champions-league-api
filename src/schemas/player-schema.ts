import { z } from "zod";

export const statisticsSchema = z.object({
    Overall: z.number(),
    Pace: z.number(),
    Shooting: z.number(),
    Passing: z.number(),
    Dribbling: z.number(),
    Defending: z.number(),
    Physical: z.number(),
});


export const createPlayerSchema = z.object({
    name: z.string(),
    club: z.string(),
    nationality: z.string(),
    position: z.string(),
    statistics: statisticsSchema,
});

