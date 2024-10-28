import { companies } from "../repository";

export const getCompanies = async () => {
  return Promise.resolve().then(() => companies);
};
