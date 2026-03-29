export interface Screenshot {
  label: string;
  caption: string;
  html: string;
}

export const cdtScreenshots: Screenshot[] = [
  {
    label: 'Set Priorities',
    caption:
      'The weighting interface — every factor is explicit and adjustable, not hidden. Sliders from 0–10 let the family control exactly how much each criterion matters.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .tool-wrap { background: #0c0c14; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; max-width: 780px; margin: 0 auto; }
  .tool-header { background: linear-gradient(135deg, #0f1729 0%, #0f1a3a 100%); border-bottom: 1px solid #1e293b; padding: 20px 24px 16px; }
  .tool-eyebrow { font-size: 10px; letter-spacing: 4px; color: #475569; text-transform: uppercase; margin-bottom: 5px; }
  .tool-title { font-size: 24px; font-weight: 800; color: #f1f5f9; margin: 0 0 3px; letter-spacing: -0.5px; }
  .tool-sub { font-size: 12px; color: #64748b; margin: 0 0 14px; }
  .nav-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .nav-btn { padding: 6px 14px; border-radius: 6px; font-size: 12px; border: 1px solid #2d3748; background: transparent; color: #94a3b8; }
  .nav-btn.active { background: #3b82f6; border-color: #3b82f6; color: #fff; }
  .body { padding: 20px 24px; }
  .phase-title { font-size: 17px; font-weight: 600; color: #cbd5e1; margin: 0 0 3px; }
  .phase-sub { font-size: 12px; color: #64748b; margin: 0 0 16px; }
  .param-row { background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 11px 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 7px; }
  .param-row.high { border-color: #1e3a5f; }
  .param-check { width: 14px; height: 14px; border-radius: 3px; background: #3b82f6; border: none; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
  .param-check::after { content: '✓'; color: #fff; font-size: 9px; }
  .param-label { font-size: 13px; font-weight: 600; color: #e2e8f0; }
  .param-desc { font-size: 11px; color: #64748b; margin-top: 1px; }
  .param-info { flex: 1; }
  .slider-area { display: flex; align-items: center; gap: 10px; min-width: 180px; }
  .fake-slider { height: 4px; background: #1e293b; border-radius: 2px; flex: 1; position: relative; }
  .fake-thumb { height: 4px; border-radius: 2px; background: #3b82f6; }
  .param-val { font-size: 20px; font-weight: 800; min-width: 20px; text-align: right; }
  .val-high { color: #3b82f6; }
  .val-mid { color: #64748b; }
  .next-btn { margin-top: 16px; padding: 11px 28px; background: #3b82f6; border: none; border-radius: 8px; color: #fff; font-size: 13px; font-weight: 600; }
  .top-btns { display: flex; gap: 8px; float: right; }
  .top-btn-blue { padding: 7px 14px; background: #172554; border: 1px solid #1e3a5f; border-radius: 6px; color: #60a5fa; font-size: 11px; font-weight: 600; }
  .top-btn-gray { padding: 7px 14px; background: #111827; border: 1px solid #1f2937; border-radius: 6px; color: #64748b; font-size: 11px; font-weight: 600; }
  .label-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
</style>
<div class="tool-wrap">
  <div class="tool-header">
    <div class="tool-eyebrow">Class of 2030</div>
    <div class="tool-title">College Decision Tracker</div>
    <div class="tool-sub">12 of 12 schools active · 19 active parameters · All data pre-loaded from research.</div>
    <div class="nav-row">
      <div class="nav-btn active">1 · Set Priorities</div>
      <div class="nav-btn">2 · Review Scores</div>
      <div class="nav-btn">3 · Results</div>
      <div class="nav-btn">4 · Saved Results</div>
      <div class="nav-btn">5 · Schools</div>
    </div>
  </div>
  <div class="body">
    <div class="label-row">
      <div>
        <div class="phase-title">Set Evan's Priorities</div>
        <div class="phase-sub">Drag each slider to weight factors 0–10. Uncheck to exclude a parameter entirely.</div>
      </div>
      <div class="top-btns">
        <div class="top-btn-blue">Use Suggested</div>
        <div class="top-btn-gray">Reset All to 5</div>
      </div>
    </div>
    <div class="param-row high">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Sports Mgmt Program</div><div class="param-desc">Dedicated major vs. business fallback</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:90%"></div></div><div class="param-val val-high">9</div></div>
    </div>
    <div class="param-row high">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Net Cost After Aid & Merit</div><div class="param-desc">Annual cost after applying student's actual aid package</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:80%"></div></div><div class="param-val val-high">8</div></div>
    </div>
    <div class="param-row high">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">D3 Baseball / Football Opportunity</div><div class="param-desc">Realistic chance Evan makes the roster and plays</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:70%"></div></div><div class="param-val val-high">7</div></div>
    </div>
    <div class="param-row high">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Internship Market Access</div><div class="param-desc">Proximity to pro sports organizations</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:70%"></div></div><div class="param-val val-high">7</div></div>
    </div>
    <div class="param-row">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Jewish Community</div><div class="param-desc">Hillel presence, Jewish student population, kosher options</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:60%"></div></div><div class="param-val val-mid">6</div></div>
    </div>
    <div class="param-row">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Distance from Home</div><div class="param-desc">Realistic trip frequency from home city</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:60%"></div></div><div class="param-val val-mid">6</div></div>
    </div>
    <div class="param-row">
      <div class="param-check"></div>
      <div class="param-info"><div class="param-label">Sports as School Culture</div><div class="param-desc">How central athletics are to campus identity</div></div>
      <div class="slider-area"><div class="fake-slider"><div class="fake-thumb" style="width:50%"></div></div><div class="param-val val-mid">5</div></div>
    </div>
    <button class="next-btn">Next: Review School Scores →</button>
  </div>
</div>`,
  },
  {
    label: 'Results Ranking',
    caption:
      'The payoff view — live score bars, medal rankings, and a breakdown table showing exactly why each school scored the way it did. Green ≥8, Yellow 5–7, Red ≤4.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .tool-wrap { background: #0c0c14; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; max-width: 780px; margin: 0 auto; }
  .tool-header { background: linear-gradient(135deg, #0f1729 0%, #0f1a3a 100%); border-bottom: 1px solid #1e293b; padding: 20px 24px 16px; }
  .tool-eyebrow { font-size: 10px; letter-spacing: 4px; color: #475569; text-transform: uppercase; margin-bottom: 5px; }
  .tool-title { font-size: 24px; font-weight: 800; color: #f1f5f9; margin: 0 0 3px; letter-spacing: -0.5px; }
  .tool-sub { font-size: 12px; color: #64748b; margin: 0 0 14px; }
  .nav-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .nav-btn { padding: 6px 14px; border-radius: 6px; font-size: 12px; border: 1px solid #2d3748; background: transparent; color: #94a3b8; }
  .nav-btn.active { background: #3b82f6; border-color: #3b82f6; color: #fff; }
  .body { padding: 20px 24px; }
  .top-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
  .phase-title { font-size: 17px; font-weight: 600; color: #cbd5e1; margin: 0; }
  .save-btn { padding: 8px 16px; background: #14532d; border: 1px solid #166534; border-radius: 8px; color: #4ade80; font-size: 12px; font-weight: 600; }
  .phase-sub { font-size: 12px; color: #64748b; margin: 0 0 18px; }
  .rank-card { border-radius: 10px; padding: 13px 16px; display: flex; align-items: center; gap: 14px; margin-bottom: 7px; }
  .rank-card.gold { background: #0d1f12; border: 1px solid #166534; }
  .rank-card.silver { background: #0f1520; border: 1px solid #1e3a5f; }
  .rank-card.bronze { background: #0f1520; border: 1px solid #1e3a5f; }
  .rank-card.rest { background: #0f1117; border: 1px solid #1e293b; }
  .rank-num { font-size: 20px; font-weight: 800; min-width: 26px; }
  .rank-school { font-weight: 600; font-size: 13px; color: #e2e8f0; margin-bottom: 5px; }
  .bar-bg { background: #0a0a12; border-radius: 4px; height: 5px; }
  .bar-fill { height: 100%; border-radius: 4px; }
  .rank-info { flex: 1; }
  .rank-score { font-size: 22px; font-weight: 800; }
  .rank-pct { font-size: 10px; color: #475569; }
  .score-section { margin-top: 24px; }
  .score-title { font-size: 13px; color: #94a3b8; margin: 0 0 3px; font-weight: 600; }
  .score-legend { font-size: 11px; color: #4b5563; margin: 0 0 8px; }
  .score-table { width: 100%; border-collapse: collapse; font-size: 10px; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; }
  .score-table th { background: #111827; padding: 8px 5px; color: #4b5563; font-weight: 600; text-align: center; font-size: 10px; }
  .score-table th.label-col { text-align: left; padding-left: 10px; }
  .score-table td { padding: 6px 5px; text-align: center; border-bottom: 1px solid #0f172a; }
  .score-table td.label-col { padding-left: 10px; color: #64748b; text-align: left; white-space: nowrap; }
  .g { color: #4ade80; font-weight: 600; }
  .y { color: #fbbf24; font-weight: 600; }
  .r { color: #f87171; font-weight: 600; }
  .wt { color: #1e3a5f; }
</style>
<div class="tool-wrap">
  <div class="tool-header">
    <div class="tool-eyebrow">Class of 2030</div>
    <div class="tool-title">College Decision Tracker</div>
    <div class="tool-sub">12 of 12 schools active · 19 active parameters · All data pre-loaded from research.</div>
    <div class="nav-row">
      <div class="nav-btn">1 · Set Priorities</div>
      <div class="nav-btn">2 · Review Scores</div>
      <div class="nav-btn active">3 · Results</div>
      <div class="nav-btn">4 · Saved Results</div>
      <div class="nav-btn">5 · Schools</div>
    </div>
  </div>
  <div class="body">
    <div class="top-row">
      <div class="phase-title">Fit Score Ranking</div>
      <div class="save-btn">Save This Result</div>
    </div>
    <div class="phase-sub">Weighted score across 19 active parameters. Adjust priorities or scores at any time.</div>
    <div class="rank-card gold">
      <div class="rank-num" style="color:#4ade80">1</div>
      <div class="rank-info">
        <div class="rank-school">Ithaca College</div>
        <div class="bar-bg"><div class="bar-fill" style="width:79%;background:#4ade80"></div></div>
      </div>
      <div><span class="rank-score" style="color:#4ade80">79</span><span class="rank-pct">%</span></div>
    </div>
    <div class="rank-card silver">
      <div class="rank-num" style="color:#c0c0c0">2</div>
      <div class="rank-info">
        <div class="rank-school">SUNY Cortland</div>
        <div class="bar-bg"><div class="bar-fill" style="width:74%;background:#4ade80"></div></div>
      </div>
      <div><span class="rank-score" style="color:#4ade80">74</span><span class="rank-pct">%</span></div>
    </div>
    <div class="rank-card bronze">
      <div class="rank-num" style="color:#cd7f32">3</div>
      <div class="rank-info">
        <div class="rank-school">Univ. of Delaware</div>
        <div class="bar-bg"><div class="bar-fill" style="width:65%;background:#fbbf24"></div></div>
      </div>
      <div><span class="rank-score" style="color:#fbbf24">65</span><span class="rank-pct">%</span></div>
    </div>
    <div class="rank-card rest">
      <div class="rank-num" style="color:#374151;font-size:15px">4</div>
      <div class="rank-info">
        <div class="rank-school">Temple University</div>
        <div class="bar-bg"><div class="bar-fill" style="width:61%;background:#fbbf24"></div></div>
      </div>
      <div><span class="rank-score" style="color:#fbbf24;font-size:20px">61</span><span class="rank-pct">%</span></div>
    </div>
    <div class="rank-card rest">
      <div class="rank-num" style="color:#374151;font-size:15px">5</div>
      <div class="rank-info">
        <div class="rank-school">Scranton</div>
        <div class="bar-bg"><div class="bar-fill" style="width:57%;background:#fbbf24"></div></div>
      </div>
      <div><span class="rank-score" style="color:#fbbf24;font-size:20px">57</span><span class="rank-pct">%</span></div>
    </div>
    <div class="rank-card rest">
      <div class="rank-num" style="color:#374151;font-size:15px">6</div>
      <div class="rank-info">
        <div class="rank-school">Quinnipiac</div>
        <div class="bar-bg"><div class="bar-fill" style="width:52%;background:#f87171"></div></div>
      </div>
      <div><span class="rank-score" style="color:#f87171;font-size:20px">52</span><span class="rank-pct">%</span></div>
    </div>
    <div class="score-section">
      <div class="score-title">Score Breakdown</div>
      <div class="score-legend">Green ≥8 · Yellow 5–7 · Red ≤4</div>
      <table class="score-table">
        <thead>
          <tr>
            <th class="label-col">Parameter</th>
            <th>Ithaca</th><th>Cortland</th><th>Delaware</th><th>Temple</th><th>Scranton</th><th>Quinnipiac</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="label-col">Sports Mgmt Program <span class="wt">x9</span></td><td class="g">10</td><td class="g">10</td><td class="g">10</td><td class="g">10</td><td class="r">4</td><td class="g">10</td></tr>
          <tr><td class="label-col">D3 Opportunity <span class="wt">x7</span></td><td class="g">10</td><td class="g">10</td><td class="y">5</td><td class="r">1</td><td class="g">10</td><td class="r">2</td></tr>
          <tr><td class="label-col">Net Cost <span class="wt">x8</span></td><td class="y">6</td><td class="g">8</td><td class="y">6</td><td class="y">6</td><td class="y">6</td><td class="r">4</td></tr>
          <tr><td class="label-col">Jewish Community <span class="wt">x6</span></td><td class="g">10</td><td class="r">3</td><td class="g">10</td><td class="g">8</td><td class="r">4</td><td class="y">5</td></tr>
          <tr><td class="label-col">Internship Market <span class="wt">x7</span></td><td class="y">7</td><td class="y">7</td><td class="g">9</td><td class="g">10</td><td class="y">5</td><td class="g">9</td></tr>
          <tr><td class="label-col">Alumni Employment <span class="wt">x7</span></td><td class="g">10</td><td class="y">7</td><td class="y">5</td><td class="y">7</td><td class="r">3</td><td class="r">1</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
  },
  {
    label: 'Saved Results',
    caption:
      'Multi-session persistence — different runs saved under different names (Gabriel\'s run vs. Evan\'s run). Each saved result captures the full weight configuration and top-3 rankings.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .tool-wrap { background: #0c0c14; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; max-width: 780px; margin: 0 auto; }
  .tool-header { background: linear-gradient(135deg, #0f1729 0%, #0f1a3a 100%); border-bottom: 1px solid #1e293b; padding: 20px 24px 16px; }
  .tool-eyebrow { font-size: 10px; letter-spacing: 4px; color: #475569; text-transform: uppercase; margin-bottom: 5px; }
  .tool-title { font-size: 24px; font-weight: 800; color: #f1f5f9; margin: 0 0 3px; letter-spacing: -0.5px; }
  .tool-sub { font-size: 12px; color: #64748b; margin: 0 0 14px; }
  .nav-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .nav-btn { padding: 6px 14px; border-radius: 6px; font-size: 12px; border: 1px solid #2d3748; background: transparent; color: #94a3b8; }
  .nav-btn.active { background: #3b82f6; border-color: #3b82f6; color: #fff; }
  .nav-badge { margin-left: 5px; background: #1e3a5f; color: #60a5fa; border-radius: 10px; padding: 1px 5px; font-size: 10px; font-weight: 700; }
  .body { padding: 20px 24px; }
  .phase-title { font-size: 17px; font-weight: 600; color: #cbd5e1; margin: 0 0 3px; }
  .phase-sub { font-size: 12px; color: #64748b; margin: 0 0 18px; }
  .saved-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 16px 18px; margin-bottom: 10px; }
  .saved-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
  .saved-name { font-weight: 700; font-size: 14px; color: #f1f5f9; margin-bottom: 3px; }
  .saved-comment { font-size: 12px; color: #94a3b8; margin-bottom: 6px; line-height: 1.5; }
  .saved-time { font-size: 11px; color: #4b5563; }
  .saved-ranks { text-align: right; }
  .saved-rank { font-size: 12px; color: #94a3b8; margin-bottom: 2px; }
  .gold-txt { color: #4ade80; font-weight: 700; }
  .silver-txt { color: #c0c0c0; font-weight: 700; }
  .bronze-txt { color: #cd7f32; font-weight: 700; }
  .saved-btns { display: flex; gap: 8px; margin-top: 12px; }
  .view-btn { padding: 7px 16px; background: #172554; border: 1px solid #1e3a5f; border-radius: 6px; color: #60a5fa; font-size: 11px; font-weight: 600; }
  .del-btn { padding: 7px 12px; background: transparent; border: 1px solid #1e293b; border-radius: 6px; color: #64748b; font-size: 11px; }
</style>
<div class="tool-wrap">
  <div class="tool-header">
    <div class="tool-eyebrow">Class of 2030</div>
    <div class="tool-title">College Decision Tracker</div>
    <div class="tool-sub">12 of 12 schools active · 19 active parameters · All data pre-loaded from research.</div>
    <div class="nav-row">
      <div class="nav-btn">1 · Set Priorities</div>
      <div class="nav-btn">2 · Review Scores</div>
      <div class="nav-btn">3 · Results</div>
      <div class="nav-btn active">4 · Saved Results <span class="nav-badge">3</span></div>
      <div class="nav-btn">5 · Schools</div>
    </div>
  </div>
  <div class="body">
    <div class="phase-title">Saved Results</div>
    <div class="phase-sub">All results are shared across devices — anyone with this link can view them.</div>
    <div class="saved-card">
      <div class="saved-top">
        <div>
          <div class="saved-name">Parent — athletics priority</div>
          <div class="saved-comment">Bumped D3 Opportunity to 10, cost weight to 9. Want to see if Cortland closes the gap on Ithaca.</div>
          <div class="saved-time">Saved Mar 18, 2026, 09:14 AM</div>
        </div>
        <div class="saved-ranks">
          <div class="saved-rank">#1: <span class="gold-txt">Ithaca College</span> (81%)</div>
          <div class="saved-rank">#2: <span class="silver-txt">SUNY Cortland</span> (79%)</div>
          <div class="saved-rank">#3: <span class="bronze-txt">Univ. of Delaware</span> (61%)</div>
        </div>
      </div>
      <div class="saved-btns">
        <div class="view-btn">View Full Result</div>
        <div class="del-btn">Delete</div>
      </div>
    </div>
    <div class="saved-card">
      <div class="saved-top">
        <div>
          <div class="saved-name">Parent — cost is king</div>
          <div class="saved-comment">Cost weight maxed to 10. Testing how much Cortland's in-state price changes the picture.</div>
          <div class="saved-time">Saved Mar 15, 2026, 02:33 PM</div>
        </div>
        <div class="saved-ranks">
          <div class="saved-rank">#1: <span class="gold-txt">SUNY Cortland</span> (77%)</div>
          <div class="saved-rank">#2: <span class="silver-txt">Ithaca College</span> (74%)</div>
          <div class="saved-rank">#3: <span class="bronze-txt">Temple University</span> (63%)</div>
        </div>
      </div>
      <div class="saved-btns">
        <div class="view-btn">View Full Result</div>
        <div class="del-btn">Delete</div>
      </div>
    </div>
    <div class="saved-card">
      <div class="saved-top">
        <div>
          <div class="saved-name">Student's run — their weights</div>
          <div class="saved-comment">Student set their own priorities. Weighted campus life and Greek life higher than the parent's run.</div>
          <div class="saved-time">Saved Mar 10, 2026, 07:48 PM</div>
        </div>
        <div class="saved-ranks">
          <div class="saved-rank">#1: <span class="gold-txt">Ithaca College</span> (76%)</div>
          <div class="saved-rank">#2: <span class="silver-txt">Univ. of Delaware</span> (69%)</div>
          <div class="saved-rank">#3: <span class="bronze-txt">SUNY Cortland</span> (67%)</div>
        </div>
      </div>
      <div class="saved-btns">
        <div class="view-btn">View Full Result</div>
        <div class="del-btn">Delete</div>
      </div>
    </div>
  </div>
</div>`,
  },
];

/** Map project IDs to their screenshot arrays */
export const projectScreenshots: Record<string, Screenshot[]> = {
  cdt: cdtScreenshots,
};
