import { z } from "zod"

// NOTE: This is currently not in use since the type definition is not complete,
// they also don't provide docs on their public api so we are, unsafely
// parsing server "ids" with no type safety. 😭

export type SearchRes = z.infer<typeof searchSchema>

export const searchSchema = z.object({
  data: z.array(
    z.union([
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            modNames: z.array(z.string()),
            official: z.boolean(),
            serverSteamId: z.string(),
            modded: z.boolean(),
            version: z.string(),
            time: z.string(),
            third_person: z.boolean(),
            password: z.boolean(),
            modIds: z.array(z.number()),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            official: z.boolean(),
            password: z.boolean(),
            modIds: z.array(z.number()),
            time: z.string(),
            third_person: z.boolean(),
            modNames: z.array(z.string()),
            modded: z.boolean(),
            serverSteamId: z.string(),
            version: z.string(),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            modIds: z.array(z.number()),
            lastRestart: z.string(),
            third_person: z.boolean(),
            password: z.boolean(),
            serverSteamId: z.string(),
            version: z.string(),
            time: z.string(),
            official: z.boolean(),
            modded: z.boolean(),
            modNames: z.array(z.string()),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            third_person: z.boolean(),
            modded: z.boolean(),
            modNames: z.array(z.string()),
            time: z.string(),
            password: z.boolean(),
            modIds: z.array(z.number()),
            official: z.boolean(),
            serverSteamId: z.string(),
            version: z.string(),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            modIds: z.array(z.number()),
            third_person: z.boolean(),
            password: z.boolean(),
            serverSteamId: z.string(),
            version: z.string(),
            time: z.string(),
            official: z.boolean(),
            modded: z.boolean(),
            modNames: z.array(z.string()),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
      z.object({
        type: z.string(),
        id: z.string(),
        attributes: z.object({
          name: z.string(),
          address: z.null(),
          ip: z.string(),
          port: z.number(),
          players: z.number(),
          maxPlayers: z.number(),
          rank: z.number(),
          location: z.array(z.number()),
          status: z.string(),
          details: z.object({
            password: z.boolean(),
            modNames: z.array(z.string()),
            third_person: z.boolean(),
            modIds: z.array(z.number()),
            version: z.string(),
            time: z.string(),
            serverSteamId: z.string(),
            official: z.boolean(),
            modded: z.boolean(),
          }),
          country: z.string(),
        }),
        relationships: z.object({
          game: z.object({
            data: z.object({ type: z.string(), id: z.string() }),
          }),
        }),
      }),
    ])
  ),
  links: z.object({ next: z.string() }),
  included: z.array(z.unknown()),
})
