interface CountryType {
  code: string;
  label: string;
  suggested?: boolean;
}

export const countries: readonly CountryType[] = [
  { code: "AD", label: "Andorra" },
  {
    code: "AE",
    label: "United Arab Emirates",
  },
  { code: "AF", label: "Afghanistan" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
  },
  { code: "AI", label: "Anguilla" },
  { code: "AL", label: "Albania" },
  { code: "AM", label: "Armenia" },
  { code: "AO", label: "Angola" },
  { code: "AQ", label: "Antarctica" },
  { code: "AR", label: "Argentina" },
  { code: "AS", label: "American Samoa" },
  { code: "AT", label: "Austria" },
  {
    code: "AU",
    label: "Australia",
    suggested: true,
  },
  { code: "AW", label: "Aruba" },
  { code: "AX", label: "Alland Islands" },
  { code: "AZ", label: "Azerbaijan" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
  },
];
