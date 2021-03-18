import { lazy } from "react";
const resolver = (resolver, name = "default") => {
  return lazy(async () => {
    const resolved = await resolver();
    return { default: resolved[name] };
  });
};

export default resolver;
