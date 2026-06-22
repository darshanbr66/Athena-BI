const STATE_MAP = {
  california: "CA",
  texas: "TX",
  florida: "FL",
  'new york': "NY",
  pennsylvania: "PA",
  illinois: "IL",
  massachusetts: "MA",
  virginia: "VA",
  washington: "WA",
  colorado: "CO",
  michigan: "MI",
  ohio: "OH",
  georgia: "GA",
  'new jersey': "NJ",
  arizona: "AZ",
  maryland: "MD",
  minnesota: "MN",
  oregon: "OR",
  wisconsin: "WI",
  missouri: "MO",
  indiana: "IN",
  connecticut: "CT",
  utah: "UT",
  nevada: "NV",
  'north carolina': "NC",
  'south carolina': "SC",
  'district of columbia': "DC"
};

export const preprocessQuestion = (question) => {
  let processedQuestion = question;

  for (const [stateName, stateCode] of Object.entries(STATE_MAP)) {

    const regex = new RegExp(stateName, "gi");

    processedQuestion =
      processedQuestion.replace(regex, stateCode);
  }

  return processedQuestion;
};