export interface IMixCountPostBody {
	mixId: string;
	mixTitle: string;
}

export interface IMixCountSuccessResponse {
	attempts?: number;
	added?: boolean;
	mixCount?: number;
}
