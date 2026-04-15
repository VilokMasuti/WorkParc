const rawJob = {
  id: "a5f43305-bd96-4064-a79b-e88d7ca26f64",
  title: "Criminal Investigator",
  description: "Hic explicabo id fugit debitis incidunt et...",
  company: "DuBuque, Block and Glover",
  location: "Tayabas, Bosnia and Herzegovina",
  salary_from: 72639,
  salary_to: 113043,
  employment_type: "Freelance Developer",
  application_deadline: "Thu, 09/28/2000",
  qualifications: `["2 years of Git experience","Expert in Java","4+ years in C++","2+ years in Ruby"]`,
  contact: "739-597-014",
  job_category: "Database Administrator",
  is_remote_work: 0,
  number_of_opening: 2,
  created_at: "Sun, 10/15/2023",
  updated_at: "Sun, 10/15/2023"
}

const normalizeJob = (rawJob) => {
  let qualifications = []

  try {
    qualifications = JSON.parse(rawJob.qualifications || "[]")
  } catch (error) {
    qualifications = []
  }

  return {
    id: rawJob.id || "",
    title: rawJob.title || "",
    company: rawJob.company || "",
    location: rawJob.location || "",
    salaryFrom: rawJob.salary_from || 0,
    salaryTo: rawJob.salary_to || 0,
    employmentType: rawJob.employment_type || "",
    deadline: rawJob.application_deadline || "",
    qualifications,
    category: rawJob.job_category || "",
    isRemote: Boolean(rawJob.is_remote_work),
    openings: rawJob.number_of_opening || 0,
    description: rawJob.description || "",
    contact: rawJob.contact || "",
    createdAt: rawJob.created_at || "",
    updatedAt: rawJob.updated_at || "",
    isSaved: false,
    status: "none"
  }
}
