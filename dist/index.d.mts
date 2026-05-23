import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import EventEmitter from "events";
import { Readable } from "stream";

//#region src/ts-proto/networkbasetypes.d.ts
interface CMsgPlayerInfo {
  name?: string | undefined;
  xuid?: string | undefined;
  userid?: number | undefined;
  steamid?: string | undefined;
  fakeplayer?: boolean | undefined;
  ishltv?: boolean | undefined;
}
interface CSVCMsg_GameSessionConfiguration {
  is_multiplayer?: boolean | undefined;
  is_loadsavegame?: boolean | undefined;
  is_background_map?: boolean | undefined;
  is_headless?: boolean | undefined;
  min_client_limit?: number | undefined;
  max_client_limit?: number | undefined;
  max_clients?: number | undefined;
  tick_interval?: number | undefined;
  hostname?: string | undefined;
  savegamename?: string | undefined;
  s1_mapname?: string | undefined;
  gamemode?: string | undefined;
  server_ip_address?: string | undefined;
  data?: Uint8Array | undefined;
  is_localonly?: boolean | undefined;
  no_steam_server?: boolean | undefined;
  is_transition?: boolean | undefined;
  previouslevel?: string | undefined;
  landmarkname?: string | undefined;
}
declare const CMsgPlayerInfo: MessageFns$6<CMsgPlayerInfo>;
declare const CSVCMsg_GameSessionConfiguration: MessageFns$6<CSVCMsg_GameSessionConfiguration>;
type Builtin$6 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$6<T> = T extends Builtin$6 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$6<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$6<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$6<T[K]> } : Partial<T>;
type KeysOfUnion$6<T> = T extends T ? keyof T : never;
type Exact$6<P, I extends P> = P extends Builtin$6 ? P : P & { [K in keyof P]: Exact$6<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$6<P>>]: never };
interface MessageFns$6<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$6<DeepPartial$6<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$6<DeepPartial$6<T>, I>>(object: I): T;
}
//#endregion
//#region src/ts-proto/netmessages.d.ts
declare const SVC_Messages: {
  readonly svc_ServerInfo: 40;
  readonly svc_FlattenedSerializer: 41;
  readonly svc_ClassInfo: 42;
  readonly svc_SetPause: 43;
  readonly svc_CreateStringTable: 44;
  readonly svc_UpdateStringTable: 45;
  readonly svc_VoiceInit: 46;
  readonly svc_VoiceData: 47;
  readonly svc_Print: 48;
  readonly svc_Sounds: 49;
  readonly svc_SetView: 50;
  readonly svc_ClearAllStringTables: 51;
  readonly svc_CmdKeyValues: 52;
  readonly svc_BSPDecal: 53;
  readonly svc_SplitScreen: 54;
  readonly svc_PacketEntities: 55;
  readonly svc_Prefetch: 56;
  readonly svc_Menu: 57;
  readonly svc_GetCvarValue: 58;
  readonly svc_StopSound: 59;
  readonly svc_PeerList: 60;
  readonly svc_PacketReliable: 61;
  readonly svc_HLTVStatus: 62;
  readonly svc_ServerSteamID: 63;
  readonly svc_FullFrameSplit: 70;
  readonly svc_RconServerDetails: 71;
  readonly svc_UserMessage: 72;
  readonly svc_Broadcast_Command: 74;
  readonly svc_HltvFixupOperatorStatus: 75;
  readonly svc_UserCmds: 76;
  readonly svc_NextMsgPredicted: 77;
  readonly UNRECOGNIZED: -1;
};
type SVC_Messages = typeof SVC_Messages[keyof typeof SVC_Messages];
declare namespace SVC_Messages {
  type svc_ServerInfo = typeof SVC_Messages.svc_ServerInfo;
  type svc_FlattenedSerializer = typeof SVC_Messages.svc_FlattenedSerializer;
  type svc_ClassInfo = typeof SVC_Messages.svc_ClassInfo;
  type svc_SetPause = typeof SVC_Messages.svc_SetPause;
  type svc_CreateStringTable = typeof SVC_Messages.svc_CreateStringTable;
  type svc_UpdateStringTable = typeof SVC_Messages.svc_UpdateStringTable;
  type svc_VoiceInit = typeof SVC_Messages.svc_VoiceInit;
  type svc_VoiceData = typeof SVC_Messages.svc_VoiceData;
  type svc_Print = typeof SVC_Messages.svc_Print;
  type svc_Sounds = typeof SVC_Messages.svc_Sounds;
  type svc_SetView = typeof SVC_Messages.svc_SetView;
  type svc_ClearAllStringTables = typeof SVC_Messages.svc_ClearAllStringTables;
  type svc_CmdKeyValues = typeof SVC_Messages.svc_CmdKeyValues;
  type svc_BSPDecal = typeof SVC_Messages.svc_BSPDecal;
  type svc_SplitScreen = typeof SVC_Messages.svc_SplitScreen;
  type svc_PacketEntities = typeof SVC_Messages.svc_PacketEntities;
  type svc_Prefetch = typeof SVC_Messages.svc_Prefetch;
  type svc_Menu = typeof SVC_Messages.svc_Menu;
  type svc_GetCvarValue = typeof SVC_Messages.svc_GetCvarValue;
  type svc_StopSound = typeof SVC_Messages.svc_StopSound;
  type svc_PeerList = typeof SVC_Messages.svc_PeerList;
  type svc_PacketReliable = typeof SVC_Messages.svc_PacketReliable;
  type svc_HLTVStatus = typeof SVC_Messages.svc_HLTVStatus;
  type svc_ServerSteamID = typeof SVC_Messages.svc_ServerSteamID;
  type svc_FullFrameSplit = typeof SVC_Messages.svc_FullFrameSplit;
  type svc_RconServerDetails = typeof SVC_Messages.svc_RconServerDetails;
  type svc_UserMessage = typeof SVC_Messages.svc_UserMessage;
  type svc_Broadcast_Command = typeof SVC_Messages.svc_Broadcast_Command;
  type svc_HltvFixupOperatorStatus = typeof SVC_Messages.svc_HltvFixupOperatorStatus;
  type svc_UserCmds = typeof SVC_Messages.svc_UserCmds;
  type svc_NextMsgPredicted = typeof SVC_Messages.svc_NextMsgPredicted;
  type UNRECOGNIZED = typeof SVC_Messages.UNRECOGNIZED;
}
declare const VoiceDataFormat_t: {
  readonly VOICEDATA_FORMAT_STEAM: 0;
  readonly VOICEDATA_FORMAT_ENGINE: 1;
  readonly VOICEDATA_FORMAT_OPUS: 2;
  readonly UNRECOGNIZED: -1;
};
type VoiceDataFormat_t = typeof VoiceDataFormat_t[keyof typeof VoiceDataFormat_t];
declare namespace VoiceDataFormat_t {
  type VOICEDATA_FORMAT_STEAM = typeof VoiceDataFormat_t.VOICEDATA_FORMAT_STEAM;
  type VOICEDATA_FORMAT_ENGINE = typeof VoiceDataFormat_t.VOICEDATA_FORMAT_ENGINE;
  type VOICEDATA_FORMAT_OPUS = typeof VoiceDataFormat_t.VOICEDATA_FORMAT_OPUS;
  type UNRECOGNIZED = typeof VoiceDataFormat_t.UNRECOGNIZED;
}
interface CMsgVoiceAudio {
  format?: VoiceDataFormat_t | undefined;
  voice_data?: Uint8Array | undefined;
  sequence_bytes?: number | undefined;
  section_number?: number | undefined;
  sample_rate?: number | undefined;
  uncompressed_sample_offset?: number | undefined;
  num_packets?: number | undefined;
  packet_offsets: number[];
  voice_level?: number | undefined;
}
interface CSVCMsg_ServerInfo {
  protocol?: number | undefined;
  server_count?: number | undefined;
  is_dedicated?: boolean | undefined;
  is_hltv?: boolean | undefined;
  c_os?: number | undefined;
  max_clients?: number | undefined;
  max_classes?: number | undefined;
  player_slot?: number | undefined;
  tick_interval?: number | undefined;
  game_dir?: string | undefined;
  map_name?: string | undefined;
  sky_name?: string | undefined;
  host_name?: string | undefined;
  addon_name?: string | undefined;
  game_session_config?: CSVCMsg_GameSessionConfiguration | undefined;
  game_session_manifest?: Uint8Array | undefined;
}
interface CSVCMsg_UserMessage {
  msg_type?: number | undefined;
  msg_data?: Uint8Array | undefined;
  passthrough?: number | undefined;
}
interface CSVCMsg_CreateStringTable {
  name?: string | undefined;
  num_entries?: number | undefined;
  user_data_fixed_size?: boolean | undefined;
  user_data_size?: number | undefined;
  user_data_size_bits?: number | undefined;
  flags?: number | undefined;
  string_data?: Uint8Array | undefined;
  uncompressed_size?: number | undefined;
  data_compressed?: boolean | undefined;
  using_varint_bitcounts?: boolean | undefined;
}
interface CSVCMsg_UpdateStringTable {
  table_id?: number | undefined;
  num_changed_entries?: number | undefined;
  string_data?: Uint8Array | undefined;
}
interface CSVCMsg_VoiceData {
  audio?: CMsgVoiceAudio | undefined;
  client?: number | undefined;
  proximity?: boolean | undefined;
  xuid?: string | undefined;
  audible_mask?: number | undefined;
  tick?: number | undefined;
  passthrough?: number | undefined;
}
interface CMsgServerUserCmd {
  data?: Uint8Array | undefined;
  cmd_number?: number | undefined;
  player_slot?: number | undefined;
  server_tick_executed?: number | undefined;
  client_tick?: number | undefined;
}
interface CSVCMsg_UserCommands {
  commands: CMsgServerUserCmd[];
}
declare const CMsgVoiceAudio: MessageFns$5<CMsgVoiceAudio>;
declare const CSVCMsg_ServerInfo: MessageFns$5<CSVCMsg_ServerInfo>;
declare const CSVCMsg_UserMessage: MessageFns$5<CSVCMsg_UserMessage>;
declare const CSVCMsg_CreateStringTable: MessageFns$5<CSVCMsg_CreateStringTable>;
declare const CSVCMsg_UpdateStringTable: MessageFns$5<CSVCMsg_UpdateStringTable>;
declare const CSVCMsg_VoiceData: MessageFns$5<CSVCMsg_VoiceData>;
declare const CMsgServerUserCmd: MessageFns$5<CMsgServerUserCmd>;
declare const CSVCMsg_UserCommands: MessageFns$5<CSVCMsg_UserCommands>;
type Builtin$5 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$5<T> = T extends Builtin$5 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$5<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$5<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$5<T[K]> } : Partial<T>;
type KeysOfUnion$5<T> = T extends T ? keyof T : never;
type Exact$5<P, I extends P> = P extends Builtin$5 ? P : P & { [K in keyof P]: Exact$5<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$5<P>>]: never };
interface MessageFns$5<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$5<DeepPartial$5<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$5<DeepPartial$5<T>, I>>(object: I): T;
}
//#endregion
//#region src/ts-proto/demo.d.ts
interface CDemoFileHeader {
  demo_file_stamp?: string | undefined;
  patch_version?: number | undefined;
  server_name?: string | undefined;
  client_name?: string | undefined;
  map_name?: string | undefined;
  game_directory?: string | undefined;
  fullpackets_version?: number | undefined;
  allow_clientside_entities?: boolean | undefined;
  allow_clientside_particles?: boolean | undefined;
  addons?: string | undefined;
  demo_version_name?: string | undefined;
  demo_version_guid?: string | undefined;
  build_num?: number | undefined;
  game?: string | undefined;
  server_start_tick?: number | undefined;
}
declare const CDemoFileHeader: MessageFns$4<CDemoFileHeader>;
type Builtin$4 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$4<T> = T extends Builtin$4 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$4<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$4<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$4<T[K]> } : Partial<T>;
type KeysOfUnion$4<T> = T extends T ? keyof T : never;
type Exact$4<P, I extends P> = P extends Builtin$4 ? P : P & { [K in keyof P]: Exact$4<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$4<P>>]: never };
interface MessageFns$4<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$4<DeepPartial$4<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$4<DeepPartial$4<T>, I>>(object: I): T;
}
//#endregion
//#region src/ts-proto/gameevents.d.ts
interface CMsgSource1LegacyGameEventList {
  descriptors: CMsgSource1LegacyGameEventList_descriptor_t[];
}
interface CMsgSource1LegacyGameEventList_key_t {
  type?: number | undefined;
  name?: string | undefined;
}
interface CMsgSource1LegacyGameEventList_descriptor_t {
  eventid?: number | undefined;
  name?: string | undefined;
  keys: CMsgSource1LegacyGameEventList_key_t[];
}
interface CMsgSource1LegacyGameEvent {
  event_name?: string | undefined;
  eventid?: number | undefined;
  keys: CMsgSource1LegacyGameEvent_key_t[];
  server_tick?: number | undefined;
  passthrough?: number | undefined;
}
interface CMsgSource1LegacyGameEvent_key_t {
  type?: number | undefined;
  val_string?: string | undefined;
  val_float?: number | undefined;
  val_long?: number | undefined;
  val_short?: number | undefined;
  val_byte?: number | undefined;
  val_bool?: boolean | undefined;
  val_uint64?: string | undefined;
}
declare const CMsgSource1LegacyGameEventList: MessageFns$3<CMsgSource1LegacyGameEventList>;
declare const CMsgSource1LegacyGameEventList_key_t: MessageFns$3<CMsgSource1LegacyGameEventList_key_t>;
declare const CMsgSource1LegacyGameEventList_descriptor_t: MessageFns$3<CMsgSource1LegacyGameEventList_descriptor_t>;
declare const CMsgSource1LegacyGameEvent: MessageFns$3<CMsgSource1LegacyGameEvent>;
declare const CMsgSource1LegacyGameEvent_key_t: MessageFns$3<CMsgSource1LegacyGameEvent_key_t>;
type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$3<T[K]> } : Partial<T>;
type KeysOfUnion$3<T> = T extends T ? keyof T : never;
type Exact$3<P, I extends P> = P extends Builtin$3 ? P : P & { [K in keyof P]: Exact$3<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$3<P>>]: never };
interface MessageFns$3<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$3<DeepPartial$3<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$3<DeepPartial$3<T>, I>>(object: I): T;
}
//#endregion
//#region src/generated/entityTypes.d.ts
/** Prefixes all keys of T with "P." */
type Prefixed<P extends string, T> = { readonly [K in keyof T as K extends string ? `${P}.${K}` : never]: T[K] };
interface _CBodyComponentBaseAnimGraph {
  readonly "AnimGraph2SerializedPoseRecipeSlot_t.m_topology"?: unknown;
  readonly "m_angRotation"?: [number, number, number];
  readonly "m_bClientClothCreationSuppressed"?: boolean;
  readonly "m_bUseParentRenderBounds"?: boolean;
  readonly "m_cellX"?: number;
  readonly "m_cellY"?: number;
  readonly "m_cellZ"?: number;
  readonly "m_flPlaybackRate"?: number;
  readonly "m_flRootBoneOffset_x"?: number;
  readonly "m_flRootBoneOffset_y"?: number;
  readonly "m_flRootBoneOffset_z"?: number;
  readonly "m_flScale"?: number;
  readonly "m_flSeqFixedCycle"?: number;
  readonly "m_flSeqStartTime"?: number;
  readonly "m_hGraphDefinitionAG2"?: bigint;
  readonly "m_hierarchyAttachName"?: number;
  readonly "m_hModel"?: bigint;
  readonly "m_hParent"?: number;
  readonly "m_hSequence"?: bigint;
  readonly "m_materialGroup"?: number;
  readonly "m_MeshGroupMask"?: bigint;
  readonly "m_name"?: number;
  readonly "m_nAnimationAlgorithm"?: number;
  readonly "m_nAnimLoopMode"?: number;
  readonly "m_nAnimStateNoInterpSerialNumber"?: number;
  readonly "m_nBodyGroupChoices"?: number;
  readonly "m_nHitboxSet"?: number;
  readonly "m_nIdealMotionType"?: number;
  readonly "m_nOutsideWorld"?: number;
  readonly "m_nRootBoneOffsetResetSerialNumber"?: number;
  readonly "m_nSecondarySkeletonMasterCount"?: number;
  readonly "m_nSerializePoseRecipeAG2ActiveSlot"?: number;
  readonly "m_nSerializePoseRecipeVersionAG2"?: number;
  readonly "m_nServerGraphInstanceIteration"?: number;
  readonly "m_nServerSerializationContextIteration"?: number;
  readonly "m_primaryGraphId"?: number;
  readonly "m_SerializePoseRecipeAG2Dynamic"?: Uint8Array;
  readonly "m_topology"?: unknown;
  readonly "m_vecExternalClipIds"?: number;
  readonly "m_vecExternalGraphIds"?: number;
  readonly "m_vecSecondarySkeletons"?: number;
  readonly "m_vecSecondarySkeletonSlotIDs"?: string;
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CBodyComponentBaseModelEntity {
  readonly "m_angRotation"?: [number, number, number];
  readonly "m_bClientClothCreationSuppressed"?: boolean;
  readonly "m_bUseParentRenderBounds"?: boolean;
  readonly "m_cellX"?: number;
  readonly "m_cellY"?: number;
  readonly "m_cellZ"?: number;
  readonly "m_flRootBoneOffset_x"?: number;
  readonly "m_flRootBoneOffset_y"?: number;
  readonly "m_flRootBoneOffset_z"?: number;
  readonly "m_flScale"?: number;
  readonly "m_hierarchyAttachName"?: number;
  readonly "m_hModel"?: bigint;
  readonly "m_hParent"?: number;
  readonly "m_materialGroup"?: number;
  readonly "m_MeshGroupMask"?: bigint;
  readonly "m_name"?: number;
  readonly "m_nAnimStateNoInterpSerialNumber"?: number;
  readonly "m_nBodyGroupChoices"?: number;
  readonly "m_nHitboxSet"?: number;
  readonly "m_nIdealMotionType"?: number;
  readonly "m_nOutsideWorld"?: number;
  readonly "m_nRootBoneOffsetResetSerialNumber"?: number;
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CBodyComponentPoint {
  readonly "m_angRotation"?: [number, number, number];
  readonly "m_cellX"?: number;
  readonly "m_cellY"?: number;
  readonly "m_cellZ"?: number;
  readonly "m_flScale"?: number;
  readonly "m_hierarchyAttachName"?: number;
  readonly "m_hParent"?: number;
  readonly "m_name"?: number;
  readonly "m_nOutsideWorld"?: number;
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CCSGameRules {
  readonly "m_arrProhibitedItemIndices"?: number;
  readonly "m_arrTournamentActiveCasterAccounts"?: number;
  readonly "m_bAnyHostageReached"?: boolean;
  readonly "m_bBlockersPresent"?: boolean;
  readonly "m_bBombDropped"?: boolean;
  readonly "m_bBombPlanted"?: boolean;
  readonly "m_bCTCantBuy"?: boolean;
  readonly "m_bCTTimeOutActive"?: boolean;
  readonly "m_bFreezePeriod"?: boolean;
  readonly "m_bGamePaused"?: boolean;
  readonly "m_bGameRestart"?: boolean;
  readonly "m_bHasMatchStarted"?: boolean;
  readonly "m_bIsDroppingItems"?: boolean;
  readonly "m_bIsHltvActive"?: boolean;
  readonly "m_bIsQuestEligible"?: boolean;
  readonly "m_bIsQueuedMatchmaking"?: boolean;
  readonly "m_bIsValveDS"?: boolean;
  readonly "m_bLogoMap"?: boolean;
  readonly "m_bMapHasBombTarget"?: boolean;
  readonly "m_bMapHasBuyZone"?: boolean;
  readonly "m_bMapHasRescueZone"?: boolean;
  readonly "m_bMatchWaitingForResume"?: boolean;
  readonly "m_bPlayAllStepSoundsOnServer"?: boolean;
  readonly "m_bRoundEndNoMusic"?: boolean;
  readonly "m_bRoundEndShowTimerDefend"?: boolean;
  readonly "m_bRoundInProgress"?: boolean;
  readonly "m_bTCantBuy"?: boolean;
  readonly "m_bTeamIntroPeriod"?: boolean;
  readonly "m_bTechnicalTimeOut"?: boolean;
  readonly "m_bTerroristTimeOutActive"?: boolean;
  readonly "m_bWarmupPeriod"?: boolean;
  readonly "m_eRoundEndReason"?: number;
  readonly "m_eRoundWinReason"?: number;
  readonly "m_flCMMItemDropRevealEndTime"?: number;
  readonly "m_flCMMItemDropRevealStartTime"?: number;
  readonly "m_flCTTimeOutRemaining"?: number;
  readonly "m_flGameStartTime"?: number;
  readonly "m_flNextRespawnWave"?: number;
  readonly "m_flRestartRoundTime"?: number;
  readonly "m_flTerroristTimeOutRemaining"?: number;
  readonly "m_fMatchStartTime"?: number;
  readonly "m_fRoundStartTime"?: number;
  readonly "m_fWarmupPeriodEnd"?: number;
  readonly "m_fWarmupPeriodStart"?: number;
  readonly "m_gamePhase"?: number;
  readonly "m_hBombPlanter"?: number;
  readonly "m_iBombSite"?: number;
  readonly "m_iFirstSecondHalfRound"?: number;
  readonly "m_iFreezeTime"?: number;
  readonly "m_iHostagesRemaining"?: number;
  readonly "m_iMatchStats_PlayersAlive_CT"?: number;
  readonly "m_iMatchStats_PlayersAlive_T"?: number;
  readonly "m_iMatchStats_RoundResults"?: number;
  readonly "m_iNumConsecutiveCTLoses"?: number;
  readonly "m_iNumConsecutiveTerroristLoses"?: number;
  readonly "m_iRoundEndFunFactData1"?: number;
  readonly "m_iRoundEndFunFactData2"?: number;
  readonly "m_iRoundEndFunFactData3"?: number;
  readonly "m_iRoundEndFunFactPlayerSlot"?: number;
  readonly "m_iRoundEndLegacy"?: number;
  readonly "m_iRoundEndPlayerCount"?: number;
  readonly "m_iRoundEndTimerTime"?: number;
  readonly "m_iRoundEndWinnerTeam"?: number;
  readonly "m_iRoundStartRoundNumber"?: number;
  readonly "m_iRoundTime"?: number;
  readonly "m_iRoundWinStatus"?: number;
  readonly "m_iSpectatorSlotCount"?: number;
  readonly "m_MatchDevice"?: number;
  readonly "m_MinimapVerticalSectionHeights"?: number;
  readonly "m_nCTTeamIntroVariant"?: number;
  readonly "m_nCTTimeOuts"?: number;
  readonly "m_nEndMatchMapGroupVoteOptions"?: number;
  readonly "m_nEndMatchMapGroupVoteTypes"?: number;
  readonly "m_nEndMatchMapVoteWinner"?: number;
  readonly "m_nHalloweenMaskListSeed"?: number;
  readonly "m_nMatchAbortedEarlyReason"?: number;
  readonly "m_nMatchEndCount"?: number;
  readonly "m_nMatchSeed"?: number;
  readonly "m_nNextMapInMapgroup"?: number;
  readonly "m_nOvertimePlaying"?: number;
  readonly "m_nPauseStartTick"?: number;
  readonly "m_nQueuedMatchmakingMode"?: number;
  readonly "m_nRoundEndCount"?: number;
  readonly "m_nRoundsPlayedThisPhase"?: number;
  readonly "m_nRoundStartCount"?: number;
  readonly "m_nTerroristTimeOuts"?: number;
  readonly "m_nTotalPausedTicks"?: number;
  readonly "m_nTournamentPredictionsPct"?: number;
  readonly "m_nTTeamIntroVariant"?: number;
  readonly "m_numBestOfMaps"?: number;
  readonly "m_sRoundEndFunFactToken"?: string;
  readonly "m_sRoundEndMessage"?: string;
  readonly "m_szMatchStatTxt"?: string;
  readonly "m_szTournamentEventName"?: string;
  readonly "m_szTournamentEventStage"?: string;
  readonly "m_szTournamentPredictionsTxt"?: string;
  readonly "m_TeamRespawnWaveTimes"?: number;
  readonly "m_timeUntilNextPhaseStarts"?: number;
  readonly "m_totalRoundsPlayed"?: number;
  readonly "m_vMinimapMaxs"?: [number, number, number];
  readonly "m_vMinimapMins"?: [number, number, number];
}
interface _CCSPlayer_ActionTrackingServices {
  readonly "m_bIsRescuing"?: boolean;
  readonly "m_nCount"?: number;
  readonly "m_nItemDefIndex"?: number;
  readonly "WeaponPurchaseCount_t.m_nCount"?: number;
  readonly "WeaponPurchaseCount_t.m_nItemDefIndex"?: number;
}
interface _CCSPlayer_BulletServices {
  readonly "m_totalHitsOnServer"?: number;
}
interface _CCSPlayer_BuyServices {
  readonly "m_bPrevHelmet"?: boolean;
  readonly "m_hItem"?: bigint;
  readonly "m_nCost"?: number;
  readonly "m_nPrevArmor"?: number;
  readonly "m_unDefIdx"?: number;
  readonly "SellbackPurchaseEntry_t.m_bPrevHelmet"?: boolean;
  readonly "SellbackPurchaseEntry_t.m_hItem"?: bigint;
  readonly "SellbackPurchaseEntry_t.m_nCost"?: number;
  readonly "SellbackPurchaseEntry_t.m_nPrevArmor"?: number;
  readonly "SellbackPurchaseEntry_t.m_unDefIdx"?: number;
}
interface _CCSPlayer_CameraServices {
  readonly "localBits"?: number;
  readonly "localSound"?: [number, number, number];
  readonly "m_flCsViewPunchAngleTickRatio"?: number;
  readonly "m_flFOVRate"?: number;
  readonly "m_flFOVTime"?: number;
  readonly "m_hColorCorrectionCtrl"?: number;
  readonly "m_hCtrl"?: number;
  readonly "m_hTonemapController"?: number;
  readonly "m_hViewEntity"?: number;
  readonly "m_hZoomOwner"?: number;
  readonly "m_iFOV"?: number;
  readonly "m_iFOVStart"?: number;
  readonly "m_nCsViewPunchAngleTick"?: number;
  readonly "m_PostProcessingVolumes"?: number;
  readonly "m_vecCsViewPunchAngle"?: [number, number, number];
  readonly "soundEventHash"?: number;
  readonly "soundscapeEntityListIndex"?: number;
  readonly "soundscapeIndex"?: number;
}
interface _CCSPlayer_HostageServices {
  readonly "m_hCarriedHostage"?: number;
  readonly "m_hCarriedHostageProp"?: number;
}
interface _CCSPlayer_ItemServices {
  readonly "m_bHasDefuser"?: boolean;
  readonly "m_bHasHelmet"?: boolean;
}
interface _CCSPlayer_MovementServices {
  readonly "m_arrForceSubtickMoveWhen"?: number;
  readonly "m_bDesiresDuck"?: boolean;
  readonly "m_bDucked"?: boolean;
  readonly "m_bDucking"?: boolean;
  readonly "m_bDuckOverride"?: boolean;
  readonly "m_bHasEverProcessedCommand"?: boolean;
  readonly "m_bJumpApexPending"?: boolean;
  readonly "m_bOldJumpPressed"?: boolean;
  readonly "m_bUseFrictionStashedSpeed"?: boolean;
  readonly "m_bWasSurfing"?: boolean;
  readonly "m_flBombPlantViewOffset"?: number;
  readonly "m_flDuckAmount"?: number;
  readonly "m_flDuckRootOffset"?: number;
  readonly "m_flDuckSpeed"?: number;
  readonly "m_flDuckViewOffset"?: number;
  readonly "m_flFallVelocity"?: number;
  readonly "m_flFrictionStashedSpeed"?: number;
  readonly "m_flLastActualJumpPressFrac"?: number;
  readonly "m_flLastDuckTime"?: number;
  readonly "m_flLastJumpFrac"?: number;
  readonly "m_flLastJumpVelocityZ"?: number;
  readonly "m_flLastLandedFrac"?: number;
  readonly "m_flLastLandedVelocityX"?: number;
  readonly "m_flLastLandedVelocityY"?: number;
  readonly "m_flLastLandedVelocityZ"?: number;
  readonly "m_flLastUsableJumpPressFrac"?: number;
  readonly "m_flMaxspeed"?: number;
  readonly "m_flStamina"?: number;
  readonly "m_flUseFrictionStashedSpeedUntilFrac"?: number;
  readonly "m_fStashGrenadeParameterWhen"?: number;
  readonly "m_gtLastTimeInAir"?: number;
  readonly "m_gtLastTimeOnStaticWorldGround"?: number;
  readonly "m_nButtonDownMaskPrev"?: bigint;
  readonly "m_nGameCodeHasMovedPlayerAfterCommand"?: number;
  readonly "m_nLadderSurfacePropIndex"?: number;
  readonly "m_nLastActualJumpPressTick"?: number;
  readonly "m_nLastJumpTick"?: number;
  readonly "m_nLastLandedTick"?: number;
  readonly "m_nLastUsableJumpPressTick"?: number;
  readonly "m_nToggleButtonDownMask"?: bigint;
}
interface _CCSPlayer_PingServices {
  readonly "m_hPlayerPing"?: number;
}
interface _CCSPlayer_WeaponServices {
  readonly "m_bBlockInspectUntilNextGraphUpdate"?: boolean;
  readonly "m_flNextAttack"?: number;
  readonly "m_hActiveWeapon"?: number;
  readonly "m_hLastWeapon"?: number;
  readonly "m_hMyWeapons"?: number;
  readonly "m_iAmmo"?: number;
  readonly "m_networkAnimTiming"?: Uint8Array;
}
interface _CCSPlayerController_ActionTrackingServices {
  readonly "CSPerRoundStats_t.m_iAssists"?: number;
  readonly "CSPerRoundStats_t.m_iCashEarned"?: number;
  readonly "CSPerRoundStats_t.m_iDamage"?: number;
  readonly "CSPerRoundStats_t.m_iDeaths"?: number;
  readonly "CSPerRoundStats_t.m_iEnemiesFlashed"?: number;
  readonly "CSPerRoundStats_t.m_iEquipmentValue"?: number;
  readonly "CSPerRoundStats_t.m_iHeadShotKills"?: number;
  readonly "CSPerRoundStats_t.m_iKillReward"?: number;
  readonly "CSPerRoundStats_t.m_iKills"?: number;
  readonly "CSPerRoundStats_t.m_iLiveTime"?: number;
  readonly "CSPerRoundStats_t.m_iMoneySaved"?: number;
  readonly "CSPerRoundStats_t.m_iObjective"?: number;
  readonly "CSPerRoundStats_t.m_iUtilityDamage"?: number;
  readonly "m_flTotalRoundDamageDealt"?: number;
  readonly "m_iAssists"?: number;
  readonly "m_iCashEarned"?: number;
  readonly "m_iDamage"?: number;
  readonly "m_iDeaths"?: number;
  readonly "m_iEnemiesFlashed"?: number;
  readonly "m_iEnemy3Ks"?: number;
  readonly "m_iEnemy4Ks"?: number;
  readonly "m_iEnemy5Ks"?: number;
  readonly "m_iEnemyKnifeKills"?: number;
  readonly "m_iEnemyTaserKills"?: number;
  readonly "m_iEquipmentValue"?: number;
  readonly "m_iHeadShotKills"?: number;
  readonly "m_iKillReward"?: number;
  readonly "m_iKills"?: number;
  readonly "m_iLiveTime"?: number;
  readonly "m_iMoneySaved"?: number;
  readonly "m_iNumRoundKills"?: number;
  readonly "m_iNumRoundKillsHeadshots"?: number;
  readonly "m_iObjective"?: number;
  readonly "m_iUtilityDamage"?: number;
}
interface _CCSPlayerController_DamageServices {
  readonly "CDamageRecord.m_bIsOtherEnemy"?: boolean;
  readonly "CDamageRecord.m_DamagerXuid"?: bigint;
  readonly "CDamageRecord.m_flActualHealthRemoved"?: number;
  readonly "CDamageRecord.m_flDamage"?: number;
  readonly "CDamageRecord.m_hPlayerControllerDamager"?: number;
  readonly "CDamageRecord.m_hPlayerControllerRecipient"?: number;
  readonly "CDamageRecord.m_iLastBulletUpdate"?: number;
  readonly "CDamageRecord.m_iNumHits"?: number;
  readonly "CDamageRecord.m_killType"?: number;
  readonly "CDamageRecord.m_PlayerDamager"?: number;
  readonly "CDamageRecord.m_PlayerRecipient"?: number;
  readonly "CDamageRecord.m_RecipientXuid"?: bigint;
  readonly "CDamageRecord.m_szPlayerDamagerName"?: string;
  readonly "CDamageRecord.m_szPlayerRecipientName"?: string;
  readonly "m_bIsOtherEnemy"?: boolean;
  readonly "m_DamagerXuid"?: bigint;
  readonly "m_flActualHealthRemoved"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_hPlayerControllerDamager"?: number;
  readonly "m_hPlayerControllerRecipient"?: number;
  readonly "m_iLastBulletUpdate"?: number;
  readonly "m_iNumHits"?: number;
  readonly "m_killType"?: number;
  readonly "m_nSendUpdate"?: number;
  readonly "m_PlayerDamager"?: number;
  readonly "m_PlayerRecipient"?: number;
  readonly "m_RecipientXuid"?: bigint;
  readonly "m_szPlayerDamagerName"?: string;
  readonly "m_szPlayerRecipientName"?: string;
}
interface _CCSPlayerController_InGameMoneyServices {
  readonly "m_iAccount"?: number;
  readonly "m_iCashSpentThisRound"?: number;
  readonly "m_iStartAccount"?: number;
  readonly "m_iTotalCashSpent"?: number;
}
interface _CCSPlayerController_InventoryServices {
  readonly "m_nPersonaDataPublicCommendsFriendly"?: number;
  readonly "m_nPersonaDataPublicCommendsLeader"?: number;
  readonly "m_nPersonaDataPublicCommendsTeacher"?: number;
  readonly "m_nPersonaDataPublicLevel"?: number;
  readonly "m_nPersonaDataXpTrailLevel"?: number;
  readonly "m_rank"?: bigint;
  readonly "m_unMusicID"?: number;
  readonly "ServerAuthoritativeWeaponSlot_t.unClass"?: number;
  readonly "ServerAuthoritativeWeaponSlot_t.unItemDefIdx"?: number;
  readonly "ServerAuthoritativeWeaponSlot_t.unSlot"?: number;
  readonly "unClass"?: number;
  readonly "unItemDefIdx"?: number;
  readonly "unSlot"?: number;
}
interface _CDamageRecord {
  readonly "m_bIsOtherEnemy"?: boolean;
  readonly "m_DamagerXuid"?: bigint;
  readonly "m_flActualHealthRemoved"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_hPlayerControllerDamager"?: number;
  readonly "m_hPlayerControllerRecipient"?: number;
  readonly "m_iLastBulletUpdate"?: number;
  readonly "m_iNumHits"?: number;
  readonly "m_killType"?: number;
  readonly "m_PlayerDamager"?: number;
  readonly "m_PlayerRecipient"?: number;
  readonly "m_RecipientXuid"?: bigint;
  readonly "m_szPlayerDamagerName"?: string;
  readonly "m_szPlayerRecipientName"?: string;
}
interface _CDestructiblePartsComponent {
  readonly "m_hOwner"?: number;
}
interface _CEconItemAttribute {
  readonly "m_bSetBonus"?: boolean;
  readonly "m_flInitialValue"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_nRefundableCurrency"?: number;
}
interface _CEntityIdentity {
  readonly "m_nameStringTableIndex"?: number;
}
interface _CPlayer_CameraServices {
  readonly "localBits"?: number;
  readonly "localSound"?: [number, number, number];
  readonly "m_flCsViewPunchAngleTickRatio"?: number;
  readonly "m_hColorCorrectionCtrl"?: number;
  readonly "m_hCtrl"?: number;
  readonly "m_hTonemapController"?: number;
  readonly "m_hViewEntity"?: number;
  readonly "m_nCsViewPunchAngleTick"?: number;
  readonly "m_PostProcessingVolumes"?: number;
  readonly "m_vecCsViewPunchAngle"?: [number, number, number];
  readonly "soundEventHash"?: number;
  readonly "soundscapeEntityListIndex"?: number;
  readonly "soundscapeIndex"?: number;
}
interface _CSPerRoundStats_t {
  readonly "m_iAssists"?: number;
  readonly "m_iCashEarned"?: number;
  readonly "m_iDamage"?: number;
  readonly "m_iDeaths"?: number;
  readonly "m_iEnemiesFlashed"?: number;
  readonly "m_iEquipmentValue"?: number;
  readonly "m_iHeadShotKills"?: number;
  readonly "m_iKillReward"?: number;
  readonly "m_iKills"?: number;
  readonly "m_iLiveTime"?: number;
  readonly "m_iMoneySaved"?: number;
  readonly "m_iObjective"?: number;
  readonly "m_iUtilityDamage"?: number;
}
interface _EntityRenderAttribute_t {
  readonly "m_ID"?: number;
  readonly "m_Values"?: [number, number, number];
}
interface _SellbackPurchaseEntry_t {
  readonly "m_bPrevHelmet"?: boolean;
  readonly "m_hItem"?: bigint;
  readonly "m_nCost"?: number;
  readonly "m_nPrevArmor"?: number;
  readonly "m_unDefIdx"?: number;
}
interface _ServerAuthoritativeWeaponSlot_t {
  readonly "unClass"?: number;
  readonly "unItemDefIdx"?: number;
  readonly "unSlot"?: number;
}
interface _ViewAngleServerChange_t {
  readonly "nIndex"?: number;
  readonly "nType"?: number;
  readonly "qAngle"?: [number, number, number];
}
interface _WeaponPurchaseCount_t {
  readonly "m_nCount"?: number;
  readonly "m_nItemDefIndex"?: number;
}
interface _CAK47Own {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bNeedsBoltAction"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iBurstShotsRemaining"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nRevolverCylinderIdx"?: number;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
  readonly "m_zoomLevel"?: number;
}
interface _CBaseCSGrenadeProjectileOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bIsLive"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_DmgRadius"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_flDetonateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hThrower"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nBounces"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nExplodeEffectIndex"?: bigint;
  readonly "m_nExplodeEffectTickBegin"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecExplodeEffectOrigin"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "m_vInitialPosition"?: [number, number, number];
  readonly "m_vInitialVelocity"?: [number, number, number];
}
interface _CBaseGrenadeOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bIsLive"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_DmgRadius"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_flDetonateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hThrower"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CBasePlayerControllerOwn {
  readonly "m_bKnownTeamMismatch"?: boolean;
  readonly "m_bNoClipEnabled"?: boolean;
  readonly "m_fFlags"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flFriction"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeScale"?: number;
  readonly "m_hPawn"?: number;
  readonly "m_iConnected"?: number;
  readonly "m_iDesiredFOV"?: number;
  readonly "m_iszPlayerName"?: string;
  readonly "m_iTeamNum"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nTickBase"?: number;
  readonly "m_steamID"?: bigint;
  readonly "m_vecBaseVelocity"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CBasePlayerPawnOwn {
  readonly "bClip3DSkyBoxNearToWorldFar"?: boolean;
  readonly "blend"?: boolean;
  readonly "blendtobackground"?: number;
  readonly "colorPrimary"?: number;
  readonly "colorPrimaryLerpTo"?: number;
  readonly "colorSecondary"?: number;
  readonly "colorSecondaryLerpTo"?: number;
  readonly "dirPrimary"?: [number, number, number];
  readonly "duration"?: number;
  readonly "enable"?: boolean;
  readonly "end"?: number;
  readonly "endLerpTo"?: number;
  readonly "exponent"?: number;
  readonly "farz"?: number;
  readonly "flClip3DSkyBoxNearToWorldFarOffset"?: number;
  readonly "HDRColorScale"?: number;
  readonly "lerptime"?: number;
  readonly "locallightscale"?: number;
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDeathTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFriction"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeScale"?: number;
  readonly "m_flWaterLevel"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hController"?: number;
  readonly "m_hDefaultController"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hGroundEntity"?: number;
  readonly "m_hMyWearables"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iHealth"?: number;
  readonly "m_iHideHUD"?: number;
  readonly "m_iMaxHealth"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_lifeState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nGroundBodyIndex"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_nWorldGroupID"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecBaseVelocity"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "maxdensity"?: number;
  readonly "maxdensityLerpTo"?: number;
  readonly "nIndex"?: number;
  readonly "nType"?: number;
  readonly "origin"?: [number, number, number];
  readonly "qAngle"?: [number, number, number];
  readonly "scale"?: number;
  readonly "scattering"?: number;
  readonly "skyboxFogFactor"?: number;
  readonly "skyboxFogFactorLerpTo"?: number;
  readonly "start"?: number;
  readonly "startLerpTo"?: number;
}
interface _CBasePlayerWeaponOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
}
interface _CC4Own {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBombPlacedAnimation"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bIsPlantingViaUse"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bSpotted"?: boolean;
  readonly "m_bSpottedByMask"?: number;
  readonly "m_bStartedArming"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fArmedTime"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
}
interface _CCSGameModeRules_ArmsRaceOwn {
  readonly "m_WeaponSequence"?: string;
}
interface _CCSGameModeRules_DeathmatchOwn {
  readonly "m_flDMBonusStartTime"?: number;
  readonly "m_flDMBonusTimeLength"?: number;
  readonly "m_sDMBonusWeapon"?: string;
}
interface _CCSGameRulesOwn {
  readonly "m_arrProhibitedItemIndices"?: number;
  readonly "m_arrTournamentActiveCasterAccounts"?: number;
  readonly "m_bAnyHostageReached"?: boolean;
  readonly "m_bBlockersPresent"?: boolean;
  readonly "m_bBombDropped"?: boolean;
  readonly "m_bBombPlanted"?: boolean;
  readonly "m_bCTCantBuy"?: boolean;
  readonly "m_bCTTimeOutActive"?: boolean;
  readonly "m_bFreezePeriod"?: boolean;
  readonly "m_bGamePaused"?: boolean;
  readonly "m_bGameRestart"?: boolean;
  readonly "m_bHasMatchStarted"?: boolean;
  readonly "m_bIsDroppingItems"?: boolean;
  readonly "m_bIsHltvActive"?: boolean;
  readonly "m_bIsQuestEligible"?: boolean;
  readonly "m_bIsQueuedMatchmaking"?: boolean;
  readonly "m_bIsValveDS"?: boolean;
  readonly "m_bLogoMap"?: boolean;
  readonly "m_bMapHasBombTarget"?: boolean;
  readonly "m_bMapHasBuyZone"?: boolean;
  readonly "m_bMapHasRescueZone"?: boolean;
  readonly "m_bMatchWaitingForResume"?: boolean;
  readonly "m_bPlayAllStepSoundsOnServer"?: boolean;
  readonly "m_bRoundEndNoMusic"?: boolean;
  readonly "m_bRoundEndShowTimerDefend"?: boolean;
  readonly "m_bRoundInProgress"?: boolean;
  readonly "m_bTCantBuy"?: boolean;
  readonly "m_bTeamIntroPeriod"?: boolean;
  readonly "m_bTechnicalTimeOut"?: boolean;
  readonly "m_bTerroristTimeOutActive"?: boolean;
  readonly "m_bWarmupPeriod"?: boolean;
  readonly "m_eRoundEndReason"?: number;
  readonly "m_eRoundWinReason"?: number;
  readonly "m_flCMMItemDropRevealEndTime"?: number;
  readonly "m_flCMMItemDropRevealStartTime"?: number;
  readonly "m_flCTTimeOutRemaining"?: number;
  readonly "m_flGameStartTime"?: number;
  readonly "m_flNextRespawnWave"?: number;
  readonly "m_flRestartRoundTime"?: number;
  readonly "m_flTerroristTimeOutRemaining"?: number;
  readonly "m_fMatchStartTime"?: number;
  readonly "m_fRoundStartTime"?: number;
  readonly "m_fWarmupPeriodEnd"?: number;
  readonly "m_fWarmupPeriodStart"?: number;
  readonly "m_gamePhase"?: number;
  readonly "m_hBombPlanter"?: number;
  readonly "m_iBombSite"?: number;
  readonly "m_iFirstSecondHalfRound"?: number;
  readonly "m_iFreezeTime"?: number;
  readonly "m_iHostagesRemaining"?: number;
  readonly "m_iMatchStats_PlayersAlive_CT"?: number;
  readonly "m_iMatchStats_PlayersAlive_T"?: number;
  readonly "m_iMatchStats_RoundResults"?: number;
  readonly "m_iNumConsecutiveCTLoses"?: number;
  readonly "m_iNumConsecutiveTerroristLoses"?: number;
  readonly "m_iRoundEndFunFactData1"?: number;
  readonly "m_iRoundEndFunFactData2"?: number;
  readonly "m_iRoundEndFunFactData3"?: number;
  readonly "m_iRoundEndFunFactPlayerSlot"?: number;
  readonly "m_iRoundEndLegacy"?: number;
  readonly "m_iRoundEndPlayerCount"?: number;
  readonly "m_iRoundEndTimerTime"?: number;
  readonly "m_iRoundEndWinnerTeam"?: number;
  readonly "m_iRoundStartRoundNumber"?: number;
  readonly "m_iRoundTime"?: number;
  readonly "m_iRoundWinStatus"?: number;
  readonly "m_iSpectatorSlotCount"?: number;
  readonly "m_MatchDevice"?: number;
  readonly "m_MinimapVerticalSectionHeights"?: number;
  readonly "m_nCTTeamIntroVariant"?: number;
  readonly "m_nCTTimeOuts"?: number;
  readonly "m_nEndMatchMapGroupVoteOptions"?: number;
  readonly "m_nEndMatchMapGroupVoteTypes"?: number;
  readonly "m_nEndMatchMapVoteWinner"?: number;
  readonly "m_nHalloweenMaskListSeed"?: number;
  readonly "m_nMatchAbortedEarlyReason"?: number;
  readonly "m_nMatchEndCount"?: number;
  readonly "m_nMatchSeed"?: number;
  readonly "m_nNextMapInMapgroup"?: number;
  readonly "m_nOvertimePlaying"?: number;
  readonly "m_nPauseStartTick"?: number;
  readonly "m_nQueuedMatchmakingMode"?: number;
  readonly "m_nRoundEndCount"?: number;
  readonly "m_nRoundsPlayedThisPhase"?: number;
  readonly "m_nRoundStartCount"?: number;
  readonly "m_nTerroristTimeOuts"?: number;
  readonly "m_nTotalPausedTicks"?: number;
  readonly "m_nTournamentPredictionsPct"?: number;
  readonly "m_nTTeamIntroVariant"?: number;
  readonly "m_numBestOfMaps"?: number;
  readonly "m_sRoundEndFunFactToken"?: string;
  readonly "m_sRoundEndMessage"?: string;
  readonly "m_szMatchStatTxt"?: string;
  readonly "m_szTournamentEventName"?: string;
  readonly "m_szTournamentEventStage"?: string;
  readonly "m_szTournamentPredictionsTxt"?: string;
  readonly "m_TeamRespawnWaveTimes"?: number;
  readonly "m_timeUntilNextPhaseStarts"?: number;
  readonly "m_totalRoundsPlayed"?: number;
  readonly "m_vMinimapMaxs"?: [number, number, number];
  readonly "m_vMinimapMins"?: [number, number, number];
}
interface _CCSGO_TeamIntroCounterTerroristPositionOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nOrdinal"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRandom"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nVariant"?: number;
  readonly "m_sWeaponName"?: string;
  readonly "m_szCustomName"?: string;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_xuid"?: bigint;
}
interface _CCSPlayer_ActionTrackingServicesOwn {
  readonly "m_bIsRescuing"?: boolean;
  readonly "m_nCount"?: number;
  readonly "m_nItemDefIndex"?: number;
}
interface _CCSPlayer_BulletServicesOwn {
  readonly "m_totalHitsOnServer"?: number;
}
interface _CCSPlayer_BuyServicesOwn {
  readonly "m_bPrevHelmet"?: boolean;
  readonly "m_hItem"?: bigint;
  readonly "m_nCost"?: number;
  readonly "m_nPrevArmor"?: number;
  readonly "m_unDefIdx"?: number;
}
interface _CCSPlayer_CameraServicesOwn {
  readonly "localBits"?: number;
  readonly "localSound"?: [number, number, number];
  readonly "m_flCsViewPunchAngleTickRatio"?: number;
  readonly "m_flFOVRate"?: number;
  readonly "m_flFOVTime"?: number;
  readonly "m_hColorCorrectionCtrl"?: number;
  readonly "m_hCtrl"?: number;
  readonly "m_hTonemapController"?: number;
  readonly "m_hViewEntity"?: number;
  readonly "m_hZoomOwner"?: number;
  readonly "m_iFOV"?: number;
  readonly "m_iFOVStart"?: number;
  readonly "m_nCsViewPunchAngleTick"?: number;
  readonly "m_PostProcessingVolumes"?: number;
  readonly "m_vecCsViewPunchAngle"?: [number, number, number];
  readonly "soundEventHash"?: number;
  readonly "soundscapeEntityListIndex"?: number;
  readonly "soundscapeIndex"?: number;
}
interface _CCSPlayer_HostageServicesOwn {
  readonly "m_hCarriedHostage"?: number;
  readonly "m_hCarriedHostageProp"?: number;
}
interface _CCSPlayer_ItemServicesOwn {
  readonly "m_bHasDefuser"?: boolean;
  readonly "m_bHasHelmet"?: boolean;
}
interface _CCSPlayer_MovementServicesOwn {
  readonly "m_arrForceSubtickMoveWhen"?: number;
  readonly "m_bDesiresDuck"?: boolean;
  readonly "m_bDucked"?: boolean;
  readonly "m_bDucking"?: boolean;
  readonly "m_bDuckOverride"?: boolean;
  readonly "m_bHasEverProcessedCommand"?: boolean;
  readonly "m_bJumpApexPending"?: boolean;
  readonly "m_bOldJumpPressed"?: boolean;
  readonly "m_bUseFrictionStashedSpeed"?: boolean;
  readonly "m_bWasSurfing"?: boolean;
  readonly "m_flBombPlantViewOffset"?: number;
  readonly "m_flDuckAmount"?: number;
  readonly "m_flDuckRootOffset"?: number;
  readonly "m_flDuckSpeed"?: number;
  readonly "m_flDuckViewOffset"?: number;
  readonly "m_flFallVelocity"?: number;
  readonly "m_flFrictionStashedSpeed"?: number;
  readonly "m_flLastActualJumpPressFrac"?: number;
  readonly "m_flLastDuckTime"?: number;
  readonly "m_flLastJumpFrac"?: number;
  readonly "m_flLastJumpVelocityZ"?: number;
  readonly "m_flLastLandedFrac"?: number;
  readonly "m_flLastLandedVelocityX"?: number;
  readonly "m_flLastLandedVelocityY"?: number;
  readonly "m_flLastLandedVelocityZ"?: number;
  readonly "m_flLastUsableJumpPressFrac"?: number;
  readonly "m_flMaxspeed"?: number;
  readonly "m_flStamina"?: number;
  readonly "m_flUseFrictionStashedSpeedUntilFrac"?: number;
  readonly "m_fStashGrenadeParameterWhen"?: number;
  readonly "m_gtLastTimeInAir"?: number;
  readonly "m_gtLastTimeOnStaticWorldGround"?: number;
  readonly "m_nButtonDownMaskPrev"?: bigint;
  readonly "m_nGameCodeHasMovedPlayerAfterCommand"?: number;
  readonly "m_nLadderSurfacePropIndex"?: number;
  readonly "m_nLastActualJumpPressTick"?: number;
  readonly "m_nLastJumpTick"?: number;
  readonly "m_nLastLandedTick"?: number;
  readonly "m_nLastUsableJumpPressTick"?: number;
  readonly "m_nToggleButtonDownMask"?: bigint;
}
interface _CCSPlayer_PingServicesOwn {
  readonly "m_hPlayerPing"?: number;
}
interface _CCSPlayer_WeaponServicesOwn {
  readonly "m_bBlockInspectUntilNextGraphUpdate"?: boolean;
  readonly "m_flNextAttack"?: number;
  readonly "m_hActiveWeapon"?: number;
  readonly "m_hLastWeapon"?: number;
  readonly "m_hMyWeapons"?: number;
  readonly "m_iAmmo"?: number;
  readonly "m_networkAnimTiming"?: Uint8Array;
}
interface _CCSPlayerControllerOwn {
  readonly "m_bCanControlObservedBot"?: boolean;
  readonly "m_bControllingBot"?: boolean;
  readonly "m_bEverPlayedOnTeam"?: boolean;
  readonly "m_bFireBulletsSeedSynchronized"?: boolean;
  readonly "m_bHasCommunicationAbuseMute"?: boolean;
  readonly "m_bHasControlledBotThisRound"?: boolean;
  readonly "m_bKnownTeamMismatch"?: boolean;
  readonly "m_bMvpNoMusic"?: boolean;
  readonly "m_bNoClipEnabled"?: boolean;
  readonly "m_bPawnHasDefuser"?: boolean;
  readonly "m_bPawnHasHelmet"?: boolean;
  readonly "m_bPawnIsAlive"?: boolean;
  readonly "m_eMvpReason"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flForceTeamTime"?: number;
  readonly "m_flFriction"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeScale"?: number;
  readonly "m_hObserverPawn"?: number;
  readonly "m_hOriginalControllerOfCurrentPawn"?: number;
  readonly "m_hPawn"?: number;
  readonly "m_hPlayerPawn"?: number;
  readonly "m_iCoachingTeam"?: number;
  readonly "m_iCompetitiveRanking"?: number;
  readonly "m_iCompetitiveRankingPredicted_Loss"?: number;
  readonly "m_iCompetitiveRankingPredicted_Tie"?: number;
  readonly "m_iCompetitiveRankingPredicted_Win"?: number;
  readonly "m_iCompetitiveRankType"?: number;
  readonly "m_iCompetitiveWins"?: number;
  readonly "m_iCompTeammateColor"?: number;
  readonly "m_iConnected"?: number;
  readonly "m_iDesiredFOV"?: number;
  readonly "m_iMusicKitID"?: number;
  readonly "m_iMusicKitMVPs"?: number;
  readonly "m_iMVPs"?: number;
  readonly "m_iPawnArmor"?: number;
  readonly "m_iPawnBotDifficulty"?: number;
  readonly "m_iPawnHealth"?: number;
  readonly "m_iPawnLifetimeEnd"?: number;
  readonly "m_iPawnLifetimeStart"?: number;
  readonly "m_iPendingTeamNum"?: number;
  readonly "m_iPing"?: number;
  readonly "m_iScore"?: number;
  readonly "m_iszPlayerName"?: string;
  readonly "m_iTeamNum"?: number;
  readonly "m_nDisconnectionTick"?: number;
  readonly "m_nEndMatchNextMapVote"?: number;
  readonly "m_nFirstKill"?: number;
  readonly "m_nKillCount"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nPawnCharacterDefIndex"?: number;
  readonly "m_nPlayerDominated"?: bigint;
  readonly "m_nPlayerDominatingMe"?: bigint;
  readonly "m_nQuestProgressReason"?: bigint;
  readonly "m_nTickBase"?: number;
  readonly "m_recentKillQueue"?: number;
  readonly "m_rtActiveMissionPeriod"?: number;
  readonly "m_steamID"?: bigint;
  readonly "m_szClan"?: string;
  readonly "m_szCrosshairCodes"?: string;
  readonly "m_uiCommunicationMuteFlags"?: number;
  readonly "m_unActiveQuestId"?: number;
  readonly "m_unPlayerTvControlFlags"?: number;
  readonly "m_vecBaseVelocity"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
}
interface _CCSPlayerController_ActionTrackingServicesOwn {
  readonly "m_flTotalRoundDamageDealt"?: number;
  readonly "m_iAssists"?: number;
  readonly "m_iCashEarned"?: number;
  readonly "m_iDamage"?: number;
  readonly "m_iDeaths"?: number;
  readonly "m_iEnemiesFlashed"?: number;
  readonly "m_iEnemy3Ks"?: number;
  readonly "m_iEnemy4Ks"?: number;
  readonly "m_iEnemy5Ks"?: number;
  readonly "m_iEnemyKnifeKills"?: number;
  readonly "m_iEnemyTaserKills"?: number;
  readonly "m_iEquipmentValue"?: number;
  readonly "m_iHeadShotKills"?: number;
  readonly "m_iKillReward"?: number;
  readonly "m_iKills"?: number;
  readonly "m_iLiveTime"?: number;
  readonly "m_iMoneySaved"?: number;
  readonly "m_iNumRoundKills"?: number;
  readonly "m_iNumRoundKillsHeadshots"?: number;
  readonly "m_iObjective"?: number;
  readonly "m_iUtilityDamage"?: number;
}
interface _CCSPlayerController_DamageServicesOwn {
  readonly "m_bIsOtherEnemy"?: boolean;
  readonly "m_DamagerXuid"?: bigint;
  readonly "m_flActualHealthRemoved"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_hPlayerControllerDamager"?: number;
  readonly "m_hPlayerControllerRecipient"?: number;
  readonly "m_iLastBulletUpdate"?: number;
  readonly "m_iNumHits"?: number;
  readonly "m_killType"?: number;
  readonly "m_nSendUpdate"?: number;
  readonly "m_PlayerDamager"?: number;
  readonly "m_PlayerRecipient"?: number;
  readonly "m_RecipientXuid"?: bigint;
  readonly "m_szPlayerDamagerName"?: string;
  readonly "m_szPlayerRecipientName"?: string;
}
interface _CCSPlayerController_InGameMoneyServicesOwn {
  readonly "m_iAccount"?: number;
  readonly "m_iCashSpentThisRound"?: number;
  readonly "m_iStartAccount"?: number;
  readonly "m_iTotalCashSpent"?: number;
}
interface _CCSPlayerController_InventoryServicesOwn {
  readonly "m_nPersonaDataPublicCommendsFriendly"?: number;
  readonly "m_nPersonaDataPublicCommendsLeader"?: number;
  readonly "m_nPersonaDataPublicCommendsTeacher"?: number;
  readonly "m_nPersonaDataPublicLevel"?: number;
  readonly "m_nPersonaDataXpTrailLevel"?: number;
  readonly "m_rank"?: bigint;
  readonly "m_unMusicID"?: number;
  readonly "unClass"?: number;
  readonly "unItemDefIdx"?: number;
  readonly "unSlot"?: number;
}
interface _CCSPlayerPawnOwn {
  readonly "bClip3DSkyBoxNearToWorldFar"?: boolean;
  readonly "blend"?: boolean;
  readonly "blendtobackground"?: number;
  readonly "colorPrimary"?: number;
  readonly "colorPrimaryLerpTo"?: number;
  readonly "colorSecondary"?: number;
  readonly "colorSecondaryLerpTo"?: number;
  readonly "dirPrimary"?: [number, number, number];
  readonly "duration"?: number;
  readonly "enable"?: boolean;
  readonly "end"?: number;
  readonly "endLerpTo"?: number;
  readonly "exponent"?: number;
  readonly "farz"?: number;
  readonly "flClip3DSkyBoxNearToWorldFarOffset"?: number;
  readonly "HDRColorScale"?: number;
  readonly "lerptime"?: number;
  readonly "locallightscale"?: number;
  readonly "m_aimPunchAngle"?: [number, number, number];
  readonly "m_aimPunchAngleVel"?: [number, number, number];
  readonly "m_aimPunchTickBase"?: number;
  readonly "m_aimPunchTickFraction"?: number;
  readonly "m_angEyeAngles"?: [number, number, number];
  readonly "m_ArmorValue"?: number;
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bGunGameImmunity"?: boolean;
  readonly "m_bHasFemaleVoice"?: boolean;
  readonly "m_bHasMovedSinceSpawn"?: boolean;
  readonly "m_bInBombZone"?: boolean;
  readonly "m_bInBuyZone"?: boolean;
  readonly "m_bInHostageRescueZone"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInNoDefuseArea"?: boolean;
  readonly "m_bIsBuyMenuOpen"?: boolean;
  readonly "m_bIsDefusing"?: boolean;
  readonly "m_bIsGrabbingHostage"?: boolean;
  readonly "m_bIsScoped"?: boolean;
  readonly "m_bIsWalking"?: boolean;
  readonly "m_bKilledByHeadshot"?: boolean;
  readonly "m_bLeftHanded"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollDamageHeadshot"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bResumeZoom"?: boolean;
  readonly "m_bRetakesHasDefuseKit"?: boolean;
  readonly "m_bRetakesMVPLastRound"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSpotted"?: boolean;
  readonly "m_bSpottedByMask"?: number;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWaitForNoAttack"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_fImmuneToGunGameDamageTime"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDeathTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flEmitSoundTime"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFlashDuration"?: number;
  readonly "m_flFlashMaxAlpha"?: number;
  readonly "m_flFlinchStack"?: number;
  readonly "m_flFriction"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flHealthShotBoostExpirationTime"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextSprayDecalTime"?: number;
  readonly "m_flProgressBarStartTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeOfLastInjury"?: number;
  readonly "m_flTimeScale"?: number;
  readonly "m_flVelocityModifier"?: number;
  readonly "m_flViewmodelFOV"?: number;
  readonly "m_flViewmodelOffsetX"?: number;
  readonly "m_flViewmodelOffsetY"?: number;
  readonly "m_flViewmodelOffsetZ"?: number;
  readonly "m_flWaterLevel"?: number;
  readonly "m_fMolotovDamageTime"?: number;
  readonly "m_fSwitchedHandednessTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_GunGameImmunityColor"?: number;
  readonly "m_hController"?: number;
  readonly "m_hDefaultController"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hGroundEntity"?: number;
  readonly "m_hMyWearables"?: number;
  readonly "m_hOriginalController"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iBlockingUseActionInProgress"?: bigint;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iHealth"?: number;
  readonly "m_iHideHUD"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMaxHealth"?: number;
  readonly "m_iPlayerState"?: bigint;
  readonly "m_iProgressBarDuration"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iRetakesMVPBoostItem"?: number;
  readonly "m_iRetakesOffering"?: number;
  readonly "m_iRetakesOfferingCard"?: number;
  readonly "m_iShotsFired"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_lifeState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEconGlovesChanged"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nGroundBodyIndex"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nLastKillerIndex"?: bigint;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRagdollDamageBone"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_nWhichBombZone"?: number;
  readonly "m_nWorldGroupID"?: number;
  readonly "m_qDeathEyeAngles"?: [number, number, number];
  readonly "m_RetakesMVPBoostExtraUtility"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_szLastPlaceName"?: string;
  readonly "m_szRagdollDamageWeaponName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_unCurrentEquipmentValue"?: number;
  readonly "m_unFreezetimeEndEquipmentValue"?: number;
  readonly "m_unRoundStartEquipmentValue"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecBaseVelocity"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecPlayerPatchEconIndices"?: number;
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "m_vRagdollDamageForce"?: [number, number, number];
  readonly "m_vRagdollDamagePosition"?: [number, number, number];
  readonly "m_vRagdollServerOrigin"?: [number, number, number];
  readonly "maxdensity"?: number;
  readonly "maxdensityLerpTo"?: number;
  readonly "nIndex"?: number;
  readonly "nType"?: number;
  readonly "origin"?: [number, number, number];
  readonly "qAngle"?: [number, number, number];
  readonly "scale"?: number;
  readonly "scattering"?: number;
  readonly "skyboxFogFactor"?: number;
  readonly "skyboxFogFactorLerpTo"?: number;
  readonly "start"?: number;
  readonly "startLerpTo"?: number;
}
interface _CCSPlayerPawnBaseOwn {
  readonly "bClip3DSkyBoxNearToWorldFar"?: boolean;
  readonly "blend"?: boolean;
  readonly "blendtobackground"?: number;
  readonly "colorPrimary"?: number;
  readonly "colorPrimaryLerpTo"?: number;
  readonly "colorSecondary"?: number;
  readonly "colorSecondaryLerpTo"?: number;
  readonly "dirPrimary"?: [number, number, number];
  readonly "duration"?: number;
  readonly "enable"?: boolean;
  readonly "end"?: number;
  readonly "endLerpTo"?: number;
  readonly "exponent"?: number;
  readonly "farz"?: number;
  readonly "flClip3DSkyBoxNearToWorldFarOffset"?: number;
  readonly "HDRColorScale"?: number;
  readonly "lerptime"?: number;
  readonly "locallightscale"?: number;
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bHasMovedSinceSpawn"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDeathTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFlashDuration"?: number;
  readonly "m_flFlashMaxAlpha"?: number;
  readonly "m_flFriction"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flProgressBarStartTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeScale"?: number;
  readonly "m_flWaterLevel"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hController"?: number;
  readonly "m_hDefaultController"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hGroundEntity"?: number;
  readonly "m_hMyWearables"?: number;
  readonly "m_hOriginalController"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iHealth"?: number;
  readonly "m_iHideHUD"?: number;
  readonly "m_iMaxHealth"?: number;
  readonly "m_iPlayerState"?: bigint;
  readonly "m_iProgressBarDuration"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_lifeState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nGroundBodyIndex"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_nWorldGroupID"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecBaseVelocity"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "maxdensity"?: number;
  readonly "maxdensityLerpTo"?: number;
  readonly "nIndex"?: number;
  readonly "nType"?: number;
  readonly "origin"?: [number, number, number];
  readonly "qAngle"?: [number, number, number];
  readonly "scale"?: number;
  readonly "scattering"?: number;
  readonly "skyboxFogFactor"?: number;
  readonly "skyboxFogFactorLerpTo"?: number;
  readonly "start"?: number;
  readonly "startLerpTo"?: number;
}
interface _CCSPlayerResourceOwn {
  readonly "m_bEndMatchNextMapAllVoted"?: boolean;
  readonly "m_bHostageAlive"?: boolean;
  readonly "m_bombsiteCenterA"?: [number, number, number];
  readonly "m_bombsiteCenterB"?: [number, number, number];
  readonly "m_hostageRescueX"?: number;
  readonly "m_hostageRescueY"?: number;
  readonly "m_hostageRescueZ"?: number;
  readonly "m_iHostageEntityIDs"?: bigint;
  readonly "m_isHostageFollowingSomeone"?: boolean;
}
interface _CCSTeamOwn {
  readonly "m_aPawns"?: number;
  readonly "m_aPlayers"?: number;
  readonly "m_bSurrendered"?: boolean;
  readonly "m_iClanID"?: number;
  readonly "m_iScore"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_numMapVictories"?: number;
  readonly "m_scoreFirstHalf"?: number;
  readonly "m_scoreOvertime"?: number;
  readonly "m_scoreSecondHalf"?: number;
  readonly "m_szClanTeamname"?: string;
  readonly "m_szTeamFlagImage"?: string;
  readonly "m_szTeamLogoImage"?: string;
  readonly "m_szTeamMatchStat"?: string;
  readonly "m_szTeamname"?: string;
}
interface _CCSWeaponBaseShotgunOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
}
interface _CDecoyGrenadeOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bIsHeldByPlayer"?: boolean;
  readonly "m_bJumpThrow"?: boolean;
  readonly "m_bJustPulledPin"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bPinPulled"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRedraw"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bThrowAnimating"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fDropTime"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextHoldFrac"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flThrowStrength"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_fPinPullTime"?: number;
  readonly "m_fThrowTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_hSwitchToWeaponAfterThrow"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextHoldTick"?: number;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
}
interface _CDecoyProjectileOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bIsLive"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_DmgRadius"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_flDetonateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hThrower"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nBounces"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDecoyShotTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nExplodeEffectIndex"?: bigint;
  readonly "m_nExplodeEffectTickBegin"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecExplodeEffectOrigin"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "m_vInitialPosition"?: [number, number, number];
  readonly "m_vInitialVelocity"?: [number, number, number];
}
interface _CEnvDetailControllerOwn {
  readonly "m_flFadeEndDist"?: number;
  readonly "m_flFadeStartDist"?: number;
}
interface _CEnvVolumetricFogControllerOwn {
  readonly "m_bActive"?: boolean;
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bEnableIndirect"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bIsMaster"?: boolean;
  readonly "m_bStartDisabled"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_fFirstVolumeSliceThickness"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flAnisotropy"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDefaultAnisotropy"?: number;
  readonly "m_flDefaultDrawDistance"?: number;
  readonly "m_flDefaultScattering"?: number;
  readonly "m_flDrawDistance"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeInEnd"?: number;
  readonly "m_flFadeInStart"?: number;
  readonly "m_flFadeSpeed"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flIndirectStrength"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flScattering"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flStartAnisoTime"?: number;
  readonly "m_flStartAnisotropy"?: number;
  readonly "m_flStartDrawDistance"?: number;
  readonly "m_flStartDrawDistanceTime"?: number;
  readonly "m_flStartScattering"?: number;
  readonly "m_flStartScatterTime"?: number;
  readonly "m_fNoiseSpeed"?: number;
  readonly "m_fNoiseStrength"?: number;
  readonly "m_fWindSpeed"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hFogIndirectTexture"?: bigint;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nForceRefreshCount"?: number;
  readonly "m_nIndirectTextureDimX"?: number;
  readonly "m_nIndirectTextureDimY"?: number;
  readonly "m_nIndirectTextureDimZ"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nVolumeDepth"?: number;
  readonly "m_TintColor"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_vBoxMaxs"?: [number, number, number];
  readonly "m_vBoxMins"?: [number, number, number];
  readonly "m_vNoiseScale"?: [number, number, number];
  readonly "m_vWindDirection"?: [number, number, number];
}
interface _CEnvWindControllerOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bIsMaster"?: boolean;
  readonly "m_fDirectionVariation"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flGustDuration"?: number;
  readonly "m_flInitialWindSpeed"?: number;
  readonly "m_flMaxGustDelay"?: number;
  readonly "m_flMinGustDelay"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flStartTime"?: number;
  readonly "m_fSpeedVariation"?: number;
  readonly "m_fTurbulence"?: number;
  readonly "m_fVolumeHalfExtentXY"?: number;
  readonly "m_fVolumeHalfExtentZ"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iGustDirChange"?: number;
  readonly "m_iInitialWindDir"?: number;
  readonly "m_iMaxGust"?: number;
  readonly "m_iMaxWind"?: number;
  readonly "m_iMinGust"?: number;
  readonly "m_iMinWind"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWindSeed"?: number;
  readonly "m_location"?: [number, number, number];
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nClipmapLevels"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nVolumeResolutionXY"?: number;
  readonly "m_nVolumeResolutionZ"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_windRadius"?: number;
}
interface _CFogControllerOwn {
  readonly "blend"?: boolean;
  readonly "blendtobackground"?: number;
  readonly "colorPrimary"?: number;
  readonly "colorPrimaryLerpTo"?: number;
  readonly "colorSecondary"?: number;
  readonly "colorSecondaryLerpTo"?: number;
  readonly "dirPrimary"?: [number, number, number];
  readonly "duration"?: number;
  readonly "enable"?: boolean;
  readonly "end"?: number;
  readonly "endLerpTo"?: number;
  readonly "exponent"?: number;
  readonly "farz"?: number;
  readonly "HDRColorScale"?: number;
  readonly "lerptime"?: number;
  readonly "locallightscale"?: number;
  readonly "maxdensity"?: number;
  readonly "maxdensityLerpTo"?: number;
  readonly "scattering"?: number;
  readonly "skyboxFogFactor"?: number;
  readonly "skyboxFogFactorLerpTo"?: number;
  readonly "start"?: number;
  readonly "startLerpTo"?: number;
}
interface _CInfernoOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFireIsBurning"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInPostEffectTime"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_BurnNormal"?: [number, number, number];
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fireCount"?: number;
  readonly "m_fireParentPositions"?: [number, number, number];
  readonly "m_firePositions"?: [number, number, number];
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nFireEffectTickBegin"?: number;
  readonly "m_nFireLifetime"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInfernoType"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
}
interface _CKnifeOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFirstAttack"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
}
interface _CMapVetoPickControllerOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nAccountIDs"?: number;
  readonly "m_nBloodType"?: number;
  readonly "m_nCurrentPhase"?: number;
  readonly "m_nDraftType"?: number;
  readonly "m_nMapId0"?: number;
  readonly "m_nMapId1"?: number;
  readonly "m_nMapId2"?: number;
  readonly "m_nMapId3"?: number;
  readonly "m_nMapId4"?: number;
  readonly "m_nMapId5"?: number;
  readonly "m_nPhaseDurationTicks"?: number;
  readonly "m_nPhaseStartTick"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nStartingSide0"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nTeamWinningCoinToss"?: number;
  readonly "m_nTeamWithFirstChoice"?: number;
  readonly "m_nVoteMapIdsList"?: number;
  readonly "m_ubInterpolationFrame"?: number;
}
interface _CMolotovProjectileOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bIsIncGrenade"?: boolean;
  readonly "m_bIsLive"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_DmgRadius"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_flDetonateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hThrower"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nBounces"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nExplodeEffectIndex"?: bigint;
  readonly "m_nExplodeEffectTickBegin"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecExplodeEffectOrigin"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "m_vInitialPosition"?: [number, number, number];
  readonly "m_vInitialVelocity"?: [number, number, number];
}
interface _CPlantedC4Own {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBeingDefused"?: boolean;
  readonly "m_bBombDefused"?: boolean;
  readonly "m_bBombTicking"?: boolean;
  readonly "m_bCannotBeDefused"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bHasExploded"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSpotted"?: boolean;
  readonly "m_bSpottedByMask"?: number;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flC4Blow"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDefuseCountDown"?: number;
  readonly "m_flDefuseLength"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimerLength"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hBombDefuser"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nBombSite"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSourceSoundscapeHash"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
}
interface _CPlayer_CameraServicesOwn {
  readonly "localBits"?: number;
  readonly "localSound"?: [number, number, number];
  readonly "m_flCsViewPunchAngleTickRatio"?: number;
  readonly "m_hColorCorrectionCtrl"?: number;
  readonly "m_hCtrl"?: number;
  readonly "m_hTonemapController"?: number;
  readonly "m_hViewEntity"?: number;
  readonly "m_nCsViewPunchAngleTick"?: number;
  readonly "m_PostProcessingVolumes"?: number;
  readonly "m_vecCsViewPunchAngle"?: [number, number, number];
  readonly "soundEventHash"?: number;
  readonly "soundscapeEntityListIndex"?: number;
  readonly "soundscapeIndex"?: number;
}
interface _CPlayerPingOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bUrgent"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPingedEntity"?: number;
  readonly "m_hPlayer"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iType"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_szPlaceName"?: string;
  readonly "m_ubInterpolationFrame"?: number;
}
interface _CPlayerSprayDecalOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flCreationTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntity"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nHitbox"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPlayer"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_nTintID"?: number;
  readonly "m_nUniqueID"?: number;
  readonly "m_nVersion"?: number;
  readonly "m_rtGcTime"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_ubSignature"?: number;
  readonly "m_unAccountID"?: number;
  readonly "m_unTraceID"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecEndPos"?: [number, number, number];
  readonly "m_vecLeft"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecNormal"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecStart"?: [number, number, number];
}
interface _CPlayerVisibilityOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bIsEnabled"?: boolean;
  readonly "m_bStartDisabled"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeTime"?: number;
  readonly "m_flFogDistanceMultiplier"?: number;
  readonly "m_flFogMaxDensityMultiplier"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flVisibilityStrength"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_ubInterpolationFrame"?: number;
}
interface _CSmokeGrenadeProjectileOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDidSmokeEffect"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bIsLive"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_DmgRadius"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFlags"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDamage"?: number;
  readonly "m_flDetonateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hThrower"?: number;
  readonly "m_ID"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nBounces"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nExplodeEffectIndex"?: bigint;
  readonly "m_nExplodeEffectTickBegin"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nRandomSeed"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nSmokeEffectTickBegin"?: number;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_nVoxelFrameDataSize"?: number;
  readonly "m_nVoxelUpdate"?: number;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecExplodeEffectOrigin"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_vecX"?: number;
  readonly "m_vecY"?: number;
  readonly "m_vecZ"?: number;
  readonly "m_vInitialPosition"?: [number, number, number];
  readonly "m_vInitialVelocity"?: [number, number, number];
  readonly "m_VoxelFrameData"?: Uint8Array;
  readonly "m_vSmokeColor"?: [number, number, number];
  readonly "m_vSmokeDetonationPos"?: [number, number, number];
}
interface _CTeamOwn {
  readonly "m_aPawns"?: number;
  readonly "m_aPlayers"?: number;
  readonly "m_iScore"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_szTeamname"?: string;
}
interface _CTonemapController2Own {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flAutoExposureMax"?: number;
  readonly "m_flAutoExposureMin"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flExposureAdaptationSpeedDown"?: number;
  readonly "m_flExposureAdaptationSpeedUp"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTonemapEVSmoothingRange"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_ubInterpolationFrame"?: number;
}
interface _CVoteControllerOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bIsYesNoVote"?: boolean;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_iActiveIssueIndex"?: number;
  readonly "m_iOnlyTeamToVote"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPotentialVotes"?: number;
  readonly "m_nSubclassID"?: number;
  readonly "m_nVoteOptionCount"?: number;
  readonly "m_ubInterpolationFrame"?: number;
}
interface _CWeaponCZ75aOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bMagazineRemoved"?: boolean;
  readonly "m_bNeedsBoltAction"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iBurstShotsRemaining"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nRevolverCylinderIdx"?: number;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
  readonly "m_zoomLevel"?: number;
}
interface _CWeaponTaserOwn {
  readonly "m_bAnimatedEveryTick"?: boolean;
  readonly "m_bAnimGraphUpdateEnabled"?: boolean;
  readonly "m_bBurstMode"?: boolean;
  readonly "m_bClientSideRagdoll"?: boolean;
  readonly "m_bDroppedNearBuyZone"?: boolean;
  readonly "m_bEligibleForScreenHighlight"?: boolean;
  readonly "m_bFlashing"?: boolean;
  readonly "m_bGravityDisabled"?: boolean;
  readonly "m_bInitialized"?: boolean;
  readonly "m_bInitiallyPopulateInterpHistory"?: boolean;
  readonly "m_bInReload"?: boolean;
  readonly "m_bInspectPending"?: boolean;
  readonly "m_bInspectShouldLoop"?: boolean;
  readonly "m_bIsHauledBack"?: boolean;
  readonly "m_bNeedsBoltAction"?: boolean;
  readonly "m_bNoInterpolate"?: boolean;
  readonly "m_bRagdollClientSide"?: boolean;
  readonly "m_bRagdollEnabled"?: boolean;
  readonly "m_bRenderToCubemaps"?: boolean;
  readonly "m_bSetBonus"?: boolean;
  readonly "m_bSilencerOn"?: boolean;
  readonly "m_bvDisabledHitGroups"?: number;
  readonly "m_bWasActiveWeaponWhenDropped"?: boolean;
  readonly "m_clrRender"?: number;
  readonly "m_CollisionGroup"?: number;
  readonly "m_fAccuracyPenalty"?: number;
  readonly "m_fadeMaxDist"?: number;
  readonly "m_fadeMinDist"?: number;
  readonly "m_fEffects"?: number;
  readonly "m_fFireTime"?: number;
  readonly "m_flAnimTime"?: number;
  readonly "m_fLastShotTime"?: number;
  readonly "m_flCapsuleRadius"?: number;
  readonly "m_flCreateTime"?: number;
  readonly "m_flDroppedAtTime"?: number;
  readonly "m_flElasticity"?: number;
  readonly "m_flFadeScale"?: number;
  readonly "m_flFallbackWear"?: number;
  readonly "m_flGlowBackfaceMult"?: number;
  readonly "m_flGlowStartTime"?: number;
  readonly "m_flGlowTime"?: number;
  readonly "m_flGravityScale"?: number;
  readonly "m_flInitialValue"?: number;
  readonly "m_flInspectCancelCompleteTime"?: number;
  readonly "m_flLastShakeTime"?: number;
  readonly "m_flNavIgnoreUntilTime"?: number;
  readonly "m_flNextPrimaryAttackTickRatio"?: number;
  readonly "m_flNextSecondaryAttackTickRatio"?: number;
  readonly "m_flPostponeFireReadyFrac"?: number;
  readonly "m_flRecoilIndex"?: number;
  readonly "m_flShadowStrength"?: number;
  readonly "m_flSimulationTime"?: number;
  readonly "m_flTimeSilencerSwitchComplete"?: number;
  readonly "m_flWatTickOffset"?: number;
  readonly "m_flWeaponActionPlaybackRate"?: number;
  readonly "m_flWeaponGameplayAnimStateTimestamp"?: number;
  readonly "m_glowColorOverride"?: number;
  readonly "m_hEffectEntity"?: number;
  readonly "m_hOuter"?: number;
  readonly "m_hOwner"?: number;
  readonly "m_hOwnerEntity"?: number;
  readonly "m_hPrevOwner"?: number;
  readonly "m_iAccountID"?: number;
  readonly "m_iAttributeDefinitionIndex"?: number;
  readonly "m_iBurstShotsRemaining"?: number;
  readonly "m_iClip1"?: number;
  readonly "m_iClip2"?: number;
  readonly "m_ID"?: number;
  readonly "m_iEntityLevel"?: number;
  readonly "m_iEntityQuality"?: number;
  readonly "m_iGlowTeam"?: number;
  readonly "m_iGlowType"?: number;
  readonly "m_iInventoryPosition"?: number;
  readonly "m_iIronSightMode"?: number;
  readonly "m_iItemDefinitionIndex"?: number;
  readonly "m_iItemIDHigh"?: number;
  readonly "m_iItemIDLow"?: number;
  readonly "m_iMostRecentTeamNumber"?: number;
  readonly "m_iOriginalTeamNumber"?: number;
  readonly "m_iRawValue32"?: number;
  readonly "m_iReapplyProvisionParity"?: number;
  readonly "m_iRecoilIndex"?: number;
  readonly "m_iTeamNum"?: number;
  readonly "m_iWeaponGameplayAnimState"?: number;
  readonly "m_MoveCollide"?: bigint;
  readonly "m_MoveType"?: bigint;
  readonly "m_nBloodType"?: number;
  readonly "m_nCollisionFunctionMask"?: number;
  readonly "m_nCollisionGroup"?: number;
  readonly "m_nDeployTick"?: number;
  readonly "m_nDetailLayerMask"?: number;
  readonly "m_nDetailLayerMaskType"?: number;
  readonly "m_nDropTick"?: number;
  readonly "m_nEnablePhysics"?: number;
  readonly "m_nEntityId"?: number;
  readonly "m_nextPrevOwnerUseTime"?: number;
  readonly "m_nFallbackPaintKit"?: number;
  readonly "m_nFallbackSeed"?: number;
  readonly "m_nFallbackStatTrak"?: number;
  readonly "m_nForceBone"?: number;
  readonly "m_nGlowRange"?: number;
  readonly "m_nGlowRangeMin"?: number;
  readonly "m_nHierarchyId"?: number;
  readonly "m_nInteractsAs"?: bigint;
  readonly "m_nInteractsExclude"?: bigint;
  readonly "m_nInteractsWith"?: bigint;
  readonly "m_nNextPrimaryAttackTick"?: number;
  readonly "m_nNextSecondaryAttackTick"?: number;
  readonly "m_nNextThinkTick"?: number;
  readonly "m_nObjectCulling"?: number;
  readonly "m_nOwnerId"?: number;
  readonly "m_nPlatformType"?: number;
  readonly "m_nPostponeFireReadyTicks"?: number;
  readonly "m_nRefundableCurrency"?: number;
  readonly "m_nRenderFX"?: bigint;
  readonly "m_nRenderMode"?: bigint;
  readonly "m_nRevolverCylinderIdx"?: number;
  readonly "m_nSolidType"?: bigint;
  readonly "m_nSubclassID"?: number;
  readonly "m_nSurroundType"?: bigint;
  readonly "m_nTargetDetailLayer"?: number;
  readonly "m_OriginalOwnerXuidHigh"?: number;
  readonly "m_OriginalOwnerXuidLow"?: number;
  readonly "m_pReserveAmmo"?: number;
  readonly "m_ProviderType"?: number;
  readonly "m_szCustomName"?: string;
  readonly "m_Transforms"?: number;
  readonly "m_triggerBloat"?: number;
  readonly "m_ubInterpolationFrame"?: number;
  readonly "m_usSolidFlags"?: number;
  readonly "m_Values"?: [number, number, number];
  readonly "m_vCapsuleCenter1"?: [number, number, number];
  readonly "m_vCapsuleCenter2"?: [number, number, number];
  readonly "m_vecForce"?: [number, number, number];
  readonly "m_vecMaxs"?: [number, number, number];
  readonly "m_vecMins"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMaxs"?: [number, number, number];
  readonly "m_vecSpecifiedSurroundingMins"?: [number, number, number];
  readonly "m_weaponMode"?: bigint;
  readonly "m_zoomLevel"?: number;
}
interface _ServerAuthoritativeWeaponSlot_tOwn {
  readonly "unClass"?: number;
  readonly "unItemDefIdx"?: number;
  readonly "unSlot"?: number;
}
interface _WeaponPurchaseCount_tOwn {
  readonly "m_nCount"?: number;
  readonly "m_nItemDefIndex"?: number;
}
type ICAK47 = Prefixed<"CAK47", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICBaseCSGrenadeProjectile = Prefixed<"CBaseCSGrenadeProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CBaseCSGrenadeProjectileOwn>;
type ICBaseGrenade = Prefixed<"CBaseGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CBaseGrenadeOwn>;
type ICBasePlayerController = Prefixed<"CBasePlayerController", Prefixed<"CEntityIdentity", _CEntityIdentity> & _CBasePlayerControllerOwn>;
type ICBasePlayerPawn = Prefixed<"CBasePlayerPawn", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"CPlayer_CameraServices", _CPlayer_CameraServices> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & Prefixed<"ViewAngleServerChange_t", _ViewAngleServerChange_t> & _CBasePlayerPawnOwn>;
type ICBasePlayerWeapon = Prefixed<"CBasePlayerWeapon", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CBasePlayerWeaponOwn>;
type ICC4 = Prefixed<"CC4", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CC4Own>;
type ICCSGameModeRules_ArmsRace = Prefixed<"CCSGameModeRules_ArmsRace", _CCSGameModeRules_ArmsRaceOwn>;
type ICCSGameModeRules_Deathmatch = Prefixed<"CCSGameModeRules_Deathmatch", _CCSGameModeRules_DeathmatchOwn>;
type ICCSGameRules = Prefixed<"CCSGameRules", _CCSGameRulesOwn>;
type ICCSGameRulesProxy = Prefixed<"CCSGameRulesProxy", Prefixed<"CCSGameRules", _CCSGameRules>>;
type ICCSGO_TeamIntroCounterTerroristPosition = Prefixed<"CCSGO_TeamIntroCounterTerroristPosition", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CCSGO_TeamIntroCounterTerroristPositionOwn>;
type ICCSGO_TeamIntroTerroristPosition = Prefixed<"CCSGO_TeamIntroTerroristPosition", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CCSGO_TeamIntroCounterTerroristPositionOwn>;
type ICCSGO_TeamSelectCounterTerroristPosition = Prefixed<"CCSGO_TeamSelectCounterTerroristPosition", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CCSGO_TeamIntroCounterTerroristPositionOwn>;
type ICCSGO_TeamSelectTerroristPosition = Prefixed<"CCSGO_TeamSelectTerroristPosition", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CCSGO_TeamIntroCounterTerroristPositionOwn>;
type ICCSPlayer_ActionTrackingServices = Prefixed<"CCSPlayer_ActionTrackingServices", Prefixed<"WeaponPurchaseCount_t", _WeaponPurchaseCount_t> & _CCSPlayer_ActionTrackingServicesOwn>;
type ICCSPlayer_BulletServices = Prefixed<"CCSPlayer_BulletServices", _CCSPlayer_BulletServicesOwn>;
type ICCSPlayer_BuyServices = Prefixed<"CCSPlayer_BuyServices", Prefixed<"SellbackPurchaseEntry_t", _SellbackPurchaseEntry_t> & _CCSPlayer_BuyServicesOwn>;
type ICCSPlayer_CameraServices = Prefixed<"CCSPlayer_CameraServices", _CCSPlayer_CameraServicesOwn>;
type ICCSPlayer_HostageServices = Prefixed<"CCSPlayer_HostageServices", _CCSPlayer_HostageServicesOwn>;
type ICCSPlayer_ItemServices = Prefixed<"CCSPlayer_ItemServices", _CCSPlayer_ItemServicesOwn>;
type ICCSPlayer_MovementServices = Prefixed<"CCSPlayer_MovementServices", _CCSPlayer_MovementServicesOwn>;
type ICCSPlayer_PingServices = Prefixed<"CCSPlayer_PingServices", _CCSPlayer_PingServicesOwn>;
type ICCSPlayer_WeaponServices = Prefixed<"CCSPlayer_WeaponServices", _CCSPlayer_WeaponServicesOwn>;
type ICCSPlayerController = Prefixed<"CCSPlayerController", Prefixed<"CCSPlayerController_ActionTrackingServices", _CCSPlayerController_ActionTrackingServices> & Prefixed<"CCSPlayerController_DamageServices", _CCSPlayerController_DamageServices> & Prefixed<"CCSPlayerController_InGameMoneyServices", _CCSPlayerController_InGameMoneyServices> & Prefixed<"CCSPlayerController_InventoryServices", _CCSPlayerController_InventoryServices> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CCSPlayerControllerOwn>;
type ICCSPlayerController_ActionTrackingServices = Prefixed<"CCSPlayerController_ActionTrackingServices", Prefixed<"CSPerRoundStats_t", _CSPerRoundStats_t> & _CCSPlayerController_ActionTrackingServicesOwn>;
type ICCSPlayerController_DamageServices = Prefixed<"CCSPlayerController_DamageServices", Prefixed<"CDamageRecord", _CDamageRecord> & _CCSPlayerController_DamageServicesOwn>;
type ICCSPlayerController_InGameMoneyServices = Prefixed<"CCSPlayerController_InGameMoneyServices", _CCSPlayerController_InGameMoneyServicesOwn>;
type ICCSPlayerController_InventoryServices = Prefixed<"CCSPlayerController_InventoryServices", Prefixed<"ServerAuthoritativeWeaponSlot_t", _ServerAuthoritativeWeaponSlot_t> & _CCSPlayerController_InventoryServicesOwn>;
type ICCSPlayerPawn = Prefixed<"CCSPlayerPawn", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CCSPlayer_ActionTrackingServices", _CCSPlayer_ActionTrackingServices> & Prefixed<"CCSPlayer_BulletServices", _CCSPlayer_BulletServices> & Prefixed<"CCSPlayer_BuyServices", _CCSPlayer_BuyServices> & Prefixed<"CCSPlayer_CameraServices", _CCSPlayer_CameraServices> & Prefixed<"CCSPlayer_HostageServices", _CCSPlayer_HostageServices> & Prefixed<"CCSPlayer_ItemServices", _CCSPlayer_ItemServices> & Prefixed<"CCSPlayer_MovementServices", _CCSPlayer_MovementServices> & Prefixed<"CCSPlayer_PingServices", _CCSPlayer_PingServices> & Prefixed<"CCSPlayer_WeaponServices", _CCSPlayer_WeaponServices> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & Prefixed<"ViewAngleServerChange_t", _ViewAngleServerChange_t> & _CCSPlayerPawnOwn>;
type ICCSPlayerPawnBase = Prefixed<"CCSPlayerPawnBase", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CCSPlayer_PingServices", _CCSPlayer_PingServices> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"CPlayer_CameraServices", _CPlayer_CameraServices> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & Prefixed<"ViewAngleServerChange_t", _ViewAngleServerChange_t> & _CCSPlayerPawnBaseOwn>;
type ICCSPlayerResource = Prefixed<"CCSPlayerResource", _CCSPlayerResourceOwn>;
type ICCSTeam = Prefixed<"CCSTeam", _CCSTeamOwn>;
type ICCSWeaponBaseGun = Prefixed<"CCSWeaponBaseGun", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICCSWeaponBaseShotgun = Prefixed<"CCSWeaponBaseShotgun", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CCSWeaponBaseShotgunOwn>;
type ICDEagle = Prefixed<"CDEagle", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICDecoyGrenade = Prefixed<"CDecoyGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICDecoyProjectile = Prefixed<"CDecoyProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyProjectileOwn>;
type ICEnvDetailController = Prefixed<"CEnvDetailController", _CEnvDetailControllerOwn>;
type ICEnvVolumetricFogController = Prefixed<"CEnvVolumetricFogController", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CEnvVolumetricFogControllerOwn>;
type ICEnvWindController = Prefixed<"CEnvWindController", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CEnvWindControllerOwn>;
type ICFlashbang = Prefixed<"CFlashbang", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICFlashbangProjectile = Prefixed<"CFlashbangProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CBaseCSGrenadeProjectileOwn>;
type ICFogController = Prefixed<"CFogController", _CFogControllerOwn>;
type ICHEGrenade = Prefixed<"CHEGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICHEGrenadeProjectile = Prefixed<"CHEGrenadeProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CBaseCSGrenadeProjectileOwn>;
type ICIncendiaryGrenade = Prefixed<"CIncendiaryGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICInferno = Prefixed<"CInferno", Prefixed<"CBodyComponentBaseModelEntity", _CBodyComponentBaseModelEntity> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CInfernoOwn>;
type ICKnife = Prefixed<"CKnife", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CKnifeOwn>;
type ICMapVetoPickController = Prefixed<"CMapVetoPickController", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CMapVetoPickControllerOwn>;
type ICMolotovGrenade = Prefixed<"CMolotovGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICMolotovProjectile = Prefixed<"CMolotovProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CMolotovProjectileOwn>;
type ICPlantedC4 = Prefixed<"CPlantedC4", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CPlantedC4Own>;
type ICPlayer_CameraServices = Prefixed<"CPlayer_CameraServices", _CPlayer_CameraServicesOwn>;
type ICPlayerPing = Prefixed<"CPlayerPing", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CPlayerPingOwn>;
type ICPlayerSprayDecal = Prefixed<"CPlayerSprayDecal", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CPlayerSprayDecalOwn>;
type ICPlayerVisibility = Prefixed<"CPlayerVisibility", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CPlayerVisibilityOwn>;
type ICSmokeGrenade = Prefixed<"CSmokeGrenade", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CDecoyGrenadeOwn>;
type ICSmokeGrenadeProjectile = Prefixed<"CSmokeGrenadeProjectile", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CSmokeGrenadeProjectileOwn>;
type ICTeam = Prefixed<"CTeam", _CTeamOwn>;
type ICTonemapController2 = Prefixed<"CTonemapController2", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CTonemapController2Own>;
type ICVoteController = Prefixed<"CVoteController", Prefixed<"CBodyComponentPoint", _CBodyComponentPoint> & Prefixed<"CEntityIdentity", _CEntityIdentity> & _CVoteControllerOwn>;
type ICWeaponAug = Prefixed<"CWeaponAug", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponAWP = Prefixed<"CWeaponAWP", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponBizon = Prefixed<"CWeaponBizon", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponCZ75a = Prefixed<"CWeaponCZ75a", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CWeaponCZ75aOwn>;
type ICWeaponElite = Prefixed<"CWeaponElite", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponFamas = Prefixed<"CWeaponFamas", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponFiveSeven = Prefixed<"CWeaponFiveSeven", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponG3SG1 = Prefixed<"CWeaponG3SG1", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponGalilAR = Prefixed<"CWeaponGalilAR", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponGlock = Prefixed<"CWeaponGlock", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponHKP2000 = Prefixed<"CWeaponHKP2000", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponM249 = Prefixed<"CWeaponM249", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponM4A1 = Prefixed<"CWeaponM4A1", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponM4A1Silencer = Prefixed<"CWeaponM4A1Silencer", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponMAC10 = Prefixed<"CWeaponMAC10", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponMag7 = Prefixed<"CWeaponMag7", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponMP5SD = Prefixed<"CWeaponMP5SD", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponMP7 = Prefixed<"CWeaponMP7", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponMP9 = Prefixed<"CWeaponMP9", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponNegev = Prefixed<"CWeaponNegev", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponNOVA = Prefixed<"CWeaponNOVA", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CCSWeaponBaseShotgunOwn>;
type ICWeaponP250 = Prefixed<"CWeaponP250", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponP90 = Prefixed<"CWeaponP90", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponRevolver = Prefixed<"CWeaponRevolver", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponSawedoff = Prefixed<"CWeaponSawedoff", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CCSWeaponBaseShotgunOwn>;
type ICWeaponSCAR20 = Prefixed<"CWeaponSCAR20", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponSG556 = Prefixed<"CWeaponSG556", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponSSG08 = Prefixed<"CWeaponSSG08", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponTaser = Prefixed<"CWeaponTaser", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CWeaponTaserOwn>;
type ICWeaponTec9 = Prefixed<"CWeaponTec9", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponUMP45 = Prefixed<"CWeaponUMP45", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponUSPSilencer = Prefixed<"CWeaponUSPSilencer", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CAK47Own>;
type ICWeaponXM1014 = Prefixed<"CWeaponXM1014", Prefixed<"CBodyComponentBaseAnimGraph", _CBodyComponentBaseAnimGraph> & Prefixed<"CDestructiblePartsComponent", _CDestructiblePartsComponent> & Prefixed<"CEconItemAttribute", _CEconItemAttribute> & Prefixed<"CEntityIdentity", _CEntityIdentity> & Prefixed<"EntityRenderAttribute_t", _EntityRenderAttribute_t> & _CCSWeaponBaseShotgunOwn>;
type IServerAuthoritativeWeaponSlot_t = Prefixed<"ServerAuthoritativeWeaponSlot_t", _ServerAuthoritativeWeaponSlot_tOwn>;
type IWeaponPurchaseCount_t = Prefixed<"WeaponPurchaseCount_t", _WeaponPurchaseCount_tOwn>;
/** Maps entity className to its typed properties interface */
interface EntityTypeMap {
  CAK47: ICAK47;
  CBaseCSGrenadeProjectile: ICBaseCSGrenadeProjectile;
  CBaseGrenade: ICBaseGrenade;
  CBasePlayerController: ICBasePlayerController;
  CBasePlayerPawn: ICBasePlayerPawn;
  CBasePlayerWeapon: ICBasePlayerWeapon;
  CC4: ICC4;
  CCSGameModeRules_ArmsRace: ICCSGameModeRules_ArmsRace;
  CCSGameModeRules_Deathmatch: ICCSGameModeRules_Deathmatch;
  CCSGameRules: ICCSGameRules;
  CCSGameRulesProxy: ICCSGameRulesProxy;
  CCSGO_TeamIntroCounterTerroristPosition: ICCSGO_TeamIntroCounterTerroristPosition;
  CCSGO_TeamIntroTerroristPosition: ICCSGO_TeamIntroTerroristPosition;
  CCSGO_TeamSelectCounterTerroristPosition: ICCSGO_TeamSelectCounterTerroristPosition;
  CCSGO_TeamSelectTerroristPosition: ICCSGO_TeamSelectTerroristPosition;
  CCSPlayer_ActionTrackingServices: ICCSPlayer_ActionTrackingServices;
  CCSPlayer_BulletServices: ICCSPlayer_BulletServices;
  CCSPlayer_BuyServices: ICCSPlayer_BuyServices;
  CCSPlayer_CameraServices: ICCSPlayer_CameraServices;
  CCSPlayer_HostageServices: ICCSPlayer_HostageServices;
  CCSPlayer_ItemServices: ICCSPlayer_ItemServices;
  CCSPlayer_MovementServices: ICCSPlayer_MovementServices;
  CCSPlayer_PingServices: ICCSPlayer_PingServices;
  CCSPlayer_WeaponServices: ICCSPlayer_WeaponServices;
  CCSPlayerController: ICCSPlayerController;
  CCSPlayerController_ActionTrackingServices: ICCSPlayerController_ActionTrackingServices;
  CCSPlayerController_DamageServices: ICCSPlayerController_DamageServices;
  CCSPlayerController_InGameMoneyServices: ICCSPlayerController_InGameMoneyServices;
  CCSPlayerController_InventoryServices: ICCSPlayerController_InventoryServices;
  CCSPlayerPawn: ICCSPlayerPawn;
  CCSPlayerPawnBase: ICCSPlayerPawnBase;
  CCSPlayerResource: ICCSPlayerResource;
  CCSTeam: ICCSTeam;
  CCSWeaponBaseGun: ICCSWeaponBaseGun;
  CCSWeaponBaseShotgun: ICCSWeaponBaseShotgun;
  CDEagle: ICDEagle;
  CDecoyGrenade: ICDecoyGrenade;
  CDecoyProjectile: ICDecoyProjectile;
  CEnvDetailController: ICEnvDetailController;
  CEnvVolumetricFogController: ICEnvVolumetricFogController;
  CEnvWindController: ICEnvWindController;
  CFlashbang: ICFlashbang;
  CFlashbangProjectile: ICFlashbangProjectile;
  CFogController: ICFogController;
  CHEGrenade: ICHEGrenade;
  CHEGrenadeProjectile: ICHEGrenadeProjectile;
  CIncendiaryGrenade: ICIncendiaryGrenade;
  CInferno: ICInferno;
  CKnife: ICKnife;
  CMapVetoPickController: ICMapVetoPickController;
  CMolotovGrenade: ICMolotovGrenade;
  CMolotovProjectile: ICMolotovProjectile;
  CPlantedC4: ICPlantedC4;
  CPlayer_CameraServices: ICPlayer_CameraServices;
  CPlayerPing: ICPlayerPing;
  CPlayerSprayDecal: ICPlayerSprayDecal;
  CPlayerVisibility: ICPlayerVisibility;
  CSmokeGrenade: ICSmokeGrenade;
  CSmokeGrenadeProjectile: ICSmokeGrenadeProjectile;
  CTeam: ICTeam;
  CTonemapController2: ICTonemapController2;
  CVoteController: ICVoteController;
  CWeaponAug: ICWeaponAug;
  CWeaponAWP: ICWeaponAWP;
  CWeaponBizon: ICWeaponBizon;
  CWeaponCZ75a: ICWeaponCZ75a;
  CWeaponElite: ICWeaponElite;
  CWeaponFamas: ICWeaponFamas;
  CWeaponFiveSeven: ICWeaponFiveSeven;
  CWeaponG3SG1: ICWeaponG3SG1;
  CWeaponGalilAR: ICWeaponGalilAR;
  CWeaponGlock: ICWeaponGlock;
  CWeaponHKP2000: ICWeaponHKP2000;
  CWeaponM249: ICWeaponM249;
  CWeaponM4A1: ICWeaponM4A1;
  CWeaponM4A1Silencer: ICWeaponM4A1Silencer;
  CWeaponMAC10: ICWeaponMAC10;
  CWeaponMag7: ICWeaponMag7;
  CWeaponMP5SD: ICWeaponMP5SD;
  CWeaponMP7: ICWeaponMP7;
  CWeaponMP9: ICWeaponMP9;
  CWeaponNegev: ICWeaponNegev;
  CWeaponNOVA: ICWeaponNOVA;
  CWeaponP250: ICWeaponP250;
  CWeaponP90: ICWeaponP90;
  CWeaponRevolver: ICWeaponRevolver;
  CWeaponSawedoff: ICWeaponSawedoff;
  CWeaponSCAR20: ICWeaponSCAR20;
  CWeaponSG556: ICWeaponSG556;
  CWeaponSSG08: ICWeaponSSG08;
  CWeaponTaser: ICWeaponTaser;
  CWeaponTec9: ICWeaponTec9;
  CWeaponUMP45: ICWeaponUMP45;
  CWeaponUSPSilencer: ICWeaponUSPSilencer;
  CWeaponXM1014: ICWeaponXM1014;
  ServerAuthoritativeWeaponSlot_t: IServerAuthoritativeWeaponSlot_t;
  WeaponPurchaseCount_t: IWeaponPurchaseCount_t;
}
/** Base entity shape used at runtime */
interface BaseEntity {
  className: string;
  classId: number;
  entityType: number;
  properties: Record<string, unknown>;
}
/** All known entity class names */
type KnownClassName = keyof EntityTypeMap;
/** Get typed properties for a known entity class name */
type EntityProperties<T extends KnownClassName> = Partial<EntityTypeMap[T]>;
/**
 * Typed entity wrapper — narrows to a specific known className.
 *
 * With no type argument, distributes over every known className, producing a
 * discriminated union suitable for narrowing on `entity.className`.
 *
 * @example
 * type Controller = TypedEntity<'CCSPlayerController'>;
 * type AnyKnown = TypedEntity; // discriminated union of all known classes
 */
type TypedEntity<K extends KnownClassName = KnownClassName> = K extends KnownClassName ? {
  className: K;
  classId: number;
  entityType: number;
  properties: Partial<EntityTypeMap[K]>;
} : never;
/**
 * Any entity slot — a known {@link TypedEntity} when className is in {@link EntityTypeMap},
 * or {@link BaseEntity} for classes outside the generated map.
 */
type AnyEntity = TypedEntity | BaseEntity;
/** Narrow an entity slot to a specific typed entity */
declare function isEntityClass<T extends KnownClassName>(entity: AnyEntity | undefined, className: T): entity is TypedEntity<T>;
//#endregion
//#region src/helpers/entityHelper.d.ts
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
declare abstract class EntityHelper<C extends KnownClassName> {
  protected readonly _parser: DemoReader;
  readonly entityId: number;
  constructor(_parser: DemoReader, entityId: number);
  /** The raw, typed entity for this helper, or `undefined` if the slot has been freed. */
  get entity(): TypedEntity<C> | undefined;
  /** Typed property accessor over `EntityTypeMap[C]`. */
  protected prop<K extends keyof EntityTypeMap[C]>(name: K): EntityTypeMap[C][K] | undefined;
}
//#endregion
//#region src/helpers/playerPawn.d.ts
interface Vector {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
declare class PlayerPawn extends EntityHelper<'CCSPlayerPawn'> {
  constructor(parser: DemoReader, entityId: number);
  get position(): Vector;
  get health(): number;
  get maxHealth(): number;
  get armor(): number;
  get lifeState(): number;
  get isAlive(): boolean;
  get hasDefuser(): boolean;
  get hasHelmet(): boolean;
  get isScoped(): boolean;
  get isWalking(): boolean;
  get isDefusing(): boolean;
  get eyeAngles(): {
    pitch: number;
    yaw: number;
  };
  get flags(): number;
  get controller(): Player | undefined;
  get ownerEntityHandle(): number;
}
//#endregion
//#region src/helpers/team.d.ts
declare const TeamNumber: {
  readonly Unassigned: 0;
  readonly Spectators: 1;
  readonly Terrorists: 2;
  readonly CounterTerrorists: 3;
};
type TeamNumber = (typeof TeamNumber)[keyof typeof TeamNumber];
declare class Team extends EntityHelper<'CCSTeam'> {
  constructor(parser: DemoReader, entityId: number);
  get teamNumber(): TeamNumber;
  get teamName(): string;
  get clanName(): string;
  get score(): number;
  get scoreFirstHalf(): number;
  get scoreSecondHalf(): number;
  get members(): Player[];
}
//#endregion
//#region src/helpers/player.d.ts
declare class Player extends EntityHelper<'CCSPlayerController'> {
  constructor(parser: DemoReader, entityId: number);
  get name(): string;
  get steamId(): string;
  get isConnected(): boolean;
  get userInfo(): CMsgPlayerInfo | null;
  get teamNumber(): number;
  get team(): Team | null;
  get pawnEntityId(): number | null;
  get pawn(): PlayerPawn | null;
  get isAlive(): boolean;
  get health(): number;
  get position(): Vector | null;
  get armor(): number;
  get hasDefuser(): boolean;
  get hasHelmet(): boolean;
  get isScoped(): boolean;
  get isDefusing(): boolean;
  get eyeAngles(): {
    pitch: number;
    yaw: number;
  };
  get money(): number;
  get totalCashSpent(): number;
  get cashSpentThisRound(): number;
  get kills(): number;
  get deaths(): number;
  get assists(): number;
  get damage(): number;
  get headshotKills(): number;
  get utilityDamage(): number;
  get enemiesFlashed(): number;
  get enemy3Ks(): number;
  get enemy4Ks(): number;
  get enemy5Ks(): number;
  get objective(): number;
  get round_kills(): number;
  get round_deaths(): number;
  get round_assists(): number;
  get round_damage(): number;
  get round_headshotKills(): number;
  get round_equipmentValue(): number;
  get round_cashEarned(): number;
  get round_utilityDamage(): number;
  get round_enemiesFlashed(): number;
  get round_liveTime(): number;
  get mvps(): number;
  get score(): number;
  get ping(): number;
  get color(): number;
  get clanTag(): string;
}
//#endregion
//#region src/helpers/gameRules.d.ts
declare const WinRoundReason: {
  readonly INVALID: -1;
  readonly STILL_IN_PROGRESS: 0;
  readonly TARGET_BOMBED: 1;
  readonly VIP_ESCAPED: 2;
  readonly VIP_ASSASSINATED: 3;
  readonly T_ESCAPED: 4;
  readonly CT_PREVENT_ESCAPE: 5;
  readonly ESCAPING_T_NEUTRALIZED: 6;
  readonly BOMB_DEFUSED: 7;
  readonly T_ELIMINATED: 8;
  readonly CT_ELIMINATED: 9;
  readonly ROUND_DRAW: 10;
  readonly ALL_HOSTAGES_RESCUED: 11;
  readonly TARGET_SAVED: 12;
  readonly HOSTAGES_NOT_SAVED: 13;
  readonly T_NOT_ESCAPED: 14;
  readonly VIP_NOT_ESCAPED: 15;
  readonly GAME_COMMENCING: 16;
  readonly T_SURRENDER: 17;
  readonly CT_SURRENDER: 18;
  readonly T_PLANTED: 19;
  readonly CT_REACHED_HOSTAGE: 20;
};
type WinRoundReason = (typeof WinRoundReason)[keyof typeof WinRoundReason];
declare class GameRules extends EntityHelper<'CCSGameRulesProxy'> {
  constructor(parser: DemoReader, entityId: number);
  get isWarmup(): boolean;
  get isFreezePeriod(): boolean;
  get isGamePaused(): boolean;
  get isTerroristTimeOutActive(): boolean;
  get isCTTimeOutActive(): boolean;
  get roundsPlayed(): number;
  get gamePhase(): number;
  get phase(): string;
  get roundTime(): number;
  get roundStartTime(): number;
  get terroristTimeOutRemaining(): number;
  get ctTimeOutRemaining(): number;
}
//#endregion
//#region src/parser/descriptors/eventTypes.d.ts
interface IEventServerPreShutdown {
  reason: string;
}
interface IEventServerShutdown {
  reason: string;
}
interface IEventServerMessage {
  text: string;
}
interface IEventServerCvar {
  cvarname: string;
  cvarvalue: string;
}
interface IEventPlayerActivate {
  userid: number;
  player?: Player | null;
}
interface IEventPlayerConnectFull {
  userid: number;
  player?: Player | null;
}
interface IEventPlayerFullUpdate {
  userid: number;
  player?: Player | null;
  count: number;
}
interface IEventPlayerConnect {
  name: string;
  userid: number;
  networkid: string;
  xuid: number;
  bot: boolean;
}
interface IEventPlayerDisconnect {
  userid: number;
  player?: Player | null;
  reason: number;
  name: string;
  networkid: string;
  xuid: number;
  PlayerID: number;
}
interface IEventPlayerInfo {
  name: string;
  userid: number;
  player?: Player | null;
  steamid: number;
  bot: boolean;
}
interface IEventPlayerSpawn {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventPlayerTeam {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  team: number;
  oldteam: number;
  disconnect: boolean;
  silent: boolean;
  isbot: boolean;
}
interface IEventLocalPlayerTeam {}
interface IEventLocalPlayerControllerTeam {}
interface IEventPlayerChangename {
  userid: number;
  player?: Player | null;
  oldname: string;
  newname: string;
}
interface IEventPlayerHurt {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  attacker: number;
  attackerPlayer?: Player | null;
  attacker_pawn: number;
  health: number;
  armor: number;
  weapon: string;
  dmg_health: number;
  dmg_armor: number;
  hitgroup: number;
}
interface IEventPlayerChat {
  teamonly: boolean;
  userid: number;
  player?: Player | null;
  text: string;
}
interface IEventLocalPlayerPawnChanged {}
interface IEventTeamplayBroadcastAudio {
  team: number;
  sound: string;
}
interface IEventFinaleStart {
  rushes: number;
}
interface IEventPlayerStatsUpdated {
  forceupload: boolean;
}
interface IEventUserDataDownloaded {}
interface IEventRagdollDissolved {
  entindex: number;
}
interface IEventTeamInfo {
  teamid: number;
  teamname: string;
}
interface IEventTeamScore {
  teamid: number;
  score: number;
}
interface IEventHltvCameraman {
  userid: number;
  player?: Player | null;
}
interface IEventHltvChase {
  target1: number;
  target2: number;
  distance: number;
  theta: number;
  phi: number;
  inertia: number;
  ineye: number;
}
interface IEventHltvRankCamera {
  index: number;
  rank: number;
  target: number;
}
interface IEventHltvRankEntity {
  userid: number;
  player?: Player | null;
  rank: number;
  target: number;
}
interface IEventHltvFixed {
  posx: number;
  posy: number;
  posz: number;
  theta: number;
  phi: number;
  offset: number;
  fov: number;
  target: number;
}
interface IEventHltvMessage {
  text: string;
}
interface IEventHltvStatus {
  clients: number;
  slots: number;
  proxies: number;
  master: string;
}
interface IEventHltvTitle {
  text: string;
}
interface IEventHltvChat {
  text: string;
  steamID: number;
}
interface IEventHltvVersioninfo {
  version: number;
}
interface IEventHltvReplay {
  delay: number;
  reason: number;
}
interface IEventHltvReplayStatus {
  reason: number;
}
interface IEventDemoStop {}
interface IEventMapShutdown {}
interface IEventMapTransition {}
interface IEventHostnameChanged {
  hostname: string;
}
interface IEventDifficultyChanged {
  newDifficulty: number;
  oldDifficulty: number;
  strDifficulty: string;
}
interface IEventGameMessage {
  target: number;
  text: string;
}
interface IEventGameNewmap {
  mapname: string;
}
interface IEventRoundStart {
  timelimit: number;
  fraglimit: number;
  objective: string;
}
interface IEventRoundEnd {
  winner: number;
  reason: WinRoundReason;
  message: string;
  legacy: number;
  player_count: number;
  nomusic: number;
}
interface IEventRoundStartPreEntity {}
interface IEventRoundStartPostNav {}
interface IEventRoundFreezeEnd {}
interface IEventTeamplayRoundStart {
  full_reset: boolean;
}
interface IEventPlayerDeath {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  attacker: number;
  attackerPlayer?: Player | null;
  attacker_pawn: number;
  assister: number;
  assisterPlayer?: Player | null;
  assister_pawn: number;
  assistedflash: boolean;
  weapon: string;
  weapon_itemid: string;
  weapon_fauxitemid: string;
  weapon_originalowner_xuid: string;
  headshot: boolean;
  dominated: number;
  revenge: number;
  wipe: number;
  penetrated: number;
  noreplay: boolean;
  noscope: boolean;
  thrusmoke: boolean;
  attackerblind: boolean;
  distance: number;
  dmg_health: number;
  dmg_armor: number;
  hitgroup: number;
  attackerinair: boolean;
}
interface IEventPlayerFootstep {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventPlayerHintmessage {
  hintmessage: string;
}
interface IEventBreakBreakable {
  entindex: number;
  userid_pawn: number;
  material: number;
}
interface IEventBrokenBreakable {
  entindex: number;
  userid_pawn: number;
  material: number;
}
interface IEventBreakProp {
  entindex: number;
  userid_pawn: number;
}
interface IEventEntityKilled {
  entindex_killed: number;
  entindex_attacker: number;
  entindex_inflictor: number;
  damagebits: number;
}
interface IEventDoorClose {
  userid_pawn: number;
  checkpoint: boolean;
}
interface IEventVoteStarted {
  issue: string;
  param1: string;
  team: number;
  initiator: number;
}
interface IEventVoteFailed {
  team: number;
}
interface IEventVotePassed {
  details: string;
  param1: string;
  team: number;
}
interface IEventVoteChanged {
  vote_option1: number;
  vote_option2: number;
  vote_option3: number;
  vote_option4: number;
  vote_option5: number;
  potentialVotes: number;
}
interface IEventVoteCastYes {
  team: number;
  entityid: number;
}
interface IEventVoteCastNo {
  team: number;
  entityid: number;
}
interface IEventAchievementEvent {
  achievement_name: string;
  cur_val: number;
  max_val: number;
}
interface IEventAchievementEarned {
  player: number;
  achievement: number;
}
interface IEventAchievementWriteFailed {}
interface IEventBonusUpdated {
  numadvanced: number;
  numbronze: number;
  numsilver: number;
  numgold: number;
}
interface IEventSpecTargetUpdated {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  target: number;
}
interface IEventSpecModeUpdated {
  userid: number;
  player?: Player | null;
}
interface IEventEntityVisible {
  userid: number;
  player?: Player | null;
  subject: number;
  classname: string;
  entityname: string;
}
interface IEventGameinstructorDraw {}
interface IEventGameinstructorNodraw {}
interface IEventFlareIgniteNpc {
  entindex: number;
}
interface IEventHelicopterGrenadePuntMiss {}
interface IEventPhysgunPickup {
  target: number;
}
interface IEventInventoryUpdated {}
interface IEventCartUpdated {}
interface IEventStorePricesheetUpdated {}
interface IEventItemSchemaInitialized {}
interface IEventDropRateModified {}
interface IEventEventTicketModified {}
interface IEventGcConnected {}
interface IEventInstructorStartLesson {
  userid: number;
  player?: Player | null;
  hint_name: string;
  hint_target: number;
  vr_movement_type: number;
  vr_single_controller: boolean;
  vr_controller_type: number;
}
interface IEventInstructorCloseLesson {
  userid: number;
  player?: Player | null;
  hint_name: string;
}
interface IEventInstructorServerHintCreate {
  userid: number;
  player?: Player | null;
  hint_name: string;
  hint_replace_key: string;
  hint_target: number;
  hint_activator_userid: number;
  hint_timeout: number;
  hint_icon_onscreen: string;
  hint_icon_offscreen: string;
  hint_caption: string;
  hint_activator_caption: string;
  hint_color: string;
  hint_icon_offset: number;
  hint_range: number;
  hint_flags: number;
  hint_binding: string;
  hint_gamepad_binding: string;
  hint_allow_nodraw_target: boolean;
  hint_nooffscreen: boolean;
  hint_forcecaption: boolean;
  hint_local_player_only: boolean;
}
interface IEventInstructorServerHintStop {
  hint_name: string;
}
interface IEventSetInstructorGroupEnabled {
  group: string;
  enabled: number;
}
interface IEventClientsideLessonClosed {
  lesson_name: string;
}
interface IEventDynamicShadowLightChanged {}
interface IEventBotTakeover {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  botid: number;
  p: number;
  y: number;
  r: number;
}
interface IEventGameuiHidden {}
interface IEventPlayerScore {
  userid: number;
  player?: Player | null;
  kills: number;
  deaths: number;
  score: number;
}
interface IEventPlayerShoot {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  weapon: number;
  mode: number;
}
interface IEventGameInit {}
interface IEventGameStart {
  roundslimit: number;
  timelimit: number;
  fraglimit: number;
  objective: string;
}
interface IEventGameEnd {
  winner: number;
}
interface IEventRoundAnnounceMatchPoint {}
interface IEventRoundAnnounceFinal {}
interface IEventRoundAnnounceLastRoundHalf {}
interface IEventRoundAnnounceMatchStart {}
interface IEventRoundAnnounceWarmup {}
interface IEventWarmupEnd {}
interface IEventRoundEndUploadStats {}
interface IEventRoundOfficiallyEnded {}
interface IEventRoundTimeWarning {}
interface IEventUgcMapInfoReceived {
  published_file_id: number;
}
interface IEventUgcMapUnsubscribed {
  published_file_id: number;
}
interface IEventUgcMapDownloadError {
  published_file_id: number;
  error_code: number;
}
interface IEventUgcFileDownloadFinished {
  hcontent: number;
}
interface IEventUgcFileDownloadStart {
  hcontent: number;
  published_file_id: number;
}
interface IEventBeginNewMatch {}
interface IEventDmBonusWeaponStart {
  time: number;
  Pos: number;
}
interface IEventSurvivalAnnouncePhase {
  phase: number;
}
interface IEventPlayerDecal {
  userid_pawn: number;
}
interface IEventReadGameTitledata {
  controllerId: number;
}
interface IEventWriteGameTitledata {
  controllerId: number;
}
interface IEventResetGameTitledata {
  controllerId: number;
}
interface IEventWeaponhudSelection {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  mode: number;
  entindex: number;
}
interface IEventVoteEnded {}
interface IEventVoteCast {
  vote_option: number;
  team: number;
  userid: number;
  player?: Player | null;
}
interface IEventVoteOptions {
  count: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}
interface IEventEndmatchMapvoteSelectingMap {
  count: number;
  slot1: number;
  slot2: number;
  slot3: number;
  slot4: number;
  slot5: number;
  slot6: number;
  slot7: number;
  slot8: number;
  slot9: number;
  slot10: number;
}
interface IEventEndmatchCmmStartRevealItems {}
interface IEventClientLoadoutChanged {}
interface IEventAddPlayerSonarIcon {
  userid: number;
  player?: Player | null;
  pos_x: number;
  pos_y: number;
  pos_z: number;
}
interface IEventDoorOpen {
  userid_pawn: number;
  entindex: number;
}
interface IEventDoorClosed {
  userid_pawn: number;
  entindex: number;
}
interface IEventDoorBreak {
  entindex: number;
  dmgstate: number;
}
interface IEventAddBulletHitMarker {
  userid: number;
  player?: Player | null;
  bone: number;
  pos_x: number;
  pos_y: number;
  pos_z: number;
  ang_x: number;
  ang_y: number;
  ang_z: number;
  start_x: number;
  start_y: number;
  start_z: number;
  hit: boolean;
}
interface IEventOtherDeath {
  otherid: number;
  othertype: string;
  attacker: number;
  attackerPlayer?: Player | null;
  weapon: string;
  weapon_itemid: string;
  weapon_fauxitemid: string;
  weapon_originalowner_xuid: string;
  headshot: boolean;
  penetrated: number;
  noscope: boolean;
  thrusmoke: boolean;
  attackerblind: boolean;
}
interface IEventBulletDamage {
  victim: number;
  victim_pawn: number;
  attacker: number;
  attackerPlayer?: Player | null;
  attacker_pawn: number;
  distance: number;
  damage_dir_x: number;
  damage_dir_y: number;
  damage_dir_z: number;
  num_penetrations: number;
  no_scope: boolean;
  in_air: boolean;
  shoot_ang_x: number;
  shoot_ang_y: number;
  shoot_ang_z: number;
  aim_punch_x: number;
  aim_punch_y: number;
  aim_punch_z: number;
  attack_tick_count: number;
  attack_tick_frac: number;
  render_tick_count: number;
  render_tick_frac: number;
  inaccuracy_total: number;
  inaccuracy_move: number;
  inaccuracy_air: number;
  recoil_index: number;
  type: number;
}
interface IEventItemPurchase {
  userid: number;
  player?: Player | null;
  team: number;
  loadout: number;
  weapon: string;
}
interface IEventBombBeginplant {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  site: number;
}
interface IEventBombAbortplant {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  site: number;
}
interface IEventBombPlanted {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  site: number;
}
interface IEventBombDefused {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  site: number;
}
interface IEventBombExploded {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  site: number;
}
interface IEventBombDropped {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entindex: number;
}
interface IEventBombPickup {
  userid_pawn: number;
}
interface IEventDefuserDropped {
  entityid: number;
}
interface IEventDefuserPickup {
  entityid: number;
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventAnnouncePhaseEnd {}
interface IEventCsIntermission {}
interface IEventBombBegindefuse {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  haskit: boolean;
}
interface IEventBombAbortdefuse {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventHostageFollows {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  hostage: number;
}
interface IEventHostageHurt {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  hostage: number;
}
interface IEventHostageKilled {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  hostage: number;
}
interface IEventHostageRescued {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  hostage: number;
  site: number;
}
interface IEventHostageStopsFollowing {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  hostage: number;
}
interface IEventHostageRescuedAll {}
interface IEventHostageCallForHelp {
  hostage: number;
}
interface IEventVipEscaped {
  userid: number;
  player?: Player | null;
}
interface IEventVipKilled {
  userid: number;
  player?: Player | null;
  attacker: number;
  attackerPlayer?: Player | null;
}
interface IEventPlayerRadio {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  slot: number;
}
interface IEventBombBeep {
  entindex: number;
}
interface IEventWeaponFire {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  weapon: string;
  silenced: boolean;
}
interface IEventWeaponFireOnEmpty {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  weapon: string;
}
interface IEventGrenadeThrown {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  weapon: string;
}
interface IEventWeaponReload {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventWeaponZoom {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventSilencerDetach {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventInspectWeapon {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventWeaponZoomRifle {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventPlayerSpawned {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  inrestart: boolean;
}
interface IEventItemPickup {
  userid: number;
  player?: Player | null;
  item: string;
  silent: boolean;
  defindex: number;
}
interface IEventItemPickupSlerp {
  userid: number;
  player?: Player | null;
  index: number;
  behavior: number;
}
interface IEventItemPickupFailed {
  userid: number;
  player?: Player | null;
  item: string;
  reason: number;
  limit: number;
}
interface IEventItemRemove {
  userid: number;
  player?: Player | null;
  item: string;
  defindex: number;
}
interface IEventAmmoPickup {
  userid: number;
  player?: Player | null;
  item: string;
  index: number;
}
interface IEventItemEquip {
  userid: number;
  player?: Player | null;
  item: string;
  defindex: number;
  canzoom: boolean;
  hassilencer: boolean;
  issilenced: boolean;
  hastracers: boolean;
  weptype: number;
  ispainted: boolean;
}
interface IEventEnterBuyzone {
  userid: number;
  player?: Player | null;
  canbuy: boolean;
}
interface IEventExitBuyzone {
  userid: number;
  player?: Player | null;
  canbuy: boolean;
}
interface IEventBuytimeEnded {}
interface IEventEnterBombzone {
  userid: number;
  player?: Player | null;
  hasbomb: boolean;
  isplanted: boolean;
}
interface IEventExitBombzone {
  userid: number;
  player?: Player | null;
  hasbomb: boolean;
  isplanted: boolean;
}
interface IEventEnterRescueZone {
  userid: number;
  player?: Player | null;
}
interface IEventExitRescueZone {
  userid: number;
  player?: Player | null;
}
interface IEventSilencerOff {
  userid: number;
  player?: Player | null;
}
interface IEventSilencerOn {
  userid: number;
  player?: Player | null;
}
interface IEventBuymenuOpen {}
interface IEventBuymenuClose {
  userid: number;
  player?: Player | null;
}
interface IEventRoundPrestart {}
interface IEventRoundPoststart {}
interface IEventGrenadeBounce {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventHegrenadeDetonate {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventFlashbangDetonate {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventSmokegrenadeDetonate {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventSmokegrenadeExpired {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventMolotovDetonate {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  x: number;
  y: number;
  z: number;
}
interface IEventDecoyDetonate {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventDecoyStarted {
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventTagrenadeDetonate {
  userid: number;
  player?: Player | null;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventInfernoStartburn {
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventInfernoExpire {
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventInfernoExtinguish {
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventDecoyFiring {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
}
interface IEventBulletImpact {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  x: number;
  y: number;
  z: number;
}
interface IEventPlayerJump {
  userid: number;
  player?: Player | null;
}
interface IEventPlayerBlind {
  userid: number;
  player?: Player | null;
  attacker: number;
  attackerPlayer?: Player | null;
  entityid: number;
  blind_duration: number;
}
interface IEventPlayerFalldamage {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  damage: number;
}
interface IEventDoorMoving {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entindex: number;
}
interface IEventMbInputLockSuccess {}
interface IEventMbInputLockCancel {}
interface IEventNavBlocked {
  area: number;
  blocked: boolean;
}
interface IEventNavGenerate {}
interface IEventAchievementInfoLoaded {}
interface IEventHltvChangedMode {
  oldmode: number;
  newmode: number;
  obs_target: number;
}
interface IEventCsGameDisconnected {}
interface IEventCsRoundFinalBeep {}
interface IEventCsRoundStartBeep {}
interface IEventCsWinPanelRound {
  show_timer_defend: boolean;
  show_timer_attack: boolean;
  timer_time: number;
  final_event: number;
  funfact_token: string;
  funfact_player: number;
  funfact_data1: number;
  funfact_data2: number;
  funfact_data3: number;
}
interface IEventCsWinPanelMatch {}
interface IEventCsMatchEndRestart {}
interface IEventCsPreRestart {}
interface IEventShowDeathpanel {
  victim: number;
  victim_pawn: number;
  killer: number;
  killer_controller: number;
  hits_taken: number;
  damage_taken: number;
  hits_given: number;
  damage_given: number;
}
interface IEventHideDeathpanel {}
interface IEventPlayerAvengedTeammate {
  avenger_id: number;
  avenged_player_id: number;
}
interface IEventAchievementEarnedLocal {
  achievement: number;
  splitscreenplayer: number;
}
interface IEventRepostXboxAchievements {
  splitscreenplayer: number;
}
interface IEventMatchEndConditions {
  frags: number;
  max_rounds: number;
  win_rounds: number;
  time: number;
}
interface IEventRoundMvp {
  userid: number;
  player?: Player | null;
  reason: number;
  value: number;
  musickitmvps: number;
  nomusic: number;
  musickitid: number;
}
interface IEventShowSurvivalRespawnStatus {
  loc_token: string;
  duration: number;
  userid: number;
  player?: Player | null;
  userid_pawn: number;
}
interface IEventClientDisconnect {}
interface IEventGgKilledEnemy {
  victimid: number;
  attackerid: number;
  dominated: number;
  revenge: number;
  bonus: boolean;
}
interface IEventSwitchTeam {
  numPlayers: number;
  numSpectators: number;
  avg_rank: number;
  numTSlotsFree: number;
  numCTSlotsFree: number;
}
interface IEventWriteProfileData {}
interface IEventTrialTimeExpired {
  userid: number;
  player?: Player | null;
}
interface IEventUpdateMatchmakingStats {}
interface IEventPlayerResetVote {
  userid: number;
  player?: Player | null;
  vote: boolean;
}
interface IEventEnableRestartVoting {
  enable: boolean;
}
interface IEventSfuievent {
  action: string;
  data: string;
  slot: number;
}
interface IEventStartVote {
  userid: number;
  player?: Player | null;
  type: number;
  vote_parameter: number;
}
interface IEventPlayerGivenC4 {
  userid: number;
  player?: Player | null;
}
interface IEventJointeamFailed {
  userid: number;
  player?: Player | null;
  reason: number;
}
interface IEventTeamchangePending {
  userid: number;
  player?: Player | null;
  toteam: number;
}
interface IEventMaterialDefaultComplete {}
interface IEventCsPrevNextSpectator {
  next: boolean;
}
interface IEventNextlevelChanged {
  nextlevel: string;
  mapgroup: string;
  skirmishmode: string;
}
interface IEventSeasoncoinLevelup {
  userid: number;
  player?: Player | null;
  category: number;
  rank: number;
}
interface IEventTournamentReward {
  defindex: number;
  totalrewards: number;
  accountid: number;
}
interface IEventStartHalftime {}
interface IEventAmmoRefill {
  userid: number;
  player?: Player | null;
  success: boolean;
}
interface IEventParachutePickup {
  userid: number;
  player?: Player | null;
}
interface IEventParachuteDeploy {
  userid: number;
  player?: Player | null;
}
interface IEventDronegunAttack {
  userid: number;
  player?: Player | null;
}
interface IEventDroneDispatched {
  userid: number;
  player?: Player | null;
  priority: number;
  drone_dispatched: number;
}
interface IEventLootCrateVisible {
  userid: number;
  player?: Player | null;
  subject: number;
  type: string;
}
interface IEventLootCrateOpened {
  userid: number;
  player?: Player | null;
  type: string;
}
interface IEventOpenCrateInstr {
  userid: number;
  player?: Player | null;
  subject: number;
  type: string;
}
interface IEventSmokeBeaconParadrop {
  userid: number;
  player?: Player | null;
  paradrop: number;
}
interface IEventSurvivalParadropSpawn {
  entityid: number;
}
interface IEventSurvivalParadropBreak {
  entityid: number;
}
interface IEventDroneCargoDetached {
  userid: number;
  player?: Player | null;
  cargo: number;
  delivered: boolean;
}
interface IEventDroneAboveRoof {
  userid: number;
  player?: Player | null;
  cargo: number;
}
interface IEventChoppersIncomingWarning {
  global: boolean;
}
interface IEventFirstbombsIncomingWarning {
  global: boolean;
}
interface IEventDzItemInteraction {
  userid: number;
  player?: Player | null;
  subject: number;
  type: string;
}
interface IEventSurvivalTeammateRespawn {
  userid: number;
  player?: Player | null;
}
interface IEventSurvivalNoRespawnsWarning {
  userid: number;
  player?: Player | null;
}
interface IEventSurvivalNoRespawnsFinal {
  userid: number;
  player?: Player | null;
}
interface IEventPlayerPing {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  entityid: number;
  x: number;
  y: number;
  z: number;
  urgent: boolean;
}
interface IEventPlayerPingStop {
  entityid: number;
}
interface IEventPlayerSound {
  userid: number;
  player?: Player | null;
  userid_pawn: number;
  radius: number;
  duration: number;
  step: boolean;
}
interface IEventGuardianWaveRestart {}
interface IEventTeamIntroStart {}
interface IEventTeamIntroEnd {}
interface IEventGamePhaseChanged {
  new_phase: number;
}
interface IEventClientsideReloadCustomEcon {
  steamid: string;
}
interface _GameEventsArguments {
  server_pre_shutdown: [IEventServerPreShutdown];
  server_shutdown: [IEventServerShutdown];
  server_message: [IEventServerMessage];
  server_cvar: [IEventServerCvar];
  player_activate: [IEventPlayerActivate];
  player_connect_full: [IEventPlayerConnectFull];
  player_full_update: [IEventPlayerFullUpdate];
  player_connect: [IEventPlayerConnect];
  player_disconnect: [IEventPlayerDisconnect];
  player_info: [IEventPlayerInfo];
  player_spawn: [IEventPlayerSpawn];
  player_team: [IEventPlayerTeam];
  local_player_team: [IEventLocalPlayerTeam];
  local_player_controller_team: [IEventLocalPlayerControllerTeam];
  player_changename: [IEventPlayerChangename];
  player_hurt: [IEventPlayerHurt];
  player_chat: [IEventPlayerChat];
  local_player_pawn_changed: [IEventLocalPlayerPawnChanged];
  teamplay_broadcast_audio: [IEventTeamplayBroadcastAudio];
  finale_start: [IEventFinaleStart];
  player_stats_updated: [IEventPlayerStatsUpdated];
  user_data_downloaded: [IEventUserDataDownloaded];
  ragdoll_dissolved: [IEventRagdollDissolved];
  team_info: [IEventTeamInfo];
  team_score: [IEventTeamScore];
  hltv_cameraman: [IEventHltvCameraman];
  hltv_chase: [IEventHltvChase];
  hltv_rank_camera: [IEventHltvRankCamera];
  hltv_rank_entity: [IEventHltvRankEntity];
  hltv_fixed: [IEventHltvFixed];
  hltv_message: [IEventHltvMessage];
  hltv_status: [IEventHltvStatus];
  hltv_title: [IEventHltvTitle];
  hltv_chat: [IEventHltvChat];
  hltv_versioninfo: [IEventHltvVersioninfo];
  hltv_replay: [IEventHltvReplay];
  hltv_replay_status: [IEventHltvReplayStatus];
  demo_stop: [IEventDemoStop];
  map_shutdown: [IEventMapShutdown];
  map_transition: [IEventMapTransition];
  hostname_changed: [IEventHostnameChanged];
  difficulty_changed: [IEventDifficultyChanged];
  game_message: [IEventGameMessage];
  game_newmap: [IEventGameNewmap];
  round_start: [IEventRoundStart];
  round_end: [IEventRoundEnd];
  round_start_pre_entity: [IEventRoundStartPreEntity];
  round_start_post_nav: [IEventRoundStartPostNav];
  round_freeze_end: [IEventRoundFreezeEnd];
  teamplay_round_start: [IEventTeamplayRoundStart];
  player_death: [IEventPlayerDeath];
  player_footstep: [IEventPlayerFootstep];
  player_hintmessage: [IEventPlayerHintmessage];
  break_breakable: [IEventBreakBreakable];
  broken_breakable: [IEventBrokenBreakable];
  break_prop: [IEventBreakProp];
  entity_killed: [IEventEntityKilled];
  door_close: [IEventDoorClose];
  vote_started: [IEventVoteStarted];
  vote_failed: [IEventVoteFailed];
  vote_passed: [IEventVotePassed];
  vote_changed: [IEventVoteChanged];
  vote_cast_yes: [IEventVoteCastYes];
  vote_cast_no: [IEventVoteCastNo];
  achievement_event: [IEventAchievementEvent];
  achievement_earned: [IEventAchievementEarned];
  achievement_write_failed: [IEventAchievementWriteFailed];
  bonus_updated: [IEventBonusUpdated];
  spec_target_updated: [IEventSpecTargetUpdated];
  spec_mode_updated: [IEventSpecModeUpdated];
  entity_visible: [IEventEntityVisible];
  gameinstructor_draw: [IEventGameinstructorDraw];
  gameinstructor_nodraw: [IEventGameinstructorNodraw];
  flare_ignite_npc: [IEventFlareIgniteNpc];
  helicopter_grenade_punt_miss: [IEventHelicopterGrenadePuntMiss];
  physgun_pickup: [IEventPhysgunPickup];
  inventory_updated: [IEventInventoryUpdated];
  cart_updated: [IEventCartUpdated];
  store_pricesheet_updated: [IEventStorePricesheetUpdated];
  item_schema_initialized: [IEventItemSchemaInitialized];
  drop_rate_modified: [IEventDropRateModified];
  event_ticket_modified: [IEventEventTicketModified];
  gc_connected: [IEventGcConnected];
  instructor_start_lesson: [IEventInstructorStartLesson];
  instructor_close_lesson: [IEventInstructorCloseLesson];
  instructor_server_hint_create: [IEventInstructorServerHintCreate];
  instructor_server_hint_stop: [IEventInstructorServerHintStop];
  set_instructor_group_enabled: [IEventSetInstructorGroupEnabled];
  clientside_lesson_closed: [IEventClientsideLessonClosed];
  dynamic_shadow_light_changed: [IEventDynamicShadowLightChanged];
  bot_takeover: [IEventBotTakeover];
  gameui_hidden: [IEventGameuiHidden];
  player_score: [IEventPlayerScore];
  player_shoot: [IEventPlayerShoot];
  game_init: [IEventGameInit];
  game_start: [IEventGameStart];
  game_end: [IEventGameEnd];
  round_announce_match_point: [IEventRoundAnnounceMatchPoint];
  round_announce_final: [IEventRoundAnnounceFinal];
  round_announce_last_round_half: [IEventRoundAnnounceLastRoundHalf];
  round_announce_match_start: [IEventRoundAnnounceMatchStart];
  round_announce_warmup: [IEventRoundAnnounceWarmup];
  warmup_end: [IEventWarmupEnd];
  round_end_upload_stats: [IEventRoundEndUploadStats];
  round_officially_ended: [IEventRoundOfficiallyEnded];
  round_time_warning: [IEventRoundTimeWarning];
  ugc_map_info_received: [IEventUgcMapInfoReceived];
  ugc_map_unsubscribed: [IEventUgcMapUnsubscribed];
  ugc_map_download_error: [IEventUgcMapDownloadError];
  ugc_file_download_finished: [IEventUgcFileDownloadFinished];
  ugc_file_download_start: [IEventUgcFileDownloadStart];
  begin_new_match: [IEventBeginNewMatch];
  dm_bonus_weapon_start: [IEventDmBonusWeaponStart];
  survival_announce_phase: [IEventSurvivalAnnouncePhase];
  player_decal: [IEventPlayerDecal];
  read_game_titledata: [IEventReadGameTitledata];
  write_game_titledata: [IEventWriteGameTitledata];
  reset_game_titledata: [IEventResetGameTitledata];
  weaponhud_selection: [IEventWeaponhudSelection];
  vote_ended: [IEventVoteEnded];
  vote_cast: [IEventVoteCast];
  vote_options: [IEventVoteOptions];
  endmatch_mapvote_selecting_map: [IEventEndmatchMapvoteSelectingMap];
  endmatch_cmm_start_reveal_items: [IEventEndmatchCmmStartRevealItems];
  client_loadout_changed: [IEventClientLoadoutChanged];
  add_player_sonar_icon: [IEventAddPlayerSonarIcon];
  door_open: [IEventDoorOpen];
  door_closed: [IEventDoorClosed];
  door_break: [IEventDoorBreak];
  add_bullet_hit_marker: [IEventAddBulletHitMarker];
  other_death: [IEventOtherDeath];
  bullet_damage: [IEventBulletDamage];
  item_purchase: [IEventItemPurchase];
  bomb_beginplant: [IEventBombBeginplant];
  bomb_abortplant: [IEventBombAbortplant];
  bomb_planted: [IEventBombPlanted];
  bomb_defused: [IEventBombDefused];
  bomb_exploded: [IEventBombExploded];
  bomb_dropped: [IEventBombDropped];
  bomb_pickup: [IEventBombPickup];
  defuser_dropped: [IEventDefuserDropped];
  defuser_pickup: [IEventDefuserPickup];
  announce_phase_end: [IEventAnnouncePhaseEnd];
  cs_intermission: [IEventCsIntermission];
  bomb_begindefuse: [IEventBombBegindefuse];
  bomb_abortdefuse: [IEventBombAbortdefuse];
  hostage_follows: [IEventHostageFollows];
  hostage_hurt: [IEventHostageHurt];
  hostage_killed: [IEventHostageKilled];
  hostage_rescued: [IEventHostageRescued];
  hostage_stops_following: [IEventHostageStopsFollowing];
  hostage_rescued_all: [IEventHostageRescuedAll];
  hostage_call_for_help: [IEventHostageCallForHelp];
  vip_escaped: [IEventVipEscaped];
  vip_killed: [IEventVipKilled];
  player_radio: [IEventPlayerRadio];
  bomb_beep: [IEventBombBeep];
  weapon_fire: [IEventWeaponFire];
  weapon_fire_on_empty: [IEventWeaponFireOnEmpty];
  grenade_thrown: [IEventGrenadeThrown];
  weapon_reload: [IEventWeaponReload];
  weapon_zoom: [IEventWeaponZoom];
  silencer_detach: [IEventSilencerDetach];
  inspect_weapon: [IEventInspectWeapon];
  weapon_zoom_rifle: [IEventWeaponZoomRifle];
  player_spawned: [IEventPlayerSpawned];
  item_pickup: [IEventItemPickup];
  item_pickup_slerp: [IEventItemPickupSlerp];
  item_pickup_failed: [IEventItemPickupFailed];
  item_remove: [IEventItemRemove];
  ammo_pickup: [IEventAmmoPickup];
  item_equip: [IEventItemEquip];
  enter_buyzone: [IEventEnterBuyzone];
  exit_buyzone: [IEventExitBuyzone];
  buytime_ended: [IEventBuytimeEnded];
  enter_bombzone: [IEventEnterBombzone];
  exit_bombzone: [IEventExitBombzone];
  enter_rescue_zone: [IEventEnterRescueZone];
  exit_rescue_zone: [IEventExitRescueZone];
  silencer_off: [IEventSilencerOff];
  silencer_on: [IEventSilencerOn];
  buymenu_open: [IEventBuymenuOpen];
  buymenu_close: [IEventBuymenuClose];
  round_prestart: [IEventRoundPrestart];
  round_poststart: [IEventRoundPoststart];
  grenade_bounce: [IEventGrenadeBounce];
  hegrenade_detonate: [IEventHegrenadeDetonate];
  flashbang_detonate: [IEventFlashbangDetonate];
  smokegrenade_detonate: [IEventSmokegrenadeDetonate];
  smokegrenade_expired: [IEventSmokegrenadeExpired];
  molotov_detonate: [IEventMolotovDetonate];
  decoy_detonate: [IEventDecoyDetonate];
  decoy_started: [IEventDecoyStarted];
  tagrenade_detonate: [IEventTagrenadeDetonate];
  inferno_startburn: [IEventInfernoStartburn];
  inferno_expire: [IEventInfernoExpire];
  inferno_extinguish: [IEventInfernoExtinguish];
  decoy_firing: [IEventDecoyFiring];
  bullet_impact: [IEventBulletImpact];
  player_jump: [IEventPlayerJump];
  player_blind: [IEventPlayerBlind];
  player_falldamage: [IEventPlayerFalldamage];
  door_moving: [IEventDoorMoving];
  mb_input_lock_success: [IEventMbInputLockSuccess];
  mb_input_lock_cancel: [IEventMbInputLockCancel];
  nav_blocked: [IEventNavBlocked];
  nav_generate: [IEventNavGenerate];
  achievement_info_loaded: [IEventAchievementInfoLoaded];
  hltv_changed_mode: [IEventHltvChangedMode];
  cs_game_disconnected: [IEventCsGameDisconnected];
  cs_round_final_beep: [IEventCsRoundFinalBeep];
  cs_round_start_beep: [IEventCsRoundStartBeep];
  cs_win_panel_round: [IEventCsWinPanelRound];
  cs_win_panel_match: [IEventCsWinPanelMatch];
  cs_match_end_restart: [IEventCsMatchEndRestart];
  cs_pre_restart: [IEventCsPreRestart];
  show_deathpanel: [IEventShowDeathpanel];
  hide_deathpanel: [IEventHideDeathpanel];
  player_avenged_teammate: [IEventPlayerAvengedTeammate];
  achievement_earned_local: [IEventAchievementEarnedLocal];
  repost_xbox_achievements: [IEventRepostXboxAchievements];
  match_end_conditions: [IEventMatchEndConditions];
  round_mvp: [IEventRoundMvp];
  show_survival_respawn_status: [IEventShowSurvivalRespawnStatus];
  client_disconnect: [IEventClientDisconnect];
  gg_killed_enemy: [IEventGgKilledEnemy];
  switch_team: [IEventSwitchTeam];
  write_profile_data: [IEventWriteProfileData];
  trial_time_expired: [IEventTrialTimeExpired];
  update_matchmaking_stats: [IEventUpdateMatchmakingStats];
  player_reset_vote: [IEventPlayerResetVote];
  enable_restart_voting: [IEventEnableRestartVoting];
  sfuievent: [IEventSfuievent];
  start_vote: [IEventStartVote];
  player_given_c4: [IEventPlayerGivenC4];
  jointeam_failed: [IEventJointeamFailed];
  teamchange_pending: [IEventTeamchangePending];
  material_default_complete: [IEventMaterialDefaultComplete];
  cs_prev_next_spectator: [IEventCsPrevNextSpectator];
  nextlevel_changed: [IEventNextlevelChanged];
  seasoncoin_levelup: [IEventSeasoncoinLevelup];
  tournament_reward: [IEventTournamentReward];
  start_halftime: [IEventStartHalftime];
  ammo_refill: [IEventAmmoRefill];
  parachute_pickup: [IEventParachutePickup];
  parachute_deploy: [IEventParachuteDeploy];
  dronegun_attack: [IEventDronegunAttack];
  drone_dispatched: [IEventDroneDispatched];
  loot_crate_visible: [IEventLootCrateVisible];
  loot_crate_opened: [IEventLootCrateOpened];
  open_crate_instr: [IEventOpenCrateInstr];
  smoke_beacon_paradrop: [IEventSmokeBeaconParadrop];
  survival_paradrop_spawn: [IEventSurvivalParadropSpawn];
  survival_paradrop_break: [IEventSurvivalParadropBreak];
  drone_cargo_detached: [IEventDroneCargoDetached];
  drone_above_roof: [IEventDroneAboveRoof];
  choppers_incoming_warning: [IEventChoppersIncomingWarning];
  firstbombs_incoming_warning: [IEventFirstbombsIncomingWarning];
  dz_item_interaction: [IEventDzItemInteraction];
  survival_teammate_respawn: [IEventSurvivalTeammateRespawn];
  survival_no_respawns_warning: [IEventSurvivalNoRespawnsWarning];
  survival_no_respawns_final: [IEventSurvivalNoRespawnsFinal];
  player_ping: [IEventPlayerPing];
  player_ping_stop: [IEventPlayerPingStop];
  player_sound: [IEventPlayerSound];
  guardian_wave_restart: [IEventGuardianWaveRestart];
  team_intro_start: [IEventTeamIntroStart];
  team_intro_end: [IEventTeamIntroEnd];
  game_phase_changed: [IEventGamePhaseChanged];
  clientside_reload_custom_econ: [IEventClientsideReloadCustomEcon];
}
type EventWithName = { [K in keyof _GameEventsArguments]: _GameEventsArguments[K][0] & {
  event_name: K;
} };
interface GameEventsArguments extends _GameEventsArguments {
  gameEvent: [keyof _GameEventsArguments, EventWithName[keyof _GameEventsArguments]];
}
//#endregion
//#region src/broadcast/sync.d.ts
/**
 * Metadata returned by the broadcast relay's `/sync` endpoint.
 *
 * Required fields are defined by Valve's spec; the optional fields are
 * emitted by the reference Valve webserver implementation but not strictly
 * required by the wiki schema.
 */
interface BroadcastSyncDto {
  /** Tick number of the chosen FULL fragment. */
  tick: number;
  /** Seconds since the FULL fragment was received. */
  rtdelay: number;
  /** Seconds since the relay last received data from the game server. */
  rcvage: number;
  /** Fragment number to start fetching from. */
  fragment: number;
  /** Fragment number for the `/start` request. */
  signup_fragment: number;
  /** Ticks per second (typically 64 in CS2). */
  tps: number;
  /** Protocol version. Always 5 for Source 2 broadcasts. */
  protocol: number;
  /** Optional URL path segment for subsequent fragment requests. */
  token_redirect?: string;
  /** Seconds between keyframes. Clients default to 3 if absent. */
  keyframe_interval?: number;
  /** End tick of the chosen fragment. */
  endtick?: number;
  /** Maximum tick available on the relay. */
  maxtick?: number;
  /** Map name. */
  map?: string;
}
//#endregion
//#region src/ts-proto/cstrike15_gcmessages.d.ts
interface TournamentPlayer {
  account_id?: number | undefined;
  player_nick?: string | undefined;
  player_name?: string | undefined;
  player_dob?: number | undefined;
  player_flag?: string | undefined;
  player_location?: string | undefined;
  player_desc?: string | undefined;
}
interface TournamentTeam {
  team_id?: number | undefined;
  team_tag?: string | undefined;
  team_flag?: string | undefined;
  team_name?: string | undefined;
  players: TournamentPlayer[];
}
interface TournamentEvent {
  event_id?: number | undefined;
  event_tag?: string | undefined;
  event_name?: string | undefined;
  event_time_start?: number | undefined;
  event_time_end?: number | undefined;
  event_public?: number | undefined;
  event_stage_id?: number | undefined;
  event_stage_name?: string | undefined;
  active_section_id?: number | undefined;
}
interface OperationalVarValue {
  name?: string | undefined;
  ivalue?: number | undefined;
  fvalue?: number | undefined;
  svalue?: Uint8Array | undefined;
}
interface PlayerRankingInfo {
  account_id?: number | undefined;
  rank_id?: number | undefined;
  wins?: number | undefined;
  rank_change?: number | undefined;
  rank_type_id?: number | undefined;
  tv_control?: number | undefined;
  rank_window_stats?: string | undefined;
  leaderboard_name?: string | undefined;
  rank_if_win?: number | undefined;
  rank_if_lose?: number | undefined;
  rank_if_tie?: number | undefined;
  per_map_rank: PlayerRankingInfo_PerMapRank[];
  leaderboard_name_status?: number | undefined;
  highest_rank?: number | undefined;
  rank_expiry?: number | undefined;
}
interface PlayerRankingInfo_PerMapRank {
  map_id?: number | undefined;
  rank_id?: number | undefined;
  wins?: number | undefined;
}
interface IpAddressMask {
  a?: number | undefined;
  b?: number | undefined;
  c?: number | undefined;
  d?: number | undefined;
  bits?: number | undefined;
  token?: number | undefined;
}
interface CDataGCCStrike15_v2_TournamentMatchDraft {
  event_id?: number | undefined;
  event_stage_id?: number | undefined;
  team_id_0?: number | undefined;
  team_id_1?: number | undefined;
  maps_count?: number | undefined;
  maps_current?: number | undefined;
  team_id_start?: number | undefined;
  team_id_veto1?: number | undefined;
  team_id_pickn?: number | undefined;
  drafts: CDataGCCStrike15_v2_TournamentMatchDraft_Entry[];
  vote_mapid_0: number[];
  vote_mapid_1: number[];
  vote_mapid_2: number[];
  vote_mapid_3: number[];
  vote_mapid_4: number[];
  vote_mapid_5: number[];
  vote_starting_side: number[];
  vote_phase?: number | undefined;
  vote_phase_start?: number | undefined;
  vote_phase_length?: number | undefined;
}
interface CDataGCCStrike15_v2_TournamentMatchDraft_Entry {
  mapid?: number | undefined;
  team_id_ct?: number | undefined;
}
interface CPreMatchInfoData {
  predictions_pct?: number | undefined;
  draft?: CDataGCCStrike15_v2_TournamentMatchDraft | undefined;
  stats: CPreMatchInfoData_TeamStats[];
  wins: number[];
}
interface CPreMatchInfoData_TeamStats {
  match_info_idxtxt?: number | undefined;
  match_info_txt?: string | undefined;
  match_info_teams: string[];
}
interface CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve {
  account_ids: number[];
  game_type?: number | undefined;
  match_id?: string | undefined;
  server_version?: number | undefined;
  flags?: number | undefined;
  rankings: PlayerRankingInfo[];
  encryption_key?: string | undefined;
  encryption_key_pub?: string | undefined;
  party_ids: number[];
  whitelist: IpAddressMask[];
  tv_master_steamid?: string | undefined;
  tournament_event?: TournamentEvent | undefined;
  tournament_teams: TournamentTeam[];
  tournament_casters_account_ids: number[];
  tv_relay_steamid?: string | undefined;
  pre_match_data?: CPreMatchInfoData | undefined;
  tv_control?: number | undefined;
  op_var_values: OperationalVarValue[];
  socache_control?: number | undefined;
  teammate_colors: number[];
  match_id_additional?: number | undefined;
}
declare const TournamentPlayer: MessageFns$2<TournamentPlayer>;
declare const TournamentTeam: MessageFns$2<TournamentTeam>;
declare const TournamentEvent: MessageFns$2<TournamentEvent>;
declare const OperationalVarValue: MessageFns$2<OperationalVarValue>;
declare const PlayerRankingInfo: MessageFns$2<PlayerRankingInfo>;
declare const PlayerRankingInfo_PerMapRank: MessageFns$2<PlayerRankingInfo_PerMapRank>;
declare const IpAddressMask: MessageFns$2<IpAddressMask>;
declare const CDataGCCStrike15_v2_TournamentMatchDraft: MessageFns$2<CDataGCCStrike15_v2_TournamentMatchDraft>;
declare const CDataGCCStrike15_v2_TournamentMatchDraft_Entry: MessageFns$2<CDataGCCStrike15_v2_TournamentMatchDraft_Entry>;
declare const CPreMatchInfoData: MessageFns$2<CPreMatchInfoData>;
declare const CPreMatchInfoData_TeamStats: MessageFns$2<CPreMatchInfoData_TeamStats>;
declare const CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve: MessageFns$2<CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve>;
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$2<T[K]> } : Partial<T>;
type KeysOfUnion$2<T> = T extends T ? keyof T : never;
type Exact$2<P, I extends P> = P extends Builtin$2 ? P : P & { [K in keyof P]: Exact$2<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$2<P>>]: never };
interface MessageFns$2<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$2<DeepPartial$2<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$2<DeepPartial$2<T>, I>>(object: I): T;
}
//#endregion
//#region src/ts-proto/cstrike15_usermessages.d.ts
declare const ECstrike15UserMessages: {
  readonly CS_UM_VGUIMenu: 301;
  readonly CS_UM_Geiger: 302;
  readonly CS_UM_Train: 303;
  readonly CS_UM_HudText: 304;
  readonly CS_UM_SayText: 305;
  readonly CS_UM_SayText2: 306;
  readonly CS_UM_TextMsg: 307;
  readonly CS_UM_HudMsg: 308;
  readonly CS_UM_ResetHud: 309;
  readonly CS_UM_GameTitle: 310;
  readonly CS_UM_Shake: 312;
  readonly CS_UM_Fade: 313;
  readonly CS_UM_Rumble: 314;
  readonly CS_UM_CloseCaption: 315;
  readonly CS_UM_CloseCaptionDirect: 316;
  readonly CS_UM_SendAudio: 317;
  readonly CS_UM_RawAudio: 318;
  readonly CS_UM_VoiceMask: 319;
  readonly CS_UM_RequestState: 320;
  readonly CS_UM_Damage: 321;
  readonly CS_UM_RadioText: 322;
  readonly CS_UM_HintText: 323;
  readonly CS_UM_KeyHintText: 324;
  readonly CS_UM_ProcessSpottedEntityUpdate: 325;
  readonly CS_UM_ReloadEffect: 326;
  readonly CS_UM_AdjustMoney: 327;
  readonly CS_UM_UpdateTeamMoney: 328;
  readonly CS_UM_StopSpectatorMode: 329;
  readonly CS_UM_KillCam: 330;
  readonly CS_UM_DesiredTimescale: 331;
  readonly CS_UM_CurrentTimescale: 332;
  readonly CS_UM_AchievementEvent: 333;
  readonly CS_UM_MatchEndConditions: 334;
  readonly CS_UM_DisconnectToLobby: 335;
  readonly CS_UM_PlayerStatsUpdate: 336;
  readonly CS_UM_ClientInfo: 339;
  readonly CS_UM_XRankGet: 340;
  readonly CS_UM_XRankUpd: 341;
  readonly CS_UM_CallVoteFailed: 345;
  readonly CS_UM_VoteStart: 346;
  readonly CS_UM_VotePass: 347;
  readonly CS_UM_VoteFailed: 348;
  readonly CS_UM_VoteSetup: 349;
  readonly CS_UM_ServerRankRevealAll: 350;
  readonly CS_UM_SendLastKillerDamageToClient: 351;
  readonly CS_UM_ServerRankUpdate: 352;
  readonly CS_UM_ItemPickup: 353;
  readonly CS_UM_ShowMenu: 354;
  readonly CS_UM_BarTime: 355;
  readonly CS_UM_AmmoDenied: 356;
  readonly CS_UM_MarkAchievement: 357;
  readonly CS_UM_MatchStatsUpdate: 358;
  readonly CS_UM_ItemDrop: 359;
  readonly CS_UM_SendPlayerItemDrops: 361;
  readonly CS_UM_RoundBackupFilenames: 362;
  readonly CS_UM_SendPlayerItemFound: 363;
  readonly CS_UM_ReportHit: 364;
  readonly CS_UM_XpUpdate: 365;
  readonly CS_UM_QuestProgress: 366;
  readonly CS_UM_ScoreLeaderboardData: 367;
  readonly CS_UM_PlayerDecalDigitalSignature: 368;
  readonly CS_UM_WeaponSound: 369;
  readonly CS_UM_UpdateScreenHealthBar: 370;
  readonly CS_UM_EntityOutlineHighlight: 371;
  readonly CS_UM_SSUI: 372;
  readonly CS_UM_SurvivalStats: 373;
  readonly CS_UM_DisconnectToLobby2: 374;
  readonly CS_UM_EndOfMatchAllPlayersData: 375;
  readonly CS_UM_PostRoundDamageReport: 376;
  readonly CS_UM_RoundEndReportData: 379;
  readonly CS_UM_CurrentRoundOdds: 380;
  readonly CS_UM_DeepStats: 381;
  readonly CS_UM_ShootInfo: 383;
  readonly CS_UM_CounterStrafe: 385;
  readonly CS_UM_DamagePrediction: 386;
  readonly CS_UM_RecurringMissionSchema: 387;
  readonly CS_UM_SendPlayerLoadout: 388;
  readonly CS_UM_WeaponMagDrop: 389;
  readonly UNRECOGNIZED: -1;
};
type ECstrike15UserMessages = typeof ECstrike15UserMessages[keyof typeof ECstrike15UserMessages];
declare namespace ECstrike15UserMessages {
  type CS_UM_VGUIMenu = typeof ECstrike15UserMessages.CS_UM_VGUIMenu;
  type CS_UM_Geiger = typeof ECstrike15UserMessages.CS_UM_Geiger;
  type CS_UM_Train = typeof ECstrike15UserMessages.CS_UM_Train;
  type CS_UM_HudText = typeof ECstrike15UserMessages.CS_UM_HudText;
  type CS_UM_SayText = typeof ECstrike15UserMessages.CS_UM_SayText;
  type CS_UM_SayText2 = typeof ECstrike15UserMessages.CS_UM_SayText2;
  type CS_UM_TextMsg = typeof ECstrike15UserMessages.CS_UM_TextMsg;
  type CS_UM_HudMsg = typeof ECstrike15UserMessages.CS_UM_HudMsg;
  type CS_UM_ResetHud = typeof ECstrike15UserMessages.CS_UM_ResetHud;
  type CS_UM_GameTitle = typeof ECstrike15UserMessages.CS_UM_GameTitle;
  type CS_UM_Shake = typeof ECstrike15UserMessages.CS_UM_Shake;
  type CS_UM_Fade = typeof ECstrike15UserMessages.CS_UM_Fade;
  type CS_UM_Rumble = typeof ECstrike15UserMessages.CS_UM_Rumble;
  type CS_UM_CloseCaption = typeof ECstrike15UserMessages.CS_UM_CloseCaption;
  type CS_UM_CloseCaptionDirect = typeof ECstrike15UserMessages.CS_UM_CloseCaptionDirect;
  type CS_UM_SendAudio = typeof ECstrike15UserMessages.CS_UM_SendAudio;
  type CS_UM_RawAudio = typeof ECstrike15UserMessages.CS_UM_RawAudio;
  type CS_UM_VoiceMask = typeof ECstrike15UserMessages.CS_UM_VoiceMask;
  type CS_UM_RequestState = typeof ECstrike15UserMessages.CS_UM_RequestState;
  type CS_UM_Damage = typeof ECstrike15UserMessages.CS_UM_Damage;
  type CS_UM_RadioText = typeof ECstrike15UserMessages.CS_UM_RadioText;
  type CS_UM_HintText = typeof ECstrike15UserMessages.CS_UM_HintText;
  type CS_UM_KeyHintText = typeof ECstrike15UserMessages.CS_UM_KeyHintText;
  type CS_UM_ProcessSpottedEntityUpdate = typeof ECstrike15UserMessages.CS_UM_ProcessSpottedEntityUpdate;
  type CS_UM_ReloadEffect = typeof ECstrike15UserMessages.CS_UM_ReloadEffect;
  type CS_UM_AdjustMoney = typeof ECstrike15UserMessages.CS_UM_AdjustMoney;
  type CS_UM_UpdateTeamMoney = typeof ECstrike15UserMessages.CS_UM_UpdateTeamMoney;
  type CS_UM_StopSpectatorMode = typeof ECstrike15UserMessages.CS_UM_StopSpectatorMode;
  type CS_UM_KillCam = typeof ECstrike15UserMessages.CS_UM_KillCam;
  type CS_UM_DesiredTimescale = typeof ECstrike15UserMessages.CS_UM_DesiredTimescale;
  type CS_UM_CurrentTimescale = typeof ECstrike15UserMessages.CS_UM_CurrentTimescale;
  type CS_UM_AchievementEvent = typeof ECstrike15UserMessages.CS_UM_AchievementEvent;
  type CS_UM_MatchEndConditions = typeof ECstrike15UserMessages.CS_UM_MatchEndConditions;
  type CS_UM_DisconnectToLobby = typeof ECstrike15UserMessages.CS_UM_DisconnectToLobby;
  type CS_UM_PlayerStatsUpdate = typeof ECstrike15UserMessages.CS_UM_PlayerStatsUpdate;
  type CS_UM_ClientInfo = typeof ECstrike15UserMessages.CS_UM_ClientInfo;
  type CS_UM_XRankGet = typeof ECstrike15UserMessages.CS_UM_XRankGet;
  type CS_UM_XRankUpd = typeof ECstrike15UserMessages.CS_UM_XRankUpd;
  type CS_UM_CallVoteFailed = typeof ECstrike15UserMessages.CS_UM_CallVoteFailed;
  type CS_UM_VoteStart = typeof ECstrike15UserMessages.CS_UM_VoteStart;
  type CS_UM_VotePass = typeof ECstrike15UserMessages.CS_UM_VotePass;
  type CS_UM_VoteFailed = typeof ECstrike15UserMessages.CS_UM_VoteFailed;
  type CS_UM_VoteSetup = typeof ECstrike15UserMessages.CS_UM_VoteSetup;
  type CS_UM_ServerRankRevealAll = typeof ECstrike15UserMessages.CS_UM_ServerRankRevealAll;
  type CS_UM_SendLastKillerDamageToClient = typeof ECstrike15UserMessages.CS_UM_SendLastKillerDamageToClient;
  type CS_UM_ServerRankUpdate = typeof ECstrike15UserMessages.CS_UM_ServerRankUpdate;
  type CS_UM_ItemPickup = typeof ECstrike15UserMessages.CS_UM_ItemPickup;
  type CS_UM_ShowMenu = typeof ECstrike15UserMessages.CS_UM_ShowMenu;
  type CS_UM_BarTime = typeof ECstrike15UserMessages.CS_UM_BarTime;
  type CS_UM_AmmoDenied = typeof ECstrike15UserMessages.CS_UM_AmmoDenied;
  type CS_UM_MarkAchievement = typeof ECstrike15UserMessages.CS_UM_MarkAchievement;
  type CS_UM_MatchStatsUpdate = typeof ECstrike15UserMessages.CS_UM_MatchStatsUpdate;
  type CS_UM_ItemDrop = typeof ECstrike15UserMessages.CS_UM_ItemDrop;
  type CS_UM_SendPlayerItemDrops = typeof ECstrike15UserMessages.CS_UM_SendPlayerItemDrops;
  type CS_UM_RoundBackupFilenames = typeof ECstrike15UserMessages.CS_UM_RoundBackupFilenames;
  type CS_UM_SendPlayerItemFound = typeof ECstrike15UserMessages.CS_UM_SendPlayerItemFound;
  type CS_UM_ReportHit = typeof ECstrike15UserMessages.CS_UM_ReportHit;
  type CS_UM_XpUpdate = typeof ECstrike15UserMessages.CS_UM_XpUpdate;
  type CS_UM_QuestProgress = typeof ECstrike15UserMessages.CS_UM_QuestProgress;
  type CS_UM_ScoreLeaderboardData = typeof ECstrike15UserMessages.CS_UM_ScoreLeaderboardData;
  type CS_UM_PlayerDecalDigitalSignature = typeof ECstrike15UserMessages.CS_UM_PlayerDecalDigitalSignature;
  type CS_UM_WeaponSound = typeof ECstrike15UserMessages.CS_UM_WeaponSound;
  type CS_UM_UpdateScreenHealthBar = typeof ECstrike15UserMessages.CS_UM_UpdateScreenHealthBar;
  type CS_UM_EntityOutlineHighlight = typeof ECstrike15UserMessages.CS_UM_EntityOutlineHighlight;
  type CS_UM_SSUI = typeof ECstrike15UserMessages.CS_UM_SSUI;
  type CS_UM_SurvivalStats = typeof ECstrike15UserMessages.CS_UM_SurvivalStats;
  type CS_UM_DisconnectToLobby2 = typeof ECstrike15UserMessages.CS_UM_DisconnectToLobby2;
  type CS_UM_EndOfMatchAllPlayersData = typeof ECstrike15UserMessages.CS_UM_EndOfMatchAllPlayersData;
  type CS_UM_PostRoundDamageReport = typeof ECstrike15UserMessages.CS_UM_PostRoundDamageReport;
  type CS_UM_RoundEndReportData = typeof ECstrike15UserMessages.CS_UM_RoundEndReportData;
  type CS_UM_CurrentRoundOdds = typeof ECstrike15UserMessages.CS_UM_CurrentRoundOdds;
  type CS_UM_DeepStats = typeof ECstrike15UserMessages.CS_UM_DeepStats;
  type CS_UM_ShootInfo = typeof ECstrike15UserMessages.CS_UM_ShootInfo;
  type CS_UM_CounterStrafe = typeof ECstrike15UserMessages.CS_UM_CounterStrafe;
  type CS_UM_DamagePrediction = typeof ECstrike15UserMessages.CS_UM_DamagePrediction;
  type CS_UM_RecurringMissionSchema = typeof ECstrike15UserMessages.CS_UM_RecurringMissionSchema;
  type CS_UM_SendPlayerLoadout = typeof ECstrike15UserMessages.CS_UM_SendPlayerLoadout;
  type CS_UM_WeaponMagDrop = typeof ECstrike15UserMessages.CS_UM_WeaponMagDrop;
  type UNRECOGNIZED = typeof ECstrike15UserMessages.UNRECOGNIZED;
}
interface CCSUsrMsg_ServerRankUpdate {
  rank_update: CCSUsrMsg_ServerRankUpdate_RankUpdate[];
}
interface CCSUsrMsg_ServerRankUpdate_RankUpdate {
  account_id?: number | undefined;
  rank_old?: number | undefined;
  rank_new?: number | undefined;
  num_wins?: number | undefined;
  rank_change?: number | undefined;
  rank_type_id?: number | undefined;
}
interface CCSUsrMsg_ServerRankRevealAll {
  seconds_till_shutdown?: number | undefined;
  reservation?: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve | undefined;
}
declare const CCSUsrMsg_ServerRankUpdate: MessageFns$1<CCSUsrMsg_ServerRankUpdate>;
declare const CCSUsrMsg_ServerRankUpdate_RankUpdate: MessageFns$1<CCSUsrMsg_ServerRankUpdate_RankUpdate>;
declare const CCSUsrMsg_ServerRankRevealAll: MessageFns$1<CCSUsrMsg_ServerRankRevealAll>;
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? { [K in keyof T]?: DeepPartial$1<T[K]> } : Partial<T>;
type KeysOfUnion$1<T> = T extends T ? keyof T : never;
type Exact$1<P, I extends P> = P extends Builtin$1 ? P : P & { [K in keyof P]: Exact$1<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion$1<P>>]: never };
interface MessageFns$1<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact$1<DeepPartial$1<T>, I>>(base?: I): T;
  fromPartial<I extends Exact$1<DeepPartial$1<T>, I>>(object: I): T;
}
//#endregion
//#region src/ts-proto/usermessages.d.ts
declare const EBaseUserMessages: {
  readonly UM_AchievementEvent: 101;
  readonly UM_CloseCaption: 102;
  readonly UM_CloseCaptionDirect: 103;
  readonly UM_CurrentTimescale: 104;
  readonly UM_DesiredTimescale: 105;
  readonly UM_Fade: 106;
  readonly UM_GameTitle: 107;
  readonly UM_HudMsg: 110;
  readonly UM_HudText: 111;
  readonly UM_ColoredText: 113;
  readonly UM_RequestState: 114;
  readonly UM_ResetHUD: 115;
  readonly UM_Rumble: 116;
  readonly UM_SayText: 117;
  readonly UM_SayText2: 118;
  readonly UM_SayTextChannel: 119;
  readonly UM_Shake: 120;
  readonly UM_ShakeDir: 121;
  readonly UM_WaterShake: 122;
  readonly UM_TextMsg: 124;
  readonly UM_ScreenTilt: 125;
  readonly UM_VoiceMask: 128;
  readonly UM_SendAudio: 130;
  readonly UM_ItemPickup: 131;
  readonly UM_AmmoDenied: 132;
  readonly UM_ShowMenu: 134;
  readonly UM_CreditsMsg: 135;
  readonly UM_CloseCaptionPlaceholder: 142;
  readonly UM_CameraTransition: 143;
  readonly UM_AudioParameter: 144;
  readonly UM_ParticleManager: 145;
  readonly UM_HudError: 146;
  readonly UM_CustomGameEvent: 148;
  readonly UM_AnimGraphUpdate: 149;
  readonly UM_HapticsManagerPulse: 150;
  readonly UM_HapticsManagerEffect: 151;
  readonly UM_UpdateCssClasses: 153;
  readonly UM_ServerFrameTime: 154;
  readonly UM_LagCompensationError: 155;
  readonly UM_RequestDllStatus: 156;
  readonly UM_RequestUtilAction: 157;
  readonly UM_UtilActionResponse: 158;
  readonly UM_DllStatusResponse: 159;
  readonly UM_RequestInventory: 160;
  readonly UM_InventoryResponse: 161;
  readonly UM_RequestDiagnostic: 162;
  readonly UM_DiagnosticResponse: 163;
  readonly UM_ExtraUserData: 164;
  readonly UM_NotifyResponseFound: 165;
  readonly UM_PlayResponseConditional: 166;
  readonly UM_MAX_BASE: 200;
  readonly UNRECOGNIZED: -1;
};
type EBaseUserMessages = typeof EBaseUserMessages[keyof typeof EBaseUserMessages];
declare namespace EBaseUserMessages {
  type UM_AchievementEvent = typeof EBaseUserMessages.UM_AchievementEvent;
  type UM_CloseCaption = typeof EBaseUserMessages.UM_CloseCaption;
  type UM_CloseCaptionDirect = typeof EBaseUserMessages.UM_CloseCaptionDirect;
  type UM_CurrentTimescale = typeof EBaseUserMessages.UM_CurrentTimescale;
  type UM_DesiredTimescale = typeof EBaseUserMessages.UM_DesiredTimescale;
  type UM_Fade = typeof EBaseUserMessages.UM_Fade;
  type UM_GameTitle = typeof EBaseUserMessages.UM_GameTitle;
  type UM_HudMsg = typeof EBaseUserMessages.UM_HudMsg;
  type UM_HudText = typeof EBaseUserMessages.UM_HudText;
  type UM_ColoredText = typeof EBaseUserMessages.UM_ColoredText;
  type UM_RequestState = typeof EBaseUserMessages.UM_RequestState;
  type UM_ResetHUD = typeof EBaseUserMessages.UM_ResetHUD;
  type UM_Rumble = typeof EBaseUserMessages.UM_Rumble;
  type UM_SayText = typeof EBaseUserMessages.UM_SayText;
  type UM_SayText2 = typeof EBaseUserMessages.UM_SayText2;
  type UM_SayTextChannel = typeof EBaseUserMessages.UM_SayTextChannel;
  type UM_Shake = typeof EBaseUserMessages.UM_Shake;
  type UM_ShakeDir = typeof EBaseUserMessages.UM_ShakeDir;
  type UM_WaterShake = typeof EBaseUserMessages.UM_WaterShake;
  type UM_TextMsg = typeof EBaseUserMessages.UM_TextMsg;
  type UM_ScreenTilt = typeof EBaseUserMessages.UM_ScreenTilt;
  type UM_VoiceMask = typeof EBaseUserMessages.UM_VoiceMask;
  type UM_SendAudio = typeof EBaseUserMessages.UM_SendAudio;
  type UM_ItemPickup = typeof EBaseUserMessages.UM_ItemPickup;
  type UM_AmmoDenied = typeof EBaseUserMessages.UM_AmmoDenied;
  type UM_ShowMenu = typeof EBaseUserMessages.UM_ShowMenu;
  type UM_CreditsMsg = typeof EBaseUserMessages.UM_CreditsMsg;
  type UM_CloseCaptionPlaceholder = typeof EBaseUserMessages.UM_CloseCaptionPlaceholder;
  type UM_CameraTransition = typeof EBaseUserMessages.UM_CameraTransition;
  type UM_AudioParameter = typeof EBaseUserMessages.UM_AudioParameter;
  type UM_ParticleManager = typeof EBaseUserMessages.UM_ParticleManager;
  type UM_HudError = typeof EBaseUserMessages.UM_HudError;
  type UM_CustomGameEvent = typeof EBaseUserMessages.UM_CustomGameEvent;
  type UM_AnimGraphUpdate = typeof EBaseUserMessages.UM_AnimGraphUpdate;
  type UM_HapticsManagerPulse = typeof EBaseUserMessages.UM_HapticsManagerPulse;
  type UM_HapticsManagerEffect = typeof EBaseUserMessages.UM_HapticsManagerEffect;
  type UM_UpdateCssClasses = typeof EBaseUserMessages.UM_UpdateCssClasses;
  type UM_ServerFrameTime = typeof EBaseUserMessages.UM_ServerFrameTime;
  type UM_LagCompensationError = typeof EBaseUserMessages.UM_LagCompensationError;
  type UM_RequestDllStatus = typeof EBaseUserMessages.UM_RequestDllStatus;
  type UM_RequestUtilAction = typeof EBaseUserMessages.UM_RequestUtilAction;
  type UM_UtilActionResponse = typeof EBaseUserMessages.UM_UtilActionResponse;
  type UM_DllStatusResponse = typeof EBaseUserMessages.UM_DllStatusResponse;
  type UM_RequestInventory = typeof EBaseUserMessages.UM_RequestInventory;
  type UM_InventoryResponse = typeof EBaseUserMessages.UM_InventoryResponse;
  type UM_RequestDiagnostic = typeof EBaseUserMessages.UM_RequestDiagnostic;
  type UM_DiagnosticResponse = typeof EBaseUserMessages.UM_DiagnosticResponse;
  type UM_ExtraUserData = typeof EBaseUserMessages.UM_ExtraUserData;
  type UM_NotifyResponseFound = typeof EBaseUserMessages.UM_NotifyResponseFound;
  type UM_PlayResponseConditional = typeof EBaseUserMessages.UM_PlayResponseConditional;
  type UM_MAX_BASE = typeof EBaseUserMessages.UM_MAX_BASE;
  type UNRECOGNIZED = typeof EBaseUserMessages.UNRECOGNIZED;
}
interface CUserMessageSayText2 {
  entityindex?: number | undefined;
  chat?: boolean | undefined;
  messagename?: string | undefined;
  param1?: string | undefined;
  param2?: string | undefined;
  param3?: string | undefined;
  param4?: string | undefined;
}
declare const CUserMessageSayText2: MessageFns<CUserMessageSayText2>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
//#endregion
//#region src/parser/descriptors/svc.d.ts
declare const optionalSvcMessages: {
  readonly 47: MessageFns$5<CSVCMsg_VoiceData>;
  readonly 350: MessageFns$1<CCSUsrMsg_ServerRankRevealAll>;
  readonly 352: MessageFns$1<CCSUsrMsg_ServerRankUpdate>;
  readonly 118: MessageFns<CUserMessageSayText2>;
  readonly 76: MessageFns$5<CSVCMsg_UserCommands>;
  readonly 72: MessageFns$5<CSVCMsg_UserMessage>;
};
//#endregion
//#region src/parser/stringtables.d.ts
declare const parseStringTable: (data: Buffer, name: string, numEntries: number, udf: boolean, userDataSize: number, flags: number, varintBitCount: boolean, baselines: Uint8Array[]) => {
  table: {
    data: {
      idx: number;
      key: string;
      value: any;
    }[];
    name: string;
    user_data_size: number;
    user_data_fixed_size: boolean;
    flags: number;
    using_varint_bitcounts: boolean;
  };
  players: CMsgPlayerInfo[];
};
type StringTableObject = ReturnType<typeof parseStringTable>;
declare const createStringTable: (createTableMessage: CSVCMsg_CreateStringTable | undefined, baselines: Uint8Array[]) => {
  table: {
    data: {
      idx: number;
      key: string;
      value: any;
    }[];
    name: string;
    user_data_size: number;
    user_data_fixed_size: boolean;
    flags: number;
    using_varint_bitcounts: boolean;
  };
  players: CMsgPlayerInfo[];
} | undefined;
declare const updateStringTable: (updateTableMessage: CSVCMsg_UpdateStringTable, savedTables: (StringTableObject["table"] | null)[], baselines: Uint8Array[]) => {
  tableId: number;
  players: CMsgPlayerInfo[];
  table: {
    data: {
      idx: number;
      key: string;
      value: any;
    }[];
    name: string;
    user_data_size: number;
    user_data_fixed_size: boolean;
    flags: number;
    using_varint_bitcounts: boolean;
  };
} | null;
//#endregion
//#region src/parser/entities/brandedEnum.d.ts
declare const __brand: unique symbol;
type Brand<B> = {
  [__brand]: B;
};
type Branded<T, B> = T & Brand<B>;
declare const generateEnum: <BrandName extends string, const T extends Record<string, any>>(map: T, _: BrandName) => { [K in keyof T]: Branded<T[K], BrandName> };
type GetEnumType<T extends ReturnType<typeof generateEnum>> = T[keyof T];
//#endregion
//#region src/parser/entities/constructorFields.d.ts
declare const D_QUANTALIZED_FLOAT = 0;
type QuantalizedFloatDecoder = {
  type: typeof D_QUANTALIZED_FLOAT;
  decoder: number;
};
type Decoder = number | QuantalizedFloatDecoder;
//#endregion
//#region src/parser/entities/entityParser.d.ts
declare const EntityTypeEnum: {
  readonly PlayerController: Branded<0, "entityType">;
  readonly Rules: Branded<1, "entityType">;
  readonly Projectile: Branded<2, "entityType">;
  readonly Team: Branded<3, "entityType">;
  readonly Normal: Branded<4, "entityType">;
  readonly C4: Branded<5, "entityType">;
};
type EntityTypeEnum = GetEnumType<typeof EntityTypeEnum>;
//#endregion
//#region src/parser/entities/types.d.ts
/** Why a parse session terminated. Set on the `end` event. */
type EndReason = 'stop' | 'timeout' | 'cancelled' | 'error';
declare const EntityMode: {
  readonly NONE: 0;
  readonly ALL: 1;
  readonly ONLY_GAME_RULES: 2;
};
type EntityMode = (typeof EntityMode)[keyof typeof EntityMode];
type _OptionalMessagesMap<T extends Record<string, number>, E extends Record<number, MessageFns$5<any>>> = { [K in keyof T]: T[K] extends keyof E ? ReturnType<E[T[K]]['decode']> : never };
type OptionalMessagesMap<T extends Record<string, number>, E extends Record<number, any>, D extends Record<string, any> = _OptionalMessagesMap<T, E>> = { [K in { [Z in keyof D]: D[Z] extends never ? never : Z }[keyof D]]: D[K] };
type OptionalMessagesId = typeof SVC_Messages & typeof ECstrike15UserMessages & typeof EBaseUserMessages;
type OptionalSVCMessages = OptionalMessagesMap<OptionalMessagesId, typeof optionalSvcMessages>;
interface OnDemandEvents extends OptionalSVCMessages {}
interface OutputEvents extends OnDemandEvents {
  progress: number;
  end: {
    incomplete: boolean;
    error?: any;
    reason?: EndReason;
  };
  error: {
    error: Error;
  };
  tickstart: number;
  tickend: number;
  header: CDemoFileHeader;
  broadcastsync: BroadcastSyncDto;
  gameeventlist: CMsgSource1LegacyGameEventList;
  gameevent: CMsgSource1LegacyGameEvent;
  clearallstringtables: never;
  createstringtable: null | NonNullable<ReturnType<typeof createStringTable>>;
  updatestringtable: NonNullable<ReturnType<typeof updateStringTable>>;
  serverinfo: CSVCMsg_ServerInfo;
  cancel: never;
  debug: string;
  entitycreated: [entityId: number, classId: number, entityType: EntityTypeEnum, className: string];
  entityupdated: {
    entityId: number;
    value: any;
    propId: number;
  };
  entitydeleted: number;
}
type EmitQueue = (data: EventQueue, index: number, available: false) => void;
type EventQueueElement = { [E in keyof OutputEvents]: [E, OutputEvents[E]] }[keyof OutputEvents];
type EventQueue = EventQueueElement[];
//#endregion
//#region src/parser/descriptors/gameEventEmitter.d.ts
declare class GameEvents extends EventEmitter<GameEventsArguments> {
  _eventDescriptors: Record<number, CMsgSource1LegacyGameEventList_descriptor_t>;
  private _demoReader;
  private eventQueue;
  private _entityMode;
  private _lastRoundStartCount;
  private _lastRoundEndCount;
  set entityMode(value: EntityMode);
  listen: (demoReader: DemoReader) => void;
  private _checkSyntheticRoundEvents;
}
//#endregion
//#region src/parser/entities/parseSession.d.ts
type ParseSettings = { [K in keyof OnDemandEvents]?: boolean };
declare class ParseSession {
  private static readonly PACKET_TEMP_BUFFER;
  private static readonly entityAllocator;
  private static readonly READ_BUFFER_SIZE;
  private _frameBuf;
  private _frameOffset;
  private _frameLimit;
  private _frameMarked;
  private chunks;
  private fd;
  private readBuffer;
  private fileOffset;
  private fileSize;
  private entityParser;
  private sendTables;
  private readonly baselines;
  private currentTick;
  private readonly eventQueue;
  private readonly cachedBitBuffer;
  private readonly binaryR;
  private readonly binaryR2;
  private readonly entityMode;
  private readonly parser;
  private readonly emitMainQueue;
  private readonly settings;
  private readonly enqueueEvent;
  private _stringTables;
  private _broadcastMode;
  constructor(buffer: Buffer | Uint8Array, entityMode: EntityMode, emitMainQueue: EmitQueue, parser?: DemoReader, settings?: ParseSettings);
  /** Create a session that reads from a file in fixed-size chunks instead of loading the entire file into memory. */
  static fromFile(filePath: string, entityMode: EntityMode, emitMainQueue: EmitQueue, parser?: DemoReader, opts?: ParseSettings): ParseSession;
  /**
   * Create a session for HTTP broadcast parsing. The session has no source
   * buffer and no file descriptor; commands are fed via
   * {@link ParseSession.pushBroadcastFragment}.
   */
  static forBroadcast(entityMode: EntityMode, emitMainQueue: EmitQueue, parser: DemoReader, settings?: ParseSettings): ParseSession;
  private _frameRemaining;
  private _frameReadVarint32;
  private _frameSkip;
  /** Run synchronous parse to completion. */
  runSync(): void;
  /** Run non-blocking parse to completion, yielding to the event loop periodically. */
  runAsync(): Promise<void>;
  private runFrameLoop;
  private getProgress;
  private closeFd;
  /** Push a stream chunk for incremental parsing. */
  pushChunk(chunk: Buffer): void;
  /**
   * Process all available frames from buffered data.
   * Returns false if DEM_Stop was reached (parsing complete), true if waiting for more data.
   */
  processFrames(): boolean;
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
  pushBroadcastFragment(buf: Uint8Array, tickOffset: number): {
    ended: boolean;
  };
  private _resetFrameState;
  /** Flush remaining events to the consumer. */
  flush(): void;
  private tryEnsureRemaining;
  /** Compact unread bytes to the start of readBuffer and read more from the file. */
  private refillFromFile;
  private ensureRemaining;
  private decompressIfNeeded;
  private baseParse;
  private readFrame;
  private handleFrame;
  private handleOptionalCommands;
  private parsePacket;
  private dumpState;
}
//#endregion
//#region src/broadcast/fetcher.d.ts
/**
 * Result of a fragment fetch. `ok: false` is returned for status codes the
 * reader treats as a "retry signal" — currently 404 (fragment not yet ready)
 * and 405 (the reference relay's "please check back soon" response).
 */
type FetchResult = {
  ok: true;
  data: Uint8Array;
} | {
  ok: false;
  status: number;
};
/**
 * Injection seam for the HTTP layer. Tests use a custom implementation;
 * production uses {@link createDefaultFetcher}.
 */
interface BroadcastFetcher {
  /** Fetch a JSON document (e.g. `/sync`). Throws BroadcastFetchError on any non-2xx. */
  json<T>(path: string, signal?: AbortSignal): Promise<T>;
  /** Fetch a binary fragment. Returns `{ ok: false, status }` for 404/405; throws BroadcastFetchError otherwise. */
  bytes(path: string, signal?: AbortSignal): Promise<FetchResult>;
}
/**
 * Default fetcher backed by `globalThis.fetch`. Node 22+ ships undici, which
 * auto-handles `Content-Encoding: gzip` and `deflate`, so no `Accept-Encoding`
 * header is required.
 *
 * @param baseUrl  Base URL for the broadcast. Trailing slash is added if absent.
 * @param init     Optional `RequestInit` merged into every request — useful
 *                 for `Authorization` or other custom headers.
 */
declare function createDefaultFetcher(baseUrl: string, init?: RequestInit): BroadcastFetcher;
//#endregion
//#region src/broadcast/httpReader.d.ts
interface FragmentErrorContext {
  fragment: number;
  tickOffset: number;
  phase: 'signup' | 'full' | 'delta';
}
interface HttpBroadcastOptions extends ParseSettings {
  /** Entity parsing mode (default: EntityMode.NONE). */
  entities?: EntityMode;
  /** Custom fetcher; defaults to one built around `globalThis.fetch`. */
  fetcher?: BroadcastFetcher;
  /** Milliseconds to wait between retries on `/full` and `/delta` 404/405. Default 1000. */
  deltaRetryInterval?: number;
  /**
   * Minimum milliseconds between the *starts* of successive `/delta` requests.
   * Measured cycle-to-cycle, so fetch/parse latency is absorbed into the
   * interval instead of added on top. Default 1000.
   */
  deltaThrottle?: number;
  /** Max consecutive 404/405 retries on `/delta` before terminating with reason `'timeout'`. Default 10. */
  maxDeltaRetries?: number;
  /** Max consecutive 404/405 retries on `/full` before terminating with reason `'error'`. Default 5. */
  maxFullRetries?: number;
  /** External cancellation signal. */
  signal?: AbortSignal;
  /**
   * Called when a fragment payload fails to parse. Default behavior is `'abort'`
   * — return `'continue'` to skip the offending fragment and fetch the next.
   */
  onFragmentError?: (err: Error, ctx: FragmentErrorContext) => 'abort' | 'continue';
  /**
   * Pre-loaded `CMsgSource1LegacyGameEventList` for resolving game event names.
   * Broadcasts only deliver this descriptor list once at game start; clients
   * connecting mid-stream miss it and would emit `gameevent` payloads without
   * `event_name`. Pass either the decoded message (e.g. captured from a prior
   * `gameeventlist` event) or its protobuf-encoded bytes (produced by
   * `scripts/dump-event-descriptors.ts`).
   *
   * If omitted, the reader falls back to a descriptor file bundled with the
   * package. Pass `false` to disable both — useful if the broadcast you're
   * connecting to actually delivers its own descriptor list and you'd rather
   * trust that one.
   */
  gameEventDescriptors?: CMsgSource1LegacyGameEventList | Uint8Array | false;
}
interface BroadcastTerminus {
  reason: EndReason;
  error?: unknown;
}
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
declare class HttpBroadcastReader {
  private readonly parser;
  private readonly fetcher;
  private readonly opts;
  private readonly abortController;
  private session;
  private _sync;
  private _fragment;
  private _tailTick;
  private _started;
  private _running;
  private _terminus;
  private _prefix;
  private _lastDeltaStartedAt;
  private readonly _onTickStart;
  private readonly _onParserCancel;
  private readonly _onSignalAbort;
  constructor(parser: DemoReader, baseUrl: string, opts?: HttpBroadcastOptions);
  /** Latest `/sync` response (set after `start()` resolves). */
  get sync(): BroadcastSyncDto | null;
  /** Most recently requested fragment number, or `-1` if `start()` has not yet resolved. */
  get fragment(): number;
  /** Most recent tick observed in any processed fragment. */
  get tailTick(): number;
  /**
   * Fetch `/sync`, the signup fragment, and the first `/full` fragment.
   * Resolves once the parser has consumed all three. Throws on protocol
   * mismatch, sync fetch failure, or signup/full failure. If cancelled
   * mid-flight, resolves with `terminus.reason === 'cancelled'`.
   */
  start(): Promise<void>;
  /** @returns true if cancelled (and sets terminus accordingly). */
  private _aborted;
  /**
   * Loop: GET `{N}/delta` for `N` starting at `sync.fragment + 1`, processing
   * each, until end-of-stream marker, retry exhaustion, cancellation, or a
   * fragment parse error. Resolves with the terminal reason.
   */
  run(): Promise<BroadcastTerminus>;
  /** Abort the fetch loop and pending HTTP requests. Idempotent. */
  stop(): void;
  private _fetchWithRetry;
  /** @returns true if the fragment ended the broadcast (terminal reached). */
  private _processFragment;
  private _terminate;
  private _parserEnded;
  private _unhookListeners;
  private _sleep;
  private _isAbortError;
}
//#endregion
//#region src/parser/index.d.ts
declare class DemoReader extends EventEmitter<{ [K in keyof OutputEvents]: OutputEvents[K] extends never ? [] : [OutputEvents[K]] }> {
  _parseStartTime: bigint;
  header: CDemoFileHeader | null;
  private _hasEnded;
  private _stream;
  entities: AnyEntity[];
  private _directWriteMode;
  private tickInterval;
  currentTick: number;
  private _playerInfoMap;
  private _playerCache;
  private _teamCache;
  private _pawnCache;
  private _gameRulesCache;
  private _accountIdToEntityId;
  gameEvents: GameEvents;
  get currentTime(): number;
  /** All players from the userinfo string table. Available even with EntityMode.NONE. */
  get players(): (CMsgPlayerInfo | undefined)[];
  /** True once a terminal `'end'` event has been observed (parse finished, errored, or cancelled). */
  get hasEnded(): boolean;
  private _getOrCreate;
  /** Get a Player helper by controller entity ID. Requires EntityMode.ALL. */
  getPlayer(entityId: number): Player | null;
  getPawn(entityId: number): PlayerPawn | null;
  /** All player controller entities as Player helpers. Requires EntityMode.ALL. */
  get playerControllers(): Player[];
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
  getPlayerByInfo(info: CMsgPlayerInfo | null | undefined): Player | null;
  /**
   * Get a Player helper by Steam account ID — the lower 32 bits of the SteamID64,
   * i.e. the trailing number in SteamID3 form (e.g. `918429678` from `[U:1:918429678]`).
   * Requires EntityMode.ALL. O(1) on cached entries, with a linear-scan fallback for
   * controllers whose `m_steamID` was set after entity creation.
   */
  getByAccountId(accountId: number): Player | null;
  /** All team entities as Team helper objects */
  get teams(): Team[];
  private _gameRulesEntityId;
  /** Game rules helper (or null if not yet created) */
  get gameRules(): GameRules | null;
  /** Get a typed entity by index and class name. Returns typed properties or undefined. */
  getEntity<T extends KnownClassName>(entityId: number, className: T): EntityProperties<T> | undefined;
  /** Find all entities of a specific class, with typed properties */
  findEntities<T extends KnownClassName>(className: T): {
    entityId: number;
    properties: EntityProperties<T>;
  }[];
  /** Re-exported type guard for narrowing entities */
  static isEntityClass: typeof isEntityClass;
  constructor();
  static parseServerInfo: (filePath: string) => CSVCMsg_ServerInfo | null;
  static parseHeader: (filePath: string) => CDemoFileHeader | null;
  propIdToName: Record<number, string>;
  propIdToDecoder: Record<number, Decoder>;
  private _emitQueue;
  /** Non-blocking parse from a pre-loaded Buffer. */
  private _parseBuffer;
  /** Non-blocking parse from a file path using chunked reads (low memory). */
  private _parseFile;
  /** Core streaming parse from a Readable. */
  private _parseStream;
  /**
   * Parse a CS2 demo file.
   *
   * Accepts a file path, a Buffer, or a Readable stream.
   * File paths stream by default (non-blocking, low memory). Pass `stream: false` to load into memory instead.
   *
   * @param opts.entities - Entity parsing mode:
   *   - `EntityMode.NONE` (default) — skip entity parsing entirely (fastest)
   *   - `EntityMode.ALL` — parse and track all entities
   *   - `EntityMode.ONLY_GAME_RULES` — parse entities but only store game rules (enables synthetic round_start/round_end events)
   *
   * @example
   * // File path (streams by default — non-blocking, low memory)
   * await parser.parseDemo('demo.dem', { entities: EntityMode.ALL });
   *
   * // File path with chunked reads (non-blocking, low memory)
   * await parser.parseDemo('demo.dem', { entities: EntityMode.ALL, stream: false });
   *
   * // Readable stream
   * await parser.parseDemo(createReadStream('demo.dem'), { entities: EntityMode.ALL });
   *
   * // Pre-loaded buffer (non-blocking)
   * await parser.parseDemo(buffer, { entities: EntityMode.ALL });
   */
  parseDemo(source: Readable, opts?: {
    entities?: EntityMode;
  } & ParseSettings): Promise<void>;
  parseDemo(source: string, opts: {
    entities?: EntityMode;
    stream: false;
  } & ParseSettings): Promise<void>;
  parseDemo(source: string, opts?: {
    entities?: EntityMode;
    stream?: true;
  } & ParseSettings): Promise<void>;
  parseDemo(source: Buffer, opts?: {
    entities?: EntityMode;
  } & ParseSettings): Promise<void>;
  cancel(): void;
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
  parseHttpBroadcast(baseUrl: string, opts?: HttpBroadcastOptions): Promise<void>;
  /**
   * @internal Used by HttpBroadcastReader to wire a broadcast-mode ParseSession
   * to the parser's emit queue and direct-write entity tracking. Throws if a
   * previous parse already ended on this DemoReader.
   */
  _attachBroadcastSession(opts?: {
    entities?: EntityMode;
  } & ParseSettings): ParseSession;
}
//#endregion
//#region src/broadcast/errors.d.ts
/** Thrown when a broadcast response violates the spec (bad sync, malformed fragment, unsupported protocol). */
declare class BroadcastProtocolError extends Error {
  constructor(message: string);
}
/** Thrown when an HTTP request to the broadcast relay fails with a non-retryable status. */
declare class BroadcastFetchError extends Error {
  readonly status: number;
  readonly path: string;
  constructor(message: string, status: number, path: string);
}
//#endregion
export { type AnyEntity, type BaseEntity, BroadcastFetchError, type BroadcastFetcher, BroadcastProtocolError, type BroadcastSyncDto, type BroadcastTerminus, DemoReader, type EndReason, EntityHelper, EntityMode, type EntityProperties, type EntityTypeMap, type FetchResult, type FragmentErrorContext, GameRules, type HttpBroadcastOptions, HttpBroadcastReader, type KnownClassName, Player, PlayerPawn, Team, TeamNumber, type TypedEntity, type Vector, WinRoundReason, createDefaultFetcher, isEntityClass };