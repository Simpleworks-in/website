# Claude Code Instructions — Programmes Page

## Overview

This file covers all changes needed to the Simpleworks website for the Programmes page:

1. Update the existing `how-we-work/page.tsx` with corrected copy
2. Rename the page route from `/how-we-work` to `/programmes`
3. Update the nav link
4. Add a redirect from `/how-we-work` → `/programmes`

The design reference HTML mock is at:
`/Users/premrajmenon/Library/Application Support/Claude/local-agent-mode-sessions/441fe3da-3c2d-4777-9cc8-ca0bf612ff47/6b935617-5978-474a-95bf-bffc1fd4fda4/local_0b1e3180-a35f-4b09-94ca-ac955be2ebfe/outputs/simpleworks-pricing-mock.html`

Open it in a browser. Match it exactly.

---

## Step 1 — Rename the route

Move the existing page folder:

```bash
mv src/app/how-we-work src/app/programmes
```

---

## Step 2 — Update metadata in `src/app/programmes/page.tsx`

```tsx
export const metadata = {
  title: "Programmes — Simpleworks Consulting",
  description:
    "Three fixed-fee programmes for founder-led businesses between ₹10 Cr and ₹200 Cr. The Simple Diagnostic, The Simple Reset, and The Simple Counsel.",
};
```

---

## Step 3 — Hero section

File: `src/app/programmes/page.tsx` — section `{/* 1. Hero */}`

Change the eyebrow label from `How We Work` to `Our Programmes`.  
Change the H1 from `Three ways in.` to `Three programmes.`

```tsx
<p className="mb-6 text-[11px] font-light uppercase tracking-[0.2em] text-light">
  Our Programmes
</p>
<h1 className="mb-6 text-[40px] font-bold leading-[1.06] tracking-tight text-ink md:text-[56px]">
  Three programmes.
  <br />
  <span className="text-red">Fixed fees,</span>
  <br />
  agreed first.
</h1>
```

---

## Step 4 — The Simple Reset section

File: `src/app/programmes/page.tsx` — section `{/* 5. The Simple Reset */}`

### 4a. Badge

Change `Then, If Needed` to `Fixed Engagement`:

```tsx
<p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
  Fixed Engagement
</p>
```

### 4b. Promise line

Replace the current promise with:

```tsx
<p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
  Four weeks to work out what to do. Four more to make sure it happens.
</p>
```

### 4c. "For who" paragraph

Replace with:

```tsx
<p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
  For owners who have a problem area they can name but have not been able to crack.
  You bring the problem. Option 1 gives you the diagnosis and a designed solution — you execute.
  Option 2 adds 30 days of Prem alongside your team to make sure execution actually starts.
</p>
```

### 4d. Option 1 deliverables

Replace the three list items with:

```tsx
"Structured discovery of the named problem area — root cause, not symptoms",
"The gaps costed in rupees, ranked by impact",
"A designed solution: what to do, who owns it, by when",
"One page. Plain language. No deck.",
```

Also update the sub-label from `Four weekly visits` to:

```tsx
<p className="mb-5 text-[13px] italic text-light">
  Four weekly visits · you execute
</p>
```

### 4e. Option 2 deliverables

Replace the three list items with:

```tsx
"Everything in Option 1, delivered in the first four weeks",
"Four more weeks in person with your leadership team",
"Obstacles cleared while they are still small",
"A weekly review rhythm installed and handed over — your team runs it, not Prem",
```

Also update the sub-label from `Eight weekly visits` to:

```tsx
<p className="mb-5 text-[13px] italic text-light">
  Eight weekly visits · Prem stays for execution
</p>
```

### 4f. Footnote

Replace the current footnote with:

```tsx
<p className="max-w-[600px] border-t border-rule pt-5 text-[14px] italic leading-[1.65] text-light">
  Most clients know what they need to do. The question is whether they want help doing it.
  Option 1 gives you the answer. Option 2 makes sure the answer gets implemented.
</p>
```

---

## Step 5 — The Simple Counsel section

File: `src/app/programmes/page.tsx` — section `{/* 6. The Simple Counsel */}`

### 5a. Badge

Change `Ongoing` to `Monthly Retainer`:

```tsx
<p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
  Monthly Retainer
</p>
```

### 5b. Promise line

Replace with:

```tsx
<p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
  A business mentor in your corner — every month, for as long as it is useful.
</p>
```

### 5c. "For who" paragraph

Replace with:

```tsx
<p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
  For founders who want a senior thinking partner on call — before a hire, a price change,
  a new market, or a difficult family conversation. Often how the relationship continues
  after the Reset. Also works as a standalone engagement for founders who do not need
  a project, just clear-headed counsel.
</p>
```

### 5d. Minimum — change 6 months to 3 months

In the meta row, change:

```tsx
<span className="text-[15px] font-bold text-ink">
  Monthly, min. 3 months
</span>
```

In the investment note, change:

```tsx
<span className="text-[13px] italic text-light">
  per month · minimum three months
</span>
```

### 5e. Deliverables

Replace with:

```tsx
"Two sessions a month, agenda set by you — at your office in Bengaluru, online anywhere else in India",
"WhatsApp access for the decisions that will not wait",
"Quarterly business review, and one leadership meeting a quarter if useful",
"No deliverables. This is thinking, not documents",
```

---

## Step 6 — At a Glance table

File: `src/app/programmes/page.tsx` — section `{/* 8. At a Glance */}`

### 6a. Counsel row — add minimum note

```tsx
<tr className="border-b border-rule">
  <td className="py-[18px] text-[15px] font-bold text-ink">
    The Simple Counsel
  </td>
  <td className="py-[18px] text-[15px] text-mid">Monthly</td>
  <td className="py-[18px] text-right text-[15px]">
    <span className="font-bold text-red">₹75,000 / month</span>
    <span className="mt-1 block text-[12px] italic text-light">3-month minimum</span>
  </td>
</tr>
```

### 6b. Remove the Custom Engagement row

Delete the entire `<tr>` block for Custom Engagement from the table — it is no longer a listed programme.

---

## Step 7 — What I don't do section

File: `src/app/programmes/page.tsx` — section `{/* 10. What I don't do */}`

This has already been updated in the file. Confirm the four items read exactly:

```tsx
"Run your sales function or sit in your customer meetings. I build the system and train the people who run it",
"Produce decks. You get short written documents your team can actually use",
"Bring an associate who does the work while I attend the first meeting. You get me, every visit",
"Take on work outside my expertise. If the problem area is not one I can serve well, I will tell you upfront — and share someone who can do a better job than me",
```

---

## Step 8 — CTA band

File: `src/app/programmes/page.tsx` — section `{/* 11. CTA band */}`

This has already been updated to stack vertically. Confirm the section reads:

```tsx
<section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
  <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tight text-ink">
    Start with
    <br />
    <span className="text-red">half a day.</span>
  </h2>
  <p className="mb-8 max-w-[460px] text-[16px] leading-[1.7] text-mid">
    Most clients begin with the Diagnostic. ₹20,000 in person, ₹15,000 online.
    Credited in full against whatever comes next. If you only need the Diagnostic,
    that is perfectly fine too.
  </p>
  <a
    href="https://wa.me/919036019395"
    className="inline-block whitespace-nowrap rounded-[1px] border border-red px-9 py-4 font-serif text-[15px] text-red transition-colors hover:bg-red hover:text-white"
  >
    Book the Diagnostic
  </a>
  <div className="mt-5 text-[13px] leading-[1.8] text-light">
    <a href="mailto:pm@simpleworks.in" className="text-mid transition-colors hover:text-red">
      pm@simpleworks.in
    </a>
    <br />
    <a href="tel:+919036099000" className="text-mid transition-colors hover:text-red">
      +91 90360 99000
    </a>
  </div>
</section>
```

---

## Step 9 — Nav link

File: `src/components/Nav.tsx`

Find the link to `/how-we-work` and change it to:

```tsx
<Link href="/programmes">Programmes</Link>
```

Keep the existing className unchanged.

---

## Step 10 — Redirect

File: `next.config.mjs`

Add a permanent redirect so any existing links to `/how-we-work` continue to work:

```js
async redirects() {
  return [
    {
      source: '/how-we-work',
      destination: '/programmes',
      permanent: true,
    },
  ];
},
```

If `redirects()` already exists in the config, add this object to the existing array.

---

## Verification checklist

Run through each of these before pushing:

1. `pnpm build` — zero TypeScript and ESLint errors
2. `pnpm lint` — clean
3. Open `localhost:3000/programmes` — compare against the HTML mock at 1440px width
4. Open at 375px — sections stack cleanly, ghost numbers hidden, journey note hidden
5. Navigate to `localhost:3000/how-we-work` — confirm it redirects to `/programmes`
6. Nav shows "Programmes" linking to `/programmes`
7. Reset: Option 1 sub-label reads "Four weekly visits · you execute"
8. Reset: Option 2 sub-label reads "Eight weekly visits · Prem stays for execution"
9. Counsel minimum shows "3 months" in both the meta row and investment note
10. "What I don't do" — four correct items, no stale GTM/capacity planning lines
11. CTA band — heading, paragraph, button, contact details all stacked vertically (no side-by-side grid)
12. WhatsApp CTA links to `https://wa.me/919036019395`
