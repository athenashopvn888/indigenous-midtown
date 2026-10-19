/**
 * IMC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "IMC01",
  "fullName": "Indigenous Midtown Cannabis Dispensary Weed Delivery",
  "street": "93 Broadway Ave",
  "city": "Toronto",
  "region": "ON",
  "postal": "M4S 2A2",
  "phoneDisplay": "(437) 219-7367",
  "phoneTel": "tel:+14372197367",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ3Vc4E-gzK4gRIMLsAcKky2s",
  "placeId": "ChIJ3Vc4E-gzK4gRIMLsAcKky2s",
  "neighbourhood": "Broadway / Yonge\u2013Eglinton Midtown",
  "intersection": "Broadway Ave & Redpath Ave",
  "transit": "A short walk from Eglinton Station on Line 1. Walk north to Broadway Avenue, then east toward Redpath.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
