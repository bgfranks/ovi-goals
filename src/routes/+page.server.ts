import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	// fetchs ovi's stats from the nhl api
	const res = await fetch(
		'https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=yearByYear'
	);
	// sets the data to the json response
	const data = await res.json();
	let goals: number[] = [];

	// steps to get the goals by season
	// 1. get the splits array
	// 2. get the stat object
	// 4. get the goals key
	// 5. get the value of the goals key
	// will need to filter for only seaons played as Washington Capitals

	// array of splits objects
	const splits = data.stats[0].splits;
	// graps the season play by on the Caps and spreads into an array
	const [...oviCapSeasons] = splits.filter((split: Split) => {
		split.team.name === 'Washington Capitals';
	});

	// maps over the filtered caps seaons and return an arrow of goals
	oviCapSeasons.map((seasonGoals: Split) => {
		return (goals = [...goals, seasonGoals.stat.goals]);
	});

	// adds up all goals in the goals array to get the total goals
	const totalGoals = goals.reduce((a, b) => a + b, 0);

	return {
		totalGoals: totalGoals
	};
}) satisfies PageServerLoad;

// types
type Split = {
	season: string;
	stat: Stat;
	team: Team;
	league: League;
	squenceNumber: number;
};

type Stat = {
	timeOnIce: string;
	assists: number;
	goals: number;
	pim: number;
	games: number;
	powerPlayTimeOnIce: string;
	evenTimeOnIce: string;
	penaltyMinutes: string;
	faceOffPct: number;
	shortHandedTimeOnIce: string;
	points: number;
	shifts: number;
};

type Team = {
	id: number;
	name: string;
	link: string;
};

type League = {
	id: number;
	name: string;
	link: string;
};
