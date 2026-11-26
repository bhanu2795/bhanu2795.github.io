# Bhanu Singh portfolio

Design review draft · 26 November 2026

[Purpose](#1-purpose) · [Homepage](#2-homepage) · [Publishing](#3-publishing) · [Delivery](#4-delivery)

## 1. Purpose

A recruiter arriving from a job application should be able to identify Bhanu’s role, read a professional contribution and download his published CV. An interviewer should be able to inspect an independent project and follow its available code, demo or store links.

## 2. Homepage

- Introduce Bhanu as a React Native Technical Lead with React, JavaScript and TypeScript experience. Link his own GitHub profile.
- Place Riyad Bank directly below the introduction. Use the approved overview of ForgeRock mobile login work and mentoring. Keep client projects in professional experience.
- Feature Cab Booking first in Independent Learning Projects. The review prototype uses illustrative screens and local interactions. Production content must reflect delivered features. Commerce and payments are future independent projects.
- Offer keyboard-operable preview controls with a visible selected state. Support reduced motion, narrow screens and zoom. Keep the CV and navigation available without waiting for animation.
- Give each published project a stable detail URL with its description, learning notes, stack, screenshots with captions, and applicable GitHub, live demo, Google Play and App Store links.
- Visual references are Brittany Chiang’s v4 portfolio for hierarchy, Takuya Matsuyama’s homepage for the centerpiece and Bruno Simon’s portfolio for visitor-controlled interaction. Use original artwork.

## 3. Publishing

- Authenticate the owner using GitHub. The publishing service verifies the authorized account for every write. Select a repository from Bhanu’s account and edit imported metadata before publication.
- Create, update, reorder, feature and unpublish projects. Preview drafts privately. Validate external link destinations and omit empty links.
- Offer two CV workflows. Create a PDF from editable experience, skills and selected projects, or upload a PDF. Preview the exact file, then explicitly publish it behind a stable download URL. Keep the last published version available if generation or upload fails.
- Store credentials and drafts outside the public repository and site bundle. Only approved public content and the published CV reach Pages.

## 4. Delivery

1. Review the static prototype at preview/index.html on desktop and mobile. Confirm the introduction, Riyad Bank placement and transitions between the three sample states.
2. Build the public portfolio with React and TypeScript, statically exported for GitHub Pages. Verify direct navigation to project URLs and working asset paths. Retain the existing homepage until replacement is approved.
3. Implement owner authentication, private drafts, project management and CV publishing as separate features. Pages serves static files. A separate authenticated service must perform privileged operations and publish approved static outputs. Decide the service, storage and credentials model before implementation.
4. Verify unauthorized writes are denied, draft content is private, failed publication preserves the prior release, the downloaded PDF matches its preview, and project links work on desktop and mobile. Publish the replacement homepage after owner review.

The first commit delivers the PRD and review mockup. The admin panel, generated or uploaded CV, public release and working learning applications are subsequent milestones.

[GitHub Pages hosting documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
