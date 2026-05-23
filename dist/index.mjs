import fs from "fs";
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import EventEmitter from "events";
import snappy from "snappy";
import fs$1 from "node:fs";
import { fileURLToPath } from "node:url";
//#region src/ts-proto/demo.ts
const EDemoCommands = {
	DEM_Error: -1,
	DEM_Stop: 0,
	DEM_FileHeader: 1,
	DEM_FileInfo: 2,
	DEM_SyncTick: 3,
	DEM_SendTables: 4,
	DEM_ClassInfo: 5,
	DEM_StringTables: 6,
	DEM_Packet: 7,
	DEM_SignonPacket: 8,
	DEM_ConsoleCmd: 9,
	DEM_CustomData: 10,
	DEM_CustomDataCallbacks: 11,
	DEM_UserCmd: 12,
	DEM_FullPacket: 13,
	DEM_SaveGame: 14,
	DEM_SpawnGroups: 15,
	DEM_AnimationData: 16,
	DEM_AnimationHeader: 17,
	DEM_Recovery: 18,
	DEM_Max: 19,
	DEM_IsCompressed: 64
};
function createBaseCDemoFileHeader() {
	return {
		demo_file_stamp: void 0,
		patch_version: void 0,
		server_name: void 0,
		client_name: void 0,
		map_name: void 0,
		game_directory: void 0,
		fullpackets_version: void 0,
		allow_clientside_entities: void 0,
		allow_clientside_particles: void 0,
		addons: void 0,
		demo_version_name: void 0,
		demo_version_guid: void 0,
		build_num: void 0,
		game: void 0,
		server_start_tick: void 0
	};
}
const CDemoFileHeader = {
	encode(message, writer = new BinaryWriter()) {
		if (message.demo_file_stamp !== void 0) writer.uint32(10).string(message.demo_file_stamp);
		if (message.patch_version !== void 0) writer.uint32(16).int32(message.patch_version);
		if (message.server_name !== void 0) writer.uint32(26).string(message.server_name);
		if (message.client_name !== void 0) writer.uint32(34).string(message.client_name);
		if (message.map_name !== void 0) writer.uint32(42).string(message.map_name);
		if (message.game_directory !== void 0) writer.uint32(50).string(message.game_directory);
		if (message.fullpackets_version !== void 0) writer.uint32(56).int32(message.fullpackets_version);
		if (message.allow_clientside_entities !== void 0) writer.uint32(64).bool(message.allow_clientside_entities);
		if (message.allow_clientside_particles !== void 0) writer.uint32(72).bool(message.allow_clientside_particles);
		if (message.addons !== void 0) writer.uint32(82).string(message.addons);
		if (message.demo_version_name !== void 0) writer.uint32(90).string(message.demo_version_name);
		if (message.demo_version_guid !== void 0) writer.uint32(98).string(message.demo_version_guid);
		if (message.build_num !== void 0) writer.uint32(104).int32(message.build_num);
		if (message.game !== void 0) writer.uint32(114).string(message.game);
		if (message.server_start_tick !== void 0) writer.uint32(120).int32(message.server_start_tick);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoFileHeader();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.demo_file_stamp = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.patch_version = reader.int32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.server_name = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.client_name = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.map_name = reader.string();
					continue;
				case 6:
					if (tag !== 50) break;
					message.game_directory = reader.string();
					continue;
				case 7:
					if (tag !== 56) break;
					message.fullpackets_version = reader.int32();
					continue;
				case 8:
					if (tag !== 64) break;
					message.allow_clientside_entities = reader.bool();
					continue;
				case 9:
					if (tag !== 72) break;
					message.allow_clientside_particles = reader.bool();
					continue;
				case 10:
					if (tag !== 82) break;
					message.addons = reader.string();
					continue;
				case 11:
					if (tag !== 90) break;
					message.demo_version_name = reader.string();
					continue;
				case 12:
					if (tag !== 98) break;
					message.demo_version_guid = reader.string();
					continue;
				case 13:
					if (tag !== 104) break;
					message.build_num = reader.int32();
					continue;
				case 14:
					if (tag !== 114) break;
					message.game = reader.string();
					continue;
				case 15:
					if (tag !== 120) break;
					message.server_start_tick = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			demo_file_stamp: isSet$6(object.demoFileStamp) ? globalThis.String(object.demoFileStamp) : isSet$6(object.demo_file_stamp) ? globalThis.String(object.demo_file_stamp) : void 0,
			patch_version: isSet$6(object.patchVersion) ? globalThis.Number(object.patchVersion) : isSet$6(object.patch_version) ? globalThis.Number(object.patch_version) : void 0,
			server_name: isSet$6(object.serverName) ? globalThis.String(object.serverName) : isSet$6(object.server_name) ? globalThis.String(object.server_name) : void 0,
			client_name: isSet$6(object.clientName) ? globalThis.String(object.clientName) : isSet$6(object.client_name) ? globalThis.String(object.client_name) : void 0,
			map_name: isSet$6(object.mapName) ? globalThis.String(object.mapName) : isSet$6(object.map_name) ? globalThis.String(object.map_name) : void 0,
			game_directory: isSet$6(object.gameDirectory) ? globalThis.String(object.gameDirectory) : isSet$6(object.game_directory) ? globalThis.String(object.game_directory) : void 0,
			fullpackets_version: isSet$6(object.fullpacketsVersion) ? globalThis.Number(object.fullpacketsVersion) : isSet$6(object.fullpackets_version) ? globalThis.Number(object.fullpackets_version) : void 0,
			allow_clientside_entities: isSet$6(object.allowClientsideEntities) ? globalThis.Boolean(object.allowClientsideEntities) : isSet$6(object.allow_clientside_entities) ? globalThis.Boolean(object.allow_clientside_entities) : void 0,
			allow_clientside_particles: isSet$6(object.allowClientsideParticles) ? globalThis.Boolean(object.allowClientsideParticles) : isSet$6(object.allow_clientside_particles) ? globalThis.Boolean(object.allow_clientside_particles) : void 0,
			addons: isSet$6(object.addons) ? globalThis.String(object.addons) : void 0,
			demo_version_name: isSet$6(object.demoVersionName) ? globalThis.String(object.demoVersionName) : isSet$6(object.demo_version_name) ? globalThis.String(object.demo_version_name) : void 0,
			demo_version_guid: isSet$6(object.demoVersionGuid) ? globalThis.String(object.demoVersionGuid) : isSet$6(object.demo_version_guid) ? globalThis.String(object.demo_version_guid) : void 0,
			build_num: isSet$6(object.buildNum) ? globalThis.Number(object.buildNum) : isSet$6(object.build_num) ? globalThis.Number(object.build_num) : void 0,
			game: isSet$6(object.game) ? globalThis.String(object.game) : void 0,
			server_start_tick: isSet$6(object.serverStartTick) ? globalThis.Number(object.serverStartTick) : isSet$6(object.server_start_tick) ? globalThis.Number(object.server_start_tick) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.demo_file_stamp !== void 0) obj.demoFileStamp = message.demo_file_stamp;
		if (message.patch_version !== void 0) obj.patchVersion = Math.round(message.patch_version);
		if (message.server_name !== void 0) obj.serverName = message.server_name;
		if (message.client_name !== void 0) obj.clientName = message.client_name;
		if (message.map_name !== void 0) obj.mapName = message.map_name;
		if (message.game_directory !== void 0) obj.gameDirectory = message.game_directory;
		if (message.fullpackets_version !== void 0) obj.fullpacketsVersion = Math.round(message.fullpackets_version);
		if (message.allow_clientside_entities !== void 0) obj.allowClientsideEntities = message.allow_clientside_entities;
		if (message.allow_clientside_particles !== void 0) obj.allowClientsideParticles = message.allow_clientside_particles;
		if (message.addons !== void 0) obj.addons = message.addons;
		if (message.demo_version_name !== void 0) obj.demoVersionName = message.demo_version_name;
		if (message.demo_version_guid !== void 0) obj.demoVersionGuid = message.demo_version_guid;
		if (message.build_num !== void 0) obj.buildNum = Math.round(message.build_num);
		if (message.game !== void 0) obj.game = message.game;
		if (message.server_start_tick !== void 0) obj.serverStartTick = Math.round(message.server_start_tick);
		return obj;
	},
	create(base) {
		return CDemoFileHeader.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoFileHeader();
		message.demo_file_stamp = object.demo_file_stamp ?? void 0;
		message.patch_version = object.patch_version ?? void 0;
		message.server_name = object.server_name ?? void 0;
		message.client_name = object.client_name ?? void 0;
		message.map_name = object.map_name ?? void 0;
		message.game_directory = object.game_directory ?? void 0;
		message.fullpackets_version = object.fullpackets_version ?? void 0;
		message.allow_clientside_entities = object.allow_clientside_entities ?? void 0;
		message.allow_clientside_particles = object.allow_clientside_particles ?? void 0;
		message.addons = object.addons ?? void 0;
		message.demo_version_name = object.demo_version_name ?? void 0;
		message.demo_version_guid = object.demo_version_guid ?? void 0;
		message.build_num = object.build_num ?? void 0;
		message.game = object.game ?? void 0;
		message.server_start_tick = object.server_start_tick ?? void 0;
		return message;
	}
};
function createBaseCGameInfo() {
	return {
		dota: void 0,
		cs: void 0
	};
}
const CGameInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.dota !== void 0) CGameInfo_CDotaGameInfo.encode(message.dota, writer.uint32(34).fork()).join();
		if (message.cs !== void 0) CGameInfo_CCSGameInfo.encode(message.cs, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCGameInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 4:
					if (tag !== 34) break;
					message.dota = CGameInfo_CDotaGameInfo.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.cs = CGameInfo_CCSGameInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			dota: isSet$6(object.dota) ? CGameInfo_CDotaGameInfo.fromJSON(object.dota) : void 0,
			cs: isSet$6(object.cs) ? CGameInfo_CCSGameInfo.fromJSON(object.cs) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.dota !== void 0) obj.dota = CGameInfo_CDotaGameInfo.toJSON(message.dota);
		if (message.cs !== void 0) obj.cs = CGameInfo_CCSGameInfo.toJSON(message.cs);
		return obj;
	},
	create(base) {
		return CGameInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCGameInfo();
		message.dota = object.dota !== void 0 && object.dota !== null ? CGameInfo_CDotaGameInfo.fromPartial(object.dota) : void 0;
		message.cs = object.cs !== void 0 && object.cs !== null ? CGameInfo_CCSGameInfo.fromPartial(object.cs) : void 0;
		return message;
	}
};
function createBaseCGameInfo_CDotaGameInfo() {
	return {
		match_id: void 0,
		game_mode: void 0,
		game_winner: void 0,
		player_info: [],
		leagueid: void 0,
		picks_bans: [],
		radiant_team_id: void 0,
		dire_team_id: void 0,
		radiant_team_tag: void 0,
		dire_team_tag: void 0,
		end_time: void 0
	};
}
const CGameInfo_CDotaGameInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.match_id !== void 0) writer.uint32(8).uint64(message.match_id);
		if (message.game_mode !== void 0) writer.uint32(16).int32(message.game_mode);
		if (message.game_winner !== void 0) writer.uint32(24).int32(message.game_winner);
		for (const v of message.player_info) CGameInfo_CDotaGameInfo_CPlayerInfo.encode(v, writer.uint32(34).fork()).join();
		if (message.leagueid !== void 0) writer.uint32(40).uint32(message.leagueid);
		for (const v of message.picks_bans) CGameInfo_CDotaGameInfo_CHeroSelectEvent.encode(v, writer.uint32(50).fork()).join();
		if (message.radiant_team_id !== void 0) writer.uint32(56).uint32(message.radiant_team_id);
		if (message.dire_team_id !== void 0) writer.uint32(64).uint32(message.dire_team_id);
		if (message.radiant_team_tag !== void 0) writer.uint32(74).string(message.radiant_team_tag);
		if (message.dire_team_tag !== void 0) writer.uint32(82).string(message.dire_team_tag);
		if (message.end_time !== void 0) writer.uint32(88).uint32(message.end_time);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCGameInfo_CDotaGameInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.match_id = reader.uint64().toString();
					continue;
				case 2:
					if (tag !== 16) break;
					message.game_mode = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.game_winner = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.player_info.push(CGameInfo_CDotaGameInfo_CPlayerInfo.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) break;
					message.leagueid = reader.uint32();
					continue;
				case 6:
					if (tag !== 50) break;
					message.picks_bans.push(CGameInfo_CDotaGameInfo_CHeroSelectEvent.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 56) break;
					message.radiant_team_id = reader.uint32();
					continue;
				case 8:
					if (tag !== 64) break;
					message.dire_team_id = reader.uint32();
					continue;
				case 9:
					if (tag !== 74) break;
					message.radiant_team_tag = reader.string();
					continue;
				case 10:
					if (tag !== 82) break;
					message.dire_team_tag = reader.string();
					continue;
				case 11:
					if (tag !== 88) break;
					message.end_time = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			match_id: isSet$6(object.matchId) ? globalThis.String(object.matchId) : isSet$6(object.match_id) ? globalThis.String(object.match_id) : void 0,
			game_mode: isSet$6(object.gameMode) ? globalThis.Number(object.gameMode) : isSet$6(object.game_mode) ? globalThis.Number(object.game_mode) : void 0,
			game_winner: isSet$6(object.gameWinner) ? globalThis.Number(object.gameWinner) : isSet$6(object.game_winner) ? globalThis.Number(object.game_winner) : void 0,
			player_info: globalThis.Array.isArray(object?.playerInfo) ? object.playerInfo.map((e) => CGameInfo_CDotaGameInfo_CPlayerInfo.fromJSON(e)) : globalThis.Array.isArray(object?.player_info) ? object.player_info.map((e) => CGameInfo_CDotaGameInfo_CPlayerInfo.fromJSON(e)) : [],
			leagueid: isSet$6(object.leagueid) ? globalThis.Number(object.leagueid) : void 0,
			picks_bans: globalThis.Array.isArray(object?.picksBans) ? object.picksBans.map((e) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromJSON(e)) : globalThis.Array.isArray(object?.picks_bans) ? object.picks_bans.map((e) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromJSON(e)) : [],
			radiant_team_id: isSet$6(object.radiantTeamId) ? globalThis.Number(object.radiantTeamId) : isSet$6(object.radiant_team_id) ? globalThis.Number(object.radiant_team_id) : void 0,
			dire_team_id: isSet$6(object.direTeamId) ? globalThis.Number(object.direTeamId) : isSet$6(object.dire_team_id) ? globalThis.Number(object.dire_team_id) : void 0,
			radiant_team_tag: isSet$6(object.radiantTeamTag) ? globalThis.String(object.radiantTeamTag) : isSet$6(object.radiant_team_tag) ? globalThis.String(object.radiant_team_tag) : void 0,
			dire_team_tag: isSet$6(object.direTeamTag) ? globalThis.String(object.direTeamTag) : isSet$6(object.dire_team_tag) ? globalThis.String(object.dire_team_tag) : void 0,
			end_time: isSet$6(object.endTime) ? globalThis.Number(object.endTime) : isSet$6(object.end_time) ? globalThis.Number(object.end_time) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.match_id !== void 0) obj.matchId = message.match_id;
		if (message.game_mode !== void 0) obj.gameMode = Math.round(message.game_mode);
		if (message.game_winner !== void 0) obj.gameWinner = Math.round(message.game_winner);
		if (message.player_info?.length) obj.playerInfo = message.player_info.map((e) => CGameInfo_CDotaGameInfo_CPlayerInfo.toJSON(e));
		if (message.leagueid !== void 0) obj.leagueid = Math.round(message.leagueid);
		if (message.picks_bans?.length) obj.picksBans = message.picks_bans.map((e) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.toJSON(e));
		if (message.radiant_team_id !== void 0) obj.radiantTeamId = Math.round(message.radiant_team_id);
		if (message.dire_team_id !== void 0) obj.direTeamId = Math.round(message.dire_team_id);
		if (message.radiant_team_tag !== void 0) obj.radiantTeamTag = message.radiant_team_tag;
		if (message.dire_team_tag !== void 0) obj.direTeamTag = message.dire_team_tag;
		if (message.end_time !== void 0) obj.endTime = Math.round(message.end_time);
		return obj;
	},
	create(base) {
		return CGameInfo_CDotaGameInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCGameInfo_CDotaGameInfo();
		message.match_id = object.match_id ?? void 0;
		message.game_mode = object.game_mode ?? void 0;
		message.game_winner = object.game_winner ?? void 0;
		message.player_info = object.player_info?.map((e) => CGameInfo_CDotaGameInfo_CPlayerInfo.fromPartial(e)) || [];
		message.leagueid = object.leagueid ?? void 0;
		message.picks_bans = object.picks_bans?.map((e) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromPartial(e)) || [];
		message.radiant_team_id = object.radiant_team_id ?? void 0;
		message.dire_team_id = object.dire_team_id ?? void 0;
		message.radiant_team_tag = object.radiant_team_tag ?? void 0;
		message.dire_team_tag = object.dire_team_tag ?? void 0;
		message.end_time = object.end_time ?? void 0;
		return message;
	}
};
function createBaseCGameInfo_CDotaGameInfo_CPlayerInfo() {
	return {
		hero_name: void 0,
		player_name: void 0,
		is_fake_client: void 0,
		steamid: void 0,
		game_team: void 0
	};
}
const CGameInfo_CDotaGameInfo_CPlayerInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.hero_name !== void 0) writer.uint32(10).string(message.hero_name);
		if (message.player_name !== void 0) writer.uint32(18).string(message.player_name);
		if (message.is_fake_client !== void 0) writer.uint32(24).bool(message.is_fake_client);
		if (message.steamid !== void 0) writer.uint32(32).uint64(message.steamid);
		if (message.game_team !== void 0) writer.uint32(40).int32(message.game_team);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCGameInfo_CDotaGameInfo_CPlayerInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.hero_name = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.player_name = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.is_fake_client = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.steamid = reader.uint64().toString();
					continue;
				case 5:
					if (tag !== 40) break;
					message.game_team = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			hero_name: isSet$6(object.heroName) ? globalThis.String(object.heroName) : isSet$6(object.hero_name) ? globalThis.String(object.hero_name) : void 0,
			player_name: isSet$6(object.playerName) ? globalThis.String(object.playerName) : isSet$6(object.player_name) ? globalThis.String(object.player_name) : void 0,
			is_fake_client: isSet$6(object.isFakeClient) ? globalThis.Boolean(object.isFakeClient) : isSet$6(object.is_fake_client) ? globalThis.Boolean(object.is_fake_client) : void 0,
			steamid: isSet$6(object.steamid) ? globalThis.String(object.steamid) : void 0,
			game_team: isSet$6(object.gameTeam) ? globalThis.Number(object.gameTeam) : isSet$6(object.game_team) ? globalThis.Number(object.game_team) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.hero_name !== void 0) obj.heroName = message.hero_name;
		if (message.player_name !== void 0) obj.playerName = message.player_name;
		if (message.is_fake_client !== void 0) obj.isFakeClient = message.is_fake_client;
		if (message.steamid !== void 0) obj.steamid = message.steamid;
		if (message.game_team !== void 0) obj.gameTeam = Math.round(message.game_team);
		return obj;
	},
	create(base) {
		return CGameInfo_CDotaGameInfo_CPlayerInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCGameInfo_CDotaGameInfo_CPlayerInfo();
		message.hero_name = object.hero_name ?? void 0;
		message.player_name = object.player_name ?? void 0;
		message.is_fake_client = object.is_fake_client ?? void 0;
		message.steamid = object.steamid ?? void 0;
		message.game_team = object.game_team ?? void 0;
		return message;
	}
};
function createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent() {
	return {
		is_pick: void 0,
		team: void 0,
		hero_id: void 0
	};
}
const CGameInfo_CDotaGameInfo_CHeroSelectEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.is_pick !== void 0) writer.uint32(8).bool(message.is_pick);
		if (message.team !== void 0) writer.uint32(16).uint32(message.team);
		if (message.hero_id !== void 0) writer.uint32(24).int32(message.hero_id);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.is_pick = reader.bool();
					continue;
				case 2:
					if (tag !== 16) break;
					message.team = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.hero_id = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			is_pick: isSet$6(object.isPick) ? globalThis.Boolean(object.isPick) : isSet$6(object.is_pick) ? globalThis.Boolean(object.is_pick) : void 0,
			team: isSet$6(object.team) ? globalThis.Number(object.team) : void 0,
			hero_id: isSet$6(object.heroId) ? globalThis.Number(object.heroId) : isSet$6(object.hero_id) ? globalThis.Number(object.hero_id) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.is_pick !== void 0) obj.isPick = message.is_pick;
		if (message.team !== void 0) obj.team = Math.round(message.team);
		if (message.hero_id !== void 0) obj.heroId = Math.round(message.hero_id);
		return obj;
	},
	create(base) {
		return CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent();
		message.is_pick = object.is_pick ?? void 0;
		message.team = object.team ?? void 0;
		message.hero_id = object.hero_id ?? void 0;
		return message;
	}
};
function createBaseCGameInfo_CCSGameInfo() {
	return { round_start_ticks: [] };
}
const CGameInfo_CCSGameInfo = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.round_start_ticks) writer.uint32(8).int32(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCGameInfo_CCSGameInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 8) {
						message.round_start_ticks.push(reader.int32());
						continue;
					}
					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.round_start_ticks.push(reader.int32());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { round_start_ticks: globalThis.Array.isArray(object?.roundStartTicks) ? object.roundStartTicks.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.round_start_ticks) ? object.round_start_ticks.map((e) => globalThis.Number(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.round_start_ticks?.length) obj.roundStartTicks = message.round_start_ticks.map((e) => Math.round(e));
		return obj;
	},
	create(base) {
		return CGameInfo_CCSGameInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCGameInfo_CCSGameInfo();
		message.round_start_ticks = object.round_start_ticks?.map((e) => e) || [];
		return message;
	}
};
function createBaseCDemoFileInfo() {
	return {
		playback_time: void 0,
		playback_ticks: void 0,
		playback_frames: void 0,
		game_info: void 0
	};
}
const CDemoFileInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.playback_time !== void 0) writer.uint32(13).float(message.playback_time);
		if (message.playback_ticks !== void 0) writer.uint32(16).int32(message.playback_ticks);
		if (message.playback_frames !== void 0) writer.uint32(24).int32(message.playback_frames);
		if (message.game_info !== void 0) CGameInfo.encode(message.game_info, writer.uint32(34).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoFileInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 13) break;
					message.playback_time = reader.float();
					continue;
				case 2:
					if (tag !== 16) break;
					message.playback_ticks = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.playback_frames = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.game_info = CGameInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			playback_time: isSet$6(object.playbackTime) ? globalThis.Number(object.playbackTime) : isSet$6(object.playback_time) ? globalThis.Number(object.playback_time) : void 0,
			playback_ticks: isSet$6(object.playbackTicks) ? globalThis.Number(object.playbackTicks) : isSet$6(object.playback_ticks) ? globalThis.Number(object.playback_ticks) : void 0,
			playback_frames: isSet$6(object.playbackFrames) ? globalThis.Number(object.playbackFrames) : isSet$6(object.playback_frames) ? globalThis.Number(object.playback_frames) : void 0,
			game_info: isSet$6(object.gameInfo) ? CGameInfo.fromJSON(object.gameInfo) : isSet$6(object.game_info) ? CGameInfo.fromJSON(object.game_info) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.playback_time !== void 0) obj.playbackTime = message.playback_time;
		if (message.playback_ticks !== void 0) obj.playbackTicks = Math.round(message.playback_ticks);
		if (message.playback_frames !== void 0) obj.playbackFrames = Math.round(message.playback_frames);
		if (message.game_info !== void 0) obj.gameInfo = CGameInfo.toJSON(message.game_info);
		return obj;
	},
	create(base) {
		return CDemoFileInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoFileInfo();
		message.playback_time = object.playback_time ?? void 0;
		message.playback_ticks = object.playback_ticks ?? void 0;
		message.playback_frames = object.playback_frames ?? void 0;
		message.game_info = object.game_info !== void 0 && object.game_info !== null ? CGameInfo.fromPartial(object.game_info) : void 0;
		return message;
	}
};
function createBaseCDemoPacket() {
	return { data: void 0 };
}
const CDemoPacket = {
	encode(message, writer = new BinaryWriter()) {
		if (message.data !== void 0) writer.uint32(26).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoPacket();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 3:
					if (tag !== 26) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		return obj;
	},
	create(base) {
		return CDemoPacket.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoPacket();
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCDemoFullPacket() {
	return {
		string_table: void 0,
		packet: void 0
	};
}
const CDemoFullPacket = {
	encode(message, writer = new BinaryWriter()) {
		if (message.string_table !== void 0) CDemoStringTables.encode(message.string_table, writer.uint32(10).fork()).join();
		if (message.packet !== void 0) CDemoPacket.encode(message.packet, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoFullPacket();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.string_table = CDemoStringTables.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.packet = CDemoPacket.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			string_table: isSet$6(object.stringTable) ? CDemoStringTables.fromJSON(object.stringTable) : isSet$6(object.string_table) ? CDemoStringTables.fromJSON(object.string_table) : void 0,
			packet: isSet$6(object.packet) ? CDemoPacket.fromJSON(object.packet) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.string_table !== void 0) obj.stringTable = CDemoStringTables.toJSON(message.string_table);
		if (message.packet !== void 0) obj.packet = CDemoPacket.toJSON(message.packet);
		return obj;
	},
	create(base) {
		return CDemoFullPacket.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoFullPacket();
		message.string_table = object.string_table !== void 0 && object.string_table !== null ? CDemoStringTables.fromPartial(object.string_table) : void 0;
		message.packet = object.packet !== void 0 && object.packet !== null ? CDemoPacket.fromPartial(object.packet) : void 0;
		return message;
	}
};
function createBaseCDemoSaveGame() {
	return {
		data: void 0,
		steam_id: void 0,
		signature: void 0,
		version: void 0
	};
}
const CDemoSaveGame = {
	encode(message, writer = new BinaryWriter()) {
		if (message.data !== void 0) writer.uint32(10).bytes(message.data);
		if (message.steam_id !== void 0) writer.uint32(17).fixed64(message.steam_id);
		if (message.signature !== void 0) writer.uint32(25).fixed64(message.signature);
		if (message.version !== void 0) writer.uint32(32).int32(message.version);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoSaveGame();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.data = reader.bytes();
					continue;
				case 2:
					if (tag !== 17) break;
					message.steam_id = reader.fixed64().toString();
					continue;
				case 3:
					if (tag !== 25) break;
					message.signature = reader.fixed64().toString();
					continue;
				case 4:
					if (tag !== 32) break;
					message.version = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0,
			steam_id: isSet$6(object.steamId) ? globalThis.String(object.steamId) : isSet$6(object.steam_id) ? globalThis.String(object.steam_id) : void 0,
			signature: isSet$6(object.signature) ? globalThis.String(object.signature) : void 0,
			version: isSet$6(object.version) ? globalThis.Number(object.version) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		if (message.steam_id !== void 0) obj.steamId = message.steam_id;
		if (message.signature !== void 0) obj.signature = message.signature;
		if (message.version !== void 0) obj.version = Math.round(message.version);
		return obj;
	},
	create(base) {
		return CDemoSaveGame.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoSaveGame();
		message.data = object.data ?? void 0;
		message.steam_id = object.steam_id ?? void 0;
		message.signature = object.signature ?? void 0;
		message.version = object.version ?? void 0;
		return message;
	}
};
function createBaseCDemoSyncTick() {
	return {};
}
const CDemoSyncTick = {
	encode(_, writer = new BinaryWriter()) {
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoSyncTick();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(_) {
		return {};
	},
	toJSON(_) {
		return {};
	},
	create(base) {
		return CDemoSyncTick.fromPartial(base ?? {});
	},
	fromPartial(_) {
		return createBaseCDemoSyncTick();
	}
};
function createBaseCDemoConsoleCmd() {
	return { cmdstring: void 0 };
}
const CDemoConsoleCmd = {
	encode(message, writer = new BinaryWriter()) {
		if (message.cmdstring !== void 0) writer.uint32(10).string(message.cmdstring);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoConsoleCmd();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.cmdstring = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { cmdstring: isSet$6(object.cmdstring) ? globalThis.String(object.cmdstring) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.cmdstring !== void 0) obj.cmdstring = message.cmdstring;
		return obj;
	},
	create(base) {
		return CDemoConsoleCmd.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoConsoleCmd();
		message.cmdstring = object.cmdstring ?? void 0;
		return message;
	}
};
function createBaseCDemoSendTables() {
	return { data: void 0 };
}
const CDemoSendTables = {
	encode(message, writer = new BinaryWriter()) {
		if (message.data !== void 0) writer.uint32(10).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoSendTables();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		return obj;
	},
	create(base) {
		return CDemoSendTables.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoSendTables();
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCDemoClassInfo() {
	return { classes: [] };
}
const CDemoClassInfo = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.classes) CDemoClassInfo_class_t.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoClassInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.classes.push(CDemoClassInfo_class_t.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { classes: globalThis.Array.isArray(object?.classes) ? object.classes.map((e) => CDemoClassInfo_class_t.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.classes?.length) obj.classes = message.classes.map((e) => CDemoClassInfo_class_t.toJSON(e));
		return obj;
	},
	create(base) {
		return CDemoClassInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoClassInfo();
		message.classes = object.classes?.map((e) => CDemoClassInfo_class_t.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCDemoClassInfo_class_t() {
	return {
		class_id: void 0,
		network_name: void 0,
		table_name: void 0
	};
}
const CDemoClassInfo_class_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.class_id !== void 0) writer.uint32(8).int32(message.class_id);
		if (message.network_name !== void 0) writer.uint32(18).string(message.network_name);
		if (message.table_name !== void 0) writer.uint32(26).string(message.table_name);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoClassInfo_class_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.class_id = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.network_name = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.table_name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			class_id: isSet$6(object.classId) ? globalThis.Number(object.classId) : isSet$6(object.class_id) ? globalThis.Number(object.class_id) : void 0,
			network_name: isSet$6(object.networkName) ? globalThis.String(object.networkName) : isSet$6(object.network_name) ? globalThis.String(object.network_name) : void 0,
			table_name: isSet$6(object.tableName) ? globalThis.String(object.tableName) : isSet$6(object.table_name) ? globalThis.String(object.table_name) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.class_id !== void 0) obj.classId = Math.round(message.class_id);
		if (message.network_name !== void 0) obj.networkName = message.network_name;
		if (message.table_name !== void 0) obj.tableName = message.table_name;
		return obj;
	},
	create(base) {
		return CDemoClassInfo_class_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoClassInfo_class_t();
		message.class_id = object.class_id ?? void 0;
		message.network_name = object.network_name ?? void 0;
		message.table_name = object.table_name ?? void 0;
		return message;
	}
};
function createBaseCDemoCustomData() {
	return {
		callback_index: void 0,
		data: void 0
	};
}
const CDemoCustomData = {
	encode(message, writer = new BinaryWriter()) {
		if (message.callback_index !== void 0) writer.uint32(8).int32(message.callback_index);
		if (message.data !== void 0) writer.uint32(18).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoCustomData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.callback_index = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			callback_index: isSet$6(object.callbackIndex) ? globalThis.Number(object.callbackIndex) : isSet$6(object.callback_index) ? globalThis.Number(object.callback_index) : void 0,
			data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.callback_index !== void 0) obj.callbackIndex = Math.round(message.callback_index);
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		return obj;
	},
	create(base) {
		return CDemoCustomData.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoCustomData();
		message.callback_index = object.callback_index ?? void 0;
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCDemoCustomDataCallbacks() {
	return { save_id: [] };
}
const CDemoCustomDataCallbacks = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.save_id) writer.uint32(10).string(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoCustomDataCallbacks();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.save_id.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { save_id: globalThis.Array.isArray(object?.saveId) ? object.saveId.map((e) => globalThis.String(e)) : globalThis.Array.isArray(object?.save_id) ? object.save_id.map((e) => globalThis.String(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.save_id?.length) obj.saveId = message.save_id;
		return obj;
	},
	create(base) {
		return CDemoCustomDataCallbacks.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoCustomDataCallbacks();
		message.save_id = object.save_id?.map((e) => e) || [];
		return message;
	}
};
function createBaseCDemoStringTables() {
	return { tables: [] };
}
const CDemoStringTables = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.tables) CDemoStringTables_table_t.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoStringTables();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.tables.push(CDemoStringTables_table_t.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { tables: globalThis.Array.isArray(object?.tables) ? object.tables.map((e) => CDemoStringTables_table_t.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.tables?.length) obj.tables = message.tables.map((e) => CDemoStringTables_table_t.toJSON(e));
		return obj;
	},
	create(base) {
		return CDemoStringTables.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoStringTables();
		message.tables = object.tables?.map((e) => CDemoStringTables_table_t.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCDemoStringTables_items_t() {
	return {
		str: void 0,
		data: void 0
	};
}
const CDemoStringTables_items_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.str !== void 0) writer.uint32(10).string(message.str);
		if (message.data !== void 0) writer.uint32(18).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoStringTables_items_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.str = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			str: isSet$6(object.str) ? globalThis.String(object.str) : void 0,
			data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.str !== void 0) obj.str = message.str;
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		return obj;
	},
	create(base) {
		return CDemoStringTables_items_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoStringTables_items_t();
		message.str = object.str ?? void 0;
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCDemoStringTables_table_t() {
	return {
		table_name: void 0,
		items: [],
		items_clientside: [],
		table_flags: void 0
	};
}
const CDemoStringTables_table_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.table_name !== void 0) writer.uint32(10).string(message.table_name);
		for (const v of message.items) CDemoStringTables_items_t.encode(v, writer.uint32(18).fork()).join();
		for (const v of message.items_clientside) CDemoStringTables_items_t.encode(v, writer.uint32(26).fork()).join();
		if (message.table_flags !== void 0) writer.uint32(32).int32(message.table_flags);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoStringTables_table_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.table_name = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.items.push(CDemoStringTables_items_t.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) break;
					message.items_clientside.push(CDemoStringTables_items_t.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) break;
					message.table_flags = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			table_name: isSet$6(object.tableName) ? globalThis.String(object.tableName) : isSet$6(object.table_name) ? globalThis.String(object.table_name) : void 0,
			items: globalThis.Array.isArray(object?.items) ? object.items.map((e) => CDemoStringTables_items_t.fromJSON(e)) : [],
			items_clientside: globalThis.Array.isArray(object?.itemsClientside) ? object.itemsClientside.map((e) => CDemoStringTables_items_t.fromJSON(e)) : globalThis.Array.isArray(object?.items_clientside) ? object.items_clientside.map((e) => CDemoStringTables_items_t.fromJSON(e)) : [],
			table_flags: isSet$6(object.tableFlags) ? globalThis.Number(object.tableFlags) : isSet$6(object.table_flags) ? globalThis.Number(object.table_flags) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.table_name !== void 0) obj.tableName = message.table_name;
		if (message.items?.length) obj.items = message.items.map((e) => CDemoStringTables_items_t.toJSON(e));
		if (message.items_clientside?.length) obj.itemsClientside = message.items_clientside.map((e) => CDemoStringTables_items_t.toJSON(e));
		if (message.table_flags !== void 0) obj.tableFlags = Math.round(message.table_flags);
		return obj;
	},
	create(base) {
		return CDemoStringTables_table_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoStringTables_table_t();
		message.table_name = object.table_name ?? void 0;
		message.items = object.items?.map((e) => CDemoStringTables_items_t.fromPartial(e)) || [];
		message.items_clientside = object.items_clientside?.map((e) => CDemoStringTables_items_t.fromPartial(e)) || [];
		message.table_flags = object.table_flags ?? void 0;
		return message;
	}
};
function createBaseCDemoUserCmd() {
	return {
		cmd_number: void 0,
		data: void 0
	};
}
const CDemoUserCmd = {
	encode(message, writer = new BinaryWriter()) {
		if (message.cmd_number !== void 0) writer.uint32(8).int32(message.cmd_number);
		if (message.data !== void 0) writer.uint32(18).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoUserCmd();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.cmd_number = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			cmd_number: isSet$6(object.cmdNumber) ? globalThis.Number(object.cmdNumber) : isSet$6(object.cmd_number) ? globalThis.Number(object.cmd_number) : void 0,
			data: isSet$6(object.data) ? bytesFromBase64$3(object.data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.cmd_number !== void 0) obj.cmdNumber = Math.round(message.cmd_number);
		if (message.data !== void 0) obj.data = base64FromBytes$3(message.data);
		return obj;
	},
	create(base) {
		return CDemoUserCmd.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoUserCmd();
		message.cmd_number = object.cmd_number ?? void 0;
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCDemoSpawnGroups() {
	return { msgs: [] };
}
const CDemoSpawnGroups = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.msgs) writer.uint32(26).bytes(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDemoSpawnGroups();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 3:
					if (tag !== 26) break;
					message.msgs.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { msgs: globalThis.Array.isArray(object?.msgs) ? object.msgs.map((e) => bytesFromBase64$3(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.msgs?.length) obj.msgs = message.msgs.map((e) => base64FromBytes$3(e));
		return obj;
	},
	create(base) {
		return CDemoSpawnGroups.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDemoSpawnGroups();
		message.msgs = object.msgs?.map((e) => e) || [];
		return message;
	}
};
function bytesFromBase64$3(b64) {
	if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
		return arr;
	}
}
function base64FromBytes$3(arr) {
	if (globalThis.Buffer) return globalThis.Buffer.from(arr).toString("base64");
	else {
		const bin = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}
function isSet$6(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/parser/descriptors/decoders.ts
const decoders = {
	[EDemoCommands.DEM_FileHeader]: {
		type: EDemoCommands.DEM_FileHeader,
		decode: CDemoFileHeader.decode
	},
	[EDemoCommands.DEM_FileInfo]: {
		type: EDemoCommands.DEM_FileInfo,
		decode: CDemoFileInfo.decode
	},
	[EDemoCommands.DEM_SyncTick]: {
		type: EDemoCommands.DEM_SyncTick,
		decode: CDemoSyncTick.decode
	},
	[EDemoCommands.DEM_SendTables]: {
		type: EDemoCommands.DEM_SendTables,
		decode: CDemoSendTables.decode
	},
	[EDemoCommands.DEM_ClassInfo]: {
		type: EDemoCommands.DEM_ClassInfo,
		decode: CDemoClassInfo.decode
	},
	[EDemoCommands.DEM_StringTables]: {
		type: EDemoCommands.DEM_StringTables,
		decode: CDemoStringTables.decode
	},
	[EDemoCommands.DEM_Packet]: {
		type: EDemoCommands.DEM_Packet,
		decode: CDemoPacket.decode
	},
	[EDemoCommands.DEM_SignonPacket]: {
		type: EDemoCommands.DEM_SignonPacket,
		decode: CDemoPacket.decode
	},
	[EDemoCommands.DEM_ConsoleCmd]: {
		type: EDemoCommands.DEM_ConsoleCmd,
		decode: CDemoConsoleCmd.decode
	},
	[EDemoCommands.DEM_CustomData]: {
		type: EDemoCommands.DEM_CustomData,
		decode: CDemoCustomData.decode
	},
	[EDemoCommands.DEM_CustomDataCallbacks]: {
		type: EDemoCommands.DEM_CustomDataCallbacks,
		decode: CDemoCustomDataCallbacks.decode
	},
	[EDemoCommands.DEM_UserCmd]: {
		type: EDemoCommands.DEM_UserCmd,
		decode: CDemoUserCmd.decode
	},
	[EDemoCommands.DEM_FullPacket]: {
		type: EDemoCommands.DEM_FullPacket,
		decode: CDemoFullPacket.decode
	},
	[EDemoCommands.DEM_SaveGame]: {
		type: EDemoCommands.DEM_SaveGame,
		decode: CDemoSaveGame.decode
	},
	[EDemoCommands.DEM_SpawnGroups]: {
		type: EDemoCommands.DEM_SpawnGroups,
		decode: CDemoSpawnGroups.decode
	}
};
//#endregion
//#region src/parser/ubitreader.ts
const bitMask = new Uint32Array(32);
for (let i = 1; i < 32; ++i) bitMask[i] = (1 << i) - 1;
const MASK = new Uint32Array(33);
for (let i = 1; i < 32; ++i) MASK[i] = (1 << i) - 1;
MASK[32] = 4294967295;
const BIT_COORD_FRAC_SCALE = 1 / 32;
const BIT_COORD_PRES_SCALE = 360 / (1 << 20);
const _f32ReinterpretF = new Float32Array(1);
const _f32ReinterpretU = new Uint32Array(_f32ReinterpretF.buffer);
var BitBuffer = class BitBuffer {
	static BitMask = bitMask;
	static _stringDecoder = new TextDecoder("utf-8");
	static _stringScratch = new Uint8Array(4096);
	_bitsAvail = 0;
	_buf = 0;
	_pointer;
	_byteOffset = 0;
	_uintbuffer;
	_bufArray;
	_bufArrayView;
	_pointerView;
	constructor(pointer) {
		this._pointer = pointer;
		this._pointerView = new DataView(this._pointer.buffer);
		this._uintbuffer = Buffer.alloc(8);
		this._bufArray = new Uint8Array(4);
		this._bufArrayView = new DataView(this._bufArray.buffer);
		this.FetchNext();
	}
	setTo(newPointer) {
		if (newPointer.buffer !== this._pointer.buffer) this._pointerView = new DataView(newPointer.buffer);
		this._pointer = newPointer;
		this._buf = 0;
		this._bitsAvail = 0;
		this._byteOffset = 0;
		this.FetchNext();
		return this;
	}
	readString() {
		const scratch = BitBuffer._stringScratch;
		const maxLen = scratch.length;
		let len = 0;
		let c;
		while ((c = this.ReadByte()) !== 0) {
			if (len < maxLen) scratch[len] = c;
			len++;
		}
		if (len === 0) return "";
		return BitBuffer._stringDecoder.decode(scratch.subarray(0, Math.min(len, maxLen)));
	}
	get RemainingBytes() {
		return this._pointer.length - this._byteOffset + Math.floor(this._bitsAvail / 8);
	}
	get RemainingBits() {
		return (this._pointer.length - this._byteOffset) * 8 + this._bitsAvail;
	}
	FetchNext() {
		this._bitsAvail = this._pointer.length - this._byteOffset >= 4 ? 32 : (this._pointer.length - this._byteOffset) * 8;
		this.UpdateBuffer();
	}
	PeekUBitsWithLog(numBits) {
		if (this._bitsAvail >= numBits) return (this._buf & MASK[numBits]) >>> 0;
		else {
			let ret = this._buf;
			const remainingBits = numBits - this._bitsAvail;
			let selfBuf;
			if (this._pointer.length - this._byteOffset >= 4) selfBuf = this._pointerView.getUint32(this._pointer.byteOffset + this._byteOffset, true);
			else {
				selfBuf = 0;
				const bytesToRead = Math.min(this._pointer.length - this._byteOffset, 4);
				for (let i = 0; i < bytesToRead; i++) selfBuf |= this._pointer[this._byteOffset + i] << i * 8;
			}
			ret |= (selfBuf & MASK[remainingBits]) << this._bitsAvail;
			return ret >>> 0;
		}
	}
	/** Lightweight consume after PeekUBitsWithLog — advances by numBits without returning a value. */
	consumePeeked(numBits) {
		if (this._bitsAvail >= numBits) {
			this._bitsAvail -= numBits;
			if (this._bitsAvail !== 0) this._buf >>>= numBits;
			else this.FetchNext();
		} else {
			const bitsFromNext = numBits - this._bitsAvail;
			const remainingBytes = this._pointer.length - this._byteOffset;
			const nextChunkBits = Math.min(remainingBytes, 4) * 8;
			this.UpdateBuffer();
			this._bitsAvail = nextChunkBits - bitsFromNext;
			this._buf >>>= bitsFromNext;
		}
	}
	ReadUBits(numBits) {
		if (this._bitsAvail >= numBits) {
			const ret = numBits === 32 ? this._buf >>> 0 : this._buf & BitBuffer.BitMask[numBits];
			this._bitsAvail -= numBits;
			if (this._bitsAvail !== 0) this._buf >>>= numBits;
			else this.FetchNext();
			return ret >>> 0;
		}
		return this._readUBitsSlow(numBits);
	}
	_readUBitsSlow(numBits) {
		let ret = this._buf;
		const savedBitsAvail = this._bitsAvail;
		numBits -= this._bitsAvail;
		const remainingBytes = this._pointer.length - this._byteOffset;
		const nextChunkBits = Math.min(remainingBytes, 4) * 8;
		this.UpdateBuffer();
		ret |= (this._buf & MASK[numBits]) << savedBitsAvail;
		this._bitsAvail = nextChunkBits - numBits;
		this._buf >>>= numBits;
		return ret >>> 0;
	}
	readBoolean() {
		if (this._bitsAvail <= 0) this.FetchNext();
		const ret = this._buf & 1;
		this._bitsAvail--;
		if (this._bitsAvail !== 0) this._buf >>>= 1;
		else this.FetchNext();
		return ret !== 0;
	}
	ReadByte() {
		return this.ReadUBits(8);
	}
	readFloat32LE() {
		let bits;
		if (this._bitsAvail === 32) {
			bits = this._buf >>> 0;
			this._bitsAvail = 0;
			this.FetchNext();
		} else bits = this.ReadUBits(32);
		if (bits === 0) return 0;
		_f32ReinterpretU[0] = bits;
		return _f32ReinterpretF[0];
	}
	UpdateBuffer() {
		if (this._pointer.length - this._byteOffset < 4) {
			for (let i = 0; i < 4; ++i) this._bufArray[i] = i < this._pointer.length - this._byteOffset ? this._pointer[this._byteOffset + i] : 0;
			this._buf = this._bufArrayView.getUint32(0, true);
			this._byteOffset = this._pointer.length;
		} else {
			this._buf = this._pointerView.getUint32(this._pointer.byteOffset + this._byteOffset, true);
			this._byteOffset += 4;
		}
	}
	readBytes = (outputBuffer) => {
		this._readBytesInto(outputBuffer, outputBuffer.length);
	};
	readBytesToSlice = (outputBuffer, size) => {
		this._readBytesInto(outputBuffer, size);
		return outputBuffer.subarray(0, size);
	};
	_readBytesInto(out, size) {
		let written = 0;
		while (this._bitsAvail >= 8 && written < size) {
			out[written++] = this._buf & 255;
			this._buf >>>= 8;
			this._bitsAvail -= 8;
		}
		if (written >= size) {
			if (this._bitsAvail === 0) this.FetchNext();
			return;
		}
		if (this._bitsAvail === 0) {
			const direct = Math.min(size - written, this._pointer.length - this._byteOffset);
			if (direct > 0) {
				out.set(this._pointer.subarray(this._byteOffset, this._byteOffset + direct), written);
				written += direct;
				this._byteOffset += direct;
			}
			this.FetchNext();
		} else {
			const shift = this._bitsAvail;
			const invShift = 8 - shift;
			let carry = this._buf;
			const bytesNeeded = size - written;
			const available = this._pointer.length - this._byteOffset;
			const count = Math.min(bytesNeeded, available);
			for (let i = 0; i < count; i++) {
				const src = this._pointer[this._byteOffset + i];
				out[written + i] = (carry | src << shift) & 255;
				carry = src >>> invShift;
			}
			written += count;
			this._byteOffset += count;
			this._buf = carry;
		}
	}
	skipBytesBetter = (bytes) => {
		const bitsToSkip = bytes * 8;
		if (bitsToSkip <= this._bitsAvail) {
			this._bitsAvail -= bitsToSkip;
			if (this._bitsAvail !== 0) this._buf >>>= bitsToSkip;
			else this.FetchNext();
			return;
		}
		const newBitPos = this._byteOffset * 8 - this._bitsAvail + bitsToSkip;
		const alignedByteOffset = newBitPos >>> 5 << 2;
		const bitsIntoChunk = newBitPos & 31;
		this._byteOffset = alignedByteOffset;
		this.FetchNext();
		if (bitsIntoChunk > 0) {
			this._bitsAvail -= bitsIntoChunk;
			this._buf >>>= bitsIntoChunk;
		}
	};
	readUbitVar = () => {
		let ret = this.ReadUBits(6);
		switch (ret & 48) {
			case 16:
				ret = ret & 15 | this.ReadUBits(4) << 4;
				break;
			case 32:
				ret = ret & 15 | this.ReadUBits(8) << 4;
				break;
			case 48:
				ret = (ret & 15 | this.ReadUBits(28) << 4 >>> 0) >>> 0;
				break;
		}
		return ret >>> 0;
	};
	ReadUVarInt32() {
		if (this._bitsAvail >= 8) {
			const b0 = this._buf & 255;
			if ((b0 & 128) === 0) {
				this._bitsAvail -= 8;
				if (this._bitsAvail !== 0) this._buf >>>= 8;
				else this.FetchNext();
				return b0;
			}
			if (this._bitsAvail >= 16) {
				const b1 = this._buf >>> 8 & 255;
				if ((b1 & 128) === 0) {
					this._bitsAvail -= 16;
					if (this._bitsAvail !== 0) this._buf >>>= 16;
					else this.FetchNext();
					return (b0 & 127 | b1 << 7) >>> 0;
				}
			}
		}
		let result = 0;
		let count = 0;
		let byteRead;
		do {
			if (count >= 5) return result >>> 0;
			byteRead = this.ReadByte();
			result |= (byteRead & 127) << 7 * count;
			count++;
		} while ((byteRead & 128) !== 0);
		return result >>> 0;
	}
	readUbitVarFp() {
		if (this.readBoolean()) return this.ReadUBits(2);
		if (this.readBoolean()) return this.ReadUBits(4);
		if (this.readBoolean()) return this.ReadUBits(10);
		if (this.readBoolean()) return this.ReadUBits(17);
		return this.ReadUBits(31);
	}
	readVarInt32() {
		const x = this.ReadUVarInt32() | 0;
		let mut = x >> 1;
		if ((x & 1) !== 0) mut = ~mut;
		return mut;
	}
	readUVarInt64() {
		let result = 0n;
		let count = 0;
		let b = 0;
		let s = 0n;
		while (true) {
			b = this.ReadUBits(8);
			if (b < 128) {
				if (count > 9 || count === 9 && b > 1) throw new Error("MALFORMED U64");
				return result | BigInt(b) << s;
			}
			result |= BigInt(b & 127) << s;
			count = count + 1;
			if ((b & 128) === 0) break;
			s = s + 7n;
		}
		return result;
	}
	decudeUint64() {
		const bytes = this._uintbuffer;
		this.readBytes(bytes);
		return bytes.readBigUInt64LE(0);
	}
	decode_noscale() {
		return this.ReadUBits(32);
	}
	decodeVectorNoScale() {
		return [
			this.decode_noscale(),
			this.decode_noscale(),
			this.decode_noscale()
		];
	}
	decodeQangleAll3() {
		return [
			this.decode_noscale(),
			this.decode_noscale(),
			this.decode_noscale()
		];
	}
	readAngle(n) {
		return this.decode_noscale() / (1 << n);
	}
	decodeQanglePitchYaw() {
		return [
			this.readAngle(32),
			this.readAngle(32),
			this.readAngle(32)
		];
	}
	decodeFloatCoord() {
		return this.readBitCoord();
	}
	decodeVectorFloatCoord() {
		return [
			this.decodeFloatCoord(),
			this.decodeFloatCoord(),
			this.decodeFloatCoord()
		];
	}
	readBitCoord() {
		let intVal = 0;
		let fracVal = 0;
		const int2 = this.readBoolean();
		const f2 = this.readBoolean();
		if (!int2 && !f2) return 0;
		const sign = this.readBoolean();
		if (int2) intVal = this.ReadUBits(14) + 1;
		if (f2) fracVal = this.ReadUBits(5);
		const result = Math.fround(intVal + fracVal * BIT_COORD_FRAC_SCALE);
		if (sign) return -result;
		return result;
	}
	readBitCoordPres() {
		return this.ReadUBits(20) * BIT_COORD_PRES_SCALE - 180;
	}
	decodeAmmo() {
		const ammo = this.ReadUVarInt32();
		if (ammo > 0) return ammo - 1;
		return ammo;
	}
	decodeNormal() {
		const isNegative = this.readBoolean();
		const result = this.ReadUBits(11) * (1 / 2048 - 1);
		if (isNegative) return -result;
		return result;
	}
	decodeNormalVec() {
		const v = [
			0,
			0,
			0
		];
		const hasX = this.readBoolean();
		const hasY = this.readBoolean();
		if (hasX) v[0] = this.decodeNormal();
		if (hasY) v[1] = this.decodeNormal();
		const neg_z = this.readBoolean();
		const prod_sum = v[0] ** 2 + v[1] ** 2;
		if (prod_sum < 1) v[2] = Math.sqrt(1 - prod_sum);
		else v[2] = 0;
		if (neg_z) v[2] = -v[2];
		return v;
	}
	decodeQangleVariant() {
		const flags = this.ReadUBits(3);
		const result = [
			0,
			0,
			0
		];
		if (flags & 1) result[0] = this.readBitCoord();
		if (flags & 2) result[1] = this.readBitCoord();
		if (flags & 4) result[2] = this.readBitCoord();
		return result;
	}
	decodeQangleVariantPres() {
		const flags = this.ReadUBits(3);
		const result = [
			0,
			0,
			0
		];
		if (flags & 1) result[0] = this.readBitCoordPres();
		if (flags & 2) result[1] = this.readBitCoordPres();
		if (flags & 4) result[2] = this.readBitCoordPres();
		return result;
	}
};
//#endregion
//#region src/helpers/eventAnnotation.ts
/**
* Annotates a game event with resolved Player helper references.
* The userid/attacker/assister fields are userinfo slot indices (NOT entity IDs).
* We look up the CMsgPlayerInfo by slot, then match to a controller entity by name.
*/
function annotateGameEvent(parser, eventName, event) {
	if ("userid" in event && eventName !== "player_connect") event.player = resolvePlayerByUserSlot(parser, event.userid) ?? null;
	if ("attacker" in event) event.attackerPlayer = resolvePlayerByUserSlot(parser, event.attacker) ?? null;
	if ("assister" in event) event.assisterPlayer = resolvePlayerByUserSlot(parser, event.assister) ?? null;
	return event;
}
function resolvePlayerByUserSlot(parser, userSlot) {
	if (userSlot === void 0) return null;
	const slot = userSlot & 255;
	if (slot === 255) return null;
	const info = parser.players[slot];
	if (!info) return null;
	const steamId = String(info.steamid);
	for (const pc of parser.playerControllers) if (pc.steamId === steamId) return pc;
	return null;
}
//#endregion
//#region src/parser/entities/types.ts
const EntityMode = {
	NONE: 0,
	ALL: 1,
	ONLY_GAME_RULES: 2
};
//#endregion
//#region src/parser/descriptors/gameEventEmitter.ts
const SYNTHETIC_EVENTS = new Set(["round_start", "round_end"]);
var GameEvents = class extends EventEmitter {
	_eventDescriptors = {};
	_demoReader;
	eventQueue = [];
	_entityMode = EntityMode.NONE;
	_lastRoundStartCount = void 0;
	_lastRoundEndCount = void 0;
	set entityMode(value) {
		this._entityMode = value;
	}
	listen = (demoReader) => {
		this._demoReader = demoReader;
		demoReader.on("gameeventlist", (data) => {
			this._eventDescriptors = data.descriptors.reduce((acc, descriptor) => {
				if (descriptor.eventid) acc[descriptor.eventid] = descriptor;
				return acc;
			}, {});
		});
		demoReader.on("gameevent", (gameEvent) => {
			const descriptor = this._eventDescriptors[gameEvent.eventid ?? -1];
			if (!descriptor?.name) return;
			if (this._entityMode !== EntityMode.NONE && SYNTHETIC_EVENTS.has(descriptor.name)) return;
			if (!this.eventNames().includes(descriptor.name) && !this.eventNames().includes("gameEvent")) return;
			const gameEventData = {};
			for (let i = 0; i < gameEvent.keys.length; i++) {
				const ge = gameEvent.keys[i];
				const desc = descriptor.keys[i];
				const value = parseRawEventData(ge);
				gameEventData[desc.name] = value;
			}
			gameEventData.event_name = descriptor.name;
			this.eventQueue.push(gameEventData);
		});
		demoReader.on("tickend", () => {
			for (const event of this.eventQueue) {
				annotateGameEvent(this._demoReader, event.event_name, event);
				this.emit(event.event_name, event);
				this.emit("gameEvent", event.event_name, event);
			}
			this.eventQueue = [];
			if (this._entityMode !== EntityMode.NONE) this._checkSyntheticRoundEvents();
		});
	};
	_checkSyntheticRoundEvents() {
		const gameRules = this._demoReader.gameRules;
		if (!gameRules) return;
		const entity = gameRules.entity;
		if (!entity?.properties) return;
		const props = entity.properties;
		const roundEndCount = props["CCSGameRulesProxy.CCSGameRules.m_nRoundEndCount"];
		const roundStartCount = props["CCSGameRulesProxy.CCSGameRules.m_nRoundStartCount"];
		if (roundEndCount !== void 0) {
			if (this._lastRoundEndCount === void 0) this._lastRoundEndCount = roundEndCount;
			else if (roundEndCount !== this._lastRoundEndCount) {
				this._lastRoundEndCount = roundEndCount;
				const event = {
					event_name: "round_end",
					winner: props["CCSGameRulesProxy.CCSGameRules.m_iRoundEndWinnerTeam"] ?? 0,
					reason: props["CCSGameRulesProxy.CCSGameRules.m_eRoundEndReason"] ?? 0,
					message: props["CCSGameRulesProxy.CCSGameRules.m_sRoundEndMessage"] ?? "",
					legacy: props["CCSGameRulesProxy.CCSGameRules.m_iRoundEndLegacy"] ?? 0,
					player_count: props["CCSGameRulesProxy.CCSGameRules.m_iRoundEndPlayerCount"] ?? 0,
					nomusic: props["CCSGameRulesProxy.CCSGameRules.m_bRoundEndNoMusic"] ? 1 : 0
				};
				this.emit("round_end", event);
				this.emit("gameEvent", "round_end", event);
			}
		}
		if (roundStartCount !== void 0) {
			if (this._lastRoundStartCount === void 0) this._lastRoundStartCount = roundStartCount;
			else if (roundStartCount !== this._lastRoundStartCount) {
				this._lastRoundStartCount = roundStartCount;
				const event = {
					event_name: "round_start",
					timelimit: props["CCSGameRulesProxy.CCSGameRules.m_iRoundTime"] ?? 0,
					fraglimit: 0,
					objective: ""
				};
				this.emit("round_start", event);
				this.emit("gameEvent", "round_start", event);
			}
		}
	}
};
const parseRawEventData = (data) => {
	switch (data.type) {
		case 1: return data.val_string;
		case 2: return data.val_float;
		case 3: return data.val_long;
		case 4: return data.val_short;
		case 5: return data.val_byte;
		case 6: return data.val_bool;
		case 7: return data.val_uint64;
		case 8: return data.val_long | 0;
		case 9: return data.val_short | 0;
	}
};
//#endregion
//#region src/ts-proto/networkbasetypes.ts
function createBaseCMsgPlayerInfo() {
	return {
		name: void 0,
		xuid: void 0,
		userid: void 0,
		steamid: void 0,
		fakeplayer: void 0,
		ishltv: void 0
	};
}
const CMsgPlayerInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.name !== void 0) writer.uint32(10).string(message.name);
		if (message.xuid !== void 0) writer.uint32(17).fixed64(message.xuid);
		if (message.userid !== void 0) writer.uint32(24).int32(message.userid);
		if (message.steamid !== void 0) writer.uint32(33).fixed64(message.steamid);
		if (message.fakeplayer !== void 0) writer.uint32(40).bool(message.fakeplayer);
		if (message.ishltv !== void 0) writer.uint32(48).bool(message.ishltv);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgPlayerInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 17) break;
					message.xuid = reader.fixed64().toString();
					continue;
				case 3:
					if (tag !== 24) break;
					message.userid = reader.int32();
					continue;
				case 4:
					if (tag !== 33) break;
					message.steamid = reader.fixed64().toString();
					continue;
				case 5:
					if (tag !== 40) break;
					message.fakeplayer = reader.bool();
					continue;
				case 6:
					if (tag !== 48) break;
					message.ishltv = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			name: isSet$5(object.name) ? globalThis.String(object.name) : void 0,
			xuid: isSet$5(object.xuid) ? globalThis.String(object.xuid) : void 0,
			userid: isSet$5(object.userid) ? globalThis.Number(object.userid) : void 0,
			steamid: isSet$5(object.steamid) ? globalThis.String(object.steamid) : void 0,
			fakeplayer: isSet$5(object.fakeplayer) ? globalThis.Boolean(object.fakeplayer) : void 0,
			ishltv: isSet$5(object.ishltv) ? globalThis.Boolean(object.ishltv) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.name !== void 0) obj.name = message.name;
		if (message.xuid !== void 0) obj.xuid = message.xuid;
		if (message.userid !== void 0) obj.userid = Math.round(message.userid);
		if (message.steamid !== void 0) obj.steamid = message.steamid;
		if (message.fakeplayer !== void 0) obj.fakeplayer = message.fakeplayer;
		if (message.ishltv !== void 0) obj.ishltv = message.ishltv;
		return obj;
	},
	create(base) {
		return CMsgPlayerInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgPlayerInfo();
		message.name = object.name ?? void 0;
		message.xuid = object.xuid ?? void 0;
		message.userid = object.userid ?? void 0;
		message.steamid = object.steamid ?? void 0;
		message.fakeplayer = object.fakeplayer ?? void 0;
		message.ishltv = object.ishltv ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_GameSessionConfiguration() {
	return {
		is_multiplayer: void 0,
		is_loadsavegame: void 0,
		is_background_map: void 0,
		is_headless: void 0,
		min_client_limit: void 0,
		max_client_limit: void 0,
		max_clients: void 0,
		tick_interval: void 0,
		hostname: void 0,
		savegamename: void 0,
		s1_mapname: void 0,
		gamemode: void 0,
		server_ip_address: void 0,
		data: void 0,
		is_localonly: void 0,
		no_steam_server: void 0,
		is_transition: void 0,
		previouslevel: void 0,
		landmarkname: void 0
	};
}
const CSVCMsg_GameSessionConfiguration = {
	encode(message, writer = new BinaryWriter()) {
		if (message.is_multiplayer !== void 0) writer.uint32(8).bool(message.is_multiplayer);
		if (message.is_loadsavegame !== void 0) writer.uint32(16).bool(message.is_loadsavegame);
		if (message.is_background_map !== void 0) writer.uint32(24).bool(message.is_background_map);
		if (message.is_headless !== void 0) writer.uint32(32).bool(message.is_headless);
		if (message.min_client_limit !== void 0) writer.uint32(40).uint32(message.min_client_limit);
		if (message.max_client_limit !== void 0) writer.uint32(48).uint32(message.max_client_limit);
		if (message.max_clients !== void 0) writer.uint32(56).uint32(message.max_clients);
		if (message.tick_interval !== void 0) writer.uint32(69).fixed32(message.tick_interval);
		if (message.hostname !== void 0) writer.uint32(74).string(message.hostname);
		if (message.savegamename !== void 0) writer.uint32(82).string(message.savegamename);
		if (message.s1_mapname !== void 0) writer.uint32(90).string(message.s1_mapname);
		if (message.gamemode !== void 0) writer.uint32(98).string(message.gamemode);
		if (message.server_ip_address !== void 0) writer.uint32(106).string(message.server_ip_address);
		if (message.data !== void 0) writer.uint32(114).bytes(message.data);
		if (message.is_localonly !== void 0) writer.uint32(120).bool(message.is_localonly);
		if (message.no_steam_server !== void 0) writer.uint32(152).bool(message.no_steam_server);
		if (message.is_transition !== void 0) writer.uint32(128).bool(message.is_transition);
		if (message.previouslevel !== void 0) writer.uint32(138).string(message.previouslevel);
		if (message.landmarkname !== void 0) writer.uint32(146).string(message.landmarkname);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_GameSessionConfiguration();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.is_multiplayer = reader.bool();
					continue;
				case 2:
					if (tag !== 16) break;
					message.is_loadsavegame = reader.bool();
					continue;
				case 3:
					if (tag !== 24) break;
					message.is_background_map = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.is_headless = reader.bool();
					continue;
				case 5:
					if (tag !== 40) break;
					message.min_client_limit = reader.uint32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.max_client_limit = reader.uint32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.max_clients = reader.uint32();
					continue;
				case 8:
					if (tag !== 69) break;
					message.tick_interval = reader.fixed32();
					continue;
				case 9:
					if (tag !== 74) break;
					message.hostname = reader.string();
					continue;
				case 10:
					if (tag !== 82) break;
					message.savegamename = reader.string();
					continue;
				case 11:
					if (tag !== 90) break;
					message.s1_mapname = reader.string();
					continue;
				case 12:
					if (tag !== 98) break;
					message.gamemode = reader.string();
					continue;
				case 13:
					if (tag !== 106) break;
					message.server_ip_address = reader.string();
					continue;
				case 14:
					if (tag !== 114) break;
					message.data = reader.bytes();
					continue;
				case 15:
					if (tag !== 120) break;
					message.is_localonly = reader.bool();
					continue;
				case 19:
					if (tag !== 152) break;
					message.no_steam_server = reader.bool();
					continue;
				case 16:
					if (tag !== 128) break;
					message.is_transition = reader.bool();
					continue;
				case 17:
					if (tag !== 138) break;
					message.previouslevel = reader.string();
					continue;
				case 18:
					if (tag !== 146) break;
					message.landmarkname = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			is_multiplayer: isSet$5(object.isMultiplayer) ? globalThis.Boolean(object.isMultiplayer) : isSet$5(object.is_multiplayer) ? globalThis.Boolean(object.is_multiplayer) : void 0,
			is_loadsavegame: isSet$5(object.isLoadsavegame) ? globalThis.Boolean(object.isLoadsavegame) : isSet$5(object.is_loadsavegame) ? globalThis.Boolean(object.is_loadsavegame) : void 0,
			is_background_map: isSet$5(object.isBackgroundMap) ? globalThis.Boolean(object.isBackgroundMap) : isSet$5(object.is_background_map) ? globalThis.Boolean(object.is_background_map) : void 0,
			is_headless: isSet$5(object.isHeadless) ? globalThis.Boolean(object.isHeadless) : isSet$5(object.is_headless) ? globalThis.Boolean(object.is_headless) : void 0,
			min_client_limit: isSet$5(object.minClientLimit) ? globalThis.Number(object.minClientLimit) : isSet$5(object.min_client_limit) ? globalThis.Number(object.min_client_limit) : void 0,
			max_client_limit: isSet$5(object.maxClientLimit) ? globalThis.Number(object.maxClientLimit) : isSet$5(object.max_client_limit) ? globalThis.Number(object.max_client_limit) : void 0,
			max_clients: isSet$5(object.maxClients) ? globalThis.Number(object.maxClients) : isSet$5(object.max_clients) ? globalThis.Number(object.max_clients) : void 0,
			tick_interval: isSet$5(object.tickInterval) ? globalThis.Number(object.tickInterval) : isSet$5(object.tick_interval) ? globalThis.Number(object.tick_interval) : void 0,
			hostname: isSet$5(object.hostname) ? globalThis.String(object.hostname) : void 0,
			savegamename: isSet$5(object.savegamename) ? globalThis.String(object.savegamename) : void 0,
			s1_mapname: isSet$5(object.s1Mapname) ? globalThis.String(object.s1Mapname) : isSet$5(object.s1_mapname) ? globalThis.String(object.s1_mapname) : void 0,
			gamemode: isSet$5(object.gamemode) ? globalThis.String(object.gamemode) : void 0,
			server_ip_address: isSet$5(object.serverIpAddress) ? globalThis.String(object.serverIpAddress) : isSet$5(object.server_ip_address) ? globalThis.String(object.server_ip_address) : void 0,
			data: isSet$5(object.data) ? bytesFromBase64$2(object.data) : void 0,
			is_localonly: isSet$5(object.isLocalonly) ? globalThis.Boolean(object.isLocalonly) : isSet$5(object.is_localonly) ? globalThis.Boolean(object.is_localonly) : void 0,
			no_steam_server: isSet$5(object.noSteamServer) ? globalThis.Boolean(object.noSteamServer) : isSet$5(object.no_steam_server) ? globalThis.Boolean(object.no_steam_server) : void 0,
			is_transition: isSet$5(object.isTransition) ? globalThis.Boolean(object.isTransition) : isSet$5(object.is_transition) ? globalThis.Boolean(object.is_transition) : void 0,
			previouslevel: isSet$5(object.previouslevel) ? globalThis.String(object.previouslevel) : void 0,
			landmarkname: isSet$5(object.landmarkname) ? globalThis.String(object.landmarkname) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.is_multiplayer !== void 0) obj.isMultiplayer = message.is_multiplayer;
		if (message.is_loadsavegame !== void 0) obj.isLoadsavegame = message.is_loadsavegame;
		if (message.is_background_map !== void 0) obj.isBackgroundMap = message.is_background_map;
		if (message.is_headless !== void 0) obj.isHeadless = message.is_headless;
		if (message.min_client_limit !== void 0) obj.minClientLimit = Math.round(message.min_client_limit);
		if (message.max_client_limit !== void 0) obj.maxClientLimit = Math.round(message.max_client_limit);
		if (message.max_clients !== void 0) obj.maxClients = Math.round(message.max_clients);
		if (message.tick_interval !== void 0) obj.tickInterval = Math.round(message.tick_interval);
		if (message.hostname !== void 0) obj.hostname = message.hostname;
		if (message.savegamename !== void 0) obj.savegamename = message.savegamename;
		if (message.s1_mapname !== void 0) obj.s1Mapname = message.s1_mapname;
		if (message.gamemode !== void 0) obj.gamemode = message.gamemode;
		if (message.server_ip_address !== void 0) obj.serverIpAddress = message.server_ip_address;
		if (message.data !== void 0) obj.data = base64FromBytes$2(message.data);
		if (message.is_localonly !== void 0) obj.isLocalonly = message.is_localonly;
		if (message.no_steam_server !== void 0) obj.noSteamServer = message.no_steam_server;
		if (message.is_transition !== void 0) obj.isTransition = message.is_transition;
		if (message.previouslevel !== void 0) obj.previouslevel = message.previouslevel;
		if (message.landmarkname !== void 0) obj.landmarkname = message.landmarkname;
		return obj;
	},
	create(base) {
		return CSVCMsg_GameSessionConfiguration.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_GameSessionConfiguration();
		message.is_multiplayer = object.is_multiplayer ?? void 0;
		message.is_loadsavegame = object.is_loadsavegame ?? void 0;
		message.is_background_map = object.is_background_map ?? void 0;
		message.is_headless = object.is_headless ?? void 0;
		message.min_client_limit = object.min_client_limit ?? void 0;
		message.max_client_limit = object.max_client_limit ?? void 0;
		message.max_clients = object.max_clients ?? void 0;
		message.tick_interval = object.tick_interval ?? void 0;
		message.hostname = object.hostname ?? void 0;
		message.savegamename = object.savegamename ?? void 0;
		message.s1_mapname = object.s1_mapname ?? void 0;
		message.gamemode = object.gamemode ?? void 0;
		message.server_ip_address = object.server_ip_address ?? void 0;
		message.data = object.data ?? void 0;
		message.is_localonly = object.is_localonly ?? void 0;
		message.no_steam_server = object.no_steam_server ?? void 0;
		message.is_transition = object.is_transition ?? void 0;
		message.previouslevel = object.previouslevel ?? void 0;
		message.landmarkname = object.landmarkname ?? void 0;
		return message;
	}
};
function bytesFromBase64$2(b64) {
	if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
		return arr;
	}
}
function base64FromBytes$2(arr) {
	if (globalThis.Buffer) return globalThis.Buffer.from(arr).toString("base64");
	else {
		const bin = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}
function isSet$5(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/ts-proto/gameevents.ts
const EBaseGameEvents = {
	GE_VDebugGameSessionIDEvent: 200,
	GE_PlaceDecalEvent: 201,
	GE_ClearWorldDecalsEvent: 202,
	GE_ClearEntityDecalsEvent: 203,
	GE_ClearDecalsForEntityEvent: 204,
	GE_Source1LegacyGameEventList: 205,
	GE_Source1LegacyListenEvents: 206,
	GE_Source1LegacyGameEvent: 207,
	GE_SosStartSoundEvent: 208,
	GE_SosStopSoundEvent: 209,
	GE_SosSetSoundEventParams: 210,
	GE_SosSetLibraryStackFields: 211,
	GE_SosStopSoundEventHash: 212,
	UNRECOGNIZED: -1
};
function createBaseCMsgSource1LegacyGameEventList() {
	return { descriptors: [] };
}
const CMsgSource1LegacyGameEventList = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.descriptors) CMsgSource1LegacyGameEventList_descriptor_t.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgSource1LegacyGameEventList();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.descriptors.push(CMsgSource1LegacyGameEventList_descriptor_t.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { descriptors: globalThis.Array.isArray(object?.descriptors) ? object.descriptors.map((e) => CMsgSource1LegacyGameEventList_descriptor_t.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.descriptors?.length) obj.descriptors = message.descriptors.map((e) => CMsgSource1LegacyGameEventList_descriptor_t.toJSON(e));
		return obj;
	},
	create(base) {
		return CMsgSource1LegacyGameEventList.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgSource1LegacyGameEventList();
		message.descriptors = object.descriptors?.map((e) => CMsgSource1LegacyGameEventList_descriptor_t.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCMsgSource1LegacyGameEventList_key_t() {
	return {
		type: void 0,
		name: void 0
	};
}
const CMsgSource1LegacyGameEventList_key_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.type !== void 0) writer.uint32(8).int32(message.type);
		if (message.name !== void 0) writer.uint32(18).string(message.name);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgSource1LegacyGameEventList_key_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.type = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			type: isSet$4(object.type) ? globalThis.Number(object.type) : void 0,
			name: isSet$4(object.name) ? globalThis.String(object.name) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.type !== void 0) obj.type = Math.round(message.type);
		if (message.name !== void 0) obj.name = message.name;
		return obj;
	},
	create(base) {
		return CMsgSource1LegacyGameEventList_key_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgSource1LegacyGameEventList_key_t();
		message.type = object.type ?? void 0;
		message.name = object.name ?? void 0;
		return message;
	}
};
function createBaseCMsgSource1LegacyGameEventList_descriptor_t() {
	return {
		eventid: void 0,
		name: void 0,
		keys: []
	};
}
const CMsgSource1LegacyGameEventList_descriptor_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.eventid !== void 0) writer.uint32(8).int32(message.eventid);
		if (message.name !== void 0) writer.uint32(18).string(message.name);
		for (const v of message.keys) CMsgSource1LegacyGameEventList_key_t.encode(v, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgSource1LegacyGameEventList_descriptor_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.eventid = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.name = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.keys.push(CMsgSource1LegacyGameEventList_key_t.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			eventid: isSet$4(object.eventid) ? globalThis.Number(object.eventid) : void 0,
			name: isSet$4(object.name) ? globalThis.String(object.name) : void 0,
			keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => CMsgSource1LegacyGameEventList_key_t.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.eventid !== void 0) obj.eventid = Math.round(message.eventid);
		if (message.name !== void 0) obj.name = message.name;
		if (message.keys?.length) obj.keys = message.keys.map((e) => CMsgSource1LegacyGameEventList_key_t.toJSON(e));
		return obj;
	},
	create(base) {
		return CMsgSource1LegacyGameEventList_descriptor_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgSource1LegacyGameEventList_descriptor_t();
		message.eventid = object.eventid ?? void 0;
		message.name = object.name ?? void 0;
		message.keys = object.keys?.map((e) => CMsgSource1LegacyGameEventList_key_t.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCMsgSource1LegacyGameEvent() {
	return {
		event_name: void 0,
		eventid: void 0,
		keys: [],
		server_tick: void 0,
		passthrough: void 0
	};
}
const CMsgSource1LegacyGameEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.event_name !== void 0) writer.uint32(10).string(message.event_name);
		if (message.eventid !== void 0) writer.uint32(16).int32(message.eventid);
		for (const v of message.keys) CMsgSource1LegacyGameEvent_key_t.encode(v, writer.uint32(26).fork()).join();
		if (message.server_tick !== void 0) writer.uint32(32).int32(message.server_tick);
		if (message.passthrough !== void 0) writer.uint32(40).int32(message.passthrough);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgSource1LegacyGameEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.event_name = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.eventid = reader.int32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.keys.push(CMsgSource1LegacyGameEvent_key_t.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) break;
					message.server_tick = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.passthrough = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			event_name: isSet$4(object.eventName) ? globalThis.String(object.eventName) : isSet$4(object.event_name) ? globalThis.String(object.event_name) : void 0,
			eventid: isSet$4(object.eventid) ? globalThis.Number(object.eventid) : void 0,
			keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => CMsgSource1LegacyGameEvent_key_t.fromJSON(e)) : [],
			server_tick: isSet$4(object.serverTick) ? globalThis.Number(object.serverTick) : isSet$4(object.server_tick) ? globalThis.Number(object.server_tick) : void 0,
			passthrough: isSet$4(object.passthrough) ? globalThis.Number(object.passthrough) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.event_name !== void 0) obj.eventName = message.event_name;
		if (message.eventid !== void 0) obj.eventid = Math.round(message.eventid);
		if (message.keys?.length) obj.keys = message.keys.map((e) => CMsgSource1LegacyGameEvent_key_t.toJSON(e));
		if (message.server_tick !== void 0) obj.serverTick = Math.round(message.server_tick);
		if (message.passthrough !== void 0) obj.passthrough = Math.round(message.passthrough);
		return obj;
	},
	create(base) {
		return CMsgSource1LegacyGameEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgSource1LegacyGameEvent();
		message.event_name = object.event_name ?? void 0;
		message.eventid = object.eventid ?? void 0;
		message.keys = object.keys?.map((e) => CMsgSource1LegacyGameEvent_key_t.fromPartial(e)) || [];
		message.server_tick = object.server_tick ?? void 0;
		message.passthrough = object.passthrough ?? void 0;
		return message;
	}
};
function createBaseCMsgSource1LegacyGameEvent_key_t() {
	return {
		type: void 0,
		val_string: void 0,
		val_float: void 0,
		val_long: void 0,
		val_short: void 0,
		val_byte: void 0,
		val_bool: void 0,
		val_uint64: void 0
	};
}
const CMsgSource1LegacyGameEvent_key_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.type !== void 0) writer.uint32(8).int32(message.type);
		if (message.val_string !== void 0) writer.uint32(18).string(message.val_string);
		if (message.val_float !== void 0) writer.uint32(29).float(message.val_float);
		if (message.val_long !== void 0) writer.uint32(32).int32(message.val_long);
		if (message.val_short !== void 0) writer.uint32(40).int32(message.val_short);
		if (message.val_byte !== void 0) writer.uint32(48).int32(message.val_byte);
		if (message.val_bool !== void 0) writer.uint32(56).bool(message.val_bool);
		if (message.val_uint64 !== void 0) writer.uint32(64).uint64(message.val_uint64);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgSource1LegacyGameEvent_key_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.type = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.val_string = reader.string();
					continue;
				case 3:
					if (tag !== 29) break;
					message.val_float = reader.float();
					continue;
				case 4:
					if (tag !== 32) break;
					message.val_long = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.val_short = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.val_byte = reader.int32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.val_bool = reader.bool();
					continue;
				case 8:
					if (tag !== 64) break;
					message.val_uint64 = reader.uint64().toString();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			type: isSet$4(object.type) ? globalThis.Number(object.type) : void 0,
			val_string: isSet$4(object.valString) ? globalThis.String(object.valString) : isSet$4(object.val_string) ? globalThis.String(object.val_string) : void 0,
			val_float: isSet$4(object.valFloat) ? globalThis.Number(object.valFloat) : isSet$4(object.val_float) ? globalThis.Number(object.val_float) : void 0,
			val_long: isSet$4(object.valLong) ? globalThis.Number(object.valLong) : isSet$4(object.val_long) ? globalThis.Number(object.val_long) : void 0,
			val_short: isSet$4(object.valShort) ? globalThis.Number(object.valShort) : isSet$4(object.val_short) ? globalThis.Number(object.val_short) : void 0,
			val_byte: isSet$4(object.valByte) ? globalThis.Number(object.valByte) : isSet$4(object.val_byte) ? globalThis.Number(object.val_byte) : void 0,
			val_bool: isSet$4(object.valBool) ? globalThis.Boolean(object.valBool) : isSet$4(object.val_bool) ? globalThis.Boolean(object.val_bool) : void 0,
			val_uint64: isSet$4(object.valUint64) ? globalThis.String(object.valUint64) : isSet$4(object.val_uint64) ? globalThis.String(object.val_uint64) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.type !== void 0) obj.type = Math.round(message.type);
		if (message.val_string !== void 0) obj.valString = message.val_string;
		if (message.val_float !== void 0) obj.valFloat = message.val_float;
		if (message.val_long !== void 0) obj.valLong = Math.round(message.val_long);
		if (message.val_short !== void 0) obj.valShort = Math.round(message.val_short);
		if (message.val_byte !== void 0) obj.valByte = Math.round(message.val_byte);
		if (message.val_bool !== void 0) obj.valBool = message.val_bool;
		if (message.val_uint64 !== void 0) obj.valUint64 = message.val_uint64;
		return obj;
	},
	create(base) {
		return CMsgSource1LegacyGameEvent_key_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgSource1LegacyGameEvent_key_t();
		message.type = object.type ?? void 0;
		message.val_string = object.val_string ?? void 0;
		message.val_float = object.val_float ?? void 0;
		message.val_long = object.val_long ?? void 0;
		message.val_short = object.val_short ?? void 0;
		message.val_byte = object.val_byte ?? void 0;
		message.val_bool = object.val_bool ?? void 0;
		message.val_uint64 = object.val_uint64 ?? void 0;
		return message;
	}
};
function isSet$4(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/ts-proto/netmessages.ts
const SVC_Messages = {
	svc_ServerInfo: 40,
	svc_FlattenedSerializer: 41,
	svc_ClassInfo: 42,
	svc_SetPause: 43,
	svc_CreateStringTable: 44,
	svc_UpdateStringTable: 45,
	svc_VoiceInit: 46,
	svc_VoiceData: 47,
	svc_Print: 48,
	svc_Sounds: 49,
	svc_SetView: 50,
	svc_ClearAllStringTables: 51,
	svc_CmdKeyValues: 52,
	svc_BSPDecal: 53,
	svc_SplitScreen: 54,
	svc_PacketEntities: 55,
	svc_Prefetch: 56,
	svc_Menu: 57,
	svc_GetCvarValue: 58,
	svc_StopSound: 59,
	svc_PeerList: 60,
	svc_PacketReliable: 61,
	svc_HLTVStatus: 62,
	svc_ServerSteamID: 63,
	svc_FullFrameSplit: 70,
	svc_RconServerDetails: 71,
	svc_UserMessage: 72,
	svc_Broadcast_Command: 74,
	svc_HltvFixupOperatorStatus: 75,
	svc_UserCmds: 76,
	svc_NextMsgPredicted: 77,
	UNRECOGNIZED: -1
};
const VoiceDataFormat_t = {
	VOICEDATA_FORMAT_STEAM: 0,
	VOICEDATA_FORMAT_ENGINE: 1,
	VOICEDATA_FORMAT_OPUS: 2,
	UNRECOGNIZED: -1
};
function voiceDataFormat_tFromJSON(object) {
	switch (object) {
		case 0:
		case "VOICEDATA_FORMAT_STEAM": return VoiceDataFormat_t.VOICEDATA_FORMAT_STEAM;
		case 1:
		case "VOICEDATA_FORMAT_ENGINE": return VoiceDataFormat_t.VOICEDATA_FORMAT_ENGINE;
		case 2:
		case "VOICEDATA_FORMAT_OPUS": return VoiceDataFormat_t.VOICEDATA_FORMAT_OPUS;
		default: return VoiceDataFormat_t.UNRECOGNIZED;
	}
}
function voiceDataFormat_tToJSON(object) {
	switch (object) {
		case VoiceDataFormat_t.VOICEDATA_FORMAT_STEAM: return "VOICEDATA_FORMAT_STEAM";
		case VoiceDataFormat_t.VOICEDATA_FORMAT_ENGINE: return "VOICEDATA_FORMAT_ENGINE";
		case VoiceDataFormat_t.VOICEDATA_FORMAT_OPUS: return "VOICEDATA_FORMAT_OPUS";
		case VoiceDataFormat_t.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
function createBaseCMsgVoiceAudio() {
	return {
		format: void 0,
		voice_data: void 0,
		sequence_bytes: void 0,
		section_number: void 0,
		sample_rate: void 0,
		uncompressed_sample_offset: void 0,
		num_packets: void 0,
		packet_offsets: [],
		voice_level: void 0
	};
}
const CMsgVoiceAudio = {
	encode(message, writer = new BinaryWriter()) {
		if (message.format !== void 0) writer.uint32(8).int32(message.format);
		if (message.voice_data !== void 0) writer.uint32(18).bytes(message.voice_data);
		if (message.sequence_bytes !== void 0) writer.uint32(24).int32(message.sequence_bytes);
		if (message.section_number !== void 0) writer.uint32(32).uint32(message.section_number);
		if (message.sample_rate !== void 0) writer.uint32(40).uint32(message.sample_rate);
		if (message.uncompressed_sample_offset !== void 0) writer.uint32(48).uint32(message.uncompressed_sample_offset);
		if (message.num_packets !== void 0) writer.uint32(56).uint32(message.num_packets);
		writer.uint32(66).fork();
		for (const v of message.packet_offsets) writer.uint32(v);
		writer.join();
		if (message.voice_level !== void 0) writer.uint32(77).float(message.voice_level);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgVoiceAudio();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.format = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.voice_data = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.sequence_bytes = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.section_number = reader.uint32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.sample_rate = reader.uint32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.uncompressed_sample_offset = reader.uint32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.num_packets = reader.uint32();
					continue;
				case 8:
					if (tag === 64) {
						message.packet_offsets.push(reader.uint32());
						continue;
					}
					if (tag === 66) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.packet_offsets.push(reader.uint32());
						continue;
					}
					break;
				case 9:
					if (tag !== 77) break;
					message.voice_level = reader.float();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			format: isSet$3(object.format) ? voiceDataFormat_tFromJSON(object.format) : void 0,
			voice_data: isSet$3(object.voiceData) ? bytesFromBase64$1(object.voiceData) : isSet$3(object.voice_data) ? bytesFromBase64$1(object.voice_data) : void 0,
			sequence_bytes: isSet$3(object.sequenceBytes) ? globalThis.Number(object.sequenceBytes) : isSet$3(object.sequence_bytes) ? globalThis.Number(object.sequence_bytes) : void 0,
			section_number: isSet$3(object.sectionNumber) ? globalThis.Number(object.sectionNumber) : isSet$3(object.section_number) ? globalThis.Number(object.section_number) : void 0,
			sample_rate: isSet$3(object.sampleRate) ? globalThis.Number(object.sampleRate) : isSet$3(object.sample_rate) ? globalThis.Number(object.sample_rate) : void 0,
			uncompressed_sample_offset: isSet$3(object.uncompressedSampleOffset) ? globalThis.Number(object.uncompressedSampleOffset) : isSet$3(object.uncompressed_sample_offset) ? globalThis.Number(object.uncompressed_sample_offset) : void 0,
			num_packets: isSet$3(object.numPackets) ? globalThis.Number(object.numPackets) : isSet$3(object.num_packets) ? globalThis.Number(object.num_packets) : void 0,
			packet_offsets: globalThis.Array.isArray(object?.packetOffsets) ? object.packetOffsets.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.packet_offsets) ? object.packet_offsets.map((e) => globalThis.Number(e)) : [],
			voice_level: isSet$3(object.voiceLevel) ? globalThis.Number(object.voiceLevel) : isSet$3(object.voice_level) ? globalThis.Number(object.voice_level) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.format !== void 0) obj.format = voiceDataFormat_tToJSON(message.format);
		if (message.voice_data !== void 0) obj.voiceData = base64FromBytes$1(message.voice_data);
		if (message.sequence_bytes !== void 0) obj.sequenceBytes = Math.round(message.sequence_bytes);
		if (message.section_number !== void 0) obj.sectionNumber = Math.round(message.section_number);
		if (message.sample_rate !== void 0) obj.sampleRate = Math.round(message.sample_rate);
		if (message.uncompressed_sample_offset !== void 0) obj.uncompressedSampleOffset = Math.round(message.uncompressed_sample_offset);
		if (message.num_packets !== void 0) obj.numPackets = Math.round(message.num_packets);
		if (message.packet_offsets?.length) obj.packetOffsets = message.packet_offsets.map((e) => Math.round(e));
		if (message.voice_level !== void 0) obj.voiceLevel = message.voice_level;
		return obj;
	},
	create(base) {
		return CMsgVoiceAudio.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgVoiceAudio();
		message.format = object.format ?? void 0;
		message.voice_data = object.voice_data ?? void 0;
		message.sequence_bytes = object.sequence_bytes ?? void 0;
		message.section_number = object.section_number ?? void 0;
		message.sample_rate = object.sample_rate ?? void 0;
		message.uncompressed_sample_offset = object.uncompressed_sample_offset ?? void 0;
		message.num_packets = object.num_packets ?? void 0;
		message.packet_offsets = object.packet_offsets?.map((e) => e) || [];
		message.voice_level = object.voice_level ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_ServerInfo() {
	return {
		protocol: void 0,
		server_count: void 0,
		is_dedicated: void 0,
		is_hltv: void 0,
		c_os: void 0,
		max_clients: void 0,
		max_classes: void 0,
		player_slot: void 0,
		tick_interval: void 0,
		game_dir: void 0,
		map_name: void 0,
		sky_name: void 0,
		host_name: void 0,
		addon_name: void 0,
		game_session_config: void 0,
		game_session_manifest: void 0
	};
}
const CSVCMsg_ServerInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.protocol !== void 0) writer.uint32(8).int32(message.protocol);
		if (message.server_count !== void 0) writer.uint32(16).int32(message.server_count);
		if (message.is_dedicated !== void 0) writer.uint32(24).bool(message.is_dedicated);
		if (message.is_hltv !== void 0) writer.uint32(32).bool(message.is_hltv);
		if (message.c_os !== void 0) writer.uint32(48).int32(message.c_os);
		if (message.max_clients !== void 0) writer.uint32(80).int32(message.max_clients);
		if (message.max_classes !== void 0) writer.uint32(88).int32(message.max_classes);
		if (message.player_slot !== void 0) writer.uint32(96).int32(message.player_slot);
		if (message.tick_interval !== void 0) writer.uint32(109).float(message.tick_interval);
		if (message.game_dir !== void 0) writer.uint32(114).string(message.game_dir);
		if (message.map_name !== void 0) writer.uint32(122).string(message.map_name);
		if (message.sky_name !== void 0) writer.uint32(130).string(message.sky_name);
		if (message.host_name !== void 0) writer.uint32(138).string(message.host_name);
		if (message.addon_name !== void 0) writer.uint32(146).string(message.addon_name);
		if (message.game_session_config !== void 0) CSVCMsg_GameSessionConfiguration.encode(message.game_session_config, writer.uint32(154).fork()).join();
		if (message.game_session_manifest !== void 0) writer.uint32(162).bytes(message.game_session_manifest);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_ServerInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.protocol = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.server_count = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.is_dedicated = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.is_hltv = reader.bool();
					continue;
				case 6:
					if (tag !== 48) break;
					message.c_os = reader.int32();
					continue;
				case 10:
					if (tag !== 80) break;
					message.max_clients = reader.int32();
					continue;
				case 11:
					if (tag !== 88) break;
					message.max_classes = reader.int32();
					continue;
				case 12:
					if (tag !== 96) break;
					message.player_slot = reader.int32();
					continue;
				case 13:
					if (tag !== 109) break;
					message.tick_interval = reader.float();
					continue;
				case 14:
					if (tag !== 114) break;
					message.game_dir = reader.string();
					continue;
				case 15:
					if (tag !== 122) break;
					message.map_name = reader.string();
					continue;
				case 16:
					if (tag !== 130) break;
					message.sky_name = reader.string();
					continue;
				case 17:
					if (tag !== 138) break;
					message.host_name = reader.string();
					continue;
				case 18:
					if (tag !== 146) break;
					message.addon_name = reader.string();
					continue;
				case 19:
					if (tag !== 154) break;
					message.game_session_config = CSVCMsg_GameSessionConfiguration.decode(reader, reader.uint32());
					continue;
				case 20:
					if (tag !== 162) break;
					message.game_session_manifest = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			protocol: isSet$3(object.protocol) ? globalThis.Number(object.protocol) : void 0,
			server_count: isSet$3(object.serverCount) ? globalThis.Number(object.serverCount) : isSet$3(object.server_count) ? globalThis.Number(object.server_count) : void 0,
			is_dedicated: isSet$3(object.isDedicated) ? globalThis.Boolean(object.isDedicated) : isSet$3(object.is_dedicated) ? globalThis.Boolean(object.is_dedicated) : void 0,
			is_hltv: isSet$3(object.isHltv) ? globalThis.Boolean(object.isHltv) : isSet$3(object.is_hltv) ? globalThis.Boolean(object.is_hltv) : void 0,
			c_os: isSet$3(object.cOs) ? globalThis.Number(object.cOs) : isSet$3(object.c_os) ? globalThis.Number(object.c_os) : void 0,
			max_clients: isSet$3(object.maxClients) ? globalThis.Number(object.maxClients) : isSet$3(object.max_clients) ? globalThis.Number(object.max_clients) : void 0,
			max_classes: isSet$3(object.maxClasses) ? globalThis.Number(object.maxClasses) : isSet$3(object.max_classes) ? globalThis.Number(object.max_classes) : void 0,
			player_slot: isSet$3(object.playerSlot) ? globalThis.Number(object.playerSlot) : isSet$3(object.player_slot) ? globalThis.Number(object.player_slot) : void 0,
			tick_interval: isSet$3(object.tickInterval) ? globalThis.Number(object.tickInterval) : isSet$3(object.tick_interval) ? globalThis.Number(object.tick_interval) : void 0,
			game_dir: isSet$3(object.gameDir) ? globalThis.String(object.gameDir) : isSet$3(object.game_dir) ? globalThis.String(object.game_dir) : void 0,
			map_name: isSet$3(object.mapName) ? globalThis.String(object.mapName) : isSet$3(object.map_name) ? globalThis.String(object.map_name) : void 0,
			sky_name: isSet$3(object.skyName) ? globalThis.String(object.skyName) : isSet$3(object.sky_name) ? globalThis.String(object.sky_name) : void 0,
			host_name: isSet$3(object.hostName) ? globalThis.String(object.hostName) : isSet$3(object.host_name) ? globalThis.String(object.host_name) : void 0,
			addon_name: isSet$3(object.addonName) ? globalThis.String(object.addonName) : isSet$3(object.addon_name) ? globalThis.String(object.addon_name) : void 0,
			game_session_config: isSet$3(object.gameSessionConfig) ? CSVCMsg_GameSessionConfiguration.fromJSON(object.gameSessionConfig) : isSet$3(object.game_session_config) ? CSVCMsg_GameSessionConfiguration.fromJSON(object.game_session_config) : void 0,
			game_session_manifest: isSet$3(object.gameSessionManifest) ? bytesFromBase64$1(object.gameSessionManifest) : isSet$3(object.game_session_manifest) ? bytesFromBase64$1(object.game_session_manifest) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.protocol !== void 0) obj.protocol = Math.round(message.protocol);
		if (message.server_count !== void 0) obj.serverCount = Math.round(message.server_count);
		if (message.is_dedicated !== void 0) obj.isDedicated = message.is_dedicated;
		if (message.is_hltv !== void 0) obj.isHltv = message.is_hltv;
		if (message.c_os !== void 0) obj.cOs = Math.round(message.c_os);
		if (message.max_clients !== void 0) obj.maxClients = Math.round(message.max_clients);
		if (message.max_classes !== void 0) obj.maxClasses = Math.round(message.max_classes);
		if (message.player_slot !== void 0) obj.playerSlot = Math.round(message.player_slot);
		if (message.tick_interval !== void 0) obj.tickInterval = message.tick_interval;
		if (message.game_dir !== void 0) obj.gameDir = message.game_dir;
		if (message.map_name !== void 0) obj.mapName = message.map_name;
		if (message.sky_name !== void 0) obj.skyName = message.sky_name;
		if (message.host_name !== void 0) obj.hostName = message.host_name;
		if (message.addon_name !== void 0) obj.addonName = message.addon_name;
		if (message.game_session_config !== void 0) obj.gameSessionConfig = CSVCMsg_GameSessionConfiguration.toJSON(message.game_session_config);
		if (message.game_session_manifest !== void 0) obj.gameSessionManifest = base64FromBytes$1(message.game_session_manifest);
		return obj;
	},
	create(base) {
		return CSVCMsg_ServerInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_ServerInfo();
		message.protocol = object.protocol ?? void 0;
		message.server_count = object.server_count ?? void 0;
		message.is_dedicated = object.is_dedicated ?? void 0;
		message.is_hltv = object.is_hltv ?? void 0;
		message.c_os = object.c_os ?? void 0;
		message.max_clients = object.max_clients ?? void 0;
		message.max_classes = object.max_classes ?? void 0;
		message.player_slot = object.player_slot ?? void 0;
		message.tick_interval = object.tick_interval ?? void 0;
		message.game_dir = object.game_dir ?? void 0;
		message.map_name = object.map_name ?? void 0;
		message.sky_name = object.sky_name ?? void 0;
		message.host_name = object.host_name ?? void 0;
		message.addon_name = object.addon_name ?? void 0;
		message.game_session_config = object.game_session_config !== void 0 && object.game_session_config !== null ? CSVCMsg_GameSessionConfiguration.fromPartial(object.game_session_config) : void 0;
		message.game_session_manifest = object.game_session_manifest ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_UserMessage() {
	return {
		msg_type: void 0,
		msg_data: void 0,
		passthrough: void 0
	};
}
const CSVCMsg_UserMessage = {
	encode(message, writer = new BinaryWriter()) {
		if (message.msg_type !== void 0) writer.uint32(8).int32(message.msg_type);
		if (message.msg_data !== void 0) writer.uint32(18).bytes(message.msg_data);
		if (message.passthrough !== void 0) writer.uint32(24).int32(message.passthrough);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_UserMessage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.msg_type = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.msg_data = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.passthrough = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			msg_type: isSet$3(object.msgType) ? globalThis.Number(object.msgType) : isSet$3(object.msg_type) ? globalThis.Number(object.msg_type) : void 0,
			msg_data: isSet$3(object.msgData) ? bytesFromBase64$1(object.msgData) : isSet$3(object.msg_data) ? bytesFromBase64$1(object.msg_data) : void 0,
			passthrough: isSet$3(object.passthrough) ? globalThis.Number(object.passthrough) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.msg_type !== void 0) obj.msgType = Math.round(message.msg_type);
		if (message.msg_data !== void 0) obj.msgData = base64FromBytes$1(message.msg_data);
		if (message.passthrough !== void 0) obj.passthrough = Math.round(message.passthrough);
		return obj;
	},
	create(base) {
		return CSVCMsg_UserMessage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_UserMessage();
		message.msg_type = object.msg_type ?? void 0;
		message.msg_data = object.msg_data ?? void 0;
		message.passthrough = object.passthrough ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_PacketEntities() {
	return {
		max_entries: void 0,
		updated_entries: void 0,
		legacy_is_delta: void 0,
		update_baseline: void 0,
		baseline: void 0,
		delta_from: void 0,
		entity_data: void 0,
		pending_full_frame: void 0,
		active_spawngroup_handle: void 0,
		max_spawngroup_creationsequence: void 0,
		last_cmd_number_executed: void 0,
		last_cmd_number_recv_delta: void 0,
		server_tick: void 0,
		serialized_entities: void 0,
		alternate_baselines: [],
		has_pvs_vis_bits_deprecated: void 0,
		cmd_recv_status: [],
		non_transmitted_entities: void 0,
		cq_starved_command_ticks: void 0,
		cq_discarded_command_ticks: void 0,
		outofpvs_entity_updates: void 0,
		dev_padding: void 0
	};
}
const CSVCMsg_PacketEntities = {
	encode(message, writer = new BinaryWriter()) {
		if (message.max_entries !== void 0) writer.uint32(8).int32(message.max_entries);
		if (message.updated_entries !== void 0) writer.uint32(16).int32(message.updated_entries);
		if (message.legacy_is_delta !== void 0) writer.uint32(24).bool(message.legacy_is_delta);
		if (message.update_baseline !== void 0) writer.uint32(32).bool(message.update_baseline);
		if (message.baseline !== void 0) writer.uint32(40).int32(message.baseline);
		if (message.delta_from !== void 0) writer.uint32(48).int32(message.delta_from);
		if (message.entity_data !== void 0) writer.uint32(58).bytes(message.entity_data);
		if (message.pending_full_frame !== void 0) writer.uint32(64).bool(message.pending_full_frame);
		if (message.active_spawngroup_handle !== void 0) writer.uint32(72).uint32(message.active_spawngroup_handle);
		if (message.max_spawngroup_creationsequence !== void 0) writer.uint32(80).uint32(message.max_spawngroup_creationsequence);
		if (message.last_cmd_number_executed !== void 0) writer.uint32(88).uint32(message.last_cmd_number_executed);
		if (message.last_cmd_number_recv_delta !== void 0) writer.uint32(136).sint32(message.last_cmd_number_recv_delta);
		if (message.server_tick !== void 0) writer.uint32(96).uint32(message.server_tick);
		if (message.serialized_entities !== void 0) writer.uint32(106).bytes(message.serialized_entities);
		for (const v of message.alternate_baselines) CSVCMsg_PacketEntities_alternate_baseline_t.encode(v, writer.uint32(122).fork()).join();
		if (message.has_pvs_vis_bits_deprecated !== void 0) writer.uint32(128).uint32(message.has_pvs_vis_bits_deprecated);
		writer.uint32(178).fork();
		for (const v of message.cmd_recv_status) writer.sint32(v);
		writer.join();
		if (message.non_transmitted_entities !== void 0) CSVCMsg_PacketEntities_non_transmitted_entities_t.encode(message.non_transmitted_entities, writer.uint32(154).fork()).join();
		if (message.cq_starved_command_ticks !== void 0) writer.uint32(160).uint32(message.cq_starved_command_ticks);
		if (message.cq_discarded_command_ticks !== void 0) writer.uint32(168).uint32(message.cq_discarded_command_ticks);
		if (message.outofpvs_entity_updates !== void 0) CSVCMsg_PacketEntities_outofpvs_entity_updates_t.encode(message.outofpvs_entity_updates, writer.uint32(186).fork()).join();
		if (message.dev_padding !== void 0) writer.uint32(7994).bytes(message.dev_padding);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_PacketEntities();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.max_entries = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.updated_entries = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.legacy_is_delta = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.update_baseline = reader.bool();
					continue;
				case 5:
					if (tag !== 40) break;
					message.baseline = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.delta_from = reader.int32();
					continue;
				case 7:
					if (tag !== 58) break;
					message.entity_data = reader.bytes();
					continue;
				case 8:
					if (tag !== 64) break;
					message.pending_full_frame = reader.bool();
					continue;
				case 9:
					if (tag !== 72) break;
					message.active_spawngroup_handle = reader.uint32();
					continue;
				case 10:
					if (tag !== 80) break;
					message.max_spawngroup_creationsequence = reader.uint32();
					continue;
				case 11:
					if (tag !== 88) break;
					message.last_cmd_number_executed = reader.uint32();
					continue;
				case 17:
					if (tag !== 136) break;
					message.last_cmd_number_recv_delta = reader.sint32();
					continue;
				case 12:
					if (tag !== 96) break;
					message.server_tick = reader.uint32();
					continue;
				case 13:
					if (tag !== 106) break;
					message.serialized_entities = reader.bytes();
					continue;
				case 15:
					if (tag !== 122) break;
					message.alternate_baselines.push(CSVCMsg_PacketEntities_alternate_baseline_t.decode(reader, reader.uint32()));
					continue;
				case 16:
					if (tag !== 128) break;
					message.has_pvs_vis_bits_deprecated = reader.uint32();
					continue;
				case 22:
					if (tag === 176) {
						message.cmd_recv_status.push(reader.sint32());
						continue;
					}
					if (tag === 178) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.cmd_recv_status.push(reader.sint32());
						continue;
					}
					break;
				case 19:
					if (tag !== 154) break;
					message.non_transmitted_entities = CSVCMsg_PacketEntities_non_transmitted_entities_t.decode(reader, reader.uint32());
					continue;
				case 20:
					if (tag !== 160) break;
					message.cq_starved_command_ticks = reader.uint32();
					continue;
				case 21:
					if (tag !== 168) break;
					message.cq_discarded_command_ticks = reader.uint32();
					continue;
				case 23:
					if (tag !== 186) break;
					message.outofpvs_entity_updates = CSVCMsg_PacketEntities_outofpvs_entity_updates_t.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) break;
					message.dev_padding = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			max_entries: isSet$3(object.maxEntries) ? globalThis.Number(object.maxEntries) : isSet$3(object.max_entries) ? globalThis.Number(object.max_entries) : void 0,
			updated_entries: isSet$3(object.updatedEntries) ? globalThis.Number(object.updatedEntries) : isSet$3(object.updated_entries) ? globalThis.Number(object.updated_entries) : void 0,
			legacy_is_delta: isSet$3(object.legacyIsDelta) ? globalThis.Boolean(object.legacyIsDelta) : isSet$3(object.legacy_is_delta) ? globalThis.Boolean(object.legacy_is_delta) : void 0,
			update_baseline: isSet$3(object.updateBaseline) ? globalThis.Boolean(object.updateBaseline) : isSet$3(object.update_baseline) ? globalThis.Boolean(object.update_baseline) : void 0,
			baseline: isSet$3(object.baseline) ? globalThis.Number(object.baseline) : void 0,
			delta_from: isSet$3(object.deltaFrom) ? globalThis.Number(object.deltaFrom) : isSet$3(object.delta_from) ? globalThis.Number(object.delta_from) : void 0,
			entity_data: isSet$3(object.entityData) ? bytesFromBase64$1(object.entityData) : isSet$3(object.entity_data) ? bytesFromBase64$1(object.entity_data) : void 0,
			pending_full_frame: isSet$3(object.pendingFullFrame) ? globalThis.Boolean(object.pendingFullFrame) : isSet$3(object.pending_full_frame) ? globalThis.Boolean(object.pending_full_frame) : void 0,
			active_spawngroup_handle: isSet$3(object.activeSpawngroupHandle) ? globalThis.Number(object.activeSpawngroupHandle) : isSet$3(object.active_spawngroup_handle) ? globalThis.Number(object.active_spawngroup_handle) : void 0,
			max_spawngroup_creationsequence: isSet$3(object.maxSpawngroupCreationsequence) ? globalThis.Number(object.maxSpawngroupCreationsequence) : isSet$3(object.max_spawngroup_creationsequence) ? globalThis.Number(object.max_spawngroup_creationsequence) : void 0,
			last_cmd_number_executed: isSet$3(object.lastCmdNumberExecuted) ? globalThis.Number(object.lastCmdNumberExecuted) : isSet$3(object.last_cmd_number_executed) ? globalThis.Number(object.last_cmd_number_executed) : void 0,
			last_cmd_number_recv_delta: isSet$3(object.lastCmdNumberRecvDelta) ? globalThis.Number(object.lastCmdNumberRecvDelta) : isSet$3(object.last_cmd_number_recv_delta) ? globalThis.Number(object.last_cmd_number_recv_delta) : void 0,
			server_tick: isSet$3(object.serverTick) ? globalThis.Number(object.serverTick) : isSet$3(object.server_tick) ? globalThis.Number(object.server_tick) : void 0,
			serialized_entities: isSet$3(object.serializedEntities) ? bytesFromBase64$1(object.serializedEntities) : isSet$3(object.serialized_entities) ? bytesFromBase64$1(object.serialized_entities) : void 0,
			alternate_baselines: globalThis.Array.isArray(object?.alternateBaselines) ? object.alternateBaselines.map((e) => CSVCMsg_PacketEntities_alternate_baseline_t.fromJSON(e)) : globalThis.Array.isArray(object?.alternate_baselines) ? object.alternate_baselines.map((e) => CSVCMsg_PacketEntities_alternate_baseline_t.fromJSON(e)) : [],
			has_pvs_vis_bits_deprecated: isSet$3(object.hasPvsVisBitsDeprecated) ? globalThis.Number(object.hasPvsVisBitsDeprecated) : isSet$3(object.has_pvs_vis_bits_deprecated) ? globalThis.Number(object.has_pvs_vis_bits_deprecated) : void 0,
			cmd_recv_status: globalThis.Array.isArray(object?.cmdRecvStatus) ? object.cmdRecvStatus.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.cmd_recv_status) ? object.cmd_recv_status.map((e) => globalThis.Number(e)) : [],
			non_transmitted_entities: isSet$3(object.nonTransmittedEntities) ? CSVCMsg_PacketEntities_non_transmitted_entities_t.fromJSON(object.nonTransmittedEntities) : isSet$3(object.non_transmitted_entities) ? CSVCMsg_PacketEntities_non_transmitted_entities_t.fromJSON(object.non_transmitted_entities) : void 0,
			cq_starved_command_ticks: isSet$3(object.cqStarvedCommandTicks) ? globalThis.Number(object.cqStarvedCommandTicks) : isSet$3(object.cq_starved_command_ticks) ? globalThis.Number(object.cq_starved_command_ticks) : void 0,
			cq_discarded_command_ticks: isSet$3(object.cqDiscardedCommandTicks) ? globalThis.Number(object.cqDiscardedCommandTicks) : isSet$3(object.cq_discarded_command_ticks) ? globalThis.Number(object.cq_discarded_command_ticks) : void 0,
			outofpvs_entity_updates: isSet$3(object.outofpvsEntityUpdates) ? CSVCMsg_PacketEntities_outofpvs_entity_updates_t.fromJSON(object.outofpvsEntityUpdates) : isSet$3(object.outofpvs_entity_updates) ? CSVCMsg_PacketEntities_outofpvs_entity_updates_t.fromJSON(object.outofpvs_entity_updates) : void 0,
			dev_padding: isSet$3(object.devPadding) ? bytesFromBase64$1(object.devPadding) : isSet$3(object.dev_padding) ? bytesFromBase64$1(object.dev_padding) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.max_entries !== void 0) obj.maxEntries = Math.round(message.max_entries);
		if (message.updated_entries !== void 0) obj.updatedEntries = Math.round(message.updated_entries);
		if (message.legacy_is_delta !== void 0) obj.legacyIsDelta = message.legacy_is_delta;
		if (message.update_baseline !== void 0) obj.updateBaseline = message.update_baseline;
		if (message.baseline !== void 0) obj.baseline = Math.round(message.baseline);
		if (message.delta_from !== void 0) obj.deltaFrom = Math.round(message.delta_from);
		if (message.entity_data !== void 0) obj.entityData = base64FromBytes$1(message.entity_data);
		if (message.pending_full_frame !== void 0) obj.pendingFullFrame = message.pending_full_frame;
		if (message.active_spawngroup_handle !== void 0) obj.activeSpawngroupHandle = Math.round(message.active_spawngroup_handle);
		if (message.max_spawngroup_creationsequence !== void 0) obj.maxSpawngroupCreationsequence = Math.round(message.max_spawngroup_creationsequence);
		if (message.last_cmd_number_executed !== void 0) obj.lastCmdNumberExecuted = Math.round(message.last_cmd_number_executed);
		if (message.last_cmd_number_recv_delta !== void 0) obj.lastCmdNumberRecvDelta = Math.round(message.last_cmd_number_recv_delta);
		if (message.server_tick !== void 0) obj.serverTick = Math.round(message.server_tick);
		if (message.serialized_entities !== void 0) obj.serializedEntities = base64FromBytes$1(message.serialized_entities);
		if (message.alternate_baselines?.length) obj.alternateBaselines = message.alternate_baselines.map((e) => CSVCMsg_PacketEntities_alternate_baseline_t.toJSON(e));
		if (message.has_pvs_vis_bits_deprecated !== void 0) obj.hasPvsVisBitsDeprecated = Math.round(message.has_pvs_vis_bits_deprecated);
		if (message.cmd_recv_status?.length) obj.cmdRecvStatus = message.cmd_recv_status.map((e) => Math.round(e));
		if (message.non_transmitted_entities !== void 0) obj.nonTransmittedEntities = CSVCMsg_PacketEntities_non_transmitted_entities_t.toJSON(message.non_transmitted_entities);
		if (message.cq_starved_command_ticks !== void 0) obj.cqStarvedCommandTicks = Math.round(message.cq_starved_command_ticks);
		if (message.cq_discarded_command_ticks !== void 0) obj.cqDiscardedCommandTicks = Math.round(message.cq_discarded_command_ticks);
		if (message.outofpvs_entity_updates !== void 0) obj.outofpvsEntityUpdates = CSVCMsg_PacketEntities_outofpvs_entity_updates_t.toJSON(message.outofpvs_entity_updates);
		if (message.dev_padding !== void 0) obj.devPadding = base64FromBytes$1(message.dev_padding);
		return obj;
	},
	create(base) {
		return CSVCMsg_PacketEntities.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_PacketEntities();
		message.max_entries = object.max_entries ?? void 0;
		message.updated_entries = object.updated_entries ?? void 0;
		message.legacy_is_delta = object.legacy_is_delta ?? void 0;
		message.update_baseline = object.update_baseline ?? void 0;
		message.baseline = object.baseline ?? void 0;
		message.delta_from = object.delta_from ?? void 0;
		message.entity_data = object.entity_data ?? void 0;
		message.pending_full_frame = object.pending_full_frame ?? void 0;
		message.active_spawngroup_handle = object.active_spawngroup_handle ?? void 0;
		message.max_spawngroup_creationsequence = object.max_spawngroup_creationsequence ?? void 0;
		message.last_cmd_number_executed = object.last_cmd_number_executed ?? void 0;
		message.last_cmd_number_recv_delta = object.last_cmd_number_recv_delta ?? void 0;
		message.server_tick = object.server_tick ?? void 0;
		message.serialized_entities = object.serialized_entities ?? void 0;
		message.alternate_baselines = object.alternate_baselines?.map((e) => CSVCMsg_PacketEntities_alternate_baseline_t.fromPartial(e)) || [];
		message.has_pvs_vis_bits_deprecated = object.has_pvs_vis_bits_deprecated ?? void 0;
		message.cmd_recv_status = object.cmd_recv_status?.map((e) => e) || [];
		message.non_transmitted_entities = object.non_transmitted_entities !== void 0 && object.non_transmitted_entities !== null ? CSVCMsg_PacketEntities_non_transmitted_entities_t.fromPartial(object.non_transmitted_entities) : void 0;
		message.cq_starved_command_ticks = object.cq_starved_command_ticks ?? void 0;
		message.cq_discarded_command_ticks = object.cq_discarded_command_ticks ?? void 0;
		message.outofpvs_entity_updates = object.outofpvs_entity_updates !== void 0 && object.outofpvs_entity_updates !== null ? CSVCMsg_PacketEntities_outofpvs_entity_updates_t.fromPartial(object.outofpvs_entity_updates) : void 0;
		message.dev_padding = object.dev_padding ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_PacketEntities_alternate_baseline_t() {
	return {
		entity_index: void 0,
		baseline_index: void 0
	};
}
const CSVCMsg_PacketEntities_alternate_baseline_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.entity_index !== void 0) writer.uint32(8).int32(message.entity_index);
		if (message.baseline_index !== void 0) writer.uint32(16).int32(message.baseline_index);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_PacketEntities_alternate_baseline_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.entity_index = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.baseline_index = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			entity_index: isSet$3(object.entityIndex) ? globalThis.Number(object.entityIndex) : isSet$3(object.entity_index) ? globalThis.Number(object.entity_index) : void 0,
			baseline_index: isSet$3(object.baselineIndex) ? globalThis.Number(object.baselineIndex) : isSet$3(object.baseline_index) ? globalThis.Number(object.baseline_index) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.entity_index !== void 0) obj.entityIndex = Math.round(message.entity_index);
		if (message.baseline_index !== void 0) obj.baselineIndex = Math.round(message.baseline_index);
		return obj;
	},
	create(base) {
		return CSVCMsg_PacketEntities_alternate_baseline_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_PacketEntities_alternate_baseline_t();
		message.entity_index = object.entity_index ?? void 0;
		message.baseline_index = object.baseline_index ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_PacketEntities_non_transmitted_entities_t() {
	return {
		header_count: void 0,
		data: void 0
	};
}
const CSVCMsg_PacketEntities_non_transmitted_entities_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.header_count !== void 0) writer.uint32(8).int32(message.header_count);
		if (message.data !== void 0) writer.uint32(18).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_PacketEntities_non_transmitted_entities_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.header_count = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			header_count: isSet$3(object.headerCount) ? globalThis.Number(object.headerCount) : isSet$3(object.header_count) ? globalThis.Number(object.header_count) : void 0,
			data: isSet$3(object.data) ? bytesFromBase64$1(object.data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.header_count !== void 0) obj.headerCount = Math.round(message.header_count);
		if (message.data !== void 0) obj.data = base64FromBytes$1(message.data);
		return obj;
	},
	create(base) {
		return CSVCMsg_PacketEntities_non_transmitted_entities_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_PacketEntities_non_transmitted_entities_t();
		message.header_count = object.header_count ?? void 0;
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_PacketEntities_outofpvs_entity_updates_t() {
	return {
		count: void 0,
		data: void 0
	};
}
const CSVCMsg_PacketEntities_outofpvs_entity_updates_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.count !== void 0) writer.uint32(8).int32(message.count);
		if (message.data !== void 0) writer.uint32(18).bytes(message.data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_PacketEntities_outofpvs_entity_updates_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.count = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			count: isSet$3(object.count) ? globalThis.Number(object.count) : void 0,
			data: isSet$3(object.data) ? bytesFromBase64$1(object.data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.count !== void 0) obj.count = Math.round(message.count);
		if (message.data !== void 0) obj.data = base64FromBytes$1(message.data);
		return obj;
	},
	create(base) {
		return CSVCMsg_PacketEntities_outofpvs_entity_updates_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_PacketEntities_outofpvs_entity_updates_t();
		message.count = object.count ?? void 0;
		message.data = object.data ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_CreateStringTable() {
	return {
		name: void 0,
		num_entries: void 0,
		user_data_fixed_size: void 0,
		user_data_size: void 0,
		user_data_size_bits: void 0,
		flags: void 0,
		string_data: void 0,
		uncompressed_size: void 0,
		data_compressed: void 0,
		using_varint_bitcounts: void 0
	};
}
const CSVCMsg_CreateStringTable = {
	encode(message, writer = new BinaryWriter()) {
		if (message.name !== void 0) writer.uint32(10).string(message.name);
		if (message.num_entries !== void 0) writer.uint32(16).int32(message.num_entries);
		if (message.user_data_fixed_size !== void 0) writer.uint32(24).bool(message.user_data_fixed_size);
		if (message.user_data_size !== void 0) writer.uint32(32).int32(message.user_data_size);
		if (message.user_data_size_bits !== void 0) writer.uint32(40).int32(message.user_data_size_bits);
		if (message.flags !== void 0) writer.uint32(48).int32(message.flags);
		if (message.string_data !== void 0) writer.uint32(58).bytes(message.string_data);
		if (message.uncompressed_size !== void 0) writer.uint32(64).int32(message.uncompressed_size);
		if (message.data_compressed !== void 0) writer.uint32(72).bool(message.data_compressed);
		if (message.using_varint_bitcounts !== void 0) writer.uint32(80).bool(message.using_varint_bitcounts);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_CreateStringTable();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.num_entries = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.user_data_fixed_size = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.user_data_size = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.user_data_size_bits = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.flags = reader.int32();
					continue;
				case 7:
					if (tag !== 58) break;
					message.string_data = reader.bytes();
					continue;
				case 8:
					if (tag !== 64) break;
					message.uncompressed_size = reader.int32();
					continue;
				case 9:
					if (tag !== 72) break;
					message.data_compressed = reader.bool();
					continue;
				case 10:
					if (tag !== 80) break;
					message.using_varint_bitcounts = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			name: isSet$3(object.name) ? globalThis.String(object.name) : void 0,
			num_entries: isSet$3(object.numEntries) ? globalThis.Number(object.numEntries) : isSet$3(object.num_entries) ? globalThis.Number(object.num_entries) : void 0,
			user_data_fixed_size: isSet$3(object.userDataFixedSize) ? globalThis.Boolean(object.userDataFixedSize) : isSet$3(object.user_data_fixed_size) ? globalThis.Boolean(object.user_data_fixed_size) : void 0,
			user_data_size: isSet$3(object.userDataSize) ? globalThis.Number(object.userDataSize) : isSet$3(object.user_data_size) ? globalThis.Number(object.user_data_size) : void 0,
			user_data_size_bits: isSet$3(object.userDataSizeBits) ? globalThis.Number(object.userDataSizeBits) : isSet$3(object.user_data_size_bits) ? globalThis.Number(object.user_data_size_bits) : void 0,
			flags: isSet$3(object.flags) ? globalThis.Number(object.flags) : void 0,
			string_data: isSet$3(object.stringData) ? bytesFromBase64$1(object.stringData) : isSet$3(object.string_data) ? bytesFromBase64$1(object.string_data) : void 0,
			uncompressed_size: isSet$3(object.uncompressedSize) ? globalThis.Number(object.uncompressedSize) : isSet$3(object.uncompressed_size) ? globalThis.Number(object.uncompressed_size) : void 0,
			data_compressed: isSet$3(object.dataCompressed) ? globalThis.Boolean(object.dataCompressed) : isSet$3(object.data_compressed) ? globalThis.Boolean(object.data_compressed) : void 0,
			using_varint_bitcounts: isSet$3(object.usingVarintBitcounts) ? globalThis.Boolean(object.usingVarintBitcounts) : isSet$3(object.using_varint_bitcounts) ? globalThis.Boolean(object.using_varint_bitcounts) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.name !== void 0) obj.name = message.name;
		if (message.num_entries !== void 0) obj.numEntries = Math.round(message.num_entries);
		if (message.user_data_fixed_size !== void 0) obj.userDataFixedSize = message.user_data_fixed_size;
		if (message.user_data_size !== void 0) obj.userDataSize = Math.round(message.user_data_size);
		if (message.user_data_size_bits !== void 0) obj.userDataSizeBits = Math.round(message.user_data_size_bits);
		if (message.flags !== void 0) obj.flags = Math.round(message.flags);
		if (message.string_data !== void 0) obj.stringData = base64FromBytes$1(message.string_data);
		if (message.uncompressed_size !== void 0) obj.uncompressedSize = Math.round(message.uncompressed_size);
		if (message.data_compressed !== void 0) obj.dataCompressed = message.data_compressed;
		if (message.using_varint_bitcounts !== void 0) obj.usingVarintBitcounts = message.using_varint_bitcounts;
		return obj;
	},
	create(base) {
		return CSVCMsg_CreateStringTable.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_CreateStringTable();
		message.name = object.name ?? void 0;
		message.num_entries = object.num_entries ?? void 0;
		message.user_data_fixed_size = object.user_data_fixed_size ?? void 0;
		message.user_data_size = object.user_data_size ?? void 0;
		message.user_data_size_bits = object.user_data_size_bits ?? void 0;
		message.flags = object.flags ?? void 0;
		message.string_data = object.string_data ?? void 0;
		message.uncompressed_size = object.uncompressed_size ?? void 0;
		message.data_compressed = object.data_compressed ?? void 0;
		message.using_varint_bitcounts = object.using_varint_bitcounts ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_UpdateStringTable() {
	return {
		table_id: void 0,
		num_changed_entries: void 0,
		string_data: void 0
	};
}
const CSVCMsg_UpdateStringTable = {
	encode(message, writer = new BinaryWriter()) {
		if (message.table_id !== void 0) writer.uint32(8).int32(message.table_id);
		if (message.num_changed_entries !== void 0) writer.uint32(16).int32(message.num_changed_entries);
		if (message.string_data !== void 0) writer.uint32(26).bytes(message.string_data);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_UpdateStringTable();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.table_id = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.num_changed_entries = reader.int32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.string_data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			table_id: isSet$3(object.tableId) ? globalThis.Number(object.tableId) : isSet$3(object.table_id) ? globalThis.Number(object.table_id) : void 0,
			num_changed_entries: isSet$3(object.numChangedEntries) ? globalThis.Number(object.numChangedEntries) : isSet$3(object.num_changed_entries) ? globalThis.Number(object.num_changed_entries) : void 0,
			string_data: isSet$3(object.stringData) ? bytesFromBase64$1(object.stringData) : isSet$3(object.string_data) ? bytesFromBase64$1(object.string_data) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.table_id !== void 0) obj.tableId = Math.round(message.table_id);
		if (message.num_changed_entries !== void 0) obj.numChangedEntries = Math.round(message.num_changed_entries);
		if (message.string_data !== void 0) obj.stringData = base64FromBytes$1(message.string_data);
		return obj;
	},
	create(base) {
		return CSVCMsg_UpdateStringTable.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_UpdateStringTable();
		message.table_id = object.table_id ?? void 0;
		message.num_changed_entries = object.num_changed_entries ?? void 0;
		message.string_data = object.string_data ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_VoiceData() {
	return {
		audio: void 0,
		client: void 0,
		proximity: void 0,
		xuid: void 0,
		audible_mask: void 0,
		tick: void 0,
		passthrough: void 0
	};
}
const CSVCMsg_VoiceData = {
	encode(message, writer = new BinaryWriter()) {
		if (message.audio !== void 0) CMsgVoiceAudio.encode(message.audio, writer.uint32(10).fork()).join();
		if (message.client !== void 0) writer.uint32(16).int32(message.client);
		if (message.proximity !== void 0) writer.uint32(24).bool(message.proximity);
		if (message.xuid !== void 0) writer.uint32(33).fixed64(message.xuid);
		if (message.audible_mask !== void 0) writer.uint32(40).int32(message.audible_mask);
		if (message.tick !== void 0) writer.uint32(48).uint32(message.tick);
		if (message.passthrough !== void 0) writer.uint32(56).int32(message.passthrough);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_VoiceData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.audio = CMsgVoiceAudio.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) break;
					message.client = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.proximity = reader.bool();
					continue;
				case 4:
					if (tag !== 33) break;
					message.xuid = reader.fixed64().toString();
					continue;
				case 5:
					if (tag !== 40) break;
					message.audible_mask = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.tick = reader.uint32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.passthrough = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			audio: isSet$3(object.audio) ? CMsgVoiceAudio.fromJSON(object.audio) : void 0,
			client: isSet$3(object.client) ? globalThis.Number(object.client) : void 0,
			proximity: isSet$3(object.proximity) ? globalThis.Boolean(object.proximity) : void 0,
			xuid: isSet$3(object.xuid) ? globalThis.String(object.xuid) : void 0,
			audible_mask: isSet$3(object.audibleMask) ? globalThis.Number(object.audibleMask) : isSet$3(object.audible_mask) ? globalThis.Number(object.audible_mask) : void 0,
			tick: isSet$3(object.tick) ? globalThis.Number(object.tick) : void 0,
			passthrough: isSet$3(object.passthrough) ? globalThis.Number(object.passthrough) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.audio !== void 0) obj.audio = CMsgVoiceAudio.toJSON(message.audio);
		if (message.client !== void 0) obj.client = Math.round(message.client);
		if (message.proximity !== void 0) obj.proximity = message.proximity;
		if (message.xuid !== void 0) obj.xuid = message.xuid;
		if (message.audible_mask !== void 0) obj.audibleMask = Math.round(message.audible_mask);
		if (message.tick !== void 0) obj.tick = Math.round(message.tick);
		if (message.passthrough !== void 0) obj.passthrough = Math.round(message.passthrough);
		return obj;
	},
	create(base) {
		return CSVCMsg_VoiceData.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_VoiceData();
		message.audio = object.audio !== void 0 && object.audio !== null ? CMsgVoiceAudio.fromPartial(object.audio) : void 0;
		message.client = object.client ?? void 0;
		message.proximity = object.proximity ?? void 0;
		message.xuid = object.xuid ?? void 0;
		message.audible_mask = object.audible_mask ?? void 0;
		message.tick = object.tick ?? void 0;
		message.passthrough = object.passthrough ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_ClearAllStringTables() {
	return {
		mapname: void 0,
		create_tables_skipped: void 0
	};
}
const CSVCMsg_ClearAllStringTables = {
	encode(message, writer = new BinaryWriter()) {
		if (message.mapname !== void 0) writer.uint32(10).string(message.mapname);
		if (message.create_tables_skipped !== void 0) writer.uint32(24).bool(message.create_tables_skipped);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_ClearAllStringTables();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.mapname = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.create_tables_skipped = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			mapname: isSet$3(object.mapname) ? globalThis.String(object.mapname) : void 0,
			create_tables_skipped: isSet$3(object.createTablesSkipped) ? globalThis.Boolean(object.createTablesSkipped) : isSet$3(object.create_tables_skipped) ? globalThis.Boolean(object.create_tables_skipped) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.mapname !== void 0) obj.mapname = message.mapname;
		if (message.create_tables_skipped !== void 0) obj.createTablesSkipped = message.create_tables_skipped;
		return obj;
	},
	create(base) {
		return CSVCMsg_ClearAllStringTables.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_ClearAllStringTables();
		message.mapname = object.mapname ?? void 0;
		message.create_tables_skipped = object.create_tables_skipped ?? void 0;
		return message;
	}
};
function createBaseProtoFlattenedSerializerField_t() {
	return {
		var_type_sym: void 0,
		var_name_sym: void 0,
		bit_count: void 0,
		low_value: void 0,
		high_value: void 0,
		encode_flags: void 0,
		field_serializer_name_sym: void 0,
		field_serializer_version: void 0,
		send_node_sym: void 0,
		var_encoder_sym: void 0,
		polymorphic_types: [],
		var_serializer_sym: void 0
	};
}
const ProtoFlattenedSerializerField_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.var_type_sym !== void 0) writer.uint32(8).int32(message.var_type_sym);
		if (message.var_name_sym !== void 0) writer.uint32(16).int32(message.var_name_sym);
		if (message.bit_count !== void 0) writer.uint32(24).int32(message.bit_count);
		if (message.low_value !== void 0) writer.uint32(37).float(message.low_value);
		if (message.high_value !== void 0) writer.uint32(45).float(message.high_value);
		if (message.encode_flags !== void 0) writer.uint32(48).int32(message.encode_flags);
		if (message.field_serializer_name_sym !== void 0) writer.uint32(56).int32(message.field_serializer_name_sym);
		if (message.field_serializer_version !== void 0) writer.uint32(64).int32(message.field_serializer_version);
		if (message.send_node_sym !== void 0) writer.uint32(72).int32(message.send_node_sym);
		if (message.var_encoder_sym !== void 0) writer.uint32(80).int32(message.var_encoder_sym);
		for (const v of message.polymorphic_types) ProtoFlattenedSerializerField_t_polymorphic_field_t.encode(v, writer.uint32(90).fork()).join();
		if (message.var_serializer_sym !== void 0) writer.uint32(96).int32(message.var_serializer_sym);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseProtoFlattenedSerializerField_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.var_type_sym = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.var_name_sym = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.bit_count = reader.int32();
					continue;
				case 4:
					if (tag !== 37) break;
					message.low_value = reader.float();
					continue;
				case 5:
					if (tag !== 45) break;
					message.high_value = reader.float();
					continue;
				case 6:
					if (tag !== 48) break;
					message.encode_flags = reader.int32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.field_serializer_name_sym = reader.int32();
					continue;
				case 8:
					if (tag !== 64) break;
					message.field_serializer_version = reader.int32();
					continue;
				case 9:
					if (tag !== 72) break;
					message.send_node_sym = reader.int32();
					continue;
				case 10:
					if (tag !== 80) break;
					message.var_encoder_sym = reader.int32();
					continue;
				case 11:
					if (tag !== 90) break;
					message.polymorphic_types.push(ProtoFlattenedSerializerField_t_polymorphic_field_t.decode(reader, reader.uint32()));
					continue;
				case 12:
					if (tag !== 96) break;
					message.var_serializer_sym = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			var_type_sym: isSet$3(object.varTypeSym) ? globalThis.Number(object.varTypeSym) : isSet$3(object.var_type_sym) ? globalThis.Number(object.var_type_sym) : void 0,
			var_name_sym: isSet$3(object.varNameSym) ? globalThis.Number(object.varNameSym) : isSet$3(object.var_name_sym) ? globalThis.Number(object.var_name_sym) : void 0,
			bit_count: isSet$3(object.bitCount) ? globalThis.Number(object.bitCount) : isSet$3(object.bit_count) ? globalThis.Number(object.bit_count) : void 0,
			low_value: isSet$3(object.lowValue) ? globalThis.Number(object.lowValue) : isSet$3(object.low_value) ? globalThis.Number(object.low_value) : void 0,
			high_value: isSet$3(object.highValue) ? globalThis.Number(object.highValue) : isSet$3(object.high_value) ? globalThis.Number(object.high_value) : void 0,
			encode_flags: isSet$3(object.encodeFlags) ? globalThis.Number(object.encodeFlags) : isSet$3(object.encode_flags) ? globalThis.Number(object.encode_flags) : void 0,
			field_serializer_name_sym: isSet$3(object.fieldSerializerNameSym) ? globalThis.Number(object.fieldSerializerNameSym) : isSet$3(object.field_serializer_name_sym) ? globalThis.Number(object.field_serializer_name_sym) : void 0,
			field_serializer_version: isSet$3(object.fieldSerializerVersion) ? globalThis.Number(object.fieldSerializerVersion) : isSet$3(object.field_serializer_version) ? globalThis.Number(object.field_serializer_version) : void 0,
			send_node_sym: isSet$3(object.sendNodeSym) ? globalThis.Number(object.sendNodeSym) : isSet$3(object.send_node_sym) ? globalThis.Number(object.send_node_sym) : void 0,
			var_encoder_sym: isSet$3(object.varEncoderSym) ? globalThis.Number(object.varEncoderSym) : isSet$3(object.var_encoder_sym) ? globalThis.Number(object.var_encoder_sym) : void 0,
			polymorphic_types: globalThis.Array.isArray(object?.polymorphicTypes) ? object.polymorphicTypes.map((e) => ProtoFlattenedSerializerField_t_polymorphic_field_t.fromJSON(e)) : globalThis.Array.isArray(object?.polymorphic_types) ? object.polymorphic_types.map((e) => ProtoFlattenedSerializerField_t_polymorphic_field_t.fromJSON(e)) : [],
			var_serializer_sym: isSet$3(object.varSerializerSym) ? globalThis.Number(object.varSerializerSym) : isSet$3(object.var_serializer_sym) ? globalThis.Number(object.var_serializer_sym) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.var_type_sym !== void 0) obj.varTypeSym = Math.round(message.var_type_sym);
		if (message.var_name_sym !== void 0) obj.varNameSym = Math.round(message.var_name_sym);
		if (message.bit_count !== void 0) obj.bitCount = Math.round(message.bit_count);
		if (message.low_value !== void 0) obj.lowValue = message.low_value;
		if (message.high_value !== void 0) obj.highValue = message.high_value;
		if (message.encode_flags !== void 0) obj.encodeFlags = Math.round(message.encode_flags);
		if (message.field_serializer_name_sym !== void 0) obj.fieldSerializerNameSym = Math.round(message.field_serializer_name_sym);
		if (message.field_serializer_version !== void 0) obj.fieldSerializerVersion = Math.round(message.field_serializer_version);
		if (message.send_node_sym !== void 0) obj.sendNodeSym = Math.round(message.send_node_sym);
		if (message.var_encoder_sym !== void 0) obj.varEncoderSym = Math.round(message.var_encoder_sym);
		if (message.polymorphic_types?.length) obj.polymorphicTypes = message.polymorphic_types.map((e) => ProtoFlattenedSerializerField_t_polymorphic_field_t.toJSON(e));
		if (message.var_serializer_sym !== void 0) obj.varSerializerSym = Math.round(message.var_serializer_sym);
		return obj;
	},
	create(base) {
		return ProtoFlattenedSerializerField_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseProtoFlattenedSerializerField_t();
		message.var_type_sym = object.var_type_sym ?? void 0;
		message.var_name_sym = object.var_name_sym ?? void 0;
		message.bit_count = object.bit_count ?? void 0;
		message.low_value = object.low_value ?? void 0;
		message.high_value = object.high_value ?? void 0;
		message.encode_flags = object.encode_flags ?? void 0;
		message.field_serializer_name_sym = object.field_serializer_name_sym ?? void 0;
		message.field_serializer_version = object.field_serializer_version ?? void 0;
		message.send_node_sym = object.send_node_sym ?? void 0;
		message.var_encoder_sym = object.var_encoder_sym ?? void 0;
		message.polymorphic_types = object.polymorphic_types?.map((e) => ProtoFlattenedSerializerField_t_polymorphic_field_t.fromPartial(e)) || [];
		message.var_serializer_sym = object.var_serializer_sym ?? void 0;
		return message;
	}
};
function createBaseProtoFlattenedSerializerField_t_polymorphic_field_t() {
	return {
		polymorphic_field_serializer_name_sym: void 0,
		polymorphic_field_serializer_version: void 0
	};
}
const ProtoFlattenedSerializerField_t_polymorphic_field_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.polymorphic_field_serializer_name_sym !== void 0) writer.uint32(8).int32(message.polymorphic_field_serializer_name_sym);
		if (message.polymorphic_field_serializer_version !== void 0) writer.uint32(16).int32(message.polymorphic_field_serializer_version);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseProtoFlattenedSerializerField_t_polymorphic_field_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.polymorphic_field_serializer_name_sym = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.polymorphic_field_serializer_version = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			polymorphic_field_serializer_name_sym: isSet$3(object.polymorphicFieldSerializerNameSym) ? globalThis.Number(object.polymorphicFieldSerializerNameSym) : isSet$3(object.polymorphic_field_serializer_name_sym) ? globalThis.Number(object.polymorphic_field_serializer_name_sym) : void 0,
			polymorphic_field_serializer_version: isSet$3(object.polymorphicFieldSerializerVersion) ? globalThis.Number(object.polymorphicFieldSerializerVersion) : isSet$3(object.polymorphic_field_serializer_version) ? globalThis.Number(object.polymorphic_field_serializer_version) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.polymorphic_field_serializer_name_sym !== void 0) obj.polymorphicFieldSerializerNameSym = Math.round(message.polymorphic_field_serializer_name_sym);
		if (message.polymorphic_field_serializer_version !== void 0) obj.polymorphicFieldSerializerVersion = Math.round(message.polymorphic_field_serializer_version);
		return obj;
	},
	create(base) {
		return ProtoFlattenedSerializerField_t_polymorphic_field_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseProtoFlattenedSerializerField_t_polymorphic_field_t();
		message.polymorphic_field_serializer_name_sym = object.polymorphic_field_serializer_name_sym ?? void 0;
		message.polymorphic_field_serializer_version = object.polymorphic_field_serializer_version ?? void 0;
		return message;
	}
};
function createBaseProtoFlattenedSerializer_t() {
	return {
		serializer_name_sym: void 0,
		serializer_version: void 0,
		fields_index: []
	};
}
const ProtoFlattenedSerializer_t = {
	encode(message, writer = new BinaryWriter()) {
		if (message.serializer_name_sym !== void 0) writer.uint32(8).int32(message.serializer_name_sym);
		if (message.serializer_version !== void 0) writer.uint32(16).int32(message.serializer_version);
		for (const v of message.fields_index) writer.uint32(24).int32(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseProtoFlattenedSerializer_t();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.serializer_name_sym = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.serializer_version = reader.int32();
					continue;
				case 3:
					if (tag === 24) {
						message.fields_index.push(reader.int32());
						continue;
					}
					if (tag === 26) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.fields_index.push(reader.int32());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			serializer_name_sym: isSet$3(object.serializerNameSym) ? globalThis.Number(object.serializerNameSym) : isSet$3(object.serializer_name_sym) ? globalThis.Number(object.serializer_name_sym) : void 0,
			serializer_version: isSet$3(object.serializerVersion) ? globalThis.Number(object.serializerVersion) : isSet$3(object.serializer_version) ? globalThis.Number(object.serializer_version) : void 0,
			fields_index: globalThis.Array.isArray(object?.fieldsIndex) ? object.fieldsIndex.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.fields_index) ? object.fields_index.map((e) => globalThis.Number(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.serializer_name_sym !== void 0) obj.serializerNameSym = Math.round(message.serializer_name_sym);
		if (message.serializer_version !== void 0) obj.serializerVersion = Math.round(message.serializer_version);
		if (message.fields_index?.length) obj.fieldsIndex = message.fields_index.map((e) => Math.round(e));
		return obj;
	},
	create(base) {
		return ProtoFlattenedSerializer_t.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseProtoFlattenedSerializer_t();
		message.serializer_name_sym = object.serializer_name_sym ?? void 0;
		message.serializer_version = object.serializer_version ?? void 0;
		message.fields_index = object.fields_index?.map((e) => e) || [];
		return message;
	}
};
function createBaseCSVCMsg_FlattenedSerializer() {
	return {
		serializers: [],
		symbols: [],
		fields: []
	};
}
const CSVCMsg_FlattenedSerializer = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.serializers) ProtoFlattenedSerializer_t.encode(v, writer.uint32(10).fork()).join();
		for (const v of message.symbols) writer.uint32(18).string(v);
		for (const v of message.fields) ProtoFlattenedSerializerField_t.encode(v, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_FlattenedSerializer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.serializers.push(ProtoFlattenedSerializer_t.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) break;
					message.symbols.push(reader.string());
					continue;
				case 3:
					if (tag !== 26) break;
					message.fields.push(ProtoFlattenedSerializerField_t.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			serializers: globalThis.Array.isArray(object?.serializers) ? object.serializers.map((e) => ProtoFlattenedSerializer_t.fromJSON(e)) : [],
			symbols: globalThis.Array.isArray(object?.symbols) ? object.symbols.map((e) => globalThis.String(e)) : [],
			fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e) => ProtoFlattenedSerializerField_t.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.serializers?.length) obj.serializers = message.serializers.map((e) => ProtoFlattenedSerializer_t.toJSON(e));
		if (message.symbols?.length) obj.symbols = message.symbols;
		if (message.fields?.length) obj.fields = message.fields.map((e) => ProtoFlattenedSerializerField_t.toJSON(e));
		return obj;
	},
	create(base) {
		return CSVCMsg_FlattenedSerializer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_FlattenedSerializer();
		message.serializers = object.serializers?.map((e) => ProtoFlattenedSerializer_t.fromPartial(e)) || [];
		message.symbols = object.symbols?.map((e) => e) || [];
		message.fields = object.fields?.map((e) => ProtoFlattenedSerializerField_t.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCMsgServerUserCmd() {
	return {
		data: void 0,
		cmd_number: void 0,
		player_slot: void 0,
		server_tick_executed: void 0,
		client_tick: void 0
	};
}
const CMsgServerUserCmd = {
	encode(message, writer = new BinaryWriter()) {
		if (message.data !== void 0) writer.uint32(10).bytes(message.data);
		if (message.cmd_number !== void 0) writer.uint32(16).int32(message.cmd_number);
		if (message.player_slot !== void 0) writer.uint32(24).int32(message.player_slot);
		if (message.server_tick_executed !== void 0) writer.uint32(32).int32(message.server_tick_executed);
		if (message.client_tick !== void 0) writer.uint32(40).int32(message.client_tick);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgServerUserCmd();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.data = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.cmd_number = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.player_slot = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.server_tick_executed = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.client_tick = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			data: isSet$3(object.data) ? bytesFromBase64$1(object.data) : void 0,
			cmd_number: isSet$3(object.cmdNumber) ? globalThis.Number(object.cmdNumber) : isSet$3(object.cmd_number) ? globalThis.Number(object.cmd_number) : void 0,
			player_slot: isSet$3(object.playerSlot) ? globalThis.Number(object.playerSlot) : isSet$3(object.player_slot) ? globalThis.Number(object.player_slot) : void 0,
			server_tick_executed: isSet$3(object.serverTickExecuted) ? globalThis.Number(object.serverTickExecuted) : isSet$3(object.server_tick_executed) ? globalThis.Number(object.server_tick_executed) : void 0,
			client_tick: isSet$3(object.clientTick) ? globalThis.Number(object.clientTick) : isSet$3(object.client_tick) ? globalThis.Number(object.client_tick) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.data !== void 0) obj.data = base64FromBytes$1(message.data);
		if (message.cmd_number !== void 0) obj.cmdNumber = Math.round(message.cmd_number);
		if (message.player_slot !== void 0) obj.playerSlot = Math.round(message.player_slot);
		if (message.server_tick_executed !== void 0) obj.serverTickExecuted = Math.round(message.server_tick_executed);
		if (message.client_tick !== void 0) obj.clientTick = Math.round(message.client_tick);
		return obj;
	},
	create(base) {
		return CMsgServerUserCmd.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgServerUserCmd();
		message.data = object.data ?? void 0;
		message.cmd_number = object.cmd_number ?? void 0;
		message.player_slot = object.player_slot ?? void 0;
		message.server_tick_executed = object.server_tick_executed ?? void 0;
		message.client_tick = object.client_tick ?? void 0;
		return message;
	}
};
function createBaseCSVCMsg_UserCommands() {
	return { commands: [] };
}
const CSVCMsg_UserCommands = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.commands) CMsgServerUserCmd.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCSVCMsg_UserCommands();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.commands.push(CMsgServerUserCmd.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { commands: globalThis.Array.isArray(object?.commands) ? object.commands.map((e) => CMsgServerUserCmd.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.commands?.length) obj.commands = message.commands.map((e) => CMsgServerUserCmd.toJSON(e));
		return obj;
	},
	create(base) {
		return CSVCMsg_UserCommands.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCSVCMsg_UserCommands();
		message.commands = object.commands?.map((e) => CMsgServerUserCmd.fromPartial(e)) || [];
		return message;
	}
};
function bytesFromBase64$1(b64) {
	if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
		return arr;
	}
}
function base64FromBytes$1(arr) {
	if (globalThis.Buffer) return globalThis.Buffer.from(arr).toString("base64");
	else {
		const bin = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}
function isSet$3(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/parser/descriptors/gameevents.ts
const gameMessages = {
	[EBaseGameEvents.GE_Source1LegacyGameEventList]: CMsgSource1LegacyGameEventList,
	[EBaseGameEvents.GE_Source1LegacyGameEvent]: CMsgSource1LegacyGameEvent
};
//#endregion
//#region src/ts-proto/cstrike15_gcmessages.ts
function createBaseTournamentPlayer() {
	return {
		account_id: void 0,
		player_nick: void 0,
		player_name: void 0,
		player_dob: void 0,
		player_flag: void 0,
		player_location: void 0,
		player_desc: void 0
	};
}
const TournamentPlayer = {
	encode(message, writer = new BinaryWriter()) {
		if (message.account_id !== void 0) writer.uint32(8).uint32(message.account_id);
		if (message.player_nick !== void 0) writer.uint32(18).string(message.player_nick);
		if (message.player_name !== void 0) writer.uint32(26).string(message.player_name);
		if (message.player_dob !== void 0) writer.uint32(32).uint32(message.player_dob);
		if (message.player_flag !== void 0) writer.uint32(42).string(message.player_flag);
		if (message.player_location !== void 0) writer.uint32(50).string(message.player_location);
		if (message.player_desc !== void 0) writer.uint32(58).string(message.player_desc);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTournamentPlayer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.account_id = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.player_nick = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.player_name = reader.string();
					continue;
				case 4:
					if (tag !== 32) break;
					message.player_dob = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) break;
					message.player_flag = reader.string();
					continue;
				case 6:
					if (tag !== 50) break;
					message.player_location = reader.string();
					continue;
				case 7:
					if (tag !== 58) break;
					message.player_desc = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			account_id: isSet$2(object.accountId) ? globalThis.Number(object.accountId) : isSet$2(object.account_id) ? globalThis.Number(object.account_id) : void 0,
			player_nick: isSet$2(object.playerNick) ? globalThis.String(object.playerNick) : isSet$2(object.player_nick) ? globalThis.String(object.player_nick) : void 0,
			player_name: isSet$2(object.playerName) ? globalThis.String(object.playerName) : isSet$2(object.player_name) ? globalThis.String(object.player_name) : void 0,
			player_dob: isSet$2(object.playerDob) ? globalThis.Number(object.playerDob) : isSet$2(object.player_dob) ? globalThis.Number(object.player_dob) : void 0,
			player_flag: isSet$2(object.playerFlag) ? globalThis.String(object.playerFlag) : isSet$2(object.player_flag) ? globalThis.String(object.player_flag) : void 0,
			player_location: isSet$2(object.playerLocation) ? globalThis.String(object.playerLocation) : isSet$2(object.player_location) ? globalThis.String(object.player_location) : void 0,
			player_desc: isSet$2(object.playerDesc) ? globalThis.String(object.playerDesc) : isSet$2(object.player_desc) ? globalThis.String(object.player_desc) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.account_id !== void 0) obj.accountId = Math.round(message.account_id);
		if (message.player_nick !== void 0) obj.playerNick = message.player_nick;
		if (message.player_name !== void 0) obj.playerName = message.player_name;
		if (message.player_dob !== void 0) obj.playerDob = Math.round(message.player_dob);
		if (message.player_flag !== void 0) obj.playerFlag = message.player_flag;
		if (message.player_location !== void 0) obj.playerLocation = message.player_location;
		if (message.player_desc !== void 0) obj.playerDesc = message.player_desc;
		return obj;
	},
	create(base) {
		return TournamentPlayer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTournamentPlayer();
		message.account_id = object.account_id ?? void 0;
		message.player_nick = object.player_nick ?? void 0;
		message.player_name = object.player_name ?? void 0;
		message.player_dob = object.player_dob ?? void 0;
		message.player_flag = object.player_flag ?? void 0;
		message.player_location = object.player_location ?? void 0;
		message.player_desc = object.player_desc ?? void 0;
		return message;
	}
};
function createBaseTournamentTeam() {
	return {
		team_id: void 0,
		team_tag: void 0,
		team_flag: void 0,
		team_name: void 0,
		players: []
	};
}
const TournamentTeam = {
	encode(message, writer = new BinaryWriter()) {
		if (message.team_id !== void 0) writer.uint32(8).int32(message.team_id);
		if (message.team_tag !== void 0) writer.uint32(18).string(message.team_tag);
		if (message.team_flag !== void 0) writer.uint32(26).string(message.team_flag);
		if (message.team_name !== void 0) writer.uint32(34).string(message.team_name);
		for (const v of message.players) TournamentPlayer.encode(v, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTournamentTeam();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.team_id = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.team_tag = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.team_flag = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.team_name = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.players.push(TournamentPlayer.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			team_id: isSet$2(object.teamId) ? globalThis.Number(object.teamId) : isSet$2(object.team_id) ? globalThis.Number(object.team_id) : void 0,
			team_tag: isSet$2(object.teamTag) ? globalThis.String(object.teamTag) : isSet$2(object.team_tag) ? globalThis.String(object.team_tag) : void 0,
			team_flag: isSet$2(object.teamFlag) ? globalThis.String(object.teamFlag) : isSet$2(object.team_flag) ? globalThis.String(object.team_flag) : void 0,
			team_name: isSet$2(object.teamName) ? globalThis.String(object.teamName) : isSet$2(object.team_name) ? globalThis.String(object.team_name) : void 0,
			players: globalThis.Array.isArray(object?.players) ? object.players.map((e) => TournamentPlayer.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.team_id !== void 0) obj.teamId = Math.round(message.team_id);
		if (message.team_tag !== void 0) obj.teamTag = message.team_tag;
		if (message.team_flag !== void 0) obj.teamFlag = message.team_flag;
		if (message.team_name !== void 0) obj.teamName = message.team_name;
		if (message.players?.length) obj.players = message.players.map((e) => TournamentPlayer.toJSON(e));
		return obj;
	},
	create(base) {
		return TournamentTeam.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTournamentTeam();
		message.team_id = object.team_id ?? void 0;
		message.team_tag = object.team_tag ?? void 0;
		message.team_flag = object.team_flag ?? void 0;
		message.team_name = object.team_name ?? void 0;
		message.players = object.players?.map((e) => TournamentPlayer.fromPartial(e)) || [];
		return message;
	}
};
function createBaseTournamentEvent() {
	return {
		event_id: void 0,
		event_tag: void 0,
		event_name: void 0,
		event_time_start: void 0,
		event_time_end: void 0,
		event_public: void 0,
		event_stage_id: void 0,
		event_stage_name: void 0,
		active_section_id: void 0
	};
}
const TournamentEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.event_id !== void 0) writer.uint32(8).int32(message.event_id);
		if (message.event_tag !== void 0) writer.uint32(18).string(message.event_tag);
		if (message.event_name !== void 0) writer.uint32(26).string(message.event_name);
		if (message.event_time_start !== void 0) writer.uint32(32).uint32(message.event_time_start);
		if (message.event_time_end !== void 0) writer.uint32(40).uint32(message.event_time_end);
		if (message.event_public !== void 0) writer.uint32(48).int32(message.event_public);
		if (message.event_stage_id !== void 0) writer.uint32(56).int32(message.event_stage_id);
		if (message.event_stage_name !== void 0) writer.uint32(66).string(message.event_stage_name);
		if (message.active_section_id !== void 0) writer.uint32(72).uint32(message.active_section_id);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTournamentEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.event_id = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.event_tag = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.event_name = reader.string();
					continue;
				case 4:
					if (tag !== 32) break;
					message.event_time_start = reader.uint32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.event_time_end = reader.uint32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.event_public = reader.int32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.event_stage_id = reader.int32();
					continue;
				case 8:
					if (tag !== 66) break;
					message.event_stage_name = reader.string();
					continue;
				case 9:
					if (tag !== 72) break;
					message.active_section_id = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			event_id: isSet$2(object.eventId) ? globalThis.Number(object.eventId) : isSet$2(object.event_id) ? globalThis.Number(object.event_id) : void 0,
			event_tag: isSet$2(object.eventTag) ? globalThis.String(object.eventTag) : isSet$2(object.event_tag) ? globalThis.String(object.event_tag) : void 0,
			event_name: isSet$2(object.eventName) ? globalThis.String(object.eventName) : isSet$2(object.event_name) ? globalThis.String(object.event_name) : void 0,
			event_time_start: isSet$2(object.eventTimeStart) ? globalThis.Number(object.eventTimeStart) : isSet$2(object.event_time_start) ? globalThis.Number(object.event_time_start) : void 0,
			event_time_end: isSet$2(object.eventTimeEnd) ? globalThis.Number(object.eventTimeEnd) : isSet$2(object.event_time_end) ? globalThis.Number(object.event_time_end) : void 0,
			event_public: isSet$2(object.eventPublic) ? globalThis.Number(object.eventPublic) : isSet$2(object.event_public) ? globalThis.Number(object.event_public) : void 0,
			event_stage_id: isSet$2(object.eventStageId) ? globalThis.Number(object.eventStageId) : isSet$2(object.event_stage_id) ? globalThis.Number(object.event_stage_id) : void 0,
			event_stage_name: isSet$2(object.eventStageName) ? globalThis.String(object.eventStageName) : isSet$2(object.event_stage_name) ? globalThis.String(object.event_stage_name) : void 0,
			active_section_id: isSet$2(object.activeSectionId) ? globalThis.Number(object.activeSectionId) : isSet$2(object.active_section_id) ? globalThis.Number(object.active_section_id) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.event_id !== void 0) obj.eventId = Math.round(message.event_id);
		if (message.event_tag !== void 0) obj.eventTag = message.event_tag;
		if (message.event_name !== void 0) obj.eventName = message.event_name;
		if (message.event_time_start !== void 0) obj.eventTimeStart = Math.round(message.event_time_start);
		if (message.event_time_end !== void 0) obj.eventTimeEnd = Math.round(message.event_time_end);
		if (message.event_public !== void 0) obj.eventPublic = Math.round(message.event_public);
		if (message.event_stage_id !== void 0) obj.eventStageId = Math.round(message.event_stage_id);
		if (message.event_stage_name !== void 0) obj.eventStageName = message.event_stage_name;
		if (message.active_section_id !== void 0) obj.activeSectionId = Math.round(message.active_section_id);
		return obj;
	},
	create(base) {
		return TournamentEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTournamentEvent();
		message.event_id = object.event_id ?? void 0;
		message.event_tag = object.event_tag ?? void 0;
		message.event_name = object.event_name ?? void 0;
		message.event_time_start = object.event_time_start ?? void 0;
		message.event_time_end = object.event_time_end ?? void 0;
		message.event_public = object.event_public ?? void 0;
		message.event_stage_id = object.event_stage_id ?? void 0;
		message.event_stage_name = object.event_stage_name ?? void 0;
		message.active_section_id = object.active_section_id ?? void 0;
		return message;
	}
};
function createBaseOperationalVarValue() {
	return {
		name: void 0,
		ivalue: void 0,
		fvalue: void 0,
		svalue: void 0
	};
}
const OperationalVarValue = {
	encode(message, writer = new BinaryWriter()) {
		if (message.name !== void 0) writer.uint32(10).string(message.name);
		if (message.ivalue !== void 0) writer.uint32(16).int32(message.ivalue);
		if (message.fvalue !== void 0) writer.uint32(29).float(message.fvalue);
		if (message.svalue !== void 0) writer.uint32(34).bytes(message.svalue);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseOperationalVarValue();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.ivalue = reader.int32();
					continue;
				case 3:
					if (tag !== 29) break;
					message.fvalue = reader.float();
					continue;
				case 4:
					if (tag !== 34) break;
					message.svalue = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			name: isSet$2(object.name) ? globalThis.String(object.name) : void 0,
			ivalue: isSet$2(object.ivalue) ? globalThis.Number(object.ivalue) : void 0,
			fvalue: isSet$2(object.fvalue) ? globalThis.Number(object.fvalue) : void 0,
			svalue: isSet$2(object.svalue) ? bytesFromBase64(object.svalue) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.name !== void 0) obj.name = message.name;
		if (message.ivalue !== void 0) obj.ivalue = Math.round(message.ivalue);
		if (message.fvalue !== void 0) obj.fvalue = message.fvalue;
		if (message.svalue !== void 0) obj.svalue = base64FromBytes(message.svalue);
		return obj;
	},
	create(base) {
		return OperationalVarValue.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseOperationalVarValue();
		message.name = object.name ?? void 0;
		message.ivalue = object.ivalue ?? void 0;
		message.fvalue = object.fvalue ?? void 0;
		message.svalue = object.svalue ?? void 0;
		return message;
	}
};
function createBasePlayerRankingInfo() {
	return {
		account_id: void 0,
		rank_id: void 0,
		wins: void 0,
		rank_change: void 0,
		rank_type_id: void 0,
		tv_control: void 0,
		rank_window_stats: void 0,
		leaderboard_name: void 0,
		rank_if_win: void 0,
		rank_if_lose: void 0,
		rank_if_tie: void 0,
		per_map_rank: [],
		leaderboard_name_status: void 0,
		highest_rank: void 0,
		rank_expiry: void 0
	};
}
const PlayerRankingInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.account_id !== void 0) writer.uint32(8).uint32(message.account_id);
		if (message.rank_id !== void 0) writer.uint32(16).uint32(message.rank_id);
		if (message.wins !== void 0) writer.uint32(24).uint32(message.wins);
		if (message.rank_change !== void 0) writer.uint32(37).float(message.rank_change);
		if (message.rank_type_id !== void 0) writer.uint32(48).uint32(message.rank_type_id);
		if (message.tv_control !== void 0) writer.uint32(56).uint32(message.tv_control);
		if (message.rank_window_stats !== void 0) writer.uint32(64).uint64(message.rank_window_stats);
		if (message.leaderboard_name !== void 0) writer.uint32(74).string(message.leaderboard_name);
		if (message.rank_if_win !== void 0) writer.uint32(80).uint32(message.rank_if_win);
		if (message.rank_if_lose !== void 0) writer.uint32(88).uint32(message.rank_if_lose);
		if (message.rank_if_tie !== void 0) writer.uint32(96).uint32(message.rank_if_tie);
		for (const v of message.per_map_rank) PlayerRankingInfo_PerMapRank.encode(v, writer.uint32(106).fork()).join();
		if (message.leaderboard_name_status !== void 0) writer.uint32(112).uint32(message.leaderboard_name_status);
		if (message.highest_rank !== void 0) writer.uint32(120).uint32(message.highest_rank);
		if (message.rank_expiry !== void 0) writer.uint32(128).uint32(message.rank_expiry);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePlayerRankingInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.account_id = reader.uint32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.rank_id = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.wins = reader.uint32();
					continue;
				case 4:
					if (tag !== 37) break;
					message.rank_change = reader.float();
					continue;
				case 6:
					if (tag !== 48) break;
					message.rank_type_id = reader.uint32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.tv_control = reader.uint32();
					continue;
				case 8:
					if (tag !== 64) break;
					message.rank_window_stats = reader.uint64().toString();
					continue;
				case 9:
					if (tag !== 74) break;
					message.leaderboard_name = reader.string();
					continue;
				case 10:
					if (tag !== 80) break;
					message.rank_if_win = reader.uint32();
					continue;
				case 11:
					if (tag !== 88) break;
					message.rank_if_lose = reader.uint32();
					continue;
				case 12:
					if (tag !== 96) break;
					message.rank_if_tie = reader.uint32();
					continue;
				case 13:
					if (tag !== 106) break;
					message.per_map_rank.push(PlayerRankingInfo_PerMapRank.decode(reader, reader.uint32()));
					continue;
				case 14:
					if (tag !== 112) break;
					message.leaderboard_name_status = reader.uint32();
					continue;
				case 15:
					if (tag !== 120) break;
					message.highest_rank = reader.uint32();
					continue;
				case 16:
					if (tag !== 128) break;
					message.rank_expiry = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			account_id: isSet$2(object.accountId) ? globalThis.Number(object.accountId) : isSet$2(object.account_id) ? globalThis.Number(object.account_id) : void 0,
			rank_id: isSet$2(object.rankId) ? globalThis.Number(object.rankId) : isSet$2(object.rank_id) ? globalThis.Number(object.rank_id) : void 0,
			wins: isSet$2(object.wins) ? globalThis.Number(object.wins) : void 0,
			rank_change: isSet$2(object.rankChange) ? globalThis.Number(object.rankChange) : isSet$2(object.rank_change) ? globalThis.Number(object.rank_change) : void 0,
			rank_type_id: isSet$2(object.rankTypeId) ? globalThis.Number(object.rankTypeId) : isSet$2(object.rank_type_id) ? globalThis.Number(object.rank_type_id) : void 0,
			tv_control: isSet$2(object.tvControl) ? globalThis.Number(object.tvControl) : isSet$2(object.tv_control) ? globalThis.Number(object.tv_control) : void 0,
			rank_window_stats: isSet$2(object.rankWindowStats) ? globalThis.String(object.rankWindowStats) : isSet$2(object.rank_window_stats) ? globalThis.String(object.rank_window_stats) : void 0,
			leaderboard_name: isSet$2(object.leaderboardName) ? globalThis.String(object.leaderboardName) : isSet$2(object.leaderboard_name) ? globalThis.String(object.leaderboard_name) : void 0,
			rank_if_win: isSet$2(object.rankIfWin) ? globalThis.Number(object.rankIfWin) : isSet$2(object.rank_if_win) ? globalThis.Number(object.rank_if_win) : void 0,
			rank_if_lose: isSet$2(object.rankIfLose) ? globalThis.Number(object.rankIfLose) : isSet$2(object.rank_if_lose) ? globalThis.Number(object.rank_if_lose) : void 0,
			rank_if_tie: isSet$2(object.rankIfTie) ? globalThis.Number(object.rankIfTie) : isSet$2(object.rank_if_tie) ? globalThis.Number(object.rank_if_tie) : void 0,
			per_map_rank: globalThis.Array.isArray(object?.perMapRank) ? object.perMapRank.map((e) => PlayerRankingInfo_PerMapRank.fromJSON(e)) : globalThis.Array.isArray(object?.per_map_rank) ? object.per_map_rank.map((e) => PlayerRankingInfo_PerMapRank.fromJSON(e)) : [],
			leaderboard_name_status: isSet$2(object.leaderboardNameStatus) ? globalThis.Number(object.leaderboardNameStatus) : isSet$2(object.leaderboard_name_status) ? globalThis.Number(object.leaderboard_name_status) : void 0,
			highest_rank: isSet$2(object.highestRank) ? globalThis.Number(object.highestRank) : isSet$2(object.highest_rank) ? globalThis.Number(object.highest_rank) : void 0,
			rank_expiry: isSet$2(object.rankExpiry) ? globalThis.Number(object.rankExpiry) : isSet$2(object.rank_expiry) ? globalThis.Number(object.rank_expiry) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.account_id !== void 0) obj.accountId = Math.round(message.account_id);
		if (message.rank_id !== void 0) obj.rankId = Math.round(message.rank_id);
		if (message.wins !== void 0) obj.wins = Math.round(message.wins);
		if (message.rank_change !== void 0) obj.rankChange = message.rank_change;
		if (message.rank_type_id !== void 0) obj.rankTypeId = Math.round(message.rank_type_id);
		if (message.tv_control !== void 0) obj.tvControl = Math.round(message.tv_control);
		if (message.rank_window_stats !== void 0) obj.rankWindowStats = message.rank_window_stats;
		if (message.leaderboard_name !== void 0) obj.leaderboardName = message.leaderboard_name;
		if (message.rank_if_win !== void 0) obj.rankIfWin = Math.round(message.rank_if_win);
		if (message.rank_if_lose !== void 0) obj.rankIfLose = Math.round(message.rank_if_lose);
		if (message.rank_if_tie !== void 0) obj.rankIfTie = Math.round(message.rank_if_tie);
		if (message.per_map_rank?.length) obj.perMapRank = message.per_map_rank.map((e) => PlayerRankingInfo_PerMapRank.toJSON(e));
		if (message.leaderboard_name_status !== void 0) obj.leaderboardNameStatus = Math.round(message.leaderboard_name_status);
		if (message.highest_rank !== void 0) obj.highestRank = Math.round(message.highest_rank);
		if (message.rank_expiry !== void 0) obj.rankExpiry = Math.round(message.rank_expiry);
		return obj;
	},
	create(base) {
		return PlayerRankingInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePlayerRankingInfo();
		message.account_id = object.account_id ?? void 0;
		message.rank_id = object.rank_id ?? void 0;
		message.wins = object.wins ?? void 0;
		message.rank_change = object.rank_change ?? void 0;
		message.rank_type_id = object.rank_type_id ?? void 0;
		message.tv_control = object.tv_control ?? void 0;
		message.rank_window_stats = object.rank_window_stats ?? void 0;
		message.leaderboard_name = object.leaderboard_name ?? void 0;
		message.rank_if_win = object.rank_if_win ?? void 0;
		message.rank_if_lose = object.rank_if_lose ?? void 0;
		message.rank_if_tie = object.rank_if_tie ?? void 0;
		message.per_map_rank = object.per_map_rank?.map((e) => PlayerRankingInfo_PerMapRank.fromPartial(e)) || [];
		message.leaderboard_name_status = object.leaderboard_name_status ?? void 0;
		message.highest_rank = object.highest_rank ?? void 0;
		message.rank_expiry = object.rank_expiry ?? void 0;
		return message;
	}
};
function createBasePlayerRankingInfo_PerMapRank() {
	return {
		map_id: void 0,
		rank_id: void 0,
		wins: void 0
	};
}
const PlayerRankingInfo_PerMapRank = {
	encode(message, writer = new BinaryWriter()) {
		if (message.map_id !== void 0) writer.uint32(8).uint32(message.map_id);
		if (message.rank_id !== void 0) writer.uint32(16).uint32(message.rank_id);
		if (message.wins !== void 0) writer.uint32(24).uint32(message.wins);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePlayerRankingInfo_PerMapRank();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.map_id = reader.uint32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.rank_id = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.wins = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			map_id: isSet$2(object.mapId) ? globalThis.Number(object.mapId) : isSet$2(object.map_id) ? globalThis.Number(object.map_id) : void 0,
			rank_id: isSet$2(object.rankId) ? globalThis.Number(object.rankId) : isSet$2(object.rank_id) ? globalThis.Number(object.rank_id) : void 0,
			wins: isSet$2(object.wins) ? globalThis.Number(object.wins) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.map_id !== void 0) obj.mapId = Math.round(message.map_id);
		if (message.rank_id !== void 0) obj.rankId = Math.round(message.rank_id);
		if (message.wins !== void 0) obj.wins = Math.round(message.wins);
		return obj;
	},
	create(base) {
		return PlayerRankingInfo_PerMapRank.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePlayerRankingInfo_PerMapRank();
		message.map_id = object.map_id ?? void 0;
		message.rank_id = object.rank_id ?? void 0;
		message.wins = object.wins ?? void 0;
		return message;
	}
};
function createBaseIpAddressMask() {
	return {
		a: void 0,
		b: void 0,
		c: void 0,
		d: void 0,
		bits: void 0,
		token: void 0
	};
}
const IpAddressMask = {
	encode(message, writer = new BinaryWriter()) {
		if (message.a !== void 0) writer.uint32(8).uint32(message.a);
		if (message.b !== void 0) writer.uint32(16).uint32(message.b);
		if (message.c !== void 0) writer.uint32(24).uint32(message.c);
		if (message.d !== void 0) writer.uint32(32).uint32(message.d);
		if (message.bits !== void 0) writer.uint32(40).uint32(message.bits);
		if (message.token !== void 0) writer.uint32(48).uint32(message.token);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseIpAddressMask();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.a = reader.uint32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.b = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.c = reader.uint32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.d = reader.uint32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.bits = reader.uint32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.token = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			a: isSet$2(object.a) ? globalThis.Number(object.a) : void 0,
			b: isSet$2(object.b) ? globalThis.Number(object.b) : void 0,
			c: isSet$2(object.c) ? globalThis.Number(object.c) : void 0,
			d: isSet$2(object.d) ? globalThis.Number(object.d) : void 0,
			bits: isSet$2(object.bits) ? globalThis.Number(object.bits) : void 0,
			token: isSet$2(object.token) ? globalThis.Number(object.token) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.a !== void 0) obj.a = Math.round(message.a);
		if (message.b !== void 0) obj.b = Math.round(message.b);
		if (message.c !== void 0) obj.c = Math.round(message.c);
		if (message.d !== void 0) obj.d = Math.round(message.d);
		if (message.bits !== void 0) obj.bits = Math.round(message.bits);
		if (message.token !== void 0) obj.token = Math.round(message.token);
		return obj;
	},
	create(base) {
		return IpAddressMask.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseIpAddressMask();
		message.a = object.a ?? void 0;
		message.b = object.b ?? void 0;
		message.c = object.c ?? void 0;
		message.d = object.d ?? void 0;
		message.bits = object.bits ?? void 0;
		message.token = object.token ?? void 0;
		return message;
	}
};
function createBaseCDataGCCStrike15_v2_TournamentMatchDraft() {
	return {
		event_id: void 0,
		event_stage_id: void 0,
		team_id_0: void 0,
		team_id_1: void 0,
		maps_count: void 0,
		maps_current: void 0,
		team_id_start: void 0,
		team_id_veto1: void 0,
		team_id_pickn: void 0,
		drafts: [],
		vote_mapid_0: [],
		vote_mapid_1: [],
		vote_mapid_2: [],
		vote_mapid_3: [],
		vote_mapid_4: [],
		vote_mapid_5: [],
		vote_starting_side: [],
		vote_phase: void 0,
		vote_phase_start: void 0,
		vote_phase_length: void 0
	};
}
const CDataGCCStrike15_v2_TournamentMatchDraft = {
	encode(message, writer = new BinaryWriter()) {
		if (message.event_id !== void 0) writer.uint32(8).int32(message.event_id);
		if (message.event_stage_id !== void 0) writer.uint32(16).int32(message.event_stage_id);
		if (message.team_id_0 !== void 0) writer.uint32(24).int32(message.team_id_0);
		if (message.team_id_1 !== void 0) writer.uint32(32).int32(message.team_id_1);
		if (message.maps_count !== void 0) writer.uint32(40).int32(message.maps_count);
		if (message.maps_current !== void 0) writer.uint32(48).int32(message.maps_current);
		if (message.team_id_start !== void 0) writer.uint32(56).int32(message.team_id_start);
		if (message.team_id_veto1 !== void 0) writer.uint32(64).int32(message.team_id_veto1);
		if (message.team_id_pickn !== void 0) writer.uint32(72).int32(message.team_id_pickn);
		for (const v of message.drafts) CDataGCCStrike15_v2_TournamentMatchDraft_Entry.encode(v, writer.uint32(82).fork()).join();
		for (const v of message.vote_mapid_0) writer.uint32(88).int32(v);
		for (const v of message.vote_mapid_1) writer.uint32(96).int32(v);
		for (const v of message.vote_mapid_2) writer.uint32(104).int32(v);
		for (const v of message.vote_mapid_3) writer.uint32(112).int32(v);
		for (const v of message.vote_mapid_4) writer.uint32(120).int32(v);
		for (const v of message.vote_mapid_5) writer.uint32(128).int32(v);
		for (const v of message.vote_starting_side) writer.uint32(136).int32(v);
		if (message.vote_phase !== void 0) writer.uint32(144).int32(message.vote_phase);
		if (message.vote_phase_start !== void 0) writer.uint32(157).float(message.vote_phase_start);
		if (message.vote_phase_length !== void 0) writer.uint32(165).float(message.vote_phase_length);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDataGCCStrike15_v2_TournamentMatchDraft();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.event_id = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.event_stage_id = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.team_id_0 = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.team_id_1 = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.maps_count = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.maps_current = reader.int32();
					continue;
				case 7:
					if (tag !== 56) break;
					message.team_id_start = reader.int32();
					continue;
				case 8:
					if (tag !== 64) break;
					message.team_id_veto1 = reader.int32();
					continue;
				case 9:
					if (tag !== 72) break;
					message.team_id_pickn = reader.int32();
					continue;
				case 10:
					if (tag !== 82) break;
					message.drafts.push(CDataGCCStrike15_v2_TournamentMatchDraft_Entry.decode(reader, reader.uint32()));
					continue;
				case 11:
					if (tag === 88) {
						message.vote_mapid_0.push(reader.int32());
						continue;
					}
					if (tag === 90) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_0.push(reader.int32());
						continue;
					}
					break;
				case 12:
					if (tag === 96) {
						message.vote_mapid_1.push(reader.int32());
						continue;
					}
					if (tag === 98) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_1.push(reader.int32());
						continue;
					}
					break;
				case 13:
					if (tag === 104) {
						message.vote_mapid_2.push(reader.int32());
						continue;
					}
					if (tag === 106) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_2.push(reader.int32());
						continue;
					}
					break;
				case 14:
					if (tag === 112) {
						message.vote_mapid_3.push(reader.int32());
						continue;
					}
					if (tag === 114) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_3.push(reader.int32());
						continue;
					}
					break;
				case 15:
					if (tag === 120) {
						message.vote_mapid_4.push(reader.int32());
						continue;
					}
					if (tag === 122) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_4.push(reader.int32());
						continue;
					}
					break;
				case 16:
					if (tag === 128) {
						message.vote_mapid_5.push(reader.int32());
						continue;
					}
					if (tag === 130) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_mapid_5.push(reader.int32());
						continue;
					}
					break;
				case 17:
					if (tag === 136) {
						message.vote_starting_side.push(reader.int32());
						continue;
					}
					if (tag === 138) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.vote_starting_side.push(reader.int32());
						continue;
					}
					break;
				case 18:
					if (tag !== 144) break;
					message.vote_phase = reader.int32();
					continue;
				case 19:
					if (tag !== 157) break;
					message.vote_phase_start = reader.float();
					continue;
				case 20:
					if (tag !== 165) break;
					message.vote_phase_length = reader.float();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			event_id: isSet$2(object.eventId) ? globalThis.Number(object.eventId) : isSet$2(object.event_id) ? globalThis.Number(object.event_id) : void 0,
			event_stage_id: isSet$2(object.eventStageId) ? globalThis.Number(object.eventStageId) : isSet$2(object.event_stage_id) ? globalThis.Number(object.event_stage_id) : void 0,
			team_id_0: isSet$2(object.teamId0) ? globalThis.Number(object.teamId0) : isSet$2(object.team_id_0) ? globalThis.Number(object.team_id_0) : void 0,
			team_id_1: isSet$2(object.teamId1) ? globalThis.Number(object.teamId1) : isSet$2(object.team_id_1) ? globalThis.Number(object.team_id_1) : void 0,
			maps_count: isSet$2(object.mapsCount) ? globalThis.Number(object.mapsCount) : isSet$2(object.maps_count) ? globalThis.Number(object.maps_count) : void 0,
			maps_current: isSet$2(object.mapsCurrent) ? globalThis.Number(object.mapsCurrent) : isSet$2(object.maps_current) ? globalThis.Number(object.maps_current) : void 0,
			team_id_start: isSet$2(object.teamIdStart) ? globalThis.Number(object.teamIdStart) : isSet$2(object.team_id_start) ? globalThis.Number(object.team_id_start) : void 0,
			team_id_veto1: isSet$2(object.teamIdVeto1) ? globalThis.Number(object.teamIdVeto1) : isSet$2(object.team_id_veto1) ? globalThis.Number(object.team_id_veto1) : void 0,
			team_id_pickn: isSet$2(object.teamIdPickn) ? globalThis.Number(object.teamIdPickn) : isSet$2(object.team_id_pickn) ? globalThis.Number(object.team_id_pickn) : void 0,
			drafts: globalThis.Array.isArray(object?.drafts) ? object.drafts.map((e) => CDataGCCStrike15_v2_TournamentMatchDraft_Entry.fromJSON(e)) : [],
			vote_mapid_0: globalThis.Array.isArray(object?.voteMapid0) ? object.voteMapid0.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_0) ? object.vote_mapid_0.map((e) => globalThis.Number(e)) : [],
			vote_mapid_1: globalThis.Array.isArray(object?.voteMapid1) ? object.voteMapid1.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_1) ? object.vote_mapid_1.map((e) => globalThis.Number(e)) : [],
			vote_mapid_2: globalThis.Array.isArray(object?.voteMapid2) ? object.voteMapid2.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_2) ? object.vote_mapid_2.map((e) => globalThis.Number(e)) : [],
			vote_mapid_3: globalThis.Array.isArray(object?.voteMapid3) ? object.voteMapid3.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_3) ? object.vote_mapid_3.map((e) => globalThis.Number(e)) : [],
			vote_mapid_4: globalThis.Array.isArray(object?.voteMapid4) ? object.voteMapid4.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_4) ? object.vote_mapid_4.map((e) => globalThis.Number(e)) : [],
			vote_mapid_5: globalThis.Array.isArray(object?.voteMapid5) ? object.voteMapid5.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_mapid_5) ? object.vote_mapid_5.map((e) => globalThis.Number(e)) : [],
			vote_starting_side: globalThis.Array.isArray(object?.voteStartingSide) ? object.voteStartingSide.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.vote_starting_side) ? object.vote_starting_side.map((e) => globalThis.Number(e)) : [],
			vote_phase: isSet$2(object.votePhase) ? globalThis.Number(object.votePhase) : isSet$2(object.vote_phase) ? globalThis.Number(object.vote_phase) : void 0,
			vote_phase_start: isSet$2(object.votePhaseStart) ? globalThis.Number(object.votePhaseStart) : isSet$2(object.vote_phase_start) ? globalThis.Number(object.vote_phase_start) : void 0,
			vote_phase_length: isSet$2(object.votePhaseLength) ? globalThis.Number(object.votePhaseLength) : isSet$2(object.vote_phase_length) ? globalThis.Number(object.vote_phase_length) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.event_id !== void 0) obj.eventId = Math.round(message.event_id);
		if (message.event_stage_id !== void 0) obj.eventStageId = Math.round(message.event_stage_id);
		if (message.team_id_0 !== void 0) obj.teamId0 = Math.round(message.team_id_0);
		if (message.team_id_1 !== void 0) obj.teamId1 = Math.round(message.team_id_1);
		if (message.maps_count !== void 0) obj.mapsCount = Math.round(message.maps_count);
		if (message.maps_current !== void 0) obj.mapsCurrent = Math.round(message.maps_current);
		if (message.team_id_start !== void 0) obj.teamIdStart = Math.round(message.team_id_start);
		if (message.team_id_veto1 !== void 0) obj.teamIdVeto1 = Math.round(message.team_id_veto1);
		if (message.team_id_pickn !== void 0) obj.teamIdPickn = Math.round(message.team_id_pickn);
		if (message.drafts?.length) obj.drafts = message.drafts.map((e) => CDataGCCStrike15_v2_TournamentMatchDraft_Entry.toJSON(e));
		if (message.vote_mapid_0?.length) obj.voteMapid0 = message.vote_mapid_0.map((e) => Math.round(e));
		if (message.vote_mapid_1?.length) obj.voteMapid1 = message.vote_mapid_1.map((e) => Math.round(e));
		if (message.vote_mapid_2?.length) obj.voteMapid2 = message.vote_mapid_2.map((e) => Math.round(e));
		if (message.vote_mapid_3?.length) obj.voteMapid3 = message.vote_mapid_3.map((e) => Math.round(e));
		if (message.vote_mapid_4?.length) obj.voteMapid4 = message.vote_mapid_4.map((e) => Math.round(e));
		if (message.vote_mapid_5?.length) obj.voteMapid5 = message.vote_mapid_5.map((e) => Math.round(e));
		if (message.vote_starting_side?.length) obj.voteStartingSide = message.vote_starting_side.map((e) => Math.round(e));
		if (message.vote_phase !== void 0) obj.votePhase = Math.round(message.vote_phase);
		if (message.vote_phase_start !== void 0) obj.votePhaseStart = message.vote_phase_start;
		if (message.vote_phase_length !== void 0) obj.votePhaseLength = message.vote_phase_length;
		return obj;
	},
	create(base) {
		return CDataGCCStrike15_v2_TournamentMatchDraft.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDataGCCStrike15_v2_TournamentMatchDraft();
		message.event_id = object.event_id ?? void 0;
		message.event_stage_id = object.event_stage_id ?? void 0;
		message.team_id_0 = object.team_id_0 ?? void 0;
		message.team_id_1 = object.team_id_1 ?? void 0;
		message.maps_count = object.maps_count ?? void 0;
		message.maps_current = object.maps_current ?? void 0;
		message.team_id_start = object.team_id_start ?? void 0;
		message.team_id_veto1 = object.team_id_veto1 ?? void 0;
		message.team_id_pickn = object.team_id_pickn ?? void 0;
		message.drafts = object.drafts?.map((e) => CDataGCCStrike15_v2_TournamentMatchDraft_Entry.fromPartial(e)) || [];
		message.vote_mapid_0 = object.vote_mapid_0?.map((e) => e) || [];
		message.vote_mapid_1 = object.vote_mapid_1?.map((e) => e) || [];
		message.vote_mapid_2 = object.vote_mapid_2?.map((e) => e) || [];
		message.vote_mapid_3 = object.vote_mapid_3?.map((e) => e) || [];
		message.vote_mapid_4 = object.vote_mapid_4?.map((e) => e) || [];
		message.vote_mapid_5 = object.vote_mapid_5?.map((e) => e) || [];
		message.vote_starting_side = object.vote_starting_side?.map((e) => e) || [];
		message.vote_phase = object.vote_phase ?? void 0;
		message.vote_phase_start = object.vote_phase_start ?? void 0;
		message.vote_phase_length = object.vote_phase_length ?? void 0;
		return message;
	}
};
function createBaseCDataGCCStrike15_v2_TournamentMatchDraft_Entry() {
	return {
		mapid: void 0,
		team_id_ct: void 0
	};
}
const CDataGCCStrike15_v2_TournamentMatchDraft_Entry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.mapid !== void 0) writer.uint32(8).int32(message.mapid);
		if (message.team_id_ct !== void 0) writer.uint32(16).int32(message.team_id_ct);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCDataGCCStrike15_v2_TournamentMatchDraft_Entry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.mapid = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.team_id_ct = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			mapid: isSet$2(object.mapid) ? globalThis.Number(object.mapid) : void 0,
			team_id_ct: isSet$2(object.teamIdCt) ? globalThis.Number(object.teamIdCt) : isSet$2(object.team_id_ct) ? globalThis.Number(object.team_id_ct) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.mapid !== void 0) obj.mapid = Math.round(message.mapid);
		if (message.team_id_ct !== void 0) obj.teamIdCt = Math.round(message.team_id_ct);
		return obj;
	},
	create(base) {
		return CDataGCCStrike15_v2_TournamentMatchDraft_Entry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCDataGCCStrike15_v2_TournamentMatchDraft_Entry();
		message.mapid = object.mapid ?? void 0;
		message.team_id_ct = object.team_id_ct ?? void 0;
		return message;
	}
};
function createBaseCPreMatchInfoData() {
	return {
		predictions_pct: void 0,
		draft: void 0,
		stats: [],
		wins: []
	};
}
const CPreMatchInfoData = {
	encode(message, writer = new BinaryWriter()) {
		if (message.predictions_pct !== void 0) writer.uint32(8).int32(message.predictions_pct);
		if (message.draft !== void 0) CDataGCCStrike15_v2_TournamentMatchDraft.encode(message.draft, writer.uint32(34).fork()).join();
		for (const v of message.stats) CPreMatchInfoData_TeamStats.encode(v, writer.uint32(42).fork()).join();
		for (const v of message.wins) writer.uint32(48).int32(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCPreMatchInfoData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.predictions_pct = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.draft = CDataGCCStrike15_v2_TournamentMatchDraft.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.stats.push(CPreMatchInfoData_TeamStats.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag === 48) {
						message.wins.push(reader.int32());
						continue;
					}
					if (tag === 50) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.wins.push(reader.int32());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			predictions_pct: isSet$2(object.predictionsPct) ? globalThis.Number(object.predictionsPct) : isSet$2(object.predictions_pct) ? globalThis.Number(object.predictions_pct) : void 0,
			draft: isSet$2(object.draft) ? CDataGCCStrike15_v2_TournamentMatchDraft.fromJSON(object.draft) : void 0,
			stats: globalThis.Array.isArray(object?.stats) ? object.stats.map((e) => CPreMatchInfoData_TeamStats.fromJSON(e)) : [],
			wins: globalThis.Array.isArray(object?.wins) ? object.wins.map((e) => globalThis.Number(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.predictions_pct !== void 0) obj.predictionsPct = Math.round(message.predictions_pct);
		if (message.draft !== void 0) obj.draft = CDataGCCStrike15_v2_TournamentMatchDraft.toJSON(message.draft);
		if (message.stats?.length) obj.stats = message.stats.map((e) => CPreMatchInfoData_TeamStats.toJSON(e));
		if (message.wins?.length) obj.wins = message.wins.map((e) => Math.round(e));
		return obj;
	},
	create(base) {
		return CPreMatchInfoData.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCPreMatchInfoData();
		message.predictions_pct = object.predictions_pct ?? void 0;
		message.draft = object.draft !== void 0 && object.draft !== null ? CDataGCCStrike15_v2_TournamentMatchDraft.fromPartial(object.draft) : void 0;
		message.stats = object.stats?.map((e) => CPreMatchInfoData_TeamStats.fromPartial(e)) || [];
		message.wins = object.wins?.map((e) => e) || [];
		return message;
	}
};
function createBaseCPreMatchInfoData_TeamStats() {
	return {
		match_info_idxtxt: void 0,
		match_info_txt: void 0,
		match_info_teams: []
	};
}
const CPreMatchInfoData_TeamStats = {
	encode(message, writer = new BinaryWriter()) {
		if (message.match_info_idxtxt !== void 0) writer.uint32(8).int32(message.match_info_idxtxt);
		if (message.match_info_txt !== void 0) writer.uint32(18).string(message.match_info_txt);
		for (const v of message.match_info_teams) writer.uint32(26).string(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCPreMatchInfoData_TeamStats();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.match_info_idxtxt = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.match_info_txt = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.match_info_teams.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			match_info_idxtxt: isSet$2(object.matchInfoIdxtxt) ? globalThis.Number(object.matchInfoIdxtxt) : isSet$2(object.match_info_idxtxt) ? globalThis.Number(object.match_info_idxtxt) : void 0,
			match_info_txt: isSet$2(object.matchInfoTxt) ? globalThis.String(object.matchInfoTxt) : isSet$2(object.match_info_txt) ? globalThis.String(object.match_info_txt) : void 0,
			match_info_teams: globalThis.Array.isArray(object?.matchInfoTeams) ? object.matchInfoTeams.map((e) => globalThis.String(e)) : globalThis.Array.isArray(object?.match_info_teams) ? object.match_info_teams.map((e) => globalThis.String(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.match_info_idxtxt !== void 0) obj.matchInfoIdxtxt = Math.round(message.match_info_idxtxt);
		if (message.match_info_txt !== void 0) obj.matchInfoTxt = message.match_info_txt;
		if (message.match_info_teams?.length) obj.matchInfoTeams = message.match_info_teams;
		return obj;
	},
	create(base) {
		return CPreMatchInfoData_TeamStats.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCPreMatchInfoData_TeamStats();
		message.match_info_idxtxt = object.match_info_idxtxt ?? void 0;
		message.match_info_txt = object.match_info_txt ?? void 0;
		message.match_info_teams = object.match_info_teams?.map((e) => e) || [];
		return message;
	}
};
function createBaseCMsgGCCStrike15_v2_MatchmakingGC2ServerReserve() {
	return {
		account_ids: [],
		game_type: void 0,
		match_id: void 0,
		server_version: void 0,
		flags: void 0,
		rankings: [],
		encryption_key: void 0,
		encryption_key_pub: void 0,
		party_ids: [],
		whitelist: [],
		tv_master_steamid: void 0,
		tournament_event: void 0,
		tournament_teams: [],
		tournament_casters_account_ids: [],
		tv_relay_steamid: void 0,
		pre_match_data: void 0,
		tv_control: void 0,
		op_var_values: [],
		socache_control: void 0,
		teammate_colors: [],
		match_id_additional: void 0
	};
}
const CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.account_ids) writer.uint32(8).uint32(v);
		if (message.game_type !== void 0) writer.uint32(16).uint32(message.game_type);
		if (message.match_id !== void 0) writer.uint32(24).uint64(message.match_id);
		if (message.server_version !== void 0) writer.uint32(32).uint32(message.server_version);
		if (message.flags !== void 0) writer.uint32(144).uint32(message.flags);
		for (const v of message.rankings) PlayerRankingInfo.encode(v, writer.uint32(42).fork()).join();
		if (message.encryption_key !== void 0) writer.uint32(48).uint64(message.encryption_key);
		if (message.encryption_key_pub !== void 0) writer.uint32(56).uint64(message.encryption_key_pub);
		for (const v of message.party_ids) writer.uint32(64).uint32(v);
		for (const v of message.whitelist) IpAddressMask.encode(v, writer.uint32(74).fork()).join();
		if (message.tv_master_steamid !== void 0) writer.uint32(80).uint64(message.tv_master_steamid);
		if (message.tournament_event !== void 0) TournamentEvent.encode(message.tournament_event, writer.uint32(90).fork()).join();
		for (const v of message.tournament_teams) TournamentTeam.encode(v, writer.uint32(98).fork()).join();
		for (const v of message.tournament_casters_account_ids) writer.uint32(104).uint32(v);
		if (message.tv_relay_steamid !== void 0) writer.uint32(112).uint64(message.tv_relay_steamid);
		if (message.pre_match_data !== void 0) CPreMatchInfoData.encode(message.pre_match_data, writer.uint32(122).fork()).join();
		if (message.tv_control !== void 0) writer.uint32(136).uint32(message.tv_control);
		for (const v of message.op_var_values) OperationalVarValue.encode(v, writer.uint32(154).fork()).join();
		if (message.socache_control !== void 0) writer.uint32(160).uint32(message.socache_control);
		for (const v of message.teammate_colors) writer.uint32(168).int32(v);
		if (message.match_id_additional !== void 0) writer.uint32(176).uint32(message.match_id_additional);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCMsgGCCStrike15_v2_MatchmakingGC2ServerReserve();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 8) {
						message.account_ids.push(reader.uint32());
						continue;
					}
					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.account_ids.push(reader.uint32());
						continue;
					}
					break;
				case 2:
					if (tag !== 16) break;
					message.game_type = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.match_id = reader.uint64().toString();
					continue;
				case 4:
					if (tag !== 32) break;
					message.server_version = reader.uint32();
					continue;
				case 18:
					if (tag !== 144) break;
					message.flags = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) break;
					message.rankings.push(PlayerRankingInfo.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 48) break;
					message.encryption_key = reader.uint64().toString();
					continue;
				case 7:
					if (tag !== 56) break;
					message.encryption_key_pub = reader.uint64().toString();
					continue;
				case 8:
					if (tag === 64) {
						message.party_ids.push(reader.uint32());
						continue;
					}
					if (tag === 66) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.party_ids.push(reader.uint32());
						continue;
					}
					break;
				case 9:
					if (tag !== 74) break;
					message.whitelist.push(IpAddressMask.decode(reader, reader.uint32()));
					continue;
				case 10:
					if (tag !== 80) break;
					message.tv_master_steamid = reader.uint64().toString();
					continue;
				case 11:
					if (tag !== 90) break;
					message.tournament_event = TournamentEvent.decode(reader, reader.uint32());
					continue;
				case 12:
					if (tag !== 98) break;
					message.tournament_teams.push(TournamentTeam.decode(reader, reader.uint32()));
					continue;
				case 13:
					if (tag === 104) {
						message.tournament_casters_account_ids.push(reader.uint32());
						continue;
					}
					if (tag === 106) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.tournament_casters_account_ids.push(reader.uint32());
						continue;
					}
					break;
				case 14:
					if (tag !== 112) break;
					message.tv_relay_steamid = reader.uint64().toString();
					continue;
				case 15:
					if (tag !== 122) break;
					message.pre_match_data = CPreMatchInfoData.decode(reader, reader.uint32());
					continue;
				case 17:
					if (tag !== 136) break;
					message.tv_control = reader.uint32();
					continue;
				case 19:
					if (tag !== 154) break;
					message.op_var_values.push(OperationalVarValue.decode(reader, reader.uint32()));
					continue;
				case 20:
					if (tag !== 160) break;
					message.socache_control = reader.uint32();
					continue;
				case 21:
					if (tag === 168) {
						message.teammate_colors.push(reader.int32());
						continue;
					}
					if (tag === 170) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.teammate_colors.push(reader.int32());
						continue;
					}
					break;
				case 22:
					if (tag !== 176) break;
					message.match_id_additional = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			account_ids: globalThis.Array.isArray(object?.accountIds) ? object.accountIds.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.account_ids) ? object.account_ids.map((e) => globalThis.Number(e)) : [],
			game_type: isSet$2(object.gameType) ? globalThis.Number(object.gameType) : isSet$2(object.game_type) ? globalThis.Number(object.game_type) : void 0,
			match_id: isSet$2(object.matchId) ? globalThis.String(object.matchId) : isSet$2(object.match_id) ? globalThis.String(object.match_id) : void 0,
			server_version: isSet$2(object.serverVersion) ? globalThis.Number(object.serverVersion) : isSet$2(object.server_version) ? globalThis.Number(object.server_version) : void 0,
			flags: isSet$2(object.flags) ? globalThis.Number(object.flags) : void 0,
			rankings: globalThis.Array.isArray(object?.rankings) ? object.rankings.map((e) => PlayerRankingInfo.fromJSON(e)) : [],
			encryption_key: isSet$2(object.encryptionKey) ? globalThis.String(object.encryptionKey) : isSet$2(object.encryption_key) ? globalThis.String(object.encryption_key) : void 0,
			encryption_key_pub: isSet$2(object.encryptionKeyPub) ? globalThis.String(object.encryptionKeyPub) : isSet$2(object.encryption_key_pub) ? globalThis.String(object.encryption_key_pub) : void 0,
			party_ids: globalThis.Array.isArray(object?.partyIds) ? object.partyIds.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.party_ids) ? object.party_ids.map((e) => globalThis.Number(e)) : [],
			whitelist: globalThis.Array.isArray(object?.whitelist) ? object.whitelist.map((e) => IpAddressMask.fromJSON(e)) : [],
			tv_master_steamid: isSet$2(object.tvMasterSteamid) ? globalThis.String(object.tvMasterSteamid) : isSet$2(object.tv_master_steamid) ? globalThis.String(object.tv_master_steamid) : void 0,
			tournament_event: isSet$2(object.tournamentEvent) ? TournamentEvent.fromJSON(object.tournamentEvent) : isSet$2(object.tournament_event) ? TournamentEvent.fromJSON(object.tournament_event) : void 0,
			tournament_teams: globalThis.Array.isArray(object?.tournamentTeams) ? object.tournamentTeams.map((e) => TournamentTeam.fromJSON(e)) : globalThis.Array.isArray(object?.tournament_teams) ? object.tournament_teams.map((e) => TournamentTeam.fromJSON(e)) : [],
			tournament_casters_account_ids: globalThis.Array.isArray(object?.tournamentCastersAccountIds) ? object.tournamentCastersAccountIds.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.tournament_casters_account_ids) ? object.tournament_casters_account_ids.map((e) => globalThis.Number(e)) : [],
			tv_relay_steamid: isSet$2(object.tvRelaySteamid) ? globalThis.String(object.tvRelaySteamid) : isSet$2(object.tv_relay_steamid) ? globalThis.String(object.tv_relay_steamid) : void 0,
			pre_match_data: isSet$2(object.preMatchData) ? CPreMatchInfoData.fromJSON(object.preMatchData) : isSet$2(object.pre_match_data) ? CPreMatchInfoData.fromJSON(object.pre_match_data) : void 0,
			tv_control: isSet$2(object.tvControl) ? globalThis.Number(object.tvControl) : isSet$2(object.tv_control) ? globalThis.Number(object.tv_control) : void 0,
			op_var_values: globalThis.Array.isArray(object?.opVarValues) ? object.opVarValues.map((e) => OperationalVarValue.fromJSON(e)) : globalThis.Array.isArray(object?.op_var_values) ? object.op_var_values.map((e) => OperationalVarValue.fromJSON(e)) : [],
			socache_control: isSet$2(object.socacheControl) ? globalThis.Number(object.socacheControl) : isSet$2(object.socache_control) ? globalThis.Number(object.socache_control) : void 0,
			teammate_colors: globalThis.Array.isArray(object?.teammateColors) ? object.teammateColors.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.teammate_colors) ? object.teammate_colors.map((e) => globalThis.Number(e)) : [],
			match_id_additional: isSet$2(object.matchIdAdditional) ? globalThis.Number(object.matchIdAdditional) : isSet$2(object.match_id_additional) ? globalThis.Number(object.match_id_additional) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.account_ids?.length) obj.accountIds = message.account_ids.map((e) => Math.round(e));
		if (message.game_type !== void 0) obj.gameType = Math.round(message.game_type);
		if (message.match_id !== void 0) obj.matchId = message.match_id;
		if (message.server_version !== void 0) obj.serverVersion = Math.round(message.server_version);
		if (message.flags !== void 0) obj.flags = Math.round(message.flags);
		if (message.rankings?.length) obj.rankings = message.rankings.map((e) => PlayerRankingInfo.toJSON(e));
		if (message.encryption_key !== void 0) obj.encryptionKey = message.encryption_key;
		if (message.encryption_key_pub !== void 0) obj.encryptionKeyPub = message.encryption_key_pub;
		if (message.party_ids?.length) obj.partyIds = message.party_ids.map((e) => Math.round(e));
		if (message.whitelist?.length) obj.whitelist = message.whitelist.map((e) => IpAddressMask.toJSON(e));
		if (message.tv_master_steamid !== void 0) obj.tvMasterSteamid = message.tv_master_steamid;
		if (message.tournament_event !== void 0) obj.tournamentEvent = TournamentEvent.toJSON(message.tournament_event);
		if (message.tournament_teams?.length) obj.tournamentTeams = message.tournament_teams.map((e) => TournamentTeam.toJSON(e));
		if (message.tournament_casters_account_ids?.length) obj.tournamentCastersAccountIds = message.tournament_casters_account_ids.map((e) => Math.round(e));
		if (message.tv_relay_steamid !== void 0) obj.tvRelaySteamid = message.tv_relay_steamid;
		if (message.pre_match_data !== void 0) obj.preMatchData = CPreMatchInfoData.toJSON(message.pre_match_data);
		if (message.tv_control !== void 0) obj.tvControl = Math.round(message.tv_control);
		if (message.op_var_values?.length) obj.opVarValues = message.op_var_values.map((e) => OperationalVarValue.toJSON(e));
		if (message.socache_control !== void 0) obj.socacheControl = Math.round(message.socache_control);
		if (message.teammate_colors?.length) obj.teammateColors = message.teammate_colors.map((e) => Math.round(e));
		if (message.match_id_additional !== void 0) obj.matchIdAdditional = Math.round(message.match_id_additional);
		return obj;
	},
	create(base) {
		return CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCMsgGCCStrike15_v2_MatchmakingGC2ServerReserve();
		message.account_ids = object.account_ids?.map((e) => e) || [];
		message.game_type = object.game_type ?? void 0;
		message.match_id = object.match_id ?? void 0;
		message.server_version = object.server_version ?? void 0;
		message.flags = object.flags ?? void 0;
		message.rankings = object.rankings?.map((e) => PlayerRankingInfo.fromPartial(e)) || [];
		message.encryption_key = object.encryption_key ?? void 0;
		message.encryption_key_pub = object.encryption_key_pub ?? void 0;
		message.party_ids = object.party_ids?.map((e) => e) || [];
		message.whitelist = object.whitelist?.map((e) => IpAddressMask.fromPartial(e)) || [];
		message.tv_master_steamid = object.tv_master_steamid ?? void 0;
		message.tournament_event = object.tournament_event !== void 0 && object.tournament_event !== null ? TournamentEvent.fromPartial(object.tournament_event) : void 0;
		message.tournament_teams = object.tournament_teams?.map((e) => TournamentTeam.fromPartial(e)) || [];
		message.tournament_casters_account_ids = object.tournament_casters_account_ids?.map((e) => e) || [];
		message.tv_relay_steamid = object.tv_relay_steamid ?? void 0;
		message.pre_match_data = object.pre_match_data !== void 0 && object.pre_match_data !== null ? CPreMatchInfoData.fromPartial(object.pre_match_data) : void 0;
		message.tv_control = object.tv_control ?? void 0;
		message.op_var_values = object.op_var_values?.map((e) => OperationalVarValue.fromPartial(e)) || [];
		message.socache_control = object.socache_control ?? void 0;
		message.teammate_colors = object.teammate_colors?.map((e) => e) || [];
		message.match_id_additional = object.match_id_additional ?? void 0;
		return message;
	}
};
function bytesFromBase64(b64) {
	if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
		return arr;
	}
}
function base64FromBytes(arr) {
	if (globalThis.Buffer) return globalThis.Buffer.from(arr).toString("base64");
	else {
		const bin = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}
function isSet$2(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/ts-proto/cstrike15_usermessages.ts
const ECstrike15UserMessages = {
	CS_UM_VGUIMenu: 301,
	CS_UM_Geiger: 302,
	CS_UM_Train: 303,
	CS_UM_HudText: 304,
	CS_UM_SayText: 305,
	CS_UM_SayText2: 306,
	CS_UM_TextMsg: 307,
	CS_UM_HudMsg: 308,
	CS_UM_ResetHud: 309,
	CS_UM_GameTitle: 310,
	CS_UM_Shake: 312,
	CS_UM_Fade: 313,
	CS_UM_Rumble: 314,
	CS_UM_CloseCaption: 315,
	CS_UM_CloseCaptionDirect: 316,
	CS_UM_SendAudio: 317,
	CS_UM_RawAudio: 318,
	CS_UM_VoiceMask: 319,
	CS_UM_RequestState: 320,
	CS_UM_Damage: 321,
	CS_UM_RadioText: 322,
	CS_UM_HintText: 323,
	CS_UM_KeyHintText: 324,
	CS_UM_ProcessSpottedEntityUpdate: 325,
	CS_UM_ReloadEffect: 326,
	CS_UM_AdjustMoney: 327,
	CS_UM_UpdateTeamMoney: 328,
	CS_UM_StopSpectatorMode: 329,
	CS_UM_KillCam: 330,
	CS_UM_DesiredTimescale: 331,
	CS_UM_CurrentTimescale: 332,
	CS_UM_AchievementEvent: 333,
	CS_UM_MatchEndConditions: 334,
	CS_UM_DisconnectToLobby: 335,
	CS_UM_PlayerStatsUpdate: 336,
	CS_UM_ClientInfo: 339,
	CS_UM_XRankGet: 340,
	CS_UM_XRankUpd: 341,
	CS_UM_CallVoteFailed: 345,
	CS_UM_VoteStart: 346,
	CS_UM_VotePass: 347,
	CS_UM_VoteFailed: 348,
	CS_UM_VoteSetup: 349,
	CS_UM_ServerRankRevealAll: 350,
	CS_UM_SendLastKillerDamageToClient: 351,
	CS_UM_ServerRankUpdate: 352,
	CS_UM_ItemPickup: 353,
	CS_UM_ShowMenu: 354,
	CS_UM_BarTime: 355,
	CS_UM_AmmoDenied: 356,
	CS_UM_MarkAchievement: 357,
	CS_UM_MatchStatsUpdate: 358,
	CS_UM_ItemDrop: 359,
	CS_UM_SendPlayerItemDrops: 361,
	CS_UM_RoundBackupFilenames: 362,
	CS_UM_SendPlayerItemFound: 363,
	CS_UM_ReportHit: 364,
	CS_UM_XpUpdate: 365,
	CS_UM_QuestProgress: 366,
	CS_UM_ScoreLeaderboardData: 367,
	CS_UM_PlayerDecalDigitalSignature: 368,
	CS_UM_WeaponSound: 369,
	CS_UM_UpdateScreenHealthBar: 370,
	CS_UM_EntityOutlineHighlight: 371,
	CS_UM_SSUI: 372,
	CS_UM_SurvivalStats: 373,
	CS_UM_DisconnectToLobby2: 374,
	CS_UM_EndOfMatchAllPlayersData: 375,
	CS_UM_PostRoundDamageReport: 376,
	CS_UM_RoundEndReportData: 379,
	CS_UM_CurrentRoundOdds: 380,
	CS_UM_DeepStats: 381,
	CS_UM_ShootInfo: 383,
	CS_UM_CounterStrafe: 385,
	CS_UM_DamagePrediction: 386,
	CS_UM_RecurringMissionSchema: 387,
	CS_UM_SendPlayerLoadout: 388,
	CS_UM_WeaponMagDrop: 389,
	UNRECOGNIZED: -1
};
function createBaseCCSUsrMsg_ServerRankUpdate() {
	return { rank_update: [] };
}
const CCSUsrMsg_ServerRankUpdate = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.rank_update) CCSUsrMsg_ServerRankUpdate_RankUpdate.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCCSUsrMsg_ServerRankUpdate();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.rank_update.push(CCSUsrMsg_ServerRankUpdate_RankUpdate.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { rank_update: globalThis.Array.isArray(object?.rankUpdate) ? object.rankUpdate.map((e) => CCSUsrMsg_ServerRankUpdate_RankUpdate.fromJSON(e)) : globalThis.Array.isArray(object?.rank_update) ? object.rank_update.map((e) => CCSUsrMsg_ServerRankUpdate_RankUpdate.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.rank_update?.length) obj.rankUpdate = message.rank_update.map((e) => CCSUsrMsg_ServerRankUpdate_RankUpdate.toJSON(e));
		return obj;
	},
	create(base) {
		return CCSUsrMsg_ServerRankUpdate.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCCSUsrMsg_ServerRankUpdate();
		message.rank_update = object.rank_update?.map((e) => CCSUsrMsg_ServerRankUpdate_RankUpdate.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCCSUsrMsg_ServerRankUpdate_RankUpdate() {
	return {
		account_id: void 0,
		rank_old: void 0,
		rank_new: void 0,
		num_wins: void 0,
		rank_change: void 0,
		rank_type_id: void 0
	};
}
const CCSUsrMsg_ServerRankUpdate_RankUpdate = {
	encode(message, writer = new BinaryWriter()) {
		if (message.account_id !== void 0) writer.uint32(8).int32(message.account_id);
		if (message.rank_old !== void 0) writer.uint32(16).int32(message.rank_old);
		if (message.rank_new !== void 0) writer.uint32(24).int32(message.rank_new);
		if (message.num_wins !== void 0) writer.uint32(32).int32(message.num_wins);
		if (message.rank_change !== void 0) writer.uint32(45).float(message.rank_change);
		if (message.rank_type_id !== void 0) writer.uint32(48).int32(message.rank_type_id);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCCSUsrMsg_ServerRankUpdate_RankUpdate();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.account_id = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.rank_old = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.rank_new = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.num_wins = reader.int32();
					continue;
				case 5:
					if (tag !== 45) break;
					message.rank_change = reader.float();
					continue;
				case 6:
					if (tag !== 48) break;
					message.rank_type_id = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			account_id: isSet$1(object.accountId) ? globalThis.Number(object.accountId) : isSet$1(object.account_id) ? globalThis.Number(object.account_id) : void 0,
			rank_old: isSet$1(object.rankOld) ? globalThis.Number(object.rankOld) : isSet$1(object.rank_old) ? globalThis.Number(object.rank_old) : void 0,
			rank_new: isSet$1(object.rankNew) ? globalThis.Number(object.rankNew) : isSet$1(object.rank_new) ? globalThis.Number(object.rank_new) : void 0,
			num_wins: isSet$1(object.numWins) ? globalThis.Number(object.numWins) : isSet$1(object.num_wins) ? globalThis.Number(object.num_wins) : void 0,
			rank_change: isSet$1(object.rankChange) ? globalThis.Number(object.rankChange) : isSet$1(object.rank_change) ? globalThis.Number(object.rank_change) : void 0,
			rank_type_id: isSet$1(object.rankTypeId) ? globalThis.Number(object.rankTypeId) : isSet$1(object.rank_type_id) ? globalThis.Number(object.rank_type_id) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.account_id !== void 0) obj.accountId = Math.round(message.account_id);
		if (message.rank_old !== void 0) obj.rankOld = Math.round(message.rank_old);
		if (message.rank_new !== void 0) obj.rankNew = Math.round(message.rank_new);
		if (message.num_wins !== void 0) obj.numWins = Math.round(message.num_wins);
		if (message.rank_change !== void 0) obj.rankChange = message.rank_change;
		if (message.rank_type_id !== void 0) obj.rankTypeId = Math.round(message.rank_type_id);
		return obj;
	},
	create(base) {
		return CCSUsrMsg_ServerRankUpdate_RankUpdate.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCCSUsrMsg_ServerRankUpdate_RankUpdate();
		message.account_id = object.account_id ?? void 0;
		message.rank_old = object.rank_old ?? void 0;
		message.rank_new = object.rank_new ?? void 0;
		message.num_wins = object.num_wins ?? void 0;
		message.rank_change = object.rank_change ?? void 0;
		message.rank_type_id = object.rank_type_id ?? void 0;
		return message;
	}
};
function createBaseCCSUsrMsg_ServerRankRevealAll() {
	return {
		seconds_till_shutdown: void 0,
		reservation: void 0
	};
}
const CCSUsrMsg_ServerRankRevealAll = {
	encode(message, writer = new BinaryWriter()) {
		if (message.seconds_till_shutdown !== void 0) writer.uint32(8).int32(message.seconds_till_shutdown);
		if (message.reservation !== void 0) CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.encode(message.reservation, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCCSUsrMsg_ServerRankRevealAll();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.seconds_till_shutdown = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.reservation = CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			seconds_till_shutdown: isSet$1(object.secondsTillShutdown) ? globalThis.Number(object.secondsTillShutdown) : isSet$1(object.seconds_till_shutdown) ? globalThis.Number(object.seconds_till_shutdown) : void 0,
			reservation: isSet$1(object.reservation) ? CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.fromJSON(object.reservation) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.seconds_till_shutdown !== void 0) obj.secondsTillShutdown = Math.round(message.seconds_till_shutdown);
		if (message.reservation !== void 0) obj.reservation = CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.toJSON(message.reservation);
		return obj;
	},
	create(base) {
		return CCSUsrMsg_ServerRankRevealAll.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCCSUsrMsg_ServerRankRevealAll();
		message.seconds_till_shutdown = object.seconds_till_shutdown ?? void 0;
		message.reservation = object.reservation !== void 0 && object.reservation !== null ? CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.fromPartial(object.reservation) : void 0;
		return message;
	}
};
function isSet$1(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/ts-proto/usermessages.ts
const EBaseUserMessages = {
	UM_AchievementEvent: 101,
	UM_CloseCaption: 102,
	UM_CloseCaptionDirect: 103,
	UM_CurrentTimescale: 104,
	UM_DesiredTimescale: 105,
	UM_Fade: 106,
	UM_GameTitle: 107,
	UM_HudMsg: 110,
	UM_HudText: 111,
	UM_ColoredText: 113,
	UM_RequestState: 114,
	UM_ResetHUD: 115,
	UM_Rumble: 116,
	UM_SayText: 117,
	UM_SayText2: 118,
	UM_SayTextChannel: 119,
	UM_Shake: 120,
	UM_ShakeDir: 121,
	UM_WaterShake: 122,
	UM_TextMsg: 124,
	UM_ScreenTilt: 125,
	UM_VoiceMask: 128,
	UM_SendAudio: 130,
	UM_ItemPickup: 131,
	UM_AmmoDenied: 132,
	UM_ShowMenu: 134,
	UM_CreditsMsg: 135,
	UM_CloseCaptionPlaceholder: 142,
	UM_CameraTransition: 143,
	UM_AudioParameter: 144,
	UM_ParticleManager: 145,
	UM_HudError: 146,
	UM_CustomGameEvent: 148,
	UM_AnimGraphUpdate: 149,
	UM_HapticsManagerPulse: 150,
	UM_HapticsManagerEffect: 151,
	UM_UpdateCssClasses: 153,
	UM_ServerFrameTime: 154,
	UM_LagCompensationError: 155,
	UM_RequestDllStatus: 156,
	UM_RequestUtilAction: 157,
	UM_UtilActionResponse: 158,
	UM_DllStatusResponse: 159,
	UM_RequestInventory: 160,
	UM_InventoryResponse: 161,
	UM_RequestDiagnostic: 162,
	UM_DiagnosticResponse: 163,
	UM_ExtraUserData: 164,
	UM_NotifyResponseFound: 165,
	UM_PlayResponseConditional: 166,
	UM_MAX_BASE: 200,
	UNRECOGNIZED: -1
};
function createBaseCUserMessageSayText2() {
	return {
		entityindex: void 0,
		chat: void 0,
		messagename: void 0,
		param1: void 0,
		param2: void 0,
		param3: void 0,
		param4: void 0
	};
}
const CUserMessageSayText2 = {
	encode(message, writer = new BinaryWriter()) {
		if (message.entityindex !== void 0) writer.uint32(8).int32(message.entityindex);
		if (message.chat !== void 0) writer.uint32(16).bool(message.chat);
		if (message.messagename !== void 0) writer.uint32(26).string(message.messagename);
		if (message.param1 !== void 0) writer.uint32(34).string(message.param1);
		if (message.param2 !== void 0) writer.uint32(42).string(message.param2);
		if (message.param3 !== void 0) writer.uint32(50).string(message.param3);
		if (message.param4 !== void 0) writer.uint32(58).string(message.param4);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCUserMessageSayText2();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.entityindex = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.chat = reader.bool();
					continue;
				case 3:
					if (tag !== 26) break;
					message.messagename = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.param1 = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.param2 = reader.string();
					continue;
				case 6:
					if (tag !== 50) break;
					message.param3 = reader.string();
					continue;
				case 7:
					if (tag !== 58) break;
					message.param4 = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			entityindex: isSet(object.entityindex) ? globalThis.Number(object.entityindex) : void 0,
			chat: isSet(object.chat) ? globalThis.Boolean(object.chat) : void 0,
			messagename: isSet(object.messagename) ? globalThis.String(object.messagename) : void 0,
			param1: isSet(object.param1) ? globalThis.String(object.param1) : void 0,
			param2: isSet(object.param2) ? globalThis.String(object.param2) : void 0,
			param3: isSet(object.param3) ? globalThis.String(object.param3) : void 0,
			param4: isSet(object.param4) ? globalThis.String(object.param4) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.entityindex !== void 0) obj.entityindex = Math.round(message.entityindex);
		if (message.chat !== void 0) obj.chat = message.chat;
		if (message.messagename !== void 0) obj.messagename = message.messagename;
		if (message.param1 !== void 0) obj.param1 = message.param1;
		if (message.param2 !== void 0) obj.param2 = message.param2;
		if (message.param3 !== void 0) obj.param3 = message.param3;
		if (message.param4 !== void 0) obj.param4 = message.param4;
		return obj;
	},
	create(base) {
		return CUserMessageSayText2.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCUserMessageSayText2();
		message.entityindex = object.entityindex ?? void 0;
		message.chat = object.chat ?? void 0;
		message.messagename = object.messagename ?? void 0;
		message.param1 = object.param1 ?? void 0;
		message.param2 = object.param2 ?? void 0;
		message.param3 = object.param3 ?? void 0;
		message.param4 = object.param4 ?? void 0;
		return message;
	}
};
function isSet(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region src/parser/descriptors/svc.ts
const svcMessages = {
	[SVC_Messages.svc_PacketEntities]: CSVCMsg_PacketEntities,
	[SVC_Messages.svc_ServerInfo]: CSVCMsg_ServerInfo,
	[SVC_Messages.svc_CreateStringTable]: CSVCMsg_CreateStringTable,
	[SVC_Messages.svc_UpdateStringTable]: CSVCMsg_UpdateStringTable,
	[SVC_Messages.svc_ClearAllStringTables]: CSVCMsg_ClearAllStringTables
};
const optionalSvcMessages = {
	[SVC_Messages.svc_VoiceData]: CSVCMsg_VoiceData,
	[ECstrike15UserMessages.CS_UM_ServerRankRevealAll]: CCSUsrMsg_ServerRankRevealAll,
	[ECstrike15UserMessages.CS_UM_ServerRankUpdate]: CCSUsrMsg_ServerRankUpdate,
	[EBaseUserMessages.UM_SayText2]: CUserMessageSayText2,
	[SVC_Messages.svc_UserCmds]: CSVCMsg_UserCommands,
	[SVC_Messages.svc_UserMessage]: CSVCMsg_UserMessage
};
const optionalSvcIds = Object.entries({
	...SVC_Messages,
	...ECstrike15UserMessages,
	...EBaseUserMessages
}).reduce((prev, curr) => curr[1] in optionalSvcMessages ? {
	...prev,
	[curr[1]]: curr[0]
} : prev, {});
//#endregion
//#region src/parser/descriptors/index.ts
const map = (m) => {
	return Object.entries(m).reduce((a, b) => ({
		...a,
		[b[0]]: {
			id: Number(b[0]),
			class: b[1]
		}
	}), {});
};
const messages = {
	...map(gameMessages),
	...map(svcMessages),
	...map(optionalSvcMessages)
};
//#endregion
//#region src/parser/stringtables.ts
const parseStringTable = (data, name, numEntries, udf, userDataSize, flags, varintBitCount, baselines) => {
	const bitreader = new BitBuffer(data);
	const players = [];
	let idx = -1;
	const keys = [];
	const items = [];
	for (let i = 0; i < numEntries; i++) {
		let key = "";
		let value = null;
		idx += 1;
		if (!bitreader.readBoolean()) idx += bitreader.ReadUVarInt32() + 1;
		if (bitreader.readBoolean()) if (bitreader.readBoolean()) {
			const position = bitreader.ReadUBits(5);
			const length = bitreader.ReadUBits(5);
			if (position >= keys.length) key += bitreader.readString();
			else {
				const someKey = keys[position];
				if (length > (someKey?.length ?? 0)) key += someKey + bitreader.readString();
				else key += someKey?.substring(0, length) + bitreader.readString();
			}
		} else key += bitreader.readString();
		if (keys.length >= 32) keys.shift();
		keys.push(key);
		if (bitreader.readBoolean()) {
			let bits = 0;
			let isCompressed = false;
			if (udf) bits = userDataSize;
			else {
				if ((flags & 1) !== 0) isCompressed = bitreader.readBoolean();
				if (varintBitCount) bits = bitreader.readUbitVar() * 8;
				else bits = bitreader.ReadUBits(17) * 8;
			}
			value = Buffer.allocUnsafe(bits % 8 === 0 ? bits / 8 : 0);
			bitreader.readBytes(value);
			if (isCompressed && value?.length) value = snappy.uncompressSync(value);
		}
		if (name === "userinfo" && value?.length) {
			const data = CMsgPlayerInfo.decode(value);
			players.push(data);
		}
		if (name === "instancebaseline" && value?.length && key) if (key.includes(":")) {} else {
			const intKey = parseInt(key);
			if (value) baselines[intKey] = value;
		}
		items.push({
			idx,
			key,
			value
		});
	}
	return {
		table: {
			data: items,
			name,
			user_data_size: userDataSize,
			user_data_fixed_size: udf,
			flags,
			using_varint_bitcounts: varintBitCount
		},
		players
	};
};
const createStringTable = (createTableMessage, baselines) => {
	if (!createTableMessage || createTableMessage.name !== "instancebaseline" && createTableMessage.name !== "userinfo") return void 0;
	return parseStringTable(createTableMessage.data_compressed ? snappy.uncompressSync(Buffer.from(createTableMessage.string_data)) : Buffer.from(createTableMessage.string_data), createTableMessage.name, createTableMessage.num_entries, createTableMessage.user_data_fixed_size, createTableMessage.user_data_size, createTableMessage.flags, createTableMessage.using_varint_bitcounts, baselines);
};
const updateStringTable = (updateTableMessage, savedTables, baselines) => {
	const existing = savedTables[updateTableMessage.table_id];
	if (!existing) return null;
	const updated = parseStringTable(Buffer.from(updateTableMessage.string_data), existing.name, updateTableMessage.num_changed_entries, existing.user_data_fixed_size, existing.user_data_size, existing.flags, existing.using_varint_bitcounts, baselines);
	return {
		tableId: updateTableMessage.table_id,
		players: updated.players,
		table: updated.table
	};
};
const applyStringTableSnapshot = (snapshot, baselines) => {
	const name = snapshot.table_name;
	if (name !== "instancebaseline" && name !== "userinfo") return null;
	const players = [];
	for (const item of snapshot.items) {
		const key = item.str ?? "";
		const value = item.data;
		if (!value || value.length === 0) continue;
		if (name === "instancebaseline") {
			if (key.includes(":")) continue;
			const intKey = parseInt(key);
			if (Number.isFinite(intKey)) baselines[intKey] = value;
		} else try {
			players.push(CMsgPlayerInfo.decode(value));
		} catch {}
	}
	return {
		name,
		players
	};
};
//#endregion
//#region src/parser/entities/brandedEnum.ts
const generateEnum = (map, _) => {
	return map;
};
//#endregion
//#region src/parser/entities/quantizedFloat.ts
const qfMapper = {
	idx: 0,
	map: []
};
const QFF_ROUNDDOWN = 1;
const QFF_ROUNDUP = 2;
const QFF_ENCODE_ZERO = 4;
const QFF_ENCODE_INTEGERS = 8;
const getQuantalizedFloat = (bitcount, flags, low_value, high_value) => {
	const qf = {
		no_scale: false,
		bit_count: bitcount,
		dec_mul: 0,
		low: 0,
		high: 0,
		high_low_mul: 0,
		offset: 0,
		flags: 0
	};
	if (bitcount == 0 || bitcount >= 32) {
		qf.no_scale = true;
		qf.bit_count = 32;
		return qf;
	}
	qf.bit_count = bitcount;
	if (low_value !== void 0) qf.low = low_value;
	if (high_value !== void 0) qf.high = high_value;
	if (flags !== void 0) {
		qf.flags = flags;
		validateFlags(qf);
	}
	let steps = 1 << qf.bit_count;
	if ((qf.flags & QFF_ROUNDDOWN) != 0) {
		qf.offset = (qf.high - qf.low) / steps;
		qf.high -= qf.offset;
	} else if ((qf.flags & QFF_ROUNDUP) != 0) {
		qf.offset = (qf.high - qf.low) / steps;
		qf.low += qf.offset;
	}
	if ((qf.flags & QFF_ENCODE_INTEGERS) != 0) {
		let delta = qf.high - qf.low;
		if (delta < 1) delta = 1;
		const range_2 = 1 << Math.ceil(Math.log2(delta));
		let bit_count = qf.bit_count;
		while (1 << bit_count <= range_2) bit_count += 1;
		if (bit_count > qf.bit_count) {
			qf.bit_count = bit_count;
			steps = 1 << qf.bit_count;
		}
		qf.offset = range_2 / steps;
		qf.high = qf.low + (range_2 - qf.offset);
	}
	assignMultipliers(qf, steps);
	if ((qf.flags & QFF_ROUNDDOWN) != 0) {
		if (quantize(qf, qf.low) == qf.low) qf.flags &= ~QFF_ROUNDDOWN;
	}
	if ((qf.flags & QFF_ROUNDUP) != 0) {
		if (quantize(qf, qf.high) == qf.high) qf.flags &= ~QFF_ROUNDUP;
	}
	if ((qf.flags & QFF_ENCODE_ZERO) != 0) {
		if (quantize(qf, 0) == 0) qf.flags &= ~QFF_ENCODE_ZERO;
	}
	return qf;
};
const Q_FLOAT_MULTIPLIERS = [
	.9999,
	.99,
	.9,
	.8,
	.7
];
const assignMultipliers = (qf, steps) => {
	qf.high_low_mul = 0;
	const range = qf.high - qf.low;
	const high = qf.bit_count === 32 ? 4294967294 : (1 << qf.bit_count) - 1;
	let high_mul = Math.abs(range) <= 0 ? high : high / range;
	if (high_mul * range > high || high_mul * range > high) for (const multiplier of Q_FLOAT_MULTIPLIERS) {
		high_mul = high / range * multiplier;
		if (high_mul * range > high || high_mul * range > high) continue;
		break;
	}
	qf.high_low_mul = high_mul;
	qf.dec_mul = 1 / (steps - 1);
};
const quantize = (qf, val) => {
	if (val < qf.low) return qf.low;
	if (val > qf.high) return qf.high;
	const i = Math.floor((val - qf.low) * qf.high_low_mul);
	return qf.low + (qf.high - qf.low) * (i * qf.dec_mul);
};
const validateFlags = (qf) => {
	if (qf.flags === 0) return;
	if (qf.low === 0 && (qf.flags & QFF_ROUNDDOWN) !== 0 || qf.high === 0 && (qf.flags & QFF_ROUNDUP) !== 0) qf.flags &= ~QFF_ENCODE_ZERO;
	if (qf.low === 0 && (qf.flags & QFF_ENCODE_ZERO) !== 0) {
		qf.flags |= QFF_ROUNDDOWN;
		qf.flags &= ~QFF_ENCODE_ZERO;
	}
	if (qf.high === 0 && (qf.flags & QFF_ENCODE_ZERO) !== 0) {
		qf.flags |= QFF_ROUNDUP;
		qf.flags &= ~QFF_ENCODE_ZERO;
	}
	if (qf.low > 0 || qf.high < 0) qf.flags &= ~QFF_ENCODE_ZERO;
	if ((qf.flags & QFF_ENCODE_INTEGERS) !== 0) qf.flags &= ~(QFF_ROUNDDOWN | 6);
};
const decodeQfloat = (reader, qfIndex) => {
	const qf = qfMapper.map[qfIndex];
	if (qf.flags !== 0) {
		if ((qf.flags & QFF_ROUNDDOWN) !== 0 && reader.readBoolean()) return qf.low;
		if ((qf.flags & QFF_ROUNDUP) !== 0 && reader.readBoolean()) return qf.high;
		if ((qf.flags & QFF_ENCODE_ZERO) !== 0 && reader.readBoolean()) return 0;
	}
	const bits = reader.ReadUBits(qf.bit_count);
	return qf.low + (qf.high - qf.low) * bits * qf.dec_mul;
};
//#endregion
//#region src/parser/entities/constructorFields.ts
const fieldTypeMap = {};
const isPointerFromName = (name) => {
	switch (name) {
		case "CBodyComponent":
		case "CLightComponent":
		case "CPhysicsComponent":
		case "CRenderComponent":
		case "CPlayerLocalData": return true;
		default: return false;
	}
};
const isPointer = (field) => {
	if (field.fieldType.pointer) return true;
	return isPointerFromName(field.fieldType.baseType);
};
const isArray = (field) => {
	if (field.fieldType.count !== null) {
		if (field.fieldType.baseType !== "char") return true;
	}
	return false;
};
const isVector = (field) => {
	if (field.serializer_name !== null) return true;
	if (field.fieldType.baseType === "CUtlVector") return true;
	if (field.fieldType.baseType === "CNetworkUtlVectorBase") return true;
	return false;
};
const getBaseFieldType = (baseName, count) => {
	const isFieldTypePointer = baseName.includes("*") || isPointerFromName(baseName);
	const baseNameFirst = baseName.split("[")[0];
	let elType = null;
	if (count !== null) elType = getBaseFieldType(baseNameFirst, null);
	const ft = {
		baseType: baseNameFirst,
		genericType: null,
		pointer: isFieldTypePointer,
		count,
		elementType: elType
	};
	fieldTypeMap[baseName] = ft;
	return ft;
};
const clearName = (name) => {
	return name.split("< ").shift().split(" >")[0];
};
const findFieldType = (name) => {
	const splitNames = name.split("< ");
	const baseName = splitNames.shift();
	let count = null;
	const bracketPos = name.indexOf("[");
	if (bracketPos !== -1) {
		const elementCountIt = name.slice(bracketPos + 1).split("]");
		count = parseInt(elementCountIt[0]);
	}
	if (!baseName) throw "No Base Name Found";
	const ft = getBaseFieldType(baseName, count);
	let lastType = ft;
	let genericName;
	while (genericName = splitNames.shift()) {
		const genericType = getBaseFieldType(clearName(genericName), null);
		lastType.genericType = genericType;
		lastType = genericType;
	}
	return ft;
};
const D_QUANTALIZED_FLOAT = 0;
const D_VECTOR_NORMAL = 1;
const D_VECTOR_NOSCALE = 2;
const D_VECTOR_FLOAT_COORD = 3;
const D_UNSIGNED64 = 4;
const D_CENTITY_HANDLE = 5;
const D_NOSCALE = 6;
const D_BOOLEAN = 7;
const D_STRING = 8;
const D_SIGNED = 9;
const D_UNSIGNED = 10;
const D_COMPONENT = 11;
const D_FLOAT_COORD = 12;
const D_FLOAT_SIMULATION_TIME = 13;
const D_FIXED64 = 14;
const D_QANGLE_PITCH_YAW = 15;
const D_QANGLE3 = 16;
const D_QANGLE_VAR = 17;
const D_BASE = 18;
const D_AMMO = 19;
const D_QANGLE_PRES = 20;
const D_GAME_MODE_RULES = 21;
const D_BINARY_BLOCK = 22;
const Decoders = {
	QuantalizedFloatDecoder: {
		type: D_QUANTALIZED_FLOAT,
		decoder: 0
	},
	VectorNormalDecoder: D_VECTOR_NORMAL,
	VectorNoscaleDecoder: D_VECTOR_NOSCALE,
	VectorFloatCoordDecoder: D_VECTOR_FLOAT_COORD,
	Unsigned64Decoder: D_UNSIGNED64,
	CentityHandleDecoder: D_CENTITY_HANDLE,
	NoscaleDecoder: D_NOSCALE,
	BooleanDecoder: D_BOOLEAN,
	StringDecoder: D_STRING,
	SignedDecoder: D_SIGNED,
	UnsignedDecoder: D_UNSIGNED,
	ComponentDecoder: D_COMPONENT,
	FloatCoordDecoder: D_FLOAT_COORD,
	FloatSimulationTimeDecoder: D_FLOAT_SIMULATION_TIME,
	Fixed64Decoder: D_FIXED64,
	QanglePitchYawDecoder: D_QANGLE_PITCH_YAW,
	Qangle3Decoder: D_QANGLE3,
	QangleVarDecoder: D_QANGLE_VAR,
	BaseDecoder: D_BASE,
	AmmoDecoder: D_AMMO,
	QanglePresDecoder: D_QANGLE_PRES,
	GameModeRulesDecoder: D_GAME_MODE_RULES,
	BinaryBlockDecoder: D_BINARY_BLOCK,
	ByteVectorDecoder: 23
};
const decoderMap = {
	bool: Decoders.BooleanDecoder,
	char: Decoders.StringDecoder,
	int16: Decoders.SignedDecoder,
	int32: Decoders.SignedDecoder,
	int64: Decoders.SignedDecoder,
	int8: Decoders.SignedDecoder,
	uint16: Decoders.UnsignedDecoder,
	uint32: Decoders.UnsignedDecoder,
	uint8: Decoders.UnsignedDecoder,
	color32: Decoders.UnsignedDecoder,
	GameTime_t: Decoders.NoscaleDecoder,
	CBodyComponent: Decoders.ComponentDecoder,
	CGameSceneNodeHandle: Decoders.UnsignedDecoder,
	Color: Decoders.UnsignedDecoder,
	CPhysicsComponent: Decoders.ComponentDecoder,
	CRenderComponent: Decoders.ComponentDecoder,
	CGlobalSymbol: Decoders.StringDecoder,
	CUtlBinaryBlock: Decoders.BinaryBlockDecoder,
	CUtlString: Decoders.StringDecoder,
	CUtlStringToken: Decoders.UnsignedDecoder,
	CUtlSymbolLarge: Decoders.StringDecoder,
	Quaternion: Decoders.NoscaleDecoder,
	CTransform: Decoders.NoscaleDecoder,
	HSequence: Decoders.Unsigned64Decoder,
	AttachmentHandle_t: Decoders.Unsigned64Decoder,
	CEntityIndex: Decoders.Unsigned64Decoder,
	MoveCollide_t: Decoders.Unsigned64Decoder,
	MoveType_t: Decoders.Unsigned64Decoder,
	RenderMode_t: Decoders.Unsigned64Decoder,
	RenderFx_t: Decoders.Unsigned64Decoder,
	SolidType_t: Decoders.Unsigned64Decoder,
	SurroundingBoundsType_t: Decoders.Unsigned64Decoder,
	ModelConfigHandle_t: Decoders.Unsigned64Decoder,
	NPC_STATE: Decoders.Unsigned64Decoder,
	StanceType_t: Decoders.Unsigned64Decoder,
	AbilityPathType_t: Decoders.Unsigned64Decoder,
	WeaponState_t: Decoders.Unsigned64Decoder,
	DoorState_t: Decoders.Unsigned64Decoder,
	RagdollBlendDirection: Decoders.Unsigned64Decoder,
	BeamType_t: Decoders.Unsigned64Decoder,
	BeamClipStyle_t: Decoders.Unsigned64Decoder,
	EntityDisolveType_t: Decoders.Unsigned64Decoder,
	tablet_skin_state_t: Decoders.Unsigned64Decoder,
	CStrongHandle: Decoders.Unsigned64Decoder,
	CSWeaponMode: Decoders.Unsigned64Decoder,
	ESurvivalSpawnTileState: Decoders.Unsigned64Decoder,
	SpawnStage_t: Decoders.Unsigned64Decoder,
	ESurvivalGameRuleDecision_t: Decoders.Unsigned64Decoder,
	RelativeDamagedDirection_t: Decoders.Unsigned64Decoder,
	CSPlayerState: Decoders.Unsigned64Decoder,
	MedalRank_t: Decoders.Unsigned64Decoder,
	CSPlayerBlockingUseAction_t: Decoders.Unsigned64Decoder,
	MoveMountingAmount_t: Decoders.Unsigned64Decoder,
	"QuestProgress::Reason": Decoders.Unsigned64Decoder
};
const FieldTypeEnum = generateEnum({
	Array: 0,
	Vector: 1,
	Serializer: 2,
	Pointer: 3,
	Value: 4,
	None: 5
}, "fieldType");
const FieldCategory = generateEnum({
	Pointer: 0,
	Vector: 1,
	Array: 2,
	Value: 3
}, "fieldCategory");
const initPointerField = (serializer) => {
	return {
		serializer,
		decoder: serializer.name === "CCSGameModeRules" ? Decoders.GameModeRulesDecoder : Decoders.BooleanDecoder
	};
};
var Field = class Field {
	type;
	value;
	constructor(type, value) {
		this.type = type;
		this.value = value;
	}
	clone() {
		switch (this.type) {
			case FieldTypeEnum.Value:
			case FieldTypeEnum.None:
			case FieldTypeEnum.Array:
			case FieldTypeEnum.Vector: return new Field(this.type, { ...this.value });
			case FieldTypeEnum.Serializer: {
				const value = this.value;
				return new Field(FieldTypeEnum["Serializer"], { serializer: {
					name: value.serializer.name,
					fields: value.serializer.fields.map((field) => field?.clone() ?? null)
				} });
			}
			case FieldTypeEnum.Pointer: {
				const value = this.value;
				return new Field(FieldTypeEnum["Pointer"], {
					serializer: {
						name: value.serializer.name,
						fields: value.serializer.fields.map((field) => field?.clone() ?? null)
					},
					decoder: value.decoder
				});
			}
			default: throw "ILLEGAL PATH #5";
		}
	}
	_getName() {
		switch (this.type) {
			case FieldTypeEnum.Array: return getNameExt(this.value.field_enum);
			case FieldTypeEnum.Vector: return getNameExt(this.value.field_enum);
			case FieldTypeEnum.Serializer: return this.value.serializer.name;
			case FieldTypeEnum.Pointer: return this.value.serializer.name;
			case FieldTypeEnum.Value: return this.value.name;
			case FieldTypeEnum.None: return "";
			default: throw "ILLEGAL PATH #5";
		}
	}
	_getInner(index) {
		switch (this.type) {
			case FieldTypeEnum.Array: return this.value.field_enum;
			case FieldTypeEnum.Vector: return this.value.field_enum;
			case FieldTypeEnum.Serializer: {
				const result = this.value.serializer.fields[index];
				if (!result) throw "ILLEGAL PATH #1";
				return result;
			}
			case FieldTypeEnum.Pointer: {
				const result = this.value.serializer.fields[index];
				if (!result) throw "ILLEGAL PATH #2";
				return result;
			}
			case FieldTypeEnum.Value:
			case FieldTypeEnum.None: throw "ILLEGAL PATH #3";
			default: throw "ILLEGAL PATH #4";
		}
	}
};
const getNameExt = (field) => {
	switch (field.type) {
		case FieldTypeEnum.Array: return getNameExt(field.value.field_enum);
		case FieldTypeEnum.Vector: return getNameExt(field.value.field_enum);
		case FieldTypeEnum.Serializer: return field.value.serializer.name;
		case FieldTypeEnum.Pointer: return field.value.serializer.name;
		case FieldTypeEnum.Value: return field.value.name;
		case FieldTypeEnum.None: return "";
		default: throw "ILLEGAL PATH #5";
	}
};
const getInnerExt = (field, index) => {
	switch (field.type) {
		case FieldTypeEnum.Array: return field.value.field_enum;
		case FieldTypeEnum.Vector: return field.value.field_enum;
		case FieldTypeEnum.Serializer: {
			const result = field.value.serializer.fields[index];
			if (!result) throw "ILLEGAL PATH #1";
			return result;
		}
		case FieldTypeEnum.Pointer: {
			const result = field.value.serializer.fields[index];
			if (!result) throw "ILLEGAL PATH #2x";
			return result;
		}
		case FieldTypeEnum.Value:
		case FieldTypeEnum.None: throw "ILLEGAL PATH #3";
		default: throw "ILLEGAL PATH #4";
	}
};
const constructorFieldHelper = {
	findCategory: (field) => {
		if (isPointer(field)) return FieldCategory.Pointer;
		if (isVector(field)) return FieldCategory.Vector;
		if (isArray(field)) return FieldCategory.Array;
		return FieldCategory.Value;
	},
	findVectorType: (field, n) => {
		if (n === 3 && field.encoder === "normal") return Decoders.VectorNormalDecoder;
		const floatType = constructorFieldHelper.findFloatDecoder(field);
		if (floatType === Decoders.NoscaleDecoder) return Decoders.VectorNoscaleDecoder;
		if (floatType === Decoders.FloatCoordDecoder) return Decoders.VectorFloatCoordDecoder;
		return Decoders.VectorNormalDecoder;
	},
	findFloatDecoder: (field) => {
		if (field.varName === "m_flSimulationTime" || field.varName === "m_flAnimTime") return Decoders.FloatSimulationTimeDecoder;
		if (field.encoder === "coord") return Decoders.FloatCoordDecoder;
		if (field.encoder === "m_flSimulationTime") return Decoders.FloatSimulationTimeDecoder;
		if (field.bitcount <= 0 || field.bitcount >= 32) return Decoders.NoscaleDecoder;
		const qf = getQuantalizedFloat(field.bitcount, field.encodeFlags, field.lowValue, field.highValue);
		const idx = qfMapper.idx;
		qfMapper.map[idx] = qf;
		qfMapper.idx++;
		return {
			type: D_QUANTALIZED_FLOAT,
			decoder: idx
		};
	},
	findUintDecoder: (field) => {
		if (field.encoder === "fixed64") return Decoders.Fixed64Decoder;
		return Decoders.Unsigned64Decoder;
	},
	findQAngleDecoder: (field) => {
		if (field.encoder === "m_angEyeAngles") return Decoders.QanglePitchYawDecoder;
		if (field.bitcount !== 0) return Decoders.Qangle3Decoder;
		return Decoders.QangleVarDecoder;
	},
	u32Tof32: (() => {
		const dataView = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
		return (input) => {
			dataView.setUint32(0, input);
			return dataView.getFloat32(0);
		};
	})(),
	decode: (reader, decoder) => {
		if (typeof decoder === "object") return decodeQfloat(reader, decoder.decoder);
		if (decoder === D_UNSIGNED) return reader.ReadUVarInt32();
		if (decoder === D_BOOLEAN) return reader.readBoolean();
		if (decoder === D_NOSCALE) return reader.readFloat32LE();
		switch (decoder) {
			case D_NOSCALE: return reader.readFloat32LE();
			case D_FLOAT_SIMULATION_TIME: return reader.ReadUVarInt32() * (1 / 30);
			case D_UNSIGNED: return reader.ReadUVarInt32();
			case D_QANGLE3: return reader.decodeQangleAll3();
			case D_SIGNED: return reader.readVarInt32();
			case D_VECTOR_NOSCALE: return reader.decodeVectorNoScale();
			case D_BOOLEAN: return reader.readBoolean();
			case D_BASE: return reader.ReadUVarInt32();
			case D_CENTITY_HANDLE: return reader.ReadUVarInt32();
			case D_COMPONENT: return reader.readBoolean();
			case D_FLOAT_COORD: return reader.readBitCoord();
			case D_STRING: return reader.readString();
			case D_QANGLE_PITCH_YAW: return reader.decodeQanglePitchYaw();
			case D_QANGLE_VAR: return reader.decodeQangleVariant();
			case D_VECTOR_NORMAL: return reader.decodeNormalVec();
			case D_UNSIGNED64: return reader.readUVarInt64();
			case D_FIXED64: return reader.decudeUint64();
			case D_VECTOR_FLOAT_COORD: return reader.decodeVectorFloatCoord();
			case D_AMMO: return reader.decodeAmmo();
			case D_QANGLE_PRES: return reader.decodeQangleVariantPres();
			case D_GAME_MODE_RULES: return reader.ReadUBits(7);
			case D_BINARY_BLOCK: {
				const length = reader.ReadUVarInt32();
				const out = new Uint8Array(length);
				reader.readBytes(out);
				return out;
			}
			default: throw Error("unknown decoder");
		}
	},
	findDecoder: (field) => {
		if (field.encoder === "qangle_precise") return Decoders.QanglePresDecoder;
		if (field.varName === "m_PredFloatVariables" || field.varName === "m_OwnerOnlyPredNetFloatVariables") return Decoders.NoscaleDecoder;
		if (field.varName === "m_OwnerOnlyPredNetVectorVariables" || field.varName === "m_PredVectorVariables") return Decoders.VectorNoscaleDecoder;
		if (field.varName === "m_pGameModeRules") return Decoders.GameModeRulesDecoder;
		if (field.varName === "m_iClip1") return Decoders.AmmoDecoder;
		if (field.fieldType.genericType && (field.fieldType.baseType === "CNetworkUtlVectorBase" || field.fieldType.baseType === "CUtlVectorEmbeddedNetworkVar" || field.fieldType.baseType === "CUtlVector")) {
			const innerDecoder = decoderMap[field.fieldType.genericType.baseType];
			if (innerDecoder) return innerDecoder;
		}
		const decoder = decoderMap[field.fieldType.baseType];
		if (decoder) return decoder;
		if (field.fieldType.baseType === "float32") return constructorFieldHelper.findFloatDecoder(field);
		if (field.fieldType.baseType === "Vector" || field.fieldType.baseType === "VectorWS") return constructorFieldHelper.findVectorType(field, 3);
		if (field.fieldType.baseType === "Vector2D") return constructorFieldHelper.findVectorType(field, 2);
		if (field.fieldType.baseType === "Vector4D") return constructorFieldHelper.findVectorType(field, 4);
		if (field.fieldType.baseType === "uint64") return constructorFieldHelper.findUintDecoder(field);
		if (field.fieldType.baseType === "QAngle") return constructorFieldHelper.findQAngleDecoder(field);
		if (field.fieldType.baseType === "CHandle") return Decoders.UnsignedDecoder;
		if (field.fieldType.baseType === "CNetworkedQuantizedFloat") return constructorFieldHelper.findFloatDecoder(field);
		if (field.fieldType.baseType === "CStrongHandle") return constructorFieldHelper.findUintDecoder(field);
		if (field.fieldType.baseType === "CEntityHandle") return constructorFieldHelper.findUintDecoder(field);
		return Decoders.UnsignedDecoder;
	},
	traverseFields: (fields, serializerName, map, currentEntityId, decoderMap) => {
		for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
			if (!fields[fieldIndex]) continue;
			const field = fields[fieldIndex];
			switch (field.type) {
				case FieldTypeEnum.Value: {
					const value = field.value;
					const result = `${serializerName}.${value.name}`;
					map[currentEntityId.id] = result;
					if (decoderMap) decoderMap[currentEntityId.id] = value.decoder;
					value.prop_id = currentEntityId.id;
					currentEntityId.id++;
					break;
				}
				case FieldTypeEnum.Serializer: {
					const value = field.value;
					const result = `${serializerName}.${value.serializer.name}`;
					constructorFieldHelper.traverseFields(value.serializer.fields, result, map, currentEntityId, decoderMap);
					break;
				}
				case FieldTypeEnum.Pointer: {
					const value = field.value;
					const result = `${serializerName}.${value.serializer.name}`;
					constructorFieldHelper.traverseFields(value.serializer.fields, result, map, currentEntityId, decoderMap);
					break;
				}
				case FieldTypeEnum.Array: {
					const value = field.value;
					switch (value.field_enum.type) {
						case FieldTypeEnum.Value: {
							const innerValue = value.field_enum.value;
							const result = `${serializerName}.${innerValue.name}`;
							map[currentEntityId.id] = result;
							if (decoderMap) decoderMap[currentEntityId.id] = innerValue.decoder;
							innerValue.prop_id = currentEntityId.id;
							currentEntityId.id++;
							break;
						}
						default: break;
					}
					break;
				}
				case FieldTypeEnum.Vector: {
					const inner = getInnerExt(field, 0);
					switch (inner.type) {
						case FieldTypeEnum.Serializer: {
							const value = inner.value;
							for (let idx = 0; idx < value.serializer.fields.length; idx++) {
								const innerField = value.serializer.fields[idx];
								if (!innerField) continue;
								switch (innerField.type) {
									case FieldTypeEnum.Value: {
										const innerFieldValue = innerField.value;
										const result = `${serializerName}.${innerFieldValue.name}`;
										map[currentEntityId.id] = result;
										if (decoderMap) decoderMap[currentEntityId.id] = innerFieldValue.decoder;
										innerFieldValue.prop_id = currentEntityId.id;
										currentEntityId.id++;
										break;
									}
									default: break;
								}
							}
							constructorFieldHelper.traverseFields(value.serializer.fields, `${serializerName}.${value.serializer.name}`, map, currentEntityId, decoderMap);
							break;
						}
						case FieldTypeEnum.Value: {
							const value = inner.value;
							const result = `${serializerName}.${value.name}`;
							map[currentEntityId.id] = result;
							if (decoderMap) decoderMap[currentEntityId.id] = field.value.isByteVector ? Decoders.ByteVectorDecoder : value.decoder;
							value.prop_id = currentEntityId.id;
							currentEntityId.id++;
							break;
						}
						default: break;
					}
					break;
				}
				default: break;
			}
		}
	},
	createField: (field, serializers) => {
		let elementField = null;
		if (field.serializer_name) {
			const serializer = serializers[field.serializer_name];
			if (!serializer) throw "NO SERIALIZER FOUND";
			if (field.category === FieldCategory.Pointer) elementField = new Field(FieldTypeEnum.Pointer, initPointerField(serializer));
			else elementField = new Field(FieldTypeEnum.Serializer, { serializer });
		} else elementField = new Field(FieldTypeEnum.Value, {
			decoder: field.decoder,
			prop_id: 0,
			name: field.varName
		});
		if (field.category === FieldCategory.Array) elementField = new Field(FieldTypeEnum.Array, {
			field_enum: elementField,
			length: field.fieldType.count ?? 0
		});
		else if (field.category === FieldCategory.Vector) {
			const isByteVector = !field.serializer_name && field.fieldType.genericType?.baseType === "uint8";
			elementField = new Field(FieldTypeEnum.Vector, {
				field_enum: elementField,
				decoder: Decoders.UnsignedDecoder,
				isByteVector
			});
		}
		return elementField;
	}
};
//#endregion
//#region src/parser/entities/classInfo.ts
const generateSerializableField = (field, serializerMessage) => {
	const name = serializerMessage.symbols.at(field.var_type_sym);
	const serName = field.field_serializer_name_sym !== void 0 ? serializerMessage.symbols.at(field.field_serializer_name_sym) : null;
	const encName = field.var_encoder_sym !== void 0 ? serializerMessage.symbols.at(field.var_encoder_sym) : "";
	const varName = serializerMessage.symbols.at(field.var_name_sym);
	const ft = findFieldType(name);
	const varType = name;
	const f = {
		fieldEnumType: null,
		bitcount: field.bit_count ?? 0,
		varName,
		varType,
		serializer_name: serName,
		encoder: encName,
		encodeFlags: field.encode_flags ?? 0,
		lowValue: field.low_value ?? 0,
		highValue: field.high_value ?? 0,
		fieldType: ft,
		decoder: Decoders.BaseDecoder,
		category: FieldCategory.Value
	};
	f.category = constructorFieldHelper.findCategory(f);
	f.decoder = constructorFieldHelper.findDecoder(f);
	return f;
};
const verifySerializerName = (serializerName) => {
	return serializerName.includes("Player") || serializerName.includes("Controller") || serializerName.includes("Team") || serializerName.includes("Weapon") || serializerName.includes("AK") || serializerName.includes("cell") || serializerName.includes("vec") || serializerName.includes("Projectile") || serializerName.includes("Knife") || serializerName.includes("CDEagle") || serializerName.includes("Rules") || serializerName.includes("C4") || serializerName.includes("Grenade") || serializerName.includes("Flash") || serializerName.includes("Molo") || serializerName.includes("Inc") || serializerName.includes("Infer");
};
const parseClassInfo = (sendTables, cDemoClassInfo) => {
	if (!sendTables.data) throw "NO SEND TABLES";
	const reader = new BitBuffer(sendTables.data);
	const size = reader.ReadUVarInt32();
	const msg = Buffer.allocUnsafe(size);
	reader.readBytes(msg);
	sendTables = null;
	const serializerMessage = CSVCMsg_FlattenedSerializer.decode(msg);
	const fields = [];
	for (const field of serializerMessage.fields) fields.push(generateSerializableField(field, serializerMessage));
	const map = {};
	const propIdToName = {};
	const propIdToDecoder = {};
	const classById = [];
	const currentEntityId = { id: 1e3 };
	for (const serializer of serializerMessage.serializers) {
		const serializerName = serializerMessage.symbols[serializer.serializer_name_sym];
		const fieldsForThisSerializer = [];
		for (let i = 0; i < serializer.fields_index.length; i++) {
			const field = fields[serializer.fields_index[i]];
			if (!field) continue;
			if (field.fieldEnumType === null) field.fieldEnumType = constructorFieldHelper.createField(field, map);
			const fieldType = field.fieldEnumType;
			if (fieldType !== null) fieldsForThisSerializer[i] = fieldType.clone();
		}
		const serializerValue = {
			name: serializerName,
			fields: fieldsForThisSerializer
		};
		if (verifySerializerName(serializerName)) constructorFieldHelper.traverseFields(fieldsForThisSerializer, serializerName, propIdToName, currentEntityId, propIdToDecoder);
		map[serializerName] = serializerValue;
	}
	for (const classT of cDemoClassInfo.classes) {
		const clsId = classT.class_id;
		const networkname = classT.network_name;
		const serializer = map[networkname];
		if (serializer) {
			if (clsId === void 0) continue;
			classById[clsId] = {
				class_id: clsId,
				name: networkname,
				serializer
			};
		}
	}
	return {
		classes: classById,
		propIdToName,
		propIdToDecoder
	};
};
//#endregion
//#region src/parser/entities/fieldPathOps.ts
const popSpecial = (fieldPath, n) => {
	for (let i = 0; i < n; i++) {
		fieldPath.path[fieldPath.last] = 0;
		fieldPath.last--;
	}
};
function doOp(opcode, bitreader, fieldPath) {
	switch (opcode) {
		case 0: return plusOne(bitreader, fieldPath);
		case 1: return plusTwo(bitreader, fieldPath);
		case 2: return plusThree(bitreader, fieldPath);
		case 3: return plusFour(bitreader, fieldPath);
		case 4: return plusN(bitreader, fieldPath);
		case 5: return pushOneLeftDeltaZeroRightZero(bitreader, fieldPath);
		case 6: return pushOneLeftDeltaZeroRightNonZero(bitreader, fieldPath);
		case 7: return pushOneLeftDeltaOneRightZero(bitreader, fieldPath);
		case 8: return pushOneLeftDeltaOneRightNonZero(bitreader, fieldPath);
		case 9: return pushOneLeftDeltaNRightZero(bitreader, fieldPath);
		case 10: return pushOneLeftDeltaNRightNonZero(bitreader, fieldPath);
		case 11: return pushOneLeftDeltaNRightNonZeroPack6Bits(bitreader, fieldPath);
		case 12: return pushOneLeftDeltaNRightNonZeroPack8Bits(bitreader, fieldPath);
		case 13: return pushTwoLeftDeltaZero(bitreader, fieldPath);
		case 14: return pushTwoPack5LeftDeltaZero(bitreader, fieldPath);
		case 15: return pushThreeLeftDeltaZero(bitreader, fieldPath);
		case 16: return pushThreePack5LeftDeltaZero(bitreader, fieldPath);
		case 17: return pushTwoLeftDeltaOne(bitreader, fieldPath);
		case 18: return pushTwoPack5LeftDeltaOne(bitreader, fieldPath);
		case 19: return pushThreeLeftDeltaOne(bitreader, fieldPath);
		case 20: return pushThreePack5LeftDeltaOne(bitreader, fieldPath);
		case 21: return pushTwoLeftDeltaN(bitreader, fieldPath);
		case 22: return pushTwoPack5LeftDeltaN(bitreader, fieldPath);
		case 23: return pushThreeLeftDeltaN(bitreader, fieldPath);
		case 24: return pushThreePack5LeftDeltaN(bitreader, fieldPath);
		case 25: return pushN(bitreader, fieldPath);
		case 26: return pushNAndNonTopological(bitreader, fieldPath);
		case 27: return popOnePlusOne(bitreader, fieldPath);
		case 28: return popOnePlusN(bitreader, fieldPath);
		case 29: return popAllButOnePlusOne(bitreader, fieldPath);
		case 30: return popAllButOnePlusN(bitreader, fieldPath);
		case 31: return popAllButOnePlusNPack3Bits(bitreader, fieldPath);
		case 32: return popAllButOnePlusNPack6Bits(bitreader, fieldPath);
		case 33: return popNPlusOne(bitreader, fieldPath);
		case 34: return popNPlusN(bitreader, fieldPath);
		case 35: return popNAndNonTopographical(bitreader, fieldPath);
		case 36: return nonTopoComplex(bitreader, fieldPath);
		case 37: return nonTopoPenultimatePlusOne(bitreader, fieldPath);
		case 38: return nonTopoComplexPack4Bits(bitreader, fieldPath);
		case 39: return;
		default: throw "PathError.GenericPathOpError";
	}
}
function plusOne(_, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
}
function plusTwo(_, fieldPath) {
	fieldPath.path[fieldPath.last] += 2;
}
function plusThree(_, fieldPath) {
	fieldPath.path[fieldPath.last] += 3;
}
function plusFour(_, fieldPath) {
	fieldPath.path[fieldPath.last] += 4;
}
function plusN(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp() + 5;
}
function pushOneLeftDeltaZeroRightZero(_, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = 0;
}
function pushOneLeftDeltaZeroRightNonZero(bitreader, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushOneLeftDeltaOneRightZero(_, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = 0;
}
function pushOneLeftDeltaOneRightNonZero(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.readUbitVarFp();
}
function pushOneLeftDeltaNRightZero(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = 0;
}
function pushOneLeftDeltaNRightNonZero(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp() + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.readUbitVarFp() + 1;
}
function pushOneLeftDeltaNRightNonZeroPack6Bits(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(3) + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(3) + 1;
}
function pushOneLeftDeltaNRightNonZeroPack8Bits(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(4) + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(4) + 1;
}
function pushTwoLeftDeltaZero(bitreader, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushTwoPack5LeftDeltaZero(bitreader, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(5);
}
function pushThreeLeftDeltaZero(bitreader, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushThreePack5LeftDeltaZero(bitreader, fieldPath) {
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] = bitreader.ReadUBits(5);
}
function pushTwoLeftDeltaOne(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushTwoPack5LeftDeltaOne(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
}
function pushThreeLeftDeltaOne(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushThreePack5LeftDeltaOne(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += 1;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
}
function pushTwoLeftDeltaN(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVar() + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushTwoPack5LeftDeltaN(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVar() + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
}
function pushThreeLeftDeltaN(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVar() + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
}
function pushThreePack5LeftDeltaN(bitreader, fieldPath) {
	fieldPath.path[fieldPath.last] += bitreader.readUbitVar() + 2;
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
	fieldPath.last += 1;
	fieldPath.path[fieldPath.last] += bitreader.ReadUBits(5);
}
function pushN(bitreader, fieldPath) {
	const n = bitreader.readUbitVar();
	fieldPath.path[fieldPath.last] += bitreader.readUbitVar();
	for (let i = 0; i < n; i++) {
		fieldPath.last += 1;
		fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp();
	}
}
function pushNAndNonTopological(bitreader, fieldPath) {
	for (let i = 0; i < fieldPath.last + 1; i++) if (bitreader.readBoolean()) fieldPath.path[i] += bitreader.readVarInt32() + 1;
	const count = bitreader.readUbitVar();
	for (let i = 0; i < count; i++) {
		fieldPath.last += 1;
		fieldPath.path[fieldPath.last] = bitreader.readUbitVarFp();
	}
}
function popOnePlusOne(_, fieldPath) {
	popSpecial(fieldPath, 1);
	fieldPath.path[fieldPath.last] += 1;
}
function popOnePlusN(bitreader, fieldPath) {
	popSpecial(fieldPath, 1);
	fieldPath.path[fieldPath.last] += bitreader.readUbitVarFp() + 1;
}
function popAllButOnePlusOne(_, fieldPath) {
	popSpecial(fieldPath, fieldPath.last);
	fieldPath.path[0] += 1;
}
function popAllButOnePlusN(bitreader, fieldPath) {
	popSpecial(fieldPath, fieldPath.last);
	fieldPath.path[0] += bitreader.readUbitVarFp() + 1;
}
function popAllButOnePlusNPack3Bits(bitreader, fieldPath) {
	popSpecial(fieldPath, fieldPath.last);
	fieldPath.path[0] += bitreader.ReadUBits(3) + 1;
}
function popAllButOnePlusNPack6Bits(bitreader, fieldPath) {
	popSpecial(fieldPath, fieldPath.last);
	fieldPath.path[0] += bitreader.ReadUBits(6) + 1;
}
function popNPlusOne(bitreader, fieldPath) {
	popSpecial(fieldPath, bitreader.readUbitVarFp());
	fieldPath.path[fieldPath.last] += 1;
}
function popNPlusN(bitreader, fieldPath) {
	popSpecial(fieldPath, bitreader.readUbitVarFp());
	fieldPath.path[fieldPath.last] += bitreader.readVarInt32();
}
function popNAndNonTopographical(bitreader, fieldPath) {
	popSpecial(fieldPath, bitreader.readUbitVarFp());
	for (let i = 0; i < fieldPath.last + 1; i++) if (bitreader.readBoolean()) fieldPath.path[i] += bitreader.readVarInt32();
}
function nonTopoComplex(bitreader, fieldPath) {
	for (let i = 0; i < fieldPath.last + 1; i++) if (bitreader.readBoolean()) {
		const val = bitreader.readVarInt32();
		fieldPath.path[i] += val;
	}
}
function nonTopoPenultimatePlusOne(_, fieldPath) {
	fieldPath.path[fieldPath.last - 1] += 1;
}
function nonTopoComplexPack4Bits(bitreader, fieldPath) {
	for (let i = 0; i < fieldPath.last + 1; i++) if (bitreader.readBoolean()) fieldPath.path[i] += bitreader.ReadUBits(4) - 7;
}
//#endregion
//#region src/parser/entities/fieldPaths.ts
const STOP_READING_SYMBOL = 39;
const HUFFMAN_CODE_MAXLEN = 17;
const LUT_SIZE = 1 << HUFFMAN_CODE_MAXLEN;
function compareTreeNodes(a, b) {
	if (a.weight === b.weight) return b.value - a.value;
	else return a.weight - b.weight;
}
function getTree(freq) {
	const nodes = [];
	for (const [value, weight] of freq) nodes.push({
		value,
		weight: weight === 0 ? 1 : weight,
		left: null,
		right: null,
		leaf: true
	});
	let n = nodes.length;
	while (nodes.length > 1) {
		nodes.sort(compareTreeNodes);
		const left = nodes.shift();
		const right = nodes.shift();
		const parent = {
			value: n,
			weight: left?.weight + right?.weight,
			left,
			right,
			leaf: false
		};
		nodes.push(parent);
		n++;
	}
	return nodes[0];
}
const getHuffmanTree = () => {
	const fieldPathTable = [
		36271,
		10334,
		1375,
		646,
		4128,
		35,
		3,
		521,
		2942,
		560,
		471,
		10530,
		251,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		310,
		2,
		0,
		1837,
		149,
		300,
		634,
		0,
		0,
		1,
		76,
		271,
		99,
		25474
	];
	const freq = [];
	fieldPathTable.forEach((weight, index) => {
		freq[index] = [index, weight];
	});
	return getTree(freq);
};
const huffmanTree = getHuffmanTree();
const huffmanSymbol = new Uint8Array(LUT_SIZE);
const huffmanLength = new Uint8Array(LUT_SIZE);
function buildLUT(node, code, depth) {
	if (node.leaf) {
		const count = 1 << HUFFMAN_CODE_MAXLEN - depth;
		for (let i = 0; i < count; i++) {
			const idx = code | i << depth;
			huffmanSymbol[idx] = node.value;
			huffmanLength[idx] = depth;
		}
		return;
	}
	buildLUT(node.left, code, depth + 1);
	buildLUT(node.right, code | 1 << depth, depth + 1);
}
buildLUT(huffmanTree, 0, 0);
const parsePaths = (reader, entityParser) => {
	const fieldPath = {
		path: [
			-1,
			0,
			0,
			0,
			0,
			0,
			0
		],
		last: 0
	};
	let idx = 0;
	while (true) {
		const peeked = reader.PeekUBitsWithLog(HUFFMAN_CODE_MAXLEN);
		const symbol = huffmanSymbol[peeked];
		const codeLen = huffmanLength[peeked];
		reader.consumePeeked(codeLen);
		if (symbol === STOP_READING_SYMBOL) break;
		doOp(symbol, reader, fieldPath);
		entityParser.writeFp(fieldPath, idx);
		idx++;
	}
	return idx;
};
//#endregion
//#region src/parser/entities/entityParser.ts
const NSERIALBITS = 17;
const EntityTypeEnum = generateEnum({
	PlayerController: 0,
	Rules: 1,
	Projectile: 2,
	Team: 3,
	Normal: 4,
	C4: 5
}, "entityType");
const getEntityType = (name) => {
	if (name === "CCSPlayerController") return EntityTypeEnum.PlayerController;
	if (name === "CCSGameRulesProxy") return EntityTypeEnum.Rules;
	if (name === "CTeam") return EntityTypeEnum.Team;
	if (name === "CC4") return EntityTypeEnum.C4;
	if (name.includes("Projectile") || name === "CIncendiaryGrenade") return EntityTypeEnum.Projectile;
	return EntityTypeEnum.Normal;
};
const _fieldResult = {
	decoder: 0,
	propId: 0,
	hasInfo: false,
	byteVectorOp: 0,
	elementIndex: 0
};
const findFieldAndDecode = (fp, ser) => {
	const f = ser.fields[fp.path[0]];
	if (!f) throw "Noo field";
	_fieldResult.byteVectorOp = 0;
	if (fp.last === 0 && f.type === FieldTypeEnum.Value) {
		const v = f.value;
		_fieldResult.decoder = v.decoder;
		_fieldResult.propId = v.prop_id;
		_fieldResult.hasInfo = true;
		return _fieldResult;
	}
	let field = f;
	let parent = null;
	for (let depth = 1; depth <= fp.last; depth++) {
		parent = field;
		field = getInnerExt(field, fp.path[depth]);
	}
	const type = field.type;
	if (type === FieldTypeEnum.Value) {
		const v = field.value;
		_fieldResult.decoder = v.decoder;
		_fieldResult.propId = v.prop_id;
		_fieldResult.hasInfo = true;
		if (parent !== null) {
			if (parent.type === FieldTypeEnum.Vector) {
				_fieldResult.byteVectorOp = parent.value.isByteVector ? 2 : 4;
				_fieldResult.elementIndex = fp.path[fp.last];
			} else if (parent.type === FieldTypeEnum.Array) {
				_fieldResult.byteVectorOp = 4;
				_fieldResult.elementIndex = fp.path[fp.last];
			}
		}
		return _fieldResult;
	}
	if (type === FieldTypeEnum.Vector) {
		_fieldResult.decoder = Decoders.UnsignedDecoder;
		const inner = getInnerExt(field, 0);
		if (inner.type === FieldTypeEnum.Value) {
			_fieldResult.propId = inner.value.prop_id;
			_fieldResult.hasInfo = true;
			_fieldResult.byteVectorOp = field.value.isByteVector ? 1 : 3;
		} else _fieldResult.hasInfo = false;
		return _fieldResult;
	}
	if (type === FieldTypeEnum.Pointer) {
		_fieldResult.decoder = field.value.decoder;
		_fieldResult.hasInfo = false;
		return _fieldResult;
	}
	_fieldResult.decoder = Decoders.UnsignedDecoder;
	_fieldResult.hasInfo = false;
	return _fieldResult;
};
var EntityParser = class {
	paths;
	entities;
	cachedBitBuffer = new BitBuffer(new Uint8Array(0));
	cachedBitBuffer2 = new BitBuffer(new Uint8Array(0));
	tick = 0;
	directEntities = null;
	directPropIdToName = null;
	onlyGameRules = false;
	constructor(classInfo, enqueueEvent) {
		this.classInfo = classInfo;
		this.enqueueEvent = enqueueEvent;
		const paths = [];
		for (let i = 0; i < 8192; i++) paths.push({
			path: [
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			last: 0
		});
		this.paths = paths;
		this.entities = {};
	}
	decodeEntityUpdate = (reader, entityId, nUpdates) => {
		const entityClassId = this.entities[entityId];
		if (entityClassId === void 0) throw new Error(`No entiy with id ${entityId}`);
		const cls = this.classInfo.classes[entityClassId];
		if (!cls) throw "No class";
		const serializer = cls.serializer;
		const paths = this.paths;
		const directEntities = this.directEntities;
		const directPropIdToName = this.directPropIdToName;
		const ent = directEntities ? directEntities[entityId] : null;
		const entProps = ent ? ent.properties : null;
		const classPropIdToName = this.classInfo.propIdToName;
		const emitEntityUpdates = !directEntities;
		let i = 0;
		while (i < nUpdates) {
			const path = paths[i];
			const info = findFieldAndDecode(path, serializer);
			const result = constructorFieldHelper.decode(reader, info.decoder);
			if (info.hasInfo) {
				if (entProps) {
					const name = directPropIdToName[info.propId];
					if (name !== void 0) if (info.byteVectorOp === 0) entProps[name] = result;
					else if (info.byteVectorOp === 1) {
						const count = result;
						const existing = entProps[name];
						if (!(existing instanceof Uint8Array) || existing.length !== count) {
							const arr = new Uint8Array(count);
							if (existing instanceof Uint8Array) arr.set(existing.subarray(0, Math.min(existing.length, count)));
							entProps[name] = arr;
						}
					} else if (info.byteVectorOp === 2) {
						let arr = entProps[name];
						const idx = info.elementIndex;
						if (!(arr instanceof Uint8Array) || idx >= arr.length) {
							const len = arr instanceof Uint8Array ? Math.max(arr.length, idx + 1) : idx + 1;
							const grown = new Uint8Array(len);
							if (arr instanceof Uint8Array) grown.set(arr);
							arr = grown;
							entProps[name] = arr;
						}
						arr[idx] = result;
					} else if (info.byteVectorOp === 3) {
						const count = result;
						const existing = entProps[name];
						if (!Array.isArray(existing)) entProps[name] = new Array(count);
						else if (existing.length !== count) existing.length = count;
					} else {
						let arr = entProps[name];
						const idx = info.elementIndex;
						if (!Array.isArray(arr)) {
							arr = [];
							entProps[name] = arr;
						}
						arr[idx] = result;
					}
				} else if (emitEntityUpdates && classPropIdToName[info.propId] !== void 0) this.enqueueEvent("entityupdated", {
					entityId,
					propId: info.propId,
					value: result
				});
			}
			i++;
		}
		return i;
	};
	checkEntityType = (classId) => {
		const cls = this.classInfo.classes[classId];
		if (!cls) throw "NO CLASS";
		return getEntityType(cls.name);
	};
	writeFp(fp_src, idx) {
		const target = this.paths[idx];
		const last = fp_src.last;
		target.last = last;
		target.path[0] = fp_src.path[0];
		if (last >= 1) {
			target.path[1] = fp_src.path[1];
			if (last >= 2) {
				target.path[2] = fp_src.path[2];
				if (last >= 3) for (let i = 3; i <= last; i++) target.path[i] = fp_src.path[i];
			}
		}
	}
	createEntity = (reader, entityId, baselines) => {
		const classId = reader.ReadUBits(8);
		reader.ReadUBits(NSERIALBITS);
		reader.ReadUVarInt32();
		const entityType = this.checkEntityType(classId);
		const cls = this.classInfo.classes[classId];
		this.enqueueEvent("entitycreated", [
			entityId,
			classId,
			entityType,
			cls.name
		]);
		if (entityId > 1e5) throw "Possible OOM";
		this.entities[entityId] = classId;
		if (this.directEntities && (!this.onlyGameRules || entityType === EntityTypeEnum.Rules)) this.directEntities[entityId] = {
			classId,
			entityType,
			className: cls.name,
			properties: {}
		};
		if (baselines !== null) {
			const baseline = baselines[classId];
			if (baseline) {
				const baselineReader = this.cachedBitBuffer.setTo(baseline);
				this.updateEntity(baselineReader, entityId);
			}
		}
	};
	updateEntity = (reader, entityId) => {
		const nUpdates = parsePaths(reader, this);
		this.decodeEntityUpdate(reader, entityId, nUpdates);
	};
	parseEntityPacket = (msg, baseline) => {
		const reader = this.cachedBitBuffer2.setTo(msg.entity_data);
		const hasPvsVisBits = msg.has_pvs_vis_bits_deprecated ?? 0;
		let entityId = -1;
		const max = msg.updated_entries;
		for (let i = 0; i < max; i++) {
			entityId += 1 + reader.readUbitVar();
			const updateType = reader.ReadUBits(2);
			if ((updateType & 1) !== 0) {
				if (updateType === 3) {
					this.entities[entityId] = void 0;
					if (this.directEntities) this.directEntities[entityId] = void 0;
					this.enqueueEvent("entitydeleted", entityId);
				}
			} else if (updateType === 2) {
				this.createEntity(reader, entityId, baseline);
				this.updateEntity(reader, entityId);
			} else {
				if (hasPvsVisBits > 0) {
					if ((reader.ReadUBits(2) & 1) === 1) continue;
				}
				this.updateEntity(reader, entityId);
			}
		}
	};
};
//#endregion
//#region src/binary-encoding/index.ts
var BinaryReaderEditable = class extends BinaryReader {
	buf;
	len;
	constructor(buf) {
		super(buf);
		this.buf = buf;
		this.len = buf.length;
		this.pos = 0;
		this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	setTo(buf) {
		this.buf = buf;
		this.len = buf.length;
		this.pos = 0;
		this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	}
};
//#endregion
//#region src/parser/entities/allocator.ts
const BUFFER_SIZE = 128 * 1024;
function createAllocator(bufferSize = BUFFER_SIZE) {
	const buffer = Buffer.alloc(bufferSize);
	const blocks = [{
		offset: 0,
		size: bufferSize,
		free: true
	}];
	function alloc(size) {
		if (size <= 0) throw new RangeError("size must be > 0");
		const idx = blocks.findIndex((b) => b.free && b.size >= size);
		if (idx === -1) throw new Error(`Out of memory: cannot allocate ${size} bytes`);
		const block = blocks[idx];
		if (block.size > size) blocks.splice(idx + 1, 0, {
			offset: block.offset + size,
			size: block.size - size,
			free: true
		});
		block.size = size;
		block.free = false;
		const view = new Uint8Array(buffer.buffer, block.offset, size);
		view.fill(0);
		return view;
	}
	function free(view) {
		if (!(view instanceof Uint8Array)) throw new TypeError("Expected a Uint8Array");
		const offset = view.byteOffset;
		const idx = blocks.findIndex((b) => b.offset === offset && !b.free);
		if (idx === -1) throw new Error("Pointer not recognised or already freed");
		blocks[idx].free = true;
		if (idx + 1 < blocks.length && blocks[idx + 1].free) {
			blocks[idx].size += blocks[idx + 1].size;
			blocks.splice(idx + 1, 1);
		}
		if (idx > 0 && blocks[idx - 1].free) {
			blocks[idx - 1].size += blocks[idx].size;
			blocks.splice(idx, 1);
		}
	}
	function reset() {
		blocks.length = 1;
		blocks[0] = {
			offset: 0,
			size: bufferSize,
			free: true
		};
	}
	function stats() {
		const used = blocks.filter((b) => !b.free).reduce((s, b) => s + b.size, 0);
		return {
			totalBytes: bufferSize,
			usedBytes: used,
			freeBytes: bufferSize - used,
			blocks: blocks.length
		};
	}
	return {
		alloc,
		free,
		reset,
		stats
	};
}
//#endregion
//#region src/parser/entities/parseSession.ts
var ParseSession = class ParseSession {
	static PACKET_TEMP_BUFFER = new Uint8Array(/* @__PURE__ */ new ArrayBuffer(2 ** 18));
	static entityAllocator = createAllocator();
	static READ_BUFFER_SIZE = 4 * 1024 * 1024;
	_frameBuf;
	_frameOffset = 0;
	_frameLimit = 0;
	_frameMarked = 0;
	chunks = [];
	fd = null;
	readBuffer = null;
	fileOffset = 0;
	fileSize = 0;
	entityParser = null;
	sendTables = null;
	baselines = [];
	currentTick = -1;
	eventQueue = [];
	cachedBitBuffer = new BitBuffer(new Uint8Array(0));
	binaryR = new BinaryReaderEditable(new Uint8Array(0));
	binaryR2 = new BinaryReaderEditable(new Uint8Array(0));
	entityMode;
	parser;
	emitMainQueue;
	settings;
	enqueueEvent = (eventName, data) => {
		this.eventQueue.push([eventName, data]);
	};
	_stringTables = [];
	_broadcastMode = false;
	constructor(buffer, entityMode, emitMainQueue, parser, settings) {
		this._frameBuf = buffer;
		this._frameOffset = 16;
		this._frameLimit = buffer.length;
		this.entityMode = entityMode;
		this.parser = parser ?? null;
		this.emitMainQueue = emitMainQueue;
		this.settings = settings;
	}
	/** Create a session that reads from a file in fixed-size chunks instead of loading the entire file into memory. */
	static fromFile(filePath, entityMode, emitMainQueue, parser, opts) {
		const fd = fs.openSync(filePath, "r");
		const fileSize = fs.fstatSync(fd).size;
		const readBuffer = Buffer.alloc(ParseSession.READ_BUFFER_SIZE);
		const initialRead = Math.min(readBuffer.length, fileSize);
		fs.readSync(fd, readBuffer, 0, initialRead, 0);
		const session = new ParseSession(readBuffer.subarray(0, initialRead), entityMode, emitMainQueue, parser, opts);
		session.fd = fd;
		session.readBuffer = readBuffer;
		session.fileOffset = initialRead;
		session.fileSize = fileSize;
		return session;
	}
	/**
	* Create a session for HTTP broadcast parsing. The session has no source
	* buffer and no file descriptor; commands are fed via
	* {@link ParseSession.pushBroadcastFragment}.
	*/
	static forBroadcast(entityMode, emitMainQueue, parser, settings) {
		const session = new ParseSession(new Uint8Array(0), entityMode, emitMainQueue, parser, settings);
		session._frameOffset = 0;
		session._frameLimit = 0;
		session._broadcastMode = true;
		return session;
	}
	_frameRemaining() {
		return this._frameLimit - this._frameOffset;
	}
	_frameReadVarint32() {
		const buf = this._frameBuf;
		let offset = this._frameOffset;
		let result = 0;
		let shift = 0;
		let b;
		do {
			b = buf[offset++];
			result |= (b & 127) << shift;
			shift += 7;
		} while ((b & 128) !== 0 && shift < 35);
		this._frameOffset = offset;
		return result;
	}
	_frameSkip(n) {
		this._frameOffset += n;
	}
	/** Run synchronous parse to completion. */
	runSync() {
		if (this._broadcastMode) throw new Error("runSync is not supported on broadcast sessions; use pushBroadcastFragment");
		try {
			this.runFrameLoop();
		} finally {
			this.closeFd();
		}
		this.flush();
	}
	/** Run non-blocking parse to completion, yielding to the event loop periodically. */
	async runAsync() {
		if (this._broadcastMode) throw new Error("runAsync is not supported on broadcast sessions; use pushBroadcastFragment");
		let forceBreak = false;
		this.parser?.on("cancel", () => {
			forceBreak = true;
		});
		let frameCount = 0;
		let lastYieldTime = Date.now();
		try {
			while (true) {
				if (forceBreak) break;
				try {
					if (++frameCount % 5e3 === 0) this.enqueueEvent("progress", this.getProgress());
					if (!this.readFrame()) break;
					const now = Date.now();
					if (now - lastYieldTime >= 16) {
						lastYieldTime = now;
						await new Promise((resolve) => setTimeout(resolve, 0));
					}
				} catch (e) {
					if (e instanceof RangeError) this.enqueueEvent("end", { incomplete: true });
					else {
						const error = e instanceof Error ? e : /* @__PURE__ */ new Error(`Exception during parsing: ${e}`);
						this.enqueueEvent("debug", JSON.stringify(this.dumpState()));
						this.enqueueEvent("error", { error: e });
						this.enqueueEvent("end", {
							error,
							incomplete: false
						});
					}
					break;
				}
			}
		} finally {
			this.closeFd();
		}
		this.flush();
	}
	runFrameLoop() {
		let forceBreak = false;
		this.parser?.on("cancel", () => {
			forceBreak = true;
		});
		let frameCount = 0;
		while (true) {
			if (forceBreak) break;
			try {
				if (++frameCount % 5e3 === 0) this.enqueueEvent("progress", this.getProgress());
				if (!this.readFrame()) break;
			} catch (e) {
				if (e instanceof RangeError) this.enqueueEvent("end", { incomplete: true });
				else {
					const error = e instanceof Error ? e : /* @__PURE__ */ new Error(`Exception during parsing: ${e}`);
					this.enqueueEvent("debug", JSON.stringify(this.dumpState()));
					this.enqueueEvent("error", { error: e });
					this.enqueueEvent("end", {
						error,
						incomplete: false
					});
				}
				break;
			}
		}
	}
	getProgress() {
		return this.fd !== null ? this.fileOffset / this.fileSize : this._frameOffset / this._frameLimit;
	}
	closeFd() {
		if (this.fd !== null) {
			fs.closeSync(this.fd);
			this.fd = null;
		}
	}
	/** Push a stream chunk for incremental parsing. */
	pushChunk(chunk) {
		if (this._broadcastMode) throw new Error("pushChunk is not supported on broadcast sessions; use pushBroadcastFragment");
		this.chunks.push(chunk);
	}
	/**
	* Process all available frames from buffered data.
	* Returns false if DEM_Stop was reached (parsing complete), true if waiting for more data.
	*/
	processFrames() {
		if (this._broadcastMode) throw new Error("processFrames is not supported on broadcast sessions; use pushBroadcastFragment");
		while (this._frameRemaining() > 0 || this.chunks.length > 0) {
			this._frameMarked = this._frameOffset;
			try {
				if (!this.readFrame()) return false;
			} catch (e) {
				if (e instanceof RangeError) {
					this._frameOffset = Math.max(0, this._frameMarked);
					return true;
				}
				throw e;
			}
		}
		return true;
	}
	/**
	* Process one HTTP-broadcast fragment.
	*
	* Walks the broadcast wire format
	* `[uvarint cmd][LE u32 tick][byte 0][LE u32 size][payload]` and dispatches
	* each command via the same `handleFrame` path used by file/stream parsing.
	*
	* @param buf            the fragment bytes (not snappy-compressed at this layer; per-command compression is handled by handleFrame).
	* @param tickOffset     -1 for `/start` fragments, 0 for `/full` and `/delta`.
	* @returns `{ ended: true }` if a `command === 0` end-of-stream marker was reached.
	*/
	pushBroadcastFragment(buf, tickOffset) {
		let off = 0;
		const len = buf.length;
		const readUVarInt32 = () => {
			let result = 0;
			let shift = 0;
			let b;
			do {
				if (off >= len) throw new RangeError("Truncated broadcast fragment (varint)");
				b = buf[off++];
				result |= (b & 127) << shift;
				shift += 7;
			} while ((b & 128) !== 0 && shift < 35);
			return result >>> 0;
		};
		const readLEUInt32 = () => {
			if (off + 4 > len) throw new RangeError("Truncated broadcast fragment (uint32)");
			const v = (buf[off] | buf[off + 1] << 8 | buf[off + 2] << 16 | buf[off + 3] << 24) >>> 0;
			off += 4;
			return v;
		};
		while (off < len) {
			const command = readUVarInt32();
			const rawTick = readLEUInt32() | 0;
			if (off >= len) throw new RangeError("Truncated broadcast fragment (reserved byte)");
			const reserved = buf[off++];
			if (reserved !== 0) this.enqueueEvent("debug", `broadcast fragment reserved byte was 0x${reserved.toString(16)}, expected 0`);
			if (command === 0) {
				if (this.currentTick !== -1) this.enqueueEvent("tickend", this.currentTick);
				this.enqueueEvent("end", {
					incomplete: false,
					reason: "stop"
				});
				this._resetFrameState();
				if (this.eventQueue.length > 0) this.emitMainQueue(this.eventQueue, 0, false);
				return { ended: true };
			}
			const size = readLEUInt32();
			if (off + size > len) throw new RangeError(`Truncated broadcast fragment (payload, want ${size} bytes, ${len - off} available)`);
			let tick = rawTick + tickOffset;
			if (tick < 0) tick = -1;
			if (this.currentTick !== tick) {
				if (this.currentTick !== -1) this.enqueueEvent("tickend", this.currentTick);
				this.currentTick = tick;
				this.enqueueEvent("tickstart", this.currentTick);
			}
			const commandType = command & ~EDemoCommands.DEM_IsCompressed;
			const isCompressed = (command & EDemoCommands.DEM_IsCompressed) !== 0;
			const decoder = decoders[commandType];
			if (!decoder) {
				off += size;
				continue;
			}
			this._frameBuf = buf;
			this._frameOffset = off;
			this._frameLimit = off + size;
			if (commandType === EDemoCommands.DEM_Packet || commandType === EDemoCommands.DEM_SignonPacket) {
				const data = this.decompressIfNeeded(size, isCompressed);
				this.parsePacket({ data });
				if (this.eventQueue.length > 0) this.emitMainQueue(this.eventQueue, 0, false);
			} else this.handleFrame(decoder, size, isCompressed);
			off += size;
		}
		this._resetFrameState();
		if (this.eventQueue.length > 0) this.emitMainQueue(this.eventQueue, 0, false);
		return { ended: false };
	}
	_resetFrameState() {
		this._frameBuf = new Uint8Array(0);
		this._frameOffset = 0;
		this._frameLimit = 0;
	}
	/** Flush remaining events to the consumer. */
	flush() {
		this.emitMainQueue(this.eventQueue, 0, false);
	}
	tryEnsureRemaining(bytes) {
		const remaining = this._frameLimit - this._frameOffset;
		if (remaining >= bytes) return true;
		if (this.fd !== null && this.fileOffset < this.fileSize) return this.refillFromFile(bytes);
		let left = bytes - remaining;
		for (let i = 0; i < this.chunks.length && left > 0; ++i) left -= this.chunks[i].length;
		if (left > 0) return false;
		const mark = Math.max(0, this._frameMarked);
		const newOffset = this._frameOffset - mark;
		const unread = this._frameBuf.subarray(mark, this._frameLimit);
		const merged = Buffer.concat([unread, ...this.chunks]);
		this._frameBuf = merged;
		this._frameOffset = newOffset;
		this._frameLimit = merged.length;
		this.chunks = [];
		return true;
	}
	/** Compact unread bytes to the start of readBuffer and read more from the file. */
	refillFromFile(needed) {
		const buf = this.readBuffer;
		const unread = this._frameLimit - this._frameOffset;
		if (unread > 0) buf.copyWithin(0, this._frameOffset, this._frameOffset + unread);
		const space = buf.length - unread;
		const toRead = Math.min(space, this.fileSize - this.fileOffset);
		if (toRead > 0) {
			fs.readSync(this.fd, buf, unread, toRead, this.fileOffset);
			this.fileOffset += toRead;
		}
		const totalAvailable = unread + toRead;
		this._frameBuf = buf.subarray(0, totalAvailable);
		this._frameOffset = 0;
		this._frameLimit = totalAvailable;
		return totalAvailable >= needed;
	}
	ensureRemaining(bytes) {
		if (!this.tryEnsureRemaining(bytes)) throw new RangeError(`Not enough data to continue parsing. ${bytes} bytes needed`);
	}
	decompressIfNeeded(size, isCompressed) {
		const bytes = this._frameBuf.subarray(this._frameOffset, this._frameOffset + size);
		this._frameOffset += size;
		if (isCompressed) return snappy.uncompressSync(bytes);
		return bytes;
	}
	baseParse(decoder, size, isCompressed, handler) {
		const data = this.decompressIfNeeded(size, isCompressed);
		this.binaryR.setTo(data);
		const decoded = decoder(this.binaryR);
		if (!handler) return decoded;
		return handler(decoded);
	}
	readFrame() {
		this.ensureRemaining(6);
		const commandBase = this._frameReadVarint32();
		let tick = this._frameReadVarint32();
		if (tick === 4294967295) tick = -1;
		if (this.currentTick !== tick) {
			if (this.currentTick !== -1) this.enqueueEvent("tickend", this.currentTick);
			this.currentTick = tick;
			this.enqueueEvent("tickstart", this.currentTick);
		}
		const size = this._frameReadVarint32();
		this.ensureRemaining(size);
		const commandType = commandBase & ~EDemoCommands.DEM_IsCompressed;
		if (commandType === EDemoCommands.DEM_Stop) {
			this.enqueueEvent("tickend", this.currentTick);
			this.enqueueEvent("end", { incomplete: false });
			return false;
		}
		const decoder = decoders[commandType];
		if (!decoder) {
			this._frameSkip(size);
			return true;
		}
		const isCompressed = (commandBase & EDemoCommands.DEM_IsCompressed) !== 0;
		this.handleFrame(decoder, size, isCompressed);
		return true;
	}
	handleFrame(decoder, size, isCompressed) {
		switch (decoder.type) {
			case EDemoCommands.DEM_SendTables:
				this.sendTables = this.baseParse(decoder.decode, size, isCompressed) ?? null;
				if (this.sendTables?.data) {
					const copy = new Uint8Array(new ArrayBuffer(this.sendTables.data.byteLength));
					copy.set(new Uint8Array(this.sendTables.data));
					this.sendTables.data = copy;
				}
				break;
			case EDemoCommands.DEM_ClassInfo: {
				const data = this.baseParse(decoder.decode, size, isCompressed);
				if (!data || !this.sendTables) break;
				const classInfo = parseClassInfo(this.sendTables, data);
				this.sendTables = null;
				this.entityParser = new EntityParser(classInfo, this.enqueueEvent);
				this.entityParser.onlyGameRules = this.entityMode === EntityMode.ONLY_GAME_RULES;
				if (this.parser) {
					this.parser.propIdToName = classInfo.propIdToName;
					this.parser.propIdToDecoder = classInfo.propIdToDecoder;
					this.entityParser.directEntities = this.parser.entities;
					this.entityParser.directPropIdToName = classInfo.propIdToName;
				}
				break;
			}
			case EDemoCommands.DEM_FileHeader:
				this.baseParse(decoder.decode, size, isCompressed, (header) => {
					this.enqueueEvent("header", header);
				});
				break;
			case EDemoCommands.DEM_Packet:
			case EDemoCommands.DEM_SignonPacket:
				this.baseParse(decoders[EDemoCommands.DEM_Packet].decode, size, isCompressed, (packet) => {
					this.parsePacket(packet);
				});
				break;
			case EDemoCommands.DEM_FullPacket:
				this.baseParse(decoder.decode, size, isCompressed, (fullPacket) => {
					if (fullPacket.string_table) for (const snapshot of fullPacket.string_table.tables) {
						const result = applyStringTableSnapshot(snapshot, this.baselines);
						if (result?.name === "userinfo" && result.players.length > 0) this.enqueueEvent("updatestringtable", {
							tableId: -1,
							players: result.players,
							table: {
								name: "userinfo",
								data: [],
								user_data_size: 0,
								user_data_fixed_size: false,
								flags: 0,
								using_varint_bitcounts: false
							}
						});
					}
					if (fullPacket.packet?.data) this.parsePacket(fullPacket.packet);
				});
				break;
			default:
				this._frameSkip(size);
				break;
		}
		if (this.eventQueue.length > 0) this.emitMainQueue(this.eventQueue, 0, false);
	}
	handleOptionalCommands(commandId, decoder, reader, size) {
		const name = optionalSvcIds[commandId];
		if (!this.settings?.[name]) {
			reader.skipBytesBetter(size);
			return;
		}
		this.enqueueEvent(name, decoder.decode(reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size)));
	}
	parsePacket(packet) {
		if (!packet.data) return;
		const reader = this.cachedBitBuffer.setTo(packet.data);
		const gameEventQueue = [];
		const packetEntitiesQueue = [];
		const allocated = [];
		while (reader.RemainingBits > 8) {
			const cmd = reader.readUbitVar();
			const size = reader.ReadUVarInt32();
			const command = messages[cmd];
			if (!command) {
				reader.skipBytesBetter(size);
				continue;
			}
			switch (command.id) {
				case SVC_Messages.svc_PacketEntities: {
					if (this.entityMode === EntityMode.NONE) {
						reader.skipBytesBetter(size);
						continue;
					}
					const msgContent = ParseSession.entityAllocator.alloc(size);
					allocated.push(msgContent);
					reader.readBytes(msgContent);
					packetEntitiesQueue.push(CSVCMsg_PacketEntities.decode(msgContent));
					break;
				}
				case SVC_Messages.svc_ServerInfo: {
					const msgContent = reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size);
					const serverInfo = command.class.decode(msgContent);
					this.enqueueEvent("serverinfo", serverInfo);
					break;
				}
				case EBaseGameEvents.GE_Source1LegacyGameEventList: {
					const msgContent = reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size);
					this.binaryR2.setTo(msgContent);
					const eventlist = command.class.decode(this.binaryR2);
					this.enqueueEvent("gameeventlist", eventlist);
					break;
				}
				case EBaseGameEvents.GE_Source1LegacyGameEvent: {
					const msgContent = reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size);
					this.binaryR2.setTo(msgContent);
					gameEventQueue.push(command.class.decode(this.binaryR2));
					break;
				}
				case SVC_Messages.svc_CreateStringTable: {
					const msgContent = reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size);
					const tableCreatedData = createStringTable(command.class.decode(msgContent), this.baselines);
					this._stringTables.push(tableCreatedData?.table ?? null);
					this.enqueueEvent("createstringtable", tableCreatedData || null);
					break;
				}
				case SVC_Messages.svc_UpdateStringTable: {
					const msgContent = reader.readBytesToSlice(ParseSession.PACKET_TEMP_BUFFER, size);
					const updateMsg = command.class.decode(msgContent);
					if ("table_id" in updateMsg) {
						const tableCData = updateStringTable(updateMsg, this._stringTables, this.baselines);
						if (tableCData) {
							this._stringTables.push(tableCData.table);
							this.enqueueEvent("updatestringtable", tableCData);
						}
					}
					break;
				}
				case SVC_Messages.svc_ClearAllStringTables:
					reader.skipBytesBetter(size);
					this.enqueueEvent("clearallstringtables");
					break;
				default:
					if (command.id in optionalSvcIds) {
						this.handleOptionalCommands(command.id, command.class, reader, size);
						break;
					}
					reader.skipBytesBetter(size);
					break;
			}
		}
		for (const queueElement of packetEntitiesQueue) this.entityParser?.parseEntityPacket(queueElement, this.baselines);
		for (const allocatedElement of allocated) ParseSession.entityAllocator.free(allocatedElement);
		for (const event of gameEventQueue) this.enqueueEvent("gameevent", event);
	}
	dumpState() {
		return {
			currentTick: this.currentTick,
			bytebufferOffset: this._frameOffset,
			bytebufferRemaining: this._frameLimit - this._frameOffset
		};
	}
};
//#endregion
//#region src/helpers/entityHelper.ts
/**
* Shared base class for entity-backed helpers (Player, PlayerPawn, Team, GameRules, …).
*
* Each subclass binds a single {@link KnownClassName} `C`, which gives:
*   - {@link entity}: a typed view of the underlying entity slot (`TypedEntity<C> | undefined`)
*   - {@link prop}: a typed lookup over `EntityTypeMap[C]` keys
*
* The base does not verify `className` at access time — instances are produced by
* {@link DemoReader} factories that already discriminate on className and the relevant
* caches are invalidated on `entitycreated` / `entitydeleted`.
*/
var EntityHelper = class {
	constructor(_parser, entityId) {
		this._parser = _parser;
		this.entityId = entityId;
	}
	/** The raw, typed entity for this helper, or `undefined` if the slot has been freed. */
	get entity() {
		return this._parser.entities[this.entityId];
	}
	/** Typed property accessor over `EntityTypeMap[C]`. */
	prop(name) {
		return (this.entity?.properties)?.[name];
	}
};
//#endregion
//#region src/helpers/player.ts
const PLAYER_ENTITY_HANDLE_MISSING = 2047;
var Player = class extends EntityHelper {
	constructor(parser, entityId) {
		super(parser, entityId);
	}
	get name() {
		return this.prop("CCSPlayerController.m_iszPlayerName") ?? "";
	}
	get steamId() {
		const raw = this.prop("CCSPlayerController.m_steamID");
		return raw !== void 0 ? String(raw) : "";
	}
	get isConnected() {
		const connected = this.prop("CCSPlayerController.m_iConnected");
		return connected !== void 0 && connected === 0;
	}
	get userInfo() {
		for (const info of this._parser.players) if (info && String(info.steamid) === this.steamId) return info;
		return null;
	}
	get teamNumber() {
		return this.prop("CCSPlayerController.m_iTeamNum") ?? 0;
	}
	get team() {
		const num = this.teamNumber;
		return this._parser.teams.find((t) => t.teamNumber === num) ?? null;
	}
	get pawnEntityId() {
		const handle = this.prop("CCSPlayerController.m_hPlayerPawn");
		if (handle === void 0 || (handle & 2047) === PLAYER_ENTITY_HANDLE_MISSING) return null;
		return handle & 2047;
	}
	get pawn() {
		const id = this.pawnEntityId;
		if (id === null) return null;
		return this._parser.getPawn(id);
	}
	get isAlive() {
		return this.prop("CCSPlayerController.m_bPawnIsAlive") ?? false;
	}
	get health() {
		return this.pawn?.health ?? 0;
	}
	get position() {
		return this.pawn?.position ?? null;
	}
	get armor() {
		return this.pawn?.armor ?? 0;
	}
	get hasDefuser() {
		return this.pawn?.hasDefuser ?? false;
	}
	get hasHelmet() {
		return this.pawn?.hasHelmet ?? false;
	}
	get isScoped() {
		return this.pawn?.isScoped ?? false;
	}
	get isDefusing() {
		return this.pawn?.isDefusing ?? false;
	}
	get eyeAngles() {
		return this.pawn?.eyeAngles ?? {
			pitch: 0,
			yaw: 0
		};
	}
	get money() {
		return this.prop("CCSPlayerController.CCSPlayerController_InGameMoneyServices.m_iAccount") ?? 0;
	}
	get totalCashSpent() {
		return this.prop("CCSPlayerController.CCSPlayerController_InGameMoneyServices.m_iTotalCashSpent") ?? 0;
	}
	get cashSpentThisRound() {
		return this.prop("CCSPlayerController.CCSPlayerController_InGameMoneyServices.m_iCashSpentThisRound") ?? 0;
	}
	get kills() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iKills") ?? 0;
	}
	get deaths() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iDeaths") ?? 0;
	}
	get assists() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iAssists") ?? 0;
	}
	get damage() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iDamage") ?? 0;
	}
	get headshotKills() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iHeadShotKills") ?? 0;
	}
	get utilityDamage() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iUtilityDamage") ?? 0;
	}
	get enemiesFlashed() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iEnemiesFlashed") ?? 0;
	}
	get enemy3Ks() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iEnemy3Ks") ?? 0;
	}
	get enemy4Ks() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iEnemy4Ks") ?? 0;
	}
	get enemy5Ks() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iEnemy5Ks") ?? 0;
	}
	get objective() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.m_iObjective") ?? 0;
	}
	get round_kills() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iKills") ?? 0;
	}
	get round_deaths() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iDeaths") ?? 0;
	}
	get round_assists() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iAssists") ?? 0;
	}
	get round_damage() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iDamage") ?? 0;
	}
	get round_headshotKills() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iHeadShotKills") ?? 0;
	}
	get round_equipmentValue() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iEquipmentValue") ?? 0;
	}
	get round_cashEarned() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iCashEarned") ?? 0;
	}
	get round_utilityDamage() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iUtilityDamage") ?? 0;
	}
	get round_enemiesFlashed() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iEnemiesFlashed") ?? 0;
	}
	get round_liveTime() {
		return this.prop("CCSPlayerController.CCSPlayerController_ActionTrackingServices.CSPerRoundStats_t.m_iLiveTime") ?? 0;
	}
	get mvps() {
		return this.prop("CCSPlayerController.m_iMVPs") ?? 0;
	}
	get score() {
		return this.prop("CCSPlayerController.m_iScore") ?? 0;
	}
	get ping() {
		return this.prop("CCSPlayerController.m_iPing") ?? 0;
	}
	get color() {
		return this.prop("CCSPlayerController.m_iCompTeammateColor") ?? -1;
	}
	get clanTag() {
		return this.prop("CCSPlayerController.m_szClan") ?? "";
	}
};
//#endregion
//#region src/helpers/team.ts
const TeamNumber = {
	Unassigned: 0,
	Spectators: 1,
	Terrorists: 2,
	CounterTerrorists: 3
};
var Team = class extends EntityHelper {
	constructor(parser, entityId) {
		super(parser, entityId);
	}
	get teamNumber() {
		return this.prop("CCSTeam.m_iTeamNum") ?? TeamNumber.Unassigned;
	}
	get teamName() {
		return this.prop("CCSTeam.m_szTeamname") ?? "";
	}
	get clanName() {
		return this.prop("CCSTeam.m_szClanTeamname") ?? "";
	}
	get score() {
		return this.prop("CCSTeam.m_iScore") ?? 0;
	}
	get scoreFirstHalf() {
		return this.prop("CCSTeam.m_scoreFirstHalf") ?? 0;
	}
	get scoreSecondHalf() {
		return this.prop("CCSTeam.m_scoreSecondHalf") ?? 0;
	}
	get members() {
		const num = this.teamNumber;
		return this._parser.playerControllers.filter((p) => p.teamNumber === num);
	}
};
//#endregion
//#region src/helpers/gameRules.ts
const WinRoundReason = {
	INVALID: -1,
	STILL_IN_PROGRESS: 0,
	TARGET_BOMBED: 1,
	VIP_ESCAPED: 2,
	VIP_ASSASSINATED: 3,
	T_ESCAPED: 4,
	CT_PREVENT_ESCAPE: 5,
	ESCAPING_T_NEUTRALIZED: 6,
	BOMB_DEFUSED: 7,
	T_ELIMINATED: 8,
	CT_ELIMINATED: 9,
	ROUND_DRAW: 10,
	ALL_HOSTAGES_RESCUED: 11,
	TARGET_SAVED: 12,
	HOSTAGES_NOT_SAVED: 13,
	T_NOT_ESCAPED: 14,
	VIP_NOT_ESCAPED: 15,
	GAME_COMMENCING: 16,
	T_SURRENDER: 17,
	CT_SURRENDER: 18,
	T_PLANTED: 19,
	CT_REACHED_HOSTAGE: 20
};
var GameRules = class extends EntityHelper {
	constructor(parser, entityId) {
		super(parser, entityId);
	}
	get isWarmup() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_bWarmupPeriod") ?? false;
	}
	get isFreezePeriod() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_bFreezePeriod") ?? false;
	}
	get isGamePaused() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_bGamePaused") ?? false;
	}
	get isTerroristTimeOutActive() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_bTerroristTimeOutActive") ?? false;
	}
	get isCTTimeOutActive() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_bCTTimeOutActive") ?? false;
	}
	get roundsPlayed() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_totalRoundsPlayed") ?? 0;
	}
	get gamePhase() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_gamePhase") ?? 0;
	}
	get phase() {
		return {
			2: "first",
			3: "second",
			4: "halftime",
			5: "postgame"
		}[this.gamePhase] ?? "unknown";
	}
	get roundTime() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_iRoundTime") ?? 0;
	}
	get roundStartTime() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_fRoundStartTime") ?? 0;
	}
	get terroristTimeOutRemaining() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_flTerroristTimeOutRemaining") ?? 0;
	}
	get ctTimeOutRemaining() {
		return this.prop("CCSGameRulesProxy.CCSGameRules.m_flCTTimeOutRemaining") ?? 0;
	}
};
//#endregion
//#region src/generated/entityTypes.ts
/** Narrow an entity slot to a specific typed entity */
function isEntityClass(entity, className) {
	return entity?.className === className;
}
//#endregion
//#region src/helpers/playerPawn.ts
const CELL_BITS = 9;
const MAX_COORD = 16384;
var PlayerPawn = class extends EntityHelper {
	constructor(parser, entityId) {
		super(parser, entityId);
	}
	get position() {
		const cellX = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_cellX") ?? 0;
		const cellY = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_cellY") ?? 0;
		const cellZ = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_cellZ") ?? 0;
		const vecX = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_vecX") ?? 0;
		const vecY = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_vecY") ?? 0;
		const vecZ = this.prop("CCSPlayerPawn.CBodyComponentBaseAnimGraph.m_vecZ") ?? 0;
		return {
			x: cellX * (1 << CELL_BITS) - MAX_COORD + vecX,
			y: cellY * (1 << CELL_BITS) - MAX_COORD + vecY,
			z: cellZ * (1 << CELL_BITS) - MAX_COORD + vecZ
		};
	}
	get health() {
		return this.prop("CCSPlayerPawn.m_iHealth") ?? 0;
	}
	get maxHealth() {
		return this.prop("CCSPlayerPawn.m_iMaxHealth") ?? 100;
	}
	get armor() {
		return this.prop("CCSPlayerPawn.m_ArmorValue") ?? 0;
	}
	get lifeState() {
		return this.prop("CCSPlayerPawn.m_lifeState") ?? 0;
	}
	get isAlive() {
		return this.lifeState === 0;
	}
	get hasDefuser() {
		return this.prop("CCSPlayerPawn.CCSPlayer_ItemServices.m_bHasDefuser") ?? false;
	}
	get hasHelmet() {
		return this.prop("CCSPlayerPawn.CCSPlayer_ItemServices.m_bHasHelmet") ?? false;
	}
	get isScoped() {
		return this.prop("CCSPlayerPawn.m_bIsScoped") ?? false;
	}
	get isWalking() {
		return this.prop("CCSPlayerPawn.m_bIsWalking") ?? false;
	}
	get isDefusing() {
		return this.prop("CCSPlayerPawn.m_bIsDefusing") ?? false;
	}
	get eyeAngles() {
		const raw = this.prop("CCSPlayerPawn.m_angEyeAngles");
		if (Array.isArray(raw)) return {
			pitch: raw[0] ?? 0,
			yaw: raw[1] ?? 0
		};
		return {
			pitch: 0,
			yaw: 0
		};
	}
	get flags() {
		return this.prop("CCSPlayerPawn.m_fFlags") ?? 0;
	}
	get controller() {
		return this._parser.playerControllers.find((player) => player.pawnEntityId === this.entityId);
	}
	get ownerEntityHandle() {
		return this.prop("CCSPlayerPawn.m_hOwnerEntity") ?? 0;
	}
};
//#endregion
//#region src/broadcast/defaultEventDescriptors.ts
/**
* Path to the bundled descriptor file. Resolves relative to this module so it
* works both when running source (`src/broadcast/default-event-descriptors.bin`)
* and when running the published bundle (`dist/default-event-descriptors.bin`,
* placed there by the build's copy step).
*/
const DEFAULT_PATH = fileURLToPath(new URL("./default-event-descriptors.bin", import.meta.url));
let cached = null;
/**
* Lazily load and decode the descriptor list bundled with the package. Used by
* `HttpBroadcastReader` when the caller doesn't pass `gameEventDescriptors`.
* Returns `null` if the file is missing (e.g. someone trimmed the package),
* so the reader can fall through to "no preloaded descriptors" rather than
* crashing.
*/
const loadBundledEventDescriptors = () => {
	if (cached) return cached;
	if (!fs$1.existsSync(DEFAULT_PATH)) return null;
	const bytes = fs$1.readFileSync(DEFAULT_PATH);
	cached = CMsgSource1LegacyGameEventList.decode(bytes);
	return cached;
};
//#endregion
//#region src/broadcast/errors.ts
/** Thrown when a broadcast response violates the spec (bad sync, malformed fragment, unsupported protocol). */
var BroadcastProtocolError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "BroadcastProtocolError";
	}
};
/** Thrown when an HTTP request to the broadcast relay fails with a non-retryable status. */
var BroadcastFetchError = class extends Error {
	constructor(message, status, path) {
		super(message);
		this.status = status;
		this.path = path;
		this.name = "BroadcastFetchError";
	}
};
//#endregion
//#region src/broadcast/fetcher.ts
const STATUS_RETRY = new Set([404, 405]);
/**
* Default fetcher backed by `globalThis.fetch`. Node 22+ ships undici, which
* auto-handles `Content-Encoding: gzip` and `deflate`, so no `Accept-Encoding`
* header is required.
*
* @param baseUrl  Base URL for the broadcast. Trailing slash is added if absent.
* @param init     Optional `RequestInit` merged into every request — useful
*                 for `Authorization` or other custom headers.
*/
function createDefaultFetcher(baseUrl, init) {
	const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
	const buildUrl = (path) => {
		return new URL(path.replace(/^\/+/, ""), base).toString();
	};
	const send = async (path, signal) => {
		const url = buildUrl(path);
		const composed = init?.signal && signal ? AbortSignal.any([init.signal, signal]) : signal ?? init?.signal;
		return fetch(url, {
			...init,
			signal: composed
		});
	};
	return {
		async json(path, signal) {
			const res = await send(path, signal);
			if (!res.ok) throw new BroadcastFetchError(`HTTP ${res.status} for ${path}: ${res.statusText}`, res.status, path);
			return await res.json();
		},
		async bytes(path, signal) {
			const res = await send(path, signal);
			if (res.ok) return {
				ok: true,
				data: new Uint8Array(await res.arrayBuffer())
			};
			if (STATUS_RETRY.has(res.status)) return {
				ok: false,
				status: res.status
			};
			throw new BroadcastFetchError(`HTTP ${res.status} for ${path}: ${res.statusText}`, res.status, path);
		}
	};
}
//#endregion
//#region src/broadcast/sync.ts
/**
* Validate a parsed `/sync` JSON document and return it as a typed
* BroadcastSyncDto. Throws BroadcastProtocolError if required fields are
* missing or the protocol version is unsupported.
*/
function validateSync(json) {
	if (json === null || typeof json !== "object" || Array.isArray(json)) throw new BroadcastProtocolError("sync response is not an object");
	const o = json;
	for (const key of [
		"tick",
		"rtdelay",
		"rcvage",
		"fragment",
		"signup_fragment",
		"tps",
		"protocol"
	]) if (!Number.isFinite(o[key])) throw new BroadcastProtocolError(`sync response missing required numeric field "${key}"`);
	for (const key of [
		"tick",
		"fragment",
		"signup_fragment",
		"tps",
		"protocol"
	]) {
		const value = o[key];
		if (!Number.isInteger(value) || value < 0) throw new BroadcastProtocolError(`sync response field "${key}" must be a non-negative integer`);
	}
	const protocol = o["protocol"];
	if (protocol !== 5) throw new BroadcastProtocolError(`unsupported broadcast protocol ${protocol}, expected 5`);
	const dto = {
		tick: o["tick"],
		rtdelay: o["rtdelay"],
		rcvage: o["rcvage"],
		fragment: o["fragment"],
		signup_fragment: o["signup_fragment"],
		tps: o["tps"],
		protocol
	};
	if (typeof o["token_redirect"] === "string" && o["token_redirect"].length > 0) dto.token_redirect = o["token_redirect"];
	if (typeof o["keyframe_interval"] === "number") dto.keyframe_interval = o["keyframe_interval"];
	if (typeof o["endtick"] === "number") dto.endtick = o["endtick"];
	if (typeof o["maxtick"] === "number") dto.maxtick = o["maxtick"];
	if (typeof o["map"] === "string") dto.map = o["map"];
	return dto;
}
/**
* Build the per-fragment URL prefix from a base URL and the optional
* `token_redirect`. Trailing slashes on the redirect token are normalized
* (matches demofile-net's `tokenRedirect.replace(/\/+$/, '') + '/'`).
*/
function buildFragmentPrefix(tokenRedirect) {
	if (!tokenRedirect) return "";
	return tokenRedirect.replace(/\/+$/, "") + "/";
}
//#endregion
//#region src/broadcast/httpReader.ts
const DEFAULTS = {
	deltaRetryInterval: 1e3,
	deltaThrottle: 1e3,
	maxDeltaRetries: 10,
	maxFullRetries: 5
};
/**
* Live HTTP broadcast reader. Drives a {@link DemoReader} from a CS2 GOTV
* broadcast relay using the `/sync` + `/start` + `/full` + `/delta` polling
* protocol. Emits the same events as `parseDemo` plus a `broadcastsync` event
* with the relay metadata.
*
* @example
* const parser = new DemoReader();
* parser.on('gameevent', e => console.log(e.event_name));
*
* const reader = new HttpBroadcastReader(parser, 'https://relay.example.com/match/');
* await reader.start();
* const { reason } = await reader.run();
*/
var HttpBroadcastReader = class {
	parser;
	fetcher;
	opts;
	abortController = new AbortController();
	session = null;
	_sync = null;
	_fragment = -1;
	_tailTick = -1;
	_started = false;
	_running = false;
	_terminus = null;
	_prefix = "";
	_lastDeltaStartedAt = 0;
	_onTickStart = (t) => {
		this._tailTick = t;
	};
	_onParserCancel = () => {
		this.abortController.abort();
	};
	_onSignalAbort = () => {
		this.abortController.abort();
	};
	constructor(parser, baseUrl, opts = {}) {
		this.parser = parser;
		this.fetcher = opts.fetcher ?? createDefaultFetcher(baseUrl);
		this.opts = opts;
	}
	/** Latest `/sync` response (set after `start()` resolves). */
	get sync() {
		return this._sync;
	}
	/** Most recently requested fragment number, or `-1` if `start()` has not yet resolved. */
	get fragment() {
		return this._fragment;
	}
	/** Most recent tick observed in any processed fragment. */
	get tailTick() {
		return this._tailTick;
	}
	/**
	* Fetch `/sync`, the signup fragment, and the first `/full` fragment.
	* Resolves once the parser has consumed all three. Throws on protocol
	* mismatch, sync fetch failure, or signup/full failure. If cancelled
	* mid-flight, resolves with `terminus.reason === 'cancelled'`.
	*/
	async start() {
		if (this._started) throw new Error("HttpBroadcastReader.start() already called");
		this._started = true;
		this.parser.once("cancel", this._onParserCancel);
		if (this.opts.signal) if (this.opts.signal.aborted) this.abortController.abort();
		else this.opts.signal.addEventListener("abort", this._onSignalAbort, { once: true });
		this.parser.on("tickstart", this._onTickStart);
		let raw;
		try {
			raw = await this.fetcher.json("sync", this.abortController.signal);
		} catch (e) {
			if (this._isAbortError(e) || this.abortController.signal.aborted) {
				this._terminate("cancelled");
				return;
			}
			this._terminate("error", e);
			throw e;
		}
		if (this._aborted()) return;
		let sync;
		try {
			sync = validateSync(raw);
		} catch (e) {
			this._terminate("error", e);
			throw e;
		}
		this._sync = sync;
		this._prefix = buildFragmentPrefix(sync.token_redirect);
		this._fragment = sync.fragment;
		this.parser.emit("broadcastsync", sync);
		if (this._aborted()) return;
		try {
			this.session = this.parser._attachBroadcastSession(this.opts);
		} catch (e) {
			this._terminate("error", e);
			throw e;
		}
		try {
			if (this.opts.gameEventDescriptors !== false) {
				const supplied = this.opts.gameEventDescriptors;
				let list = null;
				if (supplied instanceof Uint8Array) list = CMsgSource1LegacyGameEventList.decode(supplied);
				else if (supplied) list = supplied;
				else list = loadBundledEventDescriptors();
				if (list) this.parser.emit("gameeventlist", list);
			}
		} catch (e) {
			this._terminate("error", e);
			throw e;
		}
		const signupBytes = await this._fetchWithRetry(`${this._prefix}${sync.signup_fragment}/start`, "signup", sync.signup_fragment, 0);
		if (!signupBytes) return;
		if (await this._processFragment(signupBytes, -1, "signup", sync.signup_fragment)) return;
		const fullBytes = await this._fetchWithRetry(`${this._prefix}${sync.fragment}/full`, "full", sync.fragment, this.opts.maxFullRetries ?? DEFAULTS.maxFullRetries);
		if (!fullBytes) return;
		if (await this._processFragment(fullBytes, 0, "full", sync.fragment)) return;
	}
	/** @returns true if cancelled (and sets terminus accordingly). */
	_aborted() {
		if (this.abortController.signal.aborted && !this._terminus) {
			this._terminate("cancelled");
			return true;
		}
		return !!this._terminus && this._terminus.reason === "cancelled";
	}
	/**
	* Loop: GET `{N}/delta` for `N` starting at `sync.fragment + 1`, processing
	* each, until end-of-stream marker, retry exhaustion, cancellation, or a
	* fragment parse error. Resolves with the terminal reason.
	*/
	async run() {
		if (!this._started) throw new Error("start() must be awaited before run()");
		if (this._terminus) return this._terminus;
		if (this._running) throw new Error("HttpBroadcastReader.run() already in progress");
		this._running = true;
		try {
			let fragment = this._fragment + 1;
			while (!this.abortController.signal.aborted) {
				const wait = (this.opts.deltaThrottle ?? DEFAULTS.deltaThrottle) - (Date.now() - this._lastDeltaStartedAt);
				if (wait > 0) {
					if (!await this._sleep(wait)) return this._terminate("cancelled");
				}
				this._lastDeltaStartedAt = Date.now();
				this._fragment = fragment;
				const bytes = await this._fetchWithRetry(`${this._prefix}${fragment}/delta`, "delta", fragment, this.opts.maxDeltaRetries ?? DEFAULTS.maxDeltaRetries);
				if (!bytes) return this._terminus;
				if (this.abortController.signal.aborted) return this._terminate("cancelled");
				if (await this._processFragment(bytes, 0, "delta", fragment)) return this._terminus;
				fragment++;
			}
			return this._terminate("cancelled");
		} finally {
			this._running = false;
		}
	}
	/** Abort the fetch loop and pending HTTP requests. Idempotent. */
	stop() {
		if (this._terminus) return;
		this.abortController.abort();
	}
	async _fetchWithRetry(path, phase, fragment, maxRetries) {
		let retries = 0;
		while (true) {
			if (this.abortController.signal.aborted) {
				this._terminate("cancelled");
				return null;
			}
			let result;
			try {
				result = await this.fetcher.bytes(path, this.abortController.signal);
			} catch (e) {
				if (this._isAbortError(e)) {
					this._terminate("cancelled");
					return null;
				}
				this._terminate("error", e);
				return null;
			}
			if (result.ok) return result.data;
			if (retries >= maxRetries) {
				if (phase === "delta") this._terminate("timeout");
				else {
					const message = maxRetries === 0 ? `${phase} fragment ${fragment} not available (HTTP ${result.status})` : `${phase} fragment ${fragment}: HTTP ${result.status} after ${maxRetries} retries`;
					this._terminate("error", new BroadcastFetchError(message, result.status, path));
				}
				return null;
			}
			retries++;
			if (!await this._sleep(this.opts.deltaRetryInterval ?? DEFAULTS.deltaRetryInterval)) {
				this._terminate("cancelled");
				return null;
			}
		}
	}
	/** @returns true if the fragment ended the broadcast (terminal reached). */
	async _processFragment(bytes, tickOffset, phase, fragment) {
		if (!this.session) {
			this._terminate("error", /* @__PURE__ */ new Error("session not attached"));
			return true;
		}
		try {
			const { ended } = this.session.pushBroadcastFragment(bytes, tickOffset);
			if (ended) {
				this._terminate("stop");
				return true;
			}
		} catch (err) {
			const error = err instanceof Error ? err : new Error(String(err));
			if (this.opts.onFragmentError?.(error, {
				fragment,
				tickOffset,
				phase
			}) === "continue") {
				if (!this._terminus) this.parser.emit("debug", `broadcast: skipped ${phase} fragment ${fragment} after parse error: ${error.message}`);
				return false;
			}
			this._terminate("error", error);
			return true;
		}
		return false;
	}
	_terminate(reason, error) {
		if (!this._terminus) {
			this._terminus = error !== void 0 ? {
				reason,
				error
			} : { reason };
			if (!this._parserEnded()) this.parser.emit("end", {
				incomplete: reason !== "stop",
				...error !== void 0 ? { error } : {},
				reason
			});
			this._unhookListeners();
		}
		return this._terminus;
	}
	_parserEnded() {
		return this.parser.hasEnded;
	}
	_unhookListeners() {
		this.parser.off("tickstart", this._onTickStart);
		this.parser.off("cancel", this._onParserCancel);
		this.opts.signal?.removeEventListener("abort", this._onSignalAbort);
	}
	_sleep(ms) {
		return new Promise((resolve) => {
			if (this.abortController.signal.aborted) return resolve(false);
			const t = setTimeout(() => {
				this.abortController.signal.removeEventListener("abort", onAbort);
				resolve(true);
			}, ms);
			const onAbort = () => {
				clearTimeout(t);
				resolve(false);
			};
			this.abortController.signal.addEventListener("abort", onAbort, { once: true });
		});
	}
	_isAbortError(e) {
		return e instanceof Error && (e.name === "AbortError" || e instanceof DOMException && e.name === "AbortError");
	}
};
//#endregion
//#region src/parser/index.ts
/** Lower 32 bits of a SteamID64 — i.e. the trailing number in SteamID3 form. */
const steamIdToAccountId = (steamId) => {
	const big = typeof steamId === "bigint" ? steamId : BigInt(steamId);
	return Number(big & 4294967295n);
};
var DemoReader = class extends EventEmitter {
	_parseStartTime = 0n;
	header = null;
	_hasEnded = false;
	_stream = null;
	entities;
	_directWriteMode = false;
	tickInterval = NaN;
	currentTick = -1;
	_playerInfoMap = [];
	_playerCache = /* @__PURE__ */ new Map();
	_teamCache = /* @__PURE__ */ new Map();
	_pawnCache = /* @__PURE__ */ new Map();
	_gameRulesCache = null;
	_accountIdToEntityId = /* @__PURE__ */ new Map();
	gameEvents = new GameEvents();
	get currentTime() {
		return this.currentTick * this.tickInterval;
	}
	/** All players from the userinfo string table. Available even with EntityMode.NONE. */
	get players() {
		return this._playerInfoMap;
	}
	/** True once a terminal `'end'` event has been observed (parse finished, errored, or cancelled). */
	get hasEnded() {
		return this._hasEnded;
	}
	_getOrCreate(cache, id, factory) {
		let cached = cache.get(id);
		if (!cached) {
			cached = factory(id);
			cache.set(id, cached);
		}
		return cached;
	}
	/** Get a Player helper by controller entity ID. Requires EntityMode.ALL. */
	getPlayer(entityId) {
		const e = this.entities[entityId];
		if (e && e.className === "CCSPlayerController") return this._getOrCreate(this._playerCache, entityId, (id) => new Player(this, id));
		return null;
	}
	getPawn(entityId) {
		const e = this.entities[entityId];
		if (e && e.className === "CCSPlayerPawn") return this._getOrCreate(this._pawnCache, entityId, (id) => new PlayerPawn(this, id));
		return null;
	}
	/** All player controller entities as Player helpers. Requires EntityMode.ALL. */
	get playerControllers() {
		const result = [];
		for (let i = 0; i < this.entities.length; i++) {
			const e = this.entities[i];
			if (e && e.className === "CCSPlayerController") result.push(this._getOrCreate(this._playerCache, i, (id) => new Player(this, id)));
		}
		return result;
	}
	/**
	* Get a Player helper for a given CMsgPlayerInfo (e.g. an element from `parser.players`).
	* Matches by steamid against CCSPlayerController.m_steamID. Requires EntityMode.ALL.
	*
	* Returns null if:
	*   - info is null/undefined or has no steamid
	*   - info is a bot (steamid === '0') — bots share steamid '0' and cannot be uniquely matched
	*   - the player has not yet been assigned a controller entity
	*   - the player has disconnected and the controller has been removed
	*/
	getPlayerByInfo(info) {
		if (!info || info.steamid === void 0) return null;
		const target = String(info.steamid);
		if (target === "0") return null;
		for (let i = 0; i < this.entities.length; i++) {
			const e = this.entities[i];
			if (!e || e.className !== "CCSPlayerController") continue;
			const raw = e.properties["CCSPlayerController.m_steamID"];
			if (raw !== void 0 && String(raw) === target) return this._getOrCreate(this._playerCache, i, (id) => new Player(this, id));
		}
		return null;
	}
	/**
	* Get a Player helper by Steam account ID — the lower 32 bits of the SteamID64,
	* i.e. the trailing number in SteamID3 form (e.g. `918429678` from `[U:1:918429678]`).
	* Requires EntityMode.ALL. O(1) on cached entries, with a linear-scan fallback for
	* controllers whose `m_steamID` was set after entity creation.
	*/
	getByAccountId(accountId) {
		const cached = this._accountIdToEntityId.get(accountId);
		if (cached !== void 0) {
			const e = this.entities[cached];
			if (e && e.className === "CCSPlayerController") {
				const raw = e.properties["CCSPlayerController.m_steamID"];
				if (raw !== void 0 && steamIdToAccountId(raw) === accountId) return this._getOrCreate(this._playerCache, cached, (id) => new Player(this, id));
			}
			this._accountIdToEntityId.delete(accountId);
		}
		for (let i = 0; i < this.entities.length; i++) {
			const e = this.entities[i];
			if (!e || e.className !== "CCSPlayerController") continue;
			const raw = e.properties["CCSPlayerController.m_steamID"];
			if (raw === void 0) continue;
			const id = steamIdToAccountId(raw);
			this._accountIdToEntityId.set(id, i);
			if (id === accountId) return this._getOrCreate(this._playerCache, i, (id) => new Player(this, id));
		}
		return null;
	}
	/** All team entities as Team helper objects */
	get teams() {
		const result = [];
		for (let i = 0; i < this.entities.length; i++) {
			const e = this.entities[i];
			if (e && e.className === "CCSTeam") {
				const t = this._getOrCreate(this._teamCache, i, (id) => new Team(this, id));
				result[t.teamNumber] = t;
			}
		}
		return result;
	}
	_gameRulesEntityId = null;
	/** Game rules helper (or null if not yet created) */
	get gameRules() {
		if (this._gameRulesEntityId === null) return null;
		if (!this.entities[this._gameRulesEntityId]) {
			this._gameRulesEntityId = null;
			this._gameRulesCache = null;
			return null;
		}
		if (!this._gameRulesCache) this._gameRulesCache = new GameRules(this, this._gameRulesEntityId);
		return this._gameRulesCache;
	}
	/** Get a typed entity by index and class name. Returns typed properties or undefined. */
	getEntity(entityId, className) {
		const e = this.entities[entityId];
		if (isEntityClass(e, className)) return e.properties;
	}
	/** Find all entities of a specific class, with typed properties */
	findEntities(className) {
		const result = [];
		for (let i = 0; i < this.entities.length; i++) {
			const e = this.entities[i];
			if (isEntityClass(e, className)) result.push({
				entityId: i,
				properties: e.properties
			});
		}
		return result;
	}
	/** Re-exported type guard for narrowing entities */
	static isEntityClass = isEntityClass;
	constructor() {
		super();
		this.entities = [];
		this.gameEvents.listen(this);
		this.on("end", () => {
			this._hasEnded = true;
			this.emit("debug", `[${this.currentTick}] Parsed demo in ${(process.hrtime.bigint() - this._parseStartTime) / 10n ** 6n}ms`);
		});
		this.on("tickstart", (tick) => {
			this.currentTick = tick;
		});
		this.on("createstringtable", (table) => {
			if (!table) return;
			for (const player of table.players) this._playerInfoMap[player.userid & 255] = player;
		});
		this.on("updatestringtable", (update) => {
			if (!update) return;
			for (const player of update.players) {
				if (player.userid === void 0) continue;
				this._playerInfoMap[player.userid & 255] = player;
			}
		});
		this.on("entitycreated", ([entityId, classId, entityType, className]) => {
			this._playerCache.delete(entityId);
			this._teamCache.delete(entityId);
			this._pawnCache.delete(entityId);
			if (className === "CCSGameRulesProxy") {
				this._gameRulesEntityId = entityId;
				this._gameRulesCache = null;
			}
			if (className === "CCSPlayerController") {
				const raw = (this.entities[entityId]?.properties)?.["CCSPlayerController.m_steamID"];
				if (raw !== void 0) {
					const accountId = steamIdToAccountId(raw);
					if (accountId !== 0) this._accountIdToEntityId.set(accountId, entityId);
				}
			}
			if (this._directWriteMode) return;
			this.entities[entityId] = {
				classId,
				entityType,
				className,
				properties: {}
			};
		});
		this.on("entityupdated", (info) => {
			if (this._directWriteMode) return;
			if (!this.entities[info.entityId]) return;
			this.entities[info.entityId].properties[this.propIdToName[info.propId]] = info.value;
		});
		this.on("entitydeleted", (entityId) => {
			if (entityId === this._gameRulesEntityId) {
				this._gameRulesEntityId = null;
				this._gameRulesCache = null;
			}
			this._playerCache.delete(entityId);
			this._teamCache.delete(entityId);
			this._pawnCache.delete(entityId);
			if (this._directWriteMode) return;
			this.entities[entityId] = void 0;
		});
		this.once("header", (header) => {
			this.header = header;
		});
		this.once("serverinfo", (serverInfo) => {
			if (serverInfo.tick_interval !== void 0) this.tickInterval = serverInfo.tick_interval;
		});
	}
	static parseServerInfo = (filePath) => {
		const max = fs.statSync(filePath).size;
		const bufferSize = Math.min(4096 * 8, max - 16);
		const fd = fs.openSync(filePath, "r");
		try {
			const buffer = Buffer.alloc(bufferSize);
			fs.readSync(fd, buffer, 0, bufferSize, 16);
			const byteBuffer = new BitBuffer(buffer);
			if ((byteBuffer.ReadUVarInt32() & ~EDemoCommands.DEM_IsCompressed) !== EDemoCommands.DEM_FileHeader) return null;
			let tick = byteBuffer.ReadUVarInt32();
			const size = byteBuffer.ReadUVarInt32();
			byteBuffer.skipBytesBetter(size);
			const _frameBuffer = Buffer.alloc(32 * 1024);
			while (tick === 4294967295 && byteBuffer.RemainingBytes > 0) {
				const EDemoCommandTypeBase = byteBuffer.ReadUVarInt32();
				const type = EDemoCommandTypeBase & ~EDemoCommands.DEM_IsCompressed;
				tick = byteBuffer.ReadUVarInt32();
				const size = byteBuffer.ReadUVarInt32();
				const decoder = decoders[type];
				if (!decoder || !(decoder.type === EDemoCommands.DEM_Packet || decoder.type === EDemoCommands.DEM_SignonPacket)) {
					byteBuffer.skipBytesBetter(size);
					continue;
				}
				const frameBuffer = byteBuffer.readBytesToSlice(_frameBuffer, size);
				const bytes = (EDemoCommandTypeBase & EDemoCommands.DEM_IsCompressed) !== 0 ? snappy.uncompressSync(frameBuffer) : frameBuffer;
				const data = decoder.decode(bytes);
				if (!data.data) continue;
				const reader = new BitBuffer(data.data);
				while (reader.RemainingBits > 8) {
					const cmd = reader.readUbitVar();
					const size = reader.ReadUVarInt32();
					if (cmd !== SVC_Messages.svc_ServerInfo) {
						reader.skipBytesBetter(size);
						continue;
					}
					const serverInfo = Buffer.alloc(size);
					const slice = reader.readBytesToSlice(serverInfo, size);
					return messages[SVC_Messages.svc_ServerInfo].class.decode(slice);
				}
			}
			return null;
		} finally {
			fs.closeSync(fd);
		}
	};
	static parseHeader = (filePath) => {
		const bufferSize = 4096;
		const fd = fs.openSync(filePath, "r");
		try {
			const buffer = Buffer.alloc(bufferSize);
			fs.readSync(fd, buffer, 0, bufferSize, 16);
			const byteBuffer = new BitBuffer(buffer);
			if ((byteBuffer.ReadUVarInt32() & ~EDemoCommands.DEM_IsCompressed) !== EDemoCommands.DEM_FileHeader) return null;
			byteBuffer.ReadUVarInt32();
			const size = byteBuffer.ReadUVarInt32();
			const headerBuffer = Buffer.alloc(size);
			byteBuffer.readBytes(headerBuffer);
			return decoders[EDemoCommands.DEM_FileHeader].decode(headerBuffer);
		} finally {
			fs.closeSync(fd);
		}
	};
	propIdToName = {};
	propIdToDecoder = {};
	_emitQueue = (queue) => {
		if (this._hasEnded) return;
		for (const element of queue) {
			if (this._hasEnded) return;
			this.emit(element[0], element[1]);
		}
		queue.length = 0;
	};
	/** Non-blocking parse from a pre-loaded Buffer. */
	async _parseBuffer(buffer, opts = {}) {
		const entityMode = opts.entities ?? EntityMode.NONE;
		this._directWriteMode = true;
		this.gameEvents.entityMode = entityMode;
		await new ParseSession(buffer, entityMode, this._emitQueue, this, opts).runAsync();
		this._directWriteMode = false;
		this._hasEnded = true;
	}
	/** Non-blocking parse from a file path using chunked reads (low memory). */
	async _parseFile(filePath, opts = {}) {
		const entityMode = opts.entities ?? EntityMode.NONE;
		this._directWriteMode = true;
		this.gameEvents.entityMode = entityMode;
		await ParseSession.fromFile(filePath, entityMode, this._emitQueue, this, opts).runAsync();
		this._directWriteMode = false;
		this._hasEnded = true;
	}
	/** Core streaming parse from a Readable. */
	_parseStream(stream, opts = {}) {
		const entityMode = opts.entities ?? EntityMode.NONE;
		this._stream = stream;
		this._directWriteMode = true;
		this.gameEvents.entityMode = entityMode;
		const { promise, resolve } = Promise.withResolvers();
		let session = null;
		let finished = false;
		let pendingChunks = [];
		const finish = () => {
			finished = true;
			stream.off("data", onData);
			stream.off("error", onError);
			stream.off("end", onEnd);
			this._directWriteMode = false;
			this._hasEnded = true;
		};
		const tryInit = () => {
			if (pendingChunks.reduce((s, c) => s + c.length, 0) < 16) return false;
			session = new ParseSession(Buffer.concat(pendingChunks), entityMode, this._emitQueue, this, opts);
			pendingChunks = [];
			return true;
		};
		const onData = (chunk) => {
			if (finished) return;
			if (!session) {
				pendingChunks.push(chunk);
				if (!tryInit()) return;
			} else session.pushChunk(chunk);
			try {
				if (!session.processFrames()) {
					session.flush();
					finish();
					resolve();
				}
			} catch (e) {
				finish();
				const error = e instanceof Error ? e : /* @__PURE__ */ new Error(`Exception during parsing: ${e}`);
				this.emit("end", {
					error,
					incomplete: false
				});
				resolve();
			}
		};
		const onError = (err) => {
			if (finished) return;
			finish();
			this.emit("end", {
				error: err,
				incomplete: true
			});
			resolve();
		};
		const onEnd = () => {
			if (finished) return;
			if (session) try {
				session.processFrames();
			} catch {}
			finish();
			this.emit("end", { incomplete: true });
			resolve();
		};
		stream.on("data", onData);
		stream.on("error", onError);
		stream.on("end", onEnd);
		return promise;
	}
	parseDemo(source, opts = {}) {
		if (this._hasEnded) throw new Error("Demo has already been parsed");
		this._parseStartTime = process.hrtime.bigint();
		if (typeof source === "string") {
			if (opts.stream === false) return this._parseFile(source, opts);
			return this._parseStream(fs.createReadStream(source), opts);
		}
		if (Buffer.isBuffer(source)) return this._parseBuffer(source, opts);
		return this._parseStream(source, opts);
	}
	cancel() {
		if (this._hasEnded) throw new Error("Demo has already been parsed");
		this._hasEnded = true;
		this._stream?.destroy(/* @__PURE__ */ new Error("Stream canceled"));
		this._stream = null;
		this.emit("cancel");
		this.emit("end", {
			incomplete: true,
			reason: "cancelled"
		});
	}
	/**
	* Parse a live CS2 GOTV HTTP broadcast. Convenience wrapper around
	* {@link HttpBroadcastReader}. Resolves when the broadcast ends or is
	* cancelled; throws if the broadcast terminates with an error.
	*
	* For finer-grained control (live `sync`/`fragment`/`tailTick` inspection,
	* separate start/run, stop), construct `HttpBroadcastReader` directly.
	*
	* @example
	* await parser.parseHttpBroadcast('https://relay.example.com/match/', {
	*   entities: EntityMode.ALL
	* });
	*/
	async parseHttpBroadcast(baseUrl, opts = {}) {
		const reader = new HttpBroadcastReader(this, baseUrl, opts);
		await reader.start();
		const terminus = await reader.run();
		if (terminus.reason === "error") throw terminus.error instanceof Error ? terminus.error : new Error(String(terminus.error));
	}
	/**
	* @internal Used by HttpBroadcastReader to wire a broadcast-mode ParseSession
	* to the parser's emit queue and direct-write entity tracking. Throws if a
	* previous parse already ended on this DemoReader.
	*/
	_attachBroadcastSession(opts = {}) {
		if (this._hasEnded) throw new Error("Demo has already been parsed");
		this._parseStartTime = process.hrtime.bigint();
		const entityMode = opts.entities ?? EntityMode.NONE;
		this._directWriteMode = true;
		this.gameEvents.entityMode = entityMode;
		return ParseSession.forBroadcast(entityMode, this._emitQueue, this, opts);
	}
};
//#endregion
export { BroadcastFetchError, BroadcastProtocolError, DemoReader, EntityHelper, EntityMode, GameRules, HttpBroadcastReader, Player, PlayerPawn, Team, TeamNumber, WinRoundReason, createDefaultFetcher, isEntityClass };
