import DOMINICAN_CITIES from "@/data/dominicanCities.json";

export const DEFAULT_COUNTRY = "DO";

function displayNameOf(isoCode) {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(isoCode) ?? isoCode;
  } catch {
    return isoCode;
  }
}

// Country list without shipping the country-state-city dataset (~8 MB).
// Shape matches the old Country.getAllCountries(): { isoCode, name }.
export function getCountries() {
  try {
    return Intl.supportedValuesOf("region")
      .map((isoCode) => ({ isoCode, name: displayNameOf(isoCode) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    return [{ isoCode: DEFAULT_COUNTRY, name: "Dominican Republic" }];
  }
}

export function getCountryName(isoCode) {
  return displayNameOf(isoCode);
}

// Local dataset: only Dominican cities, a few KB instead of the full
// world-cities database. Other countries fall back to a free-text field.
export function getCitiesOfCountry(isoCode) {
  return isoCode === DEFAULT_COUNTRY ? DOMINICAN_CITIES : [];
}
