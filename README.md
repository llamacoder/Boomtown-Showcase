# Boomtown-Showcase

Deployed at smooth-current.surge.sh

Includes unit testing to fetch one of the sample companies (tests.js); Includes
browser testing to verify the title of the tab and to check for the presence of
one of the browser elements.  

I encountered difficulties with testing because I populate most of the pageSettings
via javascript, and it appears as though those items don't get loaded by the
time casperjs runs.  I'll investigate more.
