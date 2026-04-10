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
        <div class="phase-title">Set Student's Priorities</div>
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
      <div class="param-info"><div class="param-label">D3 Baseball / Football Opportunity</div><div class="param-desc">Realistic chance student makes the roster and plays</div></div>
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
      'Multi-session persistence — different runs saved under different names (parent\'s run vs. student\'s run). Each saved result captures the full weight configuration and top-3 rankings.',
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

export const cmpScreenshots: Screenshot[] = [
  {
    label: 'Overview',
    caption:
      'The Compass hero — Phase II active with 60 features, 7+ pipeline runs, and an average of 17,775 tokens per full run from problem to requirements.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .cmp-wrap { background: #f5f8fb; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', -apple-system, sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; }
  .cmp-hero { padding: 24px 28px 20px; }
  .cmp-hero-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
  .cmp-hero-left { display: flex; align-items: flex-start; gap: 14px; }
  .cmp-icon { width: 48px; height: 48px; background: #005C8F; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .cmp-icon svg { width: 28px; height: 28px; }
  .cmp-title { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; letter-spacing: -0.3px; }
  .cmp-sub { font-size: 13px; color: #555; line-height: 1.5; max-width: 420px; }
  .cmp-badge { font-size: 11px; padding: 5px 12px; border-radius: 3px; background: #D4EDDA; color: #1a6b35; white-space: nowrap; font-weight: 600; }
  .cmp-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; padding: 0 28px 24px; border-bottom: 1px solid #e0e0e0; }
  .cmp-metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: #666; margin-bottom: 3px; }
  .cmp-metric-value { font-size: 26px; font-weight: 700; color: #1a1a1a; }
  .cmp-metric-note { font-size: 11px; color: #888; margin-top: 2px; }
  .cmp-stages { padding: 20px 28px; }
  .cmp-stages-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #676C74; margin-bottom: 12px; }
  .cmp-stages-row { display: flex; align-items: flex-start; gap: 0; }
  .cmp-stage { flex: 1; padding: 10px 12px; }
  .cmp-stage-name { font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
  .cmp-stage-desc { font-size: 11px; color: #555; line-height: 1.5; }
  .cmp-arrow { display: flex; align-items: center; padding-top: 14px; font-size: 18px; color: #B8C0C4; flex-shrink: 0; }
  .cmp-note { font-size: 11px; color: #666; font-style: italic; padding: 0 28px 20px; }
</style>
<div class="cmp-wrap">
  <div class="cmp-hero">
    <div class="cmp-hero-top">
      <div class="cmp-hero-left">
        <div class="cmp-icon">
          <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="70" r="50" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.3"/><circle cx="70" cy="70" r="3.5" fill="#fff"/><polygon points="70,24 76,64 70,57 64,64" fill="#fff"/><polygon points="70,116 64,76 70,83 76,76" fill="rgba(255,255,255,0.35)"/><path d="M32,94 L50,94 L70,64 L95,50" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="3,2" fill="none"/><circle cx="95" cy="50" r="4.5" fill="#D4EDDA" stroke="#D4EDDA" stroke-width="1.5"/></svg>
        </div>
        <div>
          <div class="cmp-title">Compass — PM Agent Pipeline</div>
          <div class="cmp-sub">Your personal AI product manager. Describe a problem. Get a strategy. Ship requirements.</div>
        </div>
      </div>
      <div class="cmp-badge">Phase II, Active</div>
    </div>
  </div>
  <div class="cmp-metrics">
    <div><div class="cmp-metric-label">Phase</div><div class="cmp-metric-value">II of III</div><div class="cmp-metric-note">Phase I complete, Phase II active</div></div>
    <div><div class="cmp-metric-label">Features</div><div class="cmp-metric-value">60</div><div class="cmp-metric-note">49 live, 11 planned</div></div>
    <div><div class="cmp-metric-label">Pipeline runs</div><div class="cmp-metric-value">7+</div><div class="cmp-metric-note">Software, creative, business</div></div>
    <div><div class="cmp-metric-label">Avg tokens/run</div><div class="cmp-metric-value">17,775</div><div class="cmp-metric-note">Full pipeline end-to-end</div></div>
  </div>
  <div class="cmp-stages">
    <div class="cmp-stages-label">How it works</div>
    <div class="cmp-stages-row">
      <div class="cmp-stage">
        <div class="cmp-stage-name">Discovery</div>
        <div class="cmp-stage-desc">Frames the problem, identifies target user, surfaces assumptions with structured risk classification.</div>
      </div>
      <div class="cmp-arrow">→</div>
      <div class="cmp-stage">
        <div class="cmp-stage-name">Strategy</div>
        <div class="cmp-stage-desc">OKRs, ranked features with rationale, explicit out-of-scope. Picks the right framework for the project.</div>
      </div>
      <div class="cmp-arrow">→</div>
      <div class="cmp-stage">
        <div class="cmp-stage-name">Requirements</div>
        <div class="cmp-stage-desc">User stories with Given/When/Then acceptance criteria, NFRs, open questions with blocking dependencies.</div>
      </div>
    </div>
  </div>
  <div class="cmp-note">Each stage is reviewed and approved by you before the next one runs. Automation is earned, not assumed.</div>
</div>`,
  },
  {
    label: 'Feature Landscape',
    caption:
      '60 features across 9 categories — 49 live, 11 planned. Highlights include brief extraction, structured risk classification, stakeholder-tailored exports, and configurable automation.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .fl-wrap { background: #f5f8fb; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', -apple-system, sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; padding: 24px 28px; }
  .fl-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #676C74; margin-bottom: 6px; }
  .fl-title { font-size: 16px; font-weight: 700; margin-bottom: 18px; }
  .fl-bars { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
  .fl-bar-row { display: flex; align-items: center; gap: 10px; }
  .fl-bar-label { font-size: 11px; color: #555; width: 100px; text-align: right; flex-shrink: 0; }
  .fl-bar-track { flex: 1; height: 20px; display: flex; border-radius: 3px; overflow: hidden; background: #e8e8e4; }
  .fl-bar-live { background: #1D9E75; height: 100%; }
  .fl-bar-planned { background: #B5D4F4; height: 100%; }
  .fl-bar-count { font-size: 11px; color: #888; width: 24px; text-align: right; }
  .fl-legend { display: flex; gap: 14px; font-size: 11px; color: #666; margin-bottom: 20px; }
  .fl-dot { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: middle; }
  .fl-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .fl-card { border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px 14px; background: #fff; }
  .fl-card-vision { border: 2px solid #1C75BC; }
  .fl-card-cat { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .fl-card-name { font-size: 13px; font-weight: 600; color: #1a1a1a; margin-bottom: 2px; }
  .fl-card-desc { font-size: 11px; color: #888; line-height: 1.4; }
</style>
<div class="fl-wrap">
  <div class="fl-label">Feature landscape</div>
  <div class="fl-title">60 features across 9 categories</div>
  <div class="fl-bars">
    <div class="fl-bar-row"><div class="fl-bar-label">Core pipeline</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:63.6%"></div><div class="fl-bar-planned" style="width:36.4%"></div></div><div class="fl-bar-count">11</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Intake</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:87.5%"></div><div class="fl-bar-planned" style="width:12.5%"></div></div><div class="fl-bar-count">8</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Agent intel</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:80%"></div><div class="fl-bar-planned" style="width:20%"></div></div><div class="fl-bar-count">10</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Stakeholder</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:100%"></div></div><div class="fl-bar-count">8</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Export</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:85.7%"></div><div class="fl-bar-planned" style="width:14.3%"></div></div><div class="fl-bar-count">7</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">UI/UX</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:100%"></div></div><div class="fl-bar-count">8</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Architecture</div><div class="fl-bar-track"><div class="fl-bar-live" style="width:83.3%"></div><div class="fl-bar-planned" style="width:16.7%"></div></div><div class="fl-bar-count">6</div></div>
    <div class="fl-bar-row"><div class="fl-bar-label">Phase III</div><div class="fl-bar-track"><div class="fl-bar-planned" style="width:100%"></div></div><div class="fl-bar-count">2</div></div>
  </div>
  <div class="fl-legend"><span><span class="fl-dot" style="background:#1D9E75;"></span>Live (49)</span><span><span class="fl-dot" style="background:#B5D4F4;"></span>Planned (11)</span></div>
  <div class="fl-cards">
    <div class="fl-card"><div class="fl-card-cat" style="color:#0F6E56;">Core</div><div class="fl-card-name">Three-stage AI pipeline</div><div class="fl-card-desc">Problem to requirements in minutes, not weeks</div></div>
    <div class="fl-card"><div class="fl-card-cat" style="color:#534AB7;">Intake</div><div class="fl-card-name">Brief extraction</div><div class="fl-card-desc">Describe your problem in plain English</div></div>
    <div class="fl-card"><div class="fl-card-cat" style="color:#D85A30;">Export</div><div class="fl-card-name">Stakeholder-tailored exports</div><div class="fl-card-desc">Same project, different audiences</div></div>
    <div class="fl-card"><div class="fl-card-cat" style="color:#993556;">Intelligence</div><div class="fl-card-name">Coherence check</div><div class="fl-card-desc">Catches contradictions before you waste time</div></div>
    <div class="fl-card"><div class="fl-card-cat" style="color:#0F6E56;">Core</div><div class="fl-card-name">Configurable automation</div><div class="fl-card-desc">Full control to hands-free, your choice</div></div>
    <div class="fl-card fl-card-vision"><div class="fl-card-cat" style="color:#185FA5;">Phase III vision</div><div class="fl-card-name">Compass marketplace</div><div class="fl-card-desc">From requirements to built product</div></div>
  </div>
</div>`,
  },
  {
    label: 'Test Results',
    caption:
      '7 documented pipeline runs with 100% schema compliance since Round 2. The pipeline adapts naturally to non-software domains — creative and business scenarios require no special handling.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .tr-wrap { background: #f5f8fb; border-radius: 12px; overflow: hidden; font-family: 'Segoe UI', -apple-system, sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; padding: 24px 28px; }
  .tr-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #676C74; margin-bottom: 6px; }
  .tr-title { font-size: 14px; font-weight: 700; margin-bottom: 18px; }
  .tr-chart { display: flex; align-items: flex-end; gap: 0; height: 160px; margin-bottom: 6px; padding: 0 4px; border-bottom: 1px solid #e0e0e0; }
  .tr-bar-group { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0; }
  .tr-bar-stack { display: flex; flex-direction: column; gap: 2px; align-items: center; width: 32px; }
  .tr-bar { border-radius: 2px 2px 0 0; width: 100%; }
  .tr-bar-req { background: #D85A30; }
  .tr-bar-str { background: #1D9E75; }
  .tr-bar-dis { background: #534AB7; }
  .tr-bar-label { font-size: 9px; color: #888; margin-top: 6px; text-align: center; }
  .tr-bar-total { font-size: 9px; color: #555; font-weight: 600; margin-bottom: 3px; }
  .tr-legend { display: flex; gap: 14px; font-size: 11px; color: #666; margin: 10px 0 18px; }
  .tr-dot { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: middle; }
  .tr-table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 14px; }
  .tr-table th { text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: #666; padding: 6px 8px; border-bottom: 1px solid #e0e0e0; }
  .tr-table td { padding: 6px 8px; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; }
  .tr-type { font-size: 10px; padding: 2px 6px; border-radius: 2px; }
  .tr-type-sw { background: #CCEAFC; color: #005C8F; }
  .tr-type-cr { background: #FFF3CD; color: #856404; }
  .tr-insight { font-size: 12px; color: #555; font-style: italic; line-height: 1.5; border-top: 1px solid #e0e0e0; padding-top: 12px; }
</style>
<div class="tr-wrap">
  <div class="tr-label">Test results</div>
  <div class="tr-title">7 documented pipeline runs. 100% schema compliance since Round 2.</div>
  <div class="tr-chart">
    <div class="tr-bar-group"><div class="tr-bar-total">18.2k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:69px;"></div><div class="tr-bar tr-bar-str" style="height:27px;"></div><div class="tr-bar tr-bar-dis" style="height:18px;"></div></div><div class="tr-bar-label">PayFlow</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">17.8k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:71px;"></div><div class="tr-bar tr-bar-str" style="height:27px;"></div><div class="tr-bar tr-bar-dis" style="height:13px;"></div></div><div class="tr-bar-label">BC365 R1</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">19.2k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:81px;"></div><div class="tr-bar tr-bar-str" style="height:24px;"></div><div class="tr-bar tr-bar-dis" style="height:15px;"></div></div><div class="tr-bar-label">BC365 R2</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">14.9k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:63px;"></div><div class="tr-bar tr-bar-str" style="height:20px;"></div><div class="tr-bar tr-bar-dis" style="height:10px;"></div></div><div class="tr-bar-label">BC365 R3</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">18.8k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:75px;"></div><div class="tr-bar tr-bar-str" style="height:26px;"></div><div class="tr-bar tr-bar-dis" style="height:16px;"></div></div><div class="tr-bar-label">Pitcher</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">16.1k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:64px;"></div><div class="tr-bar tr-bar-str" style="height:22px;"></div><div class="tr-bar tr-bar-dis" style="height:15px;"></div></div><div class="tr-bar-label">Furniture</div></div>
    <div class="tr-bar-group"><div class="tr-bar-total">19.4k</div><div class="tr-bar-stack"><div class="tr-bar tr-bar-req" style="height:81px;"></div><div class="tr-bar tr-bar-str" style="height:25px;"></div><div class="tr-bar tr-bar-dis" style="height:16px;"></div></div><div class="tr-bar-label">Network</div></div>
  </div>
  <div class="tr-legend"><span><span class="tr-dot" style="background:#534AB7;"></span>Discovery</span><span><span class="tr-dot" style="background:#1D9E75;"></span>Strategy</span><span><span class="tr-dot" style="background:#D85A30;"></span>Requirements</span></div>
  <table class="tr-table">
    <thead><tr><th>Run</th><th>Scenario</th><th>Type</th><th>Tokens</th></tr></thead>
    <tbody>
      <tr><td>PayFlow Checkout</td><td>E-commerce payment friction</td><td><span class="tr-type tr-type-sw">Software</span></td><td>18,218</td></tr>
      <tr><td>BC365 Round 1</td><td>ERP forecasting capability</td><td><span class="tr-type tr-type-sw">Software</span></td><td>17,832</td></tr>
      <tr><td>BC365 Round 3</td><td>ERP forecasting capability</td><td><span class="tr-type tr-type-sw">Software</span></td><td>14,864</td></tr>
      <tr><td>Baseball pitcher</td><td>Athletic velocity development</td><td><span class="tr-type tr-type-cr">Creative</span></td><td>18,788</td></tr>
      <tr><td>Furniture maker</td><td>Client scoping process</td><td><span class="tr-type tr-type-cr">Creative</span></td><td>16,126</td></tr>
      <tr><td>Networking platform</td><td>Premium conversion optimization</td><td><span class="tr-type tr-type-sw">Software</span></td><td>19,411</td></tr>
    </tbody>
  </table>
  <div class="tr-insight">The pipeline adapts naturally to non-software domains. The baseball pitcher run produced a structured training program. The furniture maker run produced a business process design. No special handling required.</div>
</div>`,
  },
];

export const admScreenshots: Screenshot[] = [
  {
    label: 'Behavioral Survey',
    caption:
      'Block F — Risk Tolerance. The survey never asks students to rate importance on a 1-to-10 scale. Forced-choice scenarios produce real signal where preference scales produce anchored noise. The risk tolerance score directly drives the recommended safeties/targets/reaches mix.',
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .ak-wrap { background: #fff; border-radius: 12px; overflow: hidden; font-family: -apple-system, 'Segoe UI', sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; border: 1px solid #e8eef3; }
  .ak-header { background: linear-gradient(180deg, #f8fafc 0%, #fff 100%); border-bottom: 1px solid #e8eef3; padding: 22px 28px 18px; }
  .ak-brand { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
  .ak-logo-wrap { display: flex; align-items: center; gap: 8px; }
  .ak-logo-mark { display: inline-block; width: 20px; height: 20px; background: #1C75BC; border-radius: 5px; position: relative; }
  .ak-logo-mark::after { content: 'A'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: 800; font-family: Arial, sans-serif; }
  .ak-logo { font-weight: 700; font-size: 16px; color: #1C75BC; letter-spacing: -0.3px; }
  .ak-account { font-size: 11px; color: #64748b; }
  .ak-progress { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
  .ak-step { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; font-weight: 600; white-space: nowrap; }
  .ak-progress-bar { flex: 1; height: 4px; background: #e8eef3; border-radius: 2px; overflow: hidden; }
  .ak-progress-fill { width: 87.5%; height: 100%; background: linear-gradient(90deg, #1C75BC 0%, #5FA6DB 100%); }
  .ak-block-label { font-size: 11px; color: #94a3b8; }
  .ak-body { padding: 24px 28px 26px; }
  .ak-question { font-size: 17px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; line-height: 1.4; }
  .ak-q-sub { font-size: 13px; color: #64748b; margin-bottom: 18px; line-height: 1.5; }
  .ak-options { display: flex; flex-direction: column; gap: 10px; }
  .ak-option { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border: 1.5px solid #e8eef3; border-radius: 10px; }
  .ak-option-selected { border-color: #1C75BC; background: #f0f7fc; }
  .ak-radio { width: 18px; height: 18px; border-radius: 50%; border: 2px solid #cbd5e1; flex-shrink: 0; margin-top: 2px; position: relative; }
  .ak-radio-on { border-color: #1C75BC; }
  .ak-radio-on::after { content: ''; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: #1C75BC; }
  .ak-option-text { flex: 1; }
  .ak-option-title { font-size: 13px; font-weight: 600; color: #1a1a1a; margin-bottom: 3px; }
  .ak-option-desc { font-size: 12px; color: #64748b; line-height: 1.5; }
  .ak-why { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; padding: 8px 12px; background: #fef9c3; border: 1px solid #fde68a; border-radius: 6px; font-size: 11px; color: #713f12; }
  .ak-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; background: #facc15; color: #713f12; border-radius: 50%; font-style: italic; font-weight: 800; font-size: 9px; flex-shrink: 0; }
  .ak-actions { display: flex; justify-content: space-between; margin-top: 20px; }
  .ak-back { padding: 9px 18px; background: transparent; border: 1px solid #e8eef3; border-radius: 8px; color: #64748b; font-size: 12px; font-weight: 500; }
  .ak-next { padding: 9px 22px; background: #1C75BC; border: none; border-radius: 8px; color: #fff; font-size: 12px; font-weight: 600; }
</style>
<div class="ak-wrap">
  <div class="ak-header">
    <div class="ak-brand">
      <div class="ak-logo-wrap"><span class="ak-logo-mark"></span><span class="ak-logo">AdmitKit Discovery</span></div>
      <div class="ak-account">student@example.edu</div>
    </div>
    <div class="ak-progress">
      <span class="ak-step">Step 7 of 8</span>
      <div class="ak-progress-bar"><div class="ak-progress-fill"></div></div>
    </div>
    <div class="ak-block-label">Block F · Risk Tolerance</div>
  </div>
  <div class="ak-body">
    <div class="ak-question">Your top-choice school has a 22% admission rate. A school you'd genuinely be happy at has an 85% rate. What do you do?</div>
    <div class="ak-q-sub">No wrong answer. We use this to recommend a safety/target/reach mix that fits how you actually think about risk.</div>
    <div class="ak-options">
      <div class="ak-option ak-option-selected">
        <div class="ak-radio ak-radio-on"></div>
        <div class="ak-option-text">
          <div class="ak-option-title">Apply to both. The reach is worth a real shot.</div>
          <div class="ak-option-desc">You're willing to spend an essay on a long shot if the upside is meaningful.</div>
        </div>
      </div>
      <div class="ak-option">
        <div class="ak-radio"></div>
        <div class="ak-option-text">
          <div class="ak-option-title">Apply to both, but only if the safety is genuinely a fit.</div>
          <div class="ak-option-desc">A safety you're happy at, not a fallback you're settling for.</div>
        </div>
      </div>
      <div class="ak-option">
        <div class="ak-radio"></div>
        <div class="ak-option-text">
          <div class="ak-option-title">Skip the reach. Anxiety isn't worth the long odds.</div>
          <div class="ak-option-desc">You'd rather invest the application energy where the probability is higher.</div>
        </div>
      </div>
    </div>
    <div class="ak-why"><span class="ak-why-icon">i</span>Behavioral question, never a 1-to-10 scale. Anchored ratings produce noise.</div>
    <div class="ak-actions">
      <button class="ak-back">← Block E</button>
      <button class="ak-next">Continue →</button>
    </div>
  </div>
</div>`,
  },
  {
    label: 'Customize Parameters',
    caption:
      "After the six-block survey, the student sees parameters generated dynamically from their responses (universal + personalized) and can opt in to values-based parameters that can't be inferred from behavior. Toggle one on, get a single follow-up question. Skip the section entirely if nothing applies.",
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .ak-wrap { background: #fff; border-radius: 12px; overflow: hidden; font-family: -apple-system, 'Segoe UI', sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; border: 1px solid #e8eef3; }
  .ak-header { background: linear-gradient(180deg, #f8fafc 0%, #fff 100%); border-bottom: 1px solid #e8eef3; padding: 22px 28px 18px; }
  .ak-brand { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .ak-logo-wrap { display: flex; align-items: center; gap: 8px; }
  .ak-logo-mark { display: inline-block; width: 20px; height: 20px; background: #1C75BC; border-radius: 5px; position: relative; }
  .ak-logo-mark::after { content: 'A'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: 800; font-family: Arial, sans-serif; }
  .ak-logo { font-weight: 700; font-size: 16px; color: #1C75BC; letter-spacing: -0.3px; }
  .ak-account { font-size: 11px; color: #64748b; }
  .ak-step { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; font-weight: 600; }
  .ak-page-title { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-top: 6px; }
  .ak-page-sub { font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.5; }
  .ak-body { padding: 22px 28px 24px; }
  .ak-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #1C75BC; font-weight: 700; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .ak-section-count { background: #e8eef3; color: #64748b; padding: 1px 8px; border-radius: 10px; font-size: 9px; font-weight: 700; letter-spacing: 0; }
  .ak-section { margin-bottom: 20px; }
  .ak-pill-grid { display: flex; flex-wrap: wrap; gap: 6px; }
  .ak-pill { padding: 5px 11px; background: #f0f7fc; border: 1px solid #d6e9f7; border-radius: 14px; font-size: 11px; color: #185FA5; font-weight: 500; }
  .ak-pill-personal { background: #fef3e8; border-color: #fbd9b9; color: #854F0B; }
  .ak-toggles { display: flex; flex-direction: column; gap: 7px; }
  .ak-toggle { display: flex; align-items: flex-start; gap: 12px; padding: 11px 14px; border: 1px solid #e8eef3; border-radius: 9px; }
  .ak-toggle-on { border-color: #1C75BC; background: #f0f7fc; }
  .ak-switch { width: 30px; height: 17px; border-radius: 9px; background: #cbd5e1; position: relative; flex-shrink: 0; margin-top: 2px; }
  .ak-switch::after { content: ''; position: absolute; top: 2px; left: 2px; width: 13px; height: 13px; border-radius: 50%; background: #fff; }
  .ak-switch-on { background: #1C75BC; }
  .ak-switch-on::after { left: 15px; }
  .ak-toggle-info { flex: 1; }
  .ak-toggle-title { font-size: 12px; font-weight: 600; color: #1a1a1a; margin-bottom: 2px; }
  .ak-toggle-desc { font-size: 11px; color: #64748b; line-height: 1.45; }
  .ak-followup { margin-top: 8px; padding: 9px 11px; background: #fff; border: 1px dashed #93c5fd; border-radius: 6px; font-size: 11px; }
  .ak-followup-q { font-weight: 600; color: #1a1a1a; margin-bottom: 5px; }
  .ak-weight-row { display: flex; align-items: center; gap: 8px; }
  .ak-weight-track { flex: 1; height: 4px; background: #e0e7ef; border-radius: 2px; overflow: hidden; }
  .ak-weight-fill { width: 50%; height: 100%; background: #1C75BC; }
  .ak-weight-val { font-size: 11px; color: #1C75BC; font-weight: 700; }
  .ak-actions { display: flex; justify-content: space-between; margin-top: 18px; }
  .ak-back { padding: 9px 18px; background: transparent; border: 1px solid #e8eef3; border-radius: 8px; color: #64748b; font-size: 12px; font-weight: 500; }
  .ak-next { padding: 9px 22px; background: #1C75BC; border: none; border-radius: 8px; color: #fff; font-size: 12px; font-weight: 600; }
</style>
<div class="ak-wrap">
  <div class="ak-header">
    <div class="ak-brand">
      <div class="ak-logo-wrap"><span class="ak-logo-mark"></span><span class="ak-logo">AdmitKit Discovery</span></div>
      <div class="ak-account">student@example.edu</div>
    </div>
    <div class="ak-step">Step 8 of 8 · Customize</div>
    <div class="ak-page-title">Customize Your Parameters</div>
    <div class="ak-page-sub">Generated from your survey. Add anything else that should factor in — we'll only ask about what you turn on.</div>
  </div>
  <div class="ak-body">
    <div class="ak-section">
      <div class="ak-section-label">Generated from your survey<span class="ak-section-count">11 active</span></div>
      <div class="ak-pill-grid">
        <span class="ak-pill">Academic Program Fit</span>
        <span class="ak-pill">Net Cost After Aid</span>
        <span class="ak-pill">Campus Size</span>
        <span class="ak-pill">Distance from Home</span>
        <span class="ak-pill">Campus Location</span>
        <span class="ak-pill">Campus & Student Life</span>
        <span class="ak-pill">Weather/Climate</span>
        <span class="ak-pill ak-pill-personal">Sports Mgmt Program</span>
        <span class="ak-pill ak-pill-personal">D3 Baseball Opportunity</span>
        <span class="ak-pill ak-pill-personal">Internship Market Access</span>
        <span class="ak-pill ak-pill-personal">Hillel Presence</span>
      </div>
    </div>
    <div class="ak-section">
      <div class="ak-section-label">Optional · values-based parameters<span class="ak-section-count">opt in</span></div>
      <div class="ak-toggles">
        <div class="ak-toggle ak-toggle-on">
          <div class="ak-switch ak-switch-on"></div>
          <div class="ak-toggle-info">
            <div class="ak-toggle-title">DEI Policy & Institutional Commitment</div>
            <div class="ak-toggle-desc">Published DEI policy, institutional staffing, program investment.</div>
            <div class="ak-followup">
              <div class="ak-followup-q">How much weight should this carry?</div>
              <div class="ak-weight-row">
                <div class="ak-weight-track"><div class="ak-weight-fill"></div></div>
                <span class="ak-weight-val">5 / 10</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ak-toggle">
          <div class="ak-switch"></div>
          <div class="ak-toggle-info">
            <div class="ak-toggle-title">LGBTQ+ Campus Climate & Support</div>
            <div class="ak-toggle-desc">Campus Pride Index rating, gender-neutral housing, support resources.</div>
          </div>
        </div>
        <div class="ak-toggle">
          <div class="ak-switch"></div>
          <div class="ak-toggle-info">
            <div class="ak-toggle-title">Campus Political & Ideological Climate</div>
            <div class="ak-toggle-desc">Student political activity, speech climate, ideological balance.</div>
          </div>
        </div>
        <div class="ak-toggle">
          <div class="ak-switch"></div>
          <div class="ak-toggle-info">
            <div class="ak-toggle-title">Sustainability & Environmental Commitment</div>
            <div class="ak-toggle-desc">AASHE STARS rating, climate commitments, sustainability infrastructure.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ak-actions">
      <button class="ak-back">← Back</button>
      <button class="ak-next">Generate My School List →</button>
    </div>
  </div>
</div>`,
  },
  {
    label: 'School List & Composition',
    caption:
      "Personalized probability estimates from each school's 25th/75th percentile data — not acceptance rates. Risk tolerance score drives the recommended safeties/targets/reaches mix before any specific schools are suggested. Profile completeness tracked field-by-field with Provided / Estimated / Missing flags.",
    html: `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: transparent; }
  .ak-wrap { background: #fff; border-radius: 12px; overflow: hidden; font-family: -apple-system, 'Segoe UI', sans-serif; color: #1a1a1a; max-width: 780px; margin: 0 auto; border: 1px solid #e8eef3; }
  .ak-header { background: linear-gradient(180deg, #f8fafc 0%, #fff 100%); border-bottom: 1px solid #e8eef3; padding: 22px 28px 18px; }
  .ak-brand { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
  .ak-logo-wrap { display: flex; align-items: center; gap: 8px; }
  .ak-logo-mark { display: inline-block; width: 20px; height: 20px; background: #1C75BC; border-radius: 5px; position: relative; }
  .ak-logo-mark::after { content: 'A'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: 800; font-family: Arial, sans-serif; }
  .ak-logo { font-weight: 700; font-size: 16px; color: #1C75BC; letter-spacing: -0.3px; }
  .ak-tabs { display: flex; gap: 4px; }
  .ak-tab { padding: 5px 12px; background: transparent; border: 1px solid transparent; font-size: 11px; color: #64748b; border-radius: 5px; }
  .ak-tab-active { background: #1C75BC; color: #fff; font-weight: 600; }
  .ak-page-title { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-top: 4px; }
  .ak-page-sub { font-size: 12px; color: #64748b; margin-top: 3px; line-height: 1.5; }
  .ak-body { padding: 22px 28px 24px; }
  .ak-rec-card { background: linear-gradient(135deg, #1C75BC 0%, #185FA5 100%); border-radius: 12px; padding: 18px 22px; margin-bottom: 18px; color: #fff; }
  .ak-rec-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85; margin-bottom: 4px; }
  .ak-rec-title { font-size: 14px; font-weight: 600; margin-bottom: 14px; }
  .ak-rec-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 12px; }
  .ak-rec-bucket { background: rgba(255,255,255,0.15); border-radius: 8px; padding: 10px 12px; }
  .ak-rec-num { font-size: 26px; font-weight: 800; line-height: 1; }
  .ak-rec-bucket-label { font-size: 9px; opacity: 0.95; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 5px; font-weight: 600; }
  .ak-rec-foot { font-size: 11px; opacity: 0.92; line-height: 1.5; }
  .ak-completeness { background: #f8fafc; border: 1px solid #e8eef3; border-radius: 10px; padding: 12px 16px; margin-bottom: 18px; }
  .ak-comp-title { font-size: 11px; font-weight: 600; color: #475569; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
  .ak-comp-row { display: flex; gap: 16px; flex-wrap: wrap; font-size: 11px; color: #475569; }
  .ak-flag { display: inline-flex; align-items: center; gap: 6px; }
  .ak-flag-dot { width: 8px; height: 8px; border-radius: 50%; }
  .ak-flag-prov { background: #10b981; }
  .ak-flag-est { background: #f59e0b; }
  .ak-flag-mis { background: #cbd5e1; }
  .ak-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; margin-bottom: 10px; }
  .ak-school { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border: 1px solid #e8eef3; border-radius: 9px; margin-bottom: 7px; }
  .ak-tier { font-size: 9px; padding: 3px 8px; border-radius: 3px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; }
  .ak-tier-safe { background: #d1fae5; color: #047857; }
  .ak-tier-target { background: #dbeafe; color: #1e40af; }
  .ak-tier-reach { background: #fee2e2; color: #b91c1c; }
  .ak-school-info { flex: 1; }
  .ak-school-name { font-size: 13px; font-weight: 600; color: #1a1a1a; }
  .ak-school-meta { font-size: 11px; color: #64748b; margin-top: 1px; }
  .ak-school-prob { font-size: 14px; font-weight: 800; color: #1a1a1a; text-align: right; }
  .ak-school-prob-label { font-size: 9px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.04em; text-align: right; }
</style>
<div class="ak-wrap">
  <div class="ak-header">
    <div class="ak-brand">
      <div class="ak-logo-wrap"><span class="ak-logo-mark"></span><span class="ak-logo">AdmitKit Discovery</span></div>
      <div class="ak-tabs">
        <button class="ak-tab">Profile</button>
        <button class="ak-tab ak-tab-active">My List</button>
        <button class="ak-tab">Schools</button>
      </div>
    </div>
    <div class="ak-page-title">Your School List</div>
    <div class="ak-page-sub">Personalized estimates from each school's 25th/75th percentile data. Risk score: 3 of 5 (balanced).</div>
  </div>
  <div class="ak-body">
    <div class="ak-rec-card">
      <div class="ak-rec-label">Recommended composition</div>
      <div class="ak-rec-title">For 15 applications at Risk Score 3</div>
      <div class="ak-rec-row">
        <div class="ak-rec-bucket"><div class="ak-rec-num">3</div><div class="ak-rec-bucket-label">Safeties</div></div>
        <div class="ak-rec-bucket"><div class="ak-rec-num">6</div><div class="ak-rec-bucket-label">Targets</div></div>
        <div class="ak-rec-bucket"><div class="ak-rec-num">6</div><div class="ak-rec-bucket-label">Reaches</div></div>
      </div>
      <div class="ak-rec-foot">A balanced mix. Anxiety pulls most students toward safety-heavy lists. Your reaches are where the upside lives.</div>
    </div>
    <div class="ak-completeness">
      <div class="ak-comp-title">Profile completeness · 19 fields</div>
      <div class="ak-comp-row">
        <span class="ak-flag"><span class="ak-flag-dot ak-flag-prov"></span>Provided · 14</span>
        <span class="ak-flag"><span class="ak-flag-dot ak-flag-est"></span>Estimated · 4</span>
        <span class="ak-flag"><span class="ak-flag-dot ak-flag-mis"></span>Missing · 1 (SAT score)</span>
      </div>
    </div>
    <div class="ak-section-label">Top matches · 15 schools</div>
    <div class="ak-school">
      <div class="ak-tier ak-tier-safe">Safety</div>
      <div class="ak-school-info">
        <div class="ak-school-name">SUNY Cortland</div>
        <div class="ak-school-meta">Cortland, NY · Public · Sports Mgmt 10/10 · D3 Baseball</div>
      </div>
      <div><div class="ak-school-prob">82%</div><div class="ak-school-prob-label">Probability</div></div>
    </div>
    <div class="ak-school">
      <div class="ak-tier ak-tier-target">Target</div>
      <div class="ak-school-info">
        <div class="ak-school-name">Ithaca College</div>
        <div class="ak-school-meta">Ithaca, NY · Private · Sports Mgmt 10/10 · D3 Baseball</div>
      </div>
      <div><div class="ak-school-prob">61%</div><div class="ak-school-prob-label">Probability</div></div>
    </div>
    <div class="ak-school">
      <div class="ak-tier ak-tier-target">Target</div>
      <div class="ak-school-info">
        <div class="ak-school-name">University of Delaware</div>
        <div class="ak-school-meta">Newark, DE · Public · Sports Mgmt · Internship Market 9/10</div>
      </div>
      <div><div class="ak-school-prob">54%</div><div class="ak-school-prob-label">Probability</div></div>
    </div>
    <div class="ak-school">
      <div class="ak-tier ak-tier-reach">Reach</div>
      <div class="ak-school-info">
        <div class="ak-school-name">University of Michigan</div>
        <div class="ak-school-meta">Ann Arbor, MI · Public · Sports Mgmt 10/10 · Internship Market 10/10</div>
      </div>
      <div><div class="ak-school-prob">22%</div><div class="ak-school-prob-label">Probability</div></div>
    </div>
  </div>
</div>`,
  },
];

/** Map project IDs to their screenshot arrays */
export const projectScreenshots: Record<string, Screenshot[]> = {
  cdt: cdtScreenshots,
  cmp: cmpScreenshots,
  adm: admScreenshots,
};
