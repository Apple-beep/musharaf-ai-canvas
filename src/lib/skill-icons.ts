const normalizeSkillKey = (skill: string) => skill.trim().toLowerCase();

export const skillIconMap: Record<string, string> = {
  python: "/assets/images/python.svg",
  java: "/assets/images/java.svg",
  c: "/assets/images/c.svg",
  "c++": "/assets/images/cpp.svg",
  sql: "/assets/images/sql.svg",
  html: "/assets/images/html.svg",
  css: "/assets/images/css.svg",
  javascript: "/assets/images/javascript.svg",
  typescript: "/assets/images/typescript.svg",
  matlab: "/assets/images/mathematica.svg",
  "openai api": "/assets/images/openai.svg",
  openai: "/assets/images/openai.svg",
  "google gemini": "/assets/images/gcloud.svg",
  gemini: "/assets/images/gcloud.svg",
  "prompt engineering": "/assets/images/ml.svg",
  nlp: "/assets/images/ml.svg",
  pytorch: "/assets/images/pytorch.svg",
  tensorflow: "/assets/images/tensorflow.svg",
  pandas: "/assets/images/pandas.svg",
  numpy: "/assets/images/NumPy.svg",
  tableau: "/assets/images/tableau.svg",
  mysql: "/assets/images/sql.svg",
  postgresql: "/assets/images/post.svg",
  bigtable: "/assets/images/gcloud.svg",
  spanner: "/assets/images/gcloud.svg",
  "aws (ec2, s3, iam)": "/assets/images/aws.svg",
  aws: "/assets/images/aws.svg",
  docker: "/assets/images/docker.svg",
  kubernetes: "/assets/images/ocean.svg",
  serverless: "/assets/images/ocean.svg",
  "git/github": "/assets/images/git.svg",
  git: "/assets/images/git.svg",
  "vs code": "/assets/images/typescript.svg",
  "jupyter notebook": "/assets/images/python.svg",
  figma: "/assets/images/figma.svg",
  rest: "/assets/images/api.svg",
  firebase: "/assets/images/gcloud.svg",
  supabase: "/assets/images/post.svg",
};

export const getSkillIcon = (skill: string) => {
  return skillIconMap[normalizeSkillKey(skill)];
};

export { normalizeSkillKey };
