export interface ITeam {
  Count: number;
  Items: ITeamData[];
  ScannedCount: number;
}

export type ITeamData = {
  tournamentID: string;
  teamName: string;
  logo: string;
  ID: string;
  results: TeamResults[];
}

export type TeamResults = {
  ID: string;
  against: number;
  draw: number;
  lost: number;
  for: number;
  goaldiff: number;
  played: number;
  teamId: string;
  won: number;
  points: number;
}

export interface ITeamProvider {
  teams: ITeam;
  loadedData: boolean;
  error: boolean;
}
