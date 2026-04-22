import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const year = new Date().getFullYear();
    const url = `https://statsapi.mlb.com/api/v1/standings?leagueId=104&season=${year}&standingsTypes=regularSeason`;

    const response = await fetch(url, {
      headers: { 'User-Agent': 'IntangiblesIndex/1.0' },
    });

    if (!response.ok) {
      throw new Error(`MLB API returned ${response.status}`);
    }

    const data = await response.json();

    let metsRecord: {
      wins?: number;
      losses?: number;
      streak?: { streakCode?: string };
      team?: { id?: number };
    } | null = null;
    for (const division of data.records || []) {
      for (const team of division.teamRecords || []) {
        if (team.team && team.team.id === 121) {
          metsRecord = team;
          break;
        }
      }
      if (metsRecord) break;
    }

    if (!metsRecord) {
      throw new Error('Mets not found in standings');
    }

    const wins = metsRecord.wins || 0;
    const losses = metsRecord.losses || 0;
    const games = wins + losses;
    const pace = games > 0 ? Math.round((wins / games) * 162) : null;
    const streak = metsRecord.streak?.streakCode || '-';

    return NextResponse.json(
      {
        wins,
        losses,
        streak,
        games,
        pace,
        asOf: new Date().toISOString().split('T')[0],
        source: 'MLB Stats API',
      },
      {
        headers: {
          'Cache-Control': 's-maxage=1800, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown error';
    return NextResponse.json({ error: message, source: 'fallback' }, { status: 200 });
  }
}
