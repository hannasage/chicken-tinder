# Technical Synopsis

## User creation and authentication

All `Users` are created as database items in the SSO Portfolio MongoDB Atlas instance. All applications that I (Kevin Haube) make utilizes this sign-on service.

## Adding friends

Adding friends through the UI will require a request and an accept/decline stage. For this, the `User` item will have an array of user IDs of those who have requested friendship in a property called `friendRequests`. This list of IDs will populate a UI component where the active user can accpet or decline the request. Declined requests will be discarded, accepted requests will append the `friends` array of IDs on the `User` item.
