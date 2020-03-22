# Test Strategy

The test strategy is split into two vectors, technical completeness and end-user value streams.
Technical completeness verifies the overall completeness of the website whereas value stream testing targets the reason why the end-user arrived.

## https://finn.ai/solutions

### Technical completeness

#### Basic website navigation

Shared elements throughout the website, such as the navigation menu, should have a separate test suite. 
Individual webpages should only need to verify that shared elements load with a couple of spot checks for collisions and functionality (i.e. first and last items in drop down menu, left-most and right-most objects, etc.).

- Navigation menu
  - Desktop navigation is visible in desktop mode
  - Mobile navigation element is present
- All sections present
- All videos are visible and play properly
  - Verify auto-play where applicable
- Hover-over interactions for desktop

#### Branding
- Style check

#### Performance
- Web page performance should be conducted by a separate test suite, the following aspects should be considered.
  - render time
  - bandwidth use
- Webserver capacity should be tested separately from individual webpage performance. The following areas should be considered.
  - Webserver auto-scaling (if applicable)

#### Browser compatibility
Verify that page renders properly on all major browsers. All tests should be run against the following browsers and mobile variants.
- Chromium based browsers (Chrome)
- Firefox
- Safari

### Value streams

#### Case studies

- Verify link to case studies page works

#### Revenue generation
- Verify "Book a Demo" button at the bottom of the works
- Verify "Book a Demo" in the navigation menu works properly
  - This will likely be duplicated in the navigation menu