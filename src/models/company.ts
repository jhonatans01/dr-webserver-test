type IncomeStream = { id: number; name: string };

type Company = {
  uuid: string;
  name: string;
  tagline: string;
  total_jobs_available: number;
  images: Record<string, string>;
  income_streams: IncomeStream[];
  industries: IncomeStream[];
};

export type CompanyItems = {
  items: Company[];
  total: number;
};
