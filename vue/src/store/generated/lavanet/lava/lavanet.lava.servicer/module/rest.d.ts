export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface ServicerBlockDeadlineForCallback {
    deadline?: ServicerBlockNum;
}
export interface ServicerBlockNum {
    /** @format uint64 */
    num?: string;
}
export interface ServicerClientRequest {
    data?: string;
}
export declare type ServicerMsgProofOfWorkResponse = object;
export declare type ServicerMsgStakeServicerResponse = object;
export declare type ServicerMsgUnstakeServicerResponse = object;
/**
 * Params defines the parameters for the module.
 */
export interface ServicerParams {
    /** @format uint64 */
    minStake?: string;
    /** @format uint64 */
    coinsPerCU?: string;
    /** @format uint64 */
    unstakeHoldBlocks?: string;
    /** @format uint64 */
    fraudStakeSlashingFactor?: string;
    /** @format uint64 */
    fraudSlashingAmount?: string;
}
export interface ServicerQueryAllSpecStakeStorageResponse {
    specStakeStorage?: ServicerSpecStakeStorage[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ServicerQueryAllStakeMapResponse {
    stakeMap?: ServicerStakeMap[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ServicerQueryAllUnstakingServicersAllSpecsResponse {
    UnstakingServicersAllSpecs?: ServicerUnstakingServicersAllSpecs[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ServicerQueryGetBlockDeadlineForCallbackResponse {
    BlockDeadlineForCallback?: ServicerBlockDeadlineForCallback;
}
export interface ServicerQueryGetSpecStakeStorageResponse {
    specStakeStorage?: ServicerSpecStakeStorage;
}
export interface ServicerQueryGetStakeMapResponse {
    stakeMap?: ServicerStakeMap;
}
export interface ServicerQueryGetUnstakingServicersAllSpecsResponse {
    UnstakingServicersAllSpecs?: ServicerUnstakingServicersAllSpecs;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface ServicerQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: ServicerParams;
}
export interface ServicerQueryStakedServicersResponse {
    stakeStorage?: ServicerStakeStorage;
    output?: string;
}
export interface ServicerSessionID {
    /** @format uint64 */
    num?: string;
}
export interface ServicerSpecName {
    name?: string;
}
export interface ServicerSpecStakeStorage {
    index?: string;
    stakeStorage?: ServicerStakeStorage;
}
export interface ServicerStakeMap {
    index?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    stake?: V1Beta1Coin;
    deadline?: ServicerBlockNum;
}
export interface ServicerStakeStorage {
    staked?: ServicerStakeMap[];
    unstaking?: ServicerStakeMap[];
}
export interface ServicerUnstakingServicersAllSpecs {
    /** @format uint64 */
    id?: string;
    unstaking?: ServicerStakeMap;
    specStakeStorage?: ServicerSpecStakeStorage;
}
export interface ServicerWorkProof {
    data?: string;
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title servicer/block_deadline_for_callback.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBlockDeadlineForCallback
     * @summary Queries a BlockDeadlineForCallback by index.
     * @request GET:/lavanet/lava/servicer/block_deadline_for_callback
     */
    queryBlockDeadlineForCallback: (params?: RequestParams) => Promise<HttpResponse<ServicerQueryGetBlockDeadlineForCallbackResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/lavanet/lava/servicer/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<ServicerQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySpecStakeStorageAll
     * @summary Queries a list of SpecStakeStorage items.
     * @request GET:/lavanet/lava/servicer/spec_stake_storage
     */
    querySpecStakeStorageAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ServicerQueryAllSpecStakeStorageResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySpecStakeStorage
     * @summary Queries a SpecStakeStorage by index.
     * @request GET:/lavanet/lava/servicer/spec_stake_storage/{index}
     */
    querySpecStakeStorage: (index: string, params?: RequestParams) => Promise<HttpResponse<ServicerQueryGetSpecStakeStorageResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStakeMapAll
     * @summary Queries a list of StakeMap items.
     * @request GET:/lavanet/lava/servicer/stake_map
     */
    queryStakeMapAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ServicerQueryAllStakeMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStakeMap
     * @summary Queries a StakeMap by index.
     * @request GET:/lavanet/lava/servicer/stake_map/{index}
     */
    queryStakeMap: (index: string, params?: RequestParams) => Promise<HttpResponse<ServicerQueryGetStakeMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStakedServicers
     * @summary Queries a list of StakedServicers items.
     * @request GET:/lavanet/lava/servicer/staked_servicers/{specName}
     */
    queryStakedServicers: (specName: string, params?: RequestParams) => Promise<HttpResponse<ServicerQueryStakedServicersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUnstakingServicersAllSpecsAll
     * @summary Queries a list of UnstakingServicersAllSpecs items.
     * @request GET:/lavanet/lava/servicer/unstaking_servicers_all_specs
     */
    queryUnstakingServicersAllSpecsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ServicerQueryAllUnstakingServicersAllSpecsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUnstakingServicersAllSpecs
     * @summary Queries a UnstakingServicersAllSpecs by id.
     * @request GET:/lavanet/lava/servicer/unstaking_servicers_all_specs/{id}
     */
    queryUnstakingServicersAllSpecs: (id: string, params?: RequestParams) => Promise<HttpResponse<ServicerQueryGetUnstakingServicersAllSpecsResponse, RpcStatus>>;
}
export {};
