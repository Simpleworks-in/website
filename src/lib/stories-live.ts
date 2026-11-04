// Go-live switch for /client-success-stories.
//
// false: the page is `noindex`, left out of sitemap.xml and not
//                  linked from the footer.
// true:            `noindex` is removed, the page is added to sitemap.xml and
//                  a "Client stories" link appears in the top menu and footer.
//
// Flip to true only after the placeholder stories in /keystatic have been
// replaced and `permissionConfirmed` is ticked on at least one story.
export const STORIES_PAGE_LIVE = true;
