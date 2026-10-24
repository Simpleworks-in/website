# Claude Code Instructions — Programmes Page

## What to build

Create a new page at `/programmes` on the simpleworks.in Next.js site.  
The design reference is the HTML mock at:  
`/Users/premrajmenon/Library/Application Support/Claude/local-agent-mode-sessions/441fe3da-3c2d-4777-9cc8-ca0bf612ff47/6b935617-5978-474a-95bf-bffc1fd4fda4/local_0b1e3180-a35f-4b09-94ca-ac955be2ebfe/outputs/simpleworks-pricing-mock.html`

Open that file in a browser before writing any code. Build to match it exactly.

---

## Files to create / edit

```
src/app/programmes/page.tsx     ← new page (server component)
src/components/Nav.tsx          ← update nav link (see below)
```

Nav, Footer, and WhatsAppButton are already in `src/app/layout.tsx`. Do **not** add them to this page.

---

## Nav update

In `src/components/Nav.tsx`, change the existing "How We Work" link to:

```tsx
<Link href="/programmes">Programmes</Link>
```

Keep the same className as the other nav links. Remove any reference to `/how-we-work` if it exists.

---

## Design constraints (non-negotiable — read CLAUDE.md)

- **Font:** Lora only. Already loaded in `layout.tsx` as `font-serif`. Never add another font.
- **Colours:** use only the Tailwind tokens in `tailwind.config.ts`:
  `text-ink` / `bg-bg` / `text-mid` / `text-light` / `text-red` / `border-rule` / `bg-[#0F0F0F]`
- **Section dividers:** `border-t border-rule` on the **incoming** section only. Never `border-b` or `border-y` on stacked sections.
- **Background:** always white (`bg-bg`). No grey fills anywhere.
- **Red:** one use per section — heading accent, hero rule, or investment amount. Never as background.
- **Body copy `<p>` tags:** Lora Regular upright. Never add `italic` class to body paragraphs.
- **Italic** is used only on: (1) the hero subheading, (2) programme promise lines (pull-quote moments).
- **No boxed cards, no drop shadows.**

---

## Page metadata

```tsx
export const metadata = {
  title: 'Programmes — Simpleworks Consulting',
  description:
    'Three fixed-fee programmes for founder-led businesses between ₹10 Cr and ₹200 Cr. The Simple Diagnostic, The Simple Reset, and The Simple Counsel.',
};
```

---

## Page structure

### 1. Hero

Two-column grid: `grid grid-cols-[2px_1fr] gap-x-10 py-24 px-14 max-w-[860px]` (mobile: `py-14 px-6`).

Left column: `<div className="bg-red w-[2px]" />` — the vertical red rule.

Right column:

```tsx
<p className="text-[11px] uppercase tracking-[0.2em] text-light font-light mb-6">
  Our Programmes
</p>
<h1 className="text-[40px] md:text-[56px] font-bold leading-[1.06] tracking-tight text-ink mb-6">
  Three programmes.<br />
  <span className="text-red">Fixed fees,</span><br />
  agreed first.
</h1>
<p className="text-[18px] italic text-mid leading-[1.65] max-w-[540px]">
  One senior advisor — you get me, not a team. For founder-led businesses
  between ₹10 Cr and ₹200 Cr, in Bengaluru and across India.
</p>
```

---

### 2. Journey strip

`border-t border-rule px-14` (mobile: `px-6`). Flex row, four steps:

```
01 Diagnose  |  02 Plan  |  03 Reset  |  04 Counsel
```

Each step (`border-l border-rule`, first child no left border):

```tsx
<div className="flex flex-col gap-1 px-8 py-6 border-l border-rule first:border-l-0 first:pl-0">
  <span className="text-[10px] uppercase tracking-[0.2em] text-light">01</span>
  <span className="text-[15px] font-bold text-ink">Diagnose</span>
</div>
```

Trailing note (hidden mobile):

```tsx
<p className="ml-auto pl-10 border-l border-rule text-[13px] italic text-light hidden md:flex items-center py-6 max-w-xs">
  Most clients move through in that order. You can stop at any point.
</p>
```

---

### 3. Programme sections — shared pattern

Each programme: `border-t border-rule py-20 px-14` (mobile: `py-14 px-6`).

**Header row** — `grid grid-cols-[1fr_auto] gap-10 mb-12` (mobile: `grid-cols-1`):

```tsx
{/* Left */}
<div>
  <p className="text-[11px] uppercase tracking-[0.2em] text-light font-light mb-3">
    {badge}
  </p>
  <h2 className="text-[40px] font-bold leading-[1.08] tracking-tight text-ink mb-4">
    {title}
  </h2>
  <p className="text-[17px] italic text-mid leading-[1.65] max-w-[580px]">
    {promise}
  </p>
</div>

{/* Right — ghost number, hidden mobile */}
<span className="text-[120px] font-bold leading-none tracking-[-0.04em] text-rule select-none -mt-4 hidden md:block">
  {num}
</span>
```

**Meta row** — `border-t border-b border-rule flex flex-wrap mb-10`:

```tsx
<div className="flex flex-col gap-1 py-5 pr-8 min-w-[140px]">
  <span className="text-[10px] uppercase tracking-[0.2em] text-light">{label}</span>
  <span className="text-[15px] font-bold text-ink">{value}</span>
</div>
{/* second+ items: add border-l border-rule pl-8 */}
```

**"For who" paragraph** — left rule border, upright (no italic):

```tsx
<p className="text-[16px] text-mid leading-[1.78] max-w-[640px] mb-9 border-l-2 border-rule pl-5">
  {forWho}
</p>
```

**Deliverables label** (where used):

```tsx
<p className="text-[10px] uppercase tracking-[0.2em] text-light mb-4">What you get</p>
```

**Deliverables list item** — `border-b border-rule py-[14px] flex gap-4 items-baseline`:

```tsx
<li className="flex gap-4 items-baseline border-b border-rule py-[14px] text-[15px] text-mid leading-[1.65]">
  <span className="text-red font-bold flex-shrink-0">—</span>
  {text}
</li>
```

**Investment block:**

```tsx
<div className="flex items-end gap-12 flex-wrap pt-2">
  <div className="flex flex-col gap-1">
    <span className="text-[10px] uppercase tracking-[0.2em] text-light">Investment</span>
    <span className="text-[44px] font-bold text-red leading-none tracking-[-0.02em]">{amount}</span>
    <span className="text-[13px] italic text-light">{note}</span>
  </div>
  {/* optional split price */}
</div>
```

---

### 4. Programme 01 — The Simple Diagnostic

- **Badge:** Start Here
- **Title:** The Simple Diagnostic
- **Promise:** In half a day I will tell you what is working, what is not, and the one thing to do first.
- **Meta:** Duration: Half a day · Format: In person · Online · Output: 5-page written report
- **For who:** For any owner who knows something is off but cannot yet name it. Most people arrive with a symptom. This replaces the symptom with evidence.
- **Deliverables label:** What you get
- **Deliverables:**
  - A structured conversation across strategy, buying, selling, execution and people
  - A five-page report in plain language — not a fifty-slide deck
  - One prioritised recommendation: the highest-leverage thing to do next
  - An honest view on whether you need me at all
- **Investment:** ₹20,000 · note: `in person · fixed, all-inclusive` · split: `₹15,000 online`
- **Credit note** (red left border, italic, below investment):

```tsx
<div className="border-l-2 border-red pl-4 text-[14px] italic text-mid leading-[1.65] mt-7 max-w-[560px]">
  Credited in full against anything that follows. It is a deposit, not a cost.
  <br /><br />
  If you are satisfied with just the Diagnostic, the invoice for the same will be raised — no further obligation.
</div>
```

---

### 5. Programme 02 — The Simple Reset

- **Badge:** Fixed Engagement
- **Title:** The Simple Reset
- **Promise:** Four weeks to work out what to do. Four more to make sure it happens.
- **Meta:** Cadence: Weekly, in person · Length: 30 or 60 days · Output: One plan, three priorities
- **For who:** For owners who have a problem area they can name but have not been able to crack. You bring the problem. Option 1 gives you the diagnosis and a designed solution — you execute. Option 2 adds 30 days of Prem alongside your team to make sure execution actually starts.

Below the for-who paragraph, render a **two-column options grid** (`grid grid-cols-1 md:grid-cols-2 mb-10`):

**Option 1 — left column** (`pr-10`):

```
Label:    Option 1
Title:    30 days
Sub:      Four weekly visits · you execute
List:
  — Structured discovery of the named problem area — root cause, not symptoms
  — The gaps costed in rupees, ranked by impact
  — A designed solution: what to do, who owns it, by when
  — One page. Plain language. No deck.
Price:    ₹1,40,000
Note:     Fixed · billed at month end
```

**Option 2 — right column** (`pl-10 border-l border-rule`):

```
Label:    Option 2
Title:    60 days
Sub:      Eight weekly visits · Prem stays for execution
List:
  — Everything in Option 1, delivered in the first four weeks
  — Four more weeks in person with your leadership team
  — Obstacles cleared while they are still small
  — A weekly review rhythm installed and handed over — your team runs it, not Prem
Price:    ₹2,80,000
Note:     Fixed · billed monthly, two parts
```

Option title size: `text-[22px] font-bold text-ink`. Sub: `text-[13px] italic text-light mb-5`. Price: `text-[36px] font-bold text-red leading-none tracking-[-0.02em]`. Note: `text-[12px] italic text-light mt-1`.

Mobile: second option removes `border-l`, adds `border-t border-rule pt-8`.

**Footnote** below the grid (`border-t border-rule pt-5`):

```
Most clients know what they need to do. The question is whether they want help doing it.
Option 1 gives you the answer. Option 2 makes sure the answer gets implemented.
```

Style: `text-[14px] italic text-light leading-[1.65] max-w-[600px]`

---

### 6. Programme 03 — The Simple Counsel

- **Badge:** Monthly Retainer
- **Title:** The Simple Counsel
- **Promise:** A business mentor in your corner — every month, for as long as it is useful.
- **Meta:** Sessions: Two a month · Format: In person (Bengaluru) / Online elsewhere · Minimum: Three months
- **For who:** For founders who want a senior thinking partner on call — before a hire, a price change, a new market, or a difficult family conversation. Often how the relationship continues after the Reset. Also works as a standalone engagement for founders who do not need a project, just clear-headed counsel.
- **Deliverables label:** What you get
- **Deliverables:**
  - Two sessions a month, agenda set by you — at your office in Bengaluru, online anywhere else in India
  - WhatsApp access for the decisions that will not wait
  - Quarterly business review, and one leadership meeting a quarter if useful
  - No deliverables. This is thinking, not documents
- **Investment:** ₹75,000 · note: `per month · minimum three months`

---

### 7. At a Glance table

`border-t border-rule py-18 px-14` (mobile: `py-14 px-6`).

Label: `text-[11px] uppercase tracking-[0.2em] text-light font-light mb-10` — "At a Glance"

```tsx
<table className="w-full border-collapse">
  <thead>
    <tr className="border-b border-rule">
      <th className="... text-left pb-4">Programme</th>
      <th className="... text-left pb-4">Length</th>
      <th className="... text-right pb-4">Investment</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-rule">
      <td className="text-[15px] font-bold text-ink py-[18px]">The Simple Diagnostic</td>
      <td className="text-[15px] text-mid py-[18px]">Half a day</td>
      <td className="text-right py-[18px]">
        <span className="text-red font-bold">₹20,000</span>
        <span className="block text-[12px] italic text-light mt-1">in person · ₹15,000 online</span>
      </td>
    </tr>
    <tr className="border-b border-rule">
      <td className="text-[15px] font-bold text-ink py-[18px]">The Simple Reset</td>
      <td className="text-[15px] text-mid py-[18px]">30 days</td>
      <td className="text-right py-[18px]"><span className="text-red font-bold">₹1,40,000</span></td>
    </tr>
    <tr className="border-b border-rule">
      <td className="py-[18px]" />
      <td className="text-[15px] text-mid py-[18px]">60 days</td>
      <td className="text-right py-[18px]"><span className="text-red font-bold">₹2,80,000</span></td>
    </tr>
    <tr className="border-b border-rule">
      <td className="text-[15px] font-bold text-ink py-[18px]">The Simple Counsel</td>
      <td className="text-[15px] text-mid py-[18px]">Monthly</td>
      <td className="text-right py-[18px]">
        <span className="text-red font-bold">₹75,000 / month</span>
        <span className="block text-[12px] italic text-light mt-1">3-month minimum</span>
      </td>
    </tr>
  </tbody>
</table>
<p className="text-[13px] italic text-light mt-5 leading-[1.6]">
  All fees exclusive of GST. Travel outside Bengaluru at actuals.
  Anything that does not fit these three, I will scope and quote before we begin.
</p>
```

Wrap table in `overflow-x-auto` on mobile.

---

### 8. How the money works

`border-t border-rule py-18 px-14` (mobile: `py-14 px-6`). Two-column grid `grid grid-cols-1 md:grid-cols-2 gap-20 items-start`.

Left heading:
```tsx
<h2 className="text-[32px] font-bold text-ink leading-[1.15] tracking-tight">
  How the<br /><span className="text-red">money works.</span>
</h2>
```

Right — two `<p>` tags, `text-[16px] text-mid leading-[1.78] mb-5 last:mb-0`. **No italic.**

```
Fixed fees, agreed before we start. You will never receive a bill you did not expect,
and I do not bill by the hour — you are paying for what changes, not for how long I sat there.

Most people start with the Diagnostic. Half a day, ₹20,000, credited against whatever
comes next. If the answer is that you do not need me, I would rather tell you that in
four hours than in four months.
```

---

### 9. What I don't do

Same two-column grid. Left heading:

```tsx
<h2 className="text-[32px] font-bold text-ink leading-[1.15] tracking-tight">
  What I<br />don't do.
</h2>
```

Right — `<ul>` with `text-light` dashes (not red). Items upright, `text-[15px] text-mid`:

```
— Run your sales function or sit in your customer meetings. I build the system and train the people who run it
— Produce decks. You get short written documents your team can actually use
— Bring an associate who does the work while I attend the first meeting. You get me, every visit
— Take on work outside my expertise. If the problem area is not one I can serve well, I will tell you upfront — and share someone who can do a better job than me
```

---

### 10. CTA band

`border-t border-rule py-20 px-14` (mobile: `py-14 px-6`). Two-column grid `grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center`.

Left:
```tsx
<h2 className="text-[40px] font-bold text-ink leading-[1.1] tracking-tight mb-4">
  Start with<br /><span className="text-red">half a day.</span>
</h2>
<p className="text-[16px] text-mid leading-[1.7] max-w-[460px]">
  Most clients begin with the Diagnostic. ₹20,000 in person, ₹15,000 online.
  Credited in full against whatever comes next. If you only need the Diagnostic,
  that is perfectly fine too.
</p>
```

Right:
```tsx
<div className="flex flex-col gap-5 items-start md:items-end">
  <a
    href="https://wa.me/919036019395"
    className="inline-block px-9 py-4 border border-red text-red text-[15px] font-serif rounded-[1px] hover:bg-red hover:text-white transition-colors whitespace-nowrap"
  >
    Book the Diagnostic
  </a>
  <div className="text-[13px] text-light leading-[1.8] md:text-right">
    <a href="mailto:pm@simpleworks.in" className="text-mid hover:text-red transition-colors">
      pm@simpleworks.in
    </a><br />
    <a href="tel:+919036099000" className="text-mid hover:text-red transition-colors">
      +91 90360 99000
    </a>
  </div>
</div>
```

---

## Redirect

If a `/how-we-work` route already exists in the codebase, add a redirect in `next.config.mjs`:

```js
async redirects() {
  return [
    { source: '/how-we-work', destination: '/programmes', permanent: true },
  ];
},
```

---

## Verification checklist

1. `pnpm build` — zero TypeScript and ESLint errors
2. Open `localhost:3000/programmes` and compare against the HTML mock at 1440px
3. Check at 375px mobile — sections stack cleanly, ghost numbers hidden, journey note hidden, Reset options stack vertically
4. Confirm no `italic` on any body `<p>` — only hero subhead and programme promises
5. Confirm no `border-b` or `border-y` on stacked sections
6. Confirm table has `overflow-x-auto` wrapper on mobile
7. Nav shows "Programmes" linking to `/programmes`
8. WhatsApp CTA links to `https://wa.me/919036019395`
9. `/how-we-work` redirects to `/programmes` (301)
